(function () {
    const WEBHOOK_PROXY_URL = 'https://xdevs-webhook.xeraze-official.workers.dev';
    const LEGAL_SEEN_KEY = 'xdevs_legal_seen';
    const BASE_REQUIRED_FIELDS = [
        'f-customer', 'f-service', 'f-product-name', 'f-product-short',
        'f-total-cost', 'f-payment-type'
    ];
    const PARTIAL_REQUIRED_FIELDS = ['f-prepay-amount', 'f-prepay-done', 'f-remainder'];

    let gateReady = false;
    let checkboxChecked = false;
    let teardownOrderGate = null;
    let teardownOfferGate = null;
    let offerFirstVisit = false;

    function hasSeenLegal() {
        try { return localStorage.getItem(LEGAL_SEEN_KEY) === '1'; } catch (_) { return false; }
    }
    function markLegalSeen() {
        try { localStorage.setItem(LEGAL_SEEN_KEY, '1'); } catch (_) {}
    }

    function showToast(text, isError) {
        const toast = document.getElementById('toast');
        const icon = toast.querySelector('i');
        document.getElementById('toast-text').textContent = text;
        icon.classList.toggle('fa-check-circle', !isError);
        icon.classList.toggle('fa-circle-exclamation', Boolean(isError));
        icon.classList.toggle('text-red-400', Boolean(isError));
        icon.classList.toggle('text-white', !isError);
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3200);
    }

    window.copyDiscord = function () {
        navigator.clipboard.writeText('xeraze.').then(() => {
            showToast(window.XDEVS_i18n.t('toast.copied'));
        });
    };

    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width, height, particles = [];
        const mobile = window.matchMedia('(max-width: 768px)').matches;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const linkDist = mobile ? 90 : 120;
        const maxCount = mobile ? 55 : 130;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', () => { resize(); initParticles(); });
        resize();

        function Particle() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 1.5;
            this.baseAlpha = Math.random() * 0.5 + 0.1;
        }
        Particle.prototype.update = function () {
            this.x += this.vx; this.y += this.vy;
            if (this.x < 0) this.x = width; if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height; if (this.y > height) this.y = 0;
        };
        Particle.prototype.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255,255,255,' + this.baseAlpha + ')';
            ctx.fill();
        };

        function initParticles() {
            particles = [];
            if (reduced) return;
            const density = mobile ? 22000 : 14000;
            const count = Math.min(maxCount, Math.floor((width * height) / density));
            for (let i = 0; i < count; i++) particles.push(new Particle());
        }
        initParticles();

        function animate() {
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update();
                p.draw();
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < linkDist) {
                        ctx.beginPath();
                        ctx.strokeStyle = 'rgba(255,255,255,' + (0.15 - (dist / linkDist) * 0.15) + ')';
                        ctx.lineWidth = 0.6;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            requestAnimationFrame(animate);
        }
        animate();
    }

    const loadingMessages = [
        'Initializing...',
        'Loading interface...',
        'Preparing workspace...',
        'Almost ready...'
    ];
    let loadProgress = 0;
    let msgIndex = 0;
    const loaderBar = document.getElementById('loader-bar');
    const loaderText = document.getElementById('loader-text');
    const loaderBrand = document.getElementById('loader-brand');
    const loadingScreen = document.getElementById('loading-screen');
    const navBrand = document.getElementById('nav-brand');

    function flyLogoToNav(done) {
        const brandRect = loaderBrand.getBoundingClientRect();
        const navRect = navBrand.getBoundingClientRect();
        const flyX = navRect.left - brandRect.left;
        const flyY = navRect.top - brandRect.top;
        loaderBrand.style.setProperty('--fly-x', flyX + 'px');
        loaderBrand.style.setProperty('--fly-y', flyY + 'px');
        loadingScreen.classList.add('done');
        requestAnimationFrame(() => loaderBrand.classList.add('fly-to-nav'));
        setTimeout(() => {
            navBrand.style.transition = 'opacity 0.35s ease';
            navBrand.style.opacity = '1';
            loadingScreen.classList.add('fade-out');
            setTimeout(done, 450);
        }, 900);
    }

    function afterLoadingComplete() {
        if (hasSeenLegal()) {
            document.body.style.overflow = 'auto';
            return;
        }
        openOffer({ firstVisit: true });
    }

    const loadInterval = setInterval(() => {
        loadProgress += Math.random() * 20 + 10;
        if (loadProgress >= 100) {
            loadProgress = 100;
            clearInterval(loadInterval);
            loaderBar.style.width = '100%';
            loaderText.textContent = 'Ready';
            setTimeout(() => flyLogoToNav(afterLoadingComplete), 250);
            return;
        }
        loaderBar.style.width = loadProgress + '%';
        const idx = Math.min(Math.floor(loadProgress / 26), loadingMessages.length - 1);
        if (idx !== msgIndex) {
            msgIndex = idx;
            loaderText.textContent = loadingMessages[idx];
        }
    }, 220);

    const offerOverlay = document.getElementById('offer-overlay');
    const btnCloseOffer = document.getElementById('btn-close-offer');

    function openOffer(opts) {
        opts = opts || {};
        offerFirstVisit = !!opts.firstVisit;
        closeOrder(true);

        if (offerFirstVisit) {
            btnCloseOffer.classList.add('locked');
            btnCloseOffer.title = 'Read the document first';
        } else {
            btnCloseOffer.classList.remove('locked');
            btnCloseOffer.title = 'Close';
        }

        const scrollEl = document.getElementById('scroll-offer-modal');
        scrollEl.scrollTop = 0;
        window.XDEVS.initClauseReveal(scrollEl);

        if (teardownOfferGate) teardownOfferGate();
        teardownOfferGate = window.XDEVS.setupScrollGate({
            scrollId: 'scroll-offer-modal',
            btnId: 'btn-offer-done',
            ringId: 'timer-ring-offer-modal',
            labelId: 'btn-offer-done-label',
            hintId: 'offer-modal-hint',
            progressId: 'progress-fill-offer',
            doneLabel: 'Continue',
            onReady: function () {
                if (offerFirstVisit) {
                    btnCloseOffer.classList.remove('locked');
                    btnCloseOffer.title = 'Close';
                }
            }
        });

        offerOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function closeOffer() {
        if (offerFirstVisit && btnCloseOffer.classList.contains('locked')) return;
        markLegalSeen();
        offerFirstVisit = false;
        offerOverlay.classList.remove('visible');
        document.body.style.overflow = 'auto';
        if (teardownOfferGate) {
            teardownOfferGate();
            teardownOfferGate = null;
        }
    }

    const orderOverlay = document.getElementById('order-overlay');
    const successOverlay = document.getElementById('success-overlay');
    const checkboxEl = document.getElementById('agree-checkbox');
    const checkboxWrap = document.getElementById('agree-checkbox-wrap');

    function generateContractMeta() {
        const now = new Date();
        const y = now.getFullYear();
        const m = String(now.getMonth() + 1).padStart(2, '0');
        const d = String(now.getDate()).padStart(2, '0');
        const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
        const number = 'XDEVS-' + y + m + d + '-' + rand;
        const date = d + '.' + m + '.' + y;
        document.getElementById('contract-number').textContent = number;
        document.getElementById('contract-date').textContent = date;
        window._xdevsContract = { number, date };
    }

    function validateSubmitAvailability() {
        document.getElementById('btn-submit').disabled = !(gateReady && checkboxChecked);
    }

    function clearFieldError(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove('field-error');
        const msg = document.querySelector('.field-error-msg[data-for="' + id + '"]');
        if (msg) msg.classList.remove('show');
    }

    function setFieldError(id) {
        const el = document.getElementById(id);
        el.classList.add('field-error');
        const msg = document.querySelector('.field-error-msg[data-for="' + id + '"]');
        if (msg) msg.classList.add('show');
    }

    function getRequiredFields() {
        const fields = BASE_REQUIRED_FIELDS.slice();
        const paymentType = document.getElementById('f-payment-type').value;
        if (paymentType === 'partial') {
            fields.push(...PARTIAL_REQUIRED_FIELDS);
        }
        return fields;
    }

    function validateForm() {
        let valid = true;
        getRequiredFields().forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const val = el.value.trim();
            if (!val) {
                setFieldError(id);
                valid = false;
            } else {
                clearFieldError(id);
            }
        });
        return valid;
    }

    const paymentTypeSelect = document.getElementById('f-payment-type');
    const partialFields = document.getElementById('payment-partial-fields');

    function togglePaymentFields() {
        const isPartial = paymentTypeSelect.value === 'partial';
        partialFields.classList.toggle('hidden', !isPartial);
        if (!isPartial) {
            ['f-prepay-amount', 'f-prepay-done', 'f-remainder'].forEach(clearFieldError);
        }
    }

    paymentTypeSelect.addEventListener('change', togglePaymentFields);

    function openOrder() {
        closeOfferQuiet();
        generateContractMeta();
        gateReady = false;
        checkboxChecked = false;
        checkboxEl.classList.add('locked');
        checkboxEl.classList.remove('checked');
        checkboxEl.querySelector('i').classList.add('hidden');
        document.getElementById('btn-submit').disabled = true;

        const scrollEl = document.getElementById('scroll-order');
        scrollEl.scrollTop = 0;
        window.XDEVS.initClauseReveal(scrollEl);

        if (teardownOrderGate) teardownOrderGate();
        teardownOrderGate = window.XDEVS.setupScrollGate({
            scrollId: 'scroll-order',
            btnId: 'btn-submit',
            ringId: 'timer-ring-order',
            labelId: 'btn-submit-label',
            hintId: 'order-hint',
            progressId: 'progress-fill-order',
            doneLabel: 'Submit order',
            onReady: function () {
                gateReady = true;
                checkboxEl.classList.remove('locked');
                document.getElementById('btn-submit').disabled = true;
                validateSubmitAvailability();
            }
        });

        orderOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function closeOfferQuiet() {
        offerOverlay.classList.remove('visible');
        if (teardownOfferGate) {
            teardownOfferGate();
            teardownOfferGate = null;
        }
    }

    function closeOrder(silent) {
        orderOverlay.classList.remove('visible');
        if (!silent && !offerOverlay.classList.contains('visible')) {
            document.body.style.overflow = 'auto';
        }
        if (teardownOrderGate) {
            teardownOrderGate();
            teardownOrderGate = null;
        }
    }

    function showSuccess() {
        closeOrder(true);
        successOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
        markLegalSeen();
    }

    function hideSuccess() {
        successOverlay.classList.remove('visible');
        document.body.style.overflow = 'auto';
    }

    function buildDiscordPayload() {
        const c = window._xdevsContract || { number: '—', date: '—' };
        const val = (id) => document.getElementById(id).value.trim() || 'Не указано';
        const paymentType = document.getElementById('f-payment-type').value;
        const paymentTypeLabels = {
            full: 'Полная предоплата (100%)',
            partial: 'Частичная предоплата (25%)',
            after: 'Оплата после завершения',
            task: 'Оплата за каждую задачу',
            weekly: 'Еженедельно',
            monthly: 'Ежемесячно'
        };

        const fields = [
            { name: 'Дата', value: c.date, inline: true },
            { name: 'Клиент', value: val('f-customer'), inline: true },
            { name: 'Услуга', value: val('f-service'), inline: true },
            { name: 'Название продукта', value: val('f-product-name') },
            { name: 'Краткое описание', value: val('f-product-short') },
            { name: 'Подробное описание', value: val('f-product-long') },
            { name: 'Дедлайн', value: val('f-deadline'), inline: true },
            { name: 'Общая стоимость', value: val('f-total-cost'), inline: true },
            { name: 'Формат оплаты', value: paymentTypeLabels[paymentType] || val('f-payment-type'), inline: true },
        ];

        if (paymentType === 'partial') {
            fields.push(
                { name: 'Предоплата', value: val('f-prepay-amount'), inline: true },
                { name: 'Предоплата оплачена?', value: val('f-prepay-done'), inline: true },
                { name: 'Остаток', value: val('f-remainder'), inline: true },
            );
        }

        return {
            embeds: [{
                title: 'Новый заказ № ' + c.number,
                color: 0xffffff,
                fields: fields,
                footer: { text: 'XDEVS Legal — Order Contract' },
                timestamp: new Date().toISOString()
            }]
        };
    }

    document.getElementById('nav-offer').addEventListener('click', () => openOffer({ firstVisit: false }));
    document.getElementById('nav-order').addEventListener('click', openOrder);
    document.getElementById('btn-close-offer').addEventListener('click', closeOffer);
    document.getElementById('btn-offer-done').addEventListener('click', closeOffer);
    document.getElementById('btn-close-order').addEventListener('click', () => closeOrder(false));
    document.getElementById('btn-success-close').addEventListener('click', hideSuccess);

    checkboxWrap.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        if (checkboxEl.classList.contains('locked')) return;
        checkboxChecked = !checkboxChecked;
        checkboxEl.classList.toggle('checked', checkboxChecked);
        checkboxEl.querySelector('i').classList.toggle('hidden', !checkboxChecked);
        validateSubmitAvailability();
    });

    getRequiredFields().forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('input', () => clearFieldError(id));
        el.addEventListener('change', () => clearFieldError(id));
    });

    document.getElementById('btn-submit').addEventListener('click', async () => {
        const btn = document.getElementById('btn-submit');
        if (btn.disabled) return;
        if (!checkboxChecked) {
            showToast('Please confirm you agree with the Offer', true);
            return;
        }
        if (!validateForm()) {
            showToast('Please fill in all required fields', true);
            return;
        }

        btn.disabled = true;
        const label = document.getElementById('btn-submit-label');
        const original = label.textContent;
        label.textContent = 'Sending...';

        try {
            const res = await fetch(WEBHOOK_PROXY_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(buildDiscordPayload())
            });
            if (res.ok) {
                showSuccess();
            } else {
                label.textContent = original;
                validateSubmitAvailability();
                showToast('Submit failed. Please try again', true);
            }
        } catch (_) {
            label.textContent = original;
            validateSubmitAvailability();
            showToast('No connection. Check your internet', true);
        }
    });

    document.body.style.overflow = 'hidden';

    (function initSchedule() {
        var clockDev = document.getElementById('clock-dev');
        var clockDevDate = document.getElementById('clock-dev-date');
        var clockUser = document.getElementById('clock-user');
        var clockUserDate = document.getElementById('clock-user-date');
        var scheduleDays = document.getElementById('schedule-days');
        if (!clockDev || !clockUser) return;

        var devTz = 'Europe/Moscow';

        function pad(n) { return n < 10 ? '0' + n : '' + n; }

        function formatTime(date, tz) {
            var h = parseInt(date.toLocaleString('en-US', { hour: 'numeric', hour12: false, timeZone: tz }));
            var m = parseInt(date.toLocaleString('en-US', { minute: 'numeric', timeZone: tz }));
            var s = parseInt(date.toLocaleString('en-US', { second: 'numeric', timeZone: tz }));
            return pad(h) + ':' + pad(m) + ':' + pad(s);
        }

        function formatDate(date, tz) {
            return date.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', timeZone: tz });
        }

        function highlightDay() {
            var now = new Date();
            var devNow = new Date(now.toLocaleString('en-US', { timeZone: devTz }));
            var devDayIdx = devNow.getDay();
            var spans = scheduleDays.querySelectorAll('span');
            var dayMap = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
            spans.forEach(function (span) {
                var key = span.getAttribute('data-i18n');
                var dayName = key.replace('schedule.', '');
                var idx = dayMap[dayName];
                if (idx === devDayIdx) {
                    span.classList.add('ring-1', 'ring-white/40');
                } else {
                    span.classList.remove('ring-1', 'ring-white/40');
                }
            });
        }

        function update() {
            var now = new Date();
            var userTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            clockDev.textContent = formatTime(now, devTz);
            clockDevDate.textContent = formatDate(now, devTz);
            clockUser.textContent = formatTime(now, userTz);
            clockUserDate.textContent = formatDate(now, userTz);
            highlightDay();
        }

        update();
        setInterval(update, 1000);
    })();
})();