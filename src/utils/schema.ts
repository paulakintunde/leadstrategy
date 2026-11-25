// JSON-LD node builders. Each node links back to the site graph by @id (see SiteHead.astro).
import type { Faq } from '../data/types';
import type { Person } from '../data/people';

export const SITE = 'https://www.leadstrategy.ca/';
export const ORG_ID = `${SITE}#org`;
export const abs = (path: string) => new URL(path, SITE).href;

/** FAQPage for questions that are visible on the page. */
export function faqPage(path: string, faqs: Faq[]) {
	return {
		'@type': 'FAQPage',
		'@id': `${abs(path)}#faq`,
		mainEntity: faqs.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a },
		})),
	};
}

export function service(opts: { path: string; name: string; serviceType: string; description: string; category: string; audience?: string[] }) {
	return {
		'@type': 'Service',
		'@id': `${abs(opts.path)}#service`,
		name: opts.name,
		serviceType: opts.serviceType,
		category: opts.category,
		description: opts.description,
		url: abs(opts.path),
		provider: { '@id': ORG_ID },
		areaServed: { '@type': 'Country', name: 'Canada' },
		...(opts.audience?.length ? { audience: opts.audience.map((a) => ({ '@type': 'BusinessAudience', name: a })) } : {}),
		mainEntityOfPage: { '@id': `${abs(opts.path)}#webpage` },
	};
}

/** @id of a person's node; the node itself is emitted on their profile page and on pages they author. */
export const personId = (slug: string) => `${SITE}about/${slug}/#person`;

export function article(opts: { path: string; headline: string; description: string; published: string; modified?: string; image: string; section: string; about: string[]; author?: Person }) {
	return {
		'@type': 'Article',
		'@id': `${abs(opts.path)}#article`,
		headline: opts.headline,
		description: opts.description,
		datePublished: opts.published,
		dateModified: opts.modified ?? opts.published,
		image: abs(opts.image),
		articleSection: opts.section,
		about: opts.about.map((name) => ({ '@type': 'Thing', name })),
		inLanguage: 'en-CA',
		author: { '@id': opts.author ? personId(opts.author.slug) : ORG_ID },
		publisher: { '@id': ORG_ID },
		mainEntityOfPage: { '@id': `${abs(opts.path)}#webpage` },
		isPartOf: { '@id': `${SITE}#website` },
	};
}

export function itemList(path: string, name: string, items: { name: string; path: string }[]) {
	return {
		'@type': 'ItemList',
		'@id': `${abs(path)}#list`,
		name,
		numberOfItems: items.length,
		itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: abs(it.path) })),
	};
}

/** OfferCatalog of the services, grouped by division, for the Organization. */
export function offerCatalog(path: string, divisions: { name: string; services: { name: string; path: string }[] }[]) {
	return {
		'@type': 'OfferCatalog',
		'@id': `${abs(path)}#catalog`,
		name: 'Lead Strategy services',
		itemListElement: divisions.map((d) => ({
			'@type': 'OfferCatalog',
			name: d.name,
			itemListElement: d.services.map((s) => ({
				'@type': 'Offer',
				itemOffered: { '@type': 'Service', name: s.name, url: abs(s.path), provider: { '@id': ORG_ID } },
			})),
		})),
	};
}

/** Person node. Emitted on the person's profile page and on every page they author, so the author @id resolves. */
export function person(p: Person) {
	return {
		'@type': 'Person',
		'@id': personId(p.slug),
		name: p.name,
		jobTitle: p.jobTitle,
		url: abs(`/about/${p.slug}/`),
		image: abs(p.photo),
		worksFor: { '@id': ORG_ID },
		knowsAbout: p.knowsAbout,
		...(p.credentials?.length ? { hasCredential: p.credentials.map((c) => ({ '@type': 'EducationalOccupationalCredential', name: c })) } : {}),
		...(p.sameAs.length ? { sameAs: p.sameAs } : {}),
	};
}

/** One of our own apps. No offers or rating unless they are shown on the page. */
export function softwareApp(opts: { name: string; url: string; description: string; category: string; os: string; image: string }) {
	return {
		'@type': 'SoftwareApplication',
		'@id': `${opts.url.replace(/\/?$/, '/')}#app`,
		name: opts.name,
		url: opts.url,
		description: opts.description,
		applicationCategory: opts.category,
		operatingSystem: opts.os,
		image: abs(opts.image),
		publisher: { '@id': ORG_ID },
	};
}
