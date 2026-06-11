const http = require("http");
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const { URL } = require("url");

const PORT = Number(process.env.PORT || 3000);
const ADMIN_ID = process.env.ADMIN_ID || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const FALLBACK_ADMIN_PASSWORD_HASH = "e6178ee9cbe89eae6fbf0eacf486575697dc7a04dbd5e798a7b24c4939bf95c6";
const SESSION_TTL_MS = 1000 * 60 * 60 * 8;
const TICKET_TIMEZONE = process.env.TICKET_TIMEZONE || process.env.TZ || "Asia/Kolkata";
const AUTO_REPLY_MESSAGE = "Thank you. I will call you back shortly.";

const rootDir = __dirname;
const publicDir = path.join(rootDir, "public");
const dataDir = path.join(rootDir, "data");
const backupDir = path.join(dataDir, "backups");

const files = {
  submissions: path.join(dataDir, "submissions.json"),
  chats: path.join(dataDir, "chats.json"),
  visits: path.join(dataDir, "visits.json"),
  liveChats: path.join(dataDir, "live-chats.json")
};

const sessions = new Map();
const liveTypingStates = new Map();
const TYPING_TTL_MS = 2500;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".ico": "image/x-icon"
};

async function ensureDataFiles() {
  await fsp.mkdir(dataDir, { recursive: true });
  await Promise.all(
    Object.values(files).map(async (file) => {
      try {
        await fsp.access(file);
      } catch {
        await fsp.writeFile(file, "[]\n", "utf8");
      }
    })
  );
}

async function readJson(file) {
  await ensureDataFiles();
  try {
    const raw = (await fsp.readFile(file, "utf8")).replace(/^\uFEFF/, "");
    return JSON.parse(raw || "[]");
  } catch {
    return [];
  }
}

async function writeJson(file, value) {
  await ensureDataFiles();
  const payload = `${JSON.stringify(value, null, 2)}\n`;
  const tempFile = `${file}.${process.pid}.${Date.now()}.tmp`;
  let lastError = null;
  for (let attempt = 0; attempt < 6; attempt += 1) {
    try {
      await fsp.writeFile(tempFile, payload, "utf8");
      await fsp.rename(tempFile, file);
      return;
    } catch (error) {
      lastError = error;
      await fsp.unlink(tempFile).catch(() => {});
      if (!["EBUSY", "EPERM", "EACCES"].includes(error.code)) throw error;
      await new Promise((resolve) => setTimeout(resolve, 120 * (attempt + 1)));
    }
  }
  throw lastError;
}

function backupTimestamp() {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

async function pruneLiveChatBackups(limit = 50) {
  try {
    const entries = (await fsp.readdir(backupDir, { withFileTypes: true }))
      .filter((entry) => entry.isFile() && /^live-chats-\d{4}-\d{2}-\d{2}-\d{6}(?:-\d+)?\.json$/.test(entry.name))
      .map((entry) => entry.name)
      .sort()
      .reverse();
    await Promise.all(entries.slice(limit).map((name) => fsp.unlink(path.join(backupDir, name)).catch(() => {})));
  } catch {
    // Backup pruning should never block the live chat write path.
  }
}

async function backupLiveChatsFile() {
  try {
    await fsp.mkdir(backupDir, { recursive: true });
    await fsp.access(files.liveChats);
    const stamp = backupTimestamp();
    let backupPath = path.join(backupDir, `live-chats-${stamp}.json`);
    for (let index = 1; fs.existsSync(backupPath); index += 1) {
      backupPath = path.join(backupDir, `live-chats-${stamp}-${index}.json`);
    }
    await fsp.copyFile(files.liveChats, backupPath);
    await pruneLiveChatBackups();
  } catch {
    // If the first write happens before the file exists, continue normally.
  }
}

async function appendJson(file, item) {
  const rows = await readJson(file);
  rows.unshift(item);
  await writeJson(file, rows.slice(0, 1000));
  return item;
}

function send(res, status, body, contentType = "application/json; charset=utf-8", headers = {}) {
  const payload = typeof body === "string" ? body : JSON.stringify(body);
  res.writeHead(status, {
    "Content-Type": contentType,
    "Content-Length": Buffer.byteLength(payload),
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    ...headers
  });
  res.end(payload);
}

function notFound(res) {
  send(res, 404, { ok: false, error: "Not found" });
}

function parseCookies(req) {
  const raw = req.headers.cookie || "";
  return Object.fromEntries(
    raw
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const index = part.indexOf("=");
        if (index === -1) return [part, ""];
        return [decodeURIComponent(part.slice(0, index)), decodeURIComponent(part.slice(index + 1))];
      })
  );
}

