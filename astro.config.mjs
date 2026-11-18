// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://leadstrategy.ca',
	output: 'static',
	trailingSlash: 'always',
	integrations: [
		sitemap({
			// Utility pages are noindex, so keep them out of the sitemap too.
			filter: (page) => !/\/(404|contact\/thanks)\/?$/.test(new URL(page).pathname),
		}),
	],
});
