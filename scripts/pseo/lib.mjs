// Shared logic for the programmatic SEO engine: load records, validate them, measure uniqueness.
// Used by scripts/pseo-gate.mjs (checks) and scripts/pseo-release.mjs (publishing batches).
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = fileURLToPath(new URL('../../', import.meta.url));
export const PSEO = join(ROOT, 'src', 'pseo');
export const RECORDS = join(PSEO, 'records');
export const ENGINE = JSON.parse(readFileSync(join(PSEO, 'engine.json'), 'utf8'));
const TYPES_TS = readFileSync(join(ROOT, 'src', 'data', 'types.ts'), 'utf8');
const union = (name) => [...(TYPES_TS.match(new RegExp(`export type ${name} =([^;]+);`))?.[1] ?? '').matchAll(/'([a-z0-9-]+)'/g)].map((m) => m[1]);
export const SERVICE_SLUGS = union('ServiceSlug');
export const SECTOR_SLUGS = union('SectorSlug');

export function loadRecords() {
	if (!existsSync(RECORDS)) return [];
	const out = [];
	for (const type of readdirSync(RECORDS)) {
		const dir = join(RECORDS, type);
		for (const f of readdirSync(dir).filter((f) => f.endsWith('.json'))) {
			const file = join(dir, f);
			let rec;
			try {
				rec = JSON.parse(readFileSync(file, 'utf8'));
			} catch (e) {
				out.push({ file, dirType: type, parseError: e.message });
				continue;
			}
			out.push({ ...rec, file, dirType: type });
		}
	}
	return out;
}

export function saveRecord(rec) {
	const { file, dirType, ...data } = rec;
	writeFileSync(file, JSON.stringify(data, null, '\t') + '\n');
}

export const today = () => new Date().toISOString().slice(0, 10);
const days = (a, b) => Math.round((new Date(b) - new Date(a)) / 864e5);

/** All prose a reader sees on the page, as one string. */
export function proseOf(r) {
	return [
		r.h1, r.lead, r.factsHeading,
		...(r.facts ?? []).flatMap((f) => [f.label, f.value]),
		...(r.sections ?? []).flatMap((s) => [s.h2, ...(s.body ?? []), ...(s.list ?? [])]),
		r.stepsHeading ?? '', ...(r.steps ?? []).flatMap((s) => [s.name, s.text]),
		...(r.checklist ?? []),
		...(r.faqs ?? []).flatMap((f) => [f.q, f.a]),
	].join(' ');
}
/** Prose outside the facts table: every number here must also appear in a fact. */
function narrativeOf(r) {
	return [
		r.lead, r.title, r.description, r.h1,
		...(r.sections ?? []).flatMap((s) => [s.h2, ...(s.body ?? []), ...(s.list ?? [])]),
		...(r.steps ?? []).flatMap((s) => [s.name, s.text]),
		...(r.checklist ?? []),
		...(r.faqs ?? []).flatMap((f) => [f.q, f.a]),
	].join(' ');
}

const words = (t) => t.toLowerCase().replace(/[^a-z0-9à-ÿ%$.\s-]/g, ' ').split(/\s+/).filter(Boolean);
export const wordCount = (r) => words(proseOf(r)).length;
const numbersIn = (t) => [...t.matchAll(/\$?\d[\d,]*(?:\.\d+)?%?/g)].map((m) => m[0].replace(/[$,%]/g, '').replace(/\.$/, ''));

function shingles(r, n) {
	const w = words(proseOf(r));
	const s = new Set();
	for (let i = 0; i + n <= w.length; i++) s.add(w.slice(i, i + n).join(' '));
	return s;
}

/** % of each record's shingles found in no other record of the same type. */
export function uniqueness(records) {
	const n = ENGINE.gate.shingle;
	const byType = {};
	for (const r of records) (byType[r.type] ??= []).push(r);
	const out = new Map();
	for (const list of Object.values(byType)) {
		const sets = list.map((r) => shingles(r, n));
		list.forEach((r, i) => {
			if (list.length < 2) return out.set(r, 100);
			let uniq = 0;
			for (const x of sets[i]) if (!sets.some((o, j) => j !== i && o.has(x))) uniq++;
			out.set(r, sets[i].size ? Math.round((100 * uniq) / sets[i].size) : 0);
		});
	}
	return out;
}

/**
 * Validate one record. Returns { errors: string[], warnings: string[] }.
 * `others` is the set it is compared against for duplicate slugs and titles.
 */
