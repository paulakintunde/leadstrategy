// Content shared by more than one page. Copy comes from the approved site text.
const img = (n: string) => `/images/v6/${n}.webp`;

export const WORK = [
	{ url: 'https://www.lifecreativewordsministry.com', domain: 'lifecreativewordsministry.com', img: img('work-lifecreativewords'), cat: 'Church · Vancouver, BC', name: 'Life Creative Words Ministry', line: 'Service times, sermons and a simple way to plan a first visit.', alt: 'Life Creative Words Ministry homepage: Where the Word Comes Alive' },
	{ url: 'https://www.quickprep.ca', domain: 'quickprep.ca', img: img('work-quickprep'), cat: 'Education', name: 'Quick Prep', line: 'Case and fit interview preparation for management consulting candidates.', alt: 'Quick Prep homepage: Management Consulting Interview Preparation' },
	{ url: 'https://www.fincwin.com', domain: 'fincwin.com', img: img('work-fincwin'), cat: 'Personal finance app', name: 'FincWin', line: 'A free budget app that puts income, spending, debt and savings in one view.', alt: 'FincWin homepage: Track what you earn, spend and save' },
	{ url: 'https://www.freetins.com', domain: 'freetins.com', img: img('work-freetins'), cat: 'Gaming guides', name: 'Freetins', line: 'Game codes and guides, each with a source and the date it was recorded.', alt: 'Freetins homepage: Game codes, sourced and tracked' },
	{ url: 'https://www.zamani-foundation.org', domain: 'zamani-foundation.org', img: img('work-zamani'), cat: 'Non-profit', name: 'Zamani Foundation', line: 'Advocacy for peace, development and food security for displaced people.', alt: 'Zamani Foundation homepage: End Displacement, End Hunger' },
	{ url: 'https://www.ealch.com', domain: 'ealch.com', img: img('work-ealch'), cat: 'Language learning', name: 'EALCH', line: 'Structured preparation for the TEF Canada, TCF, DELF and DALF French exams.', alt: 'EALCH homepage: Pass your French exam without the guesswork' },
];

export const SECTORS = [
	{ slug: 'trades-contractors', name: 'Trades and contractors', short: 'Trades', img: img('sector-trades'), dur: '3 to 5 weeks', note: 'Quote forms that reach the person on site, a page per trade and service area, and galleries that still load on a job-site connection.' },
	{ slug: 'professional-services', name: 'Professional services', short: 'Professional', img: img('aud-individual'), dur: '3 to 4 weeks', note: 'One page per problem you solve rather than one page listing eleven, intake that pre-qualifies, and booking that respects billable hours.' },
	{ slug: 'healthcare-clinics', name: 'Healthcare and clinics', short: 'Healthcare', img: img('aud-specialist'), dur: '4 to 6 weeks', note: 'Intake and booking across locations, staff pages, and forms that collect only what the front desk actually needs to see.' },
	{ slug: 'nonprofits-charities', name: 'Nonprofits and charities', short: 'Nonprofit', img: img('sector-nonprofits'), dur: '4 to 6 weeks', note: 'One-time and monthly giving on separate pages, receipting wired to your finance tool, and content volunteers can update without us.' },
	{ slug: 'restaurants-food', name: 'Restaurants and food', short: 'Food', img: img('sector-food'), dur: '2 to 4 weeks', note: 'Menus that stay current, ordering and reservations in one flow, and a photo library shot in a single afternoon.' },
	{ slug: 'manufacturing', name: 'Manufacturing', short: 'Manufacturing', img: img('sector-manufacturing'), dur: '6 to 8 weeks', note: 'Catalogues with spec sheets attached, search by part number, and a distributor login that hides trade pricing from the public.' },
	{ slug: 'real-estate', name: 'Real estate', short: 'Real estate', img: img('sector-real-estate'), dur: '4 to 6 weeks', note: 'Listing feeds that do not go stale, area pages that rank, and enquiry routing to the right agent on the first email.' },
	{ slug: 'education', name: 'Education', short: 'Education', img: img('sector-education'), dur: '5 to 7 weeks', note: 'Separate paths for applicants and current families, program pages that answer cost and dates first, and forms that route to the right office.' },
	{ slug: 'retail-ecommerce', name: 'Retail and ecommerce', short: 'Retail', img: img('hero-shop'), dur: '5 to 8 weeks', note: 'Storefront, checkout tested on a slow phone, digital download delivery, and merch fulfilment that does not need a spreadsheet.' },
	{ slug: 'fitness-wellness', name: 'Fitness and wellness', short: 'Fitness', img: img('sector-fitness'), dur: '3 to 5 weeks', note: 'Timetables, drop-ins and memberships in one place, with sign-up that never requires a phone call.' },
];

