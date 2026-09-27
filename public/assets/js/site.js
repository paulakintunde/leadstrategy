/* ==========================================================================
   LEAD STRATEGY — site.js
   Every module is opt-in: it runs only if its markup exists on the page.
   No dependencies, no build step.
   ========================================================================== */
(function () {
  'use strict';

  var reduce = false;
  try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ----------------------------------------------- mobile drawer */
  function drawer() {
    var btn = $('.burger'), panel = $('#drawer');
    if (!btn || !panel) return;
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      panel.classList.toggle('on', !open);
    });
    $$('#drawer a').forEach(function (a) {
      a.addEventListener('click', function () {
        btn.setAttribute('aria-expanded', 'false');
        panel.classList.remove('on');
      });
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('on')) {
        btn.setAttribute('aria-expanded', 'false');
        panel.classList.remove('on');
        btn.focus();
      }
    });
  }

  /* ----------------------------------------------- scroll chrome */
  function chrome() {
    var barFill = $('.progress i'), top = $('.totop');
    if (!barFill && !top) return;
    var queued = false;
    function run() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var pct = h > 0 ? Math.min(1, window.scrollY / h) : 0;
      if (barFill) barFill.style.transform = 'scaleX(' + pct.toFixed(4) + ')';
      if (top) top.classList.toggle('on', pct > 0.08);
    }
    window.addEventListener('scroll', function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; run(); });
    }, { passive: true });
    run();
  }

  /* ----------------------------------------------- reveal on scroll */
  function reveals() {
    var nodes = $$('[data-reveal]');
    if (!nodes.length || reduce || !('IntersectionObserver' in window)) return;
    var fired = false;
    var armed = [];

    function show(node) {
      node.classList.add('in');
      io.unobserve(node);
    }

    var io = new IntersectionObserver(function (entries) {
      fired = true;
      entries.forEach(function (e) {
        if (e.isIntersecting || e.boundingClientRect.top < 0) {
          show(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    nodes.forEach(function (n) {
      if (n.getBoundingClientRect().top < window.innerHeight) return; // already visible: leave alone
      n.classList.add('armed');
      armed.push(n);
      io.observe(n);
    });

    var sweepQueued = false;
    function sweep() {
      sweepQueued = false;
      armed.forEach(function (node) {
        if (node.classList.contains('armed') && !node.classList.contains('in') && node.getBoundingClientRect().top < window.innerHeight + 40) show(node);
      });
    }
    window.addEventListener('scroll', function () {
      if (sweepQueued) return;
      sweepQueued = true;
      requestAnimationFrame(sweep);
    }, { passive: true });

    // Fail-safe: an animation must never be able to hide content permanently.
    // If the observer has not reported anything at all (background tab, blocked
    // compositing, obscure engine), drop the effect and show everything.
    if (armed.length) {
      setTimeout(function () {
        if (fired) return;
        io.disconnect();
        armed.forEach(function (n) { n.classList.remove('armed'); });
      }, 2500);
    }
  }

  /* ----------------------------------------------- motion choreography */
  function motionTargets() {
    $$('.sec-head, .subscribe, .stats, .notice, .bar-detail').forEach(function (node) {
      if (!node.hasAttribute('data-reveal')) node.setAttribute('data-reveal', '');
    });

    $$('.pillars, .split, .g2, .g3, .arts, .cases, .shop, .svc-grid, .acc, .stack, .foot-cols').forEach(function (group) {
      Array.prototype.slice.call(group.children).forEach(function (node, index) {
        if (!node.hasAttribute('data-reveal')) node.setAttribute('data-reveal', '');
        node.style.setProperty('--reveal-delay', Math.min(index, 4) * 55 + 'ms');
      });
    });
  }

  function entrances() {
    if (!Element.prototype.animate) return;
    var nodes = $$('.hero > div:first-child > h1, .hero .sub, .hero .acts, .hero .chan, .hero .scene, .page-head > .crumb, .page-head > h1, .page-head > .lede, .page-head > .metaline');
    nodes.forEach(function (node, index) {
      var frames = reduce
        ? [{ opacity: 0.82 }, { opacity: 1 }]
        : [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }];
      node.animate(frames, {
        duration: reduce ? 200 : 560,
        delay: reduce ? 0 : Math.min(index, 4) * 60,
        easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
        fill: 'backwards'
      });
    });
  }

  /* ----------------------------------------------- services: tabs + flip cards */
  function services() {
    var tabs = $$('.tab[data-group]');
    var cards = $$('.flip[data-group]');
    var line = $('#group-line');
    if (!cards.length) return;

    var COPY = {
      Build:  'Software and sites, built to be handed over. Every engagement ends with you holding the code and the accounts.',
      Market: 'Demand work run from accounts you own, reported in revenue rather than impressions.',
      Create: 'The material everything else needs: film, audio, brand assets and the words on the page.',
      Sell:   'Running the commerce side day to day so you are not living in an admin panel.'
    };

    function select(group) {
      tabs.forEach(function (t) {
        t.setAttribute('aria-selected', String(t.dataset.group === group));
      });
      cards.forEach(function (c) {
        c.classList.toggle('is-hidden', c.dataset.group !== group);
        c.classList.remove('on');
        var b = c.querySelector('button');
        if (b) b.setAttribute('aria-pressed', 'false');
      });
      if (line && COPY[group]) line.textContent = COPY[group];
      try { history.replaceState(null, '', '#' + group.toLowerCase()); } catch (e) {}
    }

    tabs.forEach(function (t) {
      t.addEventListener('click', function () { select(t.dataset.group); });
    });

    cards.forEach(function (c) {
      var b = c.querySelector('button');
      if (!b) return;
      b.addEventListener('click', function () {
        var on = c.classList.toggle('on');
        b.setAttribute('aria-pressed', String(on));
        var close = c.querySelector('.back .c');
        if (close) close.textContent = on ? 'Click to close' : 'Detail';
      });
    });

    var NAMES = ['build', 'market', 'create', 'sell'];
    function fromHash(fallback) {
      var h = (location.hash || '').replace('#', '').toLowerCase();
      return NAMES.indexOf(h) >= 0 ? h.charAt(0).toUpperCase() + h.slice(1) : fallback;
    }

    select(fromHash('Build'));

    // A #build link clicked while already on this page only changes the hash —
    // no reload fires — so the view has to follow the hash too.
    window.addEventListener('hashchange', function () {
      var next = fromHash(null);
      if (next) select(next);
    });
  }

  /* ----------------------------------------------- sectors accordion */
  function accordion() {
    var items = $$('.acc .item');
    if (!items.length) return;
    items.forEach(function (item) {
      var btn = item.querySelector('button');
      var panel = item.querySelector('.panel');
      if (!btn || !panel) return;
      btn.addEventListener('click', function () {
        var open = item.classList.contains('open');
        items.forEach(function (o) {
          o.classList.remove('open');
          var b = o.querySelector('button');
          var s = o.querySelector('.sign');
          if (b) b.setAttribute('aria-expanded', 'false');
          if (s) s.textContent = '+';
        });
        if (!open) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          var sign = item.querySelector('.sign');
          if (sign) sign.textContent = '−';
        }
      });
    });
  }

  /* ----------------------------------------------- insights filter */
  function filters() {
    var chips = $$('.chip[data-filter]');
    var cards = $$('[data-sector]');
    var count = $('#filter-count');
    var empty = $('#filter-empty');
    if (!chips.length || !cards.length) return;

    function apply(value) {
      var shown = 0;
      chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c.dataset.filter === value)); });
      cards.forEach(function (c) {
        var hit = value === 'all' || c.dataset.sector === value;
        c.classList.toggle('is-hidden', !hit);
        if (hit) shown++;
      });
      if (count) {
        count.textContent = shown + (shown === 1 ? ' problem' : ' problems') +
          (value === 'all' ? ' across every sector' : ' in ' + value);
      }
      if (empty) empty.classList.toggle('is-hidden', shown !== 0);
    }

    chips.forEach(function (c) {
      c.addEventListener('click', function () { apply(c.dataset.filter); });
    });
    apply('all');
  }

  /* ----------------------------------------------- audit bar chart */
  function chart() {
    var bars = $$('.abar[data-w]');
    var title = $('#bar-title');
    var body = $('#bar-body');
    if (!bars.length) return;

    function paint() {
      bars.forEach(function (b) {
        var fill = b.querySelector('.fill');
        if (fill) fill.style.transform = 'scaleX(' + (Number(b.dataset.w) / 100).toFixed(2) + ')';
      });
    }

    bars.forEach(function (b) {
      b.addEventListener('click', function () {
        bars.forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
        b.setAttribute('aria-pressed', 'true');
        if (title) title.textContent = b.dataset.title || '';
        if (body) body.textContent = b.dataset.body || '';
      });
    });

    if (reduce || !('IntersectionObserver' in window)) { paint(); return; }
    var host = $('#audit');
    if (!host) { paint(); return; }
    var painted = false;
    function once() { if (painted) return; painted = true; paint(); }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { once(); io.disconnect(); } });
    }, { threshold: 0.25 });
    io.observe(host);
    // Fail-safe: bars must never sit at zero because the observer never ran.
    setTimeout(once, 2500);
  }

  /* ----------------------------------------------- featured ranking loop */
  function rankingAnimation() {
    var host = $('.serp[data-rank-cycle]');
    if (!host) return;
    var list = $('.serp-list', host);
    var featured = $('.serp-list li.me', host);
    var steps = $$('.serp-steps li', host);
    if (!list || !featured || !steps.length || reduce) return;

    var current = Array.prototype.indexOf.call(list.children, featured);
    var timer = 0;
    var paused = false;
    var easeInOut = 'cubic-bezier(0.77, 0, 0.175, 1)';

    function showStep(position) {
      var rank = String(position + 1);
      steps.forEach(function (step) {
        var dot = $('.dot', step);
        step.classList.toggle('on', !!dot && dot.textContent.trim() === rank);
      });
      host.setAttribute('data-current-rank', rank);
    }

    function numberRows() {
      $$('.serp-list li', host).forEach(function (row, index) {
        var rank = $('.r', row);
        if (rank) rank.textContent = String(index + 1);
      });
    }

    function moveTo(next, animated) {
      var rows = $$('.serp-list li', host);
      var first = rows.map(function (row) { return row.getBoundingClientRect(); });
      featured.remove();
      var remaining = $$('.serp-list li', host);
      if (next >= remaining.length) list.appendChild(featured);
      else list.insertBefore(featured, remaining[next]);
      current = next;
      numberRows();
      showStep(current);

      if (animated) {
        rows.forEach(function (row, index) {
          var last = row.getBoundingClientRect();
          var delta = first[index].top - last.top;
          if (!delta) return;
          row.animate(
            [{ transform: 'translateY(' + delta + 'px)' }, { transform: 'translateY(0)' }],
            { duration: 620, easing: easeInOut }
          );
        });
        var arrow = $('.up', featured);
        if (arrow) {
          arrow.animate(
            [{ opacity: 0, transform: 'translateY(7px)' }, { opacity: 1, transform: 'translateY(0)' }],
            { duration: 420, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' }
          );
        }
      }
    }

    function schedule(delay) {
      window.clearTimeout(timer);
      timer = window.setTimeout(tick, delay);
    }

    function reset() {
      var fade = list.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 180, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fill: 'forwards' }
      );
      fade.finished.then(function () {
        moveTo(list.children.length - 1, false);
        list.animate(
          [{ opacity: 0 }, { opacity: 1 }],
          { duration: 220, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fill: 'forwards' }
        );
        schedule(1250);
      }).catch(function () { schedule(1250); });
    }

    function tick() {
      if (paused || document.hidden) { schedule(400); return; }
      if (current > 0) {
        moveTo(current - 1, true);
        schedule(current === 0 ? 1800 : 1100);
      } else reset();
    }

    host.addEventListener('mouseenter', function () { paused = true; window.clearTimeout(timer); });
    host.addEventListener('mouseleave', function () { paused = false; schedule(500); });
    host.addEventListener('focusin', function () { paused = true; window.clearTimeout(timer); });
    host.addEventListener('focusout', function () { paused = false; schedule(500); });
    document.addEventListener('visibilitychange', function () { if (!document.hidden && !paused) schedule(500); });

    showStep(current);
    schedule(900);
  }

  /* ----------------------------------------------- newsletter */
  var EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

  function subscribe() {
    var form = $('.sub-form');
    if (!form) return;
    var input = form.querySelector('input');
    var msg = form.querySelector('.msg');
    var btn = form.querySelector('button');
    if (!input || !btn) return;

    function check(showOk) {
      var ok = EMAIL.test(input.value.trim());
      form.classList.toggle('bad', !ok && input.value.trim().length > 0);
      if (msg) {
        if (!ok && input.value.trim().length > 0) msg.textContent = 'That is not a working address. Try name@company.ca';
        else if (ok && showOk) msg.textContent = 'Thanks. You are on the list for the first Tuesday send.';
        else msg.textContent = 'Used for this email only.';
      }
      return ok;
    }

    input.addEventListener('blur', function () { check(false); });
    input.addEventListener('input', function () { if (form.classList.contains('bad')) check(false); });
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (check(true)) { input.value = ''; }
      else { input.focus(); if (msg && !input.value.trim()) msg.textContent = 'Enter an email address first.'; }
    });
  }

  /* ----------------------------------------------- contact form */
  function contact() {
    var form = $('#contact-form');
    if (!form) return;
    var sent = $('#contact-sent');

    function fieldOf(el) { return el.closest('.field'); }
    function setMsg(el, text, bad) {
      var f = fieldOf(el);
      if (!f) return;
      f.classList.toggle('bad', !!bad);
      var m = f.querySelector('.msg');
      if (m) m.textContent = text;
    }

    var name = $('#c-name'), email = $('#c-email'), need = $('#c-need'), note = $('#c-note');

    function validName() {
      if (!name) return true;
      var ok = name.value.trim().length >= 2;
      setMsg(name, ok ? 'So we know who we are replying to.' : 'Please tell us your name.', !ok);
      return ok;
    }
    function validEmail() {
      if (!email) return true;
      var ok = EMAIL.test(email.value.trim());
      setMsg(email, ok ? 'We reply from a real address, not a no-reply.' : 'That is not a working address. Try name@company.ca', !ok);
      return ok;
    }
    function validNote() {
      if (!note) return true;
      var ok = note.value.trim().length >= 20;
      setMsg(note, ok ? 'The more specific, the faster we can scope it.' : 'A sentence or two is enough to start.', !ok);
      return ok;
    }

    function validNeed() {
      if (!need) return true;
      var ok = need.value.trim().length > 0;
      setMsg(need, ok ? 'Rough is fine. We will tell you if it is really a different problem.' : 'Choose the closest fit so we can route your enquiry.', !ok);
      return ok;
    }

    if (name) name.addEventListener('blur', validName);
    if (email) email.addEventListener('blur', validEmail);
    if (need) need.addEventListener('change', validNeed);
    if (note) note.addEventListener('blur', validNote);

    form.addEventListener('submit', function (e) {
      var ok = [validName(), validEmail(), validNeed(), validNote()].every(Boolean);
      if (!ok) {
        e.preventDefault();
        var bad = form.querySelector('.field.bad input, .field.bad textarea');
        if (bad) bad.focus();
        return;
      }
      if (form.dataset.live === 'true') return;
      e.preventDefault();
      if (sent) {
        sent.classList.add('on');
        sent.textContent = 'Thanks' + (name && name.value.trim() ? ', ' + name.value.trim().split(' ')[0] : '') +
          '. Please send your message to hello@leadstrategy.ca.';
        sent.setAttribute('tabindex', '-1');
        sent.focus();
      }
    });
  }

  /* ----------------------------------------------- footer dots */
  function dots() {
    var host = $('.dots');
    if (!host || host.children.length) return;
    var n = 46, frag = document.createDocumentFragment();
    for (var i = 0; i < n; i++) {
      var d = document.createElement('i');
      var size = 2 + Math.round(Math.random() * 2);
      d.style.left = ((i / (n - 1)) * 100).toFixed(2) + '%';
      d.style.width = size + 'px';
      d.style.height = size + 'px';
      d.style.opacity = (0.16 + Math.random() * 0.34).toFixed(2);
      d.style.animationDuration = (2.4 + Math.random() * 2.1).toFixed(2) + 's';
      d.style.animationDelay = (i * 0.07 + Math.random() * 0.5).toFixed(2) + 's';
      frag.appendChild(d);
    }
    host.appendChild(frag);
  }

  /* ----------------------------------------------- boot */
  function boot() {
    drawer(); chrome(); motionTargets(); entrances(); reveals(); services(); accordion();
    filters(); chart(); rankingAnimation(); subscribe(); contact(); dots();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
