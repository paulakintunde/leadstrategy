// Programmatic SEO registry: loads every record in src/pseo/records/<type>/<slug>.json at build time.
// Only records with status "published" become pages. The release script flips queued records to
// published in batches (see scripts/pseo-release.mjs and docs/pseo.md).
import ENGINE from './engine.json';
import type { Faq, Section, SectorSlug, ServiceSlug } from '../data/types';

export type PseoType = 'accessibility-law' | 'sales-tax' | 'profession' | 'integration' | 'payment' | 'compare' | 'glossary';

export interface PseoSource {
	label: string;
	url: string;
	publisher: string;
	/** Government, regulator or the platform's own documentation. */
	official?: boolean;
}

export interface PseoFact {
	label: string;
	value: string;
	/** Index into sources. */
	source: number;
}

export interface PseoRecord {
	type: PseoType;
	slug: string;
	/** Profession pages only: the sector they sit under. */
	sector?: SectorSlug;
	status: 'queued' | 'published';
	/** Lower releases first. */
	priority: number;
	/** ISO date the page went live; null while queued. */
	published: string | null;
	/** ISO date every fact was last checked against its source. */
	verified: string;
	/** SEO title without the brand suffix. */
	title: string;
	description: string;
	h1: string;
	/** Short name used in breadcrumbs, cards and the hub list. */
	name: string;
	lead: string;
	/** Heading over the facts table. */
	factsHeading: string;
	facts: PseoFact[];
	sections: Section[];
	/** Optional numbered steps (integration recipes, setup walk-throughs). */
	steps?: { name: string; text: string }[];
	stepsHeading?: string;
	checklist: string[];
	faqs: Faq[];
	services: ServiceSlug[];
	sectors: SectorSlug[];
	/** Slugs of other records (any type) to link to; filled automatically when empty. */
	related?: string[];
	sources: PseoSource[];
}

export interface TypeConfig {
	label: string;
	hub: string;
	hubTitle?: string;
	hubH1?: string;
	hubLead?: string;
	hubDescription?: string;
	path: string;
	/** A PageIcon.astro name; cast at the use site (types cannot be imported from .astro into .ts). */
	icon: string;
	minFacts: number;
	minWords: number;
	officialSource: boolean;
	disclaimer?: string;
	maxAgeDays?: number;
}

export const TYPES = ENGINE.types as Record<PseoType, TypeConfig>;
export const GUIDES_HUB = ENGINE.guidesHub;
/** Types that sit under /guides/ and are listed on the guides hub. */
export const GUIDE_TYPES: PseoType[] = ['accessibility-law', 'sales-tax', 'integration', 'payment', 'compare', 'glossary'];

const files = import.meta.glob<PseoRecord>('./records/*/*.json', { eager: true, import: 'default' });
export const ALL: PseoRecord[] = Object.values(files);
export const PUBLISHED: PseoRecord[] = ALL.filter((r) => r.status === 'published').sort((a, b) => a.name.localeCompare(b.name));

export const pathOf = (r: PseoRecord) => TYPES[r.type].path.replace('{slug}', r.slug).replace('{sector}', r.sector ?? '');
export const hubOf = (r: PseoRecord) => TYPES[r.type].hub.replace('{sector}', r.sector ?? '');
export const publishedOfType = (t: PseoType) => PUBLISHED.filter((r) => r.type === t);
export const bySlug = (slug: string) => PUBLISHED.find((r) => r.slug === slug);

/** Up to `n` related published records: explicit `related` first, then same type, then shared services. */
export function relatedOf(r: PseoRecord, n = 3): PseoRecord[] {
	const out: PseoRecord[] = [];
	const add = (x?: PseoRecord) => { if (x && x !== r && !out.includes(x)) out.push(x); };
	for (const s of r.related ?? []) add(bySlug(s));
	for (const x of PUBLISHED.filter((x) => x.type === r.type && x.sector === r.sector)) add(x);
	for (const x of PUBLISHED.filter((x) => x.services.some((s) => r.services.includes(s)))) add(x);
	return out.slice(0, n);
}

/** Published records that mention a service or sector, for links from the landing pages. */
export const forService = (s: ServiceSlug) => PUBLISHED.filter((r) => r.services.includes(s));
export const forSector = (s: SectorSlug) => PUBLISHED.filter((r) => r.sectors.includes(s) || r.sector === s);
