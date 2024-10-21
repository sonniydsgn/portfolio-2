import sitemap from '@astrojs/sitemap'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// гайд по конфигу — https://astro.build/config
export default defineConfig({
	compressHTML: true,
	site: 'https://nova-ug.ru',
	vite: {
		css: {
			transformer: 'lightningcss',
		},
	},
	i18n: {
		defaultLocale: 'ru',
		locales: ['ru', 'en'],
	},
	integrations: [
		sitemap(),
		icon({
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
	],
})
