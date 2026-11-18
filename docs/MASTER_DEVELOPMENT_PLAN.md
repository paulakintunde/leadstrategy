# Lead Strategy website master development plan

Status: Draft for owner approval
Prepared: 2026-08-21
Target launch window: 14 calendar days after the build is authorized and launch dependencies are supplied

## 1. Executive decision

Build the approved prototype as a static-first Astro website, deploy it to Cloudflare Pages from GitHub, and preserve the existing identity and page structure.

The two-week MVP will be a real business website, not a visual demo. It must:

- explain the Build, Market, Create, and Sell divisions;
- generate booked calls and qualified enquiries;
- accept direct purchases for at least one real digital product;
- publish real Markdown-based insights without placeholder authors or claims;
- meet a WCAG 2.2 AA quality target;
- achieve strong Core Web Vitals on representative mobile hardware;
- include search, privacy, security, analytics, and operational foundations;
- deploy automatically from an approved GitHub workflow with Cloudflare preview URLs.

A custom cart, complex customer accounts, high-volume programmatic city pages, affiliate automation, and advanced product fulfillment are post-launch work unless every required asset and account is ready early.

## 2. Product and design read

Reading this as an established Canadian digital agency site for small-business and institutional decision-makers, using a bold editorial-tech language with a trust-first conversion layer.

Initial design dials:

- `DESIGN_VARIANCE: 8` - retain the prototype's asymmetric, distinctive agency character.
- `MOTION_INTENSITY: 6` - retain purposeful reveals and interaction feedback, with reduced-motion support.
- `VISUAL_DENSITY: 4` - keep the site readable while showing a broad service range.

Mode: redesign-preserve. The Astro implementation modernizes structure, maintenance, accessibility, images, and performance. It does not silently replace the brand or rewrite the information architecture.

### Preserve

- The eight prototype destinations: Home, Services, Sectors, Work, Insights, Store, About, Contact.
- The Build, Market, Create, and Sell service model.
- The black, warm-paper, and orange visual identity.
- The Lead Strategy mark and wordmark treatment.
- The direct, concrete writing voice.
- Useful interactions: mobile navigation, service grouping, sector disclosure, insight filters, and reduced-motion fallbacks.
- Existing section anchors such as `#build`, `#market`, `#create`, `#sell`, and store category anchors where they remain useful.

### Improve or retire

- Demo-only contact and newsletter behavior.
- The visual cart counter with no checkout behind it.
- Placeholder metrics, client results, authors, team members, prices, and articles.
- Placeholder LinkedIn links and links that point back to `#main` instead of real articles.
- External Google Font requests. Fonts should be self-hosted and subset.
- CSS-only artwork used as a substitute for a complete image system.
- Multiple labels for the same contact action, such as “Start a project,” “Get in touch,” and “Contact us.” Use one primary label consistently.
- Inline styles and repeated header/footer markup.
- Unnecessary scroll listeners where a browser-native or observer-based implementation is more efficient.
- Pure black and pure white where a near-black or off-white retains the design with less visual harshness.

## 3. Current prototype audit

The local prototype contains eight HTML pages, one shared stylesheet, one shared JavaScript file, and no image assets. It is not currently an Astro project and the workspace is not initialized as a Git repository.

### Existing strengths

- Clear page structure and strong service organization.
- Unique brand tokens documented in the prototype README.
- Useful skip link, form labels, focus states, mobile drawer, and reduced-motion handling.
- Content is more specific than typical agency copy.
- The prototype already separates services, sectors, proof, insights, commerce, and contact.

### Launch-critical gaps

- Contact validation succeeds locally but sends nothing.
- Newsletter signup sends nothing and does not record consent.
- Store products, prices, cart, payment, delivery, taxes, and refunds are placeholders.
- Work results and several audit figures are placeholders.
- Insight cards do not lead to article pages and use placeholder authors.
- No privacy policy, terms, refund policy, accessibility statement, affiliate disclosure policy, favicon, social image, sitemap, or robots policy.
- No canonical URLs, Open Graph/Twitter metadata, structured-data system, or reusable SEO component.
- No real image inventory, licensing register, or responsive image pipeline.
- No automated build, test, preview, deployment, dependency update, or rollback workflow.
- The GitHub URL supplied by the owner could not be verified publicly. Its spelling is `leadstratgy`; confirm that this is intentional before the first push.

## 4. Goals and measurable outcomes

### Primary conversion goals

