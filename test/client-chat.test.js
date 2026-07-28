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

  const startRequest = bindChatSource.indexOf('fetch(apiUrl("/api/live/start")');
  const startedState = bindChatSource.indexOf("started: true", startRequest);
  const canonicalSession = bindChatSource.indexOf("sessionId: json.thread.id", startRequest);
  assert.ok(startRequest >= 0);
  assert.ok(startedState > startRequest, "UI must not enter started state before the server responds");
  assert.ok(canonicalSession > startRequest, "UI must persist the canonical server thread ID");

  const sendStart = bindChatSource.indexOf("async function sendMessage");
  const sendEnd = bindChatSource.indexOf("\n  form.addEventListener", sendStart);
  const sendSource = bindChatSource.slice(sendStart, sendEnd);
  assert.match(sendSource, /await fetch\(apiUrl\("\/api\/live\/message"\)/);
  assert.match(sendSource, /await readApiJson\(response\)/);
  assert.match(sendSource, /applyServerThread\(json\.thread\)/);
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
