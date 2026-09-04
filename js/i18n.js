const TRANSLATIONS = {
  en: {
    nav: {
      offer: "Offer",
      order: "Order",
      web: "Web",
      discord: "Discord",
      telegram: "Telegram",
      roblox: "Roblox",
      apps: "Apps",
      payment: "Payment",
    },
    header: {
      badge: "Professional Middle Full-stack Services",
      title1: "Your Vision",
      title2: "My Code",
      subtitle:
        "High-quality development solutions. From reliable, custom-built web applications to innovative architectures for Discord servers and bots.",
    },
    web: {
      title: "I. Web Development",
      constructors: "Web Page",
      "constructors.desc":
        "Simple hand-written page. HTML, CSS, minimal JS. Clean layout, fast loading, ready to deploy.",
      "constructors.code": "Website",
      "constructors.code.desc":
        "Multi-page website with custom design and interactive features. Full HTML/CSS/JS, animations, forms, responsive layout.",
      starting: "Starting at",
      custom: "Web Portal",
      "custom.desc":
        "Complex website from scratch. Architecture, databases, user auth, APIs, admin panels — full stack for serious projects.",
      popular: "Most Popular",
    },
    discord: {
      title: "II. Discord Development",
      servers: "Discord Servers",
      "servers.desc":
        "Configuration of public bots and full Discord server setup (channels, roles, permissions, automated moderation, emojis, stickers, travel guide, and much more) are included by default in these packages, but they can also be ordered separately absolutely for free (for example, you can order free setup for channels and roles separately (2 settings) at no cost, but once you exceed this free limit, you will need to pay a quarter from the initial cost of a full Discord server setup for each new setup).",
      creation: "Creation from Scratch",
      "creation.desc":
        "Full development starting from empty/new server to fully functional and secure community hub, with user adaptation system and aesthetic design.",
      reconstruction: "Reconstruction",
      "reconstruction.desc":
        "Restructuring of the existing server. Correcting access permissions, design, and modernization of the server structure.",
      bots: "Discord Bots",
      "bots.desc":
        "Hand-written bots for Discord in Python, JavaScript, or Java. From simple command bots to complex systems with databases and API integrations.",
      "consult.title": "Project Consultations",
      "consult.desc1": "The first",
      "consult.desc2": "2 sessions are FREE",
      "consult.desc3": "to discuss architecture and Technical Specifications (SRS).",
      "support.title": "Extra Support",
      "support.desc": "From the 3rd session, a small rate of",
      "support.desc2": "59 UAH or 1.29 USD / session",
      "support.desc3": "applies to cover development time.",
      simple: "Simple Bot",
      "simple.desc":
        "Lightweight hand-written bot. Basic commands, moderation. Clean code, fast deployment, no frameworks.",
      custom: "Standard Bot",
      "custom.desc":
        "Hand-written bot from scratch in Python/JS. Unique logic, custom commands, event handling, everything you need.",
      advanced: "Advanced Bot",
      "advanced.desc":
        "External APIs, databases, multi-platform support and more. Full integration with your services.",
      starting: "Starting at",
      popular: "Most Popular",
    },
    telegram: {
      title: "III. Telegram Development",
      channels: "Telegram Channels",
      "channels.desc":
        "Setup and automation of Telegram channels and groups. Content scheduling, auto-posting, subscriber management, and integrations.",
      "channel.setup": "Channel Setup",
      "channel.setup.desc":
        "Full channel configuration: description, rules, pinned messages, welcome message, anti-spam settings, linked discussion group.",
      "channel.automation": "Channel Automation",
      "channel.automation.desc":
        "Scheduled posts, auto-publishing from RSS/API, content filtering, moderation bots, analytics integration.",
      "channel.integration": "Channel + Bot Integration",
      "channel.integration.desc":
        "Channel management through a custom bot. Post scheduling, subscriber analytics, payment integration, content pipelines.",
      bots: "Telegram Bots",
      "bots.desc":
        "Hand-written bots for Telegram in Python, JavaScript, or Go. From simple inline bots to complex systems with databases and webhooks.",
      simple: "Simple Bot",
      "simple.desc":
        "Lightweight bot with basic commands. Inline queries, keyboard buttons, auto-responses. Fast and clean.",
      custom: "Standard Bot",
      "custom.desc":
        "Bot with custom logic, state machines, callback handlers. Supports payments, file processing, multi-step workflows.",
      advanced: "Advanced Bot",
      "advanced.desc":
        "Full-featured bot with databases, web dashboards, webhook integrations, AI/ML capabilities. Production-ready.",
      starting: "Starting at",
      popular: "Most Popular",
    },
    roblox: {
      title: "IV. Roblox Studio (Luau Scripts)",
      "lua.title": "Luau Scripting",
      "lua.desc":
        "Custom scripts, game mechanics, server/client logic, data systems, UI logic, and automation for Roblox experiences. All work is done in Luau.",
      simple: "Simple Scripts",
      "simple.desc":
        "Individual scripts: button logic, simple triggers, basic data saving, minor automations and utilities.",
      systems: "Game Systems",
      "systems.desc":
        "Economy, inventory, trading, ranking, quest systems, admin panels — complex interconnected logic with database.",
      fullstack: "Full-stack",
      "fullstack.desc":
        "Complete game logic from scratch: client-server architecture, DataStore, remote events, full automation of all systems.",
      starting: "Starting at",
    },
    apps: {
      title: "V. Applications",
      "nongame.title": "Non-Game Applications",
      "nongame.desc":
        "Utility applications, tools, productivity apps, and other software solutions — NOT games. Perfect for business tools, personal utilities, and specialized software.",
      mobile: "Mobile Applications",
      desktop: "Desktop Applications",
      "simple.app": "Simple App",
      "simple.app.desc":
        "Basic mobile application with essential features. Clean UI, core functionality, ready for deployment.",
      "feature.rich": "Feature-rich App",
      "feature.rich.desc":
        "Advanced mobile app with custom UI/UX, animations, offline support, push notifications, and data sync.",
      "cross.platform": "Cross-platform App",
      "cross.platform.desc":
        "Single codebase for iOS and Android. Shared logic, platform-specific optimizations, app store deployment.",
      "simple.util": "Simple Utility",
      "simple.util.desc":
        "Lightweight desktop tool for a specific task. File processing, calculators, simple data management.",
      db: "App with Database",
      "db.desc":
        "Desktop application with local or cloud database. Data management, reporting, import/export, user accounts.",
      "desktop.full": "Full Stack App",
      "desktop.full.desc":
        "Complex desktop application with backend integration, APIs, user auth, real-time data. Enterprise-grade.",
      starting: "Starting at",
    },
    payment: {
      title: "VI. Payment Methods",
      direct: "Direct",
      "direct.desc": "Mastercard",
      nitro: "Discord Nitro",
      "nitro.desc":
        "Basic (129.99 or 1299.99 UAH / 2.99 or 29.99 USD)<br>Full (449.99 or 4399.99 UAH / 9.99 or 99.99 USD)",
      boosts: "Server Boosts",
      "boosts.desc": "XDEVS Forum<br>1 Boost = 199.99 UAH / 4.99 USD",
      another: "Another Methods",
      "another.desc":
        "Skins / Keys / Items / Game Accounts / Game Value<br>(in all of these cases, the commission is paid by you)",
    },
    footer: {
      contacts: "XDEVS Contacts",
    },
    schedule: {
      title: "Work Schedule",
      "my.time": "XDEVS (UTC+3)",
      "user.time": "Your Time",
      mon: "Mon",
      tue: "Tue",
      wed: "Wed",
      thu: "Thu",
      fri: "Fri",
      sat: "Sat",
      sun: "Sun",
      hours: "Mon–Thu: 09:00–21:00 · Fri: 09:00–21:30 · Sat–Sun: Day off",
    },
    order: {
      badge: "Order contract",
      title: "XDEVS order form",
      contract: "Order contract №",
      contractor: "Contractor",
      date: "Date",
      client: "Client",
      "client.label": "Name + Discord / email / t.me / etc.",
      "client.placeholder": "e.g. Dmytro + xeraze. or email",
      "client.error": "Required — how we can contact you.",
      subject: "1. Subject of the order",
      service: "Service",
      "service.select": "Select a service...",
      "service.web.page": "Web — Web Page",
      "service.web.site": "Web — Website",
      "service.web.portal": "Web — Web Portal",
      "service.discord.server": "Discord — Server Setup",
      "service.discord.bot.simple": "Discord — Simple Bot",
      "service.discord.bot.standard": "Discord — Standard Bot",
      "service.discord.bot.advanced": "Discord — Advanced Bot",
      "service.telegram.channel": "Telegram — Channel Setup",
      "service.telegram.channel.auto": "Telegram — Channel Automation",
      "service.telegram.channel.bot": "Telegram — Channel + Bot",
      "service.telegram.bot.simple": "Telegram — Simple Bot",
      "service.telegram.bot.standard": "Telegram — Standard Bot",
      "service.telegram.bot.advanced": "Telegram — Advanced Bot",
      "service.roblox.simple": "Roblox — Simple Scripts",
      "service.roblox.systems": "Roblox — Game Systems",
      "service.roblox.fullstack": "Roblox — Full-stack",
      "service.apps.mobile.simple": "Mobile — Simple App",
      "service.apps.mobile.rich": "Mobile — Feature-rich App",
      "service.apps.mobile.cross": "Mobile — Cross-platform App",
      "service.apps.desktop.simple": "Desktop — Simple Utility",
      "service.apps.desktop.db": "Desktop — App with Database",
      "service.apps.desktop.full": "Desktop — Full Stack App",
      product: "Product name",
      "product.placeholder": "e.g. Discord Bot",
      "product.error": "Required field.",
      short: "Short description",
      "short.error": "Required field.",
      "short.placeholder": "A few sentences about the task",
      long: "Detailed description",
      optional: "(optional)",
      "long.placeholder": "Technical details, wishes, references...",
      timeline: "2. Timeline and payment terms",
      deadline: "Deadline",
      "deadline.placeholder": "e.g. by 25.07.2026",
      cost: "Total cost",
      "cost.placeholder": "e.g. 149.99 UAH",
      "cost.error": "Required field.",
      "payment.type": "Payment format",
      "payment.type.select": "Select payment format...",
      "payment.type.full": "Full prepayment (100%)",
      "payment.type.partial": "Partial prepayment (25%)",
      "payment.type.after": "After completion",
      "payment.type.task": "Per task",
      "payment.type.weekly": "Weekly",
      "payment.type.monthly": "Monthly",
      prepay: "Prepayment",
      "prepay.amount": "Amount",
      "prepay.error": "Required field.",
      paid: "Paid?",
      "paid.select": "Select...",
      "paid.yes": "Yes",
      "paid.no": "No",
      "paid.error": "Required field.",
      remainder: "Remainder due",
      "remainder.error": "Required field.",
      "remainder.placeholder": "Paid after demonstration of the result",
      agreement: "3. Agreement",
      "agreement.p1":
        "By submitting this order, the Client confirms they have read and agree to the XDEVS Public Offer.",
      "agreement.p2":
        "The Client understands that source code will be delivered only after full payment.",
      signature: "Contractor signature",
      end: "End of document",
      "agree.text": "I agree with the",
      "agree.link": "Public Offer",
      submit: "Submit order",
      scroll: "Scroll to the end of the document",
    },
    offer: {
      badge: "Public Offer",
      title: "Public offer",
      heading: "For the provision of digital services «XDEVS»",
      "scroll": "Scroll to the end of the document",
      "verifying": "Please wait, verifying document...",
      "document_read": "Document read",
      "back": "Back to pricelist",
      "s1.title": "1. General provisions",
      "s1.1": "This document is a public offer by the developer operating under the brand «XDEVS» (hereinafter — the Contractor) regarding software development, scripts, and digital content services.",
      "s1.2": "Acceptance of this offer is confirmed by the Client making a prepayment or submitting an order form via the official website.",
      "s2.title": "2. Subject of the agreement",
      "s2.1": "The Contractor undertakes to provide IT development services according to the agreed Technical Specification (TS) or order details, and the Client undertakes to accept and pay for these services.",
      "s3.title": "3. Rights and obligations of the parties",
      "s3.1": "The Contractor commits to delivering high-quality work within the agreed timeframe.",
      "s3.2": "The Client commits to providing all necessary materials, access, and clear requirements in a timely manner.",
      "s4.title": "4. Service fees and payment procedure",
      "s4.1": "Service fees are determined according to the current pricelist: ",
      "s4.1.link": "xeraze.github.io/Pricelist",
      "s4.2.title": "Special terms.",
      "s4.2": "Work performed by the Contractor within the non-commercial project «Sloboda Hospital [RP]» is unpaid (free of charge) at the Contractor's personal initiative. This condition does not apply to any orders from third parties.",
      "s4.3": "Work on paid orders begins only after the Client pays a prepayment of 25% of the total cost.",
      "s4.4": "The prepayment guarantees the booking of the developer's time.",
      "s5.title": "5. Procedure for delivery and acceptance",
      "s5.1": "Demonstration of intermediate and final results is provided via screenshots, video recording, or the Contractor's test environment.",
      "s5.2": "The Client has the right to request free revisions only if they do not contradict the originally approved Technical Specification. Any new features requested after development begins are billed separately.",
      "s6.title": "6. Intellectual property and file transfer",
      "s6.1": "Pursuant to Articles 433 and 435 of the Civil Code of Ukraine, computer programs and source code are objects of copyright. Copyright belongs to the Contractor from the moment the work is created.",
      "s6.2": "The Contractor retains all economic and non-economic copyrights to the source code until the Client has paid 100% of the service fees.",
      "s6.3": "Delivery of source files (.lua, .rbxl, .json, etc.) to the Client occurs only after full payment of the remaining balance (75%).",
      "s7.title": "7. Liability and rights protection",
      "s7.1": "The Client may not present the received code as their own (plagiarism) or resell it to third parties without the Contractor's explicit written consent.",
      "s7.2": "If the product is used without full payment, the Contractor reserves the right to send a DMCA Notice to platform administrators (Roblox, Discord, GitHub) to have the content blocked.",
      "s7.3": "The Contractor is not liable for product malfunctions caused by the Client's unauthorized modifications to the source code after delivery, or by failures of third-party platforms.",
      "s8.title": "8. Force Majeure",
      "s8.1": "The Parties are released from liability for partial or complete failure to fulfill their obligations due to circumstances of insuperable force (natural disasters, global internet outages, or platform blockages making work impossible).",
      "s9.title": "9. Modification and termination of the agreement",
      "s9.1": "The agreement may be terminated by mutual consent of the Parties.",
      "s9.2": "If the Client unilaterally cancels the project after development has begun, the 25% prepayment is strictly non-refundable, as it covers the time and resources already expended by the Contractor.",
      "s9.3": "If the Client fails to respond to the Contractor's messages for more than 14 calendar days without prior notice, the Contractor has the right to unilaterally freeze the project or terminate the agreement without refunding the prepayment.",
      "s9.4": "If the Contractor is unable to complete the project due to their own fault or technical limitations not specified in advance, the Contractor is obliged to refund 100% of the received funds to the Client.",
      "s10.title": "10. Dispute resolution",
      "s10.1": "All disputes and disagreements arising from this agreement shall be resolved through negotiations via the official XDEVS communication channels (Discord or ticket systems).",
      "s11.title": "11. Final provisions",
      "s11.1": "The Contractor reserves the right to modify this public offer at any time without prior notice. The new version takes effect immediately upon publication on the website.",
      "end": "End of document",
    },
    success: {
      title: "Order submitted",
      desc: "Your application was sent successfully. Please wait for a reply — the developer will contact you using the contact details you provided.",
      back: "Back to pricelist",
    },
    toast: {
      copied: "Discord username copied!",
    },
  },

  ru: {
    nav: {
      offer: "Оферта",
      order: "Заказ",
      web: "Веб",
      discord: "Discord",
      telegram: "Telegram",
      roblox: "Роблокс",
      apps: "Приложения",
      payment: "Оплата",
    },
    header: {
      badge: "Профессиональные услуги Full-stack разработки",
      title1: "Ваше видение",
      title2: "Мой код",
      subtitle:
        "Качественные решения для разработки. от надёжных веб-приложений до инновационных архитектур для Discord серверов и ботов.",
    },
    web: {
      title: "I. Разработка сайтов",
      constructors: "Веб-страница",
      "constructors.desc":
        "Простая рукописная страница. HTML, CSS, минимальный JS. Чистая вёрстка, быстрая загрузка, готова к деплою.",
      "constructors.code": "Сайт",
      "constructors.code.desc":
        "Многостраничный сайт с уникальным дизайном и интерактивом. Полный HTML/CSS/JS, анимации, формы, адаптивная верстка.",
      starting: "Цена от",
      custom: "Веб-портал",
      "custom.desc":
        "Сложный веб-сайт с нуля. Архитектура, базы данных, авторизация, API, панель управления — полный стек для серьёзных проектов.",
      popular: "Самый популярный",
    },
    discord: {
      title: "II. Разработка Discord",
      servers: "Discord Серверы",
      "servers.desc":
        "Настройка публичных ботов и полная конфигурация Discord сервера (каналы, роли, права, автомодерация, эмодзи, стикеры и многое другое) входят в стоимость пакетов, но могут быть заказаны отдельно абсолютно бесплатно (например, вы можете бесплатно заказать настройку каналов и ролей по отдельности (2 настройки), но как только вы превысите этот бесплатный лимит, за каждую новую настройку вам придётся платить четверть от первоначальной стоимости полной настройки сервера Discord).",
      creation: "Создание с нуля",
      "creation.desc":
        "Полная разработка с нуля до функционального и безопасного сообщества с системой адаптации, эстетическим дизайном и тому подобным.",
      reconstruction: "Реконструкция",
      "reconstruction.desc":
        "Реструктуризация существующего сервера. Исправление прав доступа, дизайна, модернизация структуры сообщества и прочее.",
      bots: "Discord Боты",
      "bots.desc":
        "Рукописные боты для Discord на Python, JavaScript или Java. От простых ботов команд до сложных систем с базами данных и интеграциями API.",
      "consult.title": "Консультации по проекту",
      "consult.desc1": "Первые",
      "consult.desc2": "2 сессии БЕСПЛАТНЫЕ",
      "consult.desc3": "для обсуждения архитектуры и Технического задания (ТЗ).",
      "support.title": "Доп. детали",
      "support.desc": "С 3-й сессии появляется небольшая ставка в",
      "support.desc2": "59 грн или 1.29 USD / сессия",
      "support.desc3": "для покрытия времени разработки.",
      simple: "Простой бот",
      "simple.desc":
        "Лёгкий рукописный бот. Базовые команды, модерация. Чистый код, быстрый деплой, без фреймворков.",
      custom: "Стандартный бот",
      "custom.desc":
        "Рукописный бот с нуля на Python/JS. Уникальная логика, свои команды, обработка событий, всё что вам нужно.",
      advanced: "Расширенный бот",
      "advanced.desc":
        "Внешние API, базы данных, веб-панели, мультиплатформа. Полная интеграция с вашими сервисами.",
      starting: "Цена от",
      popular: "Самый популярный",
    },
    telegram: {
      title: "III. Разработка Telegram",
      channels: "Telegram Каналы",
      "channels.desc":
        "Настройка и автоматизация Telegram каналов и групп. Планирование контента, автопубликация, управление подписчиками и интеграции.",
      "channel.setup": "Настройка канала",
      "channel.setup.desc":
        "Полная настройка канала: описание, правила, закреплённые сообщения, приветственное сообщение, антиспам, группа обсуждений.",
      "channel.automation": "Автоматизация канала",
      "channel.automation.desc":
        "Запланированные посты, автопубликация из RSS/API, фильтрация контента, боты модерации, интеграция аналитики.",
      "channel.integration": "Канал + Бот интеграция",
      "channel.integration.desc":
        "Управление каналом через кастомного бота. Планирование постов, аналитика подписчиков, интеграция платежей, контент-пайплайны.",
      bots: "Telegram Боты",
      "bots.desc":
        "Рукописные боты для Telegram на Python, JavaScript или Go. От простых инлайн-ботов до сложных систем с базами данных и вебхуками.",
      simple: "Простой бот",
      "simple.desc":
        "Лёгкий бот с базовыми командами. Инлайн-запросы, клавиатуры, автоответы. Быстро и чисто.",
      custom: "Стандартный бот",
      "custom.desc":
        "Бот с кастомной логикой, state-машинами, callback-обработчиками. Поддержка платежей, обработка файлов, многошаговые workflow.",
      advanced: "Расширенный бот",
      "advanced.desc":
        "Полноценный бот с базами данных, веб-панелями, вебхук-интеграциями, AI/ML возможностями. Готов к продакшену.",
      starting: "Цена от",
      popular: "Самый популярный",
    },
    roblox: {
      title: "IV. Roblox Studio (Luau Скрипты)",
      "lua.title": "Luau скриптинг",
      "lua.desc":
        "Пользовательские скрипты, игровые механики, сервер/клиент логика, системы данных, UI логика и автоматизация для Roblox проектов. Вся работа на Luau.",
      simple: "Простые скрипты",
      "simple.desc":
        "Отдельные скрипты: логика кнопок, простые триггеры, базовое сохранение данных, мини-автоматизация и утилиты.",
      systems: "Игровые системы",
      "systems.desc":
        "Экономика, инвентарь, трейдинг, рейтинг, квесты, админ-панели — сложная логика связанная с базой данных.",
      fullstack: "Полный стек",
      "fullstack.desc":
        "Полная игровая логика с нуля: клиент-сервер архитектура, DataStore, remote events, полная автоматизация всех систем.",
      starting: "Цена от",
    },
    apps: {
      title: "V. Приложения",
      "nongame.title": "Неигровые приложения",
      "nongame.desc":
        "Утилиты, инструменты, приложения и другое ПО — НЕ игры. Идеально для бизнес-инструментов и специализированного софта.",
      mobile: "Мобильные приложения",
      desktop: "Десктоп приложения",
      "simple.app": "Простое приложение",
      "simple.app.desc":
        "Базовое мобильное приложение с основными функциями. Чистый UI, ключевой функционал, готово к деплою.",
      "feature.rich": "Функциональное приложение",
      "feature.rich.desc":
        "Продвинутое мобильное приложение с кастомным UI/UX, анимациями, офлайн-режимом, пуш-уведомлениями и синхронизацией данных.",
      "cross.platform": "Кроссплатформенное приложение",
      "cross.platform.desc":
        "Одна кодовая база для iOS и Android. Общая логика, платформенные оптимизации, публикация в App Store и Google Play.",
      "simple.util": "Простая утилита",
      "simple.util.desc":
        "Лёгкий десктоп-инструмент для конкретной задачи. Обработка файлов, калькуляторы, простое управление данными.",
      db: "Приложение с БД",
      "db.desc":
        "Десктоп-приложение с локальной или облачной базой данных. Управление данными, отчёты, импорт/экспорт, пользовательские аккаунты.",
      "desktop.full": "Полноценное приложение",
      "desktop.full.desc":
        "Сложное десктоп-приложение с интеграцией бэкенда, API, авторизацией, реал-тайм данными. Корпоративный уровень.",
      starting: "Цена от",
    },
    payment: {
      title: "VI. Способы оплаты",
      direct: "Напрямую",
      "direct.desc": "Mastercard",
      nitro: "Discord Nitro",
      "nitro.desc":
        "Basic (129.99 или 1299.99 грн / 2.99 или 29.99 USD)<br>Full (449.99 или 4399.99 грн / 9.99 или 99.99 USD)",
      boosts: "Серверные бусты",
      "boosts.desc": "XDEVS Forum<br>1 Буст = 199.99 грн / 4.99 USD",
      another: "Другие способы",
      "another.desc":
        "Скины / Ключи / Игровые Предметы / Игровые аккаунты / Игровая валюта<br>(во всех этих случаях комиссия оплачивается вами)",
    },
    footer: {
      contacts: "XDEVS Контакты",
    },
    schedule: {
      title: "График работы",
      "my.time": "XDEVS (UTC+3)",
      "user.time": "Ваше время",
      mon: "Пн",
      tue: "Вт",
      wed: "Ср",
      thu: "Чт",
      fri: "Пт",
      sat: "Сб",
      sun: "Вс",
      hours: "Пн–Чт: 09:00–21:00 · Пт: 09:00–21:30 · Сб–Вс: Выходной",
    },
    order: {
      badge: "Оформление заказа",
      title: "Форма заказа XDEVS",
      contract: "Договор заказа №",
      contractor: "Исполнитель",
      date: "Дата",
      client: "Заказчик",
      "client.label": "Имя + Discord / email / т.д.",
      "client.placeholder": "напр. Дмитрий + xeraze. или email",
      "client.error": "Обязательно — как с вами связаться.",
      subject: "1. Предмет заказа",
      service: "Услуга",
      "service.select": "Выберите услугу...",
      "service.web.page": "Веб — Веб-страница",
      "service.web.site": "Веб — Сайт",
      "service.web.portal": "Веб — Веб-портал",
      "service.discord.server": "Discord — Настройка сервера",
      "service.discord.bot.simple": "Discord — Простой бот",
      "service.discord.bot.standard": "Discord — Стандартный бот",
      "service.discord.bot.advanced": "Discord — Расширенный бот",
      "service.telegram.channel": "Telegram — Настройка канала",
      "service.telegram.channel.auto": "Telegram — Автоматизация канала",
      "service.telegram.channel.bot": "Telegram — Канал + Бот",
      "service.telegram.bot.simple": "Telegram — Простой бот",
      "service.telegram.bot.standard": "Telegram — Стандартный бот",
      "service.telegram.bot.advanced": "Telegram — Расширенный бот",
      "service.roblox.simple": "Roblox — Простые скрипты",
      "service.roblox.systems": "Roblox — Игровые системы",
      "service.roblox.fullstack": "Roblox — Полный стек",
      "service.apps.mobile.simple": "Мобайл — Простое приложение",
      "service.apps.mobile.rich": "Мобайл — Функциональное приложение",
      "service.apps.mobile.cross": "Мобайл — Кроссплатформенное",
      "service.apps.desktop.simple": "Десктоп — Простая утилита",
      "service.apps.desktop.db": "Десктоп — Приложение с БД",
      "service.apps.desktop.full": "Десктоп — Полноценное приложение",
      product: "Название продукта",
      "product.placeholder": "напр. Discord Bot",
      "product.error": "Обязательное поле.",
      short: "Краткое описание",
      "short.error": "Обязательное поле.",
      "short.placeholder": "Несколько предложений о задаче",
      long: "Подробное описание",
      "long.placeholder": "Технические детали, пожелания, ссылки...",
      timeline: "2. Сроки и условия оплаты",
      deadline: "Дедлайн",
      "deadline.placeholder": "напр. к 25.07.2026",
      cost: "Общая стоимость",
      "cost.placeholder": "напр. 149.99 грн",
      "cost.error": "Обязательное поле.",
      "payment.type": "Формат оплаты",
      "payment.type.select": "Выберите формат оплаты...",
      "payment.type.full": "Полная предоплата (100%)",
      "payment.type.partial": "Частичная предоплата (25%)",
      "payment.type.after": "Оплата после завершения",
      "payment.type.task": "Оплата за каждую задачу",
      "payment.type.weekly": "Еженедельно",
      "payment.type.monthly": "Ежемесячно",
      prepay: "Предоплата",
      "prepay.amount": "Сумма",
      "prepay.error": "Обязательное поле.",
      paid: "Оплачено?",
      "paid.select": "Выберите...",
      "paid.yes": "Да",
      "paid.no": "Нет",
      "paid.error": "Обязательное поле.",
      remainder: "Остаток",
      "remainder.error": "Обязательное поле.",
      "remainder.placeholder": "Оплачивается после демонстрации результата",
      agreement: "3. Согласие",
      "agreement.p1":
        "Подтверждая заказ, Заказчик подтверждает, что ознакомлен и согласен с Публичной офертой XDEVS.",
      "agreement.p2":
        "Заказчик понимает, что исходный код будет передан только после полной оплаты.",
      signature: "Подпись исполнителя",
      end: "Конец документа",
      "agree.text": "Я согласен с",
      "agree.link": "Публичной офертой",
      submit: "Отправить заказ",
      scroll: "Прокрутите до конца документа",
    },
    offer: {
      badge: "Публичная оферта",
      title: "Публичная оферта",
      heading: "О предоставлении цифровых услуг «XDEVS»",
      "scroll": "Прокрутите до конца документа",
      "verifying": "Пожалуйста, подождите, проверка документа...",
      "document_read": "Документ прочитан",
      "back": "Вернуться к прайслисту",
      "s1.title": "1. Общие положения",
      "s1.1": "Настоящий документ является публичной офертой разработчика, действующего под брендом «XDEVS» (далее — Исполнитель), касательно услуг по разработке ПО, скриптов и цифрового контента.",
      "s1.2": "Акцепт данной оферты подтверждается внесением предоплаты или отправкой формы заказа через официальный сайт.",
      "s2.title": "2. Предмет договора",
      "s2.1": "Исполнитель обязуется оказать услуги по IT-разработке в соответствии с согласованным Техническим заданием (ТЗ) или деталями заказа, а Заказчик обязуется принять и оплатить данные услуги.",
      "s3.title": "3. Права и обязанности сторон",
      "s3.1": "Исполнитель обязуется выполнить работу качественно в согласованные сроки.",
      "s3.2": "Заказчик обязуется своевременно предоставить все необходимые материалы, доступы и чёткие требования.",
      "s4.title": "4. Стоимость услуг и порядок оплаты",
      "s4.1": "Стоимость услуг определяется согласно действующему прайс-листу: ",
      "s4.1.link": "xeraze.github.io/Pricelist",
      "s4.2.title": "Особые условия.",
      "s4.2": "Работы, выполняемые Исполнителем в рамках некоммерческого проекта «Sloboda Hospital [RP]», являются безоплатными (бесплатными) по личной инициативе Исполнителя. Данное условие не распространяется на какие-либо заказы от третьих лиц.",
      "s4.3": "Работа над платными заказами начинается только после внесения Заказчиком предоплаты в размере 25% от общей стоимости.",
      "s4.4": "Предоплата гарантирует бронирование времени разработчика.",
      "s5.title": "5. Порядок сдачи и приёмки",
      "s5.1": "Демонстрация промежуточных и итоговых результатов осуществляется посредством скриншотов, видеозаписи или тестовой среды Исполнителя.",
      "s5.2": "Заказчик вправе запросить бесплатные доработки, если они не противоречат первоначально утверждённому ТЗ. Любые новые функции, запрошенные после начала разработки, оплачиваются отдельно.",
      "s6.title": "6. Интеллектуальная собственность и передача файлов",
      "s6.1": "Согласно статьям 433 и 435 Гражданского кодекса Украины, компьютерные программы и исходный код являются объектами авторского права. Авторство принадлежит Исполнителю с момента создания работы.",
      "s6.2": "Исполнитель сохраняет все имущественные и неимущественные права на исходный код до полной оплаты Заказчиком 100% стоимости услуг.",
      "s6.3": "Передача исходных файлов (.lua, .rbxl, .json и т.д.) Заказчику осуществляется только после полной оплаты оставшегося баланса (75%).",
      "s7.title": "7. Ответственность и защита прав",
      "s7.1": "Заказчик не имеет права выдавать полученный код за собственный (плагиат) или перепродавать его третьим лицам без прямого письменного согласия Исполнителя.",
      "s7.2": "В случае использования продукта без полной оплаты Исполнитель оставляет за собой право направить DMCA-уведомление администраторам платформ (Roblox, Discord, GitHub) для блокировки контента.",
      "s7.3": "Исполнитель не несёт ответственности за сбои продукта, вызванные несанкционированными изменениями Заказчиком исходного кода после передачи, или сбоями сторонних платформ.",
      "s8.title": "8. Форс-мажор",
      "s8.1": "Стороны освобождаются от ответственности за частичное или полное неисполнение обязательств по настоящему договору вследствие обстоятельств непреодолимой силы (стихийные бедствия, глобальные сбои интернета или блокировки платформ, делающие работу невозможной).",
      "s9.title": "9. Изменение и расторжение договора",
      "s9.1": "Договор может быть расторгнут по взаимному согласию сторон.",
      "s9.2": "В случае одностороннего отказа Заказчика от проекта после начала разработки, внесённая предоплата в размере 25% строго не возвращается, так как она покрывает уже затраченное время и ресурсы Исполнителя.",
      "s9.3": "В случае если Заказчик не отвечает на сообщения Исполнителя более 14 календарных дней без предварительного уведомления, Исполнитель вправе в одностороннем порядке заморозить проект или расторгнуть договор без возврата предоплаты.",
      "s9.4": "В случае невозможности завершения проекта по вине Исполнителя или технических ограничений, не оговорённых заранее, Исполнитель обязан вернуть Заказчику 100% полученных средств.",
      "s10.title": "10. Разрешение споров",
      "s10.1": "Все споры и разногласия, возникающие из настоящего договора, разрешаются путём переговоров через официальные каналы связи XDEVS (Discord или тикет-системы).",
      "s11.title": "11. Заключительные положения",
      "s11.1": "Исполнитель оставляет за собой право в любое время изменять данную публичную оферту без предварительного уведомления. Новая версия вступает в силу немедленно после публикации на сайте.",
      "end": "Конец документа",
    },
    success: {
      title: "Заказ отправлен",
      desc: "Ваша заявка отправлена успешно. Пожалуйста, ждите ответа — разработчик свяжется с вами используя данные которые вы указали.",
      back: "Вернуться к прайслисту",
    },
    toast: {
      copied: "Discord username скопирован!",
    },
  },

  ua: {
    nav: {
      offer: "Оферта",
      order: "Замовлення",
      web: "Веб",
      discord: "Discord",
      telegram: "Telegram",
      roblox: "Роблокс",
      apps: "Додатки",
      payment: "Оплата",
    },
    header: {
      badge: "Професійні послуги Full-stack розробки",
      title1: "Ваше бачення",
      title2: "Мій код",
      subtitle:
        "Якісні рішення для розробки. Від надійних веб-додатків до інноваційних архітектур для Discord серверів і ботів.",
    },
    web: {
      title: "I. Розробка сайтів",
      constructors: "Веб-сторінка",
      "constructors.desc":
        "Проста рукописна сторінка. HTML, CSS, мінімальний JS. Чиста верстка, швидке завантаження, готова до деплою.",
      "constructors.code": "Сайт",
      "constructors.code.desc":
        "Багатосторінковий сайт з унікальним дизайном та інтерактивом. Повний HTML/CSS/JS, анімації, форми, адаптивний макет.",
      starting: "Ціна від",
      custom: "Веб-портал",
      "custom.desc":
        "Складний веб-сайт з нуля. Архітектура, бази даних, авторизація, API, панель управління — повний стек для серйозних проєктів.",
      popular: "Найпопулярніший",
    },
    discord: {
      title: "II. Розробка Discord",
      servers: "Discord Сервери",
      "servers.desc":
        "Налаштування публічних ботів та повна конфігурація Discord сервера (канали, ролі, права, автомодерація, емодзі, стікери та багато іншого) входять у вартість пакетів, але їх можна замовити окремо абсолютно безкоштовно (наприклад, ви можете безкоштовно замовити налаштування каналів та ролей окремо (2 налаштування), але щойно ви перевищите цей безкоштовний ліміт, за кожне нове налаштування вам доведеться платити чверть від початкової вартості повного налаштування сервера Discord).",
      creation: "Створення з нуля",
      "creation.desc":
        "Повна розробка від пустого сервера до функціонального та безпечної спільноти з системою адаптації, естетичним дизайном і тому подібним.",
      reconstruction: "Реконструкція",
      "reconstruction.desc":
        "Реструктуризація існуючого сервера. Виправлення прав доступу, дизайну, модернізація структури спільноти та інше.",
      bots: "Discord Боти",
      "bots.desc":
        "Рукописні боти для Discord на Python, JavaScript або Java. Від простих ботів команд до складних систем з базами даних та інтеграціями API.",
      "consult.title": "Консультації по проекту",
      "consult.desc1": "Перші",
      "consult.desc2": "2 сесії БЕЗКОШТОВНІ",
      "consult.desc3": "для обговорення архітектури та Технічного завдання (ТЗ).",
      "support.title": "Доп. деталі",
      "support.desc": "З 3-ї сесії невелика ставка в",
      "support.desc2": "59 грн або 1.29 USD / сесія",
      "support.desc3": "для покриття часу розробки.",
      simple: "Простий бот",
      "simple.desc":
        "Легкий рукописний бот. Базові команди, модерація. Чистий код, швидкий деплой, без фреймворків.",
      custom: "Стандартний бот",
      "custom.desc":
        "Рукописний бот з нуля на Python/JS. Унікальна логіка, свої команди, обробка подій, все що вам потрібно.",
      advanced: "Розширений бот",
      "advanced.desc":
        "Зовнішні API, бази даних, мультиплатформа. Повна інтеграція з вашими сервісами.",
      starting: "Ціна від",
      popular: "Найпопулярніший",
    },
    telegram: {
      title: "III. Розробка Telegram",
      channels: "Telegram Канали",
      "channels.desc":
        "Налаштування та автоматизація Telegram каналів та груп. Планування контенту, автопублікація, управління підписниками та інтеграції.",
      "channel.setup": "Налаштування каналу",
      "channel.setup.desc":
        "Повне налаштування каналу: опис, правила, закріплені повідомлення, вітальне повідомлення, антиспам, група обговорень.",
      "channel.automation": "Автоматизація каналу",
      "channel.automation.desc":
        "Заплановані пости, автопублікація з RSS/API, фільтрація контенту, боти модерації, інтеграція аналітики.",
      "channel.integration": "Канал + Бот інтеграція",
      "channel.integration.desc":
        "Управління каналом через кастомного бота. Планування постів, аналітика підписників, інтеграція платежів, контент-пайплайни.",
      bots: "Telegram Боти",
      "bots.desc":
        "Рукописні боти для Telegram на Python, JavaScript або Go. Від простих інлайн-ботів до складних систем з базами даних та вебхуками.",
      simple: "Простий бот",
      "simple.desc":
        "Легкий бот з базовими командами. Інлайн-запити, клавіатури, авто-відповіді. Швидко та чисто.",
      custom: "Стандартний бот",
      "custom.desc":
        "Бот з кастомною логікою, state-машинами, callback-обработчиками. Підтримка платежів, обробка файлів, багатокрокові workflow.",
      advanced: "Розширений бот",
      "advanced.desc":
        "Повноцінний бот з базами даних, веб-панелями, вебхук-інтеграціями, AI/ML можливостями. Готовий до продакшену.",
      starting: "Ціна від",
      popular: "Найпопулярніший",
    },
    roblox: {
      title: "IV. Roblox Studio (Luau Скрипти)",
      "lua.title": "Luau скриптинг",
      "lua.desc":
        "Користувацькі скрипти, ігрові механіки, сервер/клієнт логіка, системи даних, UI логіка та автоматизація для Roblox проектів. Вся робота на Luau.",
      simple: "Прості скрипти",
      "simple.desc":
        "Окремі скрипти: логіка кнопок, прості тригери, базове збереження даних, міні-автоматизація та утиліти.",
      systems: "Ігрові системи",
      "systems.desc":
        "Економіка, інвентар, трейдинг, рейтинг, квести, адмін-панелі — складна логіка пов'язана з базою даних.",
      fullstack: "Повний стек",
      "fullstack.desc":
        "Повна ігрова логіка з нуля: клієнт-сервер архітектура, DataStore, remote events, повна автоматизація всіх систем.",
      starting: "Ціна від",
    },
    apps: {
      title: "V. Додатки",
      "nongame.title": "Неігрові додатки",
      "nongame.desc":
        "Утиліти, інструменти, додатки та інше ПЗ — НЕ ігри. Ідеально для бізнес-інструментів та спеціалізованого софту.",
      mobile: "Мобільні додатки",
      desktop: "Десктоп додатки",
      "simple.app": "Простий додаток",
      "simple.app.desc":
        "Базовий мобільний додаток з основними функціями. Чистий UI, ключовий функціонал, готовий до деплою.",
      "feature.rich": "Функціональний додаток",
      "feature.rich.desc":
        "Просунутий мобільний додаток з кастомним UI/UX, анімаціями, офлайн-режимом, пуш-повідомленнями та синхронізацією даних.",
      "cross.platform": "Кросплатформенний додаток",
      "cross.platform.desc":
        "Одна кодова база для iOS та Android. Спільна логіка, платформні оптимізації, публікація в App Store та Google Play.",
      "simple.util": "Проста утиліта",
      "simple.util.desc":
        "Легкий десктоп-інструмент для конкретної задачі. Обробка файлів, калькулятори, просте управління даними.",
      db: "Додаток з БД",
      "db.desc":
        "Десктоп-додаток з локальною або хмарною базою даних. Управління даними, звіти, імпорт/експорт, користувацькі акаунти.",
      "desktop.full": "Повноцінний додаток",
      "desktop.full.desc":
        "Складний десктоп-додаток з інтеграцією бекенда, API, авторизацією, реал-тайм даними. Корпоративний рівень.",
      starting: "Ціна від",
    },
    payment: {
      title: "VI. Способи оплати",
      direct: "Напряму",
      "direct.desc": "Mastercard",
      nitro: "Discord Nitro",
      "nitro.desc":
        "Basic (129.99 або 1299.99 грн / 2.99 або 29.99 USD)<br>Full (449.99 або 4399.99 грн / 9.99 або 99.99 USD)",
      boosts: "Серверні бусти",
      "boosts.desc": "XDEVS Forum<br>1 Буст = 199.99 грн / 4.99 USD",
      another: "Інші способи",
      "another.desc":
        "Скіни / Ключі / Ігрові Предмети / Ігрові акаунти / Ігрова валюта<br>(у всіх цих випадках комісія оплачується вами)",
    },
    footer: {
      contacts: "XDEVS Контакти",
    },
    schedule: {
      title: "Графік роботи",
      "my.time": "XDEVS (UTC+3)",
      "user.time": "Ваш час",
      mon: "Пн",
      tue: "Вт",
      wed: "Ср",
      thu: "Чт",
      fri: "Пт",
      sat: "Сб",
      sun: "Нд",
      hours: "Пн–Чт: 09:00–21:00 · Пт: 09:00–21:30 · Сб–Нд: Вихідний",
    },
    order: {
      badge: "Оформлення замовлення",
      title: "XDEVS форма замовлення",
      contract: "Договір замовлення №",
      contractor: "Виконавець",
      date: "Дата",
      client: "Замовник",
      "client.label": "Ім'я + Discord / email / тощо",
      "client.placeholder": "напр. Дмитро + xeraze. або email",
      "client.error": "Обов'язково — як з вами зв'язатися.",
      subject: "1. Предмет замовлення",
      service: "Послуга",
      "service.select": "Оберіть послугу...",
      "service.web.page": "Веб — Веб-сторінка",
      "service.web.site": "Веб — Сайт",
      "service.web.portal": "Веб — Веб-портал",
      "service.discord.server": "Discord — Налаштування сервера",
      "service.discord.bot.simple": "Discord — Простий бот",
      "service.discord.bot.standard": "Discord — Стандартний бот",
      "service.discord.bot.advanced": "Discord — Розширений бот",
      "service.telegram.channel": "Telegram — Налаштування каналу",
      "service.telegram.channel.auto": "Telegram — Автоматизація каналу",
      "service.telegram.channel.bot": "Telegram — Канал + Бот",
      "service.telegram.bot.simple": "Telegram — Простий бот",
      "service.telegram.bot.standard": "Telegram — Стандартний бот",
      "service.telegram.bot.advanced": "Telegram — Розширений бот",
      "service.roblox.simple": "Roblox — Прості скрипти",
      "service.roblox.systems": "Roblox — Ігрові системи",
      "service.roblox.fullstack": "Roblox — Повний стек",
      "service.apps.mobile.simple": "Мобайл — Простий додаток",
      "service.apps.mobile.rich": "Мобайл — Функціональний додаток",
      "service.apps.mobile.cross": "Мобайл — Кросплатформенний",
      "service.apps.desktop.simple": "Десктоп — Проста утиліта",
      "service.apps.desktop.db": "Десктоп — Додаток з БД",
      "service.apps.desktop.full": "Десктоп — Повноцінний додаток",
      product: "Назва продукту",
      "product.placeholder": "напр. Discord Bot",
      "product.error": "Обов'язкове поле.",
      short: "Короткий опис",
      "short.error": "Обов'язкове поле.",
      "short.placeholder": "Кілька речень про задачу",
      long: "Детальний опис",
      "long.placeholder": "Технічні деталі, побажання, посилання...",
      timeline: "2. Терміни та умови оплати",
      deadline: "Дедлайн",
      "deadline.placeholder": "напр. до 25.07.2026",
      cost: "Загальна вартість",
      "cost.placeholder": "напр. 149.99 грн",
      "cost.error": "Обов'язкове поле.",
      "payment.type": "Формат оплати",
      "payment.type.select": "Оберіть формат оплати...",
      "payment.type.full": "Повна передплата (100%)",
      "payment.type.partial": "Часткова передплата (25%)",
      "payment.type.after": "Оплата після завершення",
      "payment.type.task": "Оплата за кожну задачу",
      "payment.type.weekly": "Щотижня",
      "payment.type.monthly": "Щомісяця",
      prepay: "Передплата",
      "prepay.amount": "Сума",
      "prepay.error": "Обов'язкове поле.",
      paid: "Оплачено?",
      "paid.select": "Оберіть...",
      "paid.yes": "Так",
      "paid.no": "Ні",
      "paid.error": "Обов'язкове поле.",
      remainder: "Залишок",
      "remainder.error": "Обов'язкове поле.",
      "remainder.placeholder": "Оплачується після демонстрації результату",
      agreement: "3. Згода",
      "agreement.p1":
        "Підтверджуючи замовлення, Замовник підтверджує, що ознайомлений та згоден з Публічною офертою XDEVS.",
      "agreement.p2":
        "Замовник розуміє, що вихідний код буде передано лише після повної оплати.",
      signature: "Підпис виконавця",
      end: "Кінець документа",
      "agree.text": "Я згоден з",
      "agree.link": "Публічною офертою",
      submit: "Надіслати замовлення",
      scroll: "Прокрутіть до кінця документа",
    },
    offer: {
      badge: "Публічна оферта",
      title: "Публічна оферта",
      heading: "Про надання цифрових послуг «XDEVS»",
      "scroll": "Прокрутіть до кінця документа",
      "verifying": "Будь ласка, зачекайте, перевірка документа...",
      "document_read": "Документ прочитано",
      "back": "Повернутися до прайслисту",
      "s1.title": "1. Загальні положення",
      "s1.1": "Цей документ є публічною офертою розробника, що діє під брендом «XDEVS» (далі — Виконавець), щодо послуг з розробки ПЗ, скриптів та цифрового контенту.",
      "s1.2": "Ацепт цієї оферти підтверджується внесенням передплати або відправкою форми замовлення через офіційний сайт.",
      "s2.title": "2. Предмет договору",
      "s2.1": "Виконавець зобов'язується надати послуги з IT-розробки відповідно до узгодженого Технічного завдання (ТЗ) або деталей замовлення, а Замовник зобов'язується прийняти та оплатити ці послуги.",
      "s3.title": "3. Права та обов'язки сторін",
      "s3.1": "Виконавець зобов'язується виконати роботу якісно в узгоджені терміни.",
      "s3.2": "Замовник зобов'язується своєчасно надати всі необхідні матеріали, доступи та чіткі вимоги.",
      "s4.title": "4. Вартість послуг та порядок оплати",
      "s4.1": "Вартість послуг визначається відповідно до діючого прайс-листа: ",
      "s4.1.link": "xeraze.github.io/Pricelist",
      "s4.2.title": "Особливі умови.",
      "s4.2": "Роботи, що виконуються Виконавцем в рамках некомерційного проєкту «Sloboda Hospital [RP]», є безоплатними (безкоштовними) за особистою ініціативою Виконавця. Ця умова не поширюється на будь-які замовлення від третіх осіб.",
      "s4.3": "Робота над платними замовленнями починається лише після внесення Замовником передплати в розмірі 25% від загальної вартості.",
      "s4.4": "Передплата гарантує бронювання часу розробника.",
      "s5.title": "5. Порядок здачі та приймання",
      "s5.1": "Демонстрація проміжних та підсумкових результатів здійснюється за допомогою скріншотів, відеозапису або тестового середовища Виконавця.",
      "s5.2": "Замовник має право запросити безкоштовні доопрацювання, якщо вони не суперечать спочатку затвердженому ТЗ. Будь-які нові функції, запитані після початку розробки, оплачуються окремо.",
      "s6.title": "6. Інтелектуальна власність та передача файлів",
      "s6.1": "Відповідно до статей 433 та 435 Цивільного кодексу України, комп'ютерні програми та вихідний код є об'єктами авторського права. Авторство належить Виконавцю з моменту створення роботи.",
      "s6.2": "Виконавець зберігає всі майнові та немайнові права на вихідний код до повної оплати Замовником 100% вартості послуг.",
      "s6.3": "Передача вихідних файлів (.lua, .rbxl, .json тощо) Замовнику здійснюється лише після повної оплати залишку (75%).",
      "s7.title": "7. Відповідальність та захист прав",
      "s7.1": "Замовник не має права видавати отриманий код за власний (плагіат) або перепродувати його третім особам без прямої письмової згоди Виконавця.",
      "s7.2": "У разі використання продукту без повної оплати Виконавець залишає за собою право направити DMCA-повідомлення адміністраторам платформ (Roblox, Discord, GitHub) для блокування контенту.",
      "s7.3": "Виконавець не несе відповідальності за збої продукту, спричинені несанкціонованими змінами Замовником вихідного коду після передачі, або збоями сторонніх платформ.",
      "s8.title": "8. Форс-мажор",
      "s8.1": "Сторони звільняються від відповідальності за часткове або повне невиконання зобов'язань за цим договором унаслідок обставин непереборної сили (стихійні лиха, глобальні збої інтернету або блокування платформ, що роблять роботу неможливою).",
      "s9.title": "9. Зміна та розірвання договору",
      "s9.1": "Договір може бути розірвано за взаємною згодою сторін.",
      "s9.2": "У разі одностороннього відмови Замовника від проєкту після початку розробки, внесена передплата в розмірі 25% суворо не повертається, оскільки вона покриває вже витрачений час та ресурси Виконавця.",
      "s9.3": "У разі якщо Замовник не відповідає на повідомлення Виконавця більше 14 календарних днів без попереднього повідомлення, Виконавець має право в односторонньому порядку заморозити проєкт або розірвати договір без повернення передплати.",
      "s9.4": "У разі неможливості завершення проєкту з вини Виконавця або технічних обмежень, не обговорених заздалегідь, Виконавець зобов'язаний повернути Замовнику 100% отриманих коштів.",
      "s10.title": "10. Вирішення спорів",
      "s10.1": "Усі спори та розбіжності, що виникають з цього договору, вирішуються шляхом переговорів через офіційні канали зв'язку XDEVS (Discord або тікет-системи).",
      "s11.title": "11. Заключні положення",
      "s11.1": "Виконавець залишає за собою право в будь-який час змінювати цю публічну оферту без попереднього повідомлення. Нова версія набуває чинності негайно після публікації на сайті.",
      "end": "Кінець документа",
    },
    success: {
      title: "Замовлення надіслано",
      desc: "Вашу заявку надіслано успішно. Будь ласка, чекайте відповіді — розробник зв'яжеться з вами використовуючи дані які ви вказали.",
      back: "Повернутися до прайслисту",
    },
    toast: {
      copied: "Discord username скопійовано!",
    },
  },
};