export function validate(r, others = [], asOf = today()) {
	const errors = [];
	const warnings = [];
	const g = ENGINE.gate;
	if (r.parseError) return { errors: [`JSON does not parse: ${r.parseError}`], warnings };
	const t = ENGINE.types[r.type];
	if (!t) return { errors: [`unknown type "${r.type}"`], warnings };
	if (r.type !== r.dirType) errors.push(`type "${r.type}" is filed under records/${r.dirType}/`);

	const req = ['slug', 'status', 'priority', 'verified', 'title', 'description', 'h1', 'name', 'lead', 'factsHeading', 'facts', 'sections', 'checklist', 'faqs', 'services', 'sectors', 'sources'];
	for (const k of req) if (r[k] === undefined || r[k] === null || r[k] === '') errors.push(`missing ${k}`);
	if (errors.length) return { errors, warnings };

	if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.slug)) errors.push(`slug "${r.slug}" must be lowercase and hyphenated`);
	if (!r.file.endsWith(`${r.slug}.json`)) errors.push(`file name must be ${r.slug}.json`);
	if (!['queued', 'published'].includes(r.status)) errors.push(`status must be queued or published`);
	if (r.status === 'published' && !/^\d{4}-\d{2}-\d{2}$/.test(r.published ?? '')) errors.push('published records need a published date');
	if (r.type === 'profession' && !SECTOR_SLUGS.includes(r.sector)) errors.push(`profession pages need a valid sector, got "${r.sector}"`);

	// Metadata
	if (r.title.length > g.titleMax) errors.push(`title is ${r.title.length} chars (max ${g.titleMax} before " | Lead Strategy")`);
	if (r.description.length < g.descMin || r.description.length > g.descMax) errors.push(`description is ${r.description.length} chars (needs ${g.descMin}-${g.descMax})`);
	for (const o of others) {
		if (o === r || o.parseError) continue;
		if (o.slug === r.slug && o.type === r.type && o.sector === r.sector) errors.push(`duplicate slug with ${o.file}`);
		if (o.title === r.title) errors.push(`duplicate title with ${o.file}`);
		if (o.description === r.description) errors.push(`duplicate description with ${o.file}`);
	}

	// Links to the rest of the site
	for (const s of r.services) if (!SERVICE_SLUGS.includes(s)) errors.push(`unknown service "${s}"`);
	for (const s of r.sectors) if (!SECTOR_SLUGS.includes(s)) errors.push(`unknown sector "${s}"`);
	if (r.services.length === 0) errors.push('link at least one service');

	// Sources and facts
	if (r.sources.length < 2) errors.push('cite at least two sources');
	r.sources.forEach((s, i) => {
		if (!/^https:\/\//.test(s.url ?? '')) errors.push(`source ${i + 1} needs an https URL`);
		if (!s.label || !s.publisher) errors.push(`source ${i + 1} needs a label and publisher`);
	});
	if (t.officialSource && !r.sources.some((s) => s.official)) errors.push('cite at least one official source (government or regulator) and mark it official: true');
	if (r.facts.length < t.minFacts) errors.push(`${r.facts.length} facts (needs ${t.minFacts}); merge this record or research more`);
	r.facts.forEach((f, i) => {
		if (!f.label || !f.value) errors.push(`fact ${i + 1} needs a label and value`);
		if (!Number.isInteger(f.source) || !r.sources[f.source]) errors.push(`fact ${i + 1} points at missing source ${f.source}`);
	});

	// Freshness
	if (!/^\d{4}-\d{2}-\d{2}$/.test(r.verified)) errors.push('verified must be an ISO date');
	else {
		const age = days(r.verified, asOf);
		const max = t.maxAgeDays ?? g.verifiedFailDays;
		if (age > max) errors.push(`facts last checked ${age} days ago (max ${max}); re-verify`);
		else if (age > g.verifiedWarnDays) warnings.push(`facts last checked ${age} days ago`);
		if (age < 0) errors.push('verified date is in the future');
	}

	// No invented figures: numbers in the prose must come from the facts table.
	const factText = r.facts.map((f) => `${f.label} ${f.value}`).join(' ');
	const factNums = new Set(numbersIn(factText));
	const stray = [...new Set(numbersIn(narrativeOf(r)))].filter((n) => !factNums.has(n) && !g.freeNumbers.includes(n));
	if (stray.length) errors.push(`numbers in the text that are not in the facts table: ${stray.join(', ')}`);

	// House style
	const lower = proseOf(r).toLowerCase() + ' ' + r.title.toLowerCase() + ' ' + r.description.toLowerCase();
	for (const b of g.banned) if (new RegExp(`(^|[^a-z])${b.replace(/[-']/g, '.')}([^a-z]|$)`).test(lower)) errors.push(`banned phrase "${b}"`);

	// Depth
	const wc = wordCount(r);
	if (wc < t.minWords) errors.push(`${wc} words (needs ${t.minWords})`);
	if (r.sections.length < 3) errors.push('needs at least three sections');
	if (r.faqs.length < 2) warnings.push('fewer than two FAQs');

	return { errors, warnings };
}

/** Full gate over a set of records. `focus` limits the report to these (others still count for uniqueness). */
export function gate(records, focus = records, asOf = today()) {
	const g = ENGINE.gate;
	const uniq = uniqueness(records.filter((r) => !r.parseError));
	const rows = [];
	for (const r of focus) {
		const { errors, warnings } = validate(r, records, asOf);
		const u = uniq.get(r);
		if (u !== undefined) {
			if (u < g.uniqueFail) errors.push(`only ${u}% unique against other ${r.type} pages (min ${g.uniqueFail}%)`);
			else if (u < g.uniquePass) warnings.push(`${u}% unique against other ${r.type} pages (target ${g.uniquePass}%)`);
		}
		rows.push({ r, errors, warnings, unique: u, words: r.parseError ? 0 : wordCount(r) });
	}
	return rows;
}

export function report(rows, heading = 'Programmatic SEO gate') {
	const ok = rows.filter((x) => !x.errors.length).length;
	const lines = [`### ${heading}`, '', `${ok} of ${rows.length} records pass.`, '', '| Record | Words | Unique | Result |', '|---|---|---|---|'];
	for (const x of rows) {
		const id = x.r.parseError ? x.r.file : `${x.r.type}/${x.r.slug}`;
		const res = x.errors.length ? `FAIL: ${x.errors.join('; ')}` : x.warnings.length ? `pass, with warnings: ${x.warnings.join('; ')}` : 'pass';
		lines.push(`| ${id} | ${x.words} | ${x.unique ?? '-'}% | ${res} |`);
	}
	return lines.join('\n');
}
