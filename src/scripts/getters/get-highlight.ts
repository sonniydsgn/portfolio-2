const allHighlights = import.meta.glob('/src/content/projects/media/**/highlights/*.{mp4,jpg}', {
	eager: true,
})

const getHighlightSource = (type: 'video' | 'image', source: string | string[]) => {
	return Object.entries(allHighlights)
		.filter(highlight => {
			return type === 'image'
				? highlight[0].includes((source as string).slice(1))
				: highlight[0].includes(source[0].slice(1)) || highlight[0].includes(source[1].slice(1))
		})
		.map(item => (Object.values(item)[1] as any).default)
}

export default getHighlightSource
