# Programmatic SEO engine

The engine publishes reference pages built from researched records, 3 to 5 at a time, through a pull request that a person reviews before merging.

## How it works

1. **Records** live in `src/pseo/records/<type>/<slug>.json`. A record holds every fact and paragraph for one page.
   - A new record has `"status": "queued"` and `"published": null`.
2. **The release job** (`.github/workflows/pseo-release.yml`) runs daily at 13:17 UTC. `scripts/pseo-release.mjs` decides whether a batch is due:
   - every 2 days until 45 pages are live, then every 7 days (settings in `src/pseo/engine.json` → `cadence`)
   - takes 3 to 5 queued records in priority order, mixed across types
   - runs the gate on each one, and skips any that fail
   - flips the passing records to `published` with today's date and opens a pull request labelled `pseo-release`, including the gate report
   - opens no new release while one is still waiting for review
   - opens an issue labelled `pseo-queue` when fewer than 3 queued records can pass
3. **You review and merge.** Read at least two of the pages on the preview build, and check their facts against the cited sources. Nothing is live until the pull request is merged and deployed.
4. **The site build** (`src/pages/[...pseo].astro`) turns published records into:
   - record pages
   - a hub per type (`/guides/sales-tax/`, `/integrations/`, …)
   - `/guides/`

   It also links them from the matching sector and service pages, the footer, the sitemap (with `lastmod` = verified date) and `/llms.txt`.

Commands:

```bash
npm run pseo:gate                    # check every record, queued and published
npm run pseo:gate -- --type sales-tax
npm run pseo:release -- --dry-run    # what the next release would contain
npm run pseo:release -- --force      # release now (locally), ignoring the cadence
```

You can also start a release from the GitHub Actions tab: **Programmatic SEO release → Run workflow → force**.

## Page types and URLs

| Type | URL | Minimum facts | Minimum words | Official source required |
|---|---|---|---|---|
| `accessibility-law` | `/guides/accessibility-law/{slug}/` | 6 | 650 | yes |
| `sales-tax` | `/guides/sales-tax/{slug}/` | 7 | 650 | yes |
| `profession` | `/sectors/{sector}/{slug}/` | 6 | 700 | yes |
| `integration` | `/integrations/{slug}/` | 5 | 650 | no (vendor docs count) |
| `payment` | `/payments/{slug}/` | 5 | 600 | no |
| `compare` | `/compare/{slug}/` | 8 | 700 | no; facts expire after 120 days |
| `glossary` | `/glossary/{slug}/` | 3 | 420 | no |

## Record format

```jsonc
{
	"type": "sales-tax",              // must match the folder name
	"slug": "british-columbia",       // lowercase-hyphenated, must match the file name
	"sector": "healthcare-clinics",   // profession records only
	"status": "queued",
	"priority": 20,                   // lower releases first
	"published": null,                // set by the release script
	"verified": "2026-11-24",         // the date every fact was checked against its source
	"title": "Sales Tax for Online Stores in British Columbia", // max 49 chars; " | Lead Strategy" is added
	"description": "...",             // 120-160 chars, unique
	"h1": "...",                      // the page headline
	"name": "British Columbia",       // short name for breadcrumbs, cards and hub lists
	"lead": "...",                    // one or two sentences under the headline
	"factsHeading": "British Columbia at a glance",
	"facts": [
		{ "label": "Provincial tax", "value": "PST, administered by the province", "source": 0 }
	],
	"sections": [
		{ "h2": "...", "body": ["paragraph", "paragraph"], "list": ["optional bullet"] }
	],
	"stepsHeading": "Set it up in Shopify",   // optional
	"steps": [{ "name": "Open tax settings", "text": "..." }],
	"checklist": ["Short checks a reader can run on their own site"],
	"faqs": [{ "q": "...", "a": "..." }],
	"services": ["ecommerce-development"],  // ServiceSlug values from src/data/types.ts
	"sectors": ["retail-ecommerce"],        // SectorSlug values
	"related": ["alberta-and-territories"], // optional slugs of other records
	"sources": [
		{ "label": "PST registration", "url": "https://www2.gov.bc.ca/...", "publisher": "Government of British Columbia", "official": true }
	]
}
```

## The gate (`scripts/pseo/lib.mjs`)

A record fails if any of these are true:

- A required field is missing.
- The slug doesn't match the file name.
- The title is over 49 characters, or the description is outside 120–160 characters.
- The slug, title or description is duplicated.
- A service or sector slug is unknown, or no service is linked.
- There are fewer than two sources, a URL isn't https, or there's no `official: true` source on a type that needs one.
- There are fewer facts than the type minimum, or a fact points at a missing source.
- `verified` is in the future, or older than 365 days (120 for comparisons).
- **A number in the prose (lead, sections, steps, checklist, FAQs, title, description) doesn't appear in the facts table.** Every figure must be a sourced fact. The numbers 1–10 are free.
- It contains a banned phrase. The list is in `engine.json` and includes "honest", "seamless", "elevate", "unleash" and "delve".
- There are fewer words than the type minimum, or fewer than three sections.
- **Under 40% of its 5-word phrases are unique against the other pages of the same type.** Below 60% gives a warning.

## Writing rules

- Every fact comes from the cited source, read on the `verified` date. If a source is unclear or sources disagree, say so on the page, or leave the fact out. Never guess a rate, threshold, deadline or fine.
- Use the statute's own wording for who a law applies to. No scare figures.
- Write for a Canadian small business owner. Use plain sentences and Canadian spelling (colour, centre, licence as a noun).
- Each page must be worth publishing even if no similar page existed. Say what is specific to this record: this province, this profession, this pair of tools. Don't restate what every page in the set says.
- Link services and sectors only where the page explains why they're relevant.
- Merge a record into another if it would differ by fewer than four facts. For example, Alberta and the three territories charge GST only, so they share one sales-tax page.

## Changing the cadence

Edit `cadence` in `src/pseo/engine.json`:
- `fastEveryDays` and `slowEveryDays`
- `fastUntilPublished`
- `batchMin` and `batchMax`
- `lowQueueWarn`

The workflow schedule only sets how often the check runs. The script decides whether anything is due.

## One-time repository setup

- **Allow Actions to open pull requests.** In GitHub, go to Settings → Actions → General → Workflow permissions, and tick "Allow GitHub Actions to create and approve pull requests".
- **Deploys.** Production deploys from `codex/astro-mvp`. After merging a release into `main`, fast-forward `codex/astro-mvp` to `main`, or set Cloudflare Pages to deploy from `main`.
