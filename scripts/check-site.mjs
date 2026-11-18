// Checks the built site in dist/ for problems a type-check cannot see.
// Run after `npm run build`. No dependencies. Exits 1 on any error.
//
//   - every internal link, image and stylesheet points at a file that exists
//   - every page has a <title>, a meta description and exactly one <h1>
//   - indexable pages have a canonical URL; noindex pages stay out of the sitemap
//   - no internal links still point at prototype .html files
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
const fail = (page, msg) => errors.push(`${page}: ${msg}`);

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

	for (const [, attr, url] of html.matchAll(/\s(href|src)="([^"]+)"/g)) {
		if (!url.startsWith('/') || url.startsWith('//')) continue;
		if (/\.html(?:[?#]|$)/.test(url)) fail(page, `${attr} still points at a prototype file: ${url}`);
		else if (!resolves(url)) fail(page, `broken ${attr}: ${url}`);
	}
}

if (errors.length) {
	console.error(`Site check failed with ${errors.length} problem(s):\n` + errors.map((e) => '  - ' + e).join('\n'));
	process.exit(1);
}
console.log(`Site check passed: ${pages.length} pages.`);
