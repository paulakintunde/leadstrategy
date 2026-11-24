// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { LASTMOD } from './src/data/lastmod.ts';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.leadstrategy.ca',
	output: 'static',
	trailingSlash: 'always',
	integrations: [
		sitemap({
			// Utility pages are noindex, so keep them out of the sitemap too.
			filter: (page) => !/\/(404|contact\/thanks)\/?$/.test(new URL(page).pathname),
			// <lastmod> from src/data/lastmod.ts, so crawlers can tell which pages changed.
			serialize(item) {
				const date = LASTMOD[new URL(item.url).pathname];
				return date ? { ...item, lastmod: new Date(`${date}T12:00:00Z`).toISOString() } : item;
			},
		}),
	],
});
