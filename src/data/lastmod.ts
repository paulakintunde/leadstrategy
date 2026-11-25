// Last meaningful change per URL, for sitemap <lastmod>. Read by astro.config.mjs.
// Landing pages take `updated` (or `published`) from their data entry. Core pages are listed
// by hand below: bump the date when the page's content changes, not for code-only edits.
import { SERVICES } from './services';
import { SECTOR_PAGES } from './sectors';
import { INSIGHT_PAGES } from './insights';
import { CASE_STUDIES } from './work';
import { PEOPLE } from './people';

/** Date the service, sector and insight pages went live (PR #11). */
const LAUNCH = '2026-11-18';

const CORE: Record<string, string> = {
	'/': '2026-11-24',
	'/about/': '2026-11-18',
	'/services/': '2026-11-18',
	'/sectors/': '2026-11-18',
	'/work/': '2026-11-24',
	'/insights/': '2026-11-18',
	'/store/': '2026-11-24',
	'/contact/': '2026-11-24',
	'/privacy/': '2026-11-18',
	'/terms/': '2026-11-18',
	'/accessibility/': '2026-11-18',
};

const newest = (dates: string[]) => dates.reduce((a, b) => (b > a ? b : a), LAUNCH);

const entries: [string, string][] = [
	...SERVICES.map((s): [string, string] => [`/services/${s.slug}/`, s.updated ?? LAUNCH]),
	...SECTOR_PAGES.map((s): [string, string] => [`/sectors/${s.slug}/`, s.updated ?? LAUNCH]),
	...INSIGHT_PAGES.map((a): [string, string] => [`/insights/${a.slug}/`, a.updated ?? a.published]),
	...CASE_STUDIES.map((c): [string, string] => [`/work/${c.slug}/`, c.updated ?? c.published]),
	...PEOPLE.map((p): [string, string] => [`/about/${p.slug}/`, LAUNCH]),
];

export const LASTMOD: Record<string, string> = Object.fromEntries(entries);

// A hub changes when any of its children does.
const hub = (prefix: string) => newest(entries.filter(([p]) => p.startsWith(prefix)).map(([, d]) => d));
for (const [path, date] of Object.entries(CORE)) {
	const child = path === '/' ? LAUNCH : path === '/about/' ? hub('/about/') : hub(path);
	LASTMOD[path] = newest([date, child]);
}
