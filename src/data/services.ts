// Service landing pages: /services/<slug>/.
// Copy expands on the approved card copy in site.ts DIVISIONS.
import type { ServicePage } from './types';

export const SERVICES: ServicePage[] = [
	// ---------------------------------------------------------------- BUILD
	{
		slug: "web-application-development",
		name: "Web application development",
		division: "build",
		serviceType: "Web application development",
		title: "Custom Web App Development in Canada",
		description: "Custom web app development for Canadian businesses: customer portals, booking systems and internal tools, with a weekly staging link and code you own.",
		h1: "Custom web applications you can hand to the next developer",
		lead: "We do custom web app development for Canadian small businesses and nonprofits: customer portals, internal tools, booking systems and dashboards. You see a staging link every week, and the repository sits in your account from the first commit.",
		sections: [
			{
				h2: "Signs the spreadsheet has run its course",
				body: [
					"Most of the apps we build replace something that used to work. A shared spreadsheet that three people now edit at once. An inbox where customers ask for the status of an order because they cannot see it themselves. A booking process that only one staff member understands.",
					"A web application puts that work behind a login, a few screens and a database with rules. Customers check their own status. Staff see only the records they need. The data is entered once and stays consistent, because the app refuses the entries a spreadsheet would quietly accept.",
				],
				list: [
					"Customer portals for orders, documents, invoices or progress updates",
					"Internal tools that replace a tangle of forms and spreadsheets",
					"Booking and scheduling across staff, rooms or locations",
					"Dashboards that pull figures from the systems you already pay for",
				],
			},
			{
				h2: "How we run custom web app development",
				body: [
					"Before anything is built, you get a written scope with a fixed price. It names the screens, the user roles, the data each screen reads and writes, and the one measure we agree to judge the work by, such as hours of admin removed each week or bookings taken without a phone call.",
					"The work is split into phases, and the phase that earns or saves the most goes first. That usually means one complete path through the app, working end to end, rather than every screen half finished. You click through it on a staging link each week and tell us what is wrong while it is still cheap to change.",
					"We test with the people who will use it: the front desk, the warehouse lead, a customer who agreed to try it. Their confusion shows up as specific changes in the next week's build.",
				],
			},
			{
				h2: "Logins, data and the privacy questions",
				body: [
					"A web app holds personal information, so it falls under PIPEDA or the provincial privacy law that applies to you. We design for that from the first screen: each role sees only what it needs, forms collect only what someone will act on, and every change to a sensitive record is logged.",
					"If you handle health information or work in a regulated field, your obligations may go further. We will tell you where the data is stored and who can reach it. Your lawyer or privacy officer should confirm the rules that apply to you.",
				],
			},
			{
				h2: "What you hold when we hand it over",
				body: [
					"The code lives in a repository under your account. The hosting, the database and the domain are billed to you. The documentation covers how to deploy a change, where the settings live, how backups run and how to restore one. A developer who has never met us should be able to pick it up and keep going.",
					"We build and maintain our own app, FincWin, so we deal with the same release and support work we ask you to plan for. If you want us to keep maintaining yours after launch, that is a separate, written arrangement you can end.",
				],
			},
		],
		deliverables: [
			"Written scope with a fixed price and one agreed measure",
			"A staging link every week while the app is built",
			"Source code in a repository under your account",
			"Hosting, database and domain accounts in your name",
			"User roles and permissions set up and documented",
			"Deployment, backup and restore documentation",
		],
		faqs: [
			{
				q: "Should I build a custom web app or buy off-the-shelf software?",
				a: "Buy first if a product already does most of what you need and its limits will not cost you customers. Build when you are paying staff to work around the software, when you need two tools to share data they cannot share, or when the process is what sets you apart. We will tell you in the scoping call if an existing product is the better answer.",
			},
			{
				q: "Who owns the code for a custom web application?",
				a: "You do. The repository is created under your account at the start of the project, not transferred at the end. Hosting, database and domain accounts are in your name too. If we stopped working together tomorrow, you would still have everything needed to run the app, and the documentation explaining how it fits together.",
			},
			{
				q: "Does a web app work on phones without an app store listing?",
				a: "Yes. A web application runs in the phone's browser and can be saved to the home screen like an app. That avoids app store review and lets you ship fixes the same day. If you later need features only a native app can provide, such as some offline or device functions, the same data and logic can usually sit behind it.",
			},
			{
				q: "What happens if something breaks after launch?",
				a: "Before launch we agree who watches for errors and how fast a fix is expected. Error alerts go to an inbox you control as well as ours. If you choose ongoing maintenance with us, the response terms are in writing. If you do not, the documentation is written so another developer can diagnose and fix problems without us.",
			},
		],
		sectors: ["healthcare-clinics", "professional-services", "manufacturing", "education"],
		related: ["integrations-automation", "website-design", "analytics-reporting"],
		insights: ["multi-location-booking"],
	},
	{
		slug: "website-design",
		name: "Website design and build",
		division: "build",
		serviceType: "Website design",
		title: "Website Design for Canadian Small Businesses",
		description: "Website design for Canadian small businesses: fast marketing sites that say what you sell above the fold, with design files, code and editing access you keep.",
		h1: "Website design that says what you sell before anyone scrolls",
		lead: "Website design for Canadian small businesses, nonprofits and practices. We build marketing sites that load fast, put the offer above the fold, and that you can edit without calling us.",
		sections: [
			{
				h2: "The first screen has one job",
				body: [
					"A visitor decides in the first screen whether they are in the right place. That screen needs to say what you do, who it is for and what to do next. A slogan and a stock photo do none of those things.",
					"We start every site by writing that screen in plain words, before any design. If we cannot say what you sell in one sentence, the problem is not the layout, and we sort it out with you first. Everything below the fold then supports that sentence: proof, detail, answers to the questions that stop people from enquiring.",
				],
			},
			{
				h2: "How the website design and build runs",
				body: [
					"You get a written scope with a fixed price, the list of pages, and the one measure we will use to judge the site, usually enquiries or bookings from the pages that matter most. Phases are ordered so the page that brings in work goes live first, rather than waiting for the whole site.",
					"Design happens in the browser as soon as possible. A static mockup cannot show you how a menu behaves on a phone or how long a page takes to appear. From the first week you get a staging link, and every round of feedback is made on the real site.",
				],
				list: [
					"Page list and content plan, tied to what buyers search for",
					"Wireframes for the key pages, then design in the browser",
					"Copy written or edited so each page has one clear next step",
					"Forms tested end to end, so enquiries land in the right inbox",
				],
			},
			{
				h2: "Checks before launch",
				body: [
					"Before launch we load every template on a mid-range phone over a throttled connection. We check heading order, alt text, colour contrast and keyboard navigation, because screen reader users are customers too, and in Ontario the AODA sets accessibility requirements for many organizations. We fill in every form and confirm where the message arrives.",
					"We also check what happens when things go wrong. The 404 page offers a way back. A form with a missing field says which field. The page still reads properly if a font fails to load. Phone numbers and addresses are written as text, not baked into an image, so phones can tap to call and search engines can read them.",
					"We set up redirects from the old site's addresses so existing search traffic and bookmarks do not hit a dead page. Search Console and analytics are connected under your accounts on day one, not added later.",
				],
			},
			{
				h2: "Editing it yourself after launch",
				body: [
					"A site you cannot change is a site that goes stale. We set up the editor so your team can update text, swap photos, add a staff profile or post news without touching the layout. You get a short guide written for the person who will actually do it, and a recorded walkthrough.",
					"At handover you hold the design files, the code, the hosting account and the domain. There is no monthly fee to us for the right to keep your own site online.",
				],
			},
		],
		deliverables: [
			"Written scope, page list and fixed price",
			"Design files for every template",
			"Site code and hosting account in your name",
			"Redirect map from your old site's addresses",
			"Editor set up with a short how-to guide and recorded walkthrough",
			"Search Console and analytics connected under your accounts",
		],
		faqs: [
			{
				q: "Which platform will my website be built on?",
				a: "It depends on who will edit it and what it needs to do. For most small business sites we recommend a platform your team can edit easily and that does not lock your content in. If you already pay for a platform and it works, we can design within it. The scope names the platform and explains why it was chosen.",
			},
			{
				q: "Do you write the content, or do I need to supply it?",
				a: "Either works. Many clients give us rough notes, old brochures and a phone call, and we turn that into page copy for them to approve. If you prefer to write it yourself, we give you a structure for each page and edit what you send so every page has one clear purpose and next step.",
			},
			{
				q: "Will a redesign hurt my current Google rankings?",
				a: "It can if old addresses disappear without redirects, or if pages that ranked are cut. We record the pages that currently bring search traffic, keep or improve them, and map every old address to its new one. After launch we watch Search Console for crawl errors and fix them quickly.",
			},
			{
				q: "Is the website accessible for people using screen readers?",
				a: "We build to recognised accessibility guidelines: proper heading order, alt text, readable colour contrast, labelled forms and full keyboard navigation. We test with a screen reader before launch. If your organization has specific obligations, such as under Ontario's AODA, tell us early and we will document how the site meets them.",
			},
		],
		sectors: ["trades-contractors", "professional-services", "nonprofits-charities", "education"],
		related: ["copywriting-landing-pages", "seo", "brand-design"],
		insights: ["one-page-per-problem", "school-website-two-audiences"],
	},
	{
		slug: "ecommerce-development",
		updated: '2026-11-24',
		name: "E-commerce development",
		division: "build",
		serviceType: "E-commerce development",
		title: "Ecommerce Website Development in Canada",
		description: "Ecommerce website development in Canada on Shopify, WooCommerce or custom builds, with GST/HST set up, data migrated and checkout tested on a slow phone.",
		h1: "Online stores built for the way Canadians actually buy",
		lead: "Ecommerce website development for Canadian retailers, makers and food businesses. We build on Shopify or WooCommerce, or custom when those genuinely do not fit, and we test checkout on a slow phone before launch.",
		sections: [
			{
				h2: "Choosing the platform before the design",
				body: [
					"The platform decision shapes your costs and limits for years, so it comes first. Shopify suits most stores that want to run without managing a server. WooCommerce suits businesses already on WordPress that want more control over content. A custom build makes sense when your pricing, bundles or ordering rules break both.",
					"We also look at what the store has to talk to. A point-of-sale system in a physical shop, a warehouse that needs order files, a wholesale price list for trade customers: each narrows the choice. A platform that looks cheaper can cost more once you add the apps needed to make those connections work.",
					"We write down why we recommend one over the others, including the monthly fees and app costs you will carry. If you are already on a platform that works, we keep you there.",
				],
			},
			{
				h2: "Canadian ecommerce website development details",
				body: [
					"Selling to Canadian buyers brings work that a template does not handle by default. Prices usually need GST/HST handling that varies by province. Shipping rates have to reflect real carrier costs to rural addresses, not just the nearest city. If you sell into Quebec, French-language rules may apply to your product pages and checkout. Your accountant and lawyer should confirm what applies to you; we make sure the store can do it.",
				],
				list: [
					"Tax settings checked against sample orders from several provinces",
					"Shipping rules tested with real postal codes, including remote ones",
					"Prices, currency and duties shown before the buyer reaches payment",
					"Order, refund and shipping emails rewritten in your voice",
				],
			},
			{
				h2: "Checkout is where stores lose sales",
				body: [
					"A beautiful product page means nothing if the checkout fails on a phone with a weak signal. Before launch we run test orders on a mid-range phone with a throttled connection, with and without an account, with a discount code, with a declined card. We fix every point where the buyer waits, gets confused or has to retype something.",
					"Guest checkout stays available unless you have a strong reason to force accounts. The fewer fields between cart and payment, the better.",
					"The pages around checkout get the same scrutiny. The cart shows the full cost, shipping included, before the buyer commits. Delivery estimates are realistic. The confirmation email arrives within a minute with the order number and what happens next. Card payments and the digital wallets your platform supports are tested in the same pass.",
				],
			},
			{
				h2: "Moving an existing store without losing data",
				body: [
					"If you are moving platforms, we migrate products, variants, images, customers and order history where the platforms allow it. Every old product and category address gets a redirect, so search rankings and links in old emails still land somewhere useful.",
					"At handover the store, the payment account and every app subscription are in your name. You get documentation of the theme, the apps installed and why, and how orders flow to fulfilment.",
				],
			},
		],
		deliverables: [
			"Platform recommendation with running costs written down",
			"Store build with your products, variants and collections loaded",
			"GST/HST and shipping rules configured and tested",
			"Checkout test report from slow-phone test orders",
			"Redirect map and data migration from your old store",
			"Store, payment and app accounts in your name with documentation",
		],
		faqs: [
			{
				q: "Is Shopify or WooCommerce better for a Canadian small business?",
				a: "Shopify is usually simpler to run because hosting, security and updates are handled for you, at the cost of monthly app fees. WooCommerce gives you more control and fewer subscriptions, but someone has to maintain the server and plugins. The right answer depends on your catalogue, who runs the store day to day and what it already connects to.",
			},
			{
				q: "How do you handle GST/HST on an online store?",
				a: "We configure the platform's tax settings so the correct rate applies based on where the order ships, then place test orders to several provinces to confirm the totals. We do not give tax advice. Your accountant should confirm your registration and obligations, and we set the store up to match what they tell you.",
			},
			{
				q: "Can you connect the store to my inventory and accounting software?",
				a: "Usually, yes. Orders, stock levels and payouts can flow into tools such as accounting software or a warehouse system so nobody retypes them. We scope each connection separately, test it with real orders and document how it works and what to check if it stops.",
			},
		],
		sectors: ["retail-ecommerce", "restaurants-food", "manufacturing"],
		related: ["storefront-operation", "integrations-automation", "paid-advertising"],
		insights: ["guest-checkout"],
	},
	{
		slug: "integrations-automation",
		name: "Integrations and automation",
		division: "build",
		serviceType: "Business process automation",
		title: "Workflow Automation for Canadian Businesses",
		description: "Workflow automation for Canadian businesses: connect your store, CRM, email tool and books so data stops being retyped, with every connection documented.",
		h1: "Connect the tools you already pay for, and stop retyping",
		lead: "Workflow automation and integrations for Canadian small businesses and nonprofits. We connect the store, the email tool, the warehouse and the books, so data moves on its own and every connection comes with documentation.",
		sections: [
			{
				h2: "Find the retyping first",
				body: [
					"Every small business has a person who copies data from one screen to another. Orders from the store into the accounting software. Web form enquiries into the CRM. Donations into a spreadsheet for receipting. Stock counts from the warehouse into the product listings. Each copy is a chance for a typo, and each one takes time that nobody budgets for.",
					"We start by mapping where data enters your business and every place it gets copied afterwards. That map usually shows two or three handoffs worth automating first, and a few that are cheaper to leave alone.",
					"For each handoff we note who does it, how often, how long it takes and what goes wrong when it is missed. A late donation receipt, a quote request that sat in an inbox over a weekend, an order shipped from stock that was already sold: those costs decide the order of work, and the first phase is the connection that pays back fastest.",
				],
			},
			{
				h2: "How we build workflow automation",
				body: [
					"Where a tool such as Zapier or Make does the job reliably, we use it, because you can see and change it yourself. Where the volume, the logic or the cost outgrows those tools, we write a small service that talks to each system's API directly. The scope explains which approach each connection uses and what it will cost you to run.",
				],
				list: [
					"Store orders into accounting, with tax and fees split correctly",
					"Web form and quote requests into your CRM or scheduling tool",
					"Inventory levels kept in step across store and marketplaces",
					"New customers or donors added to the right email list with consent recorded",
					"Weekly figures pulled into a single report without manual exports",
				],
			},
			{
				h2: "When a connection fails",
				body: [
					"Integrations break. An app changes its API, a password expires, a product has a character the other system rejects. The question is whether you find out in five minutes or at month end.",
					"Every connection we build logs what it did and alerts a named person when it fails, with enough detail to know which record is stuck. Where it is safe, failed items retry on their own. Where it is not, such as a payment, they wait for a human.",
				],
			},
			{
				h2: "Documentation for every connection",
				body: [
					"For each integration you get a one-page description: what triggers it, what data moves, which accounts it uses, what the alerts mean and how to pause it. The accounts and API keys are in your name. If you replace a tool later, whoever does the work can see exactly what depends on it.",
					"Before handover we walk the person who owns each tool through the alerts and the pause switch, so a failure on a Saturday does not wait for us. When a connected app announces a change to its API, the documentation tells you which connections to retest.",
				],
			},
		],
		deliverables: [
			"Map of where data enters your business and where it is retyped",
			"Written scope and fixed price for each connection",
			"Working integrations built in your accounts",
			"Failure alerts sent to a named person on your team",
			"One-page documentation for every connection",
		],
		faqs: [
			{
				q: "Should I use Zapier or a custom integration?",
				a: "Use a no-code tool when the workflow is simple, the volume is modest and you want to be able to change it yourself. Choose custom code when the logic has many conditions, the monthly task fees get large, or the tools involved are not supported. Many clients end up with a mix, and the documentation covers both.",
			},
			{
				q: "Can you connect software that does not have a built-in integration?",
				a: "Often, yes. If a tool has an API, we can usually read from it and write to it. If it only exports files, we can automate the export and import on a schedule. If it has neither, we will tell you plainly, and sometimes the better answer is to replace that tool.",
			},
			{
				q: "Is it safe to give an integration access to my accounts?",
				a: "We give each connection only the permissions it needs, using API keys or app connections created in your account rather than shared passwords. You can see and revoke every one. Personal information is moved only where needed and handled in line with PIPEDA or the provincial law that applies to you.",
			},
		],
		sectors: ["trades-contractors", "retail-ecommerce", "nonprofits-charities", "manufacturing"],
		related: ["web-application-development", "ecommerce-development", "analytics-reporting"],
		insights: ["quote-form-funnel"],
	},

	// --------------------------------------------------------------- MARKET
	{
		slug: "paid-advertising",
		name: "Paid advertising",
		division: "market",
		serviceType: "Pay-per-click advertising management",
		title: "Google & Meta Ads Management in Canada",
		description: "Google and Meta ads management in Canada, run from ad accounts you own. Every dollar tagged to a product or offer, with a monthly report written in revenue.",
		h1: "Search and social ads, reported in revenue",
		lead: "Google and Meta ads management for Canadian small businesses, run from ad accounts you own. Every dollar is tagged to a product or an offer, so the monthly report tells you what made money.",
		sections: [
			{
				h2: "Your ad accounts, your data",
				body: [
					"We never run your ads from an account we own. If you already have Google Ads or Meta accounts, we are added as users. If you do not, we create them under your business and you hold the admin role. The platforms bill your card, so ad spend and our fee never mix, and if you leave, every campaign, audience and year of data stays with you.",
					"Before taking over an existing account, we audit it: what has been spent recently, which campaigns produced orders, which conversion actions are counted twice, and which settings were left on platform defaults, such as broad audience expansion or automatic placements on low-quality apps and sites. You get that audit in writing, whether or not you go ahead with us.",
				],
			},
			{
				h2: "Tracking comes before the first ad",
				body: [
					"An ad account without working conversion tracking is guessing. Before we spend anything, we confirm that a purchase, a booking or a quote request is recorded once, with its value, and tied to the campaign that produced it. We test it with real submissions and check the numbers match your store or inbox.",
					"Then each campaign is tagged to a product or an offer. That is what lets the monthly report say which offer paid for itself and which did not, instead of listing clicks and impressions.",
				],
			},
			{
				h2: "How we manage Google and Meta ads",
				body: [
					"Search ads catch people who already know what they want, so they usually come first: they are closest to a sale. Social ads on Facebook and Instagram are better at reaching people who have not started looking, and they need strong images and video to work. We decide the split by what you sell and the measure we agreed at the start, not by habit.",
					"Creative wears out. The same image shown to the same audience for weeks gets ignored, and costs creep up. We plan new images and video ahead of time so fresh versions are ready before results drop, using material from your own shoots where we can.",
				],
				list: [
					"Keyword and audience research based on how your buyers describe the problem",
					"Ad copy and creative variations, tested against each other",
					"Landing pages matched to each ad, so the promise and the page agree",
					"Negative keywords and placement exclusions reviewed weekly",
					"Budgets shifted towards what produces orders or enquiries",
				],
			},
			{
				h2: "The monthly report, and the rules that apply",
				body: [
					"Each month you get a short report in plain language: spend, revenue or enquiries by offer, cost per order, what we changed and what we plan to change. You will know within a week if a campaign is losing money, and we pause it rather than wait for the report.",
					"Some fields have advertising rules. Regulated health professions have rules set by their colleges about testimonials and claims. We write within those limits, but your college is the authority on what you may say.",
				],
			},
		],
		deliverables: [
			"Google Ads and Meta ad accounts owned by your business",
			"Conversion tracking tested against real orders or enquiries",
			"Campaigns tagged to individual products or offers",
			"Ad copy, creative variations and matching landing pages",
			"Monthly plain-language report in revenue and cost per order",
		],
		faqs: [
			{
				q: "How much should a small business spend on Google Ads?",
				a: "Enough to collect useful data within a few weeks, and no more than you can afford to learn with. We work it out from what a customer is worth to you and what a click costs in your market, then start small. The scope states the starting budget and the point at which we would recommend raising or cutting it.",
			},
			{
				q: "Google Ads or Facebook ads: which should I start with?",
				a: "If people already search for what you sell, start with search ads, because those buyers are closest to deciding. If your product is new, visual or bought on impulse, social ads usually find buyers sooner. Many businesses end up running both, with search taking the larger share of a modest budget.",
			},
			{
				q: "Can I see my ad account and pause campaigns myself?",
				a: "Yes. The accounts belong to you and you hold the admin role, so you can log in, see every campaign and pause anything at any time. Most clients prefer to read the monthly report and leave the day-to-day changes to us, but nothing is hidden from you.",
			},
			{
				q: "What if my ads are getting clicks but no sales?",
				a: "Clicks without sales usually point to one of three things: tracking that misses conversions, an ad that promises something the landing page does not deliver, or a checkout or form that loses people. We check them in that order, because each is cheaper to fix than spending more on ads.",
			},
		],
		sectors: ["trades-contractors", "retail-ecommerce", "fitness-wellness", "healthcare-clinics"],
		related: ["analytics-reporting", "copywriting-landing-pages", "video-photography"],
		insights: ["quote-form-funnel"],
	},
	{
		slug: "seo",
		name: "Search optimization (SEO)",
		division: "market",
		serviceType: "Search engine optimization",
		title: "SEO Services for Canadian Small Businesses",
		description: "SEO services for Canadian small businesses: we fix what keeps pages out of Google, then write pages that answer what buyers actually type. No link schemes.",
		h1: "Search optimization that starts with what is broken",
		lead: "SEO services for Canadian small businesses and practices. We fix what keeps your pages out of search results, then write pages that answer what buyers actually type. No link schemes, ever.",
		sections: [
			{
				h2: "Technical fixes before new content",
				body: [
					"Writing new pages does little if search engines cannot crawl, index or understand the ones you have. So we start with Search Console and a crawl of your site. Common finds: pages blocked by a stray setting, duplicate versions of the same page competing with each other, old addresses that redirect in chains, templates so slow that phones give up, and titles that are identical across dozens of pages.",
					"These fixes are unglamorous and often bring the fastest gains, because they release value already sitting in your site. Each one goes into a written list ranked by the traffic or enquiries it affects, so the first week goes on the pages that matter, not on warnings a tool flags for every site on the internet.",
				],
			},
			{
				h2: "Pages built around what buyers type",
				body: [
					"Your customers do not search for your service names. They search for their problem, in their words, often with a city attached. We collect those phrases from Search Console, from the questions your staff answer every day, and from the searches that already show your site but rarely get clicked.",
					"Each important phrase gets one page that answers it properly: what the problem is, how you solve it, what it involves, and what to do next. One page per problem beats one page that lists eleven, both for rankings and for the person reading it.",
					"Existing pages that already appear in results but rarely get clicked are often the quickest win. A clearer title, a direct answer near the top, or a missing section on cost or timing can be enough.",
				],
				list: [
					"Service and location pages that match real search phrases",
					"Titles and descriptions written to earn the click",
					"Structured data so search engines read your business details correctly",
					"Short, direct answers that AI search tools can quote",
					"Internal links that lead from general pages to specific ones",
				],
			},
			{
				h2: "Local search for Canadian businesses",
				body: [
					"If you serve a city or a region, your Google Business Profile matters as much as your site. We make sure your name, address, phone and hours agree everywhere they appear, choose the right categories, and set up a simple routine for asking happy customers for reviews. Service area businesses get pages for the areas they actually work in, written about those areas rather than copied with the town name changed.",
					"We also check the directories that matter in your field, correct old addresses or phone numbers left over from a move, and make sure holiday hours are updated before the holiday, not after a customer finds the door locked.",
				],
			},
			{
				h2: "Why our SEO services skip link schemes",
				body: [
					"Bought links, private blog networks and link swaps can lift rankings for a while. Then a search update or a manual penalty removes the gain and sometimes more. We earn links the slow way: pages worth citing, local directories that are real, and partners who would link to you anyway.",
					"Reporting focuses on what search brings in: enquiries and sales from organic visits, and the queries driving them, not a list of ranking positions.",
				],
			},
		],
		deliverables: [
			"Technical audit with fixes ranked by impact",
			"Search Console and analytics set up in your accounts",
			"Keyword map tying each buyer phrase to one page",
			"New and rewritten pages for your priority searches",
			"Google Business Profile review and clean-up",
			"Monthly report on enquiries and sales from organic search",
		],
		faqs: [
			{
				q: "How long does SEO take to show results?",
				a: "Technical fixes can show up as soon as search engines recrawl the affected pages. New pages take longer, because they have to be discovered, indexed and trusted, and competitive phrases take longest. We agree one measure at the start, such as enquiries from organic search, and report on it monthly so you can see the direction early.",
			},
			{
				q: "Do I need SEO if I already run Google Ads?",
				a: "Ads stop the day the budget stops. Organic search keeps bringing visits from pages you already paid to build. The two also help each other: ad data shows which phrases convert, and those phrases are the ones worth building pages for. Most small businesses benefit from both, weighted by budget and how competitive their market is.",
			},
			{
				q: "Will my site show up in AI search answers?",
				a: "AI search tools draw on pages that are crawlable, clearly structured and answer questions directly. We write sections and FAQs that stand on their own, add structured data, and make sure nothing blocks the crawlers you want. Nobody controls which sources an AI tool picks, but these steps make your pages easier to use.",
			},
			{
				q: "What is a link scheme, and why do you avoid them?",
				a: "A link scheme is any attempt to buy or trade links to manipulate rankings: paid links, link swaps, networks of sites built only to link out. Search engines treat them as spam. They can work briefly, then bring penalties that take months to recover from. We earn links with pages people actually want to cite.",
			},
		],
		sectors: ["professional-services", "real-estate", "trades-contractors", "manufacturing"],
		related: ["website-design", "copywriting-landing-pages", "analytics-reporting"],
		insights: ["one-page-per-problem", "stale-listings"],
	},
	{
		slug: "email-marketing",
		name: "Email and retention",
		division: "market",
		serviceType: "Email marketing",
		title: "Email Marketing Services in Canada",
		description: "Email marketing services in Canada: CASL-aware consent, welcome and abandoned cart flows, and a sending schedule your list will tolerate, in an account you own.",
		h1: "Email your customers will actually open",
		lead: "Email marketing services for Canadian stores, nonprofits and studios. We build welcome flows, abandoned cart sequences and a sending schedule your list will tolerate, written by people who unsubscribe from lazy email too.",
		sections: [
			{
				h2: "Consent comes first in Canada",
				body: [
					"Canada's anti-spam law, CASL, requires consent before you send commercial email, a clear way to unsubscribe in every message, and identification of who is sending. Some consent is express, such as a ticked sign-up box. Some is implied, such as a recent purchase, and that kind expires.",
					"We set up your sign-up forms to record when and how each person agreed, tag implied consent so it can be re-confirmed before it lapses, and make unsubscribing take one click. This is not legal advice. If your situation is unusual, check with your lawyer. Our job is to make the system keep the records CASL expects.",
					"Segments are built from what people did, not only who they are: bought once, bought twice, opened but never bought, gave monthly. Each group gets messages that fit, instead of everyone getting the same blast.",
				],
			},
			{
				h2: "The flows that run while you sleep",
				body: [
					"Most of the revenue from email comes from automated messages triggered by what a person did, not from newsletters. We build those first, because they keep working without anyone pressing send.",
					"Each flow is a short sequence with a clear end, timed to the buying cycle of what you sell. Someone who browsed a winter coat hears from you within a day. A donor who gave once gets a thank-you straight away, and an invitation to give monthly only after they have seen what their first gift did.",
				],
				list: [
					"Welcome series that introduces you and makes one clear offer",
					"Abandoned cart and browse reminders with a sensible delay",
					"Post-purchase messages: delivery, how to use it, when to reorder",
					"Win-back emails for customers who have gone quiet",
					"Donor thank-you and monthly-giving upgrade paths for nonprofits",
				],
			},
			{
				h2: "How our email marketing services keep lists healthy",
				body: [
					"Inbox placement depends on your domain's reputation. We set up SPF, DKIM and DMARC on your domain so mailbox providers can verify your mail is really from you. We remove addresses that bounce, stop mailing people who have not opened in a long time, and keep the schedule steady rather than bursting when a sale comes around.",
					"Every message is written for one reader with one reason to click. Subject lines say what is inside. If an email does not have something worth saying, we would rather not send it.",
					"Before a larger send we preview it in the main email apps and on a phone in dark mode, click every link, and read the plain-text version. Images carry alt text, so the message still makes sense when images are blocked, which many workplace email systems do by default.",
				],
			},
			{
				h2: "Your list stays in your account",
				body: [
					"The email platform account is in your name, so the list, the templates and the history belong to you. Each month you see revenue or donations from email, unsubscribe rates by message, and what we plan to test next. If a flow stops earning, we rewrite or retire it.",
				],
			},
		],
		deliverables: [
			"Email platform account set up in your name",
			"Sign-up forms that record consent for CASL",
			"SPF, DKIM and DMARC configured on your domain",
			"Welcome, abandoned cart and post-purchase flows written and live",
			"Branded templates your team can reuse",
			"Monthly report on revenue or donations from email",
		],
		faqs: [
			{
				q: "Can I email people who gave me their business card?",
				a: "Possibly, but carefully. CASL allows some implied consent where someone published or handed over their address and the message relates to their role, but the rules have conditions and time limits. The safer path is to ask for express consent in your first message. For anything unclear, check with your lawyer before importing those contacts.",
			},
			{
				q: "How often should a small business send marketing email?",
				a: "As often as you have something useful to say, and consistently enough that subscribers recognise you. For many small businesses that is a few times a month, plus automated flows. We watch unsubscribes and engagement per message, and slow down if the list shows signs of fatigue.",
			},
			{
				q: "Which email platform should I use?",
				a: "Choose one that connects cleanly to your store or donation tool, supports the automated flows you need, and is priced for your list size. If you already use one and it does those things, we stay on it. If you switch, we move the list, the consent records and the tags so nothing is lost.",
			},
		],
		sectors: ["retail-ecommerce", "nonprofits-charities", "fitness-wellness"],
		related: ["ecommerce-development", "copywriting-landing-pages", "analytics-reporting"],
		insights: ["monthly-giving-page"],
	},
	{
		slug: "analytics-reporting",
		name: "Analytics and reporting",
		division: "market",
		serviceType: "Marketing analytics",
		title: "Marketing Analytics & Reporting in Canada",
		description: "Marketing analytics and reporting in Canada: GA4 and conversion tracking set up, then one dashboard with orders, revenue, cost per order and traffic source.",
		h1: "One dashboard with the numbers you actually check",
		lead: "Marketing analytics and reporting for Canadian small businesses. We fix the tracking, then build one dashboard with orders, revenue, cost per order and where buyers came from, so a losing campaign shows up within a week.",
		sections: [
			{
				h2: "Most tracking is quietly wrong",
				body: [
					"Analytics often looks fine until you compare it with the bank account. Purchases counted twice because a thank-you page reloads. Form submissions never recorded because the form lives in an embedded widget. Traffic from email showing up as direct because the links are not tagged. Ad platforms each claiming the same sale.",
					"We audit what you have against what actually happened: orders in the store, enquiries in the inbox, donations in the finance tool. Every gap gets a fix or a written note explaining why the number will never match exactly.",
					"We also check the plumbing nobody sees: whether a staging site is sending test data into the live property, whether staff visits inflate the numbers, whether internal links carry tags that break attribution, and whether the property uses the right time zone and currency. Small settings like these make every later report slightly wrong.",
				],
			},
			{
				h2: "What we set up",
				list: [
					"GA4 with purchases, bookings, quote requests and sign-ups as named events",
					"Conversion values passed through, so revenue reports are real",
					"Consistent link tagging for email, social and ads",
					"Ad platform conversions tied to the same events",
					"A consent banner that respects visitor choices",
				],
				body: [
					"All of this lives in accounts you own. The tag manager, the analytics property and the dashboard are created under your business, with us added as users.",
					"When the sale is confirmed on another domain, such as a hosted payment page or a scheduling widget, we make sure the conversion is still recorded and credited to the right source. Where browser tracking falls short, we send purchase events from the store's server, so orders are counted even when a script is blocked.",
				],
			},
			{
				h2: "Analytics and reporting you can read in five minutes",
				body: [
					"The dashboard shows the handful of figures you check anyway, on one screen: orders or enquiries, revenue, cost per order, and the channels that sent them. Before we build it we agree one measure that matters most, and it sits at the top.",
					"Each month you also get a short written summary: what changed, why we think it changed, and what we recommend. Plain language, no charts that need a legend to decode. If a campaign starts losing money, you hear about it that week rather than at month end.",
					"If we also run your ads or search work, the dashboard uses the same figures we report on, so there is one source of truth rather than three platforms each claiming the credit. If another agency runs your ads, they can be given access to the same view.",
				],
			},
			{
				h2: "Privacy and consent",
				body: [
					"Analytics collects data about people, so PIPEDA and provincial privacy laws apply, and Quebec's privacy law has its own consent requirements for tracking. We configure the consent banner, limit what is collected and document what each tool records. Your privacy policy should say the same thing; your lawyer can confirm the wording.",
				],
			},
		],
		deliverables: [
			"Tracking audit comparing analytics with real orders and enquiries",
			"GA4 and tag manager configured in your accounts",
			"Link tagging conventions for every channel",
			"One dashboard built around the measure we agreed",
			"Monthly written summary in plain language",
			"Notes on what each tool records, for your privacy policy",
		],
		faqs: [
			{
				q: "Why don't my Google Analytics numbers match my store's sales?",
				a: "Some visitors block tracking, some purchases happen across devices, and some setups count events twice or not at all. A small gap is normal. A large one means something is broken. We compare a sample of real orders with what analytics recorded, find the cause and fix it, then document the remaining difference so you know what to expect.",
			},
			{
				q: "What should a small business track in its marketing reports?",
				a: "Start with what pays the bills: orders or enquiries, revenue, cost to get each one, and the channel that produced it. Add one or two figures that warn you early, such as checkout drop-off or form completion. Most other metrics are interesting but rarely change a decision, so they stay out of the main dashboard.",
			},
			{
				q: "Do I need a cookie consent banner in Canada?",
				a: "Canadian privacy law expects meaningful consent for collecting personal information, and Quebec has stricter rules on tracking technologies. Many businesses use a consent banner to meet those expectations. We set one up that actually respects the choice a visitor makes. Your lawyer should confirm what your organization needs.",
			},
		],
		sectors: ["retail-ecommerce", "professional-services", "nonprofits-charities"],
		related: ["paid-advertising", "seo", "integrations-automation"],
		insights: ["quote-form-funnel"],
	},

	// --------------------------------------------------------------- CREATE
	{
		slug: "video-photography",
		name: "Video and photography",
		division: "create",
		serviceType: "Video production and photography",
		title: "Commercial Video & Photography in Canada",
		description: "Commercial video and photography in Canada: product films, founder pieces and ad cuts sized for every placement, delivered with the raw files you own.",
		h1: "Video and photos made for where they will be used",
		lead: "Commercial video and photography for Canadian businesses: product films, founder pieces and ad cuts sized for every placement. Shot, edited and delivered with the raw files, because they are yours.",
		sections: [
			{
				h2: "The shot list is written before the camera comes out",
				body: [
					"A shoot without a plan produces a lot of footage and very little you can use. So we start with where the material will live: the homepage hero, product pages, a vertical ad, a menu, a staff page. Each placement has a size, a length and a job, and the shot list is written backwards from them.",
					"You approve the shot list, the locations and the people on camera before shoot day. Anyone who appears signs a release, so you can use the material without wondering later.",
					"The day itself is planned hour by hour. Products that need the same lighting are shot together. Staff on camera are booked for one window, so nobody is pulled off the floor all day. Food, stock and the space are ready before setup starts. A tight schedule is often the difference between a full library and a handful of usable shots.",
				],
			},
			{
				h2: "What a commercial video and photography shoot produces",
				body: [
					"One well-planned shoot day can supply months of material. We aim to capture everything a channel will need while the lights are set up, rather than coming back for each request. Where it makes sense, stills and video are shot on the same day so they match in colour and styling.",
				],
				list: [
					"Product films and close-up detail shots for store pages",
					"Founder or team pieces that explain why you do the work",
					"Ad cuts in vertical, square and widescreen formats",
					"Still photography of products, spaces and people at work",
					"Short clips sized for social posts and stories",
				],
			},
			{
				h2: "Editing for the person scrolling",
				body: [
					"Most video is watched on a phone, often with the sound off. Every cut opens with the point, not a logo animation, and carries burned-in or uploaded captions. Ad versions are cut in several lengths so the platform can test them. Photos are colour-corrected to match each other and exported at the sizes your site and listings actually use, so pages stay fast.",
					"You review rough cuts on a link, mark changes against a timestamp, and approve the final versions. Before delivery we check each file against its platform: the safe zones where captions and buttons cover a vertical frame, the first frame that becomes the thumbnail, and the file size limits for ads.",
				],
			},
			{
				h2: "Raw files, licensing and storage",
				body: [
					"At delivery you receive the edited files, the raw footage and the full-resolution photos, in a shared drive you own. You can re-edit them, hand them to another editor, or cut new versions next year without asking us. Files are named and foldered by product, date and placement, so a vertical cut of one product is easy to find next spring.",
					"If we use licensed music or stock elements, we tell you exactly what the licence covers and for how long. Fonts, logos and graphics come from your brand files, so everything matches.",
				],
			},
		],
		deliverables: [
			"Shot list and placement plan approved before the shoot",
			"Signed releases for everyone on camera",
			"Edited videos in every size the placements need",
			"Colour-corrected photos exported for web and print",
			"Captions for every video",
			"Raw footage and full-resolution files in a drive you own",
		],
		faqs: [
			{
				q: "How should I prepare for a commercial photo or video shoot?",
				a: "Approve the shot list, then get the space and products ready: clean, stocked, with labels facing out. Tell staff who will appear and when. Have any props, uniforms or plated dishes ready at the times on the schedule. The more that is set before the crew arrives, the more of the day goes into shooting rather than waiting.",
			},
			{
				q: "Do I get the raw footage from the shoot?",
				a: "Yes. Raw footage and full-resolution photos are part of every delivery, in a drive you own. Many agencies keep them and charge for new edits later. We think the material is yours because you paid for it to be made, and you should be free to re-cut it or give it to another editor.",
			},
			{
				q: "What video formats do I need for ads and social media?",
				a: "Most placements fall into three shapes: vertical for stories and short-form video, square or near-square for feeds, and widescreen for websites and YouTube. Each also has preferred lengths. We plan the shoot so every key moment is framed to work in all three, then cut separate versions rather than cropping one awkwardly.",
			},
		],
		sectors: ["restaurants-food", "retail-ecommerce", "fitness-wellness", "real-estate"],
		related: ["paid-advertising", "brand-design", "podcast-production"],
		insights: ["restaurant-photo-library"],
	},
	{
		slug: "podcast-production",
		name: "Podcast and audio",
		division: "create",
		serviceType: "Podcast production",
		title: "Podcast Production Services in Canada",
		description: "Podcast production services in Canada: recording set-up, editing, show notes, distribution to every app and clips for social. You talk, we handle the rest.",
		h1: "You talk. We handle everything after the microphone.",
		lead: "Podcast production services for Canadian businesses, nonprofits and practitioners. We set up the recording, edit each episode, publish it to every podcast app and cut clips for social, so your part ends when you stop talking.",
		sections: [
			{
				h2: "Decide what the show is for",
				body: [
					"A podcast is a long commitment, so we start with why it exists. Some shows build trust with prospects who need time before they buy. Some keep members, donors or students connected between events. Some are a reason to have conversations with people you want to know. Each goal changes the format, the length and how often you publish.",
					"We write a one-page show plan: who it is for, the format, a working list of first episodes, and the one measure that will tell you whether it is worth continuing.",
					"We also look at what already exists. If established shows cover your topic well, a narrower angle or a different format, such as short episodes that each answer one client question, gives listeners a reason to pick yours.",
				],
			},
			{
				h2: "Recording that sounds good from a home office",
				body: [
					"Most of our clients record remotely, so sound quality depends on the room and the gear. We recommend a microphone that suits your budget, help you set it up, and record each speaker on a separate track so a cough or crosstalk can be fixed without damaging the other voice. Before the first real episode we run a test recording and adjust.",
					"For video podcasts we add camera framing and lighting notes, so the video version is good enough to cut into clips. Guests get a short checklist before they join: headphones on, notifications off, laptop on mains power, and a backup recording running on their side.",
				],
			},
			{
				h2: "What our podcast production covers after you hit stop",
				body: [
					"Editing removes the false starts, long pauses and tangents without making the conversation sound clipped. Levels are balanced between speakers and the episode is mastered to the loudness podcast apps expect, so listeners do not reach for the volume.",
					"Each episode goes to a review link before it is published. You can mark a sentence to cut against its timestamp, approve the show notes and check the clips in one pass. Episodes then go out on a fixed day, because a predictable schedule is easier for listeners to fit into their week.",
				],
				list: [
					"Edited and mastered episode audio",
					"Intro, outro and music cleared for use",
					"Show notes and episode titles written to be found in search",
					"A full transcript for accessibility and your website",
					"Short audio and video clips cut for social",
					"Publishing to the podcast host, then out to Apple Podcasts, Spotify and others",
				],
			},
			{
				h2: "The feed belongs to you",
				body: [
					"Your podcast's RSS feed is its address. If an agency holds the hosting account, it effectively holds your show. We set up the hosting account in your name, list the show on the major apps under your details, and keep the raw recordings and project files in a drive you own. If you take production in-house later, nothing needs to move.",
					"Each month you see downloads by episode and the apps people listened in, next to the measure we agreed at the start, such as enquiries that mention the show.",
				],
			},
		],
		deliverables: [
			"One-page show plan with format and first episode list",
			"Recording set-up and a test session",
			"Edited, mastered episodes ready to publish",
			"Show notes, titles and full transcripts",
			"Social clips for each episode",
			"Podcast hosting and app listings in your name",
		],
		faqs: [
			{
				q: "What equipment do I need to start a podcast?",
				a: "Less than most people expect. A decent USB or XLR microphone, a pair of closed headphones and a quiet room with soft surfaces will get you clean audio. The room matters more than the microphone. We recommend gear to fit your budget and run a test recording so we can fix problems before the first real episode.",
			},
			{
				q: "Can guests record remotely?",
				a: "Yes. Remote recording tools capture each person's audio locally on their own computer and upload it after the conversation, which avoids the dropouts of a video call. We send guests a short guide on headphones, room and microphone placement, and join the session to watch the levels if you want us there.",
			},
			{
				q: "How do I get my podcast on Apple Podcasts and Spotify?",
				a: "A podcast host publishes your show as an RSS feed, and you submit that feed once to each app. After that, every new episode appears automatically. We set up the host in your name, submit the feed to the major apps and confirm the listings show the right artwork, description and category.",
			},
		],
		sectors: ["professional-services", "nonprofits-charities", "education"],
		related: ["video-photography", "copywriting-landing-pages", "seo"],
		insights: [],
	},
	{
		slug: "brand-design",
		name: "Brand and design assets",
		division: "create",
		serviceType: "Brand identity design",
		title: "Logo & Brand Identity Design in Canada",
		description: "Logo and brand identity design in Canada: logo, type, colour and a usage guide short enough to read, plus templates so anyone can make an on-brand graphic.",
		h1: "A brand kit simple enough that people use it",
		lead: "Logo and brand identity design for Canadian small businesses and nonprofits. You get a logo, type, colour and a usage guide short enough that people read it, built so an intern can make an on-brand graphic without asking anyone.",
		sections: [
			{
				h2: "Start with how the brand gets used",
				body: [
					"A logo looks great on a presentation board and then has to work on a favicon, a van door, an embroidered shirt, a social profile picture and a black-and-white invoice. We list every place your brand will appear before we draw anything, and design for the hardest of them.",
					"We also ask what must stay. If customers already recognise a colour or a mark, a refresh can keep that recognition rather than starting from nothing.",
					"We review what you have now as well: old logo files, signage, uniforms, the website, the forms customers fill in. A short audit shows where the brand is applied inconsistently and which pieces will need replacing at launch, so the change can be planned and budgeted rather than discovered.",
				],
			},
			{
				h2: "What goes into the brand identity design",
				list: [
					"Primary logo, plus stacked, horizontal and icon-only versions",
					"Single-colour and reversed versions for dark backgrounds",
					"Colour palette with print and screen values",
					"Typefaces for headings and body text, with web-safe fallbacks",
					"A short usage guide with real do and don't examples",
					"Templates for social posts, presentations and documents",
				],
				body: [
					"You see two or three directions early, with each one shown on your actual materials: a homepage, a product label, a social post. Choosing between them is easier when you can see them working. The chosen direction is then refined over a few rounds, with each round tested on those same materials.",
				],
			},
			{
				h2: "A guide short enough to read",
				body: [
					"Long brand books sit unopened in a shared folder. Ours fit on a few pages: which logo to use where, the colours and their codes, which fonts to type in, how much space to leave around the mark, and a handful of examples of right and wrong. If a rule does not prevent a real mistake, it does not go in. A few lines on tone of voice sit alongside the visual rules: how you sound in a social caption compared with an invoice reminder, and the words you use and avoid.",
					"Templates do the rest. Social graphics, slide decks and letterhead are set up in tools your team already uses, with the fonts and colours locked in, so a new staff member can make something on-brand on their first day.",
				],
			},
			{
				h2: "Files you own, licences that are clear",
				body: [
					"At handover you receive every logo in vector and image formats, the editable source files and the templates. If a typeface needs a licence, we tell you which one, what it covers and where to buy it, so you are not caught out when the brand appears on packaging or merchandise later.",
					"We plan the rollout with you: which items change first, which old stock can be used up, and the order in which the website, social profiles, signage and print switch over. Colours are checked on paper samples as well as screens, because a colour that looks right on a monitor can print muddy.",
				],
			},
		],
		deliverables: [
			"Logo in every version and format you need",
			"Colour palette with print and screen values",
			"Type system with licensing notes",
			"A short usage guide with examples",
			"Editable templates for social, slides and documents",
			"All source files in a drive you own",
		],
		faqs: [
			{
				q: "What file formats should I get for my logo?",
				a: "At minimum: a vector file such as SVG, EPS or PDF for print and signage, PNG files with transparent backgrounds for screens, and a version sized for social profile pictures and the browser tab. You should also receive single-colour and reversed versions. If a printer or sign shop asks for something else, the vector file can produce it.",
			},
			{
				q: "Should I refresh my brand or start over?",
				a: "Refresh if customers recognise your current name, colour or mark and the problem is that it looks dated or works badly in some places. Start over if the brand misrepresents what you do now, confuses people with a competitor, or was never really designed. We show you both options when the answer is not obvious.",
			},
			{
				q: "Can my team make graphics without a designer?",
				a: "That is the goal. We build templates in a tool your team already uses, with the logo, colours and fonts locked in and the editable areas clear. Combined with a short guide, most people can make a social post, flyer or slide that looks right without asking a designer to check it.",
			},
		],
		sectors: ["professional-services", "restaurants-food", "fitness-wellness", "nonprofits-charities"],
		related: ["website-design", "merchandise", "copywriting-landing-pages"],
		insights: [],
	},
	{
		slug: "copywriting-landing-pages",
		name: "Copy and landing pages",
		division: "create",
		serviceType: "Copywriting",
		title: "Landing Page Copywriting in Canada",
		description: "Landing page copywriting in Canada: pages with one job and one ask, written in the words your customers use when they describe the problem you solve.",
		h1: "Pages with one job and one ask",
		lead: "Landing page copywriting for Canadian businesses and practices. Every page has one job and one ask, written in the language customers use when they complain about the problem you solve. That language converts. Jargon does not.",
		sections: [
			{
				h2: "Find the words before writing any",
				body: [
					"The best copy is mostly borrowed. Your customers have already described their problem, in reviews, support emails, sales calls and questions they ask on the phone. They describe it in plain, specific, slightly annoyed language, and that is the language a buyer recognises on a landing page.",
					"We collect those phrases before writing. We read your reviews and your competitors' reviews, listen to recorded calls if you have them, look at the searches that bring people to your site, and talk to the person who answers the phone. The phrases that keep coming up become headlines and subheads.",
					"We also write down the objections: price, timing, trust, a bad experience with someone else. Each one needs an answer on the page, placed where a reader would raise it.",
				],
			},
			{
				h2: "How a landing page is put together",
				body: [
					"A landing page has one audience, one offer and one action. Everything else is a reason to leave. Proof goes where doubt appears, not in a block at the bottom: a review beside the price, a photo of finished work beside the claim about quality, the guarantee next to the button. Forms ask only for what you need to respond, because every extra field is a reason to stop.",
					"The order of the page usually follows the questions a buyer has in their head:",
				],
				list: [
					"What is this, and is it for me?",
					"What problem does it solve, in my words?",
					"How does it work, and what do I get?",
					"Why should I believe you?",
					"What does it involve, and what happens after I click?",
					"What do I do now?",
				],
			},
			{
				h2: "Landing page copywriting tied to the traffic",
				body: [
					"A page written for an ad has to keep the ad's promise in its first line, or people leave. A page written for search has to answer the phrase someone typed. A page for an email list can assume more trust. We write each page for the traffic that will arrive, and where several sources send people to one offer, we write separate versions rather than one page that half fits all of them.",
					"We test what we can. Headlines and the main call to action are the usual candidates. Changes are made one at a time, so you know what moved the number.",
					"The writing is done for a phone first. Headlines are short enough not to wrap awkwardly, paragraphs stay brief, and the call to action appears early for readers who arrive already convinced.",
				],
			},
			{
				h2: "Claims you can stand behind",
				body: [
					"Every claim on the page needs to be true and provable. If you work in a regulated health profession, your college has rules about testimonials, comparisons and outcome claims, and we write within them. Your college is the authority on what you may say, so check anything you are unsure about before the page goes live. The same standard applies to guarantees, price claims and comparisons with competitors: if you cannot show the evidence, it stays off the page.",
				],
			},
		],
		deliverables: [
			"Research notes with the customer phrases we found",
			"Landing page copy with headline variations",
			"Calls to action matched to each traffic source",
			"Page structure and wireframe notes for the designer",
			"A test plan for headlines and the main call to action",
		],
		faqs: [
			{
				q: "What is the difference between a landing page and a homepage?",
				a: "A homepage serves everyone: new visitors, returning customers, job seekers, partners. It has to offer many paths. A landing page serves one audience arriving for one reason, usually from an ad, an email or a specific search, and asks them to take one action. Removing the other paths is what makes it convert better for that audience.",
			},
			{
				q: "How long should a landing page be?",
				a: "As long as it takes to answer the buyer's questions, and no longer. A simple, low-cost offer can work in a single screen. A larger commitment, such as a service contract or an expensive product, usually needs more proof and detail. We decide length by the questions real buyers ask before saying yes.",
			},
			{
				q: "Can you rewrite copy for a page I already have?",
				a: "Yes. We start by finding where the page loses people, using analytics and by reading it the way a first-time visitor would. Then we rewrite the headline, the order of the argument and the call to action. Often the existing design can stay; it is the words and the sequence that need work.",
			},
		],
		sectors: ["professional-services", "trades-contractors", "healthcare-clinics"],
		related: ["paid-advertising", "website-design", "email-marketing"],
		insights: ["one-page-per-problem", "quote-form-funnel"],
	},

	// ----------------------------------------------------------------- SELL
	{
		slug: "storefront-operation",
		name: "Storefront operation",
		division: "sell",
		serviceType: "Ecommerce store management",
		title: "Ecommerce Store Management in Canada",
		description: "Ecommerce store management in Canada: we run catalogue, pricing, promotions and customer questions day to day. You keep the accounts and read a weekly summary.",
		h1: "We run your online store. You read the weekly summary.",
		lead: "Ecommerce store management for Canadian businesses that want the store to keep trading without someone living in the admin panel. We handle the catalogue, pricing, promotions and customer questions day to day, under rules you set.",
		sections: [
			{
				h2: "What running the store means",
				body: [
					"Most agencies build a store and leave. Running one is a different job: the daily work that keeps it accurate and selling. We act as your store team, working inside your store's admin under a staff account you create for us.",
					"The work follows a written rhythm: a daily check of new orders, messages and stock warnings, a weekly pass over product pages and promotions, and a monthly review of what to add, fix or retire. Customer questions get a reply within one business day, and urgent order problems are dealt with sooner.",
				],
				list: [
					"Adding new products, updating descriptions, photos and stock levels",
					"Changing prices and running promotions you have approved",
					"Answering customer questions about products, orders and delivery",
					"Handling order problems: wrong address, delayed parcel, missing item",
					"Keeping banners, collections and seasonal pages current",
					"Flagging stock that is running low or not selling",
				],
			},
			{
				h2: "Where you stay in control of the store",
				body: [
					"The store, the payment account and the bank account that receives payouts are all in your name. We never hold your customers' money. You decide the policies we work within: refund and exchange rules, the largest discount we may offer without asking, which customer complaints come straight to you.",
					"Anything outside those rules waits for your answer. Price changes above an agreed threshold, a new supplier, a refund outside policy, a public reply to a bad review: we draft it, you approve it. You can see every change in the store's activity log and remove our access in a few clicks, at any time.",
					"You can still step in whenever you like. Edit a product, change a price or answer a customer yourself, and we note the change and work around it rather than overwriting it.",
				],
			},
			{
				h2: "The weekly trading summary",
				body: [
					"Instead of logging in to piece together how the week went, you get one short summary. It covers orders and revenue against the previous weeks, best and worst sellers, stock to reorder, the questions customers asked most, any problems we handled, and what we recommend for the coming week. It is written in sentences, not pasted from a dashboard: what happened, why we think it happened, and what we would do next.",
					"Once a month we look further out with you: upcoming seasons and holidays, promotions to plan, products to add or drop. You make those calls; we carry them out.",
				],
			},
			{
				h2: "Starting, and stopping",
				body: [
					"We begin by documenting how the store runs today: the products, the suppliers, the policies, the quirks only you know. That document becomes the playbook we work from, and it stays with you. We then take over one task at a time, such as customer questions first and catalogue updates next, so nothing falls into the gap between your team and ours. There is no retainer you cannot leave. If you bring operations in-house or hand them to someone else, the playbook, the customer notes and the store history are already yours.",
				],
			},
		],
		deliverables: [
			"A written store playbook with your policies and approval rules",
			"Day-to-day catalogue, pricing and promotion updates",
			"Customer questions answered within the rules you set",
			"A weekly trading summary",
			"A monthly planning session for seasons and promotions",
		],
		faqs: [
			{
				q: "Do you take payments or hold my store's revenue?",
				a: "No. Your store and payment processor accounts are in your name, and payouts go straight to your bank account. We work through a staff account with only the permissions the job needs. We never sit between your customers' payments and you.",
			},
			{
				q: "Which decisions still come to me?",
				a: "You set the rules at the start: refund and exchange policy, the largest discount we can apply alone, price ranges, and which issues always come to you. Anything outside those rules gets drafted by us and approved by you. Typical examples are new suppliers, larger price changes, unusual refunds and public replies to complaints.",
			},
			{
				q: "Can you run a store you did not build?",
				a: "Yes, as long as we can work inside it through a staff account. We start by documenting how it runs today and noting anything that slows daily work, such as missing product data or apps that conflict. Fixes are suggested separately; we do not change how the store is built without your agreement.",
			},
			{
				q: "How do customers know who they are talking to?",
				a: "Customers deal with your business. We answer from your support inbox or help desk in your name and voice, using templates you have approved. If a customer asks for the owner or raises something outside the agreed rules, we pass it to you with a summary so you do not have to read the whole thread.",
			},
		],
		sectors: ["retail-ecommerce", "restaurants-food", "fitness-wellness"],
		related: ["ecommerce-development", "email-marketing", "marketplace-listings"],
		insights: ["guest-checkout"],
	},
	{
		slug: "digital-downloads",
		name: "Digital download distribution",
		division: "sell",
		serviceType: "Digital product distribution",
		title: "Sell Digital Downloads Online in Canada",
		description: "Sell digital downloads online from Canada: templates, courses, software and audio with secure delivery, licensing and payment set up and run from your accounts.",
		h1: "Digital products delivered in seconds, without you",
		lead: "We help Canadian creators, educators and businesses sell digital downloads online: templates, courses, software and audio. Delivery, licensing and payment are set up and kept running, so a customer at 3 a.m. gets their files in seconds without you.",
		sections: [
			{
				h2: "How a digital download sale should work",
				body: [
					"A buyer pays, the file arrives, and they can find it again next month. That sounds simple, and it breaks in predictable places: download links that land in spam, links that work forever and end up shared on forums, licence keys sent by hand, courses that lock people out after a password reset.",
					"We choose the delivery set-up to suit what you sell. A template pack needs a reliable expiring link and a customer account to re-download from. Software needs licence keys issued automatically. A course needs a login, progress tracking and a way to add lessons later.",
					"Before launch we buy from the store ourselves: paying by card on a phone, opening the email on a different device, downloading on a slow connection, then asking for a refund. Problems show up for us rather than for your first customers.",
				],
				list: [
					"Expiring, limited download links so files are not passed around freely",
					"Licence keys generated and emailed on purchase",
					"Customer library for re-downloading past purchases",
					"Updated files pushed to everyone who already bought",
					"Guest checkout so a buyer is not forced to create an account first",
				],
			},
			{
				h2: "Licensing, tax and the fine print",
				body: [
					"Every digital product needs terms that say what the buyer may do with it: personal use only, use in client work, number of seats. We draft clear licence options and put them on the product page and in the receipt. Have your lawyer review the final wording.",
					"Digital products sold to Canadian buyers usually need GST/HST handling, and sales to other countries can bring their own tax rules. We set up the store to apply the rates your accountant confirms, and keep the records they will ask for. Receipts show what was bought, the licence chosen and the tax charged, so a business buyer can expense it without writing back to ask.",
				],
			},
			{
				h2: "What we do to keep your digital downloads selling",
				body: [
					"After launch we keep the system running. That is the part most creators do not want to think about, and the part customers notice when it fails.",
					"We watch for failed deliveries and resend them. We answer customers who lost their link or changed email address. We update files when you release a new version, and check that payments, receipts and access still work after any platform update. You get a weekly summary of sales, refunds and support questions, and anything unusual comes to you the same week.",
					"Support replies use templates you have approved and go out in your name. Refund requests are handled under your policy, and anything outside it comes to you for a decision.",
				],
			},
			{
				h2: "What stays in your hands",
				body: [
					"The storefront, the payment processor and the file storage are all in your name. Payouts go to your bank account. You set prices, licence terms, refund policy and which discounts may run. We work through staff access you can remove at any time, and the product files never live only on our systems.",
				],
			},
		],
		deliverables: [
			"Storefront and delivery set-up suited to your product type",
			"Automatic delivery with expiring links or licence keys",
			"Licence options shown on product pages and receipts",
			"Tax settings applied as your accountant confirms",
			"Ongoing delivery monitoring and customer support",
			"A weekly sales and support summary",
		],
		faqs: [
			{
				q: "Do I charge GST/HST on digital products in Canada?",
				a: "Often, yes, depending on your registration status and where the buyer is located. The rules for digital goods sold to buyers outside Canada differ again. We do not give tax advice. Your accountant should confirm what applies to you, and we set the store to charge and record tax exactly as they direct.",
			},
			{
				q: "How do I stop people sharing my download links?",
				a: "You cannot stop it entirely, but you can make it inconvenient. Links that expire after a set time or number of downloads, files tied to a customer account, and licence keys that activate on a limited number of devices all reduce casual sharing. We choose the level of protection that suits the price and type of your product.",
			},
			{
				q: "What happens when I release an updated version of a product?",
				a: "We upload the new file, update the product page and, if your licence includes updates, send past buyers a message with a link to the new version. Their customer library shows the latest file. Earlier versions can stay available for buyers who need them.",
			},
		],
		sectors: ["education", "fitness-wellness", "professional-services", "retail-ecommerce"],
		related: ["ecommerce-development", "storefront-operation", "email-marketing"],
		insights: ["guest-checkout"],
	},
	{
		slug: "merchandise",
		updated: '2026-11-24',
		name: "Merchandise programs",
		division: "sell",
		serviceType: "Branded merchandise programs",
		title: "Branded Merchandise Programs in Canada",
		description: "Branded merchandise programs in Canada: design, sourcing and fulfilment on demand or from inventory, with costs checked first so you know if an idea will pay.",
		h1: "Merch that covers its own costs, or does not get made",
		lead: "Branded merchandise programs for Canadian nonprofits, studios, schools and businesses. We handle design, sourcing and fulfilment for physical goods, on demand or from inventory, and we tell you up front when a merch idea will not cover its own costs.",
		sections: [
			{
				h2: "We cost it before we design it",
				body: [
					"Merch looks profitable until you add up the blank, the printing, the packaging, the shipping, the platform fees, the returns and the unsold sizes. We do that sum first, for every product, at the price you would actually charge.",
					"If the numbers do not work, we say so and suggest what would: a different product, a smaller run, print on demand instead of stock, or a higher price for a limited design. Sometimes the answer is that a merch line is a marketing cost rather than a revenue line, and you should decide that knowingly.",
					"The costing sheet lists each item's unit cost, shipping, fees and margin at your price, plus the number of sales needed to break even on any up-front run. You see where the money goes before committing to anything.",
				],
			},
			{
				h2: "On demand or from inventory",
				body: [
					"Print on demand means nothing is made until someone orders. There is no stock to store and no risk of a box of unsold extra-large shirts, but each unit costs more and you have less control over quality and delivery times.",
					"Holding inventory lowers the unit cost and gives you control over the product, but someone has to pay for the stock up front, store it, count it and ship it. Many programs start on demand to learn what sells, then move proven items into inventory.",
					"Either way, quality has to match the brand. We check the weight and fit of a shirt, how a print holds up after washing and how the item arrives in the box. Samples are washed and worn before anything goes on sale.",
				],
			},
			{
				h2: "How we run a merchandise program for you",
				list: [
					"Product designs built from your brand files",
					"Samples ordered and checked before anything goes on sale",
					"Supplier and print partner selection, with quality checks",
					"Product pages and photos for your store",
					"Fulfilment set up so orders ship without a spreadsheet",
					"Returns, exchanges and damaged items handled under your policy",
					"Reorder alerts and a regular report on what is selling",
				],
				body: [
					"Running the program means we handle that work week to week: watching stock, reordering approved items, dealing with suppliers and fixing order problems.",
					"For events, launches and fundraising campaigns, we plan backwards from the date: design approval, samples, production and shipping, so the merch arrives before the event rather than after it. Limited drops get a clear end date, so buyers know when the chance closes.",
				],
			},
			{
				h2: "What you decide, and what you own",
				body: [
					"You approve every design, every sample and every retail price before it goes on sale. Supplier accounts, the store and the payment account are in your name, so revenue goes to your bank and you can see costs directly. Stock bought for your program belongs to you. If you end the arrangement, the designs, files, supplier details and any remaining inventory stay with you.",
				],
			},
		],
		deliverables: [
			"A costing sheet for each product at your intended price",
			"Product designs and print-ready files",
			"Approved samples before launch",
			"Supplier and fulfilment set up in your accounts",
			"Product pages ready for your store",
			"A regular sales, stock and reorder report",
		],
		faqs: [
			{
				q: "Is print on demand worth it for a small brand?",
				a: "It is a good way to start, because you only pay for products that sell and you can test many designs without stock. The trade-off is a higher cost per item and less control over quality and shipping speed. Once you know which designs sell steadily, moving those into inventory usually improves the margin.",
			},
			{
				q: "Can a nonprofit or charity sell merchandise?",
				a: "Many do, as a way to raise awareness and some revenue. Whether sales affect your charitable status or tax obligations depends on how the activity is run, and the CRA has rules about business activities for registered charities. Check with your accountant before launching. We make sure the costs and margins are clear so the program supports your mission.",
			},
			{
				q: "What happens to stock that does not sell?",
				a: "We watch sell-through and flag slow items early, so you can discount, bundle or stop reordering before stock piles up. Starting with small runs or print on demand limits the risk in the first place. Any inventory bought for your program belongs to you, and we can plan clearance or donation with you.",
			},
		],
		sectors: ["nonprofits-charities", "fitness-wellness", "education", "restaurants-food"],
		related: ["brand-design", "storefront-operation", "ecommerce-development"],
		insights: [],
	},
	{
		slug: "marketplace-listings",
		name: "Marketplace listings",
		division: "sell",
		serviceType: "Marketplace listing management",
		title: "Amazon.ca and Marketplace Listing Services",
		description: "Amazon.ca and marketplace listing services: products listed and kept current on the marketplaces your buyers use, with content and stock matching your store.",
		h1: "Your products on the marketplaces your buyers already use",
		lead: "Marketplace listing services for Canadian sellers on Amazon.ca, Etsy, eBay, Walmart.ca and similar channels. We list your products and keep them current, with content that matches your store instead of contradicting it.",
		sections: [
			{
				h2: "Pick the marketplaces, not all of them",
				body: [
					"Every marketplace has its own fees, rules, buyer expectations and amount of work. Handmade goods suit Etsy. Replacement parts and branded consumer products often suit Amazon.ca. Some products sell better on none of them. We look at where your buyers already search and what each channel would cost you per sale, then recommend one or two to start rather than all at once.",
					"We also read the fine print: category restrictions, approval requirements for some brands and product types, and fulfilment options, such as shipping orders yourself or sending stock to the marketplace's warehouses. Each choice changes your costs and how much control you keep over delivery.",
				],
			},
			{
				h2: "Listings that agree with your own store",
				body: [
					"The fastest way to confuse a buyer is a product that has one name, price and set of specs on your site and different ones on a marketplace. We build listings from the same product data as your store, then adapt them to each marketplace's rules: title formats, image requirements, required attributes, category choices.",
					"Where you have spec sheets, manuals or certifications, we use them to fill every required field accurately. Missing attributes are a common reason a product never appears when buyers filter search results.",
				],
				list: [
					"Titles and bullet points written to each marketplace's format",
					"Images that meet each channel's requirements",
					"Specifications, sizes and part numbers matching your catalogue",
					"Categories and attributes filled in so filters find you",
					"Variants grouped correctly instead of listed as duplicates",
				],
			},
			{
				h2: "How we manage marketplace listings day to day",
				body: [
					"Listings drift. Stock sells out on one channel and keeps selling on another, leading to cancelled orders and penalties. Prices change in your store and not on the marketplace. A marketplace changes its category rules and suppresses half your listings.",
					"We connect inventory so stock levels stay in step across channels, review listing health every week, fix suppressed or flagged listings, and answer buyer messages within each marketplace's expected response time. Reviews are handled within each platform's rules, which forbid offering anything in return for a review.",
					"A question asked twice about size or compatibility is a gap in the listing, so the answer goes back into the listing for the next buyer. We also watch for other sellers attaching to your listings with different stock, and use each marketplace's brand tools and reporting process where you qualify for them.",
				],
			},
			{
				h2: "Where you stay in control",
				body: [
					"Every seller account is registered to your business, and marketplace payouts go to your bank account. We work as an authorised user you can remove at any time. You decide which products go on which marketplace, your price rules for each channel and whether you match your store's prices. You receive a weekly summary of sales, fees, stock and any account health warnings, so a marketplace never surprises you.",
					"If you decide to leave a marketplace, we close listings in an orderly way, fulfil open orders and download your sales history before the account is wound down.",
				],
			},
		],
		deliverables: [
			"Marketplace recommendation with fees per sale written out",
			"Seller accounts set up or reviewed in your name",
			"Listings built from your store's product data",
			"Inventory kept in step across your store and marketplaces",
			"Weekly listing health checks and buyer message handling",
			"A weekly sales, fees and account health summary",
		],
		faqs: [
			{
				q: "Should a small Canadian business sell on Amazon.ca?",
				a: "It depends on the product and the margin. Amazon.ca brings buyers who are ready to purchase, but fees, fulfilment costs and price competition can leave little profit, and you have less contact with the customer. We work out the cost per sale for your products before recommending it, and start with the items most likely to earn.",
			},
			{
				q: "How do you stop overselling across my store and marketplaces?",
				a: "We connect inventory so a sale on any channel reduces stock everywhere, either through the store's own marketplace integrations or a dedicated inventory tool. We hold a small buffer on fast-moving items and check stock levels weekly, so a sync problem is caught before it turns into cancelled orders.",
			},
			{
				q: "Will my marketplace prices have to match my website?",
				a: "Not necessarily. Some sellers keep prices identical; others price marketplaces higher to cover fees. Some marketplaces have their own policies about pricing compared with other channels, so we check those before setting rules. You choose the approach, and we apply it consistently and update it when your store prices change.",
			},
		],
		sectors: ["retail-ecommerce", "manufacturing"],
		related: ["storefront-operation", "ecommerce-development", "integrations-automation"],
		insights: ["spec-sheets-product-pages"],
	},
];