(function () {
  "use strict";

  var STORAGE_KEY = "xdevs_lang";
  var DEFAULT_LANG = "en";

  function flatten(obj, prefix) {
    var result = {};
    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      var fullKey = prefix ? prefix + "." + key : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        var nested = flatten(obj[key], fullKey);
        for (var k in nested) result[k] = nested[k];
      } else {
        result[fullKey] = obj[key];
      }
    }
    return result;
  }

  var flat = {};
  flat.en = flatten(TRANSLATIONS.en);
  flat.ru = flatten(TRANSLATIONS.ru);
  flat.ua = flatten(TRANSLATIONS.ua);

  function getLang() {
    try {
      var lang = localStorage.getItem(STORAGE_KEY);
      if (lang === "uk") return "ua";
      return lang || DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG;
    }
  }

  function applyLang(lang) {
    var dict = flat[lang] || flat[DEFAULT_LANG];
    var elements = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < elements.length; i++) {
      var el = elements[i];
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    }
    var htmlElements = document.querySelectorAll("[data-i18n-html]");
    for (var j = 0; j < htmlElements.length; j++) {
      var htmlEl = htmlElements[j];
      var htmlKey = htmlEl.getAttribute("data-i18n-html");
      if (dict[htmlKey] !== undefined) {
        htmlEl.innerHTML = dict[htmlKey];
      }
    }
    var placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    for (var k = 0; k < placeholders.length; k++) {
      var phEl = placeholders[k];
      var phKey = phEl.getAttribute("data-i18n-placeholder");
      if (dict[phKey] !== undefined) {
        phEl.placeholder = dict[phKey];
      }
    }
    var selects = document.querySelectorAll("select[data-i18n-select]");
    for (var s = 0; s < selects.length; s++) {
      var sel = selects[s];
      var opts = sel.querySelectorAll("option[data-i18n]");
      for (var o = 0; o < opts.length; o++) {
        var optKey = opts[o].getAttribute("data-i18n");
        if (dict[optKey] !== undefined) {
          opts[o].textContent = dict[optKey];
        }
      }
    }
    document.documentElement.setAttribute("lang", lang === "ua" ? "uk" : lang);
  }

  function setLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    applyLang(lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getLang());

    var langBtn = document.getElementById("lang-btn");
    var langDropdown = document.getElementById("lang-dropdown");
    var langCurrent = document.getElementById("lang-current");
    var langOptions = document.querySelectorAll(".lang-option");

    if (langBtn && langDropdown) {
      langBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        langDropdown.classList.toggle("hidden");
      });

      document.addEventListener("click", function () {
        langDropdown.classList.add("hidden");
      });

      langDropdown.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }

    for (var i = 0; i < langOptions.length; i++) {
      langOptions[i].addEventListener("click", function () {
        var newLang = this.getAttribute("data-lang");
        setLang(newLang);
        if (langCurrent) langCurrent.textContent = newLang.toUpperCase();
        if (langDropdown) langDropdown.classList.add("hidden");
      });
    }
  });

  window.XDEVS_i18n = {
    setLang: setLang,
    applyLang: applyLang,
    getLang: getLang,
    t: function (key) { var lang = getLang(); return (flat[lang] && flat[lang][key]) || (flat.en && flat.en[key]) || key; }
  };
})();