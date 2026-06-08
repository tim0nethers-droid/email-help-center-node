const icons = {
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
  bot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M12 8V4"/><circle cx="9" cy="14" r="1"/><circle cx="15" cy="14" r="1"/><path d="M8 18h8"/></svg>',
  inbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="m5.45 5.11-3.2 7.1A2 2 0 0 0 2 13v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-.18-.83l-3.27-7.16A2 2 0 0 0 16.73 4H7.27a2 2 0 0 0-1.82 1.11Z"/></svg>',
  reply: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
  paperclip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66L9.64 17.2a2 2 0 1 1-2.83-2.83l8.49-8.48"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.73l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"/><circle cx="12" cy="12" r="3"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>'
};

const translations = {
  en: {
    navProviders: "Email Providers",
    navTools: "AI Tools",
    navResources: "Resources",
    navFaq: "FAQ",
    navContact: "Contact",
    heroBadge: "Independent Email",
    heroTitle: "Self-Service Email",
    heroHighlight: "Troubleshooting Guides",
    heroSubtitle:
      "Free step-by-step tutorials for common email problems: passwords, security, setup, sync, storage, delivery, and more.",
    searchPlaceholder: "Search for help, for example reset password or email settings",
    searchButton: "Search",
    disclaimer:
      "Independent Third-Party Resource — This website is NOT affiliated with, endorsed by, or sponsored by Google, Gmail, Microsoft, Yahoo, Apple, or any email service provider. We provide independent educational guides and AI tools only."
  },
  es: {
    navProviders: "Proveedores",
    navTools: "Herramientas IA",
    navResources: "Recursos",
    navFaq: "FAQ",
    navContact: "Contacto",
    heroBadge: "Centro de ayuda independiente",
    heroTitle: "Guías de correo",
    heroHighlight: "en autoservicio",
    heroSubtitle:
      "Tutoriales gratuitos para problemas comunes: contraseñas, seguridad, configuración, sincronización, espacio y entrega.",
    searchPlaceholder: "Buscar ayuda, por ejemplo restablecer contraseña",
    searchButton: "Buscar",
    disclaimer:
      "Recurso independiente de terceros. No afiliado, respaldado ni patrocinado por ningún proveedor de correo."
  },
  fr: {
    navProviders: "Fournisseurs",
    navTools: "Outils IA",
    navResources: "Ressources",
    navFaq: "FAQ",
    navContact: "Contact",
    heroBadge: "Centre d'aide indépendant",
    heroTitle: "Guides email",
    heroHighlight: "en libre-service",
    heroSubtitle:
      "Tutoriels gratuits pour les problèmes courants: mots de passe, sécurité, configuration, synchronisation et réception.",
    searchPlaceholder: "Rechercher une aide, par exemple mot de passe",
    searchButton: "Rechercher",
    disclaimer:
      "Ressource indépendante tierce. Non affiliée, approuvée ou sponsorisée par un fournisseur de messagerie."
  },
  de: {
    navProviders: "Anbieter",
    navTools: "KI-Tools",
    navResources: "Ressourcen",
    navFaq: "FAQ",
    navContact: "Kontakt",
    heroBadge: "Unabhängiges Hilfezentrum",
    heroTitle: "E-Mail",
    heroHighlight: "Fehlerbehebung",
    heroSubtitle:
      "Kostenlose Schritt-für-Schritt-Anleitungen für Passwort, Sicherheit, Einrichtung, Synchronisierung und Zustellung.",
    searchPlaceholder: "Hilfe suchen, zum Beispiel Passwort zurücksetzen",
    searchButton: "Suchen",
    disclaimer:
      "Unabhängige Drittanbieter-Ressource. Nicht mit E-Mail-Anbietern verbunden oder gesponsert."
  }
};

const categories = {
  major: "Major Global Providers",
  "us-isp": "US Internet Service Providers",
  canadian: "Canadian Providers",
  european: "UK & European Providers",
  australia: "Australia & New Zealand",
  desktop: "Desktop Email Clients"
};

const providers = [
  {
    id: "gmail",
    name: "Gmail",
    slug: "gmail.com",
    category: "major",
    logo: "https://www.gstatic.com/images/branding/product/1x/gmail_2020q4_48dp.png",
    officialUrl: "https://mail.google.com",
    supportUrl: "https://support.google.com/mail",
    chatUrl: "https://support.google.com/mail/gethelp",
    phone: "Available for Google Workspace users",
    description: "Google's free email service with search, spam filtering, labels, and Workspace integration.",
    settings: { imap: ["imap.gmail.com", 993, "SSL"], pop3: ["pop.gmail.com", 995, "SSL"], smtp: ["smtp.gmail.com", 587, "TLS"] }
  },
  {
    id: "outlook",
    name: "Outlook / Hotmail",
    slug: "outlook.com",
    category: "major",
    logo: "https://img.icons8.com/fluency/96/microsoft-outlook-2019.png",
    officialUrl: "https://outlook.live.com",
    supportUrl: "https://support.microsoft.com/outlook",
    chatUrl: "https://support.microsoft.com/contactus",
    phone: "1-800-642-7676 (Microsoft Support)",
    description: "Microsoft email service integrated with Office, OneDrive, Windows, and Microsoft 365.",
    settings: { imap: ["outlook.office365.com", 993, "SSL"], pop3: ["outlook.office365.com", 995, "SSL"], smtp: ["smtp.office365.com", 587, "TLS"] }
  },
  {
    id: "yahoo",
    name: "Yahoo Mail",
    slug: "yahoo.com",
    category: "major",
    logo: "https://img.icons8.com/color/96/yahoo.png",
    officialUrl: "https://mail.yahoo.com",
    supportUrl: "https://help.yahoo.com/kb/mail",
    chatUrl: "https://help.yahoo.com/kb/helpcentral",
    phone: "Use official Yahoo help options",
    description: "Long-running free email service with large storage, filters, disposable addresses, and mobile apps.",
    settings: { imap: ["imap.mail.yahoo.com", 993, "SSL"], pop3: ["pop.mail.yahoo.com", 995, "SSL"], smtp: ["smtp.mail.yahoo.com", 587, "TLS"] }
  },
  {
    id: "icloud",
    name: "iCloud Mail",
    slug: "icloud.com",
    category: "major",
    logo: "https://img.icons8.com/color/96/icloud.png",
    officialUrl: "https://www.icloud.com/mail",
    supportUrl: "https://support.apple.com/icloud",
    chatUrl: "https://getsupport.apple.com",
    phone: "1-800-275-2273 (Apple Support)",
    description: "Apple's cloud email service for iPhone, iPad, Mac, Windows, and web users.",
    settings: { imap: ["imap.mail.me.com", 993, "SSL"], pop3: ["Not supported", "-", "-"], smtp: ["smtp.mail.me.com", 587, "TLS"] }
  },
  {
    id: "protonmail",
    name: "Proton Mail",
    slug: "proton.me",
    category: "major",
    logo: "https://img.icons8.com/color/96/protonmail.png",
    officialUrl: "https://proton.me/mail",
    supportUrl: "https://proton.me/support/mail",
    chatUrl: "https://proton.me/support/contact",
    phone: "Official support portal",
    description: "Privacy-focused email service with end-to-end encryption features and strong account security.",
    settings: { imap: ["Requires Proton Mail Bridge", "-", "-"], pop3: ["Requires Proton Mail Bridge", "-", "-"], smtp: ["Requires Proton Mail Bridge", "-", "-"] }
  },
  {
    id: "aol",
    name: "AOL Mail",
    slug: "aol.com",
    category: "major",
    logo: "https://img.icons8.com/fluency/96/aol.png",
    officialUrl: "https://mail.aol.com",
    supportUrl: "https://help.aol.com/products/aol-mail",
    chatUrl: "https://help.aol.com",
    phone: "Use official AOL help options",
    description: "Classic email service now operated under Yahoo family infrastructure.",
    settings: { imap: ["imap.aol.com", 993, "SSL"], pop3: ["pop.aol.com", 995, "SSL"], smtp: ["smtp.aol.com", 587, "TLS"] }
  },
  {
    id: "att",
    name: "AT&T Mail",
    slug: "att.net",
    category: "us-isp",
    logo: "https://www.att.com/ecms/dam/att/consumer/global/logos/att-globe-blue.svg",
    officialUrl: "https://currently.att.yahoo.com",
    supportUrl: "https://www.att.com/support/email",
    chatUrl: "https://www.att.com/support/contact-us",
    phone: "1-800-288-2020 (AT&T Support)",
    description: "AT&T email service, commonly accessed through Currently and Yahoo-powered mail.",
    settings: { imap: ["imap.mail.att.net", 993, "SSL"], pop3: ["inbound.att.net", 995, "SSL"], smtp: ["smtp.mail.att.net", 465, "SSL"] }
  },
  {
    id: "xfinity",
    name: "Xfinity / Comcast",
    slug: "xfinity.com",
    category: "us-isp",
    logo: "https://www.xfinity.com/favicon.ico",
    officialUrl: "https://connect.xfinity.com",
    supportUrl: "https://www.xfinity.com/support/email",
    chatUrl: "https://www.xfinity.com/support/contact-us",
    phone: "1-800-XFINITY",
    description: "Comcast Xfinity email for internet subscribers and legacy accounts.",
    settings: { imap: ["imap.comcast.net", 993, "SSL"], pop3: ["pop3.comcast.net", 995, "SSL"], smtp: ["smtp.comcast.net", 587, "TLS"] }
  },
  {
    id: "verizon",
    name: "Verizon Mail",
    slug: "verizon.net",
    category: "us-isp",
    logo: "https://www.verizon.com/favicon.ico",
    officialUrl: "https://mail.aol.com",
    supportUrl: "https://www.verizon.com/support/email",
    chatUrl: "https://www.verizon.com/support/contact-us",
    phone: "1-800-837-4966",
    description: "Legacy Verizon email accounts are commonly handled through AOL/Yahoo mail systems.",
    settings: { imap: ["imap.aol.com", 993, "SSL"], pop3: ["pop.verizon.net", 995, "SSL"], smtp: ["smtp.verizon.net", 465, "SSL"] }
  },
  {
    id: "cox",
    name: "Cox Email",
    slug: "cox.net",
    category: "us-isp",
    logo: "https://www.cox.com/etc.clientlibs/cox/clientlibs/clientlib-site/resources/images/favicon.ico",
    officialUrl: "https://webmail.cox.net",
    supportUrl: "https://www.cox.com/residential/support/email.html",
    chatUrl: "https://www.cox.com/residential/contactus.html",
    phone: "1-800-234-3993",
    description: "Cox webmail and email support for residential internet customers.",
    settings: { imap: ["imap.cox.net", 993, "SSL"], pop3: ["pop.cox.net", 995, "SSL"], smtp: ["smtp.cox.net", 587, "TLS"] }
  },
  {
    id: "spectrum",
    name: "Spectrum Email",
    slug: "spectrum.net",
    category: "us-isp",
    logo: "https://www.spectrum.net/favicon.ico",
    officialUrl: "https://webmail.spectrum.net",
    supportUrl: "https://www.spectrum.net/support/email",
    chatUrl: "https://www.spectrum.net/contact-us",
    phone: "1-833-267-6094",
    description: "Spectrum webmail support and settings for Charter email domains.",
    settings: { imap: ["mobile.charter.net", 993, "SSL"], pop3: ["pop.charter.net", 110, "TLS"], smtp: ["mobile.charter.net", 587, "TLS"] }
  },
  {
    id: "earthlink",
    name: "EarthLink",
    slug: "earthlink.net",
    category: "us-isp",
    logo: "https://www.earthlink.net/favicon.ico",
    officialUrl: "https://webmail.earthlink.net",
    supportUrl: "https://www.earthlink.net/support/email",
    chatUrl: "https://www.earthlink.net/contact",
    phone: "1-888-327-8454",
    description: "EarthLink webmail and email setup guidance for legacy and current accounts.",
    settings: { imap: ["imap.earthlink.net", 143, "TLS"], pop3: ["pop.earthlink.net", 110, "TLS"], smtp: ["smtpauth.earthlink.net", 587, "TLS"] }
  },
  {
    id: "rogers",
    name: "Rogers Yahoo Mail",
    slug: "rogers.com",
    category: "canadian",
    logo: "https://www.rogers.com/favicon.ico",
    officialUrl: "https://mail.rogers.com",
    supportUrl: "https://www.rogers.com/support/email",
    chatUrl: "https://www.rogers.com/contact",
    phone: "1-888-764-3771",
    description: "Rogers email service powered by Yahoo for Canadian customers.",
    settings: { imap: ["imap.broadband.rogers.com", 993, "SSL"], pop3: ["pop.broadband.rogers.com", 995, "SSL"], smtp: ["smtp.broadband.rogers.com", 465, "SSL"] }
  },
  {
    id: "bell",
    name: "Bell Mail",
    slug: "bell.ca",
    category: "canadian",
    logo: "https://www.bell.ca/favicon.ico",
    officialUrl: "https://email.bell.ca",
    supportUrl: "https://support.bell.ca/internet/email",
    chatUrl: "https://support.bell.ca/contact-us",
    phone: "1-866-310-2355",
    description: "Bell Canada email service for internet customers.",
    settings: { imap: ["imap.bell.net", 993, "SSL"], pop3: ["pophm.sympatico.ca", 995, "SSL"], smtp: ["smtphm.sympatico.ca", 587, "TLS"] }
  },
  {
    id: "shaw",
    name: "Shaw Email",
    slug: "shaw.ca",
    category: "canadian",
    logo: "https://www.shaw.ca/favicon.ico",
    officialUrl: "https://webmail.shaw.ca",
    supportUrl: "https://support.shaw.ca/email",
    chatUrl: "https://support.shaw.ca/contact-us",
    phone: "1-888-472-2222",
    description: "Shaw email settings and webmail access for Canadian internet customers.",
    settings: { imap: ["imap.shaw.ca", 993, "SSL"], pop3: ["pop.shaw.ca", 995, "SSL"], smtp: ["mail.shaw.ca", 587, "TLS"] }
  },
  {
    id: "bt",
    name: "BT Mail",
    slug: "bt.com",
    category: "european",
    logo: "https://www.bt.com/favicon.ico",
    officialUrl: "https://mail.btinternet.com",
    supportUrl: "https://www.bt.com/help/email",
    chatUrl: "https://www.bt.com/help/contact-bt",
    phone: "0800 800 150",
    description: "BT Mail help for UK broadband and email users.",
    settings: { imap: ["mail.btinternet.com", 993, "SSL"], pop3: ["mail.btinternet.com", 995, "SSL"], smtp: ["mail.btinternet.com", 465, "SSL"] }
  },
  {
    id: "orange",
    name: "Orange Mail",
    slug: "orange.fr",
    category: "european",
    logo: "https://www.orange.fr/favicon.ico",
    officialUrl: "https://messagerie.orange.fr",
    supportUrl: "https://assistance.orange.fr/email",
    chatUrl: "https://assistance.orange.fr/contact",
    phone: "Use official Orange support",
    description: "Orange France email help, mailbox setup, and webmail support.",
    settings: { imap: ["imap.orange.fr", 993, "SSL"], pop3: ["pop.orange.fr", 995, "SSL"], smtp: ["smtp.orange.fr", 465, "SSL"] }
  },
  {
    id: "t-online",
    name: "T-Online Mail",
    slug: "t-online.de",
    category: "european",
    logo: "https://www.telekom.de/favicon.ico",
    officialUrl: "https://email.t-online.de",
    supportUrl: "https://www.telekom.de/hilfe/email",
    chatUrl: "https://www.telekom.de/kontakt",
    phone: "Use official Telekom support",
    description: "Deutsche Telekom / T-Online email setup, recovery, and mailbox guidance.",
    settings: { imap: ["secureimap.t-online.de", 993, "SSL"], pop3: ["securepop.t-online.de", 995, "SSL"], smtp: ["securesmtp.t-online.de", 465, "SSL"] }
  },
  {
    id: "telstra",
    name: "Telstra Mail",
    slug: "telstra.com.au",
    category: "australia",
    logo: "https://www.telstra.com.au/favicon.ico",
    officialUrl: "https://mail.telstra.com",
    supportUrl: "https://www.telstra.com.au/support/email",
    chatUrl: "https://www.telstra.com.au/contact-us",
    phone: "13 22 00",
    description: "Telstra Mail help for Australian customers and BigPond email users.",
    settings: { imap: ["imap.telstra.com", 993, "SSL"], pop3: ["pop.telstra.com", 995, "SSL"], smtp: ["smtp.telstra.com", 465, "SSL"] }
  },
  {
    id: "optus",
    name: "OptusNet Email",
    slug: "optusnet.com.au",
    category: "australia",
    logo: "https://www.optus.com.au/favicon.ico",
    officialUrl: "https://webmail.optusnet.com.au",
    supportUrl: "https://www.optus.com.au/support/email",
    chatUrl: "https://www.optus.com.au/support/contact-us",
    phone: "13 39 37",
    description: "OptusNet mailbox support and device setup guidance.",
    settings: { imap: ["mail.optusnet.com.au", 993, "SSL"], pop3: ["mail.optusnet.com.au", 110, "TLS"], smtp: ["mail.optusnet.com.au", 587, "TLS"] }
  },
  {
    id: "thunderbird",
    name: "Thunderbird",
    slug: "thunderbird.net",
    category: "desktop",
    logo: "https://img.icons8.com/color/96/thunderbird.png",
    officialUrl: "https://www.thunderbird.net",
    supportUrl: "https://support.mozilla.org/products/thunderbird",
    chatUrl: "https://support.mozilla.org/products/thunderbird",
    phone: "Community support",
    description: "Open-source desktop email client for Windows, macOS, and Linux.",
    settings: { imap: ["Uses provider settings", "-", "-"], pop3: ["Uses provider settings", "-", "-"], smtp: ["Uses provider settings", "-", "-"] }
  },
  {
    id: "apple-mail",
    name: "Apple Mail",
    slug: "apple.com",
    category: "desktop",
    logo: "https://img.icons8.com/color/96/apple-mail.png",
    officialUrl: "https://www.apple.com/macos/features",
    supportUrl: "https://support.apple.com/mail",
    chatUrl: "https://getsupport.apple.com",
    phone: "1-800-275-2273 (Apple Support)",
    description: "Built-in Apple mail client for macOS, iPhone, iPad, and Apple Watch.",
    settings: { imap: ["Uses provider settings", "-", "-"], pop3: ["Uses provider settings", "-", "-"], smtp: ["Uses provider settings", "-", "-"] }
  }
];