1. Book a call.
2. Submit a qualified project enquiry.
3. Purchase a digital product.

### MVP measurement plan

- Track primary CTA clicks, booking-link clicks, successful enquiry submissions, checkout starts, successful purchases, and newsletter consent.
- Record source, medium, campaign, landing page, and conversion type without collecting more personal data than needed.
- Establish baseline conversion rates after the first 30 days. Do not invent targets before traffic quality is known.
- Review lead quality manually during the first month and add a qualified-lead metric once the qualification rule is agreed.

### Technical targets

- Lighthouse targets on key templates: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+.
- Field Core Web Vitals target: LCP under 2.5 seconds, INP under 200 milliseconds, CLS under 0.1 at the 75th percentile.
- No horizontal overflow at 320, 375, 768, 1024, 1280, and 1440 pixel widths.
- No critical axe accessibility violations.
- Zero broken internal links and zero placeholder claims at production launch.
- Contact and checkout success paths verified in production.

## 5. MVP scope

### Included

- Astro project and reusable layouts/components.
- Current eight top-level pages with extensionless URLs.
- Three legal/trust pages: Privacy, Terms, and Accessibility.
- Refund and digital-delivery terms, either as a dedicated page or a clear section of Terms.
- At least one complete article template and at least three real launch articles if approved copy can be produced in time.
- Markdown/MDX content collections for articles, case studies, products, services, and sectors where structured content adds value.
- Working contact form with spam protection and email delivery.
- A booking CTA linked to the owner's selected scheduling provider.
- One to three real digital products with hosted checkout and tested fulfillment.
- Responsive images, favicon set, site manifest, and social share image.
- Sitemap, robots.txt, canonical URLs, metadata, and structured data.
- Cloudflare Pages deployment connected to GitHub.
- Pull-request preview deployments.
- Security headers and production caching rules.
- Cloudflare Web Analytics at launch. PostHog is planned after launch as requested.
- Automated checks for build, types, formatting, internal links, and core accessibility issues.

### Excluded from the two-week MVP unless ready ahead of schedule

- Customer accounts, order history, subscriptions, multi-vendor inventory, or a custom cart.
- A headless Shopify storefront.
- Physical-product shipping and warehouse integration.
- Automated AI publishing without human approval.
- Dozens of city pages or mass-generated keyword pages.
- Fake case studies, estimated client metrics presented as results, or placeholder testimonials.
- Social automation and a full CRM implementation.
- Translation and French localization. The architecture should not prevent future localization.

## 6. Information architecture and URL policy

Recommended launch routes:

```text
/
/services/
/sectors/
/work/
/insights/
/insights/[article-slug]/
/store/
/store/[product-slug]/
/about/
/contact/
/privacy/
/terms/
/accessibility/
/404/
```

Keep primary navigation labels stable. Use `/contact/` as the single primary conversion destination and add a consistent “Book a call” action inside that page and where context warrants it.

If any version of leadstrategy.ca has previously indexed URLs, export those URLs from Search Console or another crawl source before launch and create a one-to-one redirect map. No indexed URL should be discarded without a relevant replacement.

## 7. Technical architecture

### Core stack

- Astro with TypeScript in strict mode.
- Static output for nearly every page.
- Native Astro components and browser JavaScript for small interactions.
- No React, Angular, Vue, or other client framework unless a specific interactive island justifies its cost. The technologies Lead Strategy sells do not need to be dependencies of its marketing site.
- CSS variables and component-scoped/global CSS based on the current brand tokens.
- Astro Content Collections with schema validation for Markdown and MDX.
- `astro:assets` for local image optimization, responsive `srcset`, dimensions, and modern formats.
- `@astrojs/sitemap` for sitemap generation.
- Cloudflare Pages Functions only where server behavior is required, primarily forms and payment webhooks.

### Suggested repository structure

```text
/
  public/
    _headers
    _redirects
    favicon.*
    robots.txt
  src/
    assets/
      fonts/
      images/
    components/
    content/
      articles/
      case-studies/
      products/
    layouts/
    pages/
    styles/
    utils/
  functions/ for required server handlers
  tests/
  astro.config.mjs
  package.json
  README.md
```

### Hosting decision

Use Cloudflare Pages with GitHub integration for this MVP:

- production branch: `main`;
- build command: `npm run build`;
- output directory: `dist`;
- preview deployment for each pull request;
- production deployment only after required checks pass and the change is merged.