function createSession() {
  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, { createdAt: Date.now(), expiresAt: Date.now() + SESSION_TTL_MS });
  return token;
}

function isValidAdminLogin(adminId, password) {
  const passwordHash = crypto.createHash("sha256").update(password).digest("hex");
  return (adminId === ADMIN_ID || adminId === "admin") && (password === ADMIN_PASSWORD || passwordHash === FALLBACK_ADMIN_PASSWORD_HASH);
}

function isAuthed(req) {
  const token = parseCookies(req).ehc_session;
  const session = token ? sessions.get(token) : null;
  if (!session) return false;
  if (session.expiresAt < Date.now()) {
    sessions.delete(token);
    return false;
  }
  session.expiresAt = Date.now() + SESSION_TTL_MS;
  return true;
}

async function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        reject(new Error("Request too large"));
        req.destroy();
      }
    });
    req.on("end", () => {
      const contentType = req.headers["content-type"] || "";
      try {
        if (contentType.includes("application/json")) {
          resolve(body ? JSON.parse(body) : {});
          return;
        }
        const params = new URLSearchParams(body);
        resolve(Object.fromEntries(params.entries()));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function cleanText(value, max = 5000) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .trim()
    .slice(0, max);
}

function redactSecrets(value) {
  return cleanText(value)
    .replace(/\b(password|passcode|otp|2fa|verification\s*code|security\s*code)\s*[:=]\s*\S+/gi, "$1: [redacted]")
    .replace(/\b(\d{4,8})\b(?=.*\b(otp|2fa|verification|security code)\b)/gi, "[redacted-code]");
}

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ""));
}

function validPhone(value) {
  return /^[+\d][\d\s().-]{6,24}$/.test(String(value || ""));
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.trim()) return forwarded.split(",")[0].trim();
  return req.socket.remoteAddress || "";
}

function jsonError(res, status, message) {
  send(res, status, { ok: false, error: message });
}

function createTicketId(prefix = "EHC") {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: TICKET_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const date = `${values.year}${values.month}${values.day}`;
  const code = crypto.randomBytes(3).toString("hex").toUpperCase();
  return `${prefix}-${date}-${code}`;
}