const topics = [
  {
    id: "password-reset",
    title: "Password Reset",
    icon: "lock",
    desc: "Forgot your password? Get safe steps to recover access through official provider pages.",
    steps: [
      "Go directly to the provider's official sign-in page.",
      "Choose the official forgot password or account recovery option.",
      "Verify recovery phone or email only on the official website.",
      "Create a strong unique password after access is restored.",
      "Review recovery details and recent security activity."
    ]
  },
  {
    id: "cant-log-in",
    title: "Can't Log In",
    icon: "lock",
    desc: "Fix sign-in loops, locked accounts, wrong password errors, and recovery prompts.",
    steps: [
      "Confirm the email address is typed correctly.",
      "Try the official sign-in page in a private browser window.",
      "Clear saved passwords only after checking your password manager.",
      "Use official account recovery if the password no longer works.",
      "Check security alerts after access is restored."
    ]
  },
  {
    id: "mobile-setup",
    title: "Mobile Setup",
    icon: "phone",
    desc: "Configure email on iPhone, Android, tablets, and mobile mail apps.",
    steps: [
      "Install the official app when available.",
      "Use IMAP for sync across devices.",
      "Enter the official incoming and outgoing server settings.",
      "Use SSL/TLS and app passwords where required.",
      "Send a test email and confirm push notifications."
    ]
  },
  {
    id: "account-hacked",
    title: "Account Hacked",
    icon: "shield",
    desc: "Emergency checklist for suspicious access, unknown messages, or changed settings.",
    steps: [
      "Start recovery only from the official provider website.",
      "Change your password from a trusted device.",
      "Remove unknown forwarding rules, filters, and connected apps.",
      "Enable two-step verification.",
      "Review sent mail and warn contacts if needed."
    ]
  },
  {
    id: "not-receiving",
    title: "Not Receiving Emails",
    icon: "inbox",
    desc: "Diagnose missing messages, spam folder issues, filters, forwarding, and mailbox blocks.",
    steps: [
      "Check spam, junk, archive, trash, and all-mail folders.",
      "Search by sender, subject, and date range.",
      "Review filters, blocked senders, and forwarding rules.",
      "Confirm mailbox storage is not full.",
      "Ask the sender to resend without large attachments."
    ]
  },
  {
    id: "email-not-working",
    title: "Email Not Working",
    icon: "globe",
    desc: "General checklist for mailbox loading, send/receive failures, and temporary outages.",
    steps: [
      "Check whether webmail opens from the official website.",
      "Try another browser or network to rule out local issues.",
      "Review provider status pages for outages.",
      "Update your mail app and reconnect the account if sync is stuck.",
      "Use official support if account-specific verification is required."
    ]
  },
  {
    id: "cant-send",
    title: "Can't Send Emails",
    icon: "reply",
    desc: "Fix outbox messages, SMTP settings, blocked attachments, and sending limits.",
    steps: [
      "Check your outbox for stuck messages and remove large attachments.",
      "Confirm SMTP server, port, and security settings.",
      "Verify the recipient address and try a short test email.",
      "Wait if the provider has temporarily limited sending.",
      "Use the official provider page for account security checks."
    ]
  },
  {
    id: "storage-full",
    title: "Storage Full",
    icon: "trash",
    desc: "Free mailbox space by finding large attachments, old newsletters, and deleted mail.",
    steps: [
      "Sort by largest messages and old attachments.",
      "Download important files before deleting emails.",
      "Empty trash and spam after reviewing them.",
      "Archive or export old messages when needed.",
      "Wait a few minutes for quota updates."
    ]
  },
  {
    id: "email-forwarding",
    title: "Email Forwarding",
    icon: "reply",
    desc: "Set up forwarding, automatic replies, vacation responders, and forwarding checks.",
    steps: [
      "Open official mailbox settings.",
      "Find forwarding, filters, or rules.",
      "Confirm the destination address carefully.",
      "Use verification links from your provider.",
      "Disable unknown forwarding if the account was compromised."
    ]
  },
  {
    id: "email-bouncing",
    title: "Email Bouncing Back",
    icon: "reply",
    desc: "Understand delivery failure notices, invalid recipients, and mailbox-full responses.",
    steps: [
      "Read the bounce message for the exact reason.",
      "Confirm the recipient address and domain spelling.",
      "Remove large attachments and resend a smaller message.",
      "Ask the recipient to check storage or blocked sender settings.",
      "Wait and retry later if the bounce mentions a temporary server issue."
    ]
  },
  {
    id: "spam-junk",
    title: "Spam & Junk Issues",
    icon: "shield",
    desc: "Manage spam filtering, blocked senders, safe lists, and missing messages.",
    steps: [
      "Check spam and junk folders for missing messages.",
      "Mark trusted senders as not spam.",
      "Review blocked senders, filters, and rules.",
      "Avoid opening suspicious links or attachments.",
      "Report abusive messages through the official provider tools."
    ]
  },
  {
    id: "attachment-issues",
    title: "Attachment Issues",
    icon: "paperclip",
    desc: "Fix file size, blocked extensions, downloads, previews, and upload problems.",
    steps: [
      "Check the provider's file size limit.",
      "Compress files or share a cloud link.",
      "Avoid blocked executable file types.",
      "Try a different browser or device.",
      "Scan unexpected attachments before opening."
    ]
  },
  {
    id: "desktop-setup",
    title: "Desktop Setup",
    icon: "settings",
    desc: "Configure Outlook, Thunderbird, Apple Mail, and other desktop clients.",
    steps: [
      "Choose IMAP for most accounts.",
      "Use the provider's official server names and ports.",
      "Enable SSL/TLS for incoming and outgoing mail.",
      "Use an app password if 2-step verification is enabled.",
      "Test send and receive before importing old mail."
    ]
  },
  {
    id: "2fa-setup",
    title: "Two-Step Verification",
    icon: "shield",
    desc: "Add a second layer of security and keep backup methods up to date.",
    steps: [
      "Open official account security settings.",
      "Add an authenticator app or security key.",
      "Save recovery codes in a secure place.",
      "Update backup email and phone.",
      "Review trusted devices periodically."
    ]
  },
  {
    id: "email-sync-issues",
    title: "Email Sync Issues",
    icon: "inbox",
    desc: "Fix stuck sync, duplicate mail, delayed notifications, and outdated folders.",
    steps: [
      "Check internet connection and provider status.",
      "Refresh mailbox folders manually.",
      "Remove and re-add the account if sync remains stuck.",
      "Confirm IMAP is enabled on the provider side.",
      "Update the mail app and operating system."
    ]
  },
  {
    id: "error-messages",
    title: "Error Messages",
    icon: "settings",
    desc: "Decode authentication failed, connection refused, certificate, and server errors.",
    steps: [
      "Copy the exact error text without sharing passwords or private content.",
      "Check whether the error happens on webmail, mobile, or desktop only.",
      "Confirm server settings, ports, and SSL/TLS options.",
      "Update or reinstall the mail app if the error is app-specific.",
      "Contact official support when the error mentions account restrictions."
    ]
  }
];

providers.forEach((provider) => {
  provider.chatProviderDomain = providerChatDomain(provider);
});

const aiTools = [
  {
    icon: "bot",
    title: "AI Support Chat",
    desc: "Describe your email problem and get instant self-help steps with safety reminders.",
    link: "/ai/chat",
    cta: "Open Chat",
    featured: true
  },
  {
    icon: "inbox",
    title: "Inbox Categorizer",
    desc: "Sort pasted email subjects into urgent, newsletters, social, promotions, receipts, and work.",
    link: "/ai/inbox-categorizer",
    cta: "Try Demo"
  },
  {
    icon: "reply",
    title: "Reply Generator",
    desc: "Generate polished email replies in friendly, professional, concise, or firm tones.",
    link: "/ai/reply-generator",
    cta: "Generate Reply"
  },
  {
    icon: "trash",
    title: "Unsubscribe Helper",
    desc: "Identify subscription-style messages and plan a safer inbox cleanup.",
    link: "/ai/unsubscribe",
    cta: "Clean Inbox"
  }
];

const faqItems = [
  ["Are you official support for Gmail, Outlook, Yahoo, or Apple?", "No. This is an independent educational website. We provide guides and self-help tools only."],
  ["Can you reset my password?", "No. We cannot access accounts or reset passwords. Use the official recovery page for your email provider."],
  ["Is the chat a real human agent?", "The chat is a rule-based self-help assistant that provides troubleshooting steps and stores transcripts for your site admin."],
  ["Should I enter my password or OTP in the form?", "No. Never submit passwords, OTPs, recovery codes, or private mailbox content in any form or chat."],
  ["Where do contact form submissions go?", "They are saved locally on your Node.js server in data/submissions.json and visible in the admin leads page."],
  ["How do I change the admin password?", "Start the server with an ADMIN_PASSWORD environment variable before production use."]
];

let currentLanguage = localStorage.getItem("ehc_language") || "en";
let mobileOpen = false;
let liveChatPollTimer = null;
let adminLivePollTimer = null;
let adminLiveSnapshot = null;
let adminLiveRowsSignature = "";
let adminSoundEnabled = localStorage.getItem("ehc_admin_sound") === "true";
let adminAudioContext = null;
let adminAlertInterval = null;
let adminAlertTimeout = null;
let adminKnownUnreadVisitorIds = new Set();
let adminAlertedUnreadVisitorIds = new Set();
let adminLiveAlertBaselineReady = false;
let visitorTypingTimer = null;
let visitorTypingActive = false;
let adminAgentTypingTimer = null;
let adminAgentTypingThread = "";
let adminAgentTypingActive = false;

