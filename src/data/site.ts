export const site = {
	name: 'Nicholas V Murolo',
	shortName: 'NVM',
	title: 'Nicholas Murolo — Systems and Robotics Engineer',
	description:
		'A collection of projects by Nicholas Murolo.',
	email: 'me@nicholasmurolo.com',
	location: 'Based in Pittsburgh · Available worldwide ',
	availability: 'Open to opportunities',
	navigation: [
		{ label: 'About', href: '/about/' },
		{ label: 'Contact', href: '/contact/' },
	],
	socials: [
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/nicholas-murolo-530750168/' },
		{ label: 'GitHub', href: 'https://github.com/nmurolo' },
	],
	profile: {
		eyebrow: 'Systems and Robotics Engineer',
		headline: 'I relentlessly pursue building great stuff.',
		intro:
			'',
		bio:
			'',
		services: [
			{
				label: 'Mechanical Design',
				description:
					'From first sketches to production-ready parts: CAD, tolerances, materials, and hardware that actually gets built.',
			},
			{
				label: 'Project Management',
				description:
					'Keeping scope, schedule, and people aligned so complex work moves forward without losing the plot.',
			},
			{
				label: 'Systems Engineering',
				description:
					'Connecting mechanical, electrical, and software pieces into one coherent system instead of a pile of parts.',
			},
			{
				label: 'R&D',
				description:
					'Prototyping, testing, and iterating when the answer isn’t known yet—and turning what we learn into the next version.',
			},
		],
	},
	heroMedia: {
		type: 'video',
		src: '',
		poster: '',
		alt: '',
	},
	summary: {
		href: '/summary.pdf',
		filename: 'Nicholas_Murolo.pdf',
		label: 'About me',
	},
} as const;

export type SiteConfig = typeof site;
