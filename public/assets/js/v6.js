/* Lead Strategy homepage (version 6). Plain JavaScript, no dependencies. */
(function () {
	'use strict';
	var root = document.querySelector('.r5');
	if (!root) return;

	var EMAIL = 'hello@leadstrategy.ca';
	var ICON = {
		plus: 'M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z',
		check: 'M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z',
		x: 'M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z'
	};
	var ORDER = ['Build', 'Market', 'Create', 'Sell', 'Apps and software'];

	function $(sel, ctx) { return (ctx || root).querySelector(sel); }
	function $$(sel, ctx) { return Array.prototype.slice.call((ctx || root).querySelectorAll(sel)); }
	function reduced() { try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { return false; } }
	function joinAnd(a) { return a.length < 2 ? (a[0] || '') : a.slice(0, -1).join(', ') + ' and ' + a[a.length - 1]; }
	function restart(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
	function jumpTo(id, then) {
		var el = document.getElementById(id);
		if (!el) return;
		el.scrollIntoView({ behavior: reduced() ? 'auto' : 'smooth', block: 'start' });
		if (then) setTimeout(then, reduced() ? 0 : 600);
	}

	var state = { aud: null, sec: 0, secChosen: false, hov: null, more: false, plan: {} };

	/* ---------- reveal on scroll, mobile bar, footer wordmark ---------- */
	if ('IntersectionObserver' in window && !reduced()) {
		root.setAttribute('data-js', '');
		var io = new IntersectionObserver(function (es) {
			es.forEach(function (e) {
				if (e.isIntersecting && (e.intersectionRatio >= 0.15 || e.target.classList.contains('word'))) { e.target.setAttribute('data-in', ''); io.unobserve(e.target); }
			});
		}, { threshold: [0, 0.15], rootMargin: '0px 0px -10% 0px' });
		// The footer wordmark sits at the very bottom of the page, below the -10% trigger line,
		// so it gets its own observer without that margin.
		var ioWord = new IntersectionObserver(function (es) {
			es.forEach(function (e) { if (e.isIntersecting) { e.target.setAttribute('data-in', ''); ioWord.unobserve(e.target); } });
		}, { threshold: 0 });
		$$('[data-rv],[data-kids]').forEach(function (el) { (el.classList.contains('word') ? ioWord : io).observe(el); });
	}
	var hero = $('.hero');
	if (hero && 'IntersectionObserver' in window) {
		new IntersectionObserver(function (es) {
			es.forEach(function (e) { if (e.isIntersecting) root.removeAttribute('data-past'); else root.setAttribute('data-past', ''); });
		}, { threshold: 0 }).observe(hero);
	} else root.setAttribute('data-past', '');

	var word = $('.word'), wordIn = $('.word .wi'), ft = $('.ft'), lastW = 0;
	function fit() {
		if (!word || !wordIn || !ft) return;
		var fw = ft.clientWidth; if (!fw || fw === lastW) return; lastW = fw;
		word.style.fontSize = '';
		var fs = parseFloat(getComputedStyle(word).fontSize), tw = wordIn.getBoundingClientRect().width;
		if (fs && tw) word.style.fontSize = (fs * fw * 0.97 / tw).toFixed(2) + 'px';
	}
	fit();
	if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { lastW = 0; fit(); });
	if ('ResizeObserver' in window && ft) new ResizeObserver(fit).observe(ft);

	/* ---------- mobile menu ---------- */
	var mbtn = $('[data-menu]'), sheet = $('#r5sheet');
	function setMenu(open) {
		if (!mbtn || !sheet) return;
		sheet.hidden = !open;
		mbtn.setAttribute('aria-expanded', open ? 'true' : 'false');
		var p = mbtn.querySelector('path');
		p.setAttribute('d', open ? p.getAttribute('data-x') : p.getAttribute('data-list'));
		mbtn.querySelector('span').textContent = open ? 'Close' : 'Menu';
	}
	if (mbtn) mbtn.addEventListener('click', function () { setMenu(sheet.hidden); });
	$$('[data-close]').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
	document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && sheet && !sheet.hidden) { setMenu(false); mbtn.focus(); } });

	/* ---------- pointer details (mouse only) ---------- */
	function fine(e) { return e.pointerType === 'mouse' && !reduced(); }
	$$('[data-mag]').forEach(function (el) {
		el.addEventListener('pointermove', function (e) {
			if (!fine(e)) return;
			var r = el.getBoundingClientRect();
			var dx = Math.max(-6, Math.min(6, (e.clientX - r.left - r.width / 2) * 0.12));
			var dy = Math.max(-6, Math.min(6, (e.clientY - r.top - r.height / 2) * 0.12));
			el.style.setProperty('--mx', dx.toFixed(1) + 'px'); el.style.setProperty('--my', dy.toFixed(1) + 'px');
		});
		el.addEventListener('pointerleave', function () { el.style.setProperty('--mx', '0px'); el.style.setProperty('--my', '0px'); });
	});

	/* ---------- who are you ---------- */
	var doors = $$('.door');
	doors.forEach(function (d) {
		d.addEventListener('pointermove', function (e) {
			if (!fine(e)) return;
			var r = d.getBoundingClientRect();
			d.style.setProperty('--px', (e.clientX - r.left).toFixed(0) + 'px'); d.style.setProperty('--py', (e.clientY - r.top).toFixed(0) + 'px');
		});
		d.addEventListener('click', function () { setAud(d.getAttribute('data-aud'), true); });
	});
	// Arrow keys move between the three choices, as in any radio group.
	$('.doors') && $('.doors').addEventListener('keydown', function (e) {
		var i = doors.indexOf(document.activeElement); if (i < 0) return;
		var n = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
		if (!n) return; e.preventDefault();
		var next = doors[(i + n + doors.length) % doors.length]; next.focus(); next.click();
	});
	function audDoor(k) { return doors.filter(function (d) { return d.getAttribute('data-aud') === k; })[0]; }
	function setAud(k, fromUser) {
		var d = audDoor(k); if (!d) return;
		state.aud = k;
		doors.forEach(function (x) { var on = x === d; x.classList.toggle('on', on); x.setAttribute('aria-checked', on ? 'true' : 'false'); });
		$$('[data-path]').forEach(function (p) { p.hidden = p.getAttribute('data-path') !== k; });
		var msg = $('#r5-msg'); if (msg) msg.placeholder = d.getAttribute('data-hint');
		if (fromUser) { try { var u = new URL(location.href); u.searchParams.set('for', d.getAttribute('data-slug')); history.replaceState(null, '', u.toString()); } catch (e) {} }
		updatePreset();
	}

	/* ---------- services and software: "Include this" ---------- */
	function picked() { return ORDER.filter(function (n) { return state.plan[n]; }); }
	function togglePlan(name) { state.plan[name] = !state.plan[name]; renderPlan(); }
	$$('[data-add]').forEach(function (b) { b.addEventListener('click', function () { togglePlan(b.getAttribute('data-add')); }); });
	function renderPlan() {
		$$('[data-add]').forEach(function (b) {
			var on = !!state.plan[b.getAttribute('data-add')];
			b.classList.toggle('on', on);
			b.setAttribute('aria-pressed', on ? 'true' : 'false');
			b.querySelector('path').setAttribute('d', on ? ICON.check : ICON.plus);
			restart(b.querySelector('svg'), 'pi');
			var label = b.classList.contains('add2') ? b.getAttribute(on ? 'data-on' : 'data-off') : (on ? 'Included' : 'Include this');
			b.querySelector('span').textContent = label;
		});
		var list = picked(), chips = $('[data-chips]'), empty = $('[data-plan-empty]');
		if (chips) {
			chips.innerHTML = '';
			list.forEach(function (n) {
				var c = document.createElement('span'); c.className = 'pc'; c.textContent = n;
				var x = document.createElement('button'); x.type = 'button'; x.setAttribute('aria-label', 'Remove ' + n);
				x.innerHTML = '<svg class="pi" viewBox="0 0 256 256" aria-hidden="true"><path d="' + ICON.x + '"/></svg>';
				x.addEventListener('click', function () { togglePlan(n); });
				c.appendChild(x); chips.appendChild(c);
			});
			chips.hidden = !list.length; empty.hidden = !!list.length;
		}
		var svc = form && form.querySelector('input[name="service"]');
		if (svc) svc.value = list.length ? list.join(', ') : 'Not sure yet';
	}

	/* ---------- sectors ---------- */
	var srows = $$('[data-sec]'), simgs = $$('.mwrap .m img'), dur = $('[data-dur]'), sname = $('[data-sname]'), snote = $('[data-snote]'), more = $('[data-more]'), hovT;
	if (!more) state.more = true; // no "more" button (sectors page): show all ten
	function renderSec() {
		if (!srows.length) return;
		var shown = state.hov != null ? state.hov : state.sec, row = srows[shown];
		srows.forEach(function (r, i) {
			r.classList.toggle('on', i === shown);
			r.setAttribute('aria-checked', state.secChosen && i === state.sec ? 'true' : 'false');
			r.hidden = !state.more && i >= 6;
		});
		simgs.forEach(function (im, i) { im.classList.toggle('on', i === shown); });
		if (dur && dur.textContent !== row.getAttribute('data-dur')) {
			var nd = dur.cloneNode(false); nd.textContent = row.getAttribute('data-dur'); dur.parentNode.replaceChild(nd, dur); dur = nd;
		}
		if (sname) sname.textContent = row.getAttribute('data-name') + '.';
		if (snote) snote.textContent = row.getAttribute('data-note');
		if (more) { more.textContent = state.more ? 'Show fewer sectors' : 'More sectors (4)'; more.setAttribute('aria-expanded', state.more ? 'true' : 'false'); }
	}
	srows.forEach(function (r, i) {
		r.addEventListener('click', function () { clearTimeout(hovT); state.sec = i; state.secChosen = true; state.hov = null; renderSec(); updatePreset(); });
		r.addEventListener('pointerenter', function (e) { if (e.pointerType !== 'mouse') return; clearTimeout(hovT); hovT = setTimeout(function () { state.hov = i; renderSec(); }, 140); });
		r.addEventListener('pointerleave', function () { clearTimeout(hovT); if (state.hov != null) { state.hov = null; renderSec(); } });
	});
	if (more) more.addEventListener('click', function () {
		state.more = !state.more;
		if (!state.more && state.sec > 5) { state.sec = 0; state.secChosen = false; }
		state.hov = null; renderSec(); updatePreset();
		if (state.more && srows[6]) srows[6].focus();
	});

	/* ---------- contact form ---------- */
	var form = $('#v6form');
	function audLabel() { var d = state.aud && audDoor(state.aud); return d ? d.getAttribute('data-label') : ''; }
	function secName() { return state.secChosen ? srows[state.sec].getAttribute('data-name').toLowerCase() : ''; }
	function updatePreset() {
		if (!form || !$('[data-preset-text]', form)) return;
		var chosen = !!state.aud;
		$('[data-preset-text]', form).textContent = chosen ? 'Tailored for' : 'Pick who you are above so we can tailor the reply.';
		$('[data-preset-val]', form).textContent = chosen ? audLabel() + (state.secChosen ? ', ' + secName() : '') : '';
		$('[data-gowho]', form).textContent = chosen ? 'Change' : 'Choose';
	}
	if (form) {
		var live = form.getAttribute('data-live') === 'true';
		var body = $('.fbody', form), sent = $('.sent', form), fail = $('.fail', form), prog = $('.prog', form);
		var sendBtn = $('button[type="submit"]', form), sendLabel = $('[data-sendlabel]', form);
		var F = { name: $('#r5-name'), email: $('#r5-email'), site: $('#r5-site'), msg: $('#r5-msg') };

		var goWho = $('[data-gowho]', form);
		if (goWho) goWho.addEventListener('click', function () { jumpTo('r5who', function () { var d = state.aud ? audDoor(state.aud) : doors[0]; if (d) d.focus({ preventScroll: true }); }); });
		var sc = $('[data-sitecheck]');
		if (sc) sc.addEventListener('click', function (e) {
			e.preventDefault();
			if (!F.msg.value.trim()) F.msg.value = 'Please look at my website and tell me what is costing us enquiries.';
			jumpTo('r5contact', function () { F.site.focus({ preventScroll: true }); });
		});

		function setErr(key, text) {
			var el = F[key], fld = el.closest('.fld'), err = fld.querySelector('.err');
			err.textContent = text || '';
			el.setAttribute('aria-invalid', text ? 'true' : 'false');
			if (text) restart(fld, 'bad'); else fld.classList.remove('bad');
		}
		Object.keys(F).forEach(function (k) { F[k].addEventListener('input', function () { if (F[k].getAttribute('aria-invalid') === 'true') setErr(k, ''); }); });

		function setBusy(on) {
			sendBtn.setAttribute('aria-busy', on ? 'true' : 'false');
			sendLabel.textContent = on ? 'Sending…' : 'Send';
			prog.hidden = !on;
		}
		function showSent(line) {
			$('[data-sentline]', form).textContent = line;
			body.hidden = true; sent.hidden = false;
			sent.querySelector('button').focus({ preventScroll: true });
		}
		function context() {
			var bits = [];
			if (state.aud) bits.push('For: ' + audLabel() + (state.secChosen ? ', ' + secName() : ''));
			if ($('[data-chips]', form)) { var list = picked(); bits.push('Interested in: ' + (list.length ? list.join(', ') : 'Not sure yet')); }
			var svcSel = form.querySelector('select[name="service"]');
			if (svcSel) bits.push('Need first: ' + svcSel.value);
			return bits.join('\n');
		}

		form.addEventListener('submit', function (e) {
			e.preventDefault();
			if (sendBtn.getAttribute('aria-busy') === 'true') return;
			fail.hidden = true;
			var name = F.name.value.trim(), email = F.email.value.trim(), msg = F.msg.value.trim();
			var site = F.site.value.trim().replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
			var errs = {};
			if (name.length < 2) errs.name = 'Add your name so we know who to reply to.';
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = email ? 'That email looks incomplete. Check for a typo.' : 'Add an email so we can reply.';
			if (site && !/^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(site)) errs.site = 'That does not look like a web address. Try something like yourbusiness.ca.';
			if (msg.length < 20) errs.msg = msg ? 'Add a little more detail, at least 20 characters.' : 'Tell us in a sentence or two what you need.';
			Object.keys(F).forEach(function (k) { setErr(k, errs[k]); });
			var first = ['name', 'email', 'site', 'msg'].filter(function (k) { return errs[k]; })[0];
			if (first) { F[first].focus(); return; }

			var list = picked();
			var line = 'We will reply to ' + email + ' about ' + (list.length ? joinAnd(list) : 'what you need') +
				(state.aud ? ' for ' + audDoor(state.aud).getAttribute('data-yours') : '') + (state.secChosen ? ' (' + secName() + ')' : '') +
				', with a few questions and some times for a call.';

			if (!live) {
				// No delivery endpoint configured yet: hand the message to the visitor's email app.
				var text = msg + '\n\n' + context() + (site ? '\nWebsite: ' + site : '') + '\n\n' + name + '\n' + email;
				location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Website enquiry from ' + name) + '&body=' + encodeURIComponent(text);
				showSent('Your email app should open with this message ready to send to ' + EMAIL + '. If it does not, write to us there directly.');
				return;
			}

			var data = new FormData(form);
			data.set('organization', site);
			data.set('message', $('[data-chips]', form) ? msg + '\n\n' + context() : msg);
			setBusy(true);
			fetch(form.action, { method: 'POST', body: data, credentials: 'same-origin' })
				.then(function (res) {
					if (res.ok) { setBusy(false); showSent(line); return; }
					return res.text().then(function (t) { throw new Error(t || 'That did not send.'); });
				})
				.catch(function (err) {
					setBusy(false);
					$('[data-failmsg]', form).textContent = navigator.onLine === false ? 'You appear to be offline. Check your connection and try again.' : (err && err.message ? err.message : 'That did not send.');
					fail.hidden = false;
					try { if (window.turnstile) window.turnstile.reset(); } catch (x) {}
				});
		});

		$('[data-reset]', form).addEventListener('click', function () {
			form.reset(); state.plan = {}; renderPlan();
			Object.keys(F).forEach(function (k) { setErr(k, ''); });
			sent.hidden = true; body.hidden = false; F.name.focus();
		});
	}

	/* ---------- insights filter ---------- */
	var fbs = $$('[data-filter]'), arts = $$('[data-sector]'), fstat = $('[data-filter-status]');
	fbs.forEach(function (b) {
		b.addEventListener('click', function () {
			var k = b.getAttribute('data-filter'), n = 0;
			fbs.forEach(function (x) { var on = x === b; x.classList.toggle('on', on); x.setAttribute('aria-pressed', on ? 'true' : 'false'); });
			arts.forEach(function (a) { var show = k === 'all' || a.getAttribute('data-sector') === k; a.hidden = !show; if (show) n++; });
			if (fstat) fstat.textContent = 'Showing ' + n + (n === 1 ? ' insight' : ' insights') + (k === 'all' ? '' : ' for ' + b.textContent);
		});
	});

	/* ---------- open a division when its anchor is the target (/services/#sell) ---------- */
	function openFromHash() {
		var id = location.hash.slice(1); if (!id) return;
		var el = document.getElementById(id);
		if (el && el.tagName === 'DETAILS') { el.open = true; el.scrollIntoView({ block: 'start' }); }
	}
	window.addEventListener('hashchange', openFromHash);
	openFromHash();

	/* ---------- start ---------- */
	try {
		var slug = new URLSearchParams(location.search).get('for');
		var fromUrl = doors.filter(function (d) { return d.getAttribute('data-slug') === slug; })[0];
		if (fromUrl) setAud(fromUrl.getAttribute('data-aud'), false);
	} catch (e) {}
	renderSec(); renderPlan(); updatePreset();
})();