function t(key) {
  return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

function providerUrl(provider) {
  return `/provider/${provider.id}`;
}

function articleUrl(provider, topic) {
  return `/provider/${provider.id}/article/${topic.id}`;
}

function providerChatDomain(provider) {
  const map = {
    gmail: "gmail.com",
    outlook: "outlook.com",
    yahoo: "yahoo.com",
    icloud: "icloud.com",
    protonmail: "proton.me",
    aol: "aol.com",
    att: "att.net",
    xfinity: "xfinity.com",
    verizon: "verizon.net",
    cox: "cox.net",
    spectrum: "spectrum.net",
    rogers: "rogers.com",
    bell: "bell.ca",
    shaw: "shaw.ca"
  };
  return provider?.chatProviderDomain || map[provider?.id] || provider?.slug || provider?.id || "email";
}

function providerChatUrl(provider, issue = "") {
  const providerParam = providerChatDomain(provider);
  const params = new URLSearchParams();
  if (providerParam) params.set("provider", providerParam);
  if (issue) params.set("issue", issue);
  return `/ai/chat?${params.toString()}`;
}

function openChat(providerDomain, issue = "") {
  const normalized = providerDomain || "email";
  const chatUrl = `/ai/chat?provider=${encodeURIComponent(normalized)}${issue ? `&issue=${encodeURIComponent(issue)}` : ""}`;
  console.log("Opening chat", chatUrl);
  window.location.href = chatUrl;
}

function navigate(path) {
  if (!path.startsWith("/admin/live")) stopAdminLongAlert();
  window.history.pushState({}, "", path);
  mobileOpen = false;
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.addEventListener("click", (event) => {
  const providerChatButton = event.target.closest("[data-provider-open-chat]");
  if (providerChatButton) {
    event.preventDefault();
    openChat(providerChatButton.dataset.providerDomain || "gmail.com", providerChatButton.dataset.issue || "");
    return;
  }

  const showArticlesButton = event.target.closest("[data-provider-show-articles]");
  if (showArticlesButton) {
    event.preventDefault();
    const tabs = document.querySelector("[data-provider-tabs]");
    if (tabs) {
      tabs.querySelectorAll("[data-provider-tab]").forEach((item) => item.classList.toggle("active", item.dataset.providerTab === "articles"));
      tabs.querySelectorAll("[data-provider-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.providerPanel === "articles"));
      tabs.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  const providerFormButton = event.target.closest("[data-provider-scroll-form]");
  if (providerFormButton) {
    event.preventDefault();
    const tabs = document.querySelector("[data-provider-tabs]");
    if (tabs) {
      tabs.querySelectorAll("[data-provider-tab]").forEach((item) => item.classList.toggle("active", item.dataset.providerTab === "ticket"));
      tabs.querySelectorAll("[data-provider-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.providerPanel === "ticket"));
    }
    document.getElementById("provider-support-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const link = event.target.closest("a[data-link]");
  if (!link) return;
  const href = link.getAttribute("href");
  if (href.startsWith("http")) return;
  event.preventDefault();
  navigate(href);
});

window.addEventListener("popstate", () => {
  if (window.location.pathname !== "/admin/live") stopAdminLongAlert();
  render();
});
window.addEventListener("beforeunload", stopAdminLongAlert);

function icon(name) {
  return `<span class="icon" aria-hidden="true">${icons[name] || icons.mail}</span>`;
}

function brand() {
  return `<a class="brand" href="/" data-link><span class="brand-mark">${icons.mail}</span><span>Email Help Center</span></a>`;
}

function logo(provider) {
  return `<span class="provider-logo"><img src="${provider.logo}" alt="" onerror="this.parentNode.textContent='${provider.name
    .slice(0, 1)
    .replace(/'/g, "")}'"></span>`;
}

function header() {
  const groups = Object.entries(categories)
    .slice(0, 3)
    .map(([key, label]) => {
      const links = providers
        .filter((provider) => provider.category === key)
        .slice(0, 5)
        .map((provider) => `<a href="${providerUrl(provider)}" data-link>${provider.name}</a>`)
        .join("");
      return `<div><p class="dropdown-title">${label}</p>${links}</div>`;
    })
    .join("");

  const mobileLinks = `
    <div class="mobile-group">
      <h3>Navigation</h3>
      <a href="/providers" data-link>All Email Providers</a>
      <a href="/faq" data-link>FAQ</a>
      <a href="/contact" data-link>Contact Us</a>
      <a href="/about" data-link>About Us</a>
    </div>
    <div class="mobile-group">
      <h3>AI Tools</h3>
      ${aiTools.map((tool) => `<a href="${tool.link}" data-link>${tool.title}</a>`).join("")}
    </div>
    <div class="mobile-group">
      <h3>Resources</h3>
      ${topics.slice(0, 6).map((topicItem) => `<a href="${articleUrl(providers[0], topicItem)}" data-link>${topicItem.title}</a>`).join("")}
    </div>`;

  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="disclaimer-bar"><div class="container">${icons.alert}<span>Independent Third-Party Resource &mdash; This website is NOT affiliated with, endorsed by, or sponsored by Google, Gmail, Microsoft, Yahoo, Apple, or any email service provider. We provide independent educational guides and AI tools only.</span></div></div>
    <header class="site-header">
      <div class="container header-row">
        ${brand()}
        <nav class="desktop-nav" aria-label="Main navigation">
          <div class="nav-item">
            <button class="nav-trigger" type="button">${t("navProviders")}</button>
            <div class="dropdown">
              <div class="dropdown-grid">${groups}</div>
              <div class="link-row" style="margin-top:14px"><a class="pill primary" href="/providers" data-link>View all ${providers.length} providers</a></div>
            </div>
          </div>
          <div class="nav-item">
            <button class="nav-trigger" type="button">${icons.bot}${t("navTools")}</button>
            <div class="dropdown narrow">
              ${aiTools.map((tool) => `<a href="${tool.link}" data-link>${icons[tool.icon]}${tool.title}</a>`).join("")}
            </div>
          </div>
          <div class="nav-item">
            <button class="nav-trigger" type="button">${t("navResources")}</button>
            <div class="dropdown narrow">
              ${topics.slice(0, 6).map((topicItem) => `<a href="${articleUrl(providers[0], topicItem)}" data-link>${icons[topicItem.icon]}${topicItem.title}</a>`).join("")}
            </div>
          </div>
          <a class="nav-link" href="/faq" data-link>${t("navFaq")}</a>
          <a class="nav-link" href="/contact" data-link>${t("navContact")}</a>
        </nav>
        <div class="header-actions">
          <a class="icon-btn" href="/search" data-link aria-label="Search">${icons.search}</a>
          <select class="language-select" id="language-select" aria-label="Language">
            ${Object.keys(translations).map((lang) => `<option value="${lang}" ${lang === currentLanguage ? "selected" : ""}>${lang.toUpperCase()}</option>`).join("")}
          </select>
          <a class="signin-link" href="/auth" data-link>Sign In</a>
          <a class="button small signup-link" href="/auth" data-link>Sign Up</a>
          <button class="icon-btn mobile-menu-btn" id="mobile-menu-button" type="button" aria-label="Open menu">${icons.menu}</button>
        </div>
      </div>
    </header>
    <aside class="mobile-panel ${mobileOpen ? "open" : ""}" aria-label="Mobile menu">
      <div class="mobile-panel-head">${brand()}<button class="icon-btn" id="mobile-close" type="button" aria-label="Close menu">${icons.close}</button></div>
      ${mobileLinks}
    </aside>`;
}

function universalSupportBand() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path.startsWith("/admin") || path === "/auth") return "";
  const provider = currentProviderFromPath();
  if (provider && path === providerUrl(provider)) return "";
  return supportHub(provider);
}

function currentProviderFromPath() {
  const parts = window.location.pathname.split("/").filter(Boolean);
  if (parts[0] !== "provider" || !parts[1]) return null;
  return findProviderByRoute(parts[1]);
}

const providerRouteAliases = {
  proton: "protonmail",
  comcast: "xfinity",
  hotmail: "outlook",
  apple: "icloud"
};

function findProviderByRoute(value = "") {
  const key = value.toLowerCase();
  const normalized = providerRouteAliases[key] || key;
  return providers.find((item) => item.id === normalized || item.slug === key || item.slug === normalized) || null;
}

function providerSelectOptions(selectedName = "") {
  return providers.map((provider) => `<option value="${escapeHtml(provider.name)}" ${provider.name === selectedName ? "selected" : ""}>${provider.name}</option>`).join("");
}

function supportHub(provider = null) {
  const selectedProvider = provider || providers[0];
  const heading = provider ? `${provider.name} Support Center` : "Email Support Center";
  const intro = provider
    ? `Select a ${provider.name} issue, read help articles, or submit a ticket.`
    : "Select an issue, open live chat, or submit a ticket from any page.";
  const visibleTopics = topics.slice(0, 12);
  const articleProvider = selectedProvider || providers[0];
  const quickProviders = provider ? [provider, ...providers.filter((item) => item.id !== provider.id).slice(0, 4)] : providers.slice(0, 5);
  const sourcePage = `${window.location.pathname}${window.location.search}`;
  return `
    <section class="global-support-band">
      <div class="container">
        <div class="section-heading align-left support-hub-heading">
          <p class="section-kicker">Help on every page</p>
          <h2>${heading}</h2>
          <p>${intro}</p>
        </div>
        <div class="article-layout support-hub-layout">
          <div class="article-content">
            <div class="support-callout provider-callout">
              <span class="brand-mark">${icons.bot}</span>
              <div>
                <h2>Need help faster? Chat with our team</h2>
                <p>Start live chat with name, phone, email, company, and issue. Admin can reply from the live chat panel.</p>
              </div>
              <button class="button" type="button" data-open-live-chat>Start Chat Now</button>
            </div>
            <div class="provider-tabs" data-provider-tabs>
              <div class="provider-tablist" role="tablist" aria-label="Support sections">
                <button class="provider-tab active" type="button" data-provider-tab="global-troubleshooter">Troubleshooter</button>
                <button class="provider-tab" type="button" data-provider-tab="global-articles">Help Articles</button>
                <button class="provider-tab" type="button" data-provider-tab="global-ticket">Submit Ticket</button>
              </div>
              <section class="provider-tab-panel active" data-provider-panel="global-troubleshooter">
                <div class="notice info">Select your issue below for step-by-step guidance.</div>
                <div class="card"><div class="card-body">
                  <h2>What are you having trouble with?</h2>
                  <p class="meta-line">${provider ? `${provider.name} help topics` : "Common email help topics"}</p>
                  <div class="provider-issue-grid">
                    ${visibleTopics
                      .map(
                        (topicItem) => `
                        <a class="issue-card" href="${articleUrl(articleProvider, topicItem)}" data-link>
                          ${icon(topicItem.icon)}
                          <h3>${topicItem.title}</h3>
                          <p>${topicItem.desc}</p>
                        </a>`
                      )
                      .join("")}
                  </div>
                </div></div>
                <div class="support-callout compact">
                  <span class="brand-mark">${icons.bot}</span>
                  <div>
                    <h2>Can't find your issue?</h2>
                    <p>Open live chat or submit a ticket with a tracking ID.</p>
                  </div>
                  <button class="button secondary" type="button" data-open-live-chat>Start Chat</button>
                </div>
              </section>
              <section class="provider-tab-panel" data-provider-panel="global-articles">
                <div class="card"><div class="card-body">
                  <h2>Popular Help Articles</h2>
                  <div class="grid two">${visibleTopics
                    .map((topicItem) => `<a class="category-item" href="${articleUrl(articleProvider, topicItem)}" data-link><span>${topicItem.title}</span><span>${icons.external}</span></a>`)
                    .join("")}</div>
                </div></div>
              </section>
              <section class="provider-tab-panel" data-provider-panel="global-ticket">
                <div class="card"><div class="card-body">
                  <h2>Submit Support Ticket</h2>
                  <p class="meta-line">Every submission generates a ticket ID and appears in Admin Panel > Support Forms.</p>
                  <form class="form support-ticket-form">
                    <input type="hidden" name="sourcePage" value="${escapeHtml(sourcePage)}">
                    <div class="form-row">
                      <div class="field"><label>Name</label><input name="name" required placeholder="Your name"></div>
                      <div class="field"><label>Phone</label><input name="phone" placeholder="Phone number"></div>
                    </div>
                    <div class="form-row">
                      <div class="field"><label>Email</label><input name="email" type="email" required placeholder="you@example.com"></div>
                      <div class="field"><label>Company / Provider</label><select name="category">${providerSelectOptions(selectedProvider.name)}</select></div>
                    </div>
                    <div class="field"><label>Subject</label><input name="subject" required value="${provider ? `${provider.name} support request` : "Email support request"}"></div>
                    <div class="field"><label>Issue</label><textarea name="message" required placeholder="Describe the issue. Do not include passwords, OTPs, private emails, or recovery codes."></textarea></div>
                    <button class="button" type="submit">${icons.reply}Submit Ticket</button>
                  </form>
                  <div class="provider-ticket-status" style="margin-top:16px"></div>
                </div></div>
              </section>
            </div>
          </div>
          <aside class="provider-sidebar">
            <div class="card support-card provider-help-card"><div class="card-body">
              ${icon("bot")}
              <h3>Need Help Now?</h3>
              <p>Start live chat from this page. Admin will see your name, phone, email, company, and issue.</p>
              <button class="button full" type="button" data-open-live-chat>Start Live Chat</button>
              <small>Instant - Free - Independent resource</small>
            </div></div>
            <div class="card"><div class="card-body">
              <h3>Quick Provider Links</h3>
              <div class="category-list">${quickProviders
                .map((item) => `<a class="category-item" href="${providerUrl(item)}" data-link><span>${item.name}</span><span>${icons.external}</span></a>`)
                .join("")}</div>
            </div></div>
            <div class="card"><div class="card-body">
              <h3>Where Forms Go</h3>
              <p class="meta-line">Support tickets are saved locally in <code>data/submissions.json</code> and shown inside Admin Panel > Support Forms.</p>
              <a class="button secondary full" href="/auth" data-link>${icons.lock}Admin Login</a>
            </div></div>
          </aside>
        </div>
      </div>
    </section>`;
}

function footer() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="notice"><strong>Independent Resource.</strong> Email is not affiliated with, endorsed by, sponsored by, or officially connected with Google, Microsoft, Yahoo, Apple, AOL, AT&T, Comcast, Verizon, or any other email provider. We do not access accounts, reset passwords, or collect credentials.</div>
        <div class="footer-grid">
          <div>
            <h3>Email</h3>
            <p>Your independent resource for email troubleshooting and AI-style inbox tools.</p>
          </div>
          <div>
            <h4>Help Guides</h4>
            <a href="/provider/gmail" data-link>Google Mail Help</a>
            <a href="/provider/outlook" data-link>Microsoft Email Help</a>
            <a href="/provider/yahoo" data-link>Yahoo Email Help</a>
            <a href="/provider/icloud" data-link>Apple Email Help</a>
          </div>
          <div>
            <h4>Official Sites</h4>
            <a href="https://mail.google.com" target="_blank" rel="noopener">Gmail</a>
            <a href="https://outlook.live.com" target="_blank" rel="noopener">Outlook</a>
            <a href="https://mail.yahoo.com" target="_blank" rel="noopener">Yahoo Mail</a>
            <a href="https://www.icloud.com/mail" target="_blank" rel="noopener">iCloud Mail</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="/about" data-link>About Us</a>
            <a href="/contact" data-link>Contact Us</a>
            <a href="/faq" data-link>FAQ</a>
            <a href="/privacy" data-link>Privacy Policy</a>
            <a href="/terms" data-link>Terms of Service</a>
          </div>
          <div>
            <h4>Free AI Tools</h4>
            ${aiTools.map((tool) => `<a href="${tool.link}" data-link>${tool.title}</a>`).join("")}
            <a href="/auth" data-link>Admin Login</a>
          </div>
        </div>
        <div class="copyright">&copy; ${new Date().getFullYear()} Email. Independent resource, not affiliated with any email service provider.</div>
      </div>
    </footer>`;
}

function isInternalPath(pathname = window.location.pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  return path === "/admin" || path.startsWith("/admin/") || path === "/auth" || path.startsWith("/auth/");
}

function liveChatWidget() {
  if (isInternalPath()) return "";
  const provider = currentProviderFromPath();
  if (provider) {
    return `
      <div class="live-chat-widget provider-ai-chat-widget" id="live-chat-widget">
        <button class="provider-floating-chat-button" type="button" data-provider-open-chat data-provider-domain="${escapeHtml(providerChatDomain(provider))}" aria-label="Open ${escapeHtml(provider.name)} chat">
          ${icons.bot}
          <span class="provider-floating-badge">1</span>
        </button>
      </div>`;
  }
  const isOpen = localStorage.getItem("ehc_live_chat_open") === "true";
  const activeSession = Boolean(currentLiveChatSession());
  return `
    <div class="live-chat-widget ${isOpen ? "open" : ""}" id="live-chat-widget">
      <button class="live-chat-toggle ${activeSession ? "active" : ""}" id="live-chat-toggle" type="button" aria-label="Open live chat">
        <span class="live-status-dot"></span>
        ${icons.bot}
        <span>${activeSession ? "Chat Active" : "Live Chat"}</span>
      </button>
      <section class="live-chat-panel" aria-label="Live chat">
        <div class="live-chat-head">
          <div>
            <strong>Live Chat</strong>
            <span>Bot sends one step at a time</span>
          </div>
          <button class="icon-btn" id="live-chat-close" type="button" aria-label="Close live chat">${icons.close}</button>
        </div>
        <div id="live-chat-content" class="live-chat-content">
          <div class="empty-state">Loading live chat...</div>
        </div>
      </section>
    </div>`;
}

function homePage() {
  return `
    <main id="main" class="page">
      <section class="hero">
        <div class="container">
          <div>
            <div class="badge">${icons.shield}${t("heroBadge")}</div>
            <h1>${t("heroTitle")} <span class="highlight">${t("heroHighlight")}</span></h1>
            <p class="hero-subtitle">${t("heroSubtitle")} We provide self-help education, not official account support.</p>
            <form class="search-shell" id="hero-search">
              <input id="hero-search-input" type="search" placeholder="${t("searchPlaceholder")}" />
              <button class="button" type="submit">${icons.search}${t("searchButton")}</button>
            </form>
            <div class="feature-strip">
              <div class="feature-item">${icon("bot")}<span><strong>Free AI Tools</strong><span>Self-help chat, reply generator, inbox organizer, and unsubscribe helper.</span></span></div>
              <div class="feature-item">${icon("mail")}<span><strong>60+ How-To Guides</strong><span>Tutorials for ${providers.length}+ email services and clients.</span></span></div>
              <div class="feature-item">${icon("shield")}<span><strong>100% Independent</strong><span>Clear disclaimers and official support links on every provider page.</span></span></div>
            </div>
          </div>
          <div class="hero-panel">
            <div class="visual-board">
              <h2>Popular Providers</h2>
              <div class="provider-cloud">
                ${providers
                  .slice(0, 9)
                  .map((provider) => `<a class="logo-tile" href="${providerUrl(provider)}" data-link><img src="${provider.logo}" alt="" onerror="this.outerHTML='<strong>${provider.name
                    .slice(0, 1)
                    .replace(/'/g, "")}</strong>'"><span>${provider.name}</span></a>`)
                  .join("")}
              </div>
            </div>
            <div class="visual-board mini-chat">
              <div class="bubble user">Gmail not receiving emails</div>
              <div class="bubble bot">Check spam, filters, blocked senders, forwarding, storage, and provider status first.</div>
            </div>
          </div>
        </div>
      </section>
      ${topicsSection()}
      ${providersSection(true)}
      ${toolsSection()}
      <section class="stats-band"><div class="container stats-grid"><div class="stat"><strong>60+</strong><span>Help Articles</span></div><div class="stat"><strong>${providers.length}+</strong><span>Email Providers</span></div><div class="stat"><strong>4</strong><span>AI Tools</span></div></div></section>
      <section class="section">
        <div class="container">
          <div class="section-heading"><p class="section-kicker">Simple Workflow</p><h2>How It Works</h2></div>
          <div class="grid three">
            ${[
              ["1", "Tell us your issue", "Click a category or type your problem in the AI support chat."],
              ["2", "Get instant guidance", "Read provider-specific steps and official links."],
              ["3", "Fix it safely", "Follow the guide at your pace without sharing private credentials."]
            ]
              .map((item) => `<div class="card"><div class="card-body"><span class="pill primary">${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p></div></div>`)
              .join("")}
          </div>
        </div>
      </section>
      <section class="section alt">
        <div class="container">
          <div class="notice info"><strong>Transparency Notice:</strong> Email is a free, independent educational website. For official account support, billing, password resets, or identity verification, visit your provider's official website directly.</div>
        </div>
      </section>
    </main>`;
}

function topicsSection() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <p class="section-kicker">Self-Help Library</p>
          <h2>Common Email How-To Guides</h2>
          <p>Browse independent troubleshooting tutorials. No account required.</p>
        </div>
        <div class="grid four">
          ${topics
            .slice(0, 8)
            .map(
              (topicItem) => `
              <a class="card topic-card" href="${articleUrl(providers[0], topicItem)}" data-link>
                <div class="card-body">${icon(topicItem.icon)}<h3>${topicItem.title}</h3><p>${topicItem.desc}</p></div>
              </a>`
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function providersSection(limit) {
  const list = limit ? providers.slice(0, 8) : providers;
  return `
    <section class="section alt">
      <div class="container">
        <div class="section-heading">
          <p class="section-kicker">Provider Guides</p>
          <h2>Browse Email Providers</h2>
          <p>Find settings, official links, recovery guidance, and common fixes for popular services.</p>
        </div>
        <div class="grid four">
          ${list.map(providerCard).join("")}
        </div>
        ${limit ? `<div class="page-actions" style="justify-content:center"><a class="button secondary" href="/providers" data-link>View all providers</a></div>` : ""}
      </div>
    </section>`;
}

function providerCard(provider) {
  return `
    <a class="card" href="${providerUrl(provider)}" data-link>
      <div class="card-body provider-card">
        ${logo(provider)}
        <div>
          <h3>${provider.name}</h3>
          <p>${provider.description}</p>
          <div class="link-row"><span class="pill primary">${categories[provider.category]}</span></div>
        </div>
      </div>
    </a>`;
}

function toolsSection() {
  const featured = aiTools.find((tool) => tool.featured);
  const others = aiTools.filter((tool) => !tool.featured);
  return `
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <p class="section-kicker">Free AI Tools</p>
          <h2>AI-Powered Email Helpers</h2>
          <p>Use self-help tools for troubleshooting, drafts, inbox sorting, and cleanup planning.</p>
        </div>
        <div class="card" style="margin-bottom:18px">
          <div class="card-body" style="display:grid;grid-template-columns:minmax(0,1fr) auto;gap:18px;align-items:center">
            <div>${icon(featured.icon)}<h3>${featured.title}</h3><p>${featured.desc}</p></div>
            <a class="button" href="${featured.link}" data-link>${featured.cta}</a>
          </div>
        </div>
        <div class="grid three">
          ${others
            .map(
              (tool) => `
              <a class="card" href="${tool.link}" data-link>
                <div class="card-body">${icon(tool.icon)}<h3>${tool.title}</h3><p>${tool.desc}</p><div class="link-row"><span class="pill primary">${tool.cta}</span></div></div>
              </a>`
            )
            .join("")}
        </div>
      </div>
    </section>`;
}

function providersPage() {
  return `
    <main id="main" class="page">
      <section class="page-hero">
        <div class="container">
          <span class="badge">${icons.mail}All Email Providers</span>
          <h1>Independent Help Guides for ${providers.length}+ Providers</h1>
          <p>Settings, official links, provider-specific articles, and common troubleshooting steps.</p>
        </div>
      </section>
      ${Object.entries(categories)
        .map(([key, label]) => {
          const rows = providers.filter((provider) => provider.category === key);
          if (!rows.length) return "";
          return `<section class="section"><div class="container"><div class="section-heading align-left"><h2>${label}</h2></div><div class="grid four">${rows.map(providerCard).join("")}</div></div></section>`;
        })
        .join("")}
    </main>`;
}

function providerPage(provider) {
  const meta = providerGuideMeta(provider);
  const safeName = escapeHtml(meta.shortName);
  const brandName = escapeHtml(meta.brandName);
  const sourcePage = escapeHtml(`${window.location.pathname}${window.location.search}`);
  const initialTab = new URL(window.location.href).searchParams.get("section") === "articles" ? "articles" : "troubleshooter";
  const issueCards =
    provider.id === "gmail"
      ? [
          ["Login & Password", "Sign-in, password reset, and access guidance for Gmail.", "lock"],
          ["Gmail Not Receiving Emails", "Check filters, spam, forwarding, blocked senders, and storage.", "inbox"],
          ["Account Security", "Review suspicious activity, recovery options, and safer sign-in habits.", "shield"],
          ["Gmail Setup", "Set up Gmail on web, desktop mail apps, and common devices.", "settings"],
          ["Mobile Setup", "Add Gmail to phone mail apps and fix sync or notification issues.", "phone"],
          ["Storage Full", "Review storage limits, large attachments, trash, and cleanup steps.", "trash"],
          ["Attachment Issues", "Troubleshoot Gmail upload, download, file size, and blocked files.", "paperclip"],
          ["Email Forwarding", "Review forwarding rules, filters, POP/IMAP, and delivery paths.", "reply"]
        ]
      : [
          ["Login & Password", `Sign-in, password reset, and access guidance for ${meta.shortName}.`, "lock"],
          ["Account Recovery", "Review recovery options and account access guidance.", "shield"],
          [`${meta.shortName} Not Loading`, "Check browser, network, app, and device loading problems.", "settings"],
          ["Send/Receive Issue", "Check filters, blocked senders, spam folders, forwarding, and storage.", "inbox"],
          ["Storage Issue", "Find storage limits, large attachments, trash, and inbox cleanup steps.", "trash"],
          ["Spam / Security", "Review suspicious activity, spam settings, and safer account habits.", "alert"],
          ["Mobile App Issue", `Add ${meta.shortName} to phone mail apps and fix sync problems.`, "phone"],
          ["Two-Step Verification", "Review 2-step verification, app passwords, and sign-in checks.", "lock"]
        ];
  const articles = [
    [`How to set up ${meta.shortName} on mobile`, `A simple mobile setup guide for ${meta.shortName} on common devices.`, "phone"],
    [`Why ${meta.shortName} is not receiving emails`, "Understand the most common inbox delivery causes and checks.", "inbox"],
    [`How to manage ${meta.shortName} storage`, "Clean mailbox space and understand storage-related delivery issues.", "trash"],
    [`How to improve ${meta.shortName} account security`, "Review practical security settings and safer account habits.", "shield"],
    [`How to set up email forwarding in ${meta.shortName}`, "Check forwarding, filters, and copy-to-inbox behavior.", "reply"],
    [`How to fix ${meta.shortName} attachment issues`, "Fix common attachment upload, download, and file-size problems.", "paperclip"]
  ];
  const quickLinks = ["Login & Password", `${meta.shortName} Setup`, "Not Receiving Emails", "Storage Full", "Account Security", "Mobile Setup"];
  const faqRows =
    provider.id === "gmail"
      ? [
          ["Is this Gmail support?", "No. This is an independent educational resource and is not affiliated with Google or Gmail."],
          ["Why is Gmail not receiving emails?", "It may be caused by filters, blocked senders, storage limits, forwarding settings, spam folder rules, or app settings."],
          ["How do I set up Gmail on my phone?", "You can set up Gmail using the Gmail app or your phone's mail app with the correct account settings."],
          ["What should I do if Gmail storage is full?", "Review large attachments, delete unnecessary emails, empty trash, and check account storage usage."],
          ["Can you recover my Gmail account?", "We provide educational guidance only. Account recovery must be completed through Google's official recovery process."]
        ]
      : [
          [`Is this connected with ${meta.shortName}?`, `No. This is an independent educational resource and is not affiliated with ${meta.brandName}.`],
          [`Why is ${meta.shortName} not receiving emails?`, "Common causes include filters, spam placement, forwarding rules, blocked senders, full storage, or temporary service delays."],
          [`How do I set up ${meta.shortName} on my phone?`, "Use the provider's mail app when available, or check IMAP/SMTP settings before adding the account to another mail app."],
          [`What should I do if my ${meta.shortName} storage is full?`, "Review large messages and attachments, empty trash after checking it, and confirm any storage shared with related services."],
          [`Can you recover my ${meta.shortName} account?`, `No. For account recovery, use the official ${meta.brandName} recovery process and keep recovery codes private.`]
        ];
  return `
    <main id="main" class="page provider-guide-page" style="--provider-color:${escapeHtml(meta.color)}">
      <section class="provider-guide-hero">
        <div class="container">
          <div class="provider-guide-banner">
            <div class="provider-guide-title">
              ${logo(provider)}
              <div>
                <h1>${safeName} Help Guide</h1>
                <p>Independent resource - not affiliated with ${provider.id === "gmail" ? "Gmail" : brandName}</p>
              </div>
            </div>
            <div class="provider-guide-actions">
              <a class="button" href="${providerUrl(provider)}?section=articles" data-link>${safeName} Help Articles</a>
              <a class="button secondary" href="/providers" data-link>All Providers</a>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container article-layout">
          <div class="article-content">
            <div class="provider-tabs" data-provider-tabs>
              <div class="provider-tablist" role="tablist" aria-label="${provider.name} help sections">
                <button class="provider-tab ${initialTab === "troubleshooter" ? "active" : ""}" type="button" data-provider-tab="troubleshooter">Troubleshooter</button>
                <button class="provider-tab ${initialTab === "articles" ? "active" : ""}" type="button" data-provider-tab="articles">Help Articles</button>
                <button class="provider-tab" type="button" data-provider-tab="ticket">Submit Ticket</button>
              </div>
              <section class="provider-tab-panel ${initialTab === "troubleshooter" ? "active" : ""}" data-provider-panel="troubleshooter">
                <div class="support-callout provider-callout">
                  <span class="brand-mark">${icons.bot}</span>
                  <div>
                    <h2>Need help faster? Chat with our team</h2>
                    <p>Get guidance from our independent support assistant.</p>
                  </div>
                  <button class="button provider-red-button" type="button" data-provider-open-chat data-provider-domain="${escapeHtml(providerChatDomain(provider))}">Start Chat Now</button>
                </div>
                <div class="notice info">Or select your issue below for step-by-step guidance.</div>
                <div class="card provider-troubleshooting-card"><div class="card-body">
                  <h2>What are you having trouble with?</h2>
                  <p class="meta-line">Select your issue for step-by-step solutions.</p>
                  <div class="provider-issue-grid">
                    ${issueCards
                      .map(
                        ([title, desc, iconName]) => `
                        <article class="issue-card">
                          ${icon(iconName)}
                          <h3>${escapeHtml(title)}</h3>
                          <p>${escapeHtml(desc)}</p>
                          <button class="button secondary small" type="button" data-provider-scroll-form>View Guide</button>
                        </article>`
                      )
                      .join("")}
                  </div>
                </div></div>
                <div class="support-callout compact">
                  <span class="brand-mark">${icons.bot}</span>
                  <div>
                    <h2>Can't find your issue?</h2>
                    <p>Chat with our assistant.</p>
                  </div>
                  <button class="button secondary" type="button" data-provider-scroll-form>Start Chat</button>
                </div>
              </section>
              <section class="provider-tab-panel ${initialTab === "articles" ? "active" : ""}" data-provider-panel="articles">
                <div class="card"><div class="card-body">
                  <h2>${safeName} Help Articles</h2>
                  <div class="provider-article-grid">${articles
                    .map(
                      ([title, desc, iconName]) => `
                      <article class="provider-article-card">
                        ${icon(iconName)}
                        <h3>${escapeHtml(title)}</h3>
                        <p>${escapeHtml(desc)}</p>
                        <button class="button secondary small" type="button" data-provider-scroll-form>Read Guide</button>
                      </article>`
                    )
                    .join("")}</div>
                </div></div>
              </section>
              <section class="provider-tab-panel" data-provider-panel="ticket">
                <div class="card provider-form-card" id="provider-support-form"><div class="card-body">
                  <h2>Submit a ${safeName} Help Request</h2>
                  <p class="meta-line">Tell us about your issue and our independent assistant will guide you.</p>
                  <form class="form provider-ticket-form" data-provider-name="${escapeHtml(meta.shortName)}">
                    <input type="hidden" name="sourcePage" value="${sourcePage}">
                    <input type="hidden" name="subject" value="${safeName} help request">
                    <div class="form-row">
                      <div class="field"><label>Full Name</label><input name="name" required placeholder="Your full name"></div>
                      <div class="field"><label>Email Address</label><input name="email" type="email" required placeholder="you@example.com"></div>
                    </div>
                    <div class="form-row">
                      <div class="field"><label>Phone Number</label><input name="phone" inputmode="tel" placeholder="Phone number"></div>
                      <div class="field"><label>Problem Type</label><select name="category" required><option value="">Select problem type</option><option>Login problem</option><option>Password reset guide</option><option>Not receiving emails</option><option>Email setup</option><option>Storage full</option><option>Account security</option><option>Other issue</option></select></div>
                    </div>
                    <div class="field"><label>Message</label><textarea name="message" required placeholder="Describe the issue. Do not include passwords, OTPs, private emails, or recovery codes."></textarea></div>
                    <button class="button" type="submit">${icons.reply}Submit Request</button>
                  </form>
                  <div class="provider-ticket-status" style="margin-top:16px"></div>
                </div></div>
              </section>
            </div>
          </div>
          <aside class="provider-sidebar">
            <div class="card support-card provider-help-card"><div class="card-body">
              ${icon("bot")}
              <h3>Need Help Now?</h3>
              <p class="section-kicker">Get instant assistance</p>
              <p>Chat with our AI-powered support assistant for immediate help with your ${safeName} issues.</p>
              <button class="button full provider-red-button" type="button" data-provider-open-chat data-provider-domain="${escapeHtml(providerChatDomain(provider))}">Start Live Chat</button>
              <small>Instant &bull; Free &bull; Independent resource, not affiliated with ${safeName}</small>
            </div></div>
            <div class="card"><div class="card-body">
              <h3>Quick Links</h3>
              <div class="category-list">${quickLinks
                .map((label) => `<button class="category-item button-reset" type="button" data-provider-scroll-form><span>${escapeHtml(label)}</span><span>${icons.chevron}</span></button>`)
                .join("")}</div>
            </div></div>
            <div class="card"><div class="card-body">
              <h3>Provider Details</h3>
              <dl class="provider-details-list">
                <div><dt>Provider</dt><dd>${provider.id === "gmail" ? "Gmail / Google Mail" : safeName}</dd></div>
                <div><dt>Category</dt><dd>Email Service</dd></div>
                <div><dt>Guide Type</dt><dd>Independent Help Articles</dd></div>
                <div><dt>Affiliation</dt><dd>Not affiliated with ${brandName}</dd></div>
              </dl>
            </div></div>
          </aside>
        </div>
      </section>
      <section class="section provider-faq-section">
        <div class="container">
          <div class="section-heading">
            <p class="section-kicker">FAQ</p>
            <h2>${safeName} guide questions</h2>
          </div>
          <div class="faq-list provider-faq-list">
            ${faqRows
              .map(
                ([question, answer]) => `
                <div class="faq-item">
                  <button class="faq-toggle" type="button">${escapeHtml(question)}</button>
                  <div class="answer">${escapeHtml(answer)}</div>
                </div>`
              )
              .join("")}
          </div>
          <div class="notice provider-footer-disclaimer">This website provides independent educational guides only. It is not affiliated with, endorsed by, or connected to ${provider.id === "gmail" ? "Google, Gmail, or Alphabet Inc." : brandName}.</div>
        </div>
      </section>
    </main>`;
}

function providerGuideMeta(provider) {
  const map = {
    gmail: { displayName: "Google Mail / Gmail", shortName: "Gmail", brandName: "Google or Gmail", color: "#ef4444" },
    outlook: { displayName: "Outlook / Hotmail", shortName: "Outlook", brandName: "Microsoft or Outlook", color: "#2563eb" },
    yahoo: { displayName: "Yahoo Mail", shortName: "Yahoo Mail", brandName: "Yahoo", color: "#7c3aed" },
    icloud: { displayName: "iCloud Mail", shortName: "iCloud Mail", brandName: "Apple or iCloud", color: "#0ea5e9" },
    protonmail: { displayName: "Proton Mail", shortName: "Proton Mail", brandName: "Proton Mail", color: "#6d4aff" },
    aol: { displayName: "AOL Mail", shortName: "AOL Mail", brandName: "AOL", color: "#f59e0b" },
    att: { displayName: "AT&T Mail", shortName: "AT&T Mail", brandName: "AT&T", color: "#0ea5e9" },
    xfinity: { displayName: "Xfinity / Comcast Email", shortName: "Comcast Email", brandName: "Comcast or Xfinity", color: "#7c3aed" },
    verizon: { displayName: "Verizon Mail", shortName: "Verizon Mail", brandName: "Verizon", color: "#dc2626" },
    cox: { displayName: "Cox Email", shortName: "Cox Email", brandName: "Cox", color: "#2563eb" },
    spectrum: { displayName: "Spectrum Email", shortName: "Spectrum Email", brandName: "Spectrum", color: "#2563eb" }
  };
  return {
    displayName: provider.name,
    shortName: provider.name,
    brandName: provider.name,
    color: "#2563eb",
    ...(map[provider.id] || {})
  };
}

function settingsTable(provider) {
  return `
    <div class="table-wrap">
      <table class="server-table">
        <thead><tr><th>Protocol</th><th>Server</th><th>Port</th><th>Security</th></tr></thead>
        <tbody>
          ${Object.entries(provider.settings)
            .map(([protocol, setting]) => `<tr><td>${protocol.toUpperCase()}</td><td>${setting[0]}</td><td>${setting[1]}</td><td>${setting[2]}</td></tr>`)
            .join("")}
        </tbody>
      </table>
    </div>`;
}

function articlePage(provider, topicItem) {
  const related = topics.filter((item) => item.id !== topicItem.id).slice(0, 5);
  return `
    <main id="main" class="page">
      <section class="page-hero">
        <div class="container">
          <a class="button secondary" href="${providerUrl(provider)}" data-link>Back to ${provider.name}</a>
          <h1>${provider.name}: ${topicItem.title}</h1>
          <p>${topicItem.desc}</p>
        </div>
      </section>
      <section class="section">
        <div class="container article-layout">
          <article class="article-content">
            <div class="notice">Do not share passwords, OTPs, recovery codes, payment details, or private mailbox content with unofficial websites or chats.</div>
            <div class="card"><div class="card-body">
              <h2>Step-by-Step Guide</h2>
              <ol class="steps">${topicItem.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
            </div></div>
            <div class="card"><div class="card-body">
              <h2>${provider.name} Official Support</h2>
              <p>For account-specific recovery, billing, identity verification, or policy questions, use ${provider.name}'s official channels.</p>
              <div class="page-actions">
                <a class="button" href="${provider.supportUrl}" target="_blank" rel="noopener">${icons.external}Official Support</a>
                <a class="button secondary" href="${provider.officialUrl}" target="_blank" rel="noopener">${icons.external}Open Mail</a>
              </div>
            </div></div>
            <div class="card"><div class="card-body">
              <h2>Useful Server Settings</h2>
              ${settingsTable(provider)}
            </div></div>
          </article>
          <aside class="card"><div class="card-body">
            <h3>Related Guides</h3>
            <div class="category-list">${related.map((item) => `<a class="category-item" href="${articleUrl(provider, item)}" data-link><span>${item.title}</span><span>${icons.external}</span></a>`).join("")}</div>
          </div></aside>
        </div>
      </section>
    </main>`;
}

function chatProviderFromQuery() {
  const value = new URL(window.location.href).searchParams.get("provider") || "";
  const key = value.toLowerCase();
  const map = {
    "gmail.com": { name: "Gmail", id: "gmail" },
    gmail: { name: "Gmail", id: "gmail" },
    "icloud.com": { name: "iCloud Mail", id: "icloud" },
    icloud: { name: "iCloud Mail", id: "icloud" },
    "yahoo.com": { name: "Yahoo Mail", id: "yahoo" },
    yahoo: { name: "Yahoo Mail", id: "yahoo" },
    "outlook.com": { name: "Outlook", id: "outlook" },
    outlook: { name: "Outlook", id: "outlook" },
    "hotmail.com": { name: "Outlook", id: "outlook" }
  };
  if (map[key]) return map[key];
  const provider = findProviderByRoute(key) || providers.find((item) => item.slug === key);
  return provider ? { name: providerGuideMeta(provider).shortName, id: provider.id } : { name: "Email Help", id: "email" };
}

function chatWelcomeMessage(providerName) {
  return `Hi 👋 Welcome to our independent ${providerName} help center. I'm an AI assistant here to help troubleshoot your issue.

Please note: We are an independent resource and not affiliated with ${providerName}.

Could you tell me what issue you're facing?`;
}

function chatStateKey(providerDomain) {
  return `ehc_ai_chat_state_${String(providerDomain || "email").toLowerCase().replace(/[^a-z0-9]+/g, "_")}`;
}

function readChatState(providerDomain) {
  return readLocalJson(chatStateKey(providerDomain), { started: false, leadData: null, messages: [] });
}

function writeChatState(providerDomain, state) {
  localStorage.setItem(chatStateKey(providerDomain), JSON.stringify(state));
}

function chatInitialMessage(providerName, leadData) {
  const name = (leadData?.name || "").trim() || "there";
  const issue = (leadData?.issue || "").trim() || "your Gmail issue";
  const message = (leadData?.message || "").trim();
  return `Hi ${name}. Welcome to our independent ${providerName} help center. I'm an AI assistant here to help troubleshoot your issue.

Warning: We are an independent resource and not affiliated with ${providerName}.

I can see you're experiencing: ${issue}${message ? `

Your message: ${message}` : ""}

Let me help you work through this. Could you tell me a bit more about when this issue started?`;
}

const quickReplyResponses = {
  "Yes, I've already tried that":
    "I understand. Let's try the next step. Please check whether this issue happens on another browser, device, or internet connection.",
  "Can you explain that differently?":
    "Of course. I'll explain it more simply. We'll check your login, inbox settings, storage, spam folder, filters, and device setup one by one.",
  "This started happening today":
    "Thanks. If it started today, it may be related to recent password changes, browser cache, device settings, storage limits, or temporary email delays.",
  "How long will this take?":
    "Most basic email troubleshooting steps take a few minutes. More complex account access issues may require using Gmail's official recovery process.",
  "Request Callback":
    "Your callback request has been received. An admin or support team member can review this request and contact you if callback handling is enabled. This is independent guidance only, not official Gmail support."
};

function quickReplyResponse(prompt, leadData) {
  const phone = (leadData?.phone || "").trim() || "your phone number";
  if (prompt === "Request Callback") {
    return `Your callback request has been received. Phone number: ${phone}. An admin or support team member can review this request and contact you if callback handling is enabled. This is independent guidance only, not official Gmail support.`;
  }
  return quickReplyResponses[prompt] || "Let's keep going step by step.";
}

function freeTextResponse(leadData) {
  return "Thanks for the details. Based on what you shared, I recommend checking login status, storage, filters, spam folder, and device settings first. I can guide you step by step.";
}

function chatPage() {
  const chatProvider = chatProviderFromQuery();
  const issue = new URL(window.location.href).searchParams.get("issue") || "";
  const state = readChatState(chatProvider.id);
  const chatStarted = Boolean(state.started);
  const leadData = state.leadData || { name: "", email: "", phone: "", issue: issue || "", message: "" };
  const chatTitle = `${chatProvider.name} Help Chat`;
  const providerLogo = providers.find((provider) => provider.id === chatProvider.id)?.logo || "";
  const quickReplies = ["Yes, I've already tried that", "Can you explain that differently?", "This started happening today", "How long will this take?", "Request Callback"];
  return chatStarted
    ? `
    <main id="main" class="page ai-chat-page" data-chat-provider="${escapeHtml(chatProvider.name)}" data-chat-issue="${escapeHtml(leadData.issue || issue || "")}" data-chat-started="true">
      <section class="section ai-chat-section">
        <div class="container ai-chat-shell">
          <div class="card ai-chat-card">
            <div class="ai-chat-head">
              <div>
                <button class="ai-chat-back" type="button" data-chat-back aria-label="Back to ${escapeHtml(chatProvider.name)} provider page">${icons.chevron}</button>
                <strong>${escapeHtml(chatProvider.name)} Help</strong>
                <span>Independent</span>
                <span><i></i> Online now</span>
              </div>
              ${icons.bot}
            </div>
            <div id="chat-window" class="chat-window ai-chat-window"></div>
            <div class="quick-reply-row quick-replies">
              ${quickReplies
                .map((prompt) =>
                  `<button class="quick-reply-btn quick-prompt" type="button" data-prompt="${escapeHtml(prompt)}">${prompt === "Request Callback" ? `${icons.phone}<span>${escapeHtml(prompt)}</span>` : escapeHtml(prompt)}</button>`
                )
                .join("")}
            </div>
            <form class="chat-form" id="chat-form">
              <input id="chat-input" type="text" placeholder="Type your reply..." autocomplete="off" />
              <button class="button" type="submit">${icons.reply}Send</button>
            </form>
          </div>
        </div>
      </section>
    </main>`
    : `
    <main id="main" class="page ai-chat-page" data-chat-provider="${escapeHtml(chatProvider.name)}" data-chat-issue="${escapeHtml(issue)}" data-chat-started="false">
      <section class="section ai-chat-section">
        <div class="container ai-chat-start-shell">
          <div class="card ai-chat-start-card">
            <div class="card-body">
              <div class="ai-chat-start-top">
                <div class="ai-chat-start-icon">${providerLogo ? `<img src="${escapeHtml(providerLogo)}" alt="${escapeHtml(chatProvider.name)}">` : icons.bot}</div>
                <div class="ai-chat-start-copy">
                  <h1>${escapeHtml(chatTitle)}</h1>
                  <p class="meta-line">Independent AI-powered support assistant</p>
                  <p class="meta-line small">Not affiliated with ${escapeHtml(chatProvider.name)}</p>
                  <div class="ai-chat-status"><i></i> AI assistant online</div>
                </div>
              </div>
              <form class="form ai-chat-start-form" id="chat-lead-form">
                <div class="form-row single">
                  <div class="field"><label>Full Name</label><input name="name" required placeholder="Full Name" value="${escapeHtml(leadData.name || "")}"></div>
                </div>
                <div class="form-row single">
                  <div class="field"><label>Email Address</label><input name="email" type="email" required placeholder="you@example.com" value="${escapeHtml(leadData.email || "")}"></div>
                </div>
                <div class="form-row single">
                  <div class="field"><label>Phone Number</label><input name="phone" inputmode="tel" required placeholder="Phone Number" value="${escapeHtml(leadData.phone || "")}"></div>
                </div>
                <div class="form-row single">
                  <div class="field"><label>Describe Your Problem</label><textarea name="issue" required placeholder="Please describe your issue in detail...">${escapeHtml(leadData.issue || issue || "")}</textarea></div>
                </div>
                <input type="hidden" name="company" value="${escapeHtml(chatProvider.name)}">
                <button class="button provider-red-button" type="submit">Start Help Chat</button>
                <div class="helper ai-chat-secure">Secure &amp; encrypted connection</div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>`;
}


function inboxCategorizerPage() {
  return toolPage(
    "Inbox Categorizer",
    "Paste email subjects or short snippets. The demo sorts them into useful buckets locally in your browser.",
    `
      <form class="form" id="categorizer-form">
        <div class="field"><label>Email subjects</label><textarea id="categorizer-input" placeholder="Invoice due tomorrow\nYour weekly newsletter\nSecurity alert: new login"></textarea></div>
        <button class="button" type="submit">${icons.inbox}Categorize</button>
      </form>
      <div id="categorizer-output" class="result-box"></div>
    `,
    "categorizer"
  );
}

function replyGeneratorPage() {
  return toolPage(
    "Reply Generator",
    "Draft a professional email reply from a brief context. Keep private account details out of the prompt.",
    `
      <form class="form" id="reply-form">
        <div class="field"><label>Context</label><textarea id="reply-context" placeholder="Customer asks when their mailbox migration will finish."></textarea></div>
        <div class="form-row">
          <div class="field"><label>Tone</label><select id="reply-tone"><option>Professional</option><option>Friendly</option><option>Concise</option><option>Firm</option></select></div>
          <div class="field"><label>Length</label><select id="reply-length"><option>Short</option><option>Medium</option><option>Detailed</option></select></div>
        </div>
        <button class="button" type="submit">${icons.reply}Generate Reply</button>
      </form>
      <div id="reply-output" class="result-box"></div>
    `,
    "reply"
  );
}

function unsubscribePage() {
  return toolPage(
    "Unsubscribe Helper",
    "Paste senders or subject lines to identify likely newsletters and cleanup candidates.",
    `
      <form class="form" id="unsubscribe-form">
        <div class="field"><label>Messages</label><textarea id="unsubscribe-input" placeholder="Deals newsletter - 50% off\nReceipt from store\nSocial network weekly digest"></textarea></div>
        <button class="button" type="submit">${icons.trash}Find Cleanup Items</button>
      </form>
      <div id="unsubscribe-output" class="result-box"></div>
    `,
    "unsubscribe"
  );
}

function toolPage(title, subtitle, body, toolId) {
  return `
    <main id="main" class="page">
      <section class="page-hero">
        <div class="container"><span class="badge">${icons.bot}Free AI Tool</span><h1>${title}</h1><p>${subtitle}</p></div>
      </section>
      <section class="section">
        <div class="container tool-shell">
          <div class="card"><div class="card-body">${body}</div></div>
          <aside class="card"><div class="card-body">
            <h3>Privacy Reminder</h3>
            <p>This demo runs locally in the browser except chat and contact submissions, which are stored by your Node server.</p>
            <div class="link-row" style="display:grid">
              ${aiTools.filter((tool) => tool.title !== title).map((tool) => `<a class="button secondary" href="${tool.link}" data-link>${tool.title}</a>`).join("")}
            </div>
          </div></aside>
        </div>
      </section>
    </main>`;
}

function contactPage() {
  return `
    <main id="main" class="page">
      <section class="page-hero"><div class="container"><span class="badge">${icons.mail}Contact</span><h1>Contact Email</h1><p>Submit a self-help question or website inquiry. Do not send passwords, OTPs, or account recovery codes.</p></div></section>
      <section class="section">
        <div class="container tool-shell">
          <div class="card"><div class="card-body">
            <form class="form" id="contact-form">
              <input type="hidden" name="sourcePage" value="${escapeHtml(`${window.location.pathname}${window.location.search}`)}">
              <div class="form-row">
                <div class="field"><label>Name</label><input name="name" required placeholder="Your name"></div>
                <div class="field"><label>Phone</label><input name="phone" placeholder="Phone number"></div>
              </div>
              <div class="form-row">
                <div class="field"><label>Email</label><input name="email" type="email" required placeholder="you@example.com"></div>
                <div class="field"><label>Company / Provider</label><select name="category">${providerSelectOptions("Gmail")}<option>Website feedback</option><option>Advertising</option><option>Other</option></select></div>
              </div>
              <div class="form-row single">
                <div class="field"><label>Subject</label><input name="subject" required placeholder="How can we help?"></div>
              </div>
              <div class="field"><label>Message</label><textarea name="message" required placeholder="Describe the issue. Please do not include passwords, OTPs, private emails, or recovery codes."></textarea></div>
              <button class="button" type="submit">${icons.reply}Submit Form</button>
            </form>
            <div id="contact-status" style="margin-top:16px"></div>
          </div></div>
          <aside class="card"><div class="card-body">
            <h3>Official Account Support</h3>
            <p>For account recovery, billing, identity verification, or password resets, contact your provider directly.</p>
            <div class="category-list" style="margin-top:14px">${providers.slice(0, 5).map((provider) => `<a class="category-item" href="${provider.supportUrl}" target="_blank" rel="noopener"><span>${provider.name}</span><span>${icons.external}</span></a>`).join("")}</div>
          </div></aside>
        </div>
      </section>
    </main>`;
}

function faqPage() {
  return `
    <main id="main" class="page">
      <section class="page-hero"><div class="container"><span class="badge">${icons.shield}FAQ</span><h1>Frequently Asked Questions</h1><p>Clear answers about independence, safety, forms, chat, and admin storage.</p></div></section>
      <section class="section">
        <div class="container">
          <div class="faq-list">${faqItems
            .map(
              ([question, answer], index) => `
              <div class="faq-item ${index === 0 ? "open" : ""}">
                <button type="button" class="faq-toggle">${question}</button>
                <div class="answer">${answer}</div>
              </div>`
            )
            .join("")}</div>
        </div>
      </section>
    </main>`;
}

function aboutPage() {
  return `
    <main id="main" class="page">
      <section class="page-hero"><div class="container"><span class="badge">${icons.shield}About</span><h1>About Email</h1><p>We are an independent third-party educational resource for email troubleshooting and inbox tools.</p></div></section>
      <section class="section">
        <div class="container">
          <div class="notice">Email is not affiliated with Google, Microsoft, Yahoo, Apple, AOL, AT&T, Comcast, Verizon, or any other email provider.</div>
          <div class="grid two" style="margin-top:20px">
            <div class="card"><div class="card-body"><h3>What We Do</h3><ol class="steps"><li>Provide free educational guides and tutorials.</li><li>Offer AI-style tools for inbox organization and replies.</li><li>Direct users to official provider support when needed.</li><li>Explain settings and safe account practices.</li></ol></div></div>
            <div class="card"><div class="card-body"><h3>What We Do Not Do</h3><ol class="steps"><li>We do not access or manage accounts.</li><li>We do not reset passwords on anyone's behalf.</li><li>We do not collect email credentials.</li><li>We do not represent an email provider.</li></ol></div></div>
          </div>
        </div>
      </section>
    </main>`;
}

function legalPage(type) {
  const privacy = type === "privacy";
  const sections = privacy
    ? [
        ["Information We Collect", "Contact forms and chat messages submitted on this site are stored locally on the Node server for site administration."],
        ["Information We Do Not Need", "Do not submit passwords, OTPs, recovery codes, payment details, or private mailbox content."],
        ["How Data Is Used", "Submissions are used to respond to user inquiries, improve the website, and review chat quality."],
        ["Retention", "Local JSON files can be deleted by the site owner at any time from the data folder."],
        ["Contact", "Questions can be submitted through the contact form."]
      ]
    : [
        ["Acceptance of Terms", "By using the site, you agree that it is an independent educational resource."],
        ["Description of Service", "The site provides email guides, provider links, chat-style self-help, and local admin views."],
        ["No Official Support", "The site cannot access accounts, verify identity, reset passwords, or act for any provider."],
        ["User Responsibility", "Use official provider channels for account-specific support and protect your credentials."],
        ["Changes", "Terms may be updated by editing this local project."]
      ];
  return `
    <main id="main" class="page">
      <section class="page-hero"><div class="container"><span class="badge">${icons.shield}${privacy ? "Privacy" : "Terms"}</span><h1>${privacy ? "Privacy Policy" : "Terms of Service"}</h1><p>Last updated: June 1, 2026</p></div></section>
      <section class="section"><div class="container article-content">${sections
        .map(([title, body]) => `<section class="card"><div class="card-body"><h2>${title}</h2><p>${body}</p></div></section>`)
        .join("")}</div></section>
    </main>`;
}

function adsPage() {
  return `
    <main id="main" class="page">
      <section class="page-hero"><div class="container"><span class="badge">${icons.chart}Ads</span><h1>Advertising & Sponsorship</h1><p>Information page for ad placements, sponsorship disclosures, and brand safety rules.</p></div></section>
      <section class="section"><div class="container grid two"><div class="card"><div class="card-body"><h3>Placement Rules</h3><p>Ads must be clearly labeled and must not imply official affiliation with any email provider.</p></div></div><div class="card"><div class="card-body"><h3>Disallowed Claims</h3><p>No ad may claim password reset access, account recovery authority, or direct provider representation.</p></div></div></div></section>
    </main>`;
}

function authPage(reset = false) {
  if (reset) {
    return `
      <main id="main" class="page">
        <section class="page-hero"><div class="container"><span class="badge">${icons.lock}Reset Password</span><h1>Password Reset</h1><p>Ask the site owner to reset <code>ADMIN_ID</code> and <code>ADMIN_PASSWORD</code> on the server.</p></div></section>
      </main>`;
  }
  return adminLoginPage();
}

function adminLoginPage() {
  return `
    <main id="main" class="page">
      <section class="page-hero"><div class="container"><span class="badge">${icons.lock}Admin Login</span><h1>Admin Login</h1><p>Use admin ID and password to open live chat, support forms, and reports.</p></div></section>
      <section class="section"><div class="container" style="max-width:560px"><div class="card"><div class="card-body">
        <div class="notice info" style="margin-bottom:16px"><strong>Default login:</strong> Admin ID <code>admin</code> and password <code>admin123</code>.</div>
        <form class="form" id="admin-login-form">
          <div class="field"><label>Admin ID</label><input name="adminId" required autocomplete="username" placeholder="Default: admin"></div>
          <div class="field"><label>Password</label><input type="password" name="password" required autocomplete="current-password" placeholder="Default: admin123"></div>
          <button class="button" type="submit">${icons.lock}Login</button>
        </form>
        <div id="admin-login-status" style="margin-top:14px"></div>
      </div></div></div></section>
    </main>`;
}

function adminPage(kind) {
  const labels = adminNavLabels();
  const active = kind === "chat" ? "live" : kind === "leads" ? "support" : labels[kind] ? kind : "dashboard";
  return `
    <main id="main" class="page admin-page">
      <header class="admin-mobile-topbar">
        <button class="icon-btn admin-menu-toggle" id="admin-menu-toggle" type="button" aria-label="Open admin menu">${icons.menu}</button>
        <div class="admin-mobile-brand"><span>${icons.shield}</span><strong>Admin</strong></div>
        <button class="button secondary small" id="admin-logout-mobile" type="button">${icons.reply}Logout</button>
      </header>
      <section class="admin-hero">
        <div class="container">
          <div class="admin-hero-card">
            <span class="admin-hero-icon">${icons.reply}<i></i></span>
            <div><h1>${active === "dashboard" ? "Live Chat Panel" : labels[active]}</h1><p>${active === "dashboard" ? "Monitor chats, visitors & leads" : "Manage chats, visitors, forms, reports, and settings"}</p></div>
          </div>
        </div>
      </section>
      <section class="section admin-section">
        <div class="container admin-layout">
          <nav class="card admin-nav">
            ${Object.keys(labels).map((key) => `<a class="${active === key ? "active" : ""}" href="${adminNavHref(key)}" data-link>${labels[key]}</a>`).join("")}
          </nav>
          <div id="admin-content"><div class="empty-state">Loading admin data...</div></div>
        </div>
      </section>
      ${adminBottomNav(active)}
    </main>`;
}

function searchPage(query) {
  const term = decodeURIComponent(query || "").toLowerCase();
  const providerResults = providers.filter((provider) => [provider.name, provider.slug, provider.description].join(" ").toLowerCase().includes(term));
  const topicResults = topics.filter((topicItem) => [topicItem.title, topicItem.desc].join(" ").toLowerCase().includes(term));
  return `
    <main id="main" class="page">
      <section class="page-hero"><div class="container"><span class="badge">${icons.search}Search</span><h1>Search Results</h1><p>${term ? `Results for "${escapeHtml(term)}"` : "Enter a search term from the homepage."}</p></div></section>
      <section class="section"><div class="container">
        <div class="section-heading align-left"><h2>Providers</h2></div>
        <div class="grid four">${providerResults.length ? providerResults.map(providerCard).join("") : `<div class="empty-state">No provider matches.</div>`}</div>
        <div class="section-heading align-left" style="margin-top:34px"><h2>Guides</h2></div>
        <div class="grid four">${topicResults.length ? topicResults.map((topicItem) => `<a class="card topic-card" href="${articleUrl(providers[0], topicItem)}" data-link><div class="card-body">${icon(topicItem.icon)}<h3>${topicItem.title}</h3><p>${topicItem.desc}</p></div></a>`).join("") : `<div class="empty-state">No guide matches.</div>`}</div>
      </div></section>
    </main>`;
}

function notFoundPage() {
  return `<main id="main" class="page"><section class="page-hero"><div class="container"><h1>404</h1><p>Oops. Page not found.</p><div class="page-actions"><a class="button" href="/" data-link>Return to Home</a></div></div></section></main>`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function routeContent() {
  const url = new URL(window.location.href);
  const path = url.pathname.replace(/\/+$/, "") || "/";
  const parts = path.split("/").filter(Boolean);

  if (path === "/") return homePage();
  if (path === "/providers") return providersPage();
  if (path === "/ai/chat") return chatPage();
  if (path === "/ai/inbox-categorizer") return inboxCategorizerPage();
  if (path === "/ai/reply-generator") return replyGeneratorPage();
  if (path === "/ai/unsubscribe") return unsubscribePage();
  if (path === "/contact") return contactPage();
  if (path === "/faq") return faqPage();
  if (path === "/about") return aboutPage();
  if (path === "/privacy") return legalPage("privacy");
  if (path === "/terms") return legalPage("terms");
  if (path === "/ads") return adsPage();
  if (path === "/auth") return authPage(false);
  if (path === "/reset-password") return authPage(true);
  if (path === "/admin/login") return adminLoginPage();
  if (path === "/admin/chat") return adminPage("live");
  if (path === "/admin/leads") return adminPage("support");
  if (path === "/admin/forms") return adminPage("support");
  if (path.startsWith("/admin/")) return adminPage(parts[1]);
  if (path === "/search") return searchPage(url.searchParams.get("q") || "");
  if (parts[0] === "provider" && parts[1]) {
    const provider = findProviderByRoute(parts[1]);
    if (!provider) return notFoundPage();
    if (parts[2] === "article" && parts[3]) {
      const topicItem = topics.find((item) => item.id === parts[3]);
      return topicItem ? articlePage(provider, topicItem) : notFoundPage();
    }
    return providerPage(provider);
  }
  return notFoundPage();
}

function render() {
  const internalPath = isInternalPath();
  document.body.classList.toggle("menu-open", mobileOpen);
  document.body.classList.toggle("admin-shell", internalPath);
  document.getElementById("app").innerHTML = internalPath
    ? routeContent()
    : `${header()}${routeContent()}${universalSupportBand()}${footer()}${liveChatWidget()}`;
  bindGlobalEvents();
  bindPageEvents();
}

function bindGlobalEvents() {
  const languageSelect = document.getElementById("language-select");
  if (languageSelect) {
    languageSelect.addEventListener("change", (event) => {
      currentLanguage = event.target.value;
      localStorage.setItem("ehc_language", currentLanguage);
      render();
    });
  }

  const mobileButton = document.getElementById("mobile-menu-button");
  if (mobileButton) {
    mobileButton.addEventListener("click", () => {
      mobileOpen = true;
      render();
    });
  }

  const mobileClose = document.getElementById("mobile-close");
  if (mobileClose) {
    mobileClose.addEventListener("click", () => {
      mobileOpen = false;
      render();
    });
  }

  document.querySelectorAll("[data-open-live-chat]").forEach((button) => {
    button.addEventListener("click", () => {
      if (isInternalPath()) return;
      const provider = currentProviderFromPath();
      if (provider) {
        openChat(providerChatDomain(provider));
        return;
      }
      localStorage.setItem("ehc_live_chat_open", "true");
      render();
    });
  });
}

function bindPageEvents() {
  if (liveChatPollTimer) clearInterval(liveChatPollTimer);
  if (adminLivePollTimer) clearInterval(adminLivePollTimer);
  if (visitorTypingTimer) clearTimeout(visitorTypingTimer);
  if (adminAgentTypingTimer) clearTimeout(adminAgentTypingTimer);
  visitorTypingTimer = null;
  adminAgentTypingTimer = null;
  const heroSearch = document.getElementById("hero-search");
  if (heroSearch) {
    heroSearch.addEventListener("submit", (event) => {
      event.preventDefault();
      const value = document.getElementById("hero-search-input").value.trim();
      navigate(`/search?q=${encodeURIComponent(value)}`);
    });
  }

  document.querySelectorAll(".faq-toggle").forEach((button) => {
    button.addEventListener("click", () => button.closest(".faq-item").classList.toggle("open"));
  });

  bindContactForm();
  bindChat();
  bindTools();
  bindProviderTools();
  if (!isInternalPath()) bindLiveChatWidget();
  bindAdminLogin();
  bindAdminPages();
}

function bindContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = document.getElementById("contact-status");
    status.innerHTML = `<div class="notice info">Submitting...</div>`;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await readApiJson(response);
      if (!response.ok) throw new Error(json.error || "Submit failed");
      form.reset();
      status.innerHTML = `
        <div class="notice success">
          <strong>Submitted successfully.</strong><br>
          Ticket ID: <code>${escapeHtml(json.ticketId || json.id)}</code><br>
          Reference ID: <code>${escapeHtml(json.id)}</code><br>
          Sent to: <strong>${escapeHtml(json.destination || "Admin Panel > Support Forms")}</strong><br>
          Admin can view it here: <a href="${escapeHtml(json.adminPath || "/admin/support")}" data-link>Open Support Forms</a>
        </div>`;
    } catch (error) {
      status.innerHTML = `<div class="notice">${escapeHtml(error.message)}</div>`;
    }
  });
}

function bindProviderTools() {
  const setProviderTab = (tabs, target) => {
    tabs.querySelectorAll("[data-provider-tab]").forEach((item) => item.classList.toggle("active", item.dataset.providerTab === target));
    tabs.querySelectorAll("[data-provider-panel]").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.providerPanel === target);
    });
  };

  document.querySelectorAll("[data-provider-tabs]").forEach((tabs) => {
    tabs.querySelectorAll("[data-provider-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.dataset.providerTab;
        setProviderTab(tabs, target);
        const panel = tabs.querySelector(`[data-provider-panel="${target}"]`);
        if (target === "ticket") {
          document.getElementById("provider-support-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          (panel || tabs).scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  });

  document.querySelectorAll("[data-provider-show-articles]").forEach((button) => {
    button.addEventListener("click", () => {
      const tabs = document.querySelector("[data-provider-tabs]");
      if (!tabs) return;
      setProviderTab(tabs, "articles");
      tabs.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll(".provider-ticket-form, .support-ticket-form").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const status = form.parentElement.querySelector(".provider-ticket-status");
      status.innerHTML = `<div class="notice info">Submitting ticket...</div>`;
      const data = Object.fromEntries(new FormData(form).entries());
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
        const json = await readApiJson(response);
        if (!response.ok) throw new Error(json.error || "Submit failed");
        form.reset();
        status.innerHTML = `
          <div class="notice success">
            <strong>Ticket submitted.</strong><br>
            Ticket ID: <code>${escapeHtml(json.ticketId || json.id)}</code><br>
            Sent to: <strong>${escapeHtml(json.destination || "Admin Panel > Support Forms")}</strong><br>
            Admin can view it here: <a href="${escapeHtml(json.adminPath || "/admin/support")}" data-link>Open Support Forms</a>
          </div>`;
      } catch (error) {
        status.innerHTML = `<div class="notice">${escapeHtml(error.message)}</div>`;
      }
    });
  });

  document.querySelectorAll("[data-provider-scroll-form], [data-gmail-help]").forEach((button) => {
    button.addEventListener("click", () => {
      const tabs = document.querySelector("[data-provider-tabs]");
      if (tabs) {
        setProviderTab(tabs, "ticket");
      }
      (document.getElementById("provider-support-form") || document.getElementById("gmail-support-form"))?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function chatSessionId() {
  let id = localStorage.getItem("ehc_chat_session");
  if (!id) {
    id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    localStorage.setItem("ehc_chat_session", id);
  }
  return id;
}

function bindChat() {
  const windowEl = document.getElementById("chat-window");
  const form = document.getElementById("chat-form");
  const leadForm = document.getElementById("chat-lead-form");
  if (!windowEl && !leadForm) return;

  const page = document.querySelector(".ai-chat-page");
  const providerName = page?.dataset.chatProvider || "Email Help";
  const issue = page?.dataset.chatIssue || "";
  const providerDomain = providerChatDomain(chatProviderFromQuery()) || "gmail.com";
  const stateKey = chatStateKey(providerDomain);
  const initialState = readLocalJson(stateKey, { started: false, leadData: null, messages: [], sessionId: "" });
  let state = {
    started: Boolean(initialState.started),
    leadData: initialState.leadData || null,
    messages: Array.isArray(initialState.messages) ? initialState.messages : [],
    sessionId: initialState.sessionId || currentLiveChatSession() || ""
  };
  let history = state.messages.slice();

  if (!history.length && state.started && state.leadData) {
    history.push({ role: "bot", text: chatInitialMessage(providerName, state.leadData) });
  }

  const persist = () => {
    state.messages = history.slice(-30);
    writeChatState(providerDomain, state);
  };

  const draw = () => {
    if (!windowEl) return;
    windowEl.innerHTML = history
      .map((message) => `<div class="chat-message ${message.role === "user" ? "user" : "bot"}"><span class="chat-label">${message.role === "user" ? "You" : "Assistant"}</span><div class="chat-text">${escapeHtml(message.text)}</div></div>`)
      .join("");
    windowEl.scrollTop = windowEl.scrollHeight;
    persist();
  };

  const input = document.getElementById("chat-input");
  if (input && issue && !input.value) input.value = issue;

  if (page?.dataset.chatStarted === "true" && windowEl && form) {
    if (!history.length) {
      history.push({ role: "bot", text: chatInitialMessage(providerName, state.leadData || { name: "", phone: "", issue, message: "" }) });
    }
    draw();
  }

  if (leadForm) {
    leadForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(leadForm).entries());
      const lead = {
        name: String(data.name || "").trim(),
        email: String(data.email || "").trim(),
        phone: String(data.phone || "").trim(),
        issue: String(data.issue || "").trim(),
        message: String(data.issue || "").trim()
      };
      const sessionId = state.sessionId || currentLiveChatSession() || chatSessionId();
      try {
        const response = await fetch("/api/live/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId,
            name: lead.name,
            phone: lead.phone,
            email: lead.email,
            company: String(data.company || providerName).trim() || providerName,
            issue: lead.issue || issue,
            message: lead.message || lead.issue,
            sourcePage: window.location.href
          })
        });
        if (response.ok) {
          const json = await readApiJson(response);
          if (json.thread?.id) {
            state.sessionId = json.thread.id;
            setCurrentLiveChatSession(json.thread.id);
          }
        }
      } catch (error) {
        console.warn("Could not save live chat lead:", error);
      }
      state.started = true;
      state.leadData = lead;
      history = [{ role: "bot", text: chatInitialMessage(providerName, lead) }];
      draw();
      render();
    });
    return;
  }

  async function sendMessage(text) {
    if (!text) return;
    history.push({ role: "user", text });
    const leadData = state.leadData || {};
    const reply = quickReplyResponses[text] ? quickReplyResponse(text, leadData) : freeTextResponse(leadData);
    history.push({ role: "bot", text: reply });
    persist();
    draw();
    if (state.sessionId) {
      fetch("/api/live/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: state.sessionId, message: text })
      }).catch(() => {});
    }
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    input.value = "";
    sendMessage(text);
  });

  document.querySelectorAll(".quick-prompt").forEach((button) => {
    button.addEventListener("click", () => sendMessage(button.dataset.prompt));
  });
}


function bindTools() {
  const categorizer = document.getElementById("categorizer-form");
  if (categorizer) {
    categorizer.addEventListener("submit", (event) => {
      event.preventDefault();
      const lines = document
        .getElementById("categorizer-input")
        .value.split(/\n+/)
        .map((line) => line.trim())
        .filter(Boolean);
      const buckets = {
        Urgent: [],
        Work: [],
        Receipts: [],
        Newsletters: [],
        Social: [],
        Promotions: [],
        Other: []
      };
      lines.forEach((line) => {
        const l = line.toLowerCase();
        if (/urgent|alert|security|verify|deadline|overdue|asap|due/.test(l)) buckets.Urgent.push(line);
        else if (/meeting|project|proposal|invoice|client|report/.test(l)) buckets.Work.push(line);
        else if (/receipt|order|payment|paid|subscription renewed/.test(l)) buckets.Receipts.push(line);
        else if (/newsletter|digest|weekly|roundup|update/.test(l)) buckets.Newsletters.push(line);
        else if (/liked|commented|follow|social|connection/.test(l)) buckets.Social.push(line);
        else if (/sale|deal|off|coupon|discount|promo/.test(l)) buckets.Promotions.push(line);
        else buckets.Other.push(line);
      });
      document.getElementById("categorizer-output").innerHTML = Object.entries(buckets)
        .map(([bucket, items]) => `<div class="card"><div class="card-body"><h3>${bucket} <span class="pill">${items.length}</span></h3><p>${items.length ? items.map(escapeHtml).join("<br>") : "No items"}</p></div></div>`)
        .join("");
    });
  }

  const reply = document.getElementById("reply-form");
  if (reply) {
    reply.addEventListener("submit", (event) => {
      event.preventDefault();
      const context = document.getElementById("reply-context").value.trim();
      const tone = document.getElementById("reply-tone").value;
      const length = document.getElementById("reply-length").value;
      const opener = tone === "Friendly" ? "Hi there," : "Hello,";
      const firm = tone === "Firm" ? "To keep this moving, " : "";
      const extra =
        length === "Detailed"
          ? " I have included the relevant next steps below and can follow up once I have the remaining details."
          : length === "Medium"
            ? " I can share the next steps and follow up with any missing details."
            : "";
      const draft = `${opener}\n\n${firm}Thank you for your message. Regarding ${context || "your request"}, I understand the situation and will help with the next safe step.${extra}\n\nPlease do not send passwords, OTPs, or recovery codes by email. For account-specific verification, use the official provider support page directly.\n\nBest regards,`;
      document.getElementById("reply-output").innerHTML = `<div class="card"><div class="card-body"><h3>Generated Reply</h3><p style="white-space:pre-line">${escapeHtml(draft)}</p></div></div>`;
    });
  }

  const unsubscribe = document.getElementById("unsubscribe-form");
  if (unsubscribe) {
    unsubscribe.addEventListener("submit", (event) => {
      event.preventDefault();
      const lines = document
        .getElementById("unsubscribe-input")
        .value.split(/\n+/)
        .map((line) => line.trim())
        .filter(Boolean);
      const candidates = lines.filter((line) => /newsletter|digest|sale|promo|deal|unsubscribe|marketing|offer|coupon|weekly/i.test(line));
      document.getElementById("unsubscribe-output").innerHTML = `
        <div class="card"><div class="card-body">
          <h3>Cleanup Candidates <span class="pill">${candidates.length}</span></h3>
          <p>${candidates.length ? candidates.map(escapeHtml).join("<br>") : "No obvious subscription messages found."}</p>
        </div></div>
        <div class="notice info">Use unsubscribe links only from brands you recognize. For suspicious mail, mark as spam instead of clicking links.</div>`;
    });
  }
}

function currentLiveChatSession() {
  return localStorage.getItem("ehc_live_chat_session") || "";
}

function setCurrentLiveChatSession(id) {
  if (id) localStorage.setItem("ehc_live_chat_session", id);
  else localStorage.removeItem("ehc_live_chat_session");
}

function readSavedLiveChatVisitor() {
  const visitor = readLocalJson("ehc_live_chat_visitor", {});
  return {
    name: visitor.name || "",
    phone: visitor.phone || "",
    email: visitor.email || "",
    company: visitor.company || ""
  };
}

function saveLiveChatVisitor(visitor) {
  localStorage.setItem(
    "ehc_live_chat_visitor",
    JSON.stringify({
      name: visitor.name || "",
      phone: visitor.phone || "",
      email: visitor.email || "",
      company: visitor.company || ""
    })
  );
}

function readLocalJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
}

async function readApiJson(response) {
  const contentType = response.headers.get("content-type") || "";
  const text = await response.text();
  if (!contentType.includes("application/json")) {
    const pageTitle = text.match(/<title>(.*?)<\/title>/i)?.[1];
    throw new Error(
      pageTitle
        ? `API returned an HTML page (${pageTitle}). Check that the Node server is running and the /api route is deployed.`
        : "API returned HTML instead of JSON. Check that the Node server is running and the /api route is deployed."
    );
  }
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    throw new Error("API returned invalid JSON. Please restart the Node server and try again.");
  }
}

function bindLiveChatWidget() {
  const widget = document.getElementById("live-chat-widget");
  if (!widget) return;

  const content = document.getElementById("live-chat-content");
  const toggle = document.getElementById("live-chat-toggle");
  const close = document.getElementById("live-chat-close");

  async function ensureLiveChatSession() {
    const sessionId = currentLiveChatSession();
    try {
      const response = await fetch("/api/live/open", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          sourcePage: `${window.location.pathname}${window.location.search}`
        })
      });
      const json = await readApiJson(response);
      if (!response.ok) throw new Error(json.error || "Could not open live chat.");
      setCurrentLiveChatSession(json.thread.id);
      toggle.classList.add("active");
      const label = toggle.querySelector("span:last-child");
      if (label) label.textContent = "Chat Active";
      startLiveChatPolling();
      return json.thread;
    } catch (error) {
      drawStartForm(error.message);
      return null;
    }
  }

  async function setOpen(open, options = {}) {
    widget.classList.toggle("open", open);
    if (!options.auto) localStorage.setItem("ehc_live_chat_open", open ? "true" : "false");
    if (!open && options.manual) sessionStorage.setItem("ehc_live_chat_closed", "1");
    if (open) {
      if (options.auto && !currentLiveChatSession()) {
        drawStartForm();
        return;
      }
      await ensureLiveChatSession();
      loadLiveChatThread();
    }
  }

  function startLiveChatPolling() {
    if (liveChatPollTimer) clearInterval(liveChatPollTimer);
    liveChatPollTimer = setInterval(() => {
      const hasSession = Boolean(currentLiveChatSession());
      toggle.classList.toggle("active", hasSession);
      const label = toggle.querySelector("span:last-child");
      if (label) label.textContent = hasSession ? "Chat Active" : "Live Chat";
      if (!hasSession) return;
      if (content.querySelector("#live-chat-start-form")) return;
      if (widget.classList.contains("open")) loadLiveChatThread({ quiet: true });
    }, 2500);
  }

  toggle.addEventListener("click", () => setOpen(!widget.classList.contains("open"), { manual: true }));
  close.addEventListener("click", () => setOpen(false, { manual: true }));

  function drawStartForm(message = "") {
    const pageProvider = currentProviderFromPath();
    const companyOptions = providerSelectOptions(pageProvider?.name || "");
    const savedVisitor = readSavedLiveChatVisitor();
    const activeForm = document.getElementById("live-chat-start-form");
    const currentValues = activeForm ? Object.fromEntries(new FormData(activeForm).entries()) : {};
    const formValues = {
      name: currentValues.name || savedVisitor.name,
      phone: currentValues.phone || savedVisitor.phone,
      email: currentValues.email || savedVisitor.email,
      company: currentValues.company || savedVisitor.company
    };
    const issueOptions = [
      "Can't log in",
      "Forgot password",
      "Not receiving emails",
      "Can't send emails",
      "Setup on phone",
      "Account hacked",
      "Storage full",
      "Attachment problem"
    ];
    content.innerHTML = `
      <div class="live-chat-intro">
        <p>Start chat. Choose an issue or type your own. Do not share passwords or OTPs.</p>
      </div>
      <form class="form live-start-form" id="live-chat-start-form">
        <input type="hidden" name="sessionId" value="${escapeHtml(currentLiveChatSession())}">
        <input type="hidden" name="sourcePage" value="${escapeHtml(`${window.location.pathname}${window.location.search}`)}">
        <div class="field"><label>Name</label><input name="name" required placeholder="Your name" value="${escapeHtml(formValues.name)}"></div>
        <div class="field"><label>Phone</label><input name="phone" required inputmode="tel" placeholder="+1 555 123 4567" value="${escapeHtml(formValues.phone)}"></div>
        <div class="field"><label>Email</label><input name="email" type="email" required placeholder="you@example.com" value="${escapeHtml(formValues.email)}"></div>
        <div class="field">
          <label>Company</label>
          <select name="company" required>
            <option value="">Select company</option>
            ${companyOptions}
            <option value="Other">Other</option>
          </select>
        </div>
        <div class="field">
          <label>Issue</label>
          <div class="live-issue-options">
            ${issueOptions.map((issue) => `<button type="button" data-live-issue="${escapeHtml(issue)}">${escapeHtml(issue)}</button>`).join("")}
          </div>
          <textarea name="issue" id="live-chat-issue" required placeholder="Choose issue or type here"></textarea>
        </div>
        <button class="button" type="submit">${icons.reply}Start Chat</button>
      </form>
      ${message ? `<div class="notice" style="margin-top:12px">${escapeHtml(message)}</div>` : ""}`;

    const companySelect = document.querySelector('#live-chat-start-form select[name="company"]');
    if (companySelect && formValues.company) companySelect.value = formValues.company;

    document.querySelectorAll("[data-live-issue]").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll("[data-live-issue]").forEach((item) => item.classList.toggle("active", item === button));
        const issue = document.getElementById("live-chat-issue");
        issue.value = button.dataset.liveIssue;
        issue.focus();
      });
    });

    document.getElementById("live-chat-start-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const data = Object.fromEntries(new FormData(form).entries());
      saveLiveChatVisitor(data);
      try {
        const response = await fetch("/api/live/start", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });
        const json = await readApiJson(response);
        if (!response.ok) throw new Error(json.error || "Could not start live chat.");
        setCurrentLiveChatSession(json.thread.id);
        localStorage.setItem("ehc_live_chat_open", "true");
        toggle.classList.add("active");
        const label = toggle.querySelector("span:last-child");
        if (label) label.textContent = "Chat Active";
        startLiveChatPolling();
        drawLiveThread(json.thread);
      } catch (error) {
        drawStartForm(error.message);
      }
    });
  }

  async function sendVisitorTyping(typing) {
    const sessionId = currentLiveChatSession();
    if (!sessionId) return;
    visitorTypingActive = typing;
    try {
      await fetch("/api/live/typing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, typing })
      });
    } catch (error) {
      console.warn("Visitor typing state failed", error);
    }
  }

  function handleVisitorTyping() {
    if (!visitorTypingActive) sendVisitorTyping(true);
    if (visitorTypingTimer) clearTimeout(visitorTypingTimer);
    visitorTypingTimer = setTimeout(() => sendVisitorTyping(false), 1800);
  }

  function drawLiveThread(thread, options = {}) {
    const existingMessagesEl = document.getElementById("live-chat-messages");
    const previousScrollTop = existingMessagesEl ? existingMessagesEl.scrollTop : 0;
    const wasNearBottom = existingMessagesEl
      ? existingMessagesEl.scrollHeight - existingMessagesEl.scrollTop - existingMessagesEl.clientHeight < 48
      : true;
    const shouldStickToBottom = options.forceBottom || wasNearBottom;
    const messages = thread.messages || [];
    const agentTyping = Boolean(options.typing?.agentTyping);
    const profileComplete = thread.visitor?.profileComplete !== false;
    if (!profileComplete && !messages.length) {
      const activeForm = document.getElementById("live-chat-start-form");
      if (activeForm) {
        const hiddenSession = activeForm.querySelector('input[name="sessionId"]');
        if (hiddenSession) hiddenSession.value = thread.id || currentLiveChatSession();
        return;
      }
      drawStartForm();
      return;
    }
    content.innerHTML = `
      <div class="live-thread-meta">
        <span class="pill primary">${thread.status === "open" ? "Open" : "Closed"}</span>
        <span class="pill">Ticket: ${escapeHtml(thread.ticketId || thread.id)}</span>
        <button class="button ghost" id="live-chat-new" type="button">New chat</button>
      </div>
      <div class="live-chat-messages" id="live-chat-messages">
        ${messages.length ? "" : `<div class="empty-state">No chat messages yet. Send the first message below.</div>`}
        ${messages
          .map(
            (message) => `
            <div class="live-msg ${message.from === "visitor" ? "visitor" : "agent"}">
              <span>${message.from === "visitor" ? "You" : escapeHtml(message.name || "Support Team")}</span>
              <p>${escapeHtml(message.text)}</p>
              <small>${formatDate(message.createdAt)}</small>
            </div>`
          )
          .join("")}
      </div>
      <div class="typing-indicator ${agentTyping ? "show" : ""}" id="visitor-agent-typing">
        <span>Agent is typing</span><i></i><i></i><i></i>
      </div>
      <form class="live-reply-form" id="live-chat-message-form">
        <input id="live-chat-message" name="message" placeholder="Type your message" autocomplete="off" required>
        <button class="button" type="submit">${icons.reply}Send</button>
      </form>
      <p class="helper">Bot sends short steps. Scroll chat box for old messages.</p>`;

    const messagesEl = document.getElementById("live-chat-messages");
    messagesEl.scrollTop = shouldStickToBottom ? messagesEl.scrollHeight : previousScrollTop;
    const input = document.getElementById("live-chat-message");
    if (input) {
      if (options.draft) input.value = options.draft;
      input.addEventListener("input", handleVisitorTyping);
      if (options.keepFocus) {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }
    }

    document.getElementById("live-chat-new").addEventListener("click", () => {
      sendVisitorTyping(false);
      setCurrentLiveChatSession("");
      toggle.classList.remove("active");
      const label = toggle.querySelector("span:last-child");
      if (label) label.textContent = "Live Chat";
      drawStartForm();
    });

    document.getElementById("live-chat-message-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const input = document.getElementById("live-chat-message");
      const message = input.value.trim();
      if (!message) return;
      input.value = "";
      if (visitorTypingTimer) clearTimeout(visitorTypingTimer);
      await sendVisitorTyping(false);
      try {
        const response = await fetch("/api/live/message", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: currentLiveChatSession(), message })
        });
        const json = await readApiJson(response);
        if (!response.ok) throw new Error(json.error || "Could not send message.");
        drawLiveThread(json.thread, { forceBottom: true, typing: json.typing });
      } catch (error) {
        content.insertAdjacentHTML("beforeend", `<div class="notice">${escapeHtml(error.message)}</div>`);
      }
    });
  }

  async function loadLiveChatThread(options = {}) {
    const sessionId = currentLiveChatSession();
    if (!sessionId) {
      await ensureLiveChatSession();
      drawStartForm();
      return;
    }
    try {
      const activeInput = document.activeElement?.id === "live-chat-message" ? document.getElementById("live-chat-message") : null;
      const draft = activeInput?.value || "";
      const response = await fetch(`/api/live/thread?sessionId=${encodeURIComponent(sessionId)}`);
      const json = await readApiJson(response);
      if (!response.ok) throw new Error(json.error || "Could not load live chat.");
      drawLiveThread(json.thread, {
        preserveScroll: options.quiet,
        typing: json.typing,
        draft,
        keepFocus: Boolean(activeInput)
      });
    } catch (error) {
      setCurrentLiveChatSession("");
      drawStartForm(error.message);
    }
  }

  function scheduleLiveChatAutoOpen() {
    if (isInternalPath()) return;
    if (sessionStorage.getItem("ehc_live_chat_closed") === "1") return;
    if (sessionStorage.getItem("ehc_live_chat_auto_opened") === "1") return;
    if (widget.classList.contains("open")) return;
    setTimeout(() => {
      if (isInternalPath()) return;
      if (sessionStorage.getItem("ehc_live_chat_closed") === "1") return;
      if (sessionStorage.getItem("ehc_live_chat_auto_opened") === "1") return;
      if (widget.classList.contains("open")) return;
      sessionStorage.setItem("ehc_live_chat_auto_opened", "1");
      setOpen(true, { auto: true });
    }, 10000);
  }

  if (widget.classList.contains("open")) setOpen(true);
  if (currentLiveChatSession()) startLiveChatPolling();
  scheduleLiveChatAutoOpen();
}