Pages serves the pre-rendered site from `dist` and compiles the narrow `/functions` directory only for required server behavior.

## 8. GitHub workflow and release management

### Repository setup

1. Confirm that `https://github.com/paulakintunde/leadstratgy` is the correct destination and that the owner has access.
2. Initialize Git inside the Astro project, not in the parent Downloads folder.
3. Commit the original prototype in a preserved `prototype/` or `archive/prototype-v1/` directory, or tag it separately before migration.
4. Add an `.env.example` containing names only, never secrets.
5. Add a clear README with local development, content authoring, testing, preview, and deployment instructions.

### Branch model

- `main`: protected production branch.
- Short-lived feature branches, such as `feat/astro-foundation` and `content/service-pages`.
- Pull requests are required for production changes after the initial scaffold.
- Use squash merges and conventional, descriptive commit messages.

### Required pull-request checks

- dependency install from the lockfile;
- Astro type/content validation;
- lint and formatting check;
- production build;
- internal-link check;
- unit tests for utilities and form validation;
- automated accessibility smoke test on representative templates;
- Lighthouse CI or an equivalent performance budget check when the preview URL is available.

### Operations

- Enable GitHub dependency alerts and Dependabot.
- Enable secret scanning where the repository plan permits it.
- Protect `main` and require successful checks.
- Keep Cloudflare and email/payment secrets only in provider environment settings.
- Roll back by selecting the last known-good Cloudflare deployment or reverting the merge commit.

## 9. SEO strategy

“All keywords” is not a workable target. The search strategy will prioritize topics that match a real service, a reachable buyer, and a useful next action.

### Search architecture

Build keyword clusters around:

- four divisions: Build, Market, Create, Sell;
- sixteen service lines;
- high-fit sectors: local business, professional services, churches and nonprofits, schools and education, healthcare and clinics, retail/e-commerce, trades, food/hospitality, real estate, and fitness/wellness;
- buyer problems: slow site, failed forms, low local visibility, poor checkout completion, disconnected tools, weak retention, unclear reporting;
- national and location intent: Canada first, then cities where Lead Strategy can credibly serve and add unique local evidence.

### Location-page policy

Do not launch thin copies for every major city. Start with national service pages and the actual operating location. Add city pages only when each page can include meaningful local content such as service availability, market context, examples, partner knowledge, pricing/logistics differences, and a local conversion path.

Post-launch target: one or two genuinely useful city/service pages per month, based on Search Console demand and sales priorities. Candidate markets include Vancouver, Toronto, Calgary, Edmonton, Ottawa, Montreal, Winnipeg, Halifax, Victoria, and other cities supported by evidence. Quebec-facing content requires a separate language and legal review before scale.

### On-page requirements

- One descriptive title and meta description per indexable URL.
- One clear H1 and logical heading hierarchy.
- Canonical URL, Open Graph data, social image, published/modified dates where appropriate.
- Descriptive internal links and breadcrumb navigation on articles, products, and case studies.
- Useful alt text for informative images and empty alt attributes for decorative images.
- Author identity, editorial review date, sources, and correction/update policy for articles.
- No keyword stuffing, doorway pages, hidden text, fake review schema, or unsupported claims.

### Structured data

Use JSON-LD only when the visible page supports it:

- `Organization` and an appropriate `ProfessionalService` or `LocalBusiness` representation;
- `WebSite` and `WebPage`;
- `BreadcrumbList`;
- `Service` on relevant service pages;
- `Article` on real articles;
- `Product` and `Offer` on purchasable products;
- `FAQPage` only for visible FAQ content and only where current search guidelines support it.

Validate with Google's Rich Results Test and Schema.org validation. Structured data is descriptive, not a guarantee of a rich result.

### Technical SEO launch checklist

- XML sitemap containing canonical, indexable URLs only.
- Production `robots.txt` referencing the sitemap.
- Preview deployments protected with `noindex` headers.
- Custom 404 page that returns a real 404 status.
- Redirect map tested before DNS cutover.
- HTTPS-only canonical domain and one preferred hostname.
- Search Console property verified and sitemap submitted after production launch.
- URL inspection for Home, Services, one article, one product, and Contact.

## 10. Content system and publishing plan

### Editorial positioning

Lead Strategy should publish evidence-based, operationally useful content for Canadian buyers. The goal is to earn trust and qualified demand, with affiliate revenue as a disclosed secondary model where it fits.

