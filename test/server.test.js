const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const net = require("node:net");
const os = require("node:os");
const path = require("node:path");
const { spawn, spawnSync } = require("node:child_process");

const dataDir = path.join(os.tmpdir(), `email-help-center-test-${process.pid}`);
process.env.EHC_DATA_DIR = dataDir;
process.env.PORT = "0";
process.env.ADMIN_ID = "test-admin";
process.env.ADMIN_PASSWORD = "Test-Password-987!";
process.env.NODE_ENV = "test";
process.env.EHC_DISABLE_AUTO_START = "1";

const { server, startServer } = require("../server");

async function request(baseUrl, pathname, options = {}) {
  return fetch(`${baseUrl}${pathname}`, options);
}

test("server security and concurrent persistence", async (t) => {
  await fs.mkdir(dataDir, { recursive: true });
  await Promise.all(
    ["submissions.json", "chats.json", "visits.json", "live-chats.json"].map((name) =>
      fs.writeFile(path.join(dataDir, name), "[]\n", "utf8")
    )
  );
  await startServer();
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  t.after(async () => {
    await new Promise((resolve, reject) => {
      server.close((error) => error ? reject(error) : resolve());
    });
    await fs.rm(dataDir, { recursive: true, force: true });
  });

  await t.test("serves the app with security headers and no wildcard CORS", async () => {
    const response = await request(baseUrl, "/");
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.equal(response.headers.get("x-frame-options"), "DENY");
    assert.equal(response.headers.get("access-control-allow-origin"), null);
  });

  let adminCookie = "";
  await t.test("accepts only the configured admin credential pair", async () => {
    const defaultLogin = await request(baseUrl, "/api/admin/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ adminId: "admin", password: "Login@123" })
    });
    assert.equal(defaultLogin.status, 401);

    const configuredLogin = await request(baseUrl, "/api/admin/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ adminId: "test-admin", password: "Test-Password-987!" })
    });
    assert.equal(configuredLogin.status, 200);
    adminCookie = configuredLogin.headers.get("set-cookie");
    assert.match(adminCookie, /HttpOnly/);
    assert.match(adminCookie, /SameSite=Strict/);
  });

  await t.test("preserves every concurrent contact submission", async () => {
    const count = 20;
    const responses = await Promise.all(
      Array.from({ length: count }, (_, index) =>
        request(baseUrl, "/api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name: `Visitor ${index}`,
            email: `visitor${index}@example.com`,
            subject: `Question ${index}`,
            message: `Message ${index}`
          })
        })
      )
    );
    assert.ok(responses.every((response) => response.status === 201));

    const leads = await request(baseUrl, "/api/admin/leads", {
      headers: { cookie: adminCookie }
    });
    assert.equal(leads.status, 200);
    assert.equal((await leads.json()).rows.length, count);
  });

  await t.test("returns and accepts the canonical server live-chat ID", async () => {
    const clientSessionId = "temporary-client-session";
    const started = await request(baseUrl, "/api/live/start", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        sessionId: clientSessionId,
        name: "Chat Tester",
        phone: "+1 415 555 0198",
        email: "chat-tester@example.com",
        company: "Gmail",
        issue: "Test chat sync"
      })
    });
    assert.equal(started.status, 201);
    const startedBody = await started.json();
    assert.ok(startedBody.thread.id);
    assert.notEqual(startedBody.thread.id, clientSessionId);

    const sent = await request(baseUrl, "/api/live/message", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        sessionId: startedBody.thread.id,
        message: "Message sent with canonical server ID"
      })
    });
    assert.equal(sent.status, 201);
  });

  await t.test("preserves concurrent messages in one live-chat thread", async () => {
    const opened = await request(baseUrl, "/api/live/open", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ sourcePage: "/test" })
    });
    const openedBody = await opened.json();
    const sessionId = openedBody.thread.id;
    const count = 12;

    const responses = await Promise.all(
      Array.from({ length: count }, (_, index) =>
        request(baseUrl, "/api/live/message", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ sessionId, message: `Concurrent message ${index}` })
        })
      )
    );
    assert.ok(responses.every((response) => response.status === 201));

    const thread = await request(baseUrl, `/api/live/thread?sessionId=${encodeURIComponent(sessionId)}`);
    const threadBody = await thread.json();
    assert.equal(
      threadBody.thread.messages.filter((message) => message.from === "visitor").length,
      count
    );
  });

  await t.test("rate limits repeated failed admin logins", async () => {
    const statuses = [];
    for (let index = 0; index < 6; index += 1) {
      const response = await request(baseUrl, "/api/admin/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ adminId: "test-admin", password: `wrong-${index}` })
      });
      statuses.push(response.status);
    }
    assert.deepEqual(statuses, [401, 401, 401, 401, 401, 429]);
  });

  await t.test("keeps the public production server available but disables default admin login", () => {
    const result = spawnSync(
      process.execPath,
      ["-e", "const app=require('./server');app.validateConfiguration();console.log(app.isValidAdminLogin('admin','Login@123'))"],
      {
      cwd: path.resolve(__dirname, ".."),
      env: {
        ...process.env,
        NODE_ENV: "production",
        ADMIN_ID: "admin",
        ADMIN_PASSWORD: "Login@123",
        PORT: "0"
      },
      encoding: "utf8",
      timeout: 5000
      }
    );
    assert.equal(result.status, 0);
    assert.match(`${result.stdout}${result.stderr}`, /Admin login is disabled/);
    assert.match(result.stdout, /false/);
  });

  await t.test("auto-starts when imported by a hosting runner", async () => {
    const probe = net.createServer();
    await new Promise((resolve, reject) => {
      probe.once("error", reject);
      probe.listen(0, "127.0.0.1", resolve);
    });
    const port = probe.address().port;
    await new Promise((resolve) => probe.close(resolve));

    const runnerDataDir = path.join(dataDir, "hosting-runner");
    const child = spawn(process.execPath, ["-e", "require('./server')"], {
      cwd: path.resolve(__dirname, ".."),
      env: {
        ...process.env,
        EHC_DISABLE_AUTO_START: "",
        EHC_DATA_DIR: runnerDataDir,
        NODE_ENV: "test",
        PORT: String(port)
      },
      stdio: "ignore"
    });

    try {
      let response = null;
      for (let attempt = 0; attempt < 40; attempt += 1) {
        try {
          response = await fetch(`http://127.0.0.1:${port}/`);
          break;
        } catch {
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
      assert.equal(response?.status, 200);
    } finally {
      child.kill();
      await new Promise((resolve) => {
        if (child.exitCode !== null) resolve();
        else child.once("exit", resolve);
      });
      await fs.rm(runnerDataDir, { recursive: true, force: true });
    }
  });
});
