// Named people at Lead Strategy. Each entry gets a profile page at /about/<slug>/ with
// ProfilePage + Person schema, and can be set as the author of insights and case studies.
// Only real people, real photos and facts they have approved. Empty means no profile pages
// are built and articles stay credited to the company.

export interface Person {
	slug: string;
	name: string;
	jobTitle: string;
	/** 2-4 short paragraphs: background, years in the work, the kind of projects. */
	bio: string[];
	/** Path under /public, e.g. '/images/people/jane.webp'. At least 800px wide. */
	photo: string;
	photoAlt: string;
	/** Topics this person can stand behind, used for schema knowsAbout. */
	knowsAbout: string[];
	/** Certifications or memberships, as written on the certificate. */
	credentials?: string[];
	/** LinkedIn and any other official profile URLs. */
	sameAs: string[];
}

export const PEOPLE: Person[] = [];

export const personBySlug = (slug?: string) => (slug ? PEOPLE.find((p) => p.slug === slug) : undefined);
export const personPath = (slug: string) => `/about/${slug}/`;
