const allVideos = import.meta.glob('/src/content/projects/media/**/*.{mp4,jpg}', {
	eager: true,
})

const getVideo = (source: string | string[]) => {
	return Object.entries(allVideos)
		.filter(video => {
			return (
				video[0].includes(source[0]?.slice(1)) ||
				video[0].includes(source[1]?.slice(1)) ||
				video[0].includes(source[2]?.slice(1))
			)
		})
		.map(item => (Object.values(item)[1] as any).default) as unknown as string
}

export default getVideo
