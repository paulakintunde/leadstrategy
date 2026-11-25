// Case studies: one page each at /work/<slug>/. Entries appear on /work/, on their sector
// page and on each service page they list. Empty means no case study pages are built.
//
// Every number must be real. `measure.source` says where it came from (GA4, the client's
// CRM export, the booking system). It is not shown on the page, but the build fails
// without it, so every published result can be traced.
import type { SectorSlug, ServiceSlug } from './types';

export interface CaseStudy {
	slug: string;
	client: string;
	clientUrl?: string;
	sector: SectorSlug;
	services: ServiceSlug[];
	/** <title> without the suffix. */
	title: string;
	/** Meta description, 140-160 chars. */
	description: string;
	/** ISO dates. */
	published: string;
	updated?: string;
	/** Slug of the author in src/data/people.ts. */
	author?: string;
	/** One or two sentences: who the client is and what changed. */
	summary: string;
	challenge: string[];
	approach: string[];
	/** The one agreed measure, before and after. */
	measure: { name: string; before: string; after: string; period: string; source: string };
	/** e.g. "First phase live in 4 weeks". */
	timeline: string;
	/** Only with the person's written approval. */
	quote?: { text: string; name: string; role: string };
	images: { src: string; alt: string; w: number; h: number }[];
}

export const CASE_STUDIES: CaseStudy[] = [];

export const casePath = (slug: string) => `/work/${slug}/`;
export const casesForSector = (s: SectorSlug) => CASE_STUDIES.filter((c) => c.sector === s);
export const casesForService = (s: ServiceSlug) => CASE_STUDIES.filter((c) => c.services.includes(s));
