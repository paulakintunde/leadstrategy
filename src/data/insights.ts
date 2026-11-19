// Insight articles: informational, one specific problem each.
// Rendered at /insights/<slug>/. Card copy lives in INSIGHTS in site.ts.
import type { InsightPage } from './types';

export const INSIGHT_PAGES: InsightPage[] = [
	{
		slug: 'quote-form-funnel',
		sector: 'trades-contractors',
		headline: 'The quote form is the whole funnel',
		title: 'Contractor Quote Form Best Practices',
		description: "Contractor quote form best practices: where enquiries get lost between site, inbox and scheduling tool, what a good form asks, and how to test yours this week.",
		published: '2026-11-18',
		lead: "Enquiries get lost between the site, the inbox and the scheduling tool, and almost none of that loss shows up in your analytics. For a contractor, the quote form is not one step in the funnel. It is the funnel.",
		sections: [
			{
				h2: 'Where quote requests actually go missing',
				body: [
					"A homeowner finds you, looks at a few project photos and fills in the form. From their side, the job is done. From yours, it has barely started, and there are several places it can quietly stop.",
					"The submission goes to a shared info@ address that three people check, or nobody checks on a busy site day. It lands in spam because the form sends from an address your mail server does not trust. Someone reads it on a phone between jobs, means to reply that evening, and forgets. Or it gets copied by hand into the scheduling tool and the street address is mistyped.",
					"Meanwhile the homeowner has filled in two other forms. Whoever calls back first usually gets the site visit. Your analytics still records a conversion, because the form was submitted. Nothing in the report tells you that nobody answered it.",
				],
			},
			{
				h2: 'Why a contact form is not a quote form',
				body: [
					"Many trade sites use the contact form that came with the theme: name, email, message. That form collects just enough to start a conversation, and then the estimator has to have that conversation. Where is the property? What exactly needs doing? Can you send photos? When were you hoping to start? Each question is another email, and every round trip is a chance for the homeowner to go quiet.",
					"The opposite mistake is just as common. A long form with every possible field, all required, built on a desktop and never tried on a phone. The person filling it in is often standing in the room that needs work, holding a phone with one hand. If the form fights them, they leave.",
					"A quote form sits between those two. It asks for exactly what your estimator needs to decide whether to book a visit, and nothing else.",
				],
			},
			{
				h2: 'What a good contractor quote form looks like',
				body: [
					"Start from the first phone call your estimator usually makes. Whatever they ask in the first two minutes belongs on the form. Whatever they only need after the site visit does not.",
					"The form should also do work after it is submitted. It routes by trade or service area to the person who actually prices that work, as a notification they will see on site. It creates the job record in your scheduling or CRM tool directly, so nobody retypes it. It sends the homeowner an automatic reply that says who will contact them and roughly when. Spam is filtered with a hidden field and server-side checks rather than a puzzle that frustrates real customers.",
				],
				list: [
					'Type of work, as a short list that matches the trades you actually offer.',
					'Postal code, checked against your service area so out-of-area requests get a polite answer straight away.',
					'A short description box with an example of what helps, such as room size or what has already been tried.',
					'Photo upload that works from a phone camera roll.',
					'Preferred timing: urgent, within a month, or planning ahead.',
					'Phone number and the best time to call, because trade conversations usually start by phone.',
				],
			},
			{
				h2: 'Test your own quote form this week',
				body: [
					"Pick up your phone, switch off Wi-Fi, and submit a real request as if you were a customer. Attach a photo. Then note what happens. Did the confirmation page say anything useful? Did an automatic reply arrive? Who on your team received the request, and how long was it before someone noticed? Check the spam folder as well as the inbox.",
					"Next, follow the request into your scheduling tool. If someone has to copy it across, that copy step is a leak, even if it usually works. Finally, pull the last month of form submissions and mark each one: replied to, booked, or never answered. You do not need a dashboard for this. A list and an afternoon will tell you whether the form is the problem or the follow-up is.",
					"If the test turns up gaps, fix routing and the automatic reply first. They are usually small changes, and they protect every enquiry that arrives after them.",
				],
			},
		],
		checklist: [
			'Submit a test request from your phone on mobile data, with a photo attached.',
			'Confirm the request reaches the person who prices that trade, not a shared inbox.',
			'Check that the form sends from an address your mail server will not flag as spam.',
			'Make sure the homeowner gets an automatic reply saying who will call and when.',
			'Remove any field your estimator never uses in the first call.',
			'Mark last month\'s submissions as answered, booked or missed.',
		],
		services: ['website-design', 'integrations-automation', 'copywriting-landing-pages'],
	},
	{
		slug: 'monthly-giving-page',
		sector: 'nonprofits-charities',
		headline: 'Monthly giving needs a different page',
		title: 'Monthly Donation Page Best Practices',
		description: "Monthly donation page best practices for Canadian charities: what recurring donors need to see, in what order, and how to keep their gifts running.",
		published: '2026-11-18',
		lead: "One-time and recurring donors want different information, in a different order. A single donate page with a monthly toggle tries to serve both and usually serves neither well.",
		sections: [
			{
				h2: 'Two decisions that look the same',
				body: [
					"A one-time gift is often a response to a moment: an appeal, an emergency, a friend's fundraiser. The donor has already decided. They want the form, a sensible default amount and a receipt, and they want it to take as little time as possible.",
					"A monthly gift is a commitment with no end date. The donor is deciding whether they trust you with their card for the foreseeable future. That is a bigger decision, and it raises questions a one-time donor never asks. How do I stop it? When will I be charged? What does a small monthly amount actually do?",
					"When both decisions share one page, the page is built for the quicker one. The questions a monthly donor has go unanswered, and the toggle sits there unclicked.",
				],
			},
			{
				h2: 'What a monthly donor needs to know first',
				body: [
					"Write the monthly giving page around the donor's hesitations, in roughly the order they arise. Lead with what a regular gift makes possible over a year, in terms of real programs you can stand behind. Then deal with control: how they change the amount, update a card or cancel, and whether they can do it themselves without calling the office.",
					"Receipting matters more here than on a one-time page. The CRA sets what an official donation receipt must contain, and many charities issue one consolidated receipt for the year to monthly donors rather than a receipt every month. Whichever you do, say so on the page, and check the details with your accountant.",
				],
				list: [
					'What a monthly gift funds, described in concrete program terms you can verify.',
					'The charge date and how it appears on a bank or card statement.',
					'How to change, pause or cancel, ideally through a self-service link.',
					'When and how tax receipts are issued.',
					'Your charitable registration number and a way to contact a real person.',
				],
			},
			{
				h2: 'Building a separate monthly giving page',
				body: [
					"Give monthly giving its own URL, so it can be linked from appeals, email footers and thank-you pages. Default the form to monthly and show amounts that feel reasonable as a regular commitment rather than repeating your one-time suggestions.",
					"The payment setup needs as much attention as the copy. Recurring gifts lapse quietly when a card expires or is replaced, and the donor rarely notices. Your payment processor should retry failed charges and send a card update request automatically, and someone on your team should see a list of failed gifts every month. A monthly program that does not handle expired cards loses donors who never meant to leave.",
					"The welcome email after the first gift is part of the page. Confirm the amount and charge date, explain receipting, and link to the self-service portal. Ask for email consent plainly on the form: CASL exempts some fundraising email from registered charities, but not every message or every nonprofit, and a donation confirmation is not the same as permission for a newsletter. Check your own case with your lawyer.",
				],
			},
			{
				h2: 'Keep the one-time page short',
				body: [
					"Once monthly giving has its own page, the one-time form can get shorter. Remove the monthly toggle or keep it as a plain, unselected option. Avoid pre-selecting monthly on a page built for one-off gifts. Donors who miss the setting find a second charge on their statement, ask for a refund and remember the experience.",
					"The better moment to ask for a monthly gift is after a one-time gift succeeds. The thank-you page and the receipt email can invite the donor to make it regular, with a link to the monthly page, at a point when they have just shown they trust you.",
				],
			},
			{
				h2: 'A test you can run before the next appeal',
				body: [
					"Ask someone outside the organization to set up a small monthly gift on your site while you watch. Do not help. Note every point where they pause or ask a question. Then ask them to cancel it. If they cannot find how without emailing you, a nervous donor will not start in the first place.",
					"Finally, look at your recurring donor list in your payment tool and find gifts that stopped in the last few months. Check whether they were cancelled on purpose or failed on an expired card. The answer tells you whether to work on the page or on the payment follow-up first.",
				],
			},
		],
		checklist: [
			'Give monthly giving its own page and URL, defaulted to monthly.',
			'Explain how to change or cancel before the donor reaches the form.',
			'State when and how tax receipts are issued, and confirm it with your accountant.',
			'Turn on automatic retries and card update requests for failed recurring charges.',
			'Remove any pre-selected monthly option from the one-time form.',
			'Invite one-time donors to give monthly on the thank-you page.',
		],
		services: ['website-design', 'integrations-automation', 'email-marketing'],
	},
	{
		slug: 'multi-location-booking',
		sector: 'healthcare-clinics',
		headline: 'Booking across locations without phone tag',
		title: 'Multi-Location Clinic Online Booking',
		description: "Multi-location clinic online booking explained: one intake form, several calendars, and the scheduling rules that decide which patient gets which slot.",
		published: '2026-11-18',
		lead: "Online booking for a clinic with more than one location is one intake form, several calendars, and the rules that decide who gets which slot. When those rules live only in the front desk's heads, patients end up on the phone.",
		sections: [
			{
				h2: 'Why patients still call to book',
				body: [
					"A clinic adds online booking, and the phone keeps ringing. The usual reason is not that patients prefer calling. It is that the booking page cannot answer their question, so they need a person who can.",
					"Look at what a patient sees. A list of locations, then a list of practitioners, then a calendar. They do not know whether the physiotherapist at the east location treats their kind of injury, whether a first visit needs a longer slot, or whether they need a referral. They guess, book the wrong appointment type, and the front desk calls them back to fix it. That call costs more time than the original booking would have.",
				],
			},
			{
				h2: 'The rules hidden behind every appointment slot',
				body: [
					"Every clinic runs on scheduling rules, even if nobody has written them down. A practitioner works at one location on Tuesdays and another on Thursdays. Initial assessments need a longer slot than follow-ups. Some services need a particular room or piece of equipment. Some patients need a referral first. Some appointment types can only be booked by existing patients.",
					"Online booking only works when those rules are in the system instead of in the receptionist's memory. Writing them down is usually the most useful part of the whole project, because it shows where the rules contradict each other.",
				],
				list: [
					'Which practitioners work at which locations, on which days.',
					'Appointment types and their lengths, separated into new and returning patients.',
					'Services that need a specific room, device or second staff member.',
					'Appointments that require a referral or a prior assessment.',
					'Buffer time, breaks and blocks the front desk keeps for urgent cases.',
				],
			},
			{
				h2: 'What good multi-location booking looks like',
				body: [
					"Start with what the patient knows. Patients usually know what is wrong and roughly where they live, not which practitioner they want. Let them choose the service first, then show locations that offer it, nearest first, then available times. Patients who already have a practitioner should be able to go straight to that person's calendar.",
					"Use one intake form across all locations, so the front desk sees the same fields wherever the patient books. Collect only what staff actually need to see before the visit. Every extra field is personal health information you have to store and protect, and PIPEDA and provincial privacy laws govern how you handle it. Ask your booking vendor where data is stored and check your obligations with your privacy advisor.",
					"Staff pages help patients choose, and they belong in the same flow, but regulated health professions have advertising rules set by their colleges. Check titles, credentials and any patient comments against your college's rules before they go on the page.",
				],
			},
			{
				h2: 'The edge cases that bring the phone calls back',
				body: [
					"A booking system that works on launch day can still fail in month three. A practitioner leaves and their future slots stay bookable. A location closes for a holiday and nobody blocks it. A patient cancels online but the freed slot never reaches the waitlist. Reminders go out from one location's phone number for an appointment at another.",
					"Each of these generates calls, and each one has a fix: an offboarding step that clears a calendar, a shared holiday calendar applied to every location, cancellations that notify the waitlist, and reminder templates that pull the correct address and phone number.",
				],
			},
			{
				h2: 'Audit your booking flow this week',
				body: [
					"Ask the front desk to keep a tally for five working days of every call that is really a booking question. Note what the caller wanted to know. Then try to book that same appointment online yourself, as a new patient, on a phone. Each place you get stuck matches one of the calls on the tally.",
				],
			},
		],
		checklist: [
			'Write down every scheduling rule the front desk applies from memory.',
			'Let new patients choose a service before a location or practitioner.',
			'Use one intake form across all locations, with only the fields staff need.',
			'Check staff pages against your college\'s advertising rules.',
			'Add an offboarding step that clears a departing practitioner\'s calendar.',
			'Tally a week of booking-related phone calls and the question behind each.',
		],
		services: ['web-application-development', 'integrations-automation', 'website-design'],
	},
	{
		slug: 'guest-checkout',
		sector: 'retail-ecommerce',
		headline: 'Guest checkout, and why it should lead',
		title: 'Guest Checkout vs Forced Account Creation',
		description: "Guest checkout vs forced account creation: why the account wall loses first-time buyers, when an account is genuinely needed, and how to test your checkout.",
		published: '2026-11-18',
		lead: "Forced account creation is still one of the largest sources of abandonment. Leading with guest checkout costs you very little, and you can still offer an account at the moment it makes sense to the buyer.",
		sections: [
			{
				h2: 'What the account wall asks of a first-time buyer',
				body: [
					"A new customer has found a product, picked a size and pressed the checkout button. Then the store asks them to create an account: choose a password that meets the rules, confirm it, perhaps verify an email address before they can pay. They came to buy one thing. Now they are being asked to start a relationship.",
					"For a repeat customer, an account saves typing. For a first-time buyer it is extra work, another password to remember and an implied promise of marketing email. Some will do it. Others open a new tab to check whether the same product is sold somewhere that lets them just pay. Research firms such as the Baymard Institute have repeatedly found forced account creation to be a leading cause of checkout abandonment.",
				],
			},
			{
				h2: 'Why stores keep the wall up anyway',
				body: [
					"The reasons are usually reasonable on paper. The store wants the customer's email for follow-up. It wants repeat purchases to be easier. The platform made account creation the default and nobody changed it. Or the business sells something that really does need an account.",
					"The first two do not need a mandatory account. A guest checkout already collects an email address for the receipt. Repeat purchases become easier when you offer an account after the first order, not before it.",
				],
			},
			{
				h2: 'A better order: guest first, account after',
				body: [
					"Make guest checkout the first and most obvious option, with a smaller sign-in link for returning customers. Ask for the email address early, so an abandoned checkout can still trigger a reminder where the buyer has agreed to hear from you.",
					"Put the account offer on the order confirmation page. You already have the name, email and address, so creating an account needs one thing: a password. Phrase it around what the buyer gets, such as order tracking and faster checkout next time. Let guests look up an order with their email and order number, so they never need an account just to ask where a parcel is.",
					"While you are in the checkout, check the other things that stop first-time buyers. Prices shown to Canadian buyers usually need GST/HST handling, and tax and shipping should be visible before the final step rather than appearing as a surprise. Express wallet buttons save typing on a phone. Any marketing consent box should be separate and unticked, because CASL requires consent for commercial email.",
				],
			},
			{
				h2: 'When an account is genuinely needed',
				body: [
					"Some purchases really do need an account: subscriptions the customer will manage later, digital downloads that need a re-download link or licence key, and trade buyers with their own pricing. Even then, the account does not have to come first.",
					"You can create the account in the background during checkout using the email the buyer already gave you, and send a link to set a password afterwards. The buyer pays first, gets their order, and finishes setup when they need it.",
				],
			},
			{
				h2: 'Test your checkout on a slow phone',
				body: [
					"Use an older phone on mobile data, not the office Wi-Fi, and buy something from your own store as a new customer. Count the screens between the cart and the payment confirmation, and note each time you are asked to make a decision that is not about the order.",
					"Then look at your store's checkout reports for the step where people drop out. If the biggest drop sits at the account or login screen, you have found the first thing to change.",
					"Do the same test as a returning customer who has forgotten their password. Time how long the reset takes and whether the reset email arrives before you would have given up. A slow reset turns a loyal customer into an abandoned cart just as surely as a forced sign-up does.",
				],
			},
		],
		checklist: [
			'Make guest checkout the first option, with sign-in as a smaller secondary link.',
			'Collect the email address early in checkout.',
			'Offer account creation on the confirmation page with a single password field.',
			'Let guests look up orders with an email and order number.',
			'Show GST/HST and shipping before the final step.',
			'Keep marketing consent separate and unticked.',
			'Run a test purchase on an older phone over mobile data.',
		],
		services: ['ecommerce-development', 'storefront-operation', 'analytics-reporting'],
	},
	{
		slug: 'restaurant-photo-library',
		sector: 'restaurants-food',
		headline: 'A photo library that lasts a year',
		title: 'Restaurant Photo Shoot Planning Guide',
		description: "A restaurant photo shoot planning guide: what to shoot in one afternoon so your website, delivery apps, Google profile and social channels have photos all year.",
		published: '2026-11-18',
		lead: "With a little planning, one afternoon of shooting can give every channel something to post for the whole year. The trick is deciding in advance what each photo is for.",
		sections: [
			{
				h2: 'Why restaurants keep running out of photos',
				body: [
					"The pattern is familiar. Someone snaps a dish under the pass lights on a busy night. It looks fine on the phone and dull everywhere else. The delivery app still shows a dish you dropped last spring. Your Google profile is full of customer photos taken in poor light. Every time a new channel needs an image, someone has to go and find one.",
					"The problem is not a lack of photos. It is a lack of photos made for a purpose. A shoot planned around a shot list fixes that, because each frame is taken with a channel, a size and a season in mind.",
				],
			},
			{
				h2: 'The one-afternoon shot list',
				body: [
					"Build the list from the places a photo has to appear: your website, the menu pages, each delivery app, your Google Business Profile, social posts and stories, and any print. Then cover the categories below. Shoot each important dish in both vertical and horizontal frames, because social stories and website banners crop very differently.",
				],
				list: [
					'Signature dishes, each shot cleanly from the angle that suits it best.',
					'At least one dish from every menu category, so every menu section has an image.',
					'Drinks, desserts and anything you want to sell more of.',
					'Hands in motion: plating, pouring, a knife on the board.',
					'The room, both empty and set, plus the exterior and signage for maps listings.',
					'Team portraits, with written permission from everyone who appears.',
					'Ingredients and suppliers, if provenance is part of your story.',
				],
			},
			{
				h2: 'Planning the afternoon so it actually works',
				body: [
					"Schedule the shoot in the quiet gap between lunch and dinner service, when the kitchen can plate for the camera and the room has daylight. Write the dish order in advance, starting with anything that wilts or melts. Ask the kitchen to make camera plates slightly neater than service plates but still honest: the photo should match what arrives at the table.",
					"Think about the year, not just the day. If you change the menu with the seasons, plan a few upcoming dishes in advance, or book a shorter top-up session when the menu turns over. Shoot the room dressed for a holiday only if you will actually use it. Get photo releases from staff on the day, because chasing them later rarely works.",
				],
			},
			{
				h2: 'Organizing the library so people use it',
				body: [
					"A folder of unnamed files on one person's laptop is not a library. Name every file after the dish or scene, sort the files into folders by subject, and keep a web-ready copy of each image sized for the site alongside the full-resolution original. Write short descriptions while the shoot is fresh. They become alt text on the website and captions for delivery apps.",
					"Then map the library to a rough posting calendar. Which images go on the website now, which wait for the patio season, which are reserved for the menu change. When the person who handles social media is busy, they can open the calendar instead of starting from nothing.",
				],
			},
			{
				h2: 'Check what you already have this week',
				body: [
					"Open every place your restaurant appears online: website, delivery apps, Google profile, social accounts. Write down each image that shows a dish you no longer serve, a room that has since changed, or a photo you would not choose today. That list is the start of your shot list, and it shows which channels need attention first.",
					"Then ask whoever posts for the restaurant where they get images from today. If the answer is their own phone, at the end of a shift, the library is the thing to fix. A photographer can handle the afternoon. The planning, the shot list and the folder structure are what make the photos last.",
				],
			},
		],
		checklist: [
			'List every channel where a photo of your restaurant appears.',
			'Write a shot list that covers every menu category, the room and the exterior.',
			'Book the shoot between lunch and dinner service, in daylight.',
			'Shoot key dishes in both vertical and horizontal frames.',
			'Collect written photo releases from staff on the day.',
			'Name, sort and caption the files before they leave the shoot.',
		],
		services: ['video-photography', 'brand-design', 'website-design'],
	},
	{
		slug: 'spec-sheets-product-pages',
		sector: 'manufacturing',
		headline: 'Spec sheets are the product page',
		title: 'Manufacturer Spec Sheets and Product Pages',
		description: "Manufacturer spec sheets and product pages: why distributors search by part number, why most catalogues block them, and how to build pages around the spec.",
		published: '2026-11-18',
		lead: "Distributors search by part number. Most catalogues make that impossible, because the numbers that matter are locked inside PDFs and images that search engines and site search cannot read.",
		sections: [
			{
				h2: 'How trade buyers actually look for a part',
				body: [
					"A distributor's purchaser or a maintenance engineer rarely browses. They have a part number from a drawing, a work order or the part in their hand, and they paste it into a search box. Sometimes it is your number. Sometimes it is an old number you superseded, or a competitor's number they want to cross-reference.",
					"If that search returns nothing, or returns a category page of similar items, they move on. The buyer was ready to order. Your catalogue simply could not tell them it had what they needed.",
				],
			},
			{
				h2: 'Why most catalogues hide the part number',
				body: [
					"Manufacturing catalogues are often built from the print catalogue. Each product family gets a page with a photo, a marketing paragraph and a link to a PDF spec sheet. The specifications, dimensions and every variant's part number live in that PDF, sometimes as a scanned image.",
					"Site search usually indexes page titles and body text, not the contents of attached PDFs, so the part number is invisible to it. Variants are collapsed into one page, so a specific size or material has no URL of its own. Search engines see the same thin page for the whole family. And small formatting differences, a hyphen or a missing leading zero, are enough to make an exact search fail.",
				],
			},
			{
				h2: 'Building the product page around the spec',
				body: [
					"Turn the spec sheet into the page. Every orderable variant gets its own URL, with the part number in the page title, the heading and the URL itself. The specifications go on the page as a real table in text, not an image, so buyers can read it on a phone and search engines can index it. The PDF stays as a download for people who need to file it.",
				],
				list: [
					'Part number, description and the product family it belongs to.',
					'A full specification table in text: dimensions, materials, ratings, tolerances.',
					'Units in both metric and imperial where your buyers use both.',
					'Superseded and cross-reference numbers that point to this part.',
					'Downloads: spec sheet PDF, CAD files, installation and compliance documents.',
					'Related parts, such as fittings, seals or replacement components.',
				],
			},
			{
				h2: 'Search that understands part numbers',
				body: [
					"Your site search should treat a part number as a part number. That means ignoring spaces, hyphens and slashes, handling leading zeros, matching partial numbers, and looking up superseded and cross-reference numbers as well as current ones. When a search finds an exact match, it should go straight to that product page instead of showing a results list.",
					"If you sell in Quebec, French product information is a legal matter as well as a courtesy, so check your obligations with your lawyer before deciding how to handle translations. Trade pricing, stock levels and order history usually belong behind a distributor login, so the public page can show everything else without exposing your price list.",
				],
			},
			{
				h2: 'Test your catalogue with five real part numbers',
				body: [
					"Ask your inside sales team for five part numbers customers asked about recently, including at least one superseded number. Search for each one on your own site, then in a search engine with your company name. Try them with and without hyphens. For each search, note whether you reached the right product page, a category, a PDF or nothing at all.",
					"Then pick one product family and count how many orderable variants it has against how many pages exist for it. The gap between those two numbers is roughly how much of your catalogue a buyer cannot find directly.",
					"Finally, ask a distributor you trust how they look up your parts today. If the answer involves a phone call to your inside sales team or a PDF saved on their desktop, your website is not yet doing the job a catalogue should. That conversation will also tell you which product families to fix first.",
				],
			},
		],
		checklist: [
			'Give every orderable variant its own URL with the part number in the title.',
			'Put specifications on the page as a text table, with the PDF as a download.',
			'List superseded and cross-reference numbers on each product page.',
			'Make site search ignore hyphens and spaces in part numbers.',
			'Send exact part-number matches straight to the product page.',
			'Keep trade pricing behind a distributor login.',
		],
		services: ['website-design', 'seo', 'web-application-development'],
	},
	{
		slug: 'one-page-per-problem',
		sector: 'professional-services',
		headline: 'Nobody reads the services page',
		title: 'How to Structure Professional Service Pages',
		description: "How to structure professional service pages so a prospect searching for one problem lands on a page about that problem, not a list of everything you do.",
		published: '2026-11-18',
		lead: "Prospects arrive from a search for one specific problem, and land on a list of eleven. The fix is not better wording on the list. It is a page for each problem worth winning.",
		sections: [
			{
				h2: 'What your prospect typed before they arrived',
				body: [
					"Nobody searches for an accounting firm's services. They search for the thing keeping them up at night: a CRA review letter, a business they want to incorporate, a dispute with a landlord, a partner leaving the firm. They type it in their own words, often as a question.",
					"If they reach your site at all, they land on a services page with a heading for every area you practise, each with a short paragraph. Their problem is in there somewhere, maybe under a name they would not use. They have to work out whether you handle it, and they usually decide faster than they read.",
				],
			},
			{
				h2: 'Why firms end up with one long list',
				body: [
					"The services page is written from inside the firm. It mirrors how the practice is organized, by department or credential, because that is how partners think about the work. It is also the safest page to write: list everything, commit to nothing, and nobody can say their area was left out.",
					"The cost is that the page cannot rank for any one problem and cannot speak to any one person. A paragraph about estate planning sits between business advisory and tax disputes, and a worried executor reading it finds nothing that tells them they are in the right place.",
				],
			},
			{
				h2: 'Anatomy of a page built for one problem',
				body: [
					"A problem page is narrower and more useful. It is written for one situation, uses the words a client would use, and answers the questions they would ask on a first call.",
				],
				list: [
					'A heading that names the problem the way clients describe it.',
					'Who the page is for, and who it is not for.',
					'What you do about it, step by step, and roughly how long each step takes.',
					'How fees work: fixed, hourly or scoped after a first conversation.',
					'What the client needs to have ready before they contact you.',
					'One clear next step, with an intake form that asks the questions you would ask anyway.',
				],
			},
			{
				h2: 'Choosing which problems deserve their own page',
				body: [
					"Do not start from your list of practice areas. Start from evidence of what people actually ask. Read through recent intake emails and first-call notes and group them by the problem the client described. Look at the search queries already bringing people to your site in Google Search Console. Ask whoever answers the phone which questions come up every week.",
					"Pick the problems that come up often and that you want more of. A firm that wants more small-business clients does not need its first new page to be about the work it already gets by referral. Keep the general services page as a short index that links to each problem page, rather than deleting it.",
					"If you work in a regulated profession, your law society, accounting body or college may set rules on how you describe your services, outcomes and specialties. Check new pages against those rules before they go live.",
				],
			},
			{
				h2: 'Run this test on your own site',
				body: [
					"Take the three problems your best recent clients came to you with. Search for each one the way the client would phrase it. Then go to your own site and try to find a page that speaks directly to it within ten seconds. If what you find is a single line on a long list, that problem is a page waiting to be written.",
					"Repeat the exercise with the questions your intake person hears most often. Each one that has no clear answer on the site is a phone call or an email someone has to handle by hand. A good problem page answers them before the first conversation, so that conversation can start with the client's situation instead of the basics.",
				],
			},
		],
		checklist: [
			'List the problems clients describe in intake emails and first calls.',
			'Check Search Console for the queries already reaching your site.',
			'Write one page per problem, headed in the client\'s own words.',
			'Explain how fees work on each problem page.',
			'Keep the services page as a short index linking to problem pages.',
			'Review new pages against your professional body\'s advertising rules.',
		],
		services: ['copywriting-landing-pages', 'seo', 'website-design'],
	},
	{
		slug: 'stale-listings',
		sector: 'real-estate',
		headline: 'Listings age faster than the site around them',
		title: 'Stale Real Estate Listings on Your Website',
		description: "Stale real estate listings on your website: where listing feed integrations break, what a sold or outdated listing costs in enquiries, and how to catch it.",
		published: '2026-11-18',
		lead: "A brokerage site can look fresh while its listings quietly go out of date. Here is where feed integrations break, and what a stale listing costs in enquiries.",
		sections: [
			{
				h2: 'How a listing goes stale without anyone noticing',
				body: [
					"The homepage looks fine. The design is recent, the agent photos are current. But a house that sold three weeks ago is still marked active, a price reduction never came through, and a new listing appears with no photos. Nobody on the team notices, because agents work from the board system, not the public website.",
					"Buyers notice. They find a home they like, send an enquiry, and hear back that it sold weeks ago. Some will understand. Many will assume the rest of your listings are just as unreliable and go back to the large portals where they started.",
				],
			},
			{
				h2: 'Where listing feed integrations break',
				body: [
					"Listings usually reach a brokerage site through a feed from the local board or from CREA's Data Distribution Facility, imported by a plugin or a scheduled job. Each link in that chain can fail on its own, and many fail silently.",
				],
				list: [
					'Feed credentials expire or are rotated, and the import stops without an error anyone sees.',
					'The board changes field names or rules, and the mapping on your site no longer matches.',
					'The scheduled job that runs the import stops after a server or hosting change.',
					'Photos come from a separate source that times out or changes address.',
					'A caching layer keeps serving old listing pages after the data has updated.',
					'The site is redesigned, but the feed plugin is left on an outdated version.',
				],
			},
			{
				h2: 'What a stale listing costs',
				body: [
					"The direct cost is wasted enquiries. Every message about a sold home is a buyer who was ready to talk and found nothing to talk about. An agent spends time replying, and the buyer leaves with a worse impression than if they had never found the listing.",
					"There are slower costs too. Search engines index listing pages, so sold homes can stay in results long after they close, sending visitors to dead ends. Out-of-date prices can raise compliance questions with your board, whose display rules you agreed to when you took the feed. And agents stop sending clients to the website once they have been embarrassed by it once.",
				],
			},
			{
				h2: 'A feed that tells you when it fails',
				body: [
					"The fix is less about the import and more about monitoring it. Record the time of the last successful import and alert someone by email or text if it falls behind schedule. Compare the count of active listings on the site with the count in the source feed, and flag any difference. Show a 'last updated' time on listing pages, which keeps the team honest and reassures buyers.",
					"Decide what happens to a listing when it sells, within your board's rules: remove it, mark it sold, or redirect it to a page of similar homes in that area. Route each enquiry to the listing agent automatically, with the listing details attached, so a reply goes out on the first email.",
				],
			},
			{
				h2: 'Spot-check your listings this week',
				body: [
					"Pick ten listings at random from your site and check each one against the board system: status, price, photos, open house dates. Then search for a few recently sold addresses and see whether your site still shows them as available. If even one is wrong, check when the feed last ran successfully. If nobody on the team knows how to check that, start there.",
					"While you are checking, send a test enquiry from one listing page and see where it lands. Note who receives it, whether the listing address and number came with it, and how long a reply would take on a normal day. A current listing with a slow or misrouted enquiry loses the buyer almost as surely as a stale one.",
				],
			},
		],
		checklist: [
			'Find out where your listing feed comes from and who maintains the import.',
			'Record the last successful import and alert someone when it is late.',
			'Compare active listing counts between the site and the source feed.',
			'Decide how sold listings are handled within your board\'s rules.',
			'Route each listing enquiry to the listing agent automatically.',
			'Spot-check ten listings against the board system every month.',
		],
		services: ['integrations-automation', 'web-application-development', 'seo'],
	},
	{
		slug: 'school-website-two-audiences',
		sector: 'education',
		headline: 'Two audiences, one homepage',
		title: 'School Website Homepage Best Practices',
		description: "School website homepage best practices: separate paths for applicants and current families, program pages that answer cost and dates first, and a test for both.",
		published: '2026-11-18',
		lead: "Applicants and current families need different paths, and neither should scroll past the other. A school homepage that tries to be a noticeboard and a brochure at once ends up failing both.",
		sections: [
			{
				h2: 'Who is on your homepage right now',
				body: [
					"On any given morning, two quite different people open your school's homepage. One is a parent, or an adult learner, deciding whether to apply. They know very little about you and are comparing you with other schools. The other is a current parent or student who needs one thing quickly: today's closure notice, a form, the calendar, the portal login.",
					"Their needs barely overlap. The prospective family wants to understand programs, costs, dates and what makes you different. The current family wants to get in and out. A homepage that serves one well often gets in the way of the other.",
				],
			},
			{
				h2: 'How school homepages turn into noticeboards',
				body: [
					"It happens gradually. The homepage is the most visible page, so every department wants a slot on it. A sports result, a fundraiser, a reminder about forms, a lunch menu change. Each item makes sense on its own. Together, they push admissions information below a wall of news that means nothing to someone who has never visited.",
					"The reverse happens too. A redesign led by admissions puts a large video and a tagline at the top, and current families have to hunt for the portal link they use every day. They start bookmarking deep pages instead, and phone the office when those links break.",
				],
			},
			{
				h2: 'Two clear paths from the first screen',
				body: [
					"Give each audience a visible door in the first screen, without scrolling. Applicants get a short path built around their decision. Current families get a compact set of quick links that never moves. Supporting audiences, such as staff, alumni and donors, can live in the footer or a secondary menu.",
				],
				list: [
					'For applicants: programs, tuition and fees, key dates, how to apply, and how to book a visit.',
					'For current families: calendar, closures, forms, the portal login and contact details by office.',
					'News and events on their own page, with only the most important item on the homepage.',
					'Forms that route to the right office, rather than one general inbox.',
				],
			},
			{
				h2: 'Program pages should answer cost and dates first',
				body: [
					"The applicant's path leads to program pages, and that is where school sites often lose people. The page opens with a mission statement and a photo of smiling students. Cost, start dates, application deadlines and entry requirements are three clicks away or in a PDF.",
					"Reverse the order. Put tuition and fees, start dates and the application deadline near the top of each program page. Follow them with what a typical week looks like, who teaches the program and what students go on to do, using only outcomes you can show. End with the next step: apply, book a visit or ask a question. Accessibility matters on every page. Ontario's AODA sets accessibility requirements for many organizations, including schools, and other provinces have their own rules, so check which apply to you.",
				],
			},
			{
				h2: 'Test both paths this week',
				body: [
					"Recruit two people who do not work at the school. Ask the first to find the cost and next application deadline for one program, starting from the homepage on a phone. Ask the second to find the date of the next school closure and a permission form. Time each task and watch where they hesitate. If either one takes more than a few taps, or needs to scroll past content meant for the other audience, you have found the first change to make.",
					"Then ask the office staff which questions they answer by phone or email every week. Questions from current families usually point to quick links that are missing or hard to find. Questions from prospective families usually point to a program page that hides cost, dates or entry requirements. Both lists are a ready-made brief for the next round of changes.",
				],
			},
		],
		checklist: [
			'Give applicants and current families each a visible path in the first screen.',
			'Move news and events to their own page.',
			'Put tuition, start dates and deadlines near the top of every program page.',
			'Keep the current-family quick links in the same place on every page.',
			'Route each form to the office that handles it.',
			'Check your site against the accessibility rules that apply in your province.',
		],
		services: ['website-design', 'copywriting-landing-pages', 'integrations-automation'],
	},
	{
		slug: 'class-schedule-page',
		sector: 'fitness-wellness',
		headline: 'Class schedules are the hardest page to get right',
		title: 'Fitness Class Schedule Page Best Practices',
		description: "Fitness class schedule page best practices: how timetables, drop-ins and memberships collide, what the page should show, and how to stop the phone ringing.",
		published: '2026-11-18',
		lead: "Timetables, drop-ins and memberships collide on one page, and the phone rings when they do. The schedule is the page your clients open most, so it is the one most worth getting right.",
		sections: [
			{
				h2: 'Why the schedule page makes the phone ring',
				body: [
					"Many of the calls a studio gets are schedule questions in disguise. Is the six o'clock class still on? Is there space? Can I drop in or do I need a membership? Which class suits a beginner? Is it the usual instructor tonight? Each caller has looked at the website first, and the website did not answer.",
					"The schedule page fails in predictable ways. It is a PDF or an image of the timetable that was accurate when it was uploaded. It shows times but not whether a class is full. It lists class names that mean something to regulars and nothing to a newcomer. Or it is accurate, but booking means downloading an app and creating an account before the visitor knows what a class costs.",
				],
			},
			{
				h2: 'Three systems that rarely agree',
				body: [
					"The schedule page sits where three separate things meet. The timetable says which classes run when, with whom, in which room. Drop-in rules say who can book a single class and what it costs. Memberships and class packs decide who can book what, how far ahead, and what happens when they cancel late.",
					"In many studios, these live in different places. The timetable is in a spreadsheet, the prices are on a separate page and the membership rules are in the booking software. When an instructor is replaced or a class moves, one of them gets updated and the others do not. The phone rings until someone notices.",
				],
			},
			{
				h2: 'What a good class schedule page shows',
				body: [
					"A good schedule page answers the caller's question before they pick up the phone. It reads its data live from your booking system, so what the visitor sees is what the front desk sees.",
				],
				list: [
					'A day-by-day view that defaults to today and works on a phone without zooming.',
					'Filters by class type, level, instructor and location.',
					'Spots left, and a waitlist option when a class is full.',
					'A plain description of each class and who it suits, including beginners.',
					'Drop-in price and what each membership covers, beside the book button.',
					'Substitutions and cancellations shown on the class itself.',
					'The cancellation policy and what to bring to a first class.',
				],
			},
			{
				h2: 'Keep one source of truth',
				body: [
					"The rule that fixes most schedule problems is simple: the timetable exists in one place, and every other copy reads from it. That place is usually your booking software. The website should embed or pull the live schedule from it, rather than showing a copy someone has to update by hand. Social posts and email announcements should link to the live schedule instead of attaching a picture of it.",
					"Check what your booking software allows before redesigning anything. Some systems offer an embeddable widget that is hard to style. Others offer an API that lets the schedule sit natively on your site. Either is better than a static timetable, and the choice affects how much the schedule can match the rest of your site.",
				],
			},
			{
				h2: 'Book a class on your phone this week',
				body: [
					"Pretend you have never visited your studio. On your phone, find a beginner-friendly class tomorrow evening, work out what it costs to drop in, and book it. Note every point where you would have given up and called. Then ask the front desk to list the questions they answered by phone this week, and check which ones the schedule page could have answered.",
					"Repeat the test as an existing member who wants to switch to a different class this week. Check whether the schedule shows what their membership covers, whether they can cancel the original booking themselves, and whether the late-cancellation rules are visible before they commit. Members who can manage their own bookings call less, and they are more likely to try a new class.",
				],
			},
		],
		checklist: [
			'Replace any PDF or image timetable with a live schedule from your booking system.',
			'Show spots left and offer a waitlist on full classes.',
			'Put the drop-in price and membership coverage next to the book button.',
			'Describe every class in plain words, including who it suits.',
			'Show substitutions and cancellations on the class itself.',
			'Book a class as a newcomer on your phone and note where you would call instead.',
		],
		services: ['integrations-automation', 'website-design', 'web-application-development'],
	},
];
