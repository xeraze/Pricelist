(function () {
    const REQUIRED_SCROLL_THRESHOLD = 0.96;
    const WAIT_SECONDS = 10;
    const CIRCUMFERENCE = 62.8;

    window.XDEVS = window.XDEVS || {};

    window.XDEVS.setupScrollGate = function (opts) {
        const scrollEl = document.getElementById(opts.scrollId);
        const btn = document.getElementById(opts.btnId);
        const ring = document.getElementById(opts.ringId);
        const label = document.getElementById(opts.labelId);
        const hint = document.getElementById(opts.hintId);
        const progressFill = opts.progressId ? document.getElementById(opts.progressId) : null;
        const doneLabel = opts.doneLabel;
        const onReady = opts.onReady;

        let reachedBottom = false;
        let timerStarted = false;
        let unlocked = false;
        let secondsLeft = WAIT_SECONDS;
        let tick = null;

        if (opts._teardown) opts._teardown();

        btn.disabled = true;
        ring.classList.add('hidden');
        ring.querySelector('.fg').style.strokeDashoffset = String(CIRCUMFERENCE);
        label.textContent = doneLabel;
        hint.innerHTML = '<i class="fas fa-arrow-down animate-bounce"></i> Scroll to the end of the document';

        function getRatio() {
            const scrollable = scrollEl.scrollHeight - scrollEl.clientHeight;
            if (scrollable <= 8) return -1;
            return scrollEl.scrollTop / scrollable;
        }

        function onScroll() {
            const ratio = getRatio();
            if (ratio < 0) {
                if (progressFill) progressFill.style.width = '0%';
                return;
            }
            if (progressFill) progressFill.style.width = Math.min(ratio, 1) * 100 + '%';

            if (!reachedBottom && ratio >= REQUIRED_SCROLL_THRESHOLD) {
                reachedBottom = true;
                hint.innerHTML = '<i class="fas fa-hourglass-half"></i> Please wait, verifying document...';
                startWaitTimer();
            }
        }

        function startWaitTimer() {
            if (timerStarted || unlocked) return;
            timerStarted = true;
            ring.classList.remove('hidden');
            label.textContent = WAIT_SECONDS + 's';

            tick = setInterval(() => {
                secondsLeft -= 1;
                ring.querySelector('.fg').style.strokeDashoffset =
                    CIRCUMFERENCE * (secondsLeft / WAIT_SECONDS);
                label.textContent = secondsLeft > 0 ? secondsLeft + 's' : doneLabel;

                if (secondsLeft <= 0) {
                    clearInterval(tick);
                    tick = null;
                    unlocked = true;
                    btn.disabled = false;
                    ring.classList.add('hidden');
                    hint.innerHTML = '<i class="fas fa-check text-green-400"></i> Document read';
                    if (onReady) onReady();
                }
            }, 1000);
        }

        function tryFit() {
            if (timerStarted || unlocked || reachedBottom) return;
            const ratio = getRatio();
            if (ratio < 0 && scrollEl.scrollHeight > 40) {
                reachedBottom = true;
                hint.innerHTML = '<i class="fas fa-hourglass-half"></i> Please wait, verifying document...';
                startWaitTimer();
            } else {
                onScroll();
            }
        }

        scrollEl.addEventListener('scroll', onScroll);
        requestAnimationFrame(() => requestAnimationFrame(tryFit));
        setTimeout(tryFit, 400);

        opts._teardown = function () {
            scrollEl.removeEventListener('scroll', onScroll);
            if (tick) clearInterval(tick);
        };

        return opts._teardown;
    };

    window.XDEVS.initClauseReveal = function (container) {
        const clauses = container.querySelectorAll('.clause');
        const obs = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add('revealed');
            });
        }, { root: container, threshold: 0.12 });
        clauses.forEach((c) => obs.observe(c));
    };
})();
