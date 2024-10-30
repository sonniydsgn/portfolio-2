import type { APIRoute } from 'astro'

// todo: не забывать включить индексацию после запуска

const robotsTxt = `
User-agent: *
Disallow: /

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim()

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	})
}
