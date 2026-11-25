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
	/** Public phone in E.164 form, e.g. '+16045550000'. Leave null unless someone answers it. Shown in the footer, on /contact/ and in schema. */
	telephone: null as null | string,
	/** Display form of the phone, e.g. '604-555-0000'. */
	telephoneDisplay: null as null | string,
};

/** Footer and contact-page location line. Names the home city and province once ORG.address is set. */
export const LOCATION_LINE = ORG.address?.addressRegion
	? `Based in ${[ORG.address.addressLocality, ORG.address.addressRegion].filter(Boolean).join(', ')}. Working across Canada.`
	: 'A Canadian team, working across Canada';
