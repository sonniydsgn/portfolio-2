import type { HTMLAttributes } from 'astro/types'

export interface ButtonLink extends HTMLAttributes<'button'>, HTMLAttributes<'a'> {
	href?: string
	class?: string
}

export interface TocItem {
	title: string
	slug: string
}