The existing copy register is worth preserving: direct, concrete, commercially aware, and skeptical of vague marketing claims.

### Content types

- Service pages for high commercial intent.
- Sector guides that connect sector problems to relevant services.
- Case studies based only on approved real work and evidence.
- Research and how-to articles.
- Comparisons and buyer guides where Lead Strategy has genuine experience.
- Digital product landing pages.
- Short update notes when a full article is unnecessary.

### Revised 14-step article workflow

The owner's proposed workflow is retained but made evidence-safe:

1. **Topic intake:** record the seed topic, target buyer, business objective, region, and proposed conversion.
2. **Keyword classification:** classify intent, funnel stage, expected difficulty, data confidence, and monetization fit. Volume and difficulty require an approved data provider.
3. **Live SERP research:** collect current top results, visible featured snippets, People Also Ask questions, discussion results, and official sources. Never fabricate SERP features.
4. **Competitor/content-gap analysis:** compare topic coverage, format, freshness, evidence, authorship, schema, and user experience. Domain authority is a third-party metric, not a Google metric.
5. **Intent and journey mapping:** define the primary intent and the next helpful action. Mixed-intent topics may need separate pages.
6. **Monetization review:** identify relevant affiliate programs or products, verify current terms, and reject placements that compromise usefulness or trust.
7. **Brief and outline:** choose format, angle, evidence requirements, CTA, internal-link targets, and media list.
8. **Draft in Lead Strategy voice:** write the complete article with specific examples, transparent limitations, and no unsupported performance claims.
9. **Semantic and readability edit:** improve entity coverage, terminology, clarity, and reading flow. Do not use “LSI keyword density” or mechanical keyword injection.
10. **Media production:** create or source a hero image and only the inline visuals that materially improve understanding. Record provenance and rights.
11. **SEO packaging:** finalize title, description, headings, canonical, structured data, image metadata, and update date.
12. **Links and disclosure:** add useful internal links, authoritative external sources, affiliate tracking parameters, `rel="sponsored"` where applicable, and a prominent plain-language disclosure.
13. **Human QA and approval:** check facts, links, accessibility, plagiarism risk, claims, affiliate compliance, brand voice, and the rendered article.
14. **Publish and learn:** merge through GitHub, monitor indexation and conversions, refresh when facts change, and document results.

### Content output package

Each approved article produces:

- Markdown/MDX source with validated frontmatter;
- source and fact-check log;
- image assets plus provenance/license notes;
- SEO metadata and schema-ready fields;
- internal/affiliate link map;
- QA result;
- review/update date.

### Launch content recommendation

Do not publish the ten placeholder insight cards. Launch with three complete pieces if time permits:

1. A high-intent Canadian website planning/cost guide.
2. A practical website and lead-form audit checklist for small organizations.
3. A sector-specific guide tied to the strongest available proof, such as clinics, nonprofits/churches, trades, or local retail.

If three cannot be reviewed properly, launch one strong article and a smaller, honest archive. Quality and credibility beat a full-looking placeholder grid.

### Sustainable cadence

- First eight weeks: one substantial article per week.
- Months three to six: two new substantial articles and one meaningful refresh per month.
- City/service expansion: one or two pages per month after demand and uniqueness are validated.
- Quarterly: prune, consolidate, redirect, or refresh underperforming content.
- Affiliate articles: no more than one for every two non-affiliate educational pieces during the first six months.

## 11. Image and media plan

### Required launch assets

- Primary logo/wordmark in reusable SVG or equivalent web-safe form.
- Favicon and app icon set derived from the existing mark.
- One 1200x630 social share image template.
- A hero visual and supporting images for the Home page.
- One representative image for each launch article.
- Real or properly labeled product imagery for every purchasable product.
- Real approved case-study imagery, or a restrained non-deceptive abstract visual if client work cannot be shown.

### Production rules

- Generate or source images only with documented rights.
- Never present generated people, workplaces, dashboards, testimonials, or results as real client evidence.
- Keep a media register: filename, source, creator/model, prompt where applicable, license/permission, alt text, crop, and page use.
- Store originals separately and commit optimized derivatives needed by the site.
- Use explicit width and height to prevent layout shift.
- Prefer AVIF/WebP with a suitable fallback generated through Astro.
- Preload only the actual LCP image. Lazy-load below-the-fold images.
- Avoid text baked into images unless it is part of an approved brand asset.

### Initial performance budgets

