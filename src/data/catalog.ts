// Lookups that join the card data (site.ts) with the landing-page data, plus URL helpers.
// The taxonomy: Division > Service; Sector <-> Services; Insight -> Sector + Services.
import { DIVISIONS, SECTORS, INSIGHTS } from './site';
import { SERVICES } from './services';
import { SECTOR_PAGES } from './sectors';
import { INSIGHT_PAGES } from './insights';
import type { DivisionId, InsightSlug, SectorSlug, ServiceSlug } from './types';

export const servicePath = (s: ServiceSlug) => `/services/${s}/`;
export const sectorPath = (s: SectorSlug) => `/sectors/${s}/`;
export const insightPath = (s: InsightSlug) => `/insights/${s}/`;

export const DIVISION = Object.fromEntries(DIVISIONS.map((d) => [d.id, { name: d.name, sub: d.sub }])) as Record<DivisionId, { name: string; sub: string }>;

// Names from PageIcon.astro.
const ICONS = { build: 'app-window', market: 'compass', create: 'lightbulb', sell: 'shopping-bag' } as const satisfies Record<DivisionId, string>;
export const divisionIcon = (d: DivisionId) => ICONS[d];

function find<T>(list: T[], pred: (x: T) => boolean, what: string): T {
	const hit = list.find(pred);
	if (!hit) throw new Error(`Unknown ${what}`);
	return hit;
}

export const serviceBySlug = (s: ServiceSlug) => find(SERVICES, (x) => x.slug === s, `service ${s}`);
export const sectorBySlug = (s: SectorSlug) => find(SECTOR_PAGES, (x) => x.slug === s, `sector ${s}`);
export const insightBySlug = (s: InsightSlug) => find(INSIGHT_PAGES, (x) => x.slug === s, `insight ${s}`);
/** Card data for a sector: name, short label, image, first-phase window. */
export const sectorCard = (s: SectorSlug) => find(SECTORS, (x) => x.slug === s, `sector card ${s}`);
export const insightCard = (s: InsightSlug) => find(INSIGHTS, (x) => x.slug === s, `insight card ${s}`);
export const sectorName = (s: SectorSlug) => sectorCard(s).name;
