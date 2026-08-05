export const site = {
	name: 'Nicholas Murolo',
	shortName: 'NM',
	title: 'Nicholas Murolo — Designer & Developer',
	description:
		'A portfolio of thoughtful digital products, visual systems, and interactive experiences by Nicholas Murolo.',
	email: 'hello@example.com',
	location: 'Based in your city · Available worldwide',
	availability: 'Available for select projects',
	navigation: [
		{ label: 'About', href: '/about/' },
		{ label: 'Contact', href: '/contact/' },
	],
	socials: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/' },
		{ label: 'GitHub', href: 'https://github.com/' },
		{ label: 'Instagram', href: 'https://www.instagram.com/' },
	],
	profile: {
		eyebrow: 'Independent designer & developer',
		headline: 'I shape clear, expressive digital experiences.',
		intro:
			'I partner with ambitious teams to turn complex ideas into useful products, memorable identities, and beautifully crafted interfaces.',
		bio:
			'I work across strategy, interaction design, and front-end development. My approach combines systems thinking with close attention to typography, motion, and the small details that make an experience feel effortless.',
		services: ['Product design', 'Creative development', 'Design systems', 'Art direction'],
	},
} as const;

export type SiteConfig = typeof site;