- Hero image: target 200 KB or less at common mobile delivery sizes.
- Below-the-fold images: target 120 KB or less per delivered responsive candidate where quality permits.
- Social image: optimize for platform reliability rather than in-page performance.
- Fonts: subset and self-host only the weights/styles actually used.

## 12. Conversion, forms, booking, and email

### Contact form

Recommended implementation:

- POST to a same-origin Cloudflare server endpoint.
- Validate and normalize on the server, not only in the browser.
- Protect with Cloudflare Turnstile and a honeypot/time-based signal.
- Enforce method, content type, body size, field length, and rate limits.
- Send through an approved transactional email provider such as Postmark or Resend.
- Return accessible success and error states without losing entered data unnecessarily.
- Log only operational metadata needed to diagnose delivery. Do not log full enquiry contents by default.
- Send an owner notification and, if desired, a plain acknowledgement to the sender.

### Booking

Use a lightweight link to the owner's selected Cal.com, Calendly, Google Calendar appointment schedule, or equivalent. Avoid a heavy embed on every page. Add campaign parameters and track the outbound click.

### Newsletter

- Use explicit unchecked consent.
- Explain sender identity, content type, and expected frequency beside the form.
- Record consent source, time, and policy version.
- Use confirmed opt-in where the email provider supports it.
- Include sender identification and a working unsubscribe path in every commercial email.
- Do not add contact-form enquirers to marketing lists unless they separately consent.

## 13. Shop and payment plan

### MVP recommendation

Use real product pages in Astro and Stripe Payment Links or hosted Checkout for payment. Launch without a custom cart unless multi-item cart behavior is a proven requirement.

This provides a tested hosted payment surface quickly while keeping the product catalogue, positioning, SEO, and content in the Astro repository.

### MVP product requirements

For each product, the owner must provide:

- final name and description;
- price and currency;
- finished downloadable file or service scope;
- license and permitted use;
- product image;
- tax classification;
- delivery method;
- support contact;
- refund/cancellation policy;
- version/update promise, if any.

### Digital delivery

Two acceptable launch paths:

1. Use a specialized digital-delivery provider connected to Stripe.
2. Store private files in Cloudflare R2 and use a verified payment webhook to issue an expiring download link by email.

The second path keeps more infrastructure under Cloudflare but requires webhook, replay-protection, delivery, and failure-recovery testing. Choose it only if the required accounts and product files are ready by the end of the first build week.

### Services

Do not sell open-ended agency services as generic cart items. Fixed-scope audits, workshops, or deposits can use a specific payment link after price, deliverables, scheduling, cancellation, and tax treatment are defined. Custom work continues through the enquiry and booking path.

### Commerce controls

- Test success, failure, cancellation, duplicate webhook, refund, and expired-link paths.
- Verify receipts, business identity, tax settings, customer support, and statement descriptor.
- Keep card data entirely on the payment provider's hosted surface.
- Track checkout start and confirmed purchase without treating a success-page visit alone as proof of payment.

## 14. Privacy, legal, accessibility, and affiliate compliance

This section is an implementation baseline, not legal advice. The business should obtain Canadian legal/accounting review for final policies, taxes, claims, and provincial obligations.

### Privacy baseline

- Identify the legal entity and privacy contact.
- State what data is collected, why, service providers used, where data may be processed, retention approach, individual rights, and complaint path.
- Collect only what is necessary for enquiries, purchases, analytics, and subscribed communications.
- Document deletion and access-request handling.
- Apply PIPEDA principles and determine whether provincial laws such as BC PIPA, Alberta PIPA, or Quebec privacy law apply to the organization and customers.
- Reassess analytics consent before PostHog, advertising pixels, session replay, or behavioral profiling is enabled.

### CASL baseline

- Obtain and record valid consent for commercial email.
- Identify the sender and provide contact information.
- Include a simple working unsubscribe mechanism.
- Process unsubscribe requests within the required period.
- Keep contact-enquiry consent separate from newsletter/marketing consent.

### Accessibility baseline

Target WCAG 2.2 AA even where a narrower legal minimum may apply. Test complete processes, including navigation, contact, booking handoff, checkout handoff, filters, tabs, accordions, form errors, and download delivery.

Include:

- semantic structure and landmarks;
- full keyboard operation and visible focus;
- sufficient contrast in every state;
- 200% zoom and reflow testing;
- reduced-motion handling;
- clear form labels, instructions, errors, and status announcements;
- touch target sizing;
- alt text and media transcripts/captions where needed;
- an accessibility statement and feedback contact.

