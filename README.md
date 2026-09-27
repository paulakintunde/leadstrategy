# Lead Strategy website

Astro MVP for [leadstrategy.ca](https://leadstrategy.ca), designed for Cloudflare Pages and deployed from GitHub.

## Stack

- Astro 7 in static output mode
- Cloudflare Pages for hosting, previews and edge headers
- Cloudflare Pages Functions for contact delivery
- Cloudflare Turnstile for form abuse protection
- Markdown content collections planned for insights, work and products

## Prototype fidelity

The approved prototype is archived in `src/prototype/` and supplies the page-specific `<main>` markup for Home, Services, Sectors, Work, Insights, Store, About and Contact. Its visual assets are preserved in `public/assets/`.

Astro owns the shared header, footer, metadata, clean routes and deployment integration. Prototype `.html` links are converted to their clean Astro equivalents during the build. This keeps the approved design as the visible source of truth while retaining Astro SEO, security and Cloudflare support.

## Local development

Requirements: Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Validation:

```sh
npm run check
npm run build
```

## Cloudflare Pages

Connect the GitHub repository to a Pages project and use:

- Build command: `npm run build`
- Production branch: `main`
- Build output directory: `dist`
- Root directory: `/`
- Node version: `22`

`wrangler.jsonc` identifies `dist` as the Pages build output directory. The files in `public/_headers` and `public/robots.txt` are copied into the deployment. The official Astro sitemap integration emits `sitemap-index.xml` during the build.

The Pages build must use a branch containing the Astro project. Until pull request #1 is merged, that branch is `codex/astro-mvp`; `main` contains only the seed README.

## Contact form

The form stays disabled unless `PUBLIC_TURNSTILE_SITE_KEY` is present at build time. The Pages Function also requires these encrypted runtime variables:

- `TURNSTILE_SECRET_KEY`
- `LEAD_WEBHOOK_URL`

Use `.dev.vars.example` as the local configuration guide. Never commit `.dev.vars` or real secrets.

The lead webhook must accept JSON over HTTPS. Its destination should be configured to deliver to the approved inbox or CRM. Test the public form, spam rejection, failure path and inbox routing before launch.

## Current launch blockers

- Calendar booking URL
- Turnstile site and secret keys
- Approved lead-delivery webhook or email provider
- Real case-study evidence and approvals
- Digital product files, prices, licence, tax and refund decisions
- Final legal review of privacy, terms and accessibility copy

The original prototype also remains untouched at `../lead-strategy-site` for visual comparison.
