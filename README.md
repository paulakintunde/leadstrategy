# Lead Strategy website

Astro MVP for [leadstrategy.ca](https://leadstrategy.ca), designed for Cloudflare Pages and deployed from GitHub.

## Stack

- Astro 7 in static output mode
- Cloudflare Pages for hosting, previews and edge headers
- Cloudflare Pages Functions for contact delivery
- Cloudflare Turnstile for form abuse protection
- Markdown content collections planned for insights, work and products

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

Connect the GitHub repository and use:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

The files in `public/_headers` and `public/robots.txt` are copied into the deployment. The official Astro sitemap integration emits `sitemap-index.xml` during the build.

## Contact form

The form stays disabled unless `PUBLIC_TURNSTILE_SITE_KEY` is present at build time. The Pages Function also requires these encrypted environment variables:

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

The prototype remains outside this project at `../lead-strategy-site` and is not modified by the Astro build.