export const DIVISIONS = [
	{
		id: 'build', name: 'Build', sub: 'Software and sites, built to be handed over', img: img('div-build'), alt: 'A website on a laptop',
		one: 'Every engagement ends with you holding the code and the accounts.',
		services: [
			['Web application development', 'Software that runs in the browser: customer portals, internal tools, booking systems, dashboards. You get a staging link every week and the repository is yours from day one.', 'web-application-development'],
			['Website design and build', 'Marketing sites that load fast and say what you sell above the fold. You get the design files, the code, and a site you can edit without calling us.', 'website-design'],
			['E-commerce development', 'Storefronts on Shopify, WooCommerce, or custom builds when those genuinely do not fit. Checkout gets tested on a slow phone before launch, because that is where checkouts die.', 'ecommerce-development'],
			['Integrations and automation', 'The store, the email tool, the warehouse and the books, connected so data stops being retyped. Every connection we make comes with documentation.', 'integrations-automation'],
		],
	},
	{
		id: 'market', name: 'Market', sub: 'Demand work run from accounts you own', img: img('div-market'), alt: 'A marketing plan on a desk',
		one: 'Reported in revenue, monthly, in plain language.',
		services: [
			['Paid advertising', 'Campaigns on search and social, run from ad accounts you own. Every dollar is tagged to a product or an offer, so the monthly report reads in revenue, not impressions.', 'paid-advertising'],
			['Search optimization', 'We fix what keeps pages out of results, then write pages that answer what buyers actually type. No link schemes, ever. They end badly.', 'seo'],
			['Email and retention', 'Welcome flows, abandoned cart sequences, and a sending schedule your list will tolerate. Written by people who unsubscribe from lazy email, same as you.', 'email-marketing'],
			['Analytics and reporting', 'One dashboard with the numbers you actually check: orders, revenue, cost per order, where buyers came from. You will know within a week if a campaign is losing money.', 'analytics-reporting'],
		],
	},
	{
		id: 'create', name: 'Create', sub: 'The material everything else needs', img: img('div-create'), alt: 'A camera on a shoot',
		one: 'Raw files delivered, because they are yours.',
		services: [
			['Video and photography', 'Product films, founder pieces and ad cuts sized for every placement. Shot, edited and delivered with the raw files, because they are yours.', 'video-photography'],
			['Podcast and audio', 'Recording, editing, distribution and clips for social. You talk, we handle everything after the microphone.', 'podcast-production'],
			['Brand and design assets', 'Logos, type, colour and a usage guide short enough that people read it. Built so an intern can make an on-brand graphic without asking anyone.', 'brand-design'],
			['Copy and landing pages', 'Pages with one job and one ask, written in the language customers use when they complain about the problem you solve. That language converts. Jargon does not.', 'copywriting-landing-pages'],
		],
	},
	{
		id: 'sell', name: 'Sell', sub: 'The commerce side, run day to day', img: img('div-sell'), alt: 'An online order being packed',
		one: 'A weekly trading summary, not a login.',
		services: [
			['Storefront operation', 'We run the store day to day: catalogue, pricing, promotions, customer questions. You review a weekly trading summary instead of living in the admin panel.', 'storefront-operation'],
			['Digital download distribution', 'Templates, courses, software, audio: secure delivery, licensing and payment, set up and kept running. Customers get their files in seconds, at 3 a.m., without you.', 'digital-downloads'],
			['Merchandise programs', 'Design, sourcing and fulfilment for physical goods, on demand or in inventory. We tell you up front when a merch idea will not cover its own costs.', 'merchandise'],
			['Marketplace listings', 'Your products listed and maintained on the marketplaces your buyers already use, with content that matches your store instead of contradicting it.', 'marketplace-listings'],
		],
	},
];

export const INSIGHTS = [
	{ sector: 'Trades and contractors', key: 'Trades', img: img('insight-quote-form'), slug: 'quote-form-funnel', title: 'The quote form is the whole funnel', line: 'Where enquiries get lost between the site, the inbox and the scheduling tool.' },
	{ sector: 'Nonprofits and charities', key: 'Nonprofit', img: img('insight-monthly-giving'), slug: 'monthly-giving-page', title: 'Monthly giving needs a different page', line: 'One-time and recurring donors want different information, in a different order.' },
	{ sector: 'Healthcare and clinics', key: 'Healthcare', img: img('aud-specialist'), slug: 'multi-location-booking', title: 'Booking across locations without phone tag', line: 'One intake form, several calendars, and the rules that decide who gets which slot.' },
	{ sector: 'Retail and ecommerce', key: 'Retail', img: img('insight-guest-checkout'), slug: 'guest-checkout', title: 'Guest checkout, and why it should lead', line: 'Forced account creation is still one of the largest sources of abandonment.' },
	{ sector: 'Restaurants and food', key: 'Food', img: img('sector-food'), slug: 'restaurant-photo-library', title: 'A photo library that lasts a year', line: 'What to shoot in one afternoon so every channel has something to post.' },
	{ sector: 'Manufacturing', key: 'Manufacturing', img: img('sector-manufacturing'), slug: 'spec-sheets-product-pages', title: 'Spec sheets are the product page', line: 'Distributors search by part number. Most catalogues make that impossible.' },
	{ sector: 'Professional services', key: 'Professional', img: img('aud-individual'), slug: 'one-page-per-problem', title: 'Nobody reads the services page', line: 'Prospects arrive from a search for one specific problem, and land on a list of eleven.' },
	{ sector: 'Real estate', key: 'Real estate', img: img('sector-real-estate'), slug: 'stale-listings', title: 'Listings age faster than the site around them', line: 'Where feed integrations break, and what a stale listing costs in enquiries.' },
	{ sector: 'Education', key: 'Education', img: img('sector-education'), slug: 'school-website-two-audiences', title: 'Two audiences, one homepage', line: 'Applicants and current families need different paths, and neither should scroll past the other.' },
	{ sector: 'Fitness and wellness', key: 'Fitness', img: img('sector-fitness'), slug: 'class-schedule-page', title: 'Class schedules are the hardest page to get right', line: 'Timetables, drop-ins and memberships collide, and the phone rings when they do.' },
];
