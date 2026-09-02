/**
 * XDEVS Pricelist — Translations
 * ================================
 * Редактируй тексты здесь. Структура:
 *   en → English
 *   ru → Русский
 *   uk → Українська
 *
 * Формат: "ключ": "текст"
 * Группы: nav, header, web, servers, bots, roblox, apps, payment, footer, order, success, toast
 */
const TRANSLATIONS = {
  en: {
    nav: {
      offer: "Offer",
      order: "Order",
      web: "Web",
      servers: "Servers",
      bots: "Bots",
      roblox: "Roblox",
      apps: "Apps",
      payment: "Payment",
    },
    header: {
      badge: "Professional Middle Full-Stack Services",
      title1: "Elevate Your",
      title2: "Digital Presence",
      subtitle:
        "High-quality development solutions. From reliable, custom-built web applications to innovative architectures for Discord servers and bots.",
    },
    web: {
      title: "I. Website Development",
      constructors: "Constructors",
      "constructors.desc":
        "Quick websites using standard online website builders (Google Sites, Tilda). Great for portfolios and simple landing pages.",
      "constructors.code": "Constructors + Custom Code",
      "constructors.code.desc":
        "Enhanced websites created by using website builders and HTML/CSS/JS code snippets to make unique design elements and interactive widgets.",
      starting: "Starting at",
      custom: "Custom Code",
      "custom.desc":
        "Built from scratch. High performance and full freedom in logic construction. For serious web applications and unique requirements.",
      popular: "Most Popular",
    },
    servers: {
      title: "II. Discord Servers Development",
      "arch.title": "Architecture & Roles",
      "arch.desc":
        "Configuration of public bots and full Discord server setup (channels, roles, permissions, automated moderation, emojis, stickers, travel guide, and much more) are included by default in these packages, but they can also be ordered separately absolutely for free (for example, you can order free setup for channels and roles separately (2 settings) at no cost, but once you exceed this free limit, you will need to pay a quarter from the initial cost of a full Discord server setup for each new setup).",
      creation: "Creation from Scratch",
      "creation.desc":
        "Full development starting from empty/new server to fully functional and secure community hub, with user adaptation system and aesthetic design.",
      reconstruction: "Reconstruction",
      "reconstruction.desc":
        "Restructuring of the existing server. Correcting access permissions, design, and modernization of the community structure.",
    },
    bots: {
      title: "III. Discord & Telegram Bots Development",
      "consult.title": "Project Consultations",
      "consult.desc1": "The first",
      "consult.desc2": "2 sessions are FREE",
      "consult.desc3": "to discuss architecture and Technical Specifications (SRS).",
      "support.title": "Extra Support",
      "support.desc": "From the 3rd session, a small rate of",
      "support.desc2": "59 UAH or 1.29 USD / session",
      "support.desc3": "applies to cover development time.",
      ghost: "BotGhost Framework (Discord)",
      base: "Base Setup",
      modules: "Additional Modules",
      pure: "Pure Code (Py / Java)",
      mvp: "Base Bot (MVP)",
      api: "API & DB Systems",
    },
    roblox: {
      title: "IV. Roblox Studio Scripting",
      "lua.title": "Lua Scripting",
      "lua.desc":
        "Custom scripts, game mechanics, server/client logic, data systems, UI logic, and automation for Roblox experiences. All work is done in Lua/Luau.",
      simple: "Simple Scripts",
      "simple.desc":
        "Individual scripts: button logic, simple triggers, basic data saving, minor automations and utilities.",
      systems: "Game Systems",
      "systems.desc":
        "Economy, inventory, trading, ranking, quest systems, admin panels — complex interconnected logic with database.",
      fullstack: "Full Stack",
      "fullstack.desc":
        "Complete game logic from scratch: client-server architecture, DataStore, remote events, full automation of all systems.",
    },
    apps: {
      title: "V. Mobile & Desktop Applications",
      "nongame.title": "Non-Game Applications",
      "nongame.desc":
        "This section covers utility applications, tools, productivity apps, and other software solutions — NOT games. Perfect for business tools, personal utilities, and specialized software.",
      mobile: "Mobile Applications",
      desktop: "Desktop Applications",
      "simple.app": "Simple App",
      medium: "Medium Complexity",
      complex: "Complex App with API",
      "simple.util": "Simple Utility",
      db: "Tool with Database",
      "desktop.full": "Full Stack Application",
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
      subject: "1. Subject of the order (ToR)",
      product: "Product name",
      "product.placeholder": "e.g. Discord Bot",
      "product.error": "Required field.",
      short: "Short description",
      "short.error": "Required field.",
      "short.placeholder": "A few sentences about the task",
      long: "Detailed description",
      "long.placeholder": "Technical details, wishes, references...",
      timeline: "2. Timeline and payment terms",
      deadline: "Deadline",
      "deadline.placeholder": "e.g. by 25.07.2026",
      cost: "Total cost",
      "cost.placeholder": "e.g. 149.99 UAH",
      "cost.error": "Required field.",
      prepay: "Prepayment (25%)",
      "prepay.amount": "Amount",
      "prepay.error": "Required field.",
      paid: "Paid?",
      "paid.select": "Select...",
      "paid.yes": "Yes",
      "paid.no": "No",
      "paid.error": "Required field.",
      remainder: "Remainder due (75%)",
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
      web: "Сайты",
      servers: "Серверы",
      bots: "Боты",
      roblox: "Roblox",
      apps: "Приложения",
      payment: "Оплата",
    },
    header: {
      badge: "Профессиональные услуги Full-Stack разработки",
      title1: "Повысить свой",
      title2: "Цифровой имидж",
      subtitle:
        "Качественные решения для разработки. от надёжных веб-приложений до инновационных архитектур для Discord серверов и ботов.",
    },
    web: {
      title: "I. Разработка сайтов",
      constructors: "Конструкторы",
      "constructors.desc":
        "Быстрые сайты на базе конструкторов (Google Sites, Tilda). Идеально для портфолио и простых лендингов.",
      "constructors.code": "Конструкторы + код",
      "constructors.code.desc":
        "Улучшенные сайты с использованием конструкторов и HTML/CSS/JS фрагментов для создания уникальных дизайнерских элементов и интерактивных виджетов.",
      starting: "Цена от",
      custom: "Код с нуля",
      "custom.desc":
        "Создано с нуля. Высокая производительность и полная свобода в построении логики. Для серьёзных веб-приложений и уникальных требований.",
      popular: "Самый популярный",
    },
    servers: {
      title: "II. Разработка Discord серверов",
      "arch.title": "Архитектура и роли",
      "arch.desc":
        "Настройка публичных ботов и полная настройка Discord сервера (каналы, роли, права, автоматомодерация, эмодзи, стикеры и многое другое) входят в стоимость пакетов, но могут быть заказаны отдельно абсолютно бесплатно.",
      creation: "Создание с нуля",
      "creation.desc":
        "Полная разработка от пустого сервера до функционального и безопасного центра сообщества с системой адаптации и эстетическим дизайном.",
      reconstruction: "Реконструкция",
      "reconstruction.desc":
        "Реструктуризация существующего сервера. Исправление прав доступа, дизайна и модернизация структуры сообщества.",
    },
    bots: {
      title: "III. Разработка Discord & Telegram ботов",
      "consult.title": "Консультации по проекту",
      "consult.desc1": "Первые",
      "consult.desc2": "2 сессии БЕСПЛАТНЫЕ",
      "consult.desc3": "для обсуждения архитектуры и Технического задания (ТЗ).",
      "support.title": "Доп. поддержка",
      "support.desc": "С 3-й сессии небольшая ставка",
      "support.desc2": "59 грн или 1.29 USD / сессия",
      "support.desc3": "для покрытия времени разработки.",
      ghost: "BotGhost Framework (Discord)",
      base: "Базовая настройка",
      modules: "Дополнительные модули",
      pure: "Чистый код (Py / Java)",
      mvp: "Базовый бот (MVP)",
      api: "API и БД системы",
    },
    roblox: {
      title: "IV. Скриптинг в Roblox Studio",
      "lua.title": "Луа скриптинг",
      "lua.desc":
        "Пользовательские скрипты, игровые механики, сервер/клиент логика, системы данных, UI логика и автоматизация для Roblox проектов. Вся работа в Lua/Luau.",
      simple: "Простые скрипты",
      "simple.desc":
        "Отдельные скрипты: логика кнопок, простые триггеры, базовое сохранение данных, мини-автоматизация и утилиты.",
      systems: "Игровые системы",
      "systems.desc":
        "Экономика, инвентарь, трейдинг, рейтинг, квесты, админ-панели — сложная связанная логика с базой данных.",
      fullstack: "Полный стек",
      "fullstack.desc":
        "Полная игровая логика с нуля: клиент-серверная архитектура, DataStore, удалённые события, полная автоматизация всех систем.",
    },
    apps: {
      title: "V. Мобильные и десктоп приложения",
      "nongame.title": "Неигровые приложения",
      "nongame.desc":
        "Этот раздел включает утилиты, инструменты, приложения для продуктивности и другое ПО — НЕ игры. Идеально для бизнес-инструментов и специализированного софта.",
      mobile: "Мобильные приложения",
      desktop: "Десктоп приложения",
      "simple.app": "Простое приложение",
      medium: "Средняя сложность",
      complex: "Сложное приложение с API",
      "simple.util": "Простая утилита",
      db: "Инструмент с БД",
      "desktop.full": "Полноценное приложение",
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
        "Скины / Ключи / Предметы / Игровые аккаунты / Игровая валюта<br>(во всех этих случаях комиссия оплачивается вами)",
    },
    footer: {
      contacts: "XDEVS Контакты",
    },
    order: {
      badge: "Договор заказа",
      title: "XDEVS форма заказа",
      contract: "Договор заказа №",
      contractor: "Подрядчик",
      date: "Дата",
      client: "Заказчик",
      "client.label": "Имя + Discord / email / т.д.",
      "client.placeholder": "напр. Dmytro + xeraze. или email",
      "client.error": "Обязательно — как с вами связаться.",
      subject: "1. Предмет заказа (ТЗ)",
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
      prepay: "Предоплата (25%)",
      "prepay.amount": "Сумма",
      "prepay.error": "Обязательное поле.",
      paid: "Оплачено?",
      "paid.select": "Выберите...",
      "paid.yes": "Да",
      "paid.no": "Нет",
      "paid.error": "Обязательное поле.",
      remainder: "Остаток (75%)",
      "remainder.error": "Обязательное поле.",
      "remainder.placeholder": "Оплачивается после демонстрации результата",
      agreement: "3. Согласие",
      "agreement.p1":
        "Подтверждая заказ, Заказчик подтверждает, что ознакомлен и согласен с Публичной офертой XDEVS.",
      "agreement.p2":
        "Заказчик понимает, что исходный код будет передан только после полной оплаты.",
      signature: "Подпись подрядчика",
      end: "Конец документа",
      "agree.text": "Я согласен с",
      "agree.link": "Публичной офертой",
      submit: "Отправить заказ",
      scroll: "Прокрутите до конца документа",
    },
    success: {
      title: "Заказ отправлен",
      desc: "Ваша заявка отправлена успешно. Пожалуйста, ждите ответа — разработчик свяжется с вами использу данные которые вы указали.",
      back: "Вернуться к прайслисту",
    },
    toast: {
      copied: "Discord username скопирован!",
    },
  },

  uk: {
    nav: {
      offer: "Оферта",
      order: "Замовлення",
      web: "Сайти",
      servers: "Сервери",
      bots: "Боти",
      roblox: "Roblox",
      apps: "Додатки",
      payment: "Оплата",
    },
    header: {
      badge: "Професійні послуги Full-Stack розробки",
      title1: "Підвищити свій",
      title2: "Цифровий імідж",
      subtitle:
        "Якісні рішення для розробки. від надійних веб-додатків до інноваційних архітектур для Discord серверів і ботів.",
    },
    web: {
      title: "I. Розробка сайтів",
      constructors: "Конструктори",
      "constructors.desc":
        "Швидкі сайти на базі конструкторів (Google Sites, Tilda). Ідеально для портфоліо і простих лендінгів.",
      "constructors.code": "Конструктори + код",
      "constructors.code.desc":
        "Покращені сайти з використанням конструкторів та HTML/CSS/JS фрагментів для створення унікальних дизайнерських елементів та інтерактивних віджетів.",
      starting: "Ціна від",
      custom: "Код з нуля",
      "custom.desc":
        "Створено з нуля. Висока продуктивність і повна свобода у побудові логіки. Для серйозних веб-додатків та унікальних вимог.",
      popular: "Найпопулярніший",
    },
    servers: {
      title: "II. Розробка Discord серверів",
      "arch.title": "Архітектура та ролі",
      "arch.desc":
        "Налаштування публічних ботів та повне налаштування Discord сервера (канали, ролі, права, автоматична модерація, емодзі, стікери та багато іншого) входять у вартість пакетів, але можуть бути замовлені окремо абсолютно безкоштовно.",
      creation: "Створення з нуля",
      "creation.desc":
        "Повна розробка від пустого сервера до функціонального та безпечного центру спільноти з системою адаптації та естетичним дизайном.",
      reconstruction: "Реконструкція",
      "reconstruction.desc":
        "Реструктуризація існуючого сервера. Виправлення прав доступу, дизайну та модернізація структури спільноти.",
    },
    bots: {
      title: "III. Розробка Discord & Telegram ботів",
      "consult.title": "Консультації по проекту",
      "consult.desc1": "Перші",
      "consult.desc2": "2 сесії БЕЗКОШТОВНІ",
      "consult.desc3": "для обговорення архітектури та Технічного завдання (ТЗ).",
      "support.title": "Доп. підтримка",
      "support.desc": "З 3-ї сесії невелика ставка",
      "support.desc2": "59 грн або 1.29 USD / сесія",
      "support.desc3": "для покриття часу розробки.",
      ghost: "BotGhost Framework (Discord)",
      base: "Базове налаштування",
      modules: "Додаткові модулі",
      pure: "Чистий код (Py / Java)",
      mvp: "Базовий бот (MVP)",
      api: "API та БД системи",
    },
    roblox: {
      title: "IV. Скриптинг в Roblox Studio",
      "lua.title": "Луа скриптинг",
      "lua.desc":
        "Користувацькі скрипти, ігрові механіки, сервер/клієнт логіка, системи даних, UI логіка та автоматизація для Roblox проектів. Вся робота в Lua/Luau.",
      simple: "Прості скрипти",
      "simple.desc":
        "Окремі скрипти: логіка кнопок, прості тригери, базове збереження даних, міні-автоматизація та утиліти.",
      systems: "Ігрові системи",
      "systems.desc":
        "Економіка, інвентар, трейдинг, рейтинг, квести, адмін-панелі — складна пов'язана логіка з базою даних.",
      fullstack: "Повний стек",
      "fullstack.desc":
        "Повна ігрова логіка з нуля: клієнт-серверна архітектура, DataStore, віддалені події, повна автоматизація всіх систем.",
    },
    apps: {
      title: "V. Мобільні та десктоп додатки",
      "nongame.title": "Неігрові додатки",
      "nongame.desc":
        "Цей розділ включає утиліти, інструменти, додатки для продуктивності та інше ПЗ — НЕ ігри. Ідеально для бізнес-інструментів та спеціалізованого софту.",
      mobile: "Мобільні додатки",
      desktop: "Десктоп додатки",
      "simple.app": "Простий додаток",
      medium: "Середня складність",
      complex: "Складний додаток з API",
      "simple.util": "Проста утиліта",
      db: "Інструмент з БД",
      "desktop.full": "Повноцінний додаток",
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
        "Скіни / Ключі / Предмети / Ігрові акаунти / Ігрова валюта<br>(у всіх цих випадках комісія оплачується вами)",
    },
    footer: {
      contacts: "XDEVS Контакти",
    },
    order: {
      badge: "Договір замовлення",
      title: "XDEVS форма замовлення",
      contract: "Договір замовлення №",
      contractor: "Підрядник",
      date: "Дата",
      client: "Замовник",
      "client.label": "Ім'я + Discord / email / тощо",
      "client.placeholder": "напр. Dmytro + xeraze. або email",
      "client.error": "Обов'язково — як з вами зв'язатися.",
      subject: "1. Предмет замовлення (ТЗ)",
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
      prepay: "Передплата (25%)",
      "prepay.amount": "Сума",
      "prepay.error": "Обов'язкове поле.",
      paid: "Оплачено?",
      "paid.select": "Оберіть...",
      "paid.yes": "Так",
      "paid.no": "Ні",
      "paid.error": "Обов'язкове поле.",
      remainder: "Залишок (75%)",
      "remainder.error": "Обов'язкове поле.",
      "remainder.placeholder": "Оплачується після демонстрації результату",
      agreement: "3. Згода",
      "agreement.p1":
        "Підтверджуючи замовлення, Замовник підтверджує, що ознайомлений та згоден з Публічною офертою XDEVS.",
      "agreement.p2":
        "Замовник розуміє, що вихідний код буде передано лише після повної оплати.",
      signature: "Підпис підрядника",
      end: "Кінець документа",
      "agree.text": "Я згоден з",
      "agree.link": "Публічною офертою",
      submit: "Надіслати замовлення",
      scroll: "Прокрутіть до кінця документа",
    },
    success: {
      title: "Замовлення надіслано",
      desc: "Вашу заявку надіслано успішно. Будь ласка, чекайте відповіді — розробник зв'яжеться з вами використовую дані які ви вказали.",
      back: "Повернутися до прайслисту",
    },
    toast: {
      copied: "Discord username скопійовано!",
    },
  },
};

/**
 * i18n Engine — нічого не редагуй нижче
 */
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
  flat.uk = flatten(TRANSLATIONS.uk);

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
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
    document.documentElement.setAttribute("lang", lang);
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

  window.XDEVS_i18n = { setLang: setLang, applyLang: applyLang, getLang: getLang };
})();
