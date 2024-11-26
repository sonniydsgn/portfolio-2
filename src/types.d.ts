import type { HTMLAttributes } from 'astro/types'

export interface ButtonLink extends HTMLAttributes<'button'>, HTMLAttributes<'a'> {
	href?: string
	class?: string
}

export interface TocItem {
	title: string
	slug: string
}

export interface Video extends HTMLAttributes<'video'> {
	autoplay?: boolean
	paused?: boolean
	width?: number
	height?: number
	lazy?: boolean
	sources?: string[]
}
