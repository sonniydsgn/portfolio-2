import { defineCollection, z } from 'astro:content'

const projectsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			desc: z.string(),
			cover: z.object({
				img: image(),
				mp4: z.string().optional(),
				h265: z.string().optional(),
				alt: z.string(),
			}),
			additional_image: z
				.object({
					img: image(),
					alt: z.string(),
				})
				.optional(),
			color: z.string(),
			year: z.number(),
			place_work: z.object({
				name: z.string(),
				logo: image(),
				link: z.string(),
			}),
			roles: z.array(
				z.object({
					name: z.string(),
					desc: z.string(),
					icon: z.string(),
				}),
			),
			team: z
				.array(
					z.object({
						name: z.string(),
						desc: z.string(),
						image: image().optional(),
					}),
				)
				.optional(),
			timeline: z.object({
				period: z.string(),
				status: z.string(),
			}),
			highlights: z
				.array(
					z.object({
						src: image(),
						alt: z.string(),
						title: z.string().optional(),
					}),
				)
				.optional(),
			result: z.string().optional(),
			draft: z.boolean(),
		}),
})

export const collections = {
	projects: projectsCollection,
}
