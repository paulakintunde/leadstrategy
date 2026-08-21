# Lead Strategy website

Astro MVP for [leadstrategy.ca](https://leadstrategy.ca), designed for Cloudflare Workers Static Assets and deployed from GitHub.

## Stack

- Astro 7 in static output mode
- Cloudflare Workers Static Assets for hosting, previews and edge headers
- A focused Worker route for contact delivery
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

## Cloudflare Workers Builds

Connect the GitHub repository to a Worker and use these settings under **Settings > Build**:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Non-production deploy command: `npx wrangler versions upload`
- Production branch: `main`
- Node version: `22`

`wrangler.jsonc` identifies `dist` as the static-assets directory and routes only `/api/*` through the Worker. The files in `public/_headers` and `public/robots.txt` are copied into the deployment. The official Astro sitemap integration emits `sitemap-index.xml` during the build.

Cloudflare Workers Builds does not use the custom Wrangler build field. The dashboard Build command must therefore be set to `npm run build`; the Deploy command alone cannot create `dist`.

## Contact form

The form stays disabled unless `PUBLIC_TURNSTILE_SITE_KEY` is present as a build variable. The Worker also requires these encrypted runtime variables:

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