function bindAdminLogin() {
  const form = document.getElementById("admin-login-form");
  if (!form) return;
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = document.getElementById("admin-login-status");
    status.innerHTML = `<div class="notice info">Checking...</div>`;
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries()))
      });
      const json = await readApiJson(response);
      if (!response.ok) throw new Error(json.error || "Login failed");
      navigate("/admin/dashboard");
    } catch (error) {
      status.innerHTML = `<div class="notice">${escapeHtml(error.message)}</div>`;
    }
  });
}

function bindAdminPages() {
  const content = document.getElementById("admin-content");
  if (!content) return;
  const routeKind = window.location.pathname.split("/")[2] || "dashboard";
  const kind = routeKind === "forms" ? "support" : routeKind;

  document.querySelectorAll("#admin-logout, #admin-logout-mobile").forEach((logout) => {
    logout.addEventListener("click", async () => {
      await fetch("/api/admin/logout", { method: "POST" });
      navigate("/admin/login");
    });
  });

  const menuToggle = document.getElementById("admin-menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      document.querySelector(".admin-nav")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  loadAdmin(kind, content);
}

async function adminFetch(path) {
  const response = await fetch(path);
  const json = await readApiJson(response);
  if (response.status === 401) {
    navigate("/admin/login");
    throw new Error("Admin login required.");
  }
  if (!response.ok) throw new Error(json.error || "Admin request failed");
  return json;
}

async function adminPost(path, payload) {
  const response = await fetch(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const json = await readApiJson(response);
  if (response.status === 401) {
    navigate("/admin/login");
    throw new Error("Admin login required.");
  }
  if (!response.ok) throw new Error(json.error || "Admin request failed");
  return json;
}

async function sendAdminTyping(threadId, typing) {
  if (!threadId) return;
  adminAgentTypingThread = threadId;
  adminAgentTypingActive = typing;
  try {
    await adminPost("/api/admin/live/typing", { id: threadId, typing });
  } catch (error) {
    console.warn("Agent typing state failed", error);
  }
}

function handleAdminTyping(threadId) {
  if (adminAgentTypingThread !== threadId) {
    adminAgentTypingActive = false;
    adminAgentTypingThread = threadId;
  }
  if (!adminAgentTypingActive) sendAdminTyping(threadId, true);
  if (adminAgentTypingTimer) clearTimeout(adminAgentTypingTimer);
  adminAgentTypingTimer = setTimeout(() => sendAdminTyping(threadId, false), 1800);
}

function adminLiveAlertSnapshot(rows) {
  const unread = rows.reduce((sum, row) => sum + Number(row.unread || 0), 0);
  const latest = rows.map((row) => row.updatedAt || row.createdAt || "").sort().pop() || "";
  return { unread, latest, count: rows.length };
}

function adminRowsSignature(rows) {
  return rows
    .map((row) => `${row.id}:${row.updatedAt || ""}:${row.messageCount || 0}:${row.unread || 0}:${row.status || ""}:${row.typing?.visitorTyping ? 1 : 0}`)
    .join("|");
}

function lastActivityLabel(value) {
  if (!value) return "No activity";
  const diff = Date.now() - new Date(value).getTime();
  if (diff < 60 * 1000) return "Just now";
  if (diff < 60 * 60 * 1000) return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 24 * 60 * 60 * 1000) return `${Math.floor(diff / 3600000)}h ago`;
  return formatDate(value);
}

function messagePreview(message) {
  if (!message) return "No messages yet";
  const text = message.text || "";
  return `${message.from === "visitor" ? "Visitor" : message.name || "Agent"}: ${text.length > 68 ? `${text.slice(0, 68)}...` : text}`;
}

function playAdminChatSound() {
  if (!adminSoundEnabled) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    adminAudioContext = adminAudioContext || new AudioContextClass();
    if (adminAudioContext.state === "suspended") adminAudioContext.resume();
    const now = adminAudioContext.currentTime;
    [0, 0.16, 0.34].forEach((offset, index) => {
      const oscillator = adminAudioContext.createOscillator();
      const gain = adminAudioContext.createGain();
      oscillator.type = "triangle";
      oscillator.frequency.setValueAtTime(index === 1 ? 1040 : 820, now + offset);
      gain.gain.setValueAtTime(0.0001, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.26, now + offset + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.18);
      oscillator.connect(gain);
      gain.connect(adminAudioContext.destination);
      oscillator.start(now + offset);
      oscillator.stop(now + offset + 0.19);
    });
  } catch (error) {
    console.warn("Admin chat sound could not play", error);
  }
}