function normalizeLiveLookupValue(value) {
  return cleanText(value, 240)
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function providerFromMessage(message) {
  const lowered = message.toLowerCase();
  const providers = [
    ["gmail", "Gmail"],
    ["google", "Gmail"],
    ["outlook", "Outlook"],
    ["hotmail", "Outlook"],
    ["yahoo", "Yahoo Mail"],
    ["icloud", "iCloud Mail"],
    ["aol", "AOL Mail"],
    ["proton", "Proton Mail"],
    ["verizon", "Verizon"],
    ["xfinity", "Xfinity"],
    ["comcast", "Xfinity"],
    ["att", "AT&T"],
    ["bt", "BT Mail"],
    ["orange", "Orange Mail"],
    ["telstra", "Telstra Mail"]
  ];
  const match = providers.find(([key]) => lowered.includes(key));
  return match ? match[1] : "your email provider";
}

function chatReply(message) {
  const text = message.toLowerCase();
  const provider = providerFromMessage(text);
  const safety =
    "Please do not share passwords, OTPs, recovery codes, payment details, or private mailbox content here.";

  if (/\b(password|forgot|reset|login|sign in|signin)\b/.test(text)) {
    return `${safety}\n\nFor ${provider} password or sign-in issues:\n1. Open the official ${provider} website directly in your browser.\n2. Choose the official forgot password or account recovery option.\n3. Verify recovery email/phone only on the official page.\n4. After access returns, update recovery info and enable 2-step verification.\n5. If you see suspicious activity, sign out of all devices from account security settings.`;
  }

  if (/\b(hacked|compromised|stolen|unauthorized|breach)\b/.test(text)) {
    return `${safety}\n\nIf the account may be compromised:\n1. Use the official account recovery page immediately.\n2. Change the password from a trusted device.\n3. Remove unknown forwarding rules, filters, app passwords, and connected apps.\n4. Review recent sign-in activity.\n5. Warn contacts if suspicious email was sent from your account.`;
  }

  if (/\b(not receiving|missing|inbox|delivery|receive|spam|junk)\b/.test(text)) {
    return `Try these delivery checks for ${provider}:\n1. Search all mail, spam/junk, trash, and archive folders.\n2. Check filters, blocked senders, and forwarding rules.\n3. Confirm mailbox storage is not full.\n4. Ask the sender to verify the address and resend without large attachments.\n5. Check the provider status page for outages.`;
  }

  if (/\b(mobile|iphone|android|imap|smtp|pop|setup|settings)\b/.test(text)) {
    return `For device setup:\n1. Prefer the official ${provider} app when available.\n2. If using a mail app, enable IMAP in provider settings.\n3. Use SSL/TLS and the provider's official IMAP/SMTP server names.\n4. For accounts with 2-step verification, generate an app password only from the official provider security page.\n5. Remove and re-add the account if sync remains stuck.`;
  }

  if (/\b(storage|quota|full|space)\b/.test(text)) {
    return `To free mailbox space:\n1. Sort by largest messages and delete attachments you no longer need.\n2. Empty spam and trash after reviewing them.\n3. Search for newsletters and old promotions in bulk.\n4. Download important attachments before deleting messages.\n5. Recheck storage after a few minutes, because provider quotas can update slowly.`;
  }

  if (/\b(attachment|file|download|upload)\b/.test(text)) {
    return `Attachment troubleshooting:\n1. Check file size and blocked file types.\n2. Compress large files or share a cloud link.\n3. Try another browser or clear the browser cache.\n4. Disable extensions that scan downloads temporarily.\n5. If the file is sensitive, confirm the sender before opening it.`;
  }

  if (/\b(reply|write|draft|response)\b/.test(text)) {
    return `I can help draft a reply. Use the Reply Generator page for tone and length controls. Keep private account numbers, passwords, and confidential mailbox content out of the prompt.`;
  }

  return `${safety}\n\nTell me the provider and issue in one sentence, for example: "Gmail not receiving emails" or "Outlook setup on iPhone." I can then give a focused checklist.`;
}

function liveBotSteps(message, company) {
  const answer = chatReply(`${company || ""} ${message}`.trim());
  const lines = answer
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
  const numbered = lines
    .filter((line) => /^\d+\./.test(line))
    .map((line) => line.replace(/^\d+\.\s*/, ""));
  const intro = lines.find((line) => !/^\d+\./.test(line) && !/passwords|otps|recovery codes|payment details|private mailbox/i.test(line)) || "I can help with this email issue.";
  const steps = numbered.length ? numbered : [intro];
  return { intro, steps };
}

function liveBotReply(message, company, stepIndex = 0) {
  const { intro, steps } = liveBotSteps(message, company);
  const index = Math.max(0, Math.min(stepIndex, steps.length - 1));
  const prefix = index === 0 ? `Email Bot${company ? ` (${company})` : ""}: ${intro}` : "Email Bot: next step";
  return `${prefix}\nStep ${index + 1}: ${steps[index]}\nReply done for next step.`;
}

function publicLiveThread(thread) {
  return {
    id: thread.id,
    ticketId: thread.ticketId,
    status: thread.status,
    visitor: thread.visitor,
    createdAt: thread.createdAt,
    updatedAt: thread.updatedAt,
    messages: thread.messages || []
  };
}

function createLiveThread(req, visitor = {}, messages = []) {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    ticketId: createTicketId("LIV"),
    visitor: {
      name: visitor.name || "Anonymous Visitor",
      phone: visitor.phone || "",
      email: visitor.email || "",
      company: visitor.company || "",
      issue: visitor.issue || "",
      sourcePage: visitor.sourcePage || "",
      profileComplete: Boolean(visitor.profileComplete)
    },
    status: "open",
    createdAt: now,
    updatedAt: now,
    ip: getClientIp(req),
    userAgent: req.headers["user-agent"] || "",
    messages
  };
}

