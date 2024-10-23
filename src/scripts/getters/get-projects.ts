import typograph from '@/scripts/libs/typograf'
import { getCollection } from 'astro:content'

const projects = async () => {
	return (await getCollection('projects')).map(item => {
		return {
			...item,
			data: {
				...item.data,
				name: typograph.execute(item.data.name),
				desc: typograph.execute(item.data.desc),
			},
		}
	})
}

export default projects
