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
      if (barFill) barFill.style.width = (pct * 100).toFixed(2) + '%';
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
    var io = new IntersectionObserver(function (entries) {
      fired = true;
      entries.forEach(function (e) {
        if (e.isIntersecting || e.boundingClientRect.top < 0) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    var armed = [];
    nodes.forEach(function (n) {
      if (n.getBoundingClientRect().top < window.innerHeight) return; // already visible: leave alone
      n.classList.add('armed');
      armed.push(n);
      io.observe(n);
    });

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
        count.textContent = shown + (shown === 1 ? ' piece' : ' pieces') +
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
        if (fill) fill.style.width = b.dataset.w + '%';
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
          '. This demo form does not send yet — wire it to your inbox or CRM before launch. In the meantime, email hello@leadstrategy.ca.';
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

  /* ----------------------------------------------- store: cart counter */
  function store() {
    var buttons = $$('.prod .add');
    var counter = $('#cart-count');
    if (!buttons.length) return;
    var n = 0;
    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        n++;
        if (counter) counter.textContent = String(n);
        var was = b.textContent;
        b.textContent = 'Added';
        b.disabled = true;
        setTimeout(function () { b.textContent = was; b.disabled = false; }, 1400);
      });
    });
  }

  /* ----------------------------------------------- boot */
  function boot() {
    drawer(); chrome(); reveals(); services(); accordion();
    filters(); chart(); subscribe(); contact(); dots(); store();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
