// Sector landing pages: /sectors/<slug>/. Order matches SECTORS in site.ts.
import type { SectorPage } from './types';

export const SECTOR_PAGES: SectorPage[] = [
	{
		slug: 'trades-contractors',
		title: "Website Design for Trades & Contractors",
		description: "Website design for trades and contractors in Canada: quote forms that reach the crew, a page per trade and service area, and galleries that load on site.",
		h1: "Websites for trades and contractors that turn searches into booked quotes",
		lead: "Most of your work starts with someone typing a trade and a town into a search bar, then calling the first contractor who looks real. We build website design for trades and contractors that answers that search, shows the work, and gets the quote request to whoever can act on it.",
		sections: [
			{
				h2: "What a homeowner checks before calling a contractor",
				body: [
					"Before anyone fills in a quote form, they check three things: do you do this exact job, do you work in their area, and does the work in your photos look like what they want. If a site lumps roofing, siding and gutters onto one page, or lists a whole region when the buyer lives in one town at its edge, they go back to the search results.",
					"Commercial buyers check different things. A property manager or general contractor looks for insurance, a safety program, the tickets your crew holds, and whether you can take a job of their size. They want to find that without phoning.",
				],
				list: [
					"The specific service, named the way people search for it",
					"Service areas listed by town or neighbourhood",
					"Recent project photos with a line on what was done",
					"Licence, insurance and warranty details stated plainly",
					"A way to attach photos of the job to the request",
				],
			},
			{
				h2: "Where trades websites usually break",
				body: [
					"The quote form is often where enquiries disappear between the site and the person who books jobs, so we treat it as the first fix.",
					"Then there are the galleries. Photos straight off a phone are several megabytes each, and a page of forty of them stalls on a weak signal, which is exactly how many buyers browse: standing in a driveway next to the problem. Click-to-call buttons hide below the fold on mobile, and older themes squeeze the phone number into a header that wraps onto three lines.",
					"Ownership is the quiet problem. Many trades sites were built by a friend or a past agency, and the domain, hosting and Google Business Profile sit in someone else's name. We find out who holds what in the first week and move it into your accounts.",
				],
			},
			{
				h2: "How we scope a contractor website, and what ships first",
				body: [
					"The first phase usually runs 3 to 5 weeks, depending on how many trades and service areas you cover. It includes the pages that bring in quote requests: one page per trade, a page for each area you actually want work in, the gallery, and a quote form that routes to the person who books jobs, by text or email.",
					"You get a written scope and a fixed price before we start, and a staging link every week so you can check progress between jobs. We agree on one measure up front, usually quote requests per month from the site, so we both know whether it worked.",
					"We write the trade pages with you on a call rather than from a questionnaire: which jobs you want more of, which ones you would rather turn down, and the questions customers ask on the first visit. Those answers become the copy, so the site starts screening out the work you do not want before anyone picks up the phone.",
					"Later phases are optional: reviews pulled onto the site, a simple portal where customers see project updates, or local search work on the service-area pages.",
				],
			},
			{
				h2: "Licences, consent and tax on a Canadian trades site",
				body: [
					"Some trades have to show licence details in their advertising. Ontario electrical contractors, for example, must include their licence number, and other provinces and trades have their own requirements. We put licence numbers on trade pages and in the footer, but confirm the rules with your regulator or trade association.",
					"If you follow up quote requests by email or send seasonal maintenance reminders, CASL applies: commercial email needs consent, and the form should ask for it clearly rather than assume it. Any price shown online should say whether GST or HST is included.",
				],
			},
		],
		builds: [
			{ t: "Trade pages", d: "One page per trade or service, named the way customers search for it." },
			{ t: "Service-area pages", d: "Pages for the towns you want work in, each with local projects rather than a swapped place name." },
			{ t: "Quote request form", d: "A short form with photo upload that reaches the person who books jobs, by text or email." },
			{ t: "Project gallery", d: "Compressed, sorted by job type, and quick to load on a job-site connection." },
			{ t: "Credentials block", d: "Licence, insurance and warranty details shown next to your reviews." },
			{ t: "Account handover", d: "Domain, hosting, analytics and Google Business Profile access in your name, with notes." },
		],
		faqs: [
			{
				q: "How long does a contractor website take to build?",
				a: "The first phase usually takes 3 to 5 weeks. A single-trade business serving a few towns sits at the shorter end; a multi-trade company with many service areas sits at the longer end. That phase covers the trade pages, service-area pages, gallery and quote form. You see progress on a staging link every week, and nothing goes live until you approve it.",
			},
			{
				q: "Do service-area pages help, or are they spam?",
				a: "They help when each page has something real on it: projects you finished in that town, the services you offer there, and how far you travel. They become spam when the same text is copied with the town name swapped, and search engines tend to ignore those. We only build pages for areas where you have work to show or genuinely want more of it.",
			},
			{
				q: "Can quote requests come to my phone instead of an inbox?",
				a: "Yes. The form can send a text to whoever books jobs, with the address, job type and photos attached, and copy the same request into your email or scheduling tool. We set it up in the first phase and test it with you from an actual job site before launch, so you know the message arrives where you will see it.",
			},
			{
				q: "I already have job photos on my phone. Can you use them?",
				a: "Usually, yes. Recent phone photos are often good enough once they are cropped, straightened and compressed. We sort them by job type and add a short line about each project. If the library is thin or the photos are dark, we can plan a half-day shoot on a couple of active jobs instead, and you keep the raw files.",
			},
		],
		services: ['website-design', 'seo', 'copywriting-landing-pages', 'integrations-automation', 'video-photography'],
		insight: 'quote-form-funnel',
	},
	{
		slug: 'professional-services',
		title: "Professional Services Website Design",
		description: "Professional services website design in Canada: one page per problem you solve, intake that pre-qualifies prospects, and booking built around billable hours.",
		h1: "Websites for accountants, lawyers, consultants and advisers",
		lead: "Your next client is searching for a specific problem, not your firm name. Good professional services website design meets that search with a page about the problem, then lets the prospect book time without eating into your billable hours.",
		sections: [
			{
				h2: "What clients check before they book a consultation",
				body: [
					"Buyers of professional services are cautious. Before they book, they want to know who will actually handle the file, whether you have dealt with situations like theirs, how you charge, and how soon they can speak to someone. They look for a named person with a photo and a short bio, not a firm-wide mission statement.",
					"They also look for signs you are current: articles dated this year, a fee approach stated in plain terms (hourly, flat fee or retainer, even without a figure), and a booking option that does not involve phone tag with reception.",
				],
				list: [
					"A page for their exact problem, in their words",
					"The person who will do the work, with credentials",
					"How fees work, even if the number depends on scope",
					"Virtual or in-person meetings, and where you are",
					"An intake or booking step they can finish tonight",
				],
			},
			{
				h2: "Why most firm websites underperform",
				body: [
					"A single services page listing every practice area rarely matches the search a prospect types, which is why we start by splitting it into one page per problem you want more of.",
					"The other faults are quieter. Contact forms that ask nothing, so every enquiry needs a call just to find out if it is a fit. Booking links that open every slot on your calendar, including the hours you meant to bill. Bios that list memberships but never say what the person is good at. Sites that look fine on the office monitor and fall apart on the phone where the prospect is actually reading.",
					"Referral sources check the site too. A colleague who sends you work wants to forward a link that explains exactly what you do; if the best they can send is the homepage, the referral arrives cold.",
				],
			},
			{
				h2: "Professional services website design: what we build first",
				body: [
					"The first phase runs 3 to 4 weeks. We pick the handful of problems you most want to be hired for, write a page for each, and connect them to an intake form that asks what you would ask in the first minutes of a call: the matter type, the timeline, the jurisdiction, and how they found you.",
					"The writing comes from your own words. We spend half an hour with the people who handle each type of matter, ask how they explain the problem to a new client, and turn that into the page. It reads like you because it started with you, and it uses the phrases clients search for rather than the labels on a practice-area list.",
					"Booking connects to your calendar but only offers the consultation windows you choose, with buffers before and after. Clear fits go straight to booking; the rest get a polite reply with a referral or a resource. You review the build on a staging link each week, and at handover the site, the domain and the documentation are yours.",
				],
			},
			{
				h2: "Privacy and advertising rules for Canadian firms",
				body: [
					"Intake forms collect personal information, so PIPEDA or your provincial privacy law governs how it is gathered, stored and shared. We keep intake fields to what you need for a conflict check or a first conversation, send submissions to a secure inbox rather than a general one, and draft a privacy notice you can review with your lawyer.",
					"Law societies, CPA bodies and other professional regulators set their own advertising rules, for example on testimonials, specialist claims and comparisons with other firms. We write page copy with those limits in mind, and you or your compliance contact approve it before anything goes live. Newsletters to past clients need consent under CASL.",
				],
			},
		],
		builds: [
			{ t: "Problem pages", d: "A page for each problem you want more of, written in the words clients use." },
			{ t: "Pre-qualifying intake", d: "A short form that captures matter type, timeline and location before anyone books." },
			{ t: "Protected booking", d: "Consultation slots tied to your calendar, limited to the hours you release." },
			{ t: "People pages", d: "Bios that say what each person handles, with credentials and a direct booking link." },
			{ t: "Article library", d: "Dated, plain-language articles that answer the questions clients ask on calls." },
		],
		faqs: [
			{
				q: "Should a small firm have a page for every practice area?",
				a: "Not for every one. Build pages for the problems you want more of and can show depth in, usually a handful. Areas you handle occasionally can share a shorter page with a line about each. A page that exists only to fill out a list rarely ranks and rarely converts, while a focused page on work you enjoy doing tends to do both.",
			},
			{
				q: "Can the intake form screen out enquiries we cannot take?",
				a: "Yes, within reason. The form can ask for the matter type, location and timeline, then route clear fits to booking and send others a reply that points them elsewhere. We avoid making it feel like a test. The questions should be ones you would ask on a call anyway, so a good prospect finishes it in a couple of minutes.",
			},
			{
				q: "Will online booking let clients take up billable time?",
				a: "Only the time you release. We connect booking to your calendar and limit it to consultation windows you set, with buffers around them and a daily cap if you want one. Paid consultations can take payment at the moment of booking. After launch you can change the windows yourself, without calling us or waiting on a developer.",
			},
		],
		services: ['website-design', 'copywriting-landing-pages', 'seo', 'integrations-automation', 'brand-design'],
		insight: 'one-page-per-problem',
	},
	{
		slug: 'healthcare-clinics',
		title: "Healthcare Clinic Website Design in Canada",
		description: "Clinic website design for Canadian healthcare practices: booking across locations, staff pages patients trust, and intake that collects only what is needed.",
		h1: "Clinic websites that book patients without tying up the front desk",
		lead: "A clinic website does two jobs at once: it convinces a new patient to book, and it stops existing patients calling the front desk with questions the site could answer. We do healthcare clinic website design in Canada that handles both, for one location or several.",
		sections: [
			{
				h2: "What patients look for when choosing a clinic",
				body: [
					"A new patient is usually comparing two or three clinics nearby. They check whether you treat their issue, whether the practitioner is taking new patients, whether you direct-bill their insurer, and how soon they can get in. Hours, parking and accessibility details matter more than most clinics expect. Family members often do this research on behalf of a parent or child, so plain language and large, easy-to-tap buttons matter.",
					"Returning patients want something simpler: rebook, find a form, see whether a practitioner is in this week. When the site makes them call for that, the lines fill up and new patients reach voicemail.",
				],
				list: [
					"The condition or service, described plainly",
					"Practitioner profiles with credentials and languages spoken",
					"Direct billing and insurance information",
					"The next available appointment, not just a phone number",
					"Location, hours, parking and accessible entrance details",
				],
			},
			{
				h2: "Common faults on clinic and practice websites",
				body: [
					"Booking across several locations is the usual sore point, and it has its own article on our site.",
					"Beyond booking, the frequent faults are intake and staff pages. Intake forms tend to ask for everything at once, including health details that should not travel through a website contact form or sit in a shared inbox. Staff pages go out of date as practitioners join and leave, so patients ask for someone who moved on months ago. And many clinic sites run on page builders that turn every small update into a job for whoever set them up.",
				],
			},
			{
				h2: "How we build a clinic website, phase by phase",
				body: [
					"The first phase takes 4 to 6 weeks, toward the longer end if you have several locations or a booking system that needs configuring. It covers location pages, a page per service, practitioner profiles your staff can update, and booking connected to the practice management or scheduling software you already use.",
					"We work through intake with your front desk, not only the owner. The question is what the person checking a patient in actually needs to see before the first visit, and what belongs in your clinical system instead. The website collects the first part; the rest goes through the secure intake your practice software provides, where it has one.",
					"Practitioner profiles follow one template: credentials, areas of focus, languages, which locations they work at and on which days, and whether they are taking new patients. When someone leaves, the front desk unpublishes the profile and booking stops offering them, in one step.",
					"Before work starts you receive a written scope with a fixed price. During the build there is a staging link every week, and at handover the code, accounts and documentation move to you.",
				],
			},
			{
				h2: "Health privacy and college advertising rules",
				body: [
					"Personal health information is covered by provincial health privacy laws, such as Ontario's PHIPA or Alberta's Health Information Act, and by PIPEDA in some situations. We keep health details out of general web forms and email, and your privacy officer should review how data flows before launch.",
					"Regulated health professions also have advertising rules set by their colleges, and many restrict testimonials, before-and-after images and claims of superiority. We write copy within those limits and leave time for your own review; check the current standards with your college. Appointment reminders are treated differently from marketing email, which needs consent under CASL. In Ontario, AODA accessibility requirements may also apply to your site.",
				],
			},
		],
		builds: [
			{ t: "Location pages", d: "Hours, map, parking, accessible entrance and the practitioners at each site." },
			{ t: "Practitioner profiles", d: "Credentials, languages and services, editable by your team when staff change." },
			{ t: "Connected booking", d: "Online booking tied to your existing scheduling system, filtered by location and service." },
			{ t: "Lean intake", d: "First-visit forms that ask only what the front desk needs, routed securely." },
			{ t: "Service pages", d: "One page per treatment or service, written within your college's advertising standards." },
			{ t: "Patient questions", d: "Answers on direct billing, cancellations and what to bring, so the phone rings less." },
		],
		faqs: [
			{
				q: "Can you connect online booking to the clinic software we already use?",
				a: "In most cases, yes. Many practice management systems used by Canadian clinics offer an online booking widget or link that we can embed and style to match the site. Where the system has no public booking, we link out cleanly or set up a request form instead. We confirm what your software supports during scoping, before the price is fixed.",
			},
			{
				q: "Should patient intake forms be on the website?",
				a: "Only the parts without health details, unless the form runs through secure software built for that purpose. Contact details and the reason for the visit can often go through the site; medical history belongs in your practice system's own intake. We map which questions go where with your front desk, then check the plan with your privacy officer before building it.",
			},
			{
				q: "Can we show patient reviews on our clinic website?",
				a: "It depends on your profession and province. Several health regulatory colleges restrict or prohibit testimonials in advertising, and some treat reviews displayed on your own site as advertising. Check your college's current standards before we add any. If reviews are off the table, we lean on practitioner credentials, clear service descriptions and practical details that answer what patients want to know.",
			},
			{
				q: "What decides whether a clinic site takes four weeks or six?",
				a: "Mostly the number of locations and the state of your booking setup. A single clinic already using online booking can be live in about four weeks. Several locations, many practitioners, or scheduling software that needs configuring first push it toward six. The written scope lists exactly what is in the first phase, so the timeline is agreed before we begin.",
			},
		],
		services: ['website-design', 'integrations-automation', 'web-application-development', 'copywriting-landing-pages', 'seo'],
		insight: 'multi-location-booking',
	},
	{
		slug: 'nonprofits-charities',
		title: "Nonprofit Website Design in Canada",
		description: "Nonprofit website design in Canada: separate one-time and monthly giving pages, donation receipts wired to your finance tool, and pages volunteers can edit.",
		h1: "Websites for Canadian nonprofits and charities that raise money and stay current",
		lead: "A nonprofit site has to persuade donors, recruit volunteers and report to funders, usually with a small team and no developer on staff. Our nonprofit website design in Canada takes donations cleanly, issues receipts without manual work, and stays easy for your own people to update.",
		sections: [
			{
				h2: "What donors and funders look for first",
				body: [
					"A first-time donor wants to know what you do, where the money goes and whether you are a registered charity. They look for your registration number, a short explanation of a program, and a donate button that does not lead to a third-party page that looks nothing like yours.",
					"Funders and partners read differently. They look for annual reports, board lists, financial statements and evidence that programs ran as described. Volunteers want dates, locations and a sign-up that does not end in an unanswered email. Corporate partners and foundations often check the site before a meeting, so a short partners page with your programs and a named contact saves an email exchange.",
				],
				list: [
					"Registration number and charity status, easy to find",
					"What a gift pays for, in concrete terms",
					"Separate paths for donors, volunteers and partners",
					"Recent reports and financial statements",
					"Contact details for a real person",
				],
			},
			{
				h2: "Where charity websites lose donations and staff time",
				body: [
					"Monthly donors need a different page from one-time donors, a point covered in its own article, so we build them as two pages from the start.",
					"The bigger drain is usually administrative. Receipts that someone on staff prepares by hand at year end. A donation platform that does not talk to the finance tool, so every gift is entered twice. Event pages and staff lists nobody can change because the person who knew the login has left. A site held together by so many plugins that each update risks breaking the donation form. Donation forms embedded from a platform that ignores your branding make donors wonder whether they are still on the right site, and some stop there.",
				],
			},
			{
				h2: "Building a nonprofit site your team can run",
				body: [
					"The first phase runs 4 to 6 weeks. It includes the giving pages, the receipting setup, program pages, a volunteer sign-up, and an editing setup simple enough for a volunteer coordinator to post an event after a short walkthrough.",
					"Program pages get the same care as the giving pages: one page per program, saying who it serves, what it did last year through a specific story or outcome you can verify, and how a gift or a volunteer hour connects to it.",
					"Receipts are generated by the donation platform and sent automatically, with each gift passed through to your accounting or donor management tool. Before launch we test the full path with small real donations: what the donor sees, the receipt they receive, and the record that lands in your books.",
					"The price is fixed in writing before we start, a staging link arrives weekly, and the accounts and documentation sit with your organization at handover. We agree one measure first, often completed gifts per month or how many donors choose monthly.",
				],
			},
			{
				h2: "Receipts, consent and accessibility for Canadian charities",
				body: [
					"Only registered charities and other qualified donees can issue official donation receipts, and the CRA sets what each receipt must contain, including the registration number and the eligible amount of the gift. We configure the platform to include the required fields, but your accountant or the CRA's own guidance should confirm the template before you issue one.",
					"CASL has an exemption for fundraising email sent by registered charities, but it is narrower than many assume and does not cover nonprofits that are not registered charities. We build consent into donation and sign-up forms either way. If you operate in Ontario, AODA accessibility requirements may apply, and accessible forms help every donor finish.",
				],
			},
		],
		builds: [
			{ t: "One-time giving page", d: "A short, fast page for a single gift, with suggested amounts and few fields." },
			{ t: "Monthly giving page", d: "A separate page for recurring gifts, where donors can manage their own pledge." },
			{ t: "Automatic receipting", d: "Receipts generated and emailed on each gift, with records passed to your finance tool." },
			{ t: "Volunteer sign-up", d: "Shifts and events listed with dates, so people register without an email chain." },
			{ t: "Transparency section", d: "Annual reports, financials and board list, kept where funders can find them." },
			{ t: "Editor walkthrough", d: "A short recorded guide so staff and volunteers can update pages themselves." },
		],
		faqs: [
			{
				q: "Can our website issue CRA donation receipts automatically?",
				a: "Yes, if you are a registered charity and your donation platform supports official receipts. Most platforms used by Canadian charities can generate and email a receipt on each gift, using your registration number and an authorized signature. We configure the template and test it. Your accountant should confirm the receipt meets CRA requirements before the first live donation goes through.",
			},
			{
				q: "Which donation platform should a small charity use?",
				a: "It depends on what you already use for accounting and donor records, whether you need monthly giving and event ticketing, and how each platform's fees work. We compare a few options against your setup during scoping and recommend one. You open the account in your organization's name, so it stays yours if you ever stop working with us.",
			},
			{
				q: "Can volunteers update the site without breaking it?",
				a: "Yes. We set up roles so volunteers can edit events, news and program pages but cannot touch the donation forms or site settings. Layouts are built as blocks they fill in, rather than a blank canvas. A short recorded walkthrough covers the common tasks, and it stays with your team so the next coordinator can learn from it too.",
			},
		],
		services: ['website-design', 'integrations-automation', 'email-marketing', 'copywriting-landing-pages', 'video-photography'],
		insight: 'monthly-giving-page',
	},
	{
		slug: 'restaurants-food',
		title: "Restaurant Website Design in Canada",
		description: "Restaurant website design in Canada: menus your staff update in minutes, ordering and reservations in one flow, and a photo library shot in a single afternoon.",
		h1: "Restaurant websites that keep the menu current and the tables full",
		lead: "Diners decide where to eat on their phone, often within minutes and often while already hungry. Restaurant website design has one task: show today's menu, take a booking or an order, and get out of the way.",
		sections: [
			{
				h2: "The short list diners check on a restaurant site",
				body: [
					"Most visits to a restaurant site are brief and specific. People want the menu, the hours and a way to book or order, on a phone, one-handed, often on mobile data. Everything else on the site comes second. Tourists and people new to the area add questions of their own: is it walkable from the hotel, do you take bookings for large groups, is there parking nearby.",
					"Caterers and food producers see a different visitor: an office manager or event planner comparing packages, minimum orders and lead times. For them, a clear catering page with a request form matters more than the dinner menu.",
				],
				list: [
					"A menu that is current, readable on a phone, and not a PDF",
					"Hours, including holiday changes, and the address with a map link",
					"A reservation or ordering button visible without scrolling",
					"Dietary and allergy notes, with a way to ask staff",
					"Photos that look like the food that actually arrives",
				],
			},
			{
				h2: "What goes wrong on restaurant websites",
				body: [
					"The menu is the usual casualty. It lives in a PDF the chef updated last spring, so prices and dishes are wrong and the file is unreadable on a small screen. Ordering runs through one app, reservations through another and gift cards through a third, each with its own look, so the diner bounces between them and sometimes gives up.",
					"Photography is the other gap, and a library shot in a single afternoon solves most of it, a topic with its own article. Stock photos of dishes you do not serve cost more trust than they earn.",
					"Hours drift too. The website, the Google listing and the delivery apps are updated by different people at different times, so they disagree. We make holiday closures, patio season and private events a single setting that feeds every place the site shows hours, and give one person a short checklist for the listings outside it.",
				],
			},
			{
				h2: "Restaurant website design: what the first phase covers",
				body: [
					"The first phase runs 2 to 4 weeks. A single location with an existing reservation tool sits at the short end; several locations, online ordering and catering push it longer. We build the menu as real page content your staff can edit from a phone, so changing a price or marking a dish sold out takes a minute.",
					"Ordering and reservations come together in one flow on the site, using the tools you already pay for where they work well. The photo afternoon is planned inside this phase, with a shot list covering dishes, the room, the team and the kitchen, so the site launches with your own pictures.",
					"You approve a fixed-price scope first, see progress on a staging link weekly, and own every account and raw photo file at handover.",
				],
			},
			{
				h2: "Canadian details for food businesses online",
				body: [
					"If you take online orders, prices and receipts need correct GST or HST handling for your province, and your ordering platform should be set up to match; confirm the setup with your accountant. Menus written as real text rather than images work with screen readers and, in Ontario, support AODA obligations for the organizations it covers.",
					"Restaurants in Quebec should expect the Charter of the French Language to require French on the menu and the website. Email offers and loyalty messages need consent under CASL, so the sign-up box on the site should ask for it plainly.",
				],
			},
		],
		builds: [
			{ t: "Editable menu", d: "Built as page content with dietary tags, updated from a phone in a minute." },
			{ t: "Order and reserve flow", d: "One clear path to booking or ordering, using the tools you already have." },
			{ t: "Photo library", d: "A planned afternoon shoot of dishes, room and team, delivered with raw files." },
			{ t: "Catering page", d: "Packages, lead times and a request form for office and event orders." },
			{ t: "Hours and locations", d: "Holiday hours and per-location details your staff change themselves." },
		],
		faqs: [
			{
				q: "Should our restaurant menu be a PDF?",
				a: "No. A PDF is slow to open on a phone, hard to read without zooming, awkward for screen readers and rarely kept up to date. We build the menu as page content, laid out for a small screen, with dietary tags. You can still offer a printable version for catering clients, but the main menu should be text your team edits directly.",
			},
			{
				q: "Can online ordering run through our own website instead of a delivery app?",
				a: "Yes. Many restaurants keep delivery apps for reach but add direct ordering on their own site, usually for pickup, so they keep the customer relationship and the contact details. We connect an ordering tool that fits your point-of-sale setup and test it on a phone before launch, including one real order placed and fulfilled from start to finish.",
			},
			{
				q: "Can we update the menu ourselves?",
				a: "Yes, that is the reason for building it as page content. Your manager logs in from a phone, edits a price or a dish, marks something sold out, and saves. Seasonal menus can be prepared ahead and switched on for a set date. We record a short walkthrough at handover so a new hire can do it without asking anyone.",
			},
		],
		services: ['website-design', 'video-photography', 'integrations-automation', 'email-marketing', 'brand-design'],
		insight: 'restaurant-photo-library',
	},
	{
		slug: 'manufacturing',
		title: "Manufacturing Website Design & Catalogues",
		description: "Manufacturing website design for Canadian makers: catalogues with spec sheets attached, part-number search, and a distributor login that hides trade pricing.",
		h1: "Manufacturer websites built around the catalogue, not the brochure",
		lead: "Engineers, buyers and distributors come to a manufacturer's site to find a part, confirm it fits, and get it ordered or quoted. Our manufacturing website design puts the catalogue at the centre and keeps trade information behind a login.",
		sections: [
			{
				h2: "How industrial buyers use a manufacturer's website",
				body: [
					"Business buyers often arrive with a part number, a dimension or a standard already in hand. They are checking compatibility, downloading a drawing for their own design, or confirming lead time before they put you on a purchase order. Much of that research happens before anyone contacts a sales rep. Procurement teams also check the basics before adding a new supplier: where you manufacture, which quality certifications you hold, and who handles credit applications.",
					"Distributors and dealers want something else: current trade pricing, stock levels where you share them, marketing assets they can reuse, and a way to reorder without emailing a spreadsheet.",
				],
				list: [
					"Search by part number, model or specification",
					"Spec sheets, drawings and CAD files on the product page",
					"Certifications and standards each product meets",
					"Lead times, minimum order quantities and how to request a quote",
					"A trade area for pricing, assets and reorders",
				],
			},
			{
				h2: "Why manufacturing catalogues are hard to use online",
				body: [
					"Most manufacturer sites began as brochures with the catalogue bolted on later, which is how product pages and their spec sheets ended up living apart, a gap our separate article covers.",
					"The data behind the catalogue is the deeper issue. Product information is often kept in three places, the ERP, a spreadsheet and the website, and they disagree. Trade pricing goes out as an email attachment that is out of date within a quarter. When the person who maintained the catalogue retires, nobody knows how to add a product. Heavy images and page builders slow everything down, which matters when a buyer is comparing ten parts in ten tabs.",
				],
			},
			{
				h2: "Manufacturing website design, scoped in phases",
				body: [
					"The first phase takes 6 to 8 weeks, mostly because product data needs cleaning before it can be shown well. We start by agreeing on a single source for product information, whether that is your ERP, a product information tool or a structured spreadsheet, and build the catalogue to read from it.",
					"That phase covers the catalogue with filters and part-number search, product pages with spec sheets and drawings attached, and a distributor login that hides trade pricing from public visitors. Quote requests carry the part numbers and quantities, so inside sales does not have to ask again. Later phases can add online reorders, stock display or a parts finder.",
					"We test search with real queries from your sales team: the part numbers distributors ask for most, old numbers that have been superseded, and the typos people actually make. A superseded part points to its replacement instead of returning nothing.",
					"Each phase has a fixed price in writing and a weekly staging link, and you keep the code and the documented data structure at handover.",
				],
			},
			{
				h2: "Selling to Canadian and cross-border buyers",
				body: [
					"If you sell into Quebec, the Charter of the French Language affects product information and the website, so plan for French in the catalogue structure from the start rather than adding it later. Trade orders placed online still need GST or HST handled correctly by province; check the setup with your accountant.",
					"Newsletters to distributors and past buyers need consent under CASL, even when every recipient is a business. If you export, the site can show prices in more than one currency and route US enquiries to the right rep, but customs and export rules are a question for your broker.",
				],
			},
		],
		builds: [
			{ t: "Product catalogue", d: "Filterable by category and specification, fed from one source of product data." },
			{ t: "Part-number search", d: "Search that matches exact and partial codes, not just product names." },
			{ t: "Product pages with documents", d: "Spec sheets, drawings and CAD files attached to the product they describe." },
			{ t: "Distributor portal", d: "A login for trade pricing, assets and reorders, hidden from the public site." },
			{ t: "Quote requests", d: "Forms that carry part numbers and quantities straight to inside sales." },
			{ t: "Data documentation", d: "A written map of the product data so your team can add products later." },
		],
		faqs: [
			{
				q: "Can the website pull product data from our ERP?",
				a: "Often, yes. Many ERPs can export product data on a schedule or through an API, and we build the catalogue to read from that export so prices and specs stay in step. Where a direct connection is not practical, we set up a structured spreadsheet or a product information tool as the source instead. We confirm what your system supports before fixing the price.",
			},
			{
				q: "How do we keep trade pricing away from the public?",
				a: "Trade pricing sits behind a distributor login. Approved accounts see their own price level, and everyone else sees list pricing or a quote button. You approve new distributor accounts yourself, and each can be assigned its own tier. Trade prices are never loaded into public pages, so a visitor cannot find them by viewing the page source.",
			},
			{
				q: "Should a manufacturer sell online or just take quote requests?",
				a: "That depends on the products. Standard parts with fixed pricing often suit direct online ordering. Configured or made-to-order products usually suit a quote request that captures part numbers, quantities and delivery details. Many manufacturers end up doing both. We map which products fit which path during scoping, and the first phase can start with quotes and add ordering later.",
			},
			{
				q: "Why does a manufacturing site take 6 to 8 weeks?",
				a: "Mostly because of the product data. Building the pages is the quicker part; cleaning part numbers, matching spec sheets to the right products and agreeing on one source of truth take longer. A small catalogue with tidy data lands nearer six weeks. Thousands of products, or data spread across several systems, push it toward eight.",
			},
		],
		services: ['website-design', 'ecommerce-development', 'integrations-automation', 'web-application-development', 'seo'],
		insight: 'spec-sheets-product-pages',
	},
	{
		slug: 'real-estate',
		title: "Real Estate Website Design in Canada",
		description: "Real estate website design in Canada: listing feeds that stay current, area pages that rank, and enquiry routing that reaches the right agent the first time.",
		h1: "Real estate websites for Canadian agents, teams and brokerages",
		lead: "Buyers and sellers use your site to judge whether you know their neighbourhood and whether you answer quickly. Our real estate website design shows current listings, proves local knowledge, and routes each enquiry to the agent who should get it.",
		sections: [
			{
				h2: "Buyers and sellers want different things from your site",
				body: [
					"Buyers can browse listings anywhere. What they look for on an agent or brokerage site is local judgement: what a street is like, which schools it feeds, what kind of homes come up there, and who to talk to about it. Buyers relocating from another province or country lean on these pages heavily, because they cannot drive the streets before committing to a viewing trip.",
					"Sellers are evaluating you. They look for recent sales in their area, how you market a property, who is on the team, and a home evaluation request that does not feel like a lead trap. Investors and renters, if you serve them, need paths of their own.",
				],
				list: [
					"Current listings, searchable by area and price",
					"Neighbourhood pages written by someone who knows the area",
					"Recent sales and how they were marketed",
					"Agent profiles with areas served and direct contact",
					"A simple evaluation or consultation request for sellers",
				],
			},
			{
				h2: "Where agent and brokerage websites fall behind",
				body: [
					"Listings that sold weeks ago but still show as available are what buyers notice first, and that problem has its own article.",
					"Behind it sits routing. Every enquiry lands in one inbox, and by the time someone forwards it to the listing agent, the buyer has called another brokerage. Area pages are often thin, a paragraph and an embedded map with near-identical text for each neighbourhood. Templates bought from a listing platform look the same as every other agent's site in the region. And when an agent leaves, their profile, listings and leads need handling that nobody planned for.",
				],
			},
			{
				h2: "Real estate website design: first phase and beyond",
				body: [
					"The first phase runs 4 to 6 weeks. It connects your listing feed with checks so sold and expired listings drop off, sets up area pages for the neighbourhoods you want to be known for, and routes enquiries by listing, area or agent so the first email reaches the right person.",
					"We write area pages with you, using what your agents actually know: the streets, the housing stock, the commute, the things a buyer only learns after moving in. Each page is different because each area is. Later phases can add a seller evaluation tool, saved searches, or email alerts for new listings in an area.",
					"Agent profiles share one template so the team looks consistent: photo, areas served, languages, recent listings pulled from the feed, and a direct contact that still logs every enquiry to the CRM.",
					"The scope and price are agreed in writing, a staging link comes each week, and the domain, site and lead data are in your name at handover.",
				],
			},
			{
				h2: "Regulators, listing data and consent in Canada",
				body: [
					"Provincial real estate regulators set advertising rules, for example on how the brokerage name appears and how other brokerages' listings are shown. Listing data from your board or from CREA's DDF comes with its own display terms. We build to the rules you give us; your broker of record and your board should confirm them.",
					"Saved searches and new-listing alerts are commercial email, so CASL consent is needed and the form should ask for it clearly. Personal information from buyers and sellers falls under PIPEDA or your provincial privacy law, which is one more reason to keep lead data in your CRM rather than scattered across personal inboxes.",
				],
			},
		],
		builds: [
			{ t: "Listing feed", d: "Your board or DDF feed connected, with sold and expired listings removed on schedule." },
			{ t: "Area pages", d: "Neighbourhood pages written from your agents' knowledge, one distinct page per area." },
			{ t: "Enquiry routing", d: "Leads sent to the right agent by listing, area or rotation, and logged in your CRM." },
			{ t: "Agent profiles", d: "Areas served, recent activity and direct contact for each agent." },
			{ t: "Seller request", d: "A short evaluation or consultation form that goes straight to the listing team." },
		],
		faqs: [
			{
				q: "Can our website show MLS listings?",
				a: "Usually, through your real estate board's IDX feed or CREA's DDF, depending on your membership and what you want to display. Each source has its own rules, such as attribution and refresh timing. We connect the feed you are entitled to, apply its rules, and set checks so listings that are no longer active come down promptly rather than lingering.",
			},
			{
				q: "How do neighbourhood pages help a real estate site rank?",
				a: "Searches for homes in a particular neighbourhood are local and specific. A page that genuinely describes that neighbourhood, shows current listings there and names an agent who works it gives search engines and buyers something worth returning to. Thin pages with swapped place names do not. We would rather build fewer, better area pages than a long list of empty ones.",
			},
			{
				q: "What happens to website leads when an agent leaves?",
				a: "Because enquiries are logged in your CRM rather than in personal inboxes, the records stay where your agreements with agents say they should. Routing rules let you reassign an agent's areas and listings in one place, and their profile can come down or redirect the same day. The steps are written into the handover documentation so anyone on staff can follow them.",
			},
		],
		services: ['website-design', 'seo', 'integrations-automation', 'paid-advertising', 'video-photography'],
		insight: 'stale-listings',
	},
	{
		slug: 'education',
		title: "Education Website Design for Schools",
		description: "Education website design for Canadian schools: separate paths for applicants and current families, program pages that lead with cost and dates, routed forms.",
		h1: "Websites for schools, colleges and training providers",
		lead: "A school website serves people who want in and people who are already in, and most sites try to serve both from the same page. Our education website design gives each group its own path, answers cost and date questions first, and sends every form to the right office.",
		sections: [
			{
				h2: "What prospective students and parents need to find",
				body: [
					"Applicants and their parents arrive with practical questions. What does it cost, when does it start, what are the entry requirements, and how long does it take? They want those answers on the program page, not inside a downloadable viewbook. International applicants add questions about permits and housing, which are best answered with links to official sources. Mature students and career changers read differently again: they look for evening or part-time options and whether prior learning counts.",
					"Current students and families need calendars, closures, forms, fees and the right contact for a teacher or office. How those two audiences compete for the homepage has its own article; here we simply give each one its own entrance.",
				],
				list: [
					"Tuition and fees, with what they include",
					"Start dates and application deadlines",
					"Admission requirements and how to apply",
					"Program length, format and delivery mode",
					"Who to contact with a question, by office",
				],
			},
			{
				h2: "Why school and college websites get hard to use",
				body: [
					"Education sites grow by accretion. Each department adds pages, nobody removes old ones, and site search returns last year's calendar ahead of this year's. Program pages bury fees under paragraphs of mission language. General enquiry forms send everything to one inbox, so an admissions question waits behind a transcript request. Site search indexes every PDF ever uploaded, so a parent looking for the fee schedule gets five versions with no dates on them.",
					"Content ownership is usually the root cause. When every department can publish but nobody is responsible for archiving, the site gets bigger and less accurate every term.",
				],
			},
			{
				h2: "Education website design, scoped around the academic calendar",
				body: [
					"The first phase runs 5 to 7 weeks, planned around your admissions cycle so new program pages are live before your busiest enquiry season. It covers the two top-level paths, program pages with cost, dates and requirements first, and forms that route to admissions, the registrar, finance or a campus office based on what the person selects.",
					"Program pages share one template so applicants can compare them: cost, dates, requirements and length in the same order, then what students do, who teaches, and what comes after. Admissions approves the template once, and each department fills it in for its own programs.",
					"We also set up editing roles, so each department owns its own pages and one person or office owns the archive. Later phases can add an application portal, a parent login, or registration for open houses.",
					"As with every project, scope and price are fixed in writing first, you get a staging link weekly, and every account and document is handed to you at the end.",
				],
			},
			{
				h2: "Privacy, accessibility and advertising in Canadian education",
				body: [
					"Schools hold personal information about students, many of them minors, so forms should collect only what is needed and route to secure systems. Private institutions generally fall under PIPEDA or provincial privacy law, while public institutions often have their own provincial access and privacy legislation. Your privacy lead should review form data flows.",
					"In Ontario, AODA accessibility requirements apply to many educational organizations. Private career colleges are regulated provincially, and some provinces set rules on how programs, costs and graduate outcomes are advertised; check with your regulator before publishing outcome claims. Newsletters to prospective students need CASL consent.",
				],
			},
		],
		builds: [
			{ t: "Two entry paths", d: "Separate top-level routes for applicants and for current students and families." },
			{ t: "Program pages", d: "Cost, start dates, requirements and length first, details after." },
			{ t: "Routed enquiry forms", d: "One form that sends each question to admissions, registrar, finance or a campus office." },
			{ t: "Calendar and notices", d: "Dates and closures current families can find without searching." },
			{ t: "Department editing", d: "Roles that let each office manage its own pages, with a named archive owner." },
		],
		faqs: [
			{
				q: "Should tuition fees be published on our website?",
				a: "In most cases, yes. Cost is one of the first things applicants and parents look for, and a program page without it sends them to a competitor whose page shows it, or into your admissions inbox with the same question. If fees vary by residency or course load, show each case clearly and put a date on the page so readers know it is current.",
			},
			{
				q: "Can different departments update their own pages?",
				a: "Yes. We set up roles so admissions, the registrar, athletics or each campus can edit their own pages without touching the rest of the site. A named person or office owns archiving, so old calendars and expired programs come down each term. A short guide covers how to add a program, post a notice and retire an outdated page.",
			},
			{
				q: "Can the website take applications online?",
				a: "It can link to an existing application system, embed one, or include a custom application portal in a later phase. Many schools already run a student information system with an application module, and connecting to it is usually better than building a parallel one. We look at what you have during scoping and recommend the least disruptive route.",
			},
			{
				q: "When should a school start a website redesign?",
				a: "Work back from your admissions season. The first phase takes 5 to 7 weeks, plus time for internal review, so start early enough that new program pages are live before enquiries peak. We avoid launching during registration, exam weeks or the first days of term, when staff have no time to check pages or answer questions about the change.",
			},
		],
		services: ['website-design', 'web-application-development', 'copywriting-landing-pages', 'seo', 'integrations-automation'],
		insight: 'school-website-two-audiences',
	},
	{
		slug: 'retail-ecommerce',
		title: "Retail Ecommerce Website Design in Canada",
		description: "Retail ecommerce website design in Canada: a storefront and checkout tested on slow phones, digital download delivery, and merch fulfilment with no spreadsheet.",
		h1: "Online stores for Canadian retailers, built to sell on a phone",
		lead: "Most of your shoppers find you on a phone, browse in short bursts, and leave the moment checkout gets awkward. Our retail ecommerce website design keeps that path short, and if you would rather not run the store yourself afterward, we can do that too.",
		sections: [
			{
				h2: "What shoppers check before buying from a smaller store",
				body: [
					"Shoppers buying from an independent store weigh trust as much as price. They look for the total cost including shipping and tax before checkout, a delivery estimate, a return policy in plain language, and signs that a real business stands behind the store: an address, a phone number, reviews.",
					"Product pages carry most of the load. Shoppers want several photos, sizing or dimensions, materials, stock status and an honest description. When any of those is missing, they open a marketplace tab to check the same item there. Gift buyers bring their own checklist: gift wrap, a receipt without prices, and whether the parcel will arrive before a particular date.",
				],
				list: [
					"Total cost, including shipping and tax, before checkout",
					"Delivery times and shipping regions",
					"Return and exchange policy in plain terms",
					"Product photos, sizes and stock status",
					"Payment options they already trust",
				],
			},
			{
				h2: "Where online stores lose orders",
				body: [
					"Checkout is where most stores lose people, and forcing shoppers to create an account before paying is a common cause with its own article on our site.",
					"The other failures are slower to show. Themes loaded with apps that each add scripts, so the store crawls on a mid-range phone over mobile data. Digital products delivered by someone emailing files by hand. Shipping rates that only appear at the final step. Merch orders tracked in a spreadsheet only one person understands. Inventory counts that disagree between the store, the marketplace listing and the shelf.",
				],
			},
			{
				h2: "Retail ecommerce website design, phase by phase",
				body: [
					"The first phase takes 5 to 8 weeks, depending on catalogue size, how much product data needs cleaning, and whether digital downloads or merch are in scope. It covers the storefront, product pages, and a checkout we test on a slow phone over a throttled connection before launch.",
					"Digital downloads are delivered automatically with licence terms attached, and merch runs through on-demand or inventory fulfilment connected to the store, so orders reach the supplier without retyping. We usually build on Shopify or WooCommerce and only go custom when those genuinely do not fit.",
					"Product data gets cleaned in this phase as well: consistent titles, variants set up properly instead of as separate products, and images sized once rather than uploaded at full resolution. Clean data is what makes filters, search and marketplace listings work later.",
					"If you want the store run for you after launch, our Sell team can handle catalogue, pricing, promotions and customer questions, and send you a weekly trading summary. Either way the store, accounts and data stay yours, and there is no retainer you cannot leave.",
				],
			},
			{
				h2: "Tax, consent and language for Canadian online stores",
				body: [
					"GST, HST and provincial sales tax depend on where the buyer is, not only where you are, and digital products have rules of their own. We configure tax in the platform based on your registrations; your accountant should confirm the setup before launch. Prices shown to Canadian shoppers should make clear whether tax is included.",
					"Abandoned-cart and promotional emails need consent under CASL, so we ask for it at checkout rather than assuming it. Stores selling into Quebec should plan for French product content. Ontario's AODA may apply to your business, and an accessible checkout means more shoppers who can finish an order.",
				],
			},
		],
		builds: [
			{ t: "Storefront and product pages", d: "On Shopify, WooCommerce or custom, with sizing, stock and several photos per product." },
			{ t: "Slow-phone checkout", d: "A short checkout tested on a throttled connection before launch." },
			{ t: "Digital download delivery", d: "Secure, automatic file delivery with licensing, at any hour." },
			{ t: "Merch fulfilment", d: "On-demand or inventory fulfilment connected to orders, with no spreadsheet." },
			{ t: "Tax and shipping setup", d: "GST/HST and shipping rules configured for where your buyers are." },
			{ t: "Store operation", d: "Optional day-to-day running by our Sell team, reported weekly." },
		],
		faqs: [
			{
				q: "Shopify or WooCommerce: which suits a Canadian retailer?",
				a: "It depends on your catalogue, your team and what you already run. Shopify is simpler to operate and handles hosting for you; WooCommerce gives more control if you already use WordPress and have someone to maintain it. Both handle Canadian tax and currency. We compare them against your products, apps and budget during scoping and set out the trade-offs in writing.",
			},
			{
				q: "Can one store sell both digital and physical products?",
				a: "Yes. Physical items go through shipping and fulfilment, while digital files are delivered automatically after payment with a secure, expiring link and any licence terms you set. Mixed carts work too. We test both paths before launch, including what a customer sees if a download link expires or they need to retrieve a file later.",
			},
			{
				q: "Can you run our online store after it launches?",
				a: "Yes, that is what our Sell division does. We handle catalogue updates, pricing, promotions and customer questions, and send you a weekly trading summary instead of asking you to live in the admin panel. You keep ownership of the store and every account, and you can bring operations back in-house whenever you choose.",
			},
			{
				q: "What launches first on a new online store?",
				a: "Usually the products that sell best, on a working checkout, so revenue starts while the rest of the catalogue is added. The first phase takes 5 to 8 weeks: nearer five for a small catalogue on a standard platform, nearer eight with messy product data, digital downloads, merch fulfilment or marketplace connections. The written scope lists what goes live first.",
			},
		],
		services: ['ecommerce-development', 'storefront-operation', 'digital-downloads', 'merchandise', 'email-marketing'],
		insight: 'guest-checkout',
	},
	{
		slug: 'fitness-wellness',
		title: "Fitness Studio & Gym Website Design",
		description: "Fitness and wellness website design in Canada: timetables, drop-ins and memberships in one place, with online sign-up so nobody has to phone to join a class.",
		h1: "Websites for gyms, studios and wellness practices that fill classes",
		lead: "Someone deciding to try your studio wants to find a class at a time that suits them and book it on the spot. Our fitness and wellness website design keeps the timetable, drop-ins and memberships in one place, and sign-up never needs a phone call.",
		sections: [
			{
				h2: "What a first-time visitor checks before booking a class",
				body: [
					"New visitors are nervous as much as curious. Beyond the timetable, they want to know what a class is actually like, which level suits them, what to bring, whether there is an intro offer, and what happens when they walk in. Photos of real classes and instructors carry more weight than polished stock images.",
					"Members want speed: book, cancel, check who is subbing in, buy another class pack. Wellness practices that offer massage, physiotherapy or counselling alongside classes also have clients who want a specific practitioner, and who care more about that person's training and approach than about the room, so those profiles need more depth than a class instructor's.",
				],
				list: [
					"A timetable they can filter by class type and level",
					"Drop-in, class pack and membership options compared clearly",
					"An intro offer and what the first visit involves",
					"Instructor or practitioner profiles",
					"Booking and payment without a call",
				],
			},
			{
				h2: "Why fitness websites send people to the phone",
				body: [
					"The timetable is where things usually go wrong, because schedules, drop-ins and memberships collide in ways a separate article on our site explores.",
					"Around it sit smaller faults that add up. Pricing that lists six membership types without saying which one a beginner should pick. A booking widget that opens a different-looking site and asks for an account before showing availability. Waivers printed and signed at the front desk. Instructor bios two years out of date. Schedule changes announced on social media that never reach the website. Each one becomes a phone call, or a visitor who never comes back.",
				],
			},
			{
				h2: "Fitness and wellness website design: the first phase",
				body: [
					"The first phase runs 3 to 5 weeks. We connect the booking software you already use, or help you choose one, and bring its timetable into your own site so it looks and reads like the rest of your pages. Drop-ins, class packs and memberships sit on one pricing page with a plain recommendation for newcomers. The timetable on the site reads the booking system's own data rather than a copy someone retypes, so when a class moves, the change shows everywhere at once.",
					"Sign-up, payment and the waiver happen online in one sitting. Instructor pages are editable by your staff, and the intro offer gets its own page you can point ads and posts at. Later phases can add on-demand video, a members area, or a welcome email sequence for new sign-ups.",
					"You see the work on a staging link weekly against a fixed, written price, and every account is in your name when we hand over.",
				],
			},
			{
				h2: "Memberships, waivers and consent in Canada",
				body: [
					"Several provinces regulate gym and fitness membership contracts, for example with rules on cooling-off periods, contract length and cancellation. Your online terms should match those rules, so have your lawyer review the membership agreement and waiver before they go into the sign-up flow; we build the flow around the text they approve. Signed waivers hold personal information, so they belong in your booking system rather than a separate form tool.",
					"Class reminders are treated differently from promotional email, but newsletters and offers need CASL consent. If your practice includes regulated health professionals, such as physiotherapists or massage therapists in provinces that regulate them, their colleges' advertising rules apply to how those services are described on the site.",
				],
			},
		],
		builds: [
			{ t: "Branded timetable", d: "Your booking software's schedule shown inside your own site, filterable by class and level." },
			{ t: "Pricing page", d: "Drop-ins, packs and memberships compared, with a clear pick for beginners." },
			{ t: "Online sign-up", d: "Account, payment and waiver completed in one sitting, with no phone call." },
			{ t: "Intro offer page", d: "A focused page for first-timers that ads and posts can point to." },
			{ t: "Instructor profiles", d: "Bios and class lists your staff can keep current themselves." },
		],
		faqs: [
			{
				q: "Can our booking software's schedule look like part of our website?",
				a: "Usually, yes. Most studio booking platforms offer embeddable widgets or an API, and we style the timetable to match your site so visitors never feel they have been sent somewhere else. Where styling options are limited, we design the surrounding page around them. We check what your platform allows during scoping, before the price is fixed.",
			},
			{
				q: "Can new members sign waivers online?",
				a: "Yes. The waiver can be part of the sign-up flow, signed digitally and stored with the member's record in your booking system, so nobody hands over a clipboard at the front desk. The wording should come from your lawyer, especially for higher-risk activities. We build the step around their approved text and test that signed copies are saved correctly.",
			},
			{
				q: "Should a gym show membership prices on its website?",
				a: "In most cases, yes. Visitors who cannot see a price tend to assume it is high, or they phone to ask, which is the call the website should have saved. If you prefer a consultation before quoting, at least show drop-in and intro prices, and explain plainly what a membership includes and how cancellation works.",
			},
		],
		services: ['website-design', 'integrations-automation', 'video-photography', 'paid-advertising', 'email-marketing'],
		insight: 'class-schedule-page',
	},
];
