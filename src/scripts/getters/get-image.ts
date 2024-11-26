const allImages = import.meta.glob('/src/content/projects/media/**/*.jpg', {
	eager: true,
})

const getImage = (source: string | string[]) => {
	return Object.entries(allImages)
		.filter(image => {
			return image[0].includes((source as string)?.slice(1))
		})
		.map(item => (Object.values(item)[1] as any).default)
}

export default getImage