function stopAdminLongAlert() {
  if (adminAlertInterval) clearInterval(adminAlertInterval);
  if (adminAlertTimeout) clearTimeout(adminAlertTimeout);
  adminAlertInterval = null;
  adminAlertTimeout = null;
}

function startAdminLongAlert() {
  if (!adminSoundEnabled) return;
  stopAdminLongAlert();
  playAdminChatSound();
  adminAlertInterval = setInterval(playAdminChatSound, 2500);
  adminAlertTimeout = setTimeout(stopAdminLongAlert, 60000);
}

function unreadVisitorIds(rows) {
  return rows.flatMap((row) => row.unreadVisitorMessageIds || []);
}

function updateAdminSoundAlerts(rows, { initialize = false } = {}) {
  const ids = unreadVisitorIds(rows);
  if (initialize || !adminLiveAlertBaselineReady) {
    adminKnownUnreadVisitorIds = new Set(ids);
    adminAlertedUnreadVisitorIds = new Set(ids);
    adminLiveAlertBaselineReady = true;
    return;
  }
  const newIds = ids.filter((id) => !adminKnownUnreadVisitorIds.has(id) && !adminAlertedUnreadVisitorIds.has(id));
  adminKnownUnreadVisitorIds = new Set(ids);
  if (!newIds.length) {
    if (!ids.length) stopAdminLongAlert();
    return;
  }
  newIds.forEach((id) => adminAlertedUnreadVisitorIds.add(id));
  startAdminLongAlert();
}

