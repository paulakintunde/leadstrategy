// Business facts used in structured data and llms.txt. Edit here, not in templates.

export interface Crumb {
	name: string;
	path: string;
}

export const ORG = {
	name: 'Lead Strategy',
	alternateName: 'Lead Strategy Canada Inc.',
	legalName: 'Lead Strategy Canada Inc.',
	email: 'hello@leadstrategy.ca',
	/** Stated on /about/. */
	foundingDate: '2024',
	slogan: 'Build, Market, Create, Sell.',
	description:
		'Lead Strategy is a Canadian digital agency that builds websites and web apps, runs search and advertising, produces video, audio and brand work, and operates online stores for small businesses, nonprofits and specialist practices across Canada.',
	knowsAbout: [
		'Website design',
		'Web application development',
		'E-commerce development',
		'Search engine optimization',
		'Paid advertising',
		'Email marketing',
		'Video production',
		'Brand design',
		'Online store operation',
	],
	/** Add the region once confirmed, e.g. { addressRegion: 'BC', addressCountry: 'CA' }. */
	address: null as null | { addressRegion?: string; addressLocality?: string; addressCountry: string },
	/** Official profiles (LinkedIn, Google Business Profile, Clutch...). Add as they go live. */
	sameAs: [] as string[],
};
