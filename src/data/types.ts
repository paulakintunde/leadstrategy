// Shapes for the service, sector and insight landing pages.
// Slugs are the URL segments: /services/<slug>/, /sectors/<slug>/, /insights/<slug>/.

export type DivisionId = 'build' | 'market' | 'create' | 'sell';

export type ServiceSlug =
	| 'web-application-development' | 'website-design' | 'ecommerce-development' | 'integrations-automation'
	| 'paid-advertising' | 'seo' | 'email-marketing' | 'analytics-reporting'
	| 'video-photography' | 'podcast-production' | 'brand-design' | 'copywriting-landing-pages'
	| 'storefront-operation' | 'digital-downloads' | 'merchandise' | 'marketplace-listings';

export type SectorSlug =
	| 'trades-contractors' | 'professional-services' | 'healthcare-clinics' | 'nonprofits-charities' | 'restaurants-food'
	| 'manufacturing' | 'real-estate' | 'education' | 'retail-ecommerce' | 'fitness-wellness';

export type InsightSlug =
	| 'quote-form-funnel' | 'monthly-giving-page' | 'multi-location-booking' | 'guest-checkout' | 'restaurant-photo-library'
	| 'spec-sheets-product-pages' | 'one-page-per-problem' | 'stale-listings' | 'school-website-two-audiences' | 'class-schedule-page';

export interface Faq {
	q: string;
	a: string;
}

/** One H2 section: paragraphs, then an optional bullet list. */
export interface Section {
	h2: string;
	body: string[];
	list?: string[];
}

export interface ServicePage {
	slug: ServiceSlug;
	/** Short name used in cards and breadcrumbs, e.g. "Website design and build". */
	name: string;
	division: DivisionId;
	/** schema.org serviceType, e.g. "Website design". */
	serviceType: string;
	/** <title> without the " | Lead Strategy" suffix. Suffix is added by the template. Max 44 chars. */
	title: string;
	/** Meta description, 140-160 chars. */
	description: string;
	h1: string;
	/** One or two sentences under the H1. */
	lead: string;
	sections: Section[];
	/** What the client receives. 4-7 short items. */
	deliverables: string[];
	faqs: Faq[];
	sectors: SectorSlug[];
	related: ServiceSlug[];
	insights: InsightSlug[];
}

export interface SectorPage {
	slug: SectorSlug;
	title: string;
	description: string;
	h1: string;
	lead: string;
	sections: Section[];
	/** The pages and systems we build for this sector. 4-6 items, each a short title and one sentence. */
	builds: { t: string; d: string }[];
	faqs: Faq[];
	services: ServiceSlug[];
	insight: InsightSlug;
}

export interface InsightPage {
	slug: InsightSlug;
	sector: SectorSlug;
	/** Article headline (H1). */
	headline: string;
	title: string;
	description: string;
	/** ISO date. */
	published: string;
	/** Standfirst under the headline: 1-2 sentences. */
	lead: string;
	sections: Section[];
	/** A short checklist the reader can act on. 4-7 items. */
	checklist: string[];
	services: ServiceSlug[];
}