function adminNavLabels() {
  return {
    dashboard: "Dashboard",
    live: "Live Chat",
    support: "Forms",
    reports: "Reports",
    settings: "Settings"
  };
}

function adminNavHref(key) {
  return `/admin/${key === "support" ? "forms" : key}`;
}

function adminBottomNav(active) {
  const labels = adminNavLabels();
  const navIcons = {
    dashboard: icons.mail,
    live: icons.reply,
    support: icons.inbox,
    reports: icons.chart,
    settings: icons.settings
  };
  return `
    <nav class="admin-bottom-nav" aria-label="Admin mobile navigation">
      ${Object.keys(labels)
        .map((key) => `<a class="${active === key ? "active" : ""}" href="${adminNavHref(key)}" data-link>${navIcons[key]}<span>${labels[key]}</span></a>`)
        .join("")}
    </nav>`;
}

function adminStatCards(stats) {
  const cards = [
    ["Total Visits", stats.visits || 0, icons.mail, "blue"],
    ["Live Open", stats.openLiveChats || 0, icons.reply, "green"],
    ["Waiting", stats.waitingChats || 0, icons.chart, "orange"],
    ["Missed", stats.missedChats || 0, icons.alert, "red"],
    ["AI Chats", stats.chatMessages || 0, icons.bot, "purple"],
    ["Leads", stats.leads || 0, icons.inbox, "teal"]
  ];
  return `
    <div class="admin-stat-grid admin-stat-grid-modern">
      ${cards
        .map(
          ([label, value, cardIcon, tone]) => `
          <div class="admin-stat admin-stat-modern ${tone}">
            <span class="admin-stat-icon">${cardIcon}</span>
            <strong>${escapeHtml(value)}</strong>
            <span>${label}</span>
          </div>`
        )
        .join("")}
    </div>`;
}

