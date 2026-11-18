// Main navigation, shared by the homepage hero and the inner-page header.
export const NAV = [
	{ href: '/services/', label: 'Services' },
	{ href: '/sectors/', label: 'Sectors' },
	{ href: '/work/', label: 'Work' },
	{ href: '/insights/', label: 'Insights' },
	{ href: '/store/', label: 'Store' },
	{ href: '/about/', label: 'About' },
];

export function isCurrent(pathname: string, href: string): boolean {
	return pathname === href || pathname === href.replace(/\/$/, '');
}
