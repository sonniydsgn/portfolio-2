import typograph from '@/scripts/libs/typograf'
import { type CollectionEntry, getCollection } from 'astro:content'

const allVideos = import.meta.glob('/src/content/projects/media/**/**/*.mp4', {
	eager: true,
})

const getVideo = (format: 'mp4' | 'h265', item: CollectionEntry<'projects'>) => {
	return Object.entries(allVideos)
		.filter(video => {
			return video[0].includes(item.data.cover[format]?.slice(1))
		})
		.map(video => (Object.values(video)[1] as any).default) as unknown as string
}

const projects = async () => {
	return (await getCollection('projects'))
		.map(item => {
			return {
				...item,
				data: {
					...item.data,
					name: typograph.execute(item.data.name),
					desc: typograph.execute(item.data.desc),
					cover: {
						...item.data.cover,
						mp4: getVideo('mp4', item),
						h265: getVideo('h265', item),
					},
				},
			}
		})
		.toSorted((a, b) => {
			return a.data.order - b.data.order
		})
}

export default projects
