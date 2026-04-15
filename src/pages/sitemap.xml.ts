import { getCollection } from 'astro:content'
import { site } from '../data/site'
import { isPublicPost } from '../lib/content'

export const prerender = true

function normalizeUrl(pathname: string) {
  const baseUrl = site.baseUrl.endsWith('/') ? site.baseUrl.slice(0, -1) : site.baseUrl
  const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`

  return `${baseUrl}${normalizedPath}`
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

export async function GET() {
  const posts = (await getCollection('posts'))
    .filter(isPublicPost)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())

  const staticEntries = [
    { loc: normalizeUrl('/'), lastmod: undefined },
    { loc: normalizeUrl('/posts/'), lastmod: undefined },
    ...site.categories.map((category) => ({
      loc: normalizeUrl(`/category/${category.slug}/`),
      lastmod: undefined,
    })),
  ]

  const postEntries = posts.map((post) => ({
    loc: normalizeUrl(`/${post.slug}/`),
    lastmod: post.data.pubDate.toISOString().slice(0, 10),
  }))

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...[...staticEntries, ...postEntries].map(({ loc, lastmod }) => {
      const lines = ['  <url>', `    <loc>${escapeXml(loc)}</loc>`]

      if (lastmod) {
        lines.push(`    <lastmod>${lastmod}</lastmod>`)
      }

      lines.push('  </url>')

      return lines.join('\n')
    }),
    '</urlset>',
  ].join('\n')

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
