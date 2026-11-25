// Checks the built site in dist/ for problems a type-check cannot see.
// Run after `npm run build`. No dependencies. Exits 1 on any error.
//
//   - every internal link, image and stylesheet points at a file that exists
//   - every page has a <title>, a meta description and exactly one <h1>
//   - indexable pages have a canonical URL; noindex pages stay out of the sitemap
//   - no internal links still point at prototype .html files
//   - JSON-LD parses; titles and descriptions are unique across indexable pages
//   - srcset candidates point at files that exist
//   - every sitemap URL has a <lastmod>
//   - every JSON-LD {"@id"} reference resolves to a node on the same page (so article authors exist)
//   - no AggregateRating or Review markup until real reviews are shown on the page
//   - every page opts out of Cloudflare Email Obfuscation, which hides the address from crawlers
//   - banned words stay out of visible copy
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
if (!existsSync(dist)) {
	console.error('dist/ not found. Run `npm run build` first.');
	process.exit(1);
}

const walk = (dir) => readdirSync(dir).flatMap((name) => {
	const full = join(dir, name);
	return statSync(full).isDirectory() ? walk(full) : [full];
});

const files = walk(dist);
const pages = files.filter((f) => f.endsWith('.html'));
const sitemap = files.filter((f) => /sitemap-\d+\.xml$/.test(f)).map((f) => readFileSync(f, 'utf8')).join('\n');
const errors = [];
// Words the brand voice rules out of all copy.
const BANNED = ['honest'];
const fail = (page, msg) => errors.push(`${page}: ${msg}`);
const seenTitle = new Map();
const seenDesc = new Map();
const attr = (html, re) => (html.match(re) ?? [])[1];

const resolves = (url) => {
	const path = decodeURIComponent(url.split(/[?#]/)[0]);
	if (path === '' || path === '/') return existsSync(join(dist, 'index.html'));
	const target = join(dist, path);
	if (path.endsWith('/')) return existsSync(join(target, 'index.html'));
	return existsSync(target) || existsSync(join(target, 'index.html'));
};

for (const file of pages) {
	const page = '/' + relative(dist, file).split(sep).join('/');
	const html = readFileSync(file, 'utf8');
	const noindex = /<meta name="robots" content="[^"]*noindex/.test(html);

	if (!/<title>[^<]+<\/title>/.test(html)) fail(page, 'missing <title>');
	if (!/<meta name="description" content="[^"]+"/.test(html)) fail(page, 'missing meta description');
	const h1s = (html.match(/<h1[\s>]/g) ?? []).length;
	if (h1s !== 1) fail(page, `expected one <h1>, found ${h1s}`);

	if (!noindex && !/<link rel="canonical" href="https:\/\/www\.leadstrategy\.ca\//.test(html)) fail(page, 'missing canonical URL');
	if (noindex && sitemap) {
		const url = 'https://www.leadstrategy.ca' + page.replace(/index\.html$/, '').replace(/\.html$/, '/');
		if (sitemap.includes(`<loc>${url}</loc>`)) fail(page, 'noindex page is listed in the sitemap');
	}

	if (!noindex) {
		const title = attr(html, /<title>([^<]+)<\/title>/);
		const desc = attr(html, /<meta name="description" content="([^"]+)"/);
		if (title && seenTitle.has(title)) fail(page, `duplicate <title> (also on ${seenTitle.get(title)})`);
		if (desc && seenDesc.has(desc)) fail(page, `duplicate meta description (also on ${seenDesc.get(desc)})`);
		seenTitle.set(title, page);
		seenDesc.set(desc, page);
	}

	for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
		let data;
		try {
			data = JSON.parse(json);
		} catch (e) {
			fail(page, `JSON-LD does not parse: ${e.message}`);
			continue;
		}
		const defined = new Set();
		const refs = new Set();
		const visit = (v) => {
			if (Array.isArray(v)) return v.forEach(visit);
			if (!v || typeof v !== 'object') return;
			const keys = Object.keys(v);
			if (keys.length === 1 && keys[0] === '@id') refs.add(v['@id']);
			else if (v['@id']) defined.add(v['@id']);
			const t = [].concat(v['@type'] ?? []);
			if (t.includes('AggregateRating') || t.includes('Review')) fail(page, `${t.join('/')} markup found: only add it once real reviews are shown on the page, then update this check`);
			keys.forEach((k) => k !== '@id' && visit(v[k]));
		};
		visit(data);
		for (const r of refs) if (!defined.has(r)) fail(page, `JSON-LD reference ${r} has no matching node on the page`);
	}

	if (!html.includes('<!--email_off-->')) fail(page, 'missing <!--email_off--> marker (Cloudflare would hide the email address)');

	const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ');
	for (const word of BANNED) if (new RegExp('(^|[^a-z])' + word, 'i').test(text)) fail(page, `banned word in copy: "${word}"`);

	for (const [, set] of html.matchAll(/\s(?:srcset|imagesrcset)="([^"]+)"/g)) {
		for (const cand of set.split(',')) {
			const url = cand.trim().split(/\s+/)[0];
			if (url.startsWith('/') && !resolves(url)) fail(page, `broken srcset: ${url}`);
		}
	}

	for (const [, attr, url] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
		if (!url.startsWith('/') || url.startsWith('//')) continue;
		if (/\.html(?:[?#]|$)/.test(url)) fail(page, `${attr} still points at a prototype file: ${url}`);
		else if (!resolves(url)) fail(page, `broken ${attr}: ${url}`);
	}
}

for (const block of sitemap.split('<url>').slice(1)) {
	if (!block.includes('<lastmod>')) errors.push(`sitemap: ${(block.match(/<loc>([^<]+)/) ?? [])[1]} has no <lastmod>`);
}

if (errors.length) {
	console.error(`Site check failed with ${errors.length} problem(s):\n` + errors.map((e) => '  - ' + e).join('\n'));
	process.exit(1);
}
console.log(`Site check passed: ${pages.length} pages.`);