function pruneLiveTypingStates() {
  const now = Date.now();
  for (const [threadId, state] of liveTypingStates.entries()) {
    if (state.visitorUntil <= now && state.agentUntil <= now) {
      liveTypingStates.delete(threadId);
    }
  }
}

function setLiveTyping(threadId, role, typing) {
  if (!threadId || !["visitor", "agent"].includes(role)) return typingSnapshot(threadId);
  pruneLiveTypingStates();
  const state = liveTypingStates.get(threadId) || { visitorUntil: 0, agentUntil: 0 };
  state[`${role}Until`] = typing ? Date.now() + TYPING_TTL_MS : 0;
  if (state.visitorUntil || state.agentUntil) liveTypingStates.set(threadId, state);
  else liveTypingStates.delete(threadId);
  return typingSnapshot(threadId);
}

function typingSnapshot(threadId) {
  pruneLiveTypingStates();
  const state = liveTypingStates.get(threadId) || {};
  const now = Date.now();
  return {
    visitorTyping: Boolean(state.visitorUntil && state.visitorUntil > now),
    agentTyping: Boolean(state.agentUntil && state.agentUntil > now)
  };
}

function isLiveOnline(thread) {
  const updatedAt = new Date(thread.updatedAt || thread.createdAt || 0).getTime();
  return Date.now() - updatedAt < 5 * 60 * 1000;
}

function liveChatSummary(thread) {
  const messages = thread.messages || [];
  const lastMessage = messages[messages.length - 1] || null;
  const visitorMessages = messages.filter((message) => message.from === "visitor");
  const agentMessages = messages.filter((message) => message.from === "agent" && message.name !== "Email Bot");
  const unreadVisitorMessages = messages.filter((message) => message.from === "visitor" && !message.readByAdmin);
  return {
    id: thread.id,
    ticketId: thread.ticketId,
    visitor: thread.visitor,
    status: thread.status,
    currentPage: thread.visitor?.sourcePage || "",
    online: isLiveOnline(thread),
    ip: thread.ip || "",
    userAgent: thread.userAgent || "",
    createdAt: thread.createdAt,
    updatedAt: thread.updatedAt,
    messageCount: messages.length,
    visitorMessageCount: visitorMessages.length,
    agentMessageCount: agentMessages.length,
    unread: unreadVisitorMessages.length,
    unreadVisitorMessageIds: unreadVisitorMessages.map((message) => message.id),
    lastMessage,
    typing: typingSnapshot(thread.id)
  };
}

async function readLiveChats() {
  const rows = await readJson(files.liveChats);
  return Array.isArray(rows) ? rows : [];
}

async function writeLiveChats(rows) {
  await backupLiveChatsFile();
  await writeJson(files.liveChats, rows);
}

function makeLiveMessage(from, text, name, extra = {}) {
  return {
    id: crypto.randomUUID(),
    from,
    name: cleanText(name, 120) || (from === "agent" ? "Support Team" : "Visitor"),
    text: redactSecrets(text),
    createdAt: new Date().toISOString(),
    readByAdmin: from !== "visitor",
    ...extra
  };
}

function hasAutoReply(thread) {
  return (thread.messages || []).some((message) => message.autoReply === true);
}

function addAutoReplyIfMissing(thread) {
  thread.messages = thread.messages || [];
  if (!hasAutoReply(thread)) {
    thread.messages.push(makeLiveMessage("agent", AUTO_REPLY_MESSAGE, "Support Team", { autoReply: true, senderType: "auto-reply" }));
  }
  return thread;
}

