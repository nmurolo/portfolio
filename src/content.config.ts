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
		title: z.string().optional(),
		summary: z.string().optional(),
		year: z.string().optional(),
		role: z.string().optional(),
		services: z.array(z.string()).default([]),
		details: z
			.array(
				z.object({
					label: z.string(),
					items: z.union([z.string(), z.array(z.string())]),
				}),
			)
			.default([]),
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
							alt: z.string().default(''),
						})
						.optional(),
				}),
			])
			.default(false),
		order: z.number().default(99),
		cover: z
			.object({
				src: z.string(),
				alt: z.string().default(''),
			})
			.optional(),
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
		mark: z
			.union([
				z.string(),
				z.object({
					text: z.string(),
					color: z.string().optional(),
					opacity: z.number().min(0).max(1).optional(),
					size: z.string().optional(),
				}),
			])
			.optional(),
	}),
});

export const collections = { projects, life };
