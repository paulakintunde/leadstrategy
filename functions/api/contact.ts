interface Env {
	TURNSTILE_SECRET_KEY: string;
	LEAD_WEBHOOK_URL: string;
}

interface TurnstileResult {
	success: boolean;
	'error-codes'?: string[];
}

const text = (message: string, status: number) => new Response(message, {
	status,
	headers: { 'content-type': 'text/plain; charset=UTF-8' },
});

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
	const requestURL = new URL(request.url);
	const origin = request.headers.get('origin');
	if (origin && origin !== requestURL.origin) return text('Origin not allowed.', 403);

	if (!env.TURNSTILE_SECRET_KEY || !env.LEAD_WEBHOOK_URL) {
		return text('Contact delivery is not configured.', 503);
	}

	const form = await request.formData();
	if (String(form.get('website') ?? '').trim()) {
		return new Response(null, { status: 303, headers: { location: '/contact/thanks/' } });
	}

	const name = String(form.get('name') ?? '').trim();
	const email = String(form.get('email') ?? '').trim();
	const organization = String(form.get('organization') ?? '').trim();
	const service = String(form.get('service') ?? '').trim();
	const message = String(form.get('message') ?? '').trim();
	const token = String(form.get('cf-turnstile-response') ?? '');

	if (name.length < 2 || name.length > 100) return text('Please provide a valid name.', 400);
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return text('Please provide a valid email.', 400);
	if (!service || service.length > 80) return text('Please select a service.', 400);
	if (message.length < 20 || message.length > 5000) return text('Please provide a message between 20 and 5,000 characters.', 400);

	const ip = request.headers.get('CF-Connecting-IP') ?? '';
	const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({ secret: env.TURNSTILE_SECRET_KEY, response: token, remoteip: ip }),
	});
	const turnstile = await verification.json<TurnstileResult>();
	if (!turnstile.success) return text('Security verification failed. Please try again.', 400);

	const delivered = await fetch(env.LEAD_WEBHOOK_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ name, email, organization, service, message, source: 'leadstrategy.ca/contact', receivedAt: new Date().toISOString() }),
	});
	if (!delivered.ok) return text('Delivery failed. Please email hello@leadstrategy.ca.', 502);

	return new Response(null, { status: 303, headers: { location: '/contact/thanks/' } });
};

export const onRequest: PagesFunction = async () => text('Method not allowed.', 405);
