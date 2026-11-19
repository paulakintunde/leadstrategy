// /llms.txt: a plain-text map of the site for AI agents, built from the same data as the pages.
import type { APIRoute } from 'astro';
import { ORG } from '../data/org';
import { SERVICES } from '../data/services';
import { SECTOR_PAGES } from '../data/sectors';
import { INSIGHT_PAGES } from '../data/insights';
import { DIVISION, sectorCard } from '../data/catalog';
import { abs } from '../utils/schema';

export const GET: APIRoute = () => {
	const lines: string[] = [
		`# ${ORG.name} (${ORG.legalName})`,
		'',
		`> ${ORG.description}`,
		'',
		`${ORG.name} is the Canadian agency at leadstrategy.ca, incorporated as ${ORG.legalName} and founded in ${ORG.foundingDate}. It is not affiliated with leadstrategy.com or leadstrategy.org. It works Canada-wide and remotely. Contact: ${ORG.email}.`,
		'',
		'How engagements work: a written scope with a fixed price before work starts; phased delivery where the piece that earns fastest goes first; a staging link every week; the client owns the code, accounts, raw files and documentation at handover; no retainer the client cannot leave; a reply within one business day.',
		'',
		'## Main pages',
		`- [Home](${abs('/')}): what Lead Strategy does and who it is for`,
		`- [Services](${abs('/services/')}): sixteen services in four divisions`,
		`- [Sectors](${abs('/sectors/')}): ten industries and a typical first-phase window for each`,
		`- [Work](${abs('/work/')}): sites built and launched, and how an engagement runs`,
		`- [Insights](${abs('/insights/')}): articles on where websites lose enquiries, orders and bookings`,
		`- [About](${abs('/about/')}): the company and how it works`,
		`- [Store](${abs('/store/')}): Lead Strategy's own products, including the FincWin budgeting app`,
		`- [Contact](${abs('/contact/')}): request a written scope`,
		'',
	];
	for (const id of ['build', 'market', 'create', 'sell'] as const) {
		lines.push(`## Services: ${DIVISION[id].name} (${DIVISION[id].sub})`);
		for (const s of SERVICES.filter((x) => x.division === id)) lines.push(`- [${s.name}](${abs(`/services/${s.slug}/`)}): ${s.description}`);
		lines.push('');
	}
	lines.push('## Sectors');
	for (const s of SECTOR_PAGES) lines.push(`- [${sectorCard(s.slug).name}](${abs(`/sectors/${s.slug}/`)}): ${s.description}`);
	lines.push('', '## Insights');
	for (const a of INSIGHT_PAGES) lines.push(`- [${a.headline}](${abs(`/insights/${a.slug}/`)}): ${a.description}`);
	lines.push('', '## Policies', `- [Privacy](${abs('/privacy/')})`, `- [Terms](${abs('/terms/')})`, `- [Accessibility](${abs('/accessibility/')})`, '');
	return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