function adminVisitorsSummary(rows) {
  const visibleRows = rows.slice(0, 4);
  return `
    <section class="admin-mobile-card admin-visitors-summary">
      <div class="admin-mobile-card-head">
        <div><h2>Live Visitors</h2><p><span class="presence online"></span>${rows.length} session${rows.length === 1 ? "" : "s"}</p></div>
        <a href="/admin/live" data-link>View All ${icons.external}</a>
      </div>
      <div class="admin-visitor-summary-list">
        ${
          visibleRows.length
            ? visibleRows
                .map((row, index) => {
                  const visitorName = row.visitor?.name || "Anonymous Visitor";
                  return `
                  <a class="admin-visitor-row" href="/admin/live" data-link>
                    <span class="presence ${row.online ? "online" : ""}"></span>
                    <span class="admin-visitor-avatar tone-${(index % 4) + 1}">${icons.inbox}</span>
                    <span class="admin-visitor-copy"><strong>${escapeHtml(visitorName)}</strong><small>${escapeHtml(messagePreview(row.lastMessage))}</small></span>
                    <time>${lastActivityLabel(row.updatedAt)}</time>
                    ${icons.external}
                  </a>`;
                })
                .join("")
            : `<div class="empty-state">No live chat sessions yet.</div>`
        }
      </div>
    </section>`;
}

function adminQuickActions(stats) {
  const actions = [
    ["Open Chats", "/admin/live", icons.reply, stats.openLiveChats || 0],
    ["Support Forms", "/admin/forms", icons.inbox, stats.leads || 0],
    ["Reports", "/admin/reports", icons.chart, ""],
    ["Settings", "/admin/settings", icons.settings, ""]
  ];
  return `
    <section class="admin-mobile-card admin-quick-actions">
      <h2>Quick Actions</h2>
      <div class="admin-action-grid">
        ${actions
          .map(
            ([label, href, actionIcon, count]) => `
            <a class="admin-action-card" href="${href}" data-link>
              <span>${actionIcon}</span>
              ${count !== "" ? `<b>${escapeHtml(count)}</b>` : ""}
              <strong>${label}</strong>
            </a>`
          )
          .join("")}
      </div>
    </section>`;
}

function shortBrowser(userAgent = "") {
  const value = String(userAgent || "");
  if (!value) return "Unknown";
  const browser = value.includes("Edg/")
    ? "Edge"
    : value.includes("Chrome/")
      ? "Chrome"
      : value.includes("Firefox/")
        ? "Firefox"
        : value.includes("Safari/")
          ? "Safari"
          : "Browser";
  const device = /Mobile|Android|iPhone|iPad/i.test(value) ? "Mobile" : "Desktop";
  return `${browser} / ${device}`;
}

function adminReportSummary(exported) {
  const liveChats = exported.liveChats || [];
  const leads = exported.leads || [];
  const chats = exported.chats || [];
  const visits = exported.visits || [];
  const cards = [
    ["Total Visits", visits.length, icons.mail, "blue"],
    ["Live Chats", liveChats.length, icons.reply, "green"],
    ["Leads", leads.length, icons.inbox, "teal"],
    ["AI Chats", chats.length, icons.bot, "purple"],
    ["Open Chats", liveChats.filter((thread) => thread.status === "open").length, icons.chart, "orange"],
    ["Missed Chats", liveChats.filter((thread) => thread.status === "closed" && (thread.messages || []).some((message) => message.from === "visitor" && !message.readByAdmin)).length, icons.alert, "red"]
  ];
  return `
    <div class="admin-report-summary">
      ${cards
        .map(
          ([label, value, cardIcon, tone]) => `
          <div class="admin-stat admin-stat-modern ${tone}">
            <span class="admin-stat-icon">${cardIcon}</span>
            <strong>${escapeHtml(value)}</strong>
            <span>${label}</span>
          </div>`
        )
        .join("")}
    </div>`;
}

function adminReportTable(title, headers, rows) {
  return `
    <section class="admin-report-section card">
      <div class="admin-report-head">
        <div><h3>${escapeHtml(title)}</h3><p>${rows.length} record${rows.length === 1 ? "" : "s"}</p></div>
      </div>
      ${
        rows.length
          ? `<div class="table-wrap"><table class="data-table admin-report-table">
              <thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
              <tbody>
                ${rows
                  .map(
                    (row) => `<tr>${row.map((cell, index) => `<td data-label="${escapeHtml(headers[index])}">${escapeHtml(cell || "")}</td>`).join("")}</tr>`
                  )
                  .join("")}
              </tbody>
            </table></div>`
          : `<div class="empty-state">No data yet.</div>`
      }
    </section>`;
}

function adminLiveChatDetails(exported) {
  const liveChats = exported.liveChats || [];
  if (!liveChats.length) return "";
  return `
    <section class="admin-report-section card">
      <div class="admin-report-head"><div><h3>Live Chat Details</h3><p>Messages are collapsed to keep reports readable.</p></div></div>
      <div class="admin-report-details">
        ${liveChats
          .map((thread) => {
            const visitorName = thread.visitor?.name || "Anonymous Visitor";
            return `
              <details>
                <summary><span>${escapeHtml(thread.ticketId || "Live Chat")}</span><strong>${escapeHtml(visitorName)}</strong><small>${(thread.messages || []).length} messages</small></summary>
                <div class="details-history report-message-list">
                  ${(thread.messages || [])
                    .map(
                      (message) => `
                      <p><strong>${escapeHtml(message.name || (message.from === "visitor" ? "Visitor" : "Support Team"))}:</strong> ${escapeHtml(message.text || "")}<br><small>${formatDate(message.createdAt)}</small></p>`
                    )
                    .join("")}
                </div>
              </details>`;
          })
          .join("")}
      </div>
    </section>`;
}

function adminReportsPage(exported) {
  const visits = exported.visits || [];
  const liveChats = exported.liveChats || [];
  const leads = exported.leads || [];
  const visitRows = visits.map((row) => [formatDate(row.at), `${row.path || ""}${row.query || ""}`, row.ip || "", shortBrowser(row.userAgent), row.referrer || ""]);
  const liveRows = liveChats.map((thread) => [
    thread.ticketId || "",
    thread.visitor?.name || "Anonymous Visitor",
    thread.visitor?.email || "",
    thread.visitor?.phone || "",
    thread.visitor?.company || "",
    thread.visitor?.issue || "",
    thread.status || "open",
    formatDate(thread.createdAt),
    String((thread.messages || []).length)
  ]);
  const leadRows = leads.map((row) => [
    row.name || "",
    row.email || "",
    row.phone || "",
    row.category || "",
    row.subject || row.message || "",
    formatDate(row.createdAt)
  ]);
  return `
    <div class="admin-report-toolbar card">
      <div>
        <h2>Reports</h2>
        <p>Export contains ${leads.length} leads, ${(exported.chats || []).length} AI chat records, ${liveChats.length} live chats, and ${visits.length} visits.</p>
      </div>
      <div class="admin-report-actions">
        <button class="button" id="report-download-json" type="button">Download JSON</button>
        <button class="button secondary" id="report-download-csv" type="button">Download CSV</button>
      </div>
    </div>
    ${adminReportSummary(exported)}
    ${adminReportTable("Visits Report", ["Date/Time", "Page", "IP", "Browser/Device", "Referrer"], visitRows)}
    ${adminReportTable("Live Chat Report", ["Ticket ID", "Visitor Name", "Email", "Phone", "Company", "Issue", "Status", "Created At", "Message Count"], liveRows)}
    ${adminLiveChatDetails(exported)}
    ${adminReportTable("Leads Report", ["Name", "Email", "Phone", "Company", "Issue", "Created At"], leadRows)}
    <details class="admin-raw-export card">
      <summary>Advanced: View Raw Export</summary>
      <pre>${escapeHtml(JSON.stringify(exported, null, 2))}</pre>
    </details>`;
}