### Affiliate and claims baseline

- Disclose material connections clearly near the recommendation, not only in a footer.
- Use `rel="sponsored"` on paid/affiliate links and `nofollow` where appropriate.
- Do not imply first-hand testing unless it occurred and is documented.
- Do not publish fake reviews, fake results, or unverifiable superlatives.
- Keep evidence for performance, price-comparison, savings, and “best” claims.

## 15. Security plan

### Static-first risk reduction

Most pages ship as static HTML, CSS, and optimized assets. Dynamic surface area is limited to forms, payment callbacks, and carefully selected integrations.

### Application controls

- Content Security Policy starting in report-only mode during preview, then enforced after all required origins are known.
- `X-Content-Type-Options: nosniff`.
- Clickjacking protection with CSP `frame-ancestors` and/or `X-Frame-Options` as appropriate.
- Strict `Referrer-Policy`.
- Restrictive `Permissions-Policy`.
- HSTS after HTTPS and hostname redirects are verified.
- No secrets in the browser bundle, repository, Markdown, or build logs.
- Server validation and anti-automation controls for every write endpoint.
- Payment webhook signature verification and idempotency.
- Minimal third-party scripts and documented approved domains.
- Dependency pinning through the lockfile, automated alerts, and scheduled updates.

### Cloudflare controls

- HTTPS redirect and canonical hostname redirect.
- Managed DDoS protections supplied by the platform.
- Turnstile on public submission endpoints.
- Rate limiting/WAF rules for form or webhook endpoints if traffic or abuse warrants them.
- Preview deployments marked `noindex`.

### Operational controls

- Least-privilege GitHub and Cloudflare access.
- Multi-factor authentication on GitHub, Cloudflare, email, and payment accounts.
- Written ownership for domain, repository, analytics, email provider, and Stripe.
- Quarterly access review and immediate key rotation after staff/vendor changes.

## 16. Performance and optimization plan

### Page-delivery strategy

- Pre-render content at build time.
- Ship no client JavaScript on pages that do not need it.
- Hydrate only isolated interactive components.
- Self-host subset fonts with `font-display: swap` and sensible metric fallbacks.
- Use content-hashed assets with long immutable cache lifetimes.
- Keep HTML and frequently changing files on a shorter cache policy.
- Reserve dimensions for images, embeds, and dynamic status messages.

### Initial budgets

- Route-specific JavaScript: target under 75 KB compressed for ordinary pages and under 125 KB for the most interactive page.
- CSS: target under 60 KB compressed for the shared production bundle.
- No third-party script may be added without a documented purpose, owner, privacy effect, and measured performance cost.
- Avoid autoplay media and background video in the MVP.

### Verification

- Lighthouse on Home, Services, Insights article, Store product, and Contact.
- Test on throttled mobile CPU/network profiles.
- Check real-device iOS Safari and Android Chrome when available.
- Inspect Cloudflare Web Analytics field data after launch and prioritize field regressions over lab-score cosmetics.

## 17. Analytics and reporting

### Launch

Use Cloudflare Web Analytics for lightweight traffic and performance visibility. Add first-party conversion events at the server or destination where possible.

Daily launch dashboard:

- visits and top landing pages;
- traffic source/campaign;
- booking clicks;
- successful form submissions and delivery failures;
- checkout starts and verified purchases;
- 404s and top broken/referring URLs;
- Core Web Vitals signals when enough data exists.

### Post-launch PostHog phase

After the privacy configuration is approved, add PostHog for funnels and product-style behavior analysis:

- landing page to service view;
- service view to contact/booking;
- product view to checkout to verified purchase;
- article to service/product CTA;
- form starts, validation errors, and successful submissions.

Do not enable session replay or broad autocapture by default. Define an event dictionary and intentionally capture only the data needed to answer business questions.

### Reporting cadence

- First week: daily technical and conversion review.
- First month: weekly traffic, lead, purchase, form-delivery, and search review.
- Ongoing: monthly commercial report and quarterly content/SEO review.

## 18. Two-week implementation schedule

The schedule begins only after the approval gate in section 19 is met.

### Days 1-2: foundation

- Confirm repo, accounts, ownership, and launch dependencies.
- Preserve the prototype and initialize the Astro project.
- Establish TypeScript, formatting, content schemas, tokens, fonts, shared layout, and navigation.
- Connect GitHub and create the first Cloudflare preview deployment.

