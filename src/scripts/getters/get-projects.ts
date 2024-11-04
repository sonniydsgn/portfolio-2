import typograph from '@/scripts/libs/typograf'
import { type CollectionEntry, getCollection } from 'astro:content'

const allVideos = import.meta.glob('/src/content/projects/media/**/**/*.{mp4,webm}', {
	eager: true,
})

const getVideo = (format: 'mp4' | 'webm', item: CollectionEntry<'projects'>) => {
	return Object.keys(allVideos).filter((video: string) => {
		return video.includes(item.data.cover[format]?.slice(1))
	})[0]
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