function csvCell(value) {
  const text = String(value || "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function exportedToCsv(exported) {
  const lines = [];
  const addSection = (title, headers, rows) => {
    lines.push(title);
    lines.push(headers.map(csvCell).join(","));
    rows.forEach((row) => lines.push(row.map(csvCell).join(",")));
    lines.push("");
  };
  addSection(
    "Visits",
    ["Date/Time", "Page", "IP", "Browser/Device", "Referrer"],
    (exported.visits || []).map((row) => [formatDate(row.at), `${row.path || ""}${row.query || ""}`, row.ip || "", shortBrowser(row.userAgent), row.referrer || ""])
  );
  addSection(
    "Live Chats",
    ["Ticket ID", "Visitor Name", "Email", "Phone", "Company", "Issue", "Status", "Created At", "Message Count"],
    (exported.liveChats || []).map((thread) => [
      thread.ticketId || "",
      thread.visitor?.name || "Anonymous Visitor",
      thread.visitor?.email || "",
      thread.visitor?.phone || "",
      thread.visitor?.company || "",
      thread.visitor?.issue || "",
      thread.status || "open",
      formatDate(thread.createdAt),
      String((thread.messages || []).length)
    ])
  );
  addSection(
    "Leads",
    ["Name", "Email", "Phone", "Company", "Issue", "Created At"],
    (exported.leads || []).map((row) => [row.name || "", row.email || "", row.phone || "", row.category || "", row.subject || row.message || "", formatDate(row.createdAt)])
  );
  return lines.join("\n");
}

function downloadTextFile(filename, text, type) {
  const blob = new Blob([text], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function bindAdminReportControls(exported) {
  document.getElementById("report-download-json")?.addEventListener("click", () => {
    downloadTextFile("email-help-report.json", JSON.stringify(exported, null, 2), "application/json");
  });
  document.getElementById("report-download-csv")?.addEventListener("click", () => {
    downloadTextFile("email-help-report.csv", exportedToCsv(exported), "text/csv");
  });
}

function adminLiveAlertBar(rows) {
  const snapshot = adminLiveAlertSnapshot(rows);
  const hasUnread = snapshot.unread > 0;
  return `
    <div class="admin-live-alert ${hasUnread ? "has-unread" : ""}">
      <div id="admin-live-alert-text">
        <strong>${hasUnread ? `${snapshot.unread} new visitor message${snapshot.unread === 1 ? "" : "s"}` : "Live chat monitor ready"}</strong>
        <p>${adminSoundEnabled ? "Sound alerts are enabled." : "Click Enable Sound once to hear new chat alerts."}</p>
      </div>
      <div class="admin-live-alert-actions">
        <button class="button secondary" id="admin-live-refresh" type="button">Refresh Chats</button>
        <button class="button ${adminSoundEnabled ? "secondary" : ""}" id="admin-sound-toggle" type="button">
          ${adminSoundEnabled ? "Sound Off" : "Sound On"}
        </button>
      </div>
    </div>`;
}

function adminLiveMetricCards(stats) {
  const cards = [
    ["Total visits", stats.visits || 0],
    ["Live open", stats.openLiveChats || 0],
    ["Waiting", stats.waitingChats || 0],
    ["Missed", stats.missedChats || 0],
    ["AI chats", stats.chatMessages || 0],
    ["Leads", stats.leads || 0],
    ["Sound", adminSoundEnabled ? "On" : "Off"]
  ];
  return `<div class="admin-live-metrics">${cards.map(([label, value]) => `<div><strong>${escapeHtml(value)}</strong><span>${label}</span></div>`).join("")}</div>`;
}

function adminHelpSteps(type) {
  const steps = {
    live: [
      ["1", "Enable Sound", "Click Enable Sound once, then new visitor messages can play a beep."],
      ["2", "Refresh Chats", "Click Refresh Chats when the alert count changes to load the newest visitors."],
      ["3", "Select Visitor", "Click a visitor in the left list to open their full chat and mark it read."],
      ["4", "Reply", "Type your answer and click Send Reply. The visitor sees it in the same chat box."]
    ],
    support: [
      ["1", "Open Support Forms", "Every public form submission appears here with ticket ID."],
      ["2", "Check Details", "Review name, phone, email, provider, issue, and source page."],
      ["3", "Use Ticket ID", "Share the ticket ID with the customer for tracking."],
      ["4", "Export Later", "Open Reports if you need the raw JSON export."]
    ],
    dashboard: [
      ["1", "Watch Live", "Use Live Chat Panel for real-time visitor conversations."],
      ["2", "Check Forms", "Use Support Forms for submitted tickets."],
      ["3", "Enable Alerts", "Turn on sound from Live Chat Panel before waiting for visitors."],
      ["4", "Logout", "Use Logout when admin work is finished."]
    ]
  };
  const rows = steps[type] || steps.dashboard;
  return `
    <div class="admin-steps">
      ${rows
        .map(
          ([number, title, body]) => `
          <div class="admin-step">
            <span>${number}</span>
            <div><strong>${title}</strong><p>${body}</p></div>
          </div>`
        )
        .join("")}
    </div>`;
}

function bindAdminSoundControls(kind = "live") {
  const button = document.getElementById("admin-sound-toggle");
  if (!button) return;
  button.addEventListener("click", async () => {
    adminSoundEnabled = !adminSoundEnabled;
    localStorage.setItem("ehc_admin_sound", adminSoundEnabled ? "true" : "false");
    if (adminSoundEnabled) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        adminAudioContext = adminAudioContext || new AudioContextClass();
        if (adminAudioContext.state === "suspended") await adminAudioContext.resume();
      }
      playAdminChatSound();
    } else {
      stopAdminLongAlert();
    }
    const content = document.getElementById("admin-content");
    if (content) loadAdmin(kind, content);
  });

  const refresh = document.getElementById("admin-live-refresh");
  if (refresh) {
    refresh.addEventListener("click", () => {
      stopAdminLongAlert();
      const content = document.getElementById("admin-content");
      if (content) loadAdmin(kind, content);
    });
  }
}

async function pollAdminLiveAlerts() {
  try {
    const data = await adminFetch("/api/admin/live");
    const snapshot = adminLiveAlertSnapshot(data.rows);
    updateAdminSoundAlerts(data.rows);
    adminLiveSnapshot = snapshot;
    document.title = snapshot.unread ? `(${snapshot.unread}) Email Admin` : "Email - Independent Email Guides & Free AI Tools";
    const alert = document.querySelector(".admin-live-alert");
    const text = document.getElementById("admin-live-alert-text");
    if (alert) alert.classList.toggle("has-unread", snapshot.unread > 0);
    if (text) {
      text.innerHTML = `
        <strong>${snapshot.unread ? `${snapshot.unread} new visitor message${snapshot.unread === 1 ? "" : "s"}` : "Live chat monitor ready"}</strong>
        <p>${adminSoundEnabled ? "Sound alerts are enabled." : "Click Enable Sound once to hear new chat alerts."}</p>`;
    }
    data.rows.forEach((row) => {
      const item = Array.from(document.querySelectorAll("[data-live-thread]")).find((button) => button.dataset.liveThread === row.id);
      const typing = Boolean(row.typing?.visitorTyping);
      item?.querySelector(".typing-mini")?.classList.toggle("show", typing);
      if (item) item.classList.toggle("is-typing", typing);
      if (document.getElementById("admin-content")?.dataset.selectedThread === row.id) {
        document.getElementById("admin-visitor-typing")?.classList.toggle("show", typing);
      }
    });
  } catch (error) {
    console.warn("Live alert poll failed", error);
  }
}

async function pollAdminLiveRealtime(content) {
  try {
    const [stats, data] = await Promise.all([adminFetch("/api/admin/stats"), adminFetch("/api/admin/live")]);
    const snapshot = adminLiveAlertSnapshot(data.rows);
    updateAdminSoundAlerts(data.rows);
    adminLiveSnapshot = snapshot;
    document.title = snapshot.unread ? `(${snapshot.unread}) Email Admin` : "Email - Independent Email Guides & Free AI Tools";

    const selectedId = content.dataset.selectedThread || data.rows[0]?.id || "";
    const nextSignature = adminRowsSignature(data.rows);
    if (nextSignature !== adminLiveRowsSignature || !document.querySelector("[data-live-thread]")) {
      const draftInput = document.getElementById("admin-live-reply");
      const draft = draftInput?.value || "";
      const keepFocus = document.activeElement === draftInput;
      content.innerHTML = adminLiveMetricCards(stats.stats) + adminLiveAlertBar(data.rows) + adminLiveDashboard(data.rows, selectedId, stats.stats);
      adminLiveRowsSignature = nextSignature;
      bindAdminSoundControls("live");
      bindAdminLiveInbox(content, selectedId, { draft, keepFocus });
      return;
    }

    pollAdminLiveAlerts();
    if (selectedId) loadAdminLiveThread(selectedId, { quiet: true });
  } catch (error) {
    console.warn("Live realtime poll failed", error);
  }
}

function adminLiveDashboard(rows, selectedId, stats = {}) {
  if (!rows.length) {
    const visitorText = stats.visits
      ? "No chat messages yet. Visits are being tracked, but no visitor has opened Live Chat."
      : "No live chat sessions yet.";
    return `
      <div class="admin-live-console empty">
        <div class="admin-live-column"><div class="admin-live-column-head"><h3>Visitors</h3></div><div class="empty-state">${visitorText}</div></div>
        <div class="admin-live-column"><div class="admin-live-column-head"><h3>Conversation</h3></div><div class="empty-state">Visitor messages will appear here after someone starts Live Chat.</div></div>
        <div class="admin-live-column"><div class="admin-live-column-head"><h3>Details</h3></div><div class="empty-state">Select a visitor to view details.</div></div>
      </div>`;
  }

  return `
    <div class="admin-live-console">
      <aside class="admin-live-column admin-live-sessions">
        <div class="admin-live-column-head">
          <div><h3>Live Visitors</h3><p>${rows.length} session${rows.length === 1 ? "" : "s"}</p></div>
        </div>
        <div class="admin-live-list">
          ${rows
            .map((row) => {
              const visitorName = row.visitor?.name || `Visitor ${String(row.ticketId || row.id).slice(-6)}`;
              return `
              <button class="admin-live-item ${row.id === selectedId ? "active" : ""}" type="button" data-live-thread="${row.id}">
                <span class="presence ${row.online ? "online" : ""}"></span>
                <span class="session-main">
                  <strong>${escapeHtml(visitorName)}</strong>
                  <small>${escapeHtml(row.currentPage || "Unknown page")}</small>
                  <small>${escapeHtml(messagePreview(row.lastMessage))}</small>
                  <small class="typing-mini ${row.typing?.visitorTyping ? "show" : ""}">typing...</small>
                </span>
                <span class="session-meta">
                  ${row.unread ? `<b>${row.unread}</b>` : ""}
                  <small>${lastActivityLabel(row.updatedAt)}</small>
                </span>
              </button>`;
            })
            .join("")}
        </div>
      </aside>
      <section class="admin-live-column admin-live-chatpane">
        <div class="admin-live-column-head">
          <div><h3>Conversation</h3><p id="admin-live-chat-subtitle">Select a visitor</p></div>
          <button class="button secondary small" id="admin-live-refresh-inline" type="button">Refresh</button>
        </div>
        <div id="admin-live-conversation" class="admin-live-thread"><div class="empty-state">Select a live chat.</div></div>
      </section>
      <aside class="admin-live-column admin-live-details">
        <div class="admin-live-column-head"><div><h3>Visitor Details</h3><p>Profile and activity</p></div></div>
        <div id="admin-live-details"><div class="empty-state">Select a visitor to view details.</div></div>
      </aside>
    </div>`;
}

function bindAdminLiveInbox(content, selectedId, options = {}) {
  document.querySelectorAll("[data-live-thread]").forEach((button) => {
    button.addEventListener("click", () => {
      content.dataset.selectedThread = button.dataset.liveThread;
      document.querySelectorAll("[data-live-thread]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      loadAdminLiveThread(button.dataset.liveThread);
    });
  });

  if (selectedId) {
    content.dataset.selectedThread = selectedId;
    loadAdminLiveThread(selectedId, options);
  }

  const inlineRefresh = document.getElementById("admin-live-refresh-inline");
  if (inlineRefresh) {
    inlineRefresh.addEventListener("click", () => {
      stopAdminLongAlert();
      loadAdmin("live", content);
    });
  }
}

async function loadAdminLiveThread(threadId, options = {}) {
  stopAdminLongAlert();
  const target = document.getElementById("admin-live-conversation");
  const details = document.getElementById("admin-live-details");
  const subtitle = document.getElementById("admin-live-chat-subtitle");
  if (!target || !threadId) return;
  const currentReply = document.getElementById("admin-live-reply");
  const draft = options.draft ?? currentReply?.value ?? "";
  const keepFocus = options.keepFocus ?? document.activeElement === currentReply;
  if (!options.quiet) {
    target.innerHTML = `<div class="empty-state">Loading conversation...</div>`;
    if (details) details.innerHTML = `<div class="empty-state">Loading visitor details...</div>`;
  }

  try {
    const json = await adminFetch(`/api/admin/live/thread?id=${encodeURIComponent(threadId)}`);
    const thread = json.thread;
    const messages = thread.messages || [];
    const visitorName = thread.visitor?.name || `Visitor ${String(thread.ticketId || thread.id).slice(-6)}`;
    const visitorTyping = Boolean(json.typing?.visitorTyping);
    if (subtitle) subtitle.textContent = `${visitorName} - ${thread.status}`;
    target.innerHTML = `
      <div class="admin-live-messages admin-live-conversation">
        ${messages.length ? "" : `<div class="empty-state">No chat messages yet.</div>`}
        ${messages
          .map(
            (message) => `
            <div class="live-msg ${message.from === "visitor" ? "visitor" : "agent"}">
              <span>${message.from === "visitor" ? escapeHtml(thread.visitor?.name || "Visitor") : escapeHtml(message.name || "Support Team")}</span>
              <p>${escapeHtml(message.text)}</p>
              <small>${formatDate(message.createdAt)}</small>
            </div>`
          )
          .join("")}
      </div>
      <div class="typing-indicator ${visitorTyping ? "show" : ""}" id="admin-visitor-typing">
        <span>Visitor is typing</span><i></i><i></i><i></i>
      </div>
      <form class="form" id="admin-live-reply-form">
        <div class="admin-reply-row">
          <textarea id="admin-live-reply" name="message" required placeholder="Type reply..."></textarea>
          <button class="button" type="submit">${icons.reply}Send</button>
        </div>
        <div class="admin-thread-actions">
          <button class="button secondary" id="admin-live-status" type="button">${thread.status === "open" ? "Mark Resolved" : "Reopen Chat"}</button>
        </div>
      </form>`;

    if (details) {
      const visitorMessages = messages.filter((message) => message.from === "visitor");
      details.innerHTML = `
        <div class="details-list">
          <div><span>Name / ID</span><strong>${escapeHtml(visitorName)}</strong></div>
          <div><span>Ticket</span><strong>${escapeHtml(thread.ticketId || thread.id)}</strong></div>
          <div><span>Status</span><strong>${escapeHtml(thread.status || "open")}</strong></div>
          <div><span>Email</span><strong>${escapeHtml(thread.visitor?.email || "Not provided")}</strong></div>
          <div><span>Phone</span><strong>${escapeHtml(thread.visitor?.phone || "Not provided")}</strong></div>
          <div><span>Company</span><strong>${escapeHtml(thread.visitor?.company || "Not selected")}</strong></div>
          <div><span>Current page</span><strong>${escapeHtml(thread.visitor?.sourcePage || "Not captured")}</strong></div>
          <div><span>IP</span><strong>${escapeHtml(thread.ip || "Not captured")}</strong></div>
          <div><span>Browser / device</span><strong>${escapeHtml(thread.userAgent || "Not captured")}</strong></div>
          <div><span>Visit count</span><strong>${visitorMessages.length}</strong></div>
          <div><span>Previous messages</span><strong>${messages.length}</strong></div>
          <div><span>Last activity</span><strong>${formatDate(thread.updatedAt)}</strong></div>
        </div>
        <div class="details-history">
          <h4>History</h4>
          ${messages.slice(-5).map((message) => `<p><strong>${message.from === "visitor" ? "Visitor" : escapeHtml(message.name || "Agent")}:</strong> ${escapeHtml((message.text || "").slice(0, 110))}</p>`).join("")}
        </div>`;
    }

    const messageBox = target.querySelector(".admin-live-messages");
    messageBox.scrollTop = messageBox.scrollHeight;
    const replyInput = document.getElementById("admin-live-reply");
    if (replyInput) {
      if (draft) replyInput.value = draft;
      replyInput.addEventListener("input", () => handleAdminTyping(thread.id));
      if (keepFocus) {
        replyInput.focus();
        replyInput.setSelectionRange(replyInput.value.length, replyInput.value.length);
      }
    }

    document.getElementById("admin-live-status").addEventListener("click", async () => {
      await adminPost("/api/admin/live/status", {
        id: thread.id,
        status: thread.status === "open" ? "closed" : "open"
      });
      const content = document.getElementById("admin-content");
      if (content) loadAdmin("live", content);
    });

    document.getElementById("admin-live-reply-form").addEventListener("submit", async (event) => {
      event.preventDefault();
      const message = document.getElementById("admin-live-reply").value.trim();
      if (!message) return;
      if (adminAgentTypingTimer) clearTimeout(adminAgentTypingTimer);
      await sendAdminTyping(thread.id, false);
      await adminPost("/api/admin/live/reply", { id: thread.id, message, agentName: "Support Team" });
      const content = document.getElementById("admin-content");
      if (content) {
        content.dataset.selectedThread = thread.id;
        loadAdmin("live", content);
      }
    });
  } catch (error) {
    target.innerHTML = `<div class="notice">${escapeHtml(error.message)}</div>`;
  }
}

async function loadAdmin(kind, content) {
  try {
    if (kind !== "live" && adminLivePollTimer) {
      clearInterval(adminLivePollTimer);
      adminLivePollTimer = null;
      stopAdminLongAlert();
    }
    const stats = await adminFetch("/api/admin/stats");
    const statHtml = adminStatCards(stats.stats);

    if (kind === "live") {
      const data = await adminFetch("/api/admin/live");
      const selectedId = content.dataset.selectedThread || data.rows[0]?.id || "";
      const snapshot = adminLiveAlertSnapshot(data.rows);
      if (adminLiveSnapshot && snapshot.unread > adminLiveSnapshot.unread && snapshot.latest !== adminLiveSnapshot.latest) {
        playAdminChatSound();
      }
      adminLiveSnapshot = snapshot;
      updateAdminSoundAlerts(data.rows, { initialize: true });
      adminLiveRowsSignature = adminRowsSignature(data.rows);
      document.title = snapshot.unread ? `(${snapshot.unread}) Email Admin` : "Email - Independent Email Guides & Free AI Tools";
      content.innerHTML = adminLiveMetricCards(stats.stats) + adminLiveAlertBar(data.rows) + adminLiveDashboard(data.rows, selectedId, stats.stats);
      bindAdminSoundControls("live");
      bindAdminLiveInbox(content, selectedId);
      if (adminLivePollTimer) clearInterval(adminLivePollTimer);
      adminLivePollTimer = setInterval(() => {
        if (window.location.pathname !== "/admin/live") {
          stopAdminLongAlert();
          return;
        }
        pollAdminLiveRealtime(content);
      }, 2000);
      return;
    }

    if (kind === "support" || kind === "leads") {
      const data = await adminFetch("/api/admin/leads");
      content.innerHTML =
        statHtml +
        adminHelpSteps("support") +
        `<div class="notice info" style="margin-bottom:16px"><strong>Support form destination:</strong> All public contact/support form submissions appear here and are saved in <code>data/submissions.json</code>.</div>` +
        adminTable(
          ["Created", "Ticket ID", "Name", "Phone", "Email", "Provider", "Subject", "Message", "Page", "Status"],
          data.rows.map((row) => [
            formatDate(row.createdAt),
            row.ticketId || row.id,
            row.name,
            row.phone,
            row.email,
            row.category,
            row.subject,
            row.message,
            row.sourcePage,
            row.status || "new"
          ])
        );
      return;
    }

    if (kind === "chats" || kind === "visitors") {
      const data = await adminFetch(kind === "chats" ? "/api/admin/chats" : "/api/admin/visits");
      const rows =
        kind === "chats"
          ? data.rows.map((row) => [formatDate(row.createdAt), row.sessionId, row.userMessage, row.assistantMessage])
          : data.rows.map((row) => [formatDate(row.at), row.path + row.query, row.ip, row.userAgent]);
      content.innerHTML = statHtml + adminTable(kind === "chats" ? ["Created", "Session", "User", "Assistant"] : ["Visited", "Path", "IP", "User Agent"], rows);
      return;
    }

    if (kind === "settings") {
      content.innerHTML =
        statHtml +
        `<div class="grid two">
          <div class="card"><div class="card-body"><h3>Server Settings</h3><p>Set <code>PORT</code>, <code>ADMIN_ID</code>, and <code>ADMIN_PASSWORD</code> as environment variables before starting the Node server. Current local defaults are <code>admin</code> / <code>admin123</code> unless changed.</p></div></div>
          <div class="card"><div class="card-body"><h3>Auto Reply Message</h3><p>Thank you. I will call you back shortly.</p><p class="helper">This default message is sent once when a visitor starts a live chat.</p></div></div>
        </div>`;
      return;
    }

    if (kind === "blocked") {
      content.innerHTML = statHtml + `<div class="card"><div class="card-body"><h3>Blocked Items</h3><p>No blocked users are configured in this local version.</p></div></div>`;
      return;
    }

    if (kind === "reports" || kind === "analytics") {
      const exported = await adminFetch("/api/admin/export");
      content.innerHTML = adminReportsPage(exported);
      bindAdminReportControls(exported);
      return;
    }

    const liveData = await adminFetch("/api/admin/live");
    content.innerHTML =
      statHtml +
      adminLiveAlertBar(liveData.rows) +
      adminVisitorsSummary(liveData.rows) +
      adminQuickActions(stats.stats);
    bindAdminSoundControls("dashboard");
  } catch (error) {
    content.innerHTML = `<div class="notice">${escapeHtml(error.message)}</div>`;
  }
}

function adminTable(headers, rows) {
  if (!rows.length) return `<div class="empty-state">No data yet.</div>`;
  return `
    <div class="card"><div class="card-body table-wrap">
      <table class="data-table">
        <thead><tr>${headers.map((header) => `<th>${header}</th>`).join("")}</tr></thead>
        <tbody>${rows
          .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell || "")}</td>`).join("")}</tr>`)
          .join("")}</tbody>
      </table>
    </div></div>`;
}

function formatDate(value) {
  return value ? new Date(value).toLocaleString() : "";
}

render();
