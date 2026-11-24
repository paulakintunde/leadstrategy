// Programmatic SEO quality gate. Exits 1 if any checked record fails.
//
//   node scripts/pseo-gate.mjs              check every record (queued and published)
//   node scripts/pseo-gate.mjs --published  check published records only (CI)
//   node scripts/pseo-gate.mjs --slugs a,b  check these records (release PRs)
//   node scripts/pseo-gate.mjs --md out.md  also write the report as Markdown
import { writeFileSync } from 'node:fs';
import { loadRecords, gate, report } from './pseo/lib.mjs';

const args = process.argv.slice(2);
const opt = (k) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };

const all = loadRecords();
let focus = all;
if (args.includes('--published')) focus = all.filter((r) => r.status === 'published');
if (opt('--slugs')) { const want = opt('--slugs').split(','); focus = all.filter((r) => want.includes(r.slug)); }
if (opt('--type')) focus = focus.filter((r) => r.type === opt('--type'));

// Uniqueness is measured against everything that is or will be public, plus the records being checked.
const pool = all.filter((r) => r.parseError || r.status === 'published' || focus.includes(r) || !args.includes('--published'));
const rows = gate(pool, focus);
const md = report(rows);
console.log(md);
if (opt('--md')) writeFileSync(opt('--md'), md + '\n');
process.exit(rows.some((x) => x.errors.length) ? 1 : 0);