Exit: the Astro shell builds and deploys from a branch with no production DNS change.

### Days 3-4: page migration

- Migrate Home, Services, Sectors, Work, Insights, Store, About, and Contact.
- Convert shared structure into components.
- Preserve useful interactions and implement reduced-motion behavior.
- Replace file-style links with route helpers and extensionless URLs.

Exit: all eight routes render responsively with real navigation and no known placeholder links.

### Days 5-6: content and SEO foundation

- Create article, case-study, and product collections.
- Add metadata, canonical, Open Graph, structured data, sitemap, robots, 404, breadcrumbs, and redirects.
- Draft legal/trust pages and remove unapproved claims/placeholders.
- Load approved launch articles and proof.

Exit: every indexable route has validated metadata and publishable content.

### Day 7: conversion system

- Implement contact endpoint, server validation, Turnstile, email delivery, accessible states, and logging policy.
- Add the booking link and newsletter consent flow if the email platform is ready.

Exit: enquiry delivery succeeds in preview and abuse/failure cases are tested.

### Day 8: shop

- Publish real product data and images.
- Connect hosted checkout.
- Connect and test selected digital-delivery method.
- Verify receipts, cancellation, failure, refund, and purchase events.

Exit: a real test-mode purchase reaches a real test delivery path.

### Day 9: image production

- Produce/select launch images, record provenance, create responsive variants, and add alt text.
- Generate favicon and social assets from the approved mark.

Exit: no critical image slot is represented by misleading or unlabeled placeholder media.

### Day 10: accessibility, security, and performance

- Complete keyboard, focus, zoom, contrast, reduced-motion, screen-reader smoke, and form testing.
- Add CSP and other security headers.
- Tune scripts, fonts, images, and caching to budgets.

Exit: automated checks pass and priority defects are resolved.

### Day 11: cross-template QA

- Test route status, links, metadata, 404, redirects, filters, accordions, tabs, forms, checkout handoff, and downloads.
- Test representative browsers and viewports.
- Conduct copy and claims review.

Exit: release candidate checklist is complete with no critical or high-severity defects.

### Day 12: production preparation

- Configure production environment variables, domain, DNS, analytics, email sender, Turnstile hostname, Stripe live mode, and Search Console verification.
- Confirm backup and rollback paths.

Exit: production settings are ready without changing the public hostname prematurely.

### Day 13: soft launch

- Deploy to production infrastructure.
- Run live form, email, booking, checkout, receipt, purchase verification, download, headers, canonical, and analytics tests.
- Keep promotion limited while issues are corrected.

Exit: all critical business journeys work on the public hostname.

### Day 14: launch and observation

- Announce launch after final owner approval.
- Submit sitemap and inspect priority URLs.
- Monitor forms, checkout, errors, performance, and 404s.
- Record known improvements in the post-launch backlog.

## 19. Approval gate and owner-supplied dependencies

The build should not start until these are confirmed, or explicitly deferred with a fallback:

- Correct GitHub repository and access method.
- Permission to initialize and push the codebase.
- Cloudflare account/project access and intended production hostname.
- Final legal entity name, business address requirements, privacy contact, and support email.
- Booking provider and booking URL, or approval to launch contact-only.
- Transactional email provider and verified sender.
- Newsletter platform, or approval to omit newsletter signup at MVP.
- At least one real digital product, final price, currency, file, license, refund policy, and delivery method.
- Stripe account and relevant Canadian tax registration/settings reviewed by the owner/accountant.
- Real case-study facts and permission, or approval to launch Work without metrics/client identities.
- Approved author identity and article review process.
- Approval to generate missing images and confirmation of any supplied image rights.
- Final LinkedIn and other social URLs.

If product/payment inputs are not supplied by Day 4, the Store can launch only as a catalogue or waitlist. It cannot honestly satisfy the product-purchase objective.

## 20. Quality gates and definition of done

The MVP is launch-ready only when:

- all planned production routes return the intended status;
- all navigation, CTA, legal, social, article, and product links resolve;
- there are no visible placeholders, fake metrics, fake authors, fake products, or demo messages;
- the contact form delivers and handles errors accessibly;
- booking points to the approved live schedule;
- at least one product completes payment and verified delivery in live configuration using a controlled test purchase;
- privacy, terms, accessibility, refund/delivery, and affiliate disclosures are present where applicable;
- metadata, canonical URLs, sitemap, robots, structured data, and social previews validate;
- previews are not indexable;
- security headers are verified on the public domain;
- keyboard, focus, reflow, reduced-motion, and key assistive-technology smoke tests pass;
- performance budgets pass or every exception has an owner and scheduled remediation;
- analytics records agreed conversions without unnecessary personal data;
- GitHub is the source of truth and Cloudflare can roll back to the prior deployment;
- the owner signs off on copy, claims, legal text, products, prices, images, and production behavior.

