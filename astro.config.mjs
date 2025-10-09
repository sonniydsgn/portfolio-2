import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import remarkTypograf from '@mavrin/remark-typograf'
import icon from 'astro-icon'
import mdxDirective from 'astro-mdx-directive'
import { defineConfig } from 'astro/config'
import rehypeUnwrapImages from 'rehype-unwrap-images'

let mixins = new Map()

const directives = {
	container: [
		{
			name: 'Section',
			path: 'src/components/organisms/ContentSection.astro',
			useAsProps: {
				directiveLabel: 'title',
			},
		},
		{
			name: 'List',
			path: 'src/components/molecules/InfoList.astro',
		},
		{
			name: 'Note',
			path: 'src/components/atoms/Note.astro',
		},
	],
}

export default defineConfig({
	compressHTML: true,
	site: 'https://designbykalinin.ru',
	vite: {
		css: {
			transformer: 'lightningcss',
		},
	},
	integrations: [
		sitemap(),
		icon({
			iconDir: 'src/assets/icons',
			svgoOptions: {
				multipass: true,
				plugins: [
					'preset-default',
					{
						name: 'removeAttrs',
						params: {
							attrs: '*:(stroke|fill):((?!^currentColor$).)*',
						},
					},
				],
			},
		}),
		mdxDirective({ directives }),
		mdx(),
	],
	markdown: {
		rehypePlugins: [rehypeUnwrapImages],
		remarkPlugins: [[remarkTypograf, { locale: ['ru'] }]],
	},
})