async function updateLiveChat(threadId, updater) {
  const rows = await readLiveChats();
  const index = rows.findIndex((thread) => thread.id === threadId);
  if (index === -1) return null;
  const updated = updater(rows[index]);
  rows[index] = updated;
  rows.sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));
  await writeLiveChats(rows);
  return updated;
}

async function handleApi(req, res, url) {
  if (req.method === "OPTIONS") {
    send(res, 204, "", "text/plain; charset=utf-8");
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/contact") {
    const body = await readBody(req);
    const name = cleanText(body.name, 120);
    const phone = cleanText(body.phone, 40);
    const email = cleanText(body.email, 180);
    const subject = cleanText(body.subject, 180);
    const category = cleanText(body.category, 80);
    const sourcePage = cleanText(body.sourcePage || req.headers.referer || "", 240);
    const message = redactSecrets(body.message);

    if (!name || !validEmail(email) || !subject || !message) {
      jsonError(res, 400, "Name, valid email, subject, and message are required.");
      return;
    }

    if (phone && !validPhone(phone)) {
      jsonError(res, 400, "Enter a valid phone number.");
      return;
    }

    const record = {
      id: crypto.randomUUID(),
      ticketId: createTicketId("SUP"),
      name,
      phone,
      email,
      subject,
      category,
      sourcePage,
      message,
      status: "new",
      createdAt: new Date().toISOString(),
      ip: getClientIp(req),
      userAgent: req.headers["user-agent"] || ""
    };
    await appendJson(files.submissions, record);
    send(res, 201, {
      ok: true,
      id: record.id,
      ticketId: record.ticketId,
      message: "Thanks. Your request was submitted.",
      destination: "Admin Panel > Support Forms",
      adminPath: "/admin/support"
    });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/chat") {
    const body = await readBody(req);
    const sessionId = cleanText(body.sessionId, 120) || crypto.randomUUID();
    const message = redactSecrets(body.message);
    if (!message) {
      jsonError(res, 400, "Message is required.");
      return;
    }

    const answer = chatReply(message);
    const record = {
      id: crypto.randomUUID(),
      sessionId,
      userMessage: message,
      assistantMessage: answer,
      createdAt: new Date().toISOString(),
      ip: getClientIp(req)
    };
    await appendJson(files.chats, record);
    send(res, 201, { ok: true, sessionId, answer, id: record.id });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/live/start") {
    const body = await readBody(req);
    const sessionId = cleanText(body.sessionId, 120);
    const name = cleanText(body.name, 120);
    const phone = cleanText(body.phone, 40);
    const email = cleanText(body.email, 180);
    const company = cleanText(body.company, 120);
    const sourcePage = cleanText(body.sourcePage || req.headers.referer || "", 240);
    const issue = redactSecrets(body.issue || body.message);

    if (!name || !phone || !email || !company || !issue) {
      jsonError(res, 400, "Name, phone, email, company, and issue are required.");
      return;
    }

    if (!validPhone(phone)) {
      jsonError(res, 400, "Enter a valid phone number.");
      return;
    }

    if (!validEmail(email)) {
      jsonError(res, 400, "Enter a valid email address.");
      return;
    }

    const visitorMessage = makeLiveMessage("visitor", issue, name);
    const initialMessages = [
        visitorMessage,
        makeLiveMessage(
          "agent",
          AUTO_REPLY_MESSAGE,
          "Support Team",
          { autoReply: true, senderType: "auto-reply" }
        ),
        makeLiveMessage(
          "agent",
          "Chat started. Admin can see this ticket.",
          "Support Team"
        ),
        makeLiveMessage(
          "agent",
          liveBotReply(issue, company, 0),
          "Email Bot"
        )
      ];

    const rows = await readLiveChats();
    const existingIndex = rows.findIndex((row) => row.id === sessionId);
    let thread;
    if (existingIndex !== -1) {
      thread = rows[existingIndex];
      const hadVisitorMessages = (thread.messages || []).some((message) => message.from === "visitor");
      thread.visitor = { name, phone, email, company, issue, sourcePage, profileComplete: true };
      thread.status = "open";
      thread.updatedAt = new Date().toISOString();
      thread.messages = Array.isArray(thread.messages) ? thread.messages : [];
      if (!thread.messages.length) {
        thread.messages = initialMessages;
      } else if (!hadVisitorMessages) {
        thread.messages.unshift(visitorMessage);
      }
      addAutoReplyIfMissing(thread);
      rows[existingIndex] = thread;
      rows.sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));
    } else {
      thread = createLiveThread(req, { name, phone, email, company, issue, sourcePage, profileComplete: true }, initialMessages);
      rows.unshift(thread);
    }
    await writeLiveChats(rows);
    send(res, 201, { ok: true, thread: publicLiveThread(thread) });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/live/open") {
    const body = await readBody(req);
    const sessionId = cleanText(body.sessionId, 120);
    const sourcePage = cleanText(body.sourcePage || req.headers.referer || "", 240);
    const rows = await readLiveChats();
    let thread = rows.find((row) => row.id === sessionId);
    if (thread) {
      thread.status = "open";
      thread.updatedAt = new Date().toISOString();
      thread.visitor = { ...(thread.visitor || {}), sourcePage: thread.visitor?.sourcePage || sourcePage };
      await writeLiveChats(rows);
      send(res, 200, { ok: true, thread: publicLiveThread(thread), created: false });
      return;
    }
    thread = createLiveThread(req, { sourcePage, profileComplete: false }, []);
    rows.unshift(thread);
    await writeLiveChats(rows);
    send(res, 201, { ok: true, thread: publicLiveThread(thread), created: true });
    return;
  }

  if (req.method === "GET" && url.pathname === "/api/live/thread") {
    const sessionId = cleanText(url.searchParams.get("sessionId"), 120);
    const thread = (await readLiveChats()).find((row) => row.id === sessionId);
    if (!thread) {
      jsonError(res, 404, "Live chat session was not found.");
      return;
    }
    send(res, 200, { ok: true, thread: publicLiveThread(thread), typing: typingSnapshot(sessionId) });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/live/typing") {
    const body = await readBody(req);
    const sessionId = cleanText(body.sessionId, 120);
    const thread = (await readLiveChats()).find((row) => row.id === sessionId);
    if (!thread) {
      jsonError(res, 404, "Live chat session was not found.");
      return;
    }
    const typing = Boolean(body.typing);
    send(res, 200, { ok: true, typing: setLiveTyping(sessionId, "visitor", typing) });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/live/message") {
    const body = await readBody(req);
    const sessionId = cleanText(body.sessionId, 120);
    const message = redactSecrets(body.message);

    if (!sessionId || !message) {
      jsonError(res, 400, "Session and message are required.");
      return;
    }

    const updated = await updateLiveChat(sessionId, (thread) => {
      thread.messages = thread.messages || [];
      thread.messages.push(makeLiveMessage("visitor", message, thread.visitor?.name || "Visitor"));
      addAutoReplyIfMissing(thread);
      const previousBotSteps = thread.messages.filter((item) => item.from === "agent" && item.name === "Email Bot").length;
      thread.messages.push(makeLiveMessage("agent", liveBotReply(thread.visitor?.issue || message, thread.visitor?.company, previousBotSteps), "Email Bot"));
      thread.status = "open";
      thread.updatedAt = new Date().toISOString();
      return thread;
    });

    if (!updated) {
      jsonError(res, 404, "Live chat session was not found.");
      return;
    }

    setLiveTyping(sessionId, "visitor", false);
    send(res, 201, { ok: true, thread: publicLiveThread(updated), typing: typingSnapshot(sessionId) });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/live/close") {
    const body = await readBody(req);
    const sessionId = cleanText(body.sessionId, 120);
    const updated = await updateLiveChat(sessionId, (thread) => {
      thread.status = "closed";
      thread.updatedAt = new Date().toISOString();
      return thread;
    });

    if (!updated) {
      jsonError(res, 404, "Live chat session was not found.");
      return;
    }

    send(res, 200, { ok: true, thread: publicLiveThread(updated) });
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/admin/login") {
    const body = await readBody(req);
    const adminId = cleanText(body.adminId || body.username || body.id, 120);
    if (!isValidAdminLogin(adminId, cleanText(body.password, 200))) {
      jsonError(res, 401, "Invalid admin ID or password.");
      return;
    }
    const token = createSession();
    send(
      res,
      200,
      { ok: true },
      "application/json; charset=utf-8",
      {
        "Set-Cookie": `ehc_session=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/; Max-Age=${Math.floor(
          SESSION_TTL_MS / 1000
        )}`
      }
    );
    return;
  }

  if (req.method === "POST" && url.pathname === "/api/admin/logout") {
    const token = parseCookies(req).ehc_session;
    if (token) sessions.delete(token);
    send(res, 200, { ok: true }, "application/json; charset=utf-8", {
      "Set-Cookie": "ehc_session=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0"
    });
    return;
  }

  if (url.pathname.startsWith("/api/admin/")) {
    if (!isAuthed(req)) {
      jsonError(res, 401, "Admin login required.");
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/admin/stats") {
      const [leads, chats, visits, liveChats] = await Promise.all([
        readJson(files.submissions),
        readJson(files.chats),
        readJson(files.visits),
        readLiveChats()
      ]);
      send(res, 200, {
        ok: true,
        stats: {
          leads: leads.length,
          chatMessages: chats.length,
          visits: visits.length,
          liveChats: liveChats.length,
          openLiveChats: liveChats.filter((thread) => thread.status === "open").length,
          waitingChats: liveChats.filter((thread) => thread.status === "open" && (thread.messages || []).some((message) => message.from === "visitor" && !message.readByAdmin)).length,
          missedChats: liveChats.filter((thread) => thread.status === "closed" && (thread.messages || []).some((message) => message.from === "visitor" && !message.readByAdmin)).length,
          onlineLiveChats: liveChats.filter((thread) => thread.status === "open" && isLiveOnline(thread)).length,
          latestLeadAt: leads[0]?.createdAt || null,
          latestChatAt: chats[0]?.createdAt || null,
          latestLiveChatAt: liveChats[0]?.updatedAt || null
        }
      });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/admin/leads") {
      send(res, 200, { ok: true, rows: await readJson(files.submissions) });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/admin/chats") {
      send(res, 200, { ok: true, rows: await readJson(files.chats) });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/admin/visits") {
      send(res, 200, { ok: true, rows: await readJson(files.visits) });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/admin/live") {
      const filter = cleanText(url.searchParams.get("status"), 40).toLowerCase();
      const rows = (await readLiveChats()).sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt));
      const filteredRows = filter && filter !== "all" ? rows.filter((row) => String(row.status || "open").toLowerCase() === filter) : rows;
      send(res, 200, { ok: true, filter: filter || "all", rows: filteredRows.map(liveChatSummary) });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/admin/live/thread") {
      const threadId = cleanText(url.searchParams.get("id"), 120);
      const updated = await updateLiveChat(threadId, (thread) => {
        thread.messages = (thread.messages || []).map((message) =>
          message.from === "visitor" ? { ...message, readByAdmin: true } : message
        );
        return thread;
      });
      if (!updated) {
        jsonError(res, 404, "Live chat thread was not found.");
        return;
      }
      send(res, 200, { ok: true, thread: updated, typing: typingSnapshot(threadId) });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/admin/live/typing") {
      const body = await readBody(req);
      const threadId = cleanText(body.id, 120);
      const thread = (await readLiveChats()).find((row) => row.id === threadId);
      if (!thread) {
        jsonError(res, 404, "Live chat thread was not found.");
        return;
      }
      const typing = Boolean(body.typing);
      send(res, 200, { ok: true, typing: setLiveTyping(threadId, "agent", typing) });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/admin/live/reply") {
      const body = await readBody(req);
      const threadId = cleanText(body.id, 120);
      const message = redactSecrets(body.message);
      const agentName = cleanText(body.agentName, 120) || "Support Team";

      if (!threadId || !message) {
        jsonError(res, 400, "Thread and message are required.");
        return;
      }

      const updated = await updateLiveChat(threadId, (thread) => {
        thread.messages = thread.messages || [];
        thread.messages.push(makeLiveMessage("agent", message, agentName));
        thread.status = "open";
        thread.updatedAt = new Date().toISOString();
        return thread;
      });

      if (!updated) {
        jsonError(res, 404, "Live chat thread was not found.");
        return;
      }

      setLiveTyping(threadId, "agent", false);
      send(res, 201, { ok: true, thread: updated, typing: typingSnapshot(threadId) });
      return;
    }

    if (req.method === "POST" && url.pathname === "/api/admin/live/status") {
      const body = await readBody(req);
      const threadId = cleanText(body.id, 120);
      const status = cleanText(body.status, 20) === "closed" ? "closed" : "open";
      const updated = await updateLiveChat(threadId, (thread) => {
        thread.status = status;
        thread.updatedAt = new Date().toISOString();
        return thread;
      });

      if (!updated) {
        jsonError(res, 404, "Live chat thread was not found.");
        return;
      }

      send(res, 200, { ok: true, thread: updated });
      return;
    }

    if (req.method === "GET" && url.pathname === "/api/admin/export") {
      const [leads, chats, visits, liveChats] = await Promise.all([
        readJson(files.submissions),
        readJson(files.chats),
        readJson(files.visits),
        readLiveChats()
      ]);
      send(res, 200, { ok: true, exportedAt: new Date().toISOString(), leads, chats, visits, liveChats });
      return;
    }
  }

  notFound(res);
}

