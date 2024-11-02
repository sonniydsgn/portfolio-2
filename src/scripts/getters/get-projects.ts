import typograph from '@/scripts/libs/typograf'
import { type CollectionEntry, getCollection } from 'astro:content'

const allVideos = import.meta.glob('/src/content/projects/media/**/**/*.{mp4,webm}', {
	eager: true,
})

const getVideo = (format: 'mp4' | 'webm', item: CollectionEntry<'projects'>) => {
	return Object.entries(allVideos)
		.filter((video: any) => {
			return video[0].includes(item.data.cover[format]?.slice(1))
		})
		.map((video: any) => video[1].default) as unknown as string
}

const projects = async () => {
	return (await getCollection('projects')).map(item => {
		return {
			...item,
			data: {
				...item.data,
				name: typograph.execute(item.data.name),
				desc: typograph.execute(item.data.desc),
				cover: {
					...item.data.cover,
					mp4: getVideo('mp4', item),
					webm: getVideo('webm', item),
				},
			},
		}
	})
}

export default projects