## 21. Post-launch roadmap

### First 30 days

- Fix real-user performance and conversion problems.
- Publish weekly articles.
- Replace any abstract case-study visuals as real assets become available.
- Add PostHog after privacy/event review.
- Implement lead-quality tagging and monthly reporting.
- Test CTA wording and form length only after enough traffic exists.

### Days 31-90

- Add qualified city/service pages based on evidence.
- Add real case studies and testimonials with permission.
- Expand digital products and evaluate whether a cart is justified.
- Add automated content freshness reminders and link checks.
- Build service-specific landing pages for paid campaigns.
- Add CRM/email automation once the manual flow is understood.

### Quarter two and beyond

- Evaluate bilingual content and Quebec readiness.
- Evaluate headless commerce only if catalogue/order complexity requires it.
- Add customer portal or licensing only if product support data justifies it.
- Expand affiliate content while maintaining the editorial ratio and disclosure rules.
- Run quarterly security, accessibility, content, dependency, and analytics audits.

## 22. Risk register

| Risk | Impact | Control |
|---|---|---|
| Placeholder proof is mistaken for real work | High trust and legal risk | Remove it or label it non-public; publish only approved evidence |
| Product assets or Stripe/tax setup arrive late | Purchase goal misses launch | Require completion by Day 4; use catalogue fallback transparently |
| “All keywords/all cities” expands scope | Thin content and delayed launch | Use prioritized clusters and evidence-based city expansion |
| Affiliate-first content harms trust | Lower lead quality and compliance risk | Educational-first ratio, prominent disclosure, human approval |
| Forms look successful but email fails | Lost leads | Server result, provider delivery monitoring, production test, fallback contact address |
| Heavy fonts, images, and scripts regress speed | Lower conversion and search quality | Budgets, self-hosting, responsive images, minimal client JS, CI checks |
| Security headers break required embeds | Broken booking/checkout/media | CSP report-only in preview, explicit origin inventory, then enforcement |
| Two-week scope grows into custom commerce | Launch delay | Hosted checkout MVP, custom cart and accounts deferred |
| Repository URL/access is incorrect | Deployment blocked | Verify repo and permission before Day 1 |
| Legal policy is treated as final advice | Compliance gap | Owner/counsel review and documented approval |

## 23. Current authoritative references

- [Cloudflare Pages Astro deployment](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Cloudflare Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Cloudflare Pages custom headers](https://developers.cloudflare.com/pages/configuration/headers/)
- [Cloudflare Turnstile server validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/)
- [Astro content collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro image and assets API](https://docs.astro.build/en/reference/modules/astro-assets/)
- [Google Search developer guide](https://developers.google.com/search/docs/fundamentals/get-started-developers)
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Office of the Privacy Commissioner of Canada: PIPEDA](https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/)
- [CRTC CASL guidance](https://crtc.gc.ca/eng/com500/guide.htm)
- [Accessibility Standards Canada ICT standard](https://accessible.canada.ca/standards-and-technical-guides/standards-and-technical-guides-database/can-asc-en-301-5492024-accessibility-requirements-ict-products-and-services-en-301-5492021-idt?mode=full-html)
- [Competition Bureau affiliate/material connection guidance](https://competition-bureau.canada.ca/en/deceptive-marketing-practices/types-deceptive-marketing-practices/influencer-marketing-and-competition-act)
- [Stripe Payment Links](https://docs.stripe.com/payment-links)
- [Stripe Tax in Canada](https://docs.stripe.com/tax/supported-countries/canada)

## 24. Plan approval decision

Before implementation, the owner should approve or modify these five decisions:

1. Preserve the current prototype's brand and eight-page architecture.
2. Use Astro static-first on Cloudflare Pages with GitHub previews.
3. Use same-origin protected forms with an external transactional email provider.
4. Use Stripe hosted checkout/direct-buy links for the MVP rather than a custom cart.
5. Launch with a small set of complete, real articles/products/case studies rather than visible placeholders.
