import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vercel from '@astrojs/vercel/static'
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
			lightningcss: {
				customAtRules: {
					mixin: {
						prelude: '<custom-ident>',
						body: 'style-block',
					},
					apply: {
						prelude: '<custom-ident>',
					},
				},
				visitor: {
					Rule: {
						custom: {
							mixin(rule) {
								mixins.set(rule.prelude.value, rule.body.value)
								return []
							},
							apply(rule) {
								return mixins.get(rule.prelude.value)
							},
						},
					},
				},
			},
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
	adapter: vercel({
		webAnalytics: { enabled: true },
	}),
	markdown: {
		rehypePlugins: [rehypeUnwrapImages],
		remarkPlugins: [[remarkTypograf, { locale: ['ru'] }]],
	},
})
