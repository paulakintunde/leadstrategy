// Programmatic SEO release: publishes the next 3-5 queued records when a release is due.
//
// Cadence (src/pseo/engine.json): every `fastEveryDays` until `fastUntilPublished` pages are live,
// then every `slowEveryDays`. Records are taken by priority, spread across types, and each one must
// pass the gate on its own before it is released; a failing record is skipped and reported.
//
//   node scripts/pseo-release.mjs            release if due
//   node scripts/pseo-release.mjs --force    release now, ignoring the cadence
//   node scripts/pseo-release.mjs --dry-run  show what would be released, change nothing
//
// Writes a summary to stdout and, when run in GitHub Actions, these step outputs:
//   released=<n>  slugs=<a,b,c>  reason=<due|not-due|queue-empty>  queued=<remaining>  report=<file>
import { appendFileSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { ENGINE, PSEO, ROOT, loadRecords, saveRecord, gate, report, today } from './pseo/lib.mjs';

const args = process.argv.slice(2);
const force = args.includes('--force');
const dry = args.includes('--dry-run');
const c = ENGINE.cadence;
const statePath = join(PSEO, 'state.json');
const state = existsSync(statePath) ? JSON.parse(readFileSync(statePath, 'utf8')) : { releases: [] };

const out = (k, v) => { if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `${k}=${v}\n`); };
const all = loadRecords();
const live = all.filter((r) => r.status === 'published');
const queued = all.filter((r) => r.status === 'queued' && !r.parseError);

// Is a release due?
const last = state.releases.at(-1)?.date;
const every = live.length < c.fastUntilPublished ? c.fastEveryDays : c.slowEveryDays;
const since = last ? Math.round((new Date(today()) - new Date(last)) / 864e5) : Infinity;
console.log(`Live: ${live.length}. Queued: ${queued.length}. Last release: ${last ?? 'never'}. Cadence: every ${every} days.`);
if (!force && since < every) {
	console.log(`Not due: ${since} of ${every} days since the last release.`);
	out('released', 0); out('reason', 'not-due'); out('queued', queued.length);
	process.exit(0);
}

// Pick candidates: priority order, round-robin across types so each batch is mixed.
const byType = {};
for (const r of [...queued].sort((a, b) => a.priority - b.priority || a.slug.localeCompare(b.slug))) (byType[r.type] ??= []).push(r);
const order = [];
const lanes = Object.values(byType).sort((a, b) => a[0].priority - b[0].priority);
while (lanes.some((l) => l.length)) for (const l of lanes) if (l.length) order.push(l.shift());

const pick = [];
const skipped = [];
for (const r of order) {
	if (pick.length >= c.batchMax) break;
	const trial = { ...r, status: 'published', published: today() };
	// Compare against everything public or still queued, but never against this record's own queued copy.
	const pool = [...live, ...pick, trial, ...queued.filter((x) => x !== r && !pick.some((p) => p.file === x.file))];
	const [row] = gate(pool, [trial]);
	if (row.errors.length) skipped.push({ r, errors: row.errors });
	else pick.push(trial);
}

for (const s of skipped) console.log(`Skipped ${s.r.type}/${s.r.slug}: ${s.errors.join('; ')}`);
if (pick.length < c.batchMin) {
	console.log(`Queue too small: ${pick.length} releasable record(s), need ${c.batchMin}. Nothing released.`);
	out('released', 0); out('reason', 'queue-empty'); out('queued', queued.length);
	process.exit(0);
}

const remaining = queued.length - pick.length;
console.log(`Releasing ${pick.length}: ${pick.map((r) => `${r.type}/${r.slug}`).join(', ')}. ${remaining} left in the queue.`);
if (dry) process.exit(0);

for (const r of pick) saveRecord(r);
state.releases.push({ date: today(), records: pick.map((r) => `${r.type}/${r.slug}`) });
writeFileSync(statePath, JSON.stringify(state, null, '\t') + '\n');

// Report for the pull request body.
const rows = gate([...live, ...pick], pick);
const lines = [
	`Release ${state.releases.length}: ${pick.length} programmatic pages, ${today()}.`,
	'',
	'**Before merging, read at least two of these pages on the preview build and confirm each fact against its cited source.**',
	'',
	...pick.map((r) => `- \`${r.type}/${r.slug}\`: ${r.h1} (checked ${r.verified}, ${r.sources.length} sources)`),
	'',
	report(rows, 'Gate results'),
	'',
	skipped.length ? `Skipped (failed the gate, still queued): ${skipped.map((s) => `\`${s.r.type}/${s.r.slug}\``).join(', ')}` : '',
	remaining < c.lowQueueWarn ? `**Queue is low: ${remaining} record(s) left.** Research the next batch (see docs/pseo.md).` : `${remaining} record(s) left in the queue.`,
	`Next release: ${live.length + pick.length < c.fastUntilPublished ? c.fastEveryDays : c.slowEveryDays} days after this one is created.`,
];
const reportFile = join(ROOT, '.pseo-release.md');
writeFileSync(reportFile, lines.filter((l) => l !== undefined).join('\n') + '\n');
out('released', pick.length); out('reason', 'due'); out('queued', remaining);
out('slugs', pick.map((r) => r.slug).join(','));
out('report', reportFile);
