/* Shared site behaviors: scroll reveals + stat count-ups.
   All motion is skipped when the user prefers reduced motion. */
(function () {
    'use strict';

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.addEventListener('DOMContentLoaded', function () {

        /* ── Header hamburger nav (shared by every page) ─────────────── */
        var hamburger = document.getElementById('hamburger-btn');
        var dropdown = document.getElementById('nav-dropdown');
        var header = document.querySelector('.site-header');
        if (hamburger && dropdown && !hamburger.dataset.wired) {
            hamburger.dataset.wired = '1';
            function setMenu(open) {
                hamburger.setAttribute('aria-expanded', String(open));
                dropdown.setAttribute('aria-hidden', String(!open));
                header.classList.toggle('is-open', open);
            }
            hamburger.addEventListener('click', function () {
                setMenu(!header.classList.contains('is-open'));
            });
            dropdown.querySelectorAll('.header-link').forEach(function (link) {
                link.addEventListener('click', function () { setMenu(false); });
            });
            document.addEventListener('click', function (e) {
                if (header.classList.contains('is-open') && !header.contains(e.target)) setMenu(false);
            });
        }

        /* ── Scroll reveals ──────────────────────────────────────────── */
        var revealSelectors = [
            '.home-section-header', '.how-step', '.vetting-text', '.vetting-stat',
            '.fleet-preview-card', '.final-cta-section .container', '.el-callout-inner',
            '.trust-strip-inner', '.fleet-catalog-grid > *', '.about-vetting-card',
            '.contact-form-panel', '.charter-request-panel'
        ];
        var nodes = document.querySelectorAll(revealSelectors.join(','));

        if (!reduceMotion && 'IntersectionObserver' in window && nodes.length) {
            var io = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        io.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

            nodes.forEach(function (el, i) {
                el.classList.add('reveal');
                el.style.transitionDelay = Math.min((i % 4) * 70, 280) + 'ms';
                io.observe(el);
            });
        }

        /* ── Stat count-ups ──────────────────────────────────────────── */
        var stats = document.querySelectorAll('.vetting-stat-number');
        if (!stats.length) return;

        function animateStat(el) {
            var textNode = el.firstChild;
            if (!textNode || textNode.nodeType !== 3) return;
            var raw = textNode.nodeValue.trim();
            var m = raw.match(/^(\d+)(.*)$/);
            if (!m) return;
            var target = parseInt(m[1], 10);
            var tail = m[2] || '';
            var start = null;
            var duration = 1200;
            function frame(ts) {
                if (!start) start = ts;
                var t = Math.min((ts - start) / duration, 1);
                var eased = 1 - Math.pow(1 - t, 3);
                textNode.nodeValue = Math.round(target * eased) + tail;
                if (t < 1) requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);
        }

        if (!reduceMotion && 'IntersectionObserver' in window) {
            var statIo = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        animateStat(entry.target);
                        statIo.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            stats.forEach(function (el) { statIo.observe(el); });
        }
    });
})();
