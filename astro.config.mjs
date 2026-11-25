// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { LASTMOD } from './src/data/lastmod.ts';
import { readFileSync, readdirSync, existsSync } from 'node:fs';

// lastmod for programmatic pages: the date their facts were last checked against the sources.
const pseoLastmod = (() => {
	const dir = new URL('./src/pseo/records/', import.meta.url);
	const engine = JSON.parse(readFileSync(new URL('./src/pseo/engine.json', import.meta.url), 'utf8'));
	/** @type {Map<string, string>} */
	const map = new Map();
	if (!existsSync(dir)) return map;
	for (const type of readdirSync(dir)) {
		for (const f of readdirSync(new URL(`${type}/`, dir)).filter((f) => f.endsWith('.json'))) {
			const r = JSON.parse(readFileSync(new URL(`${type}/${f}`, dir), 'utf8'));
			if (r.status !== 'published') continue;
			const cfg = engine.types[r.type];
			const date = r.verified > r.published ? r.verified : r.published;
			const fill = (/** @type {string} */ p) => p.replace('{slug}', r.slug).replace('{sector}', r.sector ?? '');
			// The page itself, its type hub, and /guides/ (all but profession) take the newest record date.
			const paths = [fill(cfg.path), fill(cfg.hub)];
			if (r.type !== 'profession') paths.push(engine.guidesHub.path);
			for (const p of paths) if (!map.has(p) || /** @type {string} */ (map.get(p)) < date) map.set(p, date);
		}
	}
	return map;
})();

// https://astro.build/config
export default defineConfig({
	site: 'https://www.leadstrategy.ca',
	output: 'static',
	trailingSlash: 'always',
	integrations: [
		sitemap({
			// Utility pages are noindex, so keep them out of the sitemap too.
			filter: (page) => !/\/(404|contact\/thanks)\/?$/.test(new URL(page).pathname),
			// <lastmod>: the later of src/data/lastmod.ts and the newest programmatic record on the page.
			serialize(item) {
				const path = new URL(item.url).pathname;
				const dates = [pseoLastmod.get(path), LASTMOD[path]].filter(Boolean).sort();
				const date = dates.at(-1);
				return date ? { ...item, lastmod: new Date(`${date}T12:00:00Z`).toISOString() } : item;
			},
		}),
	],
});