async function recordVisit(req, url) {
  if (req.method !== "GET") return;
  if (url.pathname.startsWith("/api/") || url.pathname.includes(".")) return;
  const normalizedPath = url.pathname.replace(/\/+$/, "") || "/";
  if (normalizedPath === "/admin" || normalizedPath.startsWith("/admin/") || normalizedPath === "/auth" || normalizedPath.startsWith("/auth/")) return;
  const visit = {
    id: crypto.randomUUID(),
    path: url.pathname,
    query: url.search,
    at: new Date().toISOString(),
    ip: getClientIp(req),
    userAgent: req.headers["user-agent"] || "",
    referrer: req.headers.referer || ""
  };
  try {
    await appendJson(files.visits, visit);
  } catch {
    // Analytics should never block the page response.
  }
}

function safePublicPath(urlPathname) {
  const decoded = decodeURIComponent(urlPathname);
  const requested = decoded === "/" ? "/index.html" : decoded;
  const normalized = path.normalize(requested).replace(/^(\.\.[/\\])+/, "");
  const absolute = path.join(publicDir, normalized);
  if (!absolute.startsWith(publicDir)) return null;
  return absolute;
}

async function serveStaticOrApp(req, res, url) {
  await recordVisit(req, url);
  let filePath = safePublicPath(url.pathname);
  if (!filePath) {
    notFound(res);
    return;
  }

  try {
    const stats = await fsp.stat(filePath);
    if (stats.isDirectory()) filePath = path.join(filePath, "index.html");
    const data = await fsp.readFile(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const cacheControl = [".html", ".css", ".js"].includes(ext) ? "no-cache" : "public, max-age=3600";
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": cacheControl
    });
    res.end(data);
  } catch {
    const app = await fsp.readFile(path.join(publicDir, "index.html"));
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" });
    res.end(app);
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  try {
    if (url.pathname.startsWith("/api/")) {
      await handleApi(req, res, url);
      return;
    }
    await serveStaticOrApp(req, res, url);
  } catch (error) {
    console.error(error);
    jsonError(res, 500, "Server error.");
  }
});

ensureDataFiles()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Email Help Center running at http://localhost:${PORT}`);
      console.log("Admin login: /admin/login");
      console.log("Default ADMIN_ID is admin and ADMIN_PASSWORD is admin123. Change both before production use.");
    });
  })
  .catch((error) => {
    console.error("Failed to initialize data files", error);
    process.exit(1);
  });
