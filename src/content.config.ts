import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const mediaItem = z.object({
	type: z.enum(['image', 'video']),
	src: z.string(),
	alt: z.string().default(''),
	caption: z.string().optional(),
	poster: z.string().optional(),
	captions: z.string().optional(),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		year: z.string(),
		role: z.string(),
		services: z.array(z.string()).default([]),
		featured: z
			.union([
				z.boolean(),
				z.object({
					label: z.string().optional(),
					title: z.string().optional(),
					summary: z.string().optional(),
					cover: z
						.object({
							src: z.string(),
							alt: z.string(),
						})
						.optional(),
				}),
			])
			.default(false),
		order: z.number().default(99),
		cover: z.object({
			src: z.string(),
			alt: z.string(),
		}),
		accent: z.string().default('#665cff'),
		links: z
			.array(
				z.object({
					label: z.string(),
					href: z.string().url(),
				}),
			)
			.default([]),
		media: z.array(mediaItem).default([]),
	}),
});

const life = defineCollection({
	loader: glob({ base: './src/content/life', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		category: z.string(),
		order: z.number().default(99),
		cover: z
			.object({
				src: z.string(),
				alt: z.string(),
			})
			.optional(),
		accent: z.string().default('#c95f3c'),
	}),
});

export const collections = { projects, life };
