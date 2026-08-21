const routes: Record<string, string> = {
	index: '/',
	services: '/services/',
	sectors: '/sectors/',
	work: '/work/',
	insights: '/insights/',
	store: '/store/',
	about: '/about/',
	contact: '/contact/',
};

function match(source: string, pattern: RegExp, label: string): string {
	const result = source.match(pattern)?.[1];
	if (!result) throw new Error(`Prototype ${label} could not be extracted.`);
	return result.trim();
}

export function cleanPrototypeMarkup(markup: string): string {
	return markup
		.replace(/href="(index|services|sectors|work|insights|store|about|contact)\.html([^\"]*)"/g, (_full, page: string, suffix: string) => {
			return `href="${routes[page]}${suffix}"`;
		})
		.replace(/(src|href)="assets\//g, '$1="/assets/');
}

export function readPrototypePage(source: string) {
	return {
		title: match(source, /<title>(.*?)<\/title>/s, 'title'),
		description: match(source, /<meta name="description" content="([^"]*)">/s, 'description'),
		content: cleanPrototypeMarkup(match(source, /<main id="main">(.*?)<\/main>/s, 'main content')),
	};
}

function escapeAttribute(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('"', '&quot;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;');
}

export function prepareContactMarkup(content: string, turnstileSiteKey?: string): string {
	const enabled = Boolean(turnstileSiteKey);
	const formOpen = `<form id="contact-form" data-live="${enabled}" action="/api/contact" method="post" novalidate>`;
	const honeypot = '<div class="honeypot" aria-hidden="true"><label for="website">Leave this field empty</label><input id="website" name="website" type="text" tabindex="-1" autocomplete="off"></div>';
	const verification = enabled
		? `<div class="field turnstile-field"><div class="cf-turnstile" data-sitekey="${escapeAttribute(turnstileSiteKey ?? '')}" data-action="contact"></div><p class="msg">Complete the security check before sending.</p></div>`
		: '<p class="notice"><b>Online delivery is being configured.</b> Please email hello@leadstrategy.ca in the meantime.</p>';
	const button = `<button class="btn btn-orange" type="submit"${enabled ? '' : ' disabled'}>Send it <i class="arw"></i></button>`;

	return content
		.replace('<form id="contact-form" novalidate>', `${formOpen}${honeypot}`)
		.replace('<button class="btn btn-orange" type="submit">Send it <i class="arw"></i></button>', `${verification}${button}`);
}
