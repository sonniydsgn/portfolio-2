import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import remarkTypograf from '@mavrin/remark-typograf'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'
import rehypeUnwrapImages from 'rehype-unwrap-images'

export default defineConfig({
	compressHTML: true,
	site: 'https://sonniydesign.ru',
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
		mdx({
			rehypePlugins: [rehypeUnwrapImages],
			remarkPlugins: [[remarkTypograf, { locale: ['ru'] }]],
		}),
	],
})
