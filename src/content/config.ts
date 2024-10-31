import { defineCollection, z } from 'astro:content'

const projectsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			desc: z.string(),
			cover: z.object({
				img: image(),
				mp4: z.string().optional(),
				webm: z.string().optional(),
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
			draft: z.boolean(),
		}),
})

export const collections = {
	projects: projectsCollection,
}
