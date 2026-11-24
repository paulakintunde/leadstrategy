// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
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
			const path = engine.types[r.type].path.replace('{slug}', r.slug).replace('{sector}', r.sector ?? '');
			map.set(path, r.verified > r.published ? r.verified : r.published);
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
			serialize: (item) => {
				const date = pseoLastmod.get(new URL(item.url).pathname);
				return date ? { ...item, lastmod: new Date(`${date}T12:00:00Z`).toISOString() } : item;
			},
		}),
	],
});
