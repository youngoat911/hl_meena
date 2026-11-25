import { defineConfig, type HtmlTagDescriptor, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { certification, contact, hero, meta, person, socials } from './src/data/site.ts'
import { cleanUrl, imageSrc, imageSrcSet } from './src/lib/links.ts'

/** Builds every SEO tag from src/data/site.ts so the copy lives in one place. */
function seo(): Plugin {
  // Set meta.siteUrl once there is a custom domain; Vercel supplies its own until then.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL
  const base = (meta.siteUrl ?? (vercel ? `https://${vercel}` : '')).replace(/\/$/, '')
  const title = meta.title.en
  const description = meta.description.en
  const ogImage = `${base}${meta.ogImage}`
  const tag = (attrs: Record<string, string>): HtmlTagDescriptor => ({ tag: 'meta', attrs, injectTo: 'head' })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    alternateName: person.shortName,
    jobTitle: certification.titleConferred.en,
    description,
    ...(base && { url: base, image: `${base}${imageSrc(hero.image.name)}` }),
    ...(contact.email && { email: contact.email }),
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      name: certification.titleConferred.en,
      credentialCategory: 'certificate',
      dateCreated: certification.dateIso,
      recognizedBy: { '@type': 'Organization', name: certification.issuer.en },
    },
    sameAs: socials.flatMap((s) => (s.url ? [cleanUrl(s.url)] : [])),
  }

  return {
    name: 'site-seo',
    transformIndexHtml: () => [
      { tag: 'title', children: title, injectTo: 'head' },
      tag({ name: 'description', content: description }),
      tag({ name: 'keywords', content: meta.keywords.join(', ') }),
      tag({ name: 'author', content: person.name }),
      tag({ property: 'og:type', content: 'website' }),
      tag({ property: 'og:title', content: title }),
      tag({ property: 'og:description', content: description }),
      tag({ property: 'og:image', content: ogImage }),
      tag({ property: 'og:image:width', content: '1200' }),
      tag({ property: 'og:image:height', content: '630' }),
      tag({ name: 'twitter:card', content: 'summary_large_image' }),
      tag({ name: 'twitter:title', content: title }),
      tag({ name: 'twitter:description', content: description }),
      tag({ name: 'twitter:image', content: ogImage }),
      ...(base
        ? [
            tag({ property: 'og:url', content: base }),
            { tag: 'link', attrs: { rel: 'canonical', href: `${base}/` }, injectTo: 'head' as const },
          ]
        : []),
      {
        tag: 'link',
        attrs: {
          rel: 'preload', as: 'image', type: 'image/webp', fetchpriority: 'high',
          imagesrcset: imageSrcSet(hero.image.name), imagesizes: hero.image.sizes,
        },
        injectTo: 'head',
      },
      {
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        children: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        injectTo: 'head',
      },
    ],
  }
}

export default defineConfig({ plugins: [react(), tailwindcss(), seo()] })
