# Email Help Center Node.js Website

Independent email help center built with plain Node.js. It includes provider guides, article pages, AI-style tools, contact form submission, chat submission, and local admin pages.

## Run

```bash
npm start
```

Open `http://localhost:3000`.

## Admin

Open `http://localhost:3000/admin/login`.

Default local admin ID and password:

```text
admin
EmailHelp@2026#Admin!
```

Change it before production:

```bash
ADMIN_ID="your-admin-id" ADMIN_PASSWORD="your-strong-password" PORT=3000 node server.js
```

## Hosting

This is a Node.js app, so host it on a server/platform that supports long-running Node processes. Use:

```bash
npm install
npm start
```

Production environment variables:

```text
PORT=3000
ADMIN_ID=your-admin-id
ADMIN_PASSWORD=your-strong-password
TICKET_TIMEZONE=Asia/Kolkata
```

If using a VPS, run the app with a process manager such as PM2 and point Nginx/Apache reverse proxy to `http://127.0.0.1:3000`.

Important: keep the `data/` folder writable and backed up, because support forms, visits, and live chats are saved there.

## Stored Data

The server creates these files automatically:

- `data/submissions.json`
- `data/chats.json`
- `data/live-chats.json`
- `data/visits.json`

The site intentionally warns users not to submit passwords, OTPs, recovery codes, payment details, or private mailbox content.

## Live Chat

Visitors can use the floating `Live Chat` widget on the website. Admin replies are handled at:

```text
http://localhost:3000/admin/live
```

Support/contact form submissions are handled at:

```text
http://localhost:3000/admin/support
```

The visitor live chat form collects name, phone, email, selected email company/provider, and issue details.

Every contact/support form and live chat form generates a user-visible ticket ID, such as `SUP-20260601-ABC123` or `LIV-20260601-ABC123`.
