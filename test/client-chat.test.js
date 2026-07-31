const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const appSource = fs.readFileSync(path.resolve(__dirname, "../public/app.js"), "utf8");

test("AI chat uses the canonical server session and synchronizes messages", () => {
  const bindStart = appSource.indexOf("function bindChat()");
  const bindEnd = appSource.indexOf("\nfunction bindTools()", bindStart);
  assert.ok(bindStart >= 0 && bindEnd > bindStart);
  const bindChatSource = appSource.slice(bindStart, bindEnd);

  const startRequest = bindChatSource.indexOf('resilientApiPost("/api/live/start"');
  const startedState = bindChatSource.indexOf("started: true");
  const canonicalSession = bindChatSource.indexOf("sessionId: json.thread.id");
  const completedStart = bindChatSource.indexOf("finishStart(result.json)", startRequest);
  assert.ok(startRequest >= 0);
  assert.ok(startedState >= 0 && completedStart > startRequest, "UI must not enter started state before the server responds");
  assert.ok(canonicalSession >= 0, "UI must persist the canonical server thread ID");
  assert.match(
    bindChatSource,
    /sessionId: initialState\.sessionId \|\| \(initialState\.started \? currentLiveChatSession\(\) : ""\)/,
    "a new AI lead form must not inherit an unrelated floating-chat session"
  );

  const startRequestEnd = bindChatSource.indexOf("if (result.queued)", startRequest);
  const startPayloadSource = bindChatSource.slice(startRequest, startRequestEnd);
  assert.doesNotMatch(
    startPayloadSource,
    /sessionId:/,
    "a submitted AI lead form must let the server create a fresh chat thread"
  );
  assert.match(bindChatSource, /issue: lead\.issue\s*\n\s*}\);/, "the saved visitor issue must match the new AI chat");
  assert.doesNotMatch(
    bindChatSource,
    /if \(input && issue && !input\.value\) input\.value = issue;/,
    "the initial issue must not be duplicated into the reply box"
  );

  const sendStart = bindChatSource.indexOf("async function sendMessage");
  const sendEnd = bindChatSource.indexOf("\n  form.addEventListener", sendStart);
  const sendSource = bindChatSource.slice(sendStart, sendEnd);
  assert.match(sendSource, /await resilientApiPost\(/);
  assert.match(sendSource, /"\/api\/live\/message"/);
  assert.match(sendSource, /applyServerThread\(result\.json\.thread\)/);
  assert.doesNotMatch(sendSource, /\.catch\(\(\) => \{\}\)/);

  assert.match(bindChatSource, /\/api\/live\/thread\?sessionId=/);
  assert.match(bindChatSource, /aiChatPollTimer = setInterval/);
});

test("chat phone fields add the USA country code automatically", () => {
  const automaticCountryCodeLabels = appSource.match(/\+1 is added automatically\./g) || [];
  assert.equal(automaticCountryCodeLabels.length, 2);
  assert.match(appSource, /phone: normalizeChatPhone\(data\.phone\)/);
  assert.match(appSource, /data\.phone = normalizeChatPhone\(data\.phone\)/);
  assert.doesNotMatch(appSource, /phone \|\| "\+1 "/);
});

test("admin live polling preserves an active reply form", () => {
  const pollStart = appSource.indexOf("async function pollAdminLiveRealtime(content)");
  const pollEnd = appSource.indexOf("\nfunction adminLiveDashboard", pollStart);
  assert.ok(pollStart >= 0 && pollEnd > pollStart);
  const pollSource = appSource.slice(pollStart, pollEnd);
  assert.match(appSource, /function adminReplyIsActive\(\)/);
  assert.match(pollSource, /if \(adminReplyIsActive\(\)\)/);
  assert.match(pollSource, /return;\s*}\s*\n\s*const selectedId/);
});

test("public forms and chats use a persistent automatic-retry outbox", () => {
  assert.match(appSource, /ehc_pending_requests_v1/);
  assert.match(appSource, /localStorage\.setItem\(pendingRequestStorageKey/);
  assert.match(appSource, /window\.addEventListener\("online", flushPendingRequests\)/);
  assert.match(appSource, /setInterval\(flushPendingRequests, 4000\)/);
  assert.match(appSource, /clientRequestId: item\.id/);
  assert.equal((appSource.match(/resilientApiPost\("\/api\/contact"/g) || []).length, 2);
  assert.equal((appSource.match(/resilientApiPost\("\/api\/live\/start"/g) || []).length, 2);
  assert.equal((appSource.match(/resilientApiPost\(\s*"\/api\/live\/message"/g) || []).length, 2);
  const loadStart = appSource.indexOf("async function loadLiveChatThread(options = {})");
  const loadEnd = appSource.indexOf("\n  function scheduleLiveChatAutoOpen", loadStart);
  const loadSource = appSource.slice(loadStart, loadEnd);
  assert.match(loadSource, /error\.sessionMissing = response\.status === 404/);
  assert.match(loadSource, /if \(error\.sessionMissing\) \{\s*setCurrentLiveChatSession\(""\)/);
  assert.match(loadSource, /active chat is preserved and will reconnect automatically/);
});
