import { defineCollection, z } from 'astro:content'

const projectsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			desc: z.string(),
			cover: image(),
			additional_image: image().optional(),
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
