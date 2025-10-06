import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type SeoProps = {
  title?: string
  description?: string
  image?: string // absolute or root-relative
  type?: 'website' | 'article'
  robots?: string // e.g., "index,follow" or "noindex,follow"
  articlePublishedTime?: string // ISO date for articles
  jsonLd?: Record<string, any> | Record<string, any>[]
}

const SITE_URL = 'https://voltik.es'

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v))
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function absoluteUrl(pathOrUrl?: string): string | undefined {
  if (!pathOrUrl) return undefined
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl
  // ensure leading slash
  const p = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`
  return `${SITE_URL}${p}`
}

export default function Seo({
  title,
  description,
  image,
  type = 'website',
  robots,
  articlePublishedTime,
  jsonLd,
}: SeoProps) {
  const { pathname } = useLocation()

  useEffect(() => {
    const url = `${SITE_URL}${pathname}`

    // Title
    if (title) {
      document.title = title
      upsertMeta("meta[property='og:title']", { property: 'og:title', content: title })
      upsertMeta("meta[name='twitter:title']", { name: 'twitter:title', content: title })
    }

    // Description
    if (description) {
      upsertMeta("meta[name='description']", { name: 'description', content: description })
      upsertMeta("meta[property='og:description']", { property: 'og:description', content: description })
      upsertMeta("meta[name='twitter:description']", { name: 'twitter:description', content: description })
    }

    // Canonical (Canonical.tsx also maintains this; we keep it in sync here if missing)
    upsertLink('canonical', url)

    // OG base
    upsertMeta("meta[property='og:type']", { property: 'og:type', content: type })
    upsertMeta("meta[property='og:url']", { property: 'og:url', content: url })

    // Image
    const absImage = absoluteUrl(image)
    if (absImage) {
      upsertMeta("meta[property='og:image']", { property: 'og:image', content: absImage })
      upsertMeta("meta[property='og:image:width']", { property: 'og:image:width', content: '800' })
      upsertMeta("meta[property='og:image:height']", { property: 'og:image:height', content: '600' })
      upsertMeta("meta[property='og:image:alt']", { property: 'og:image:alt', content: title || 'Voltik - Servicios de eficiencia energética' })
      upsertMeta("meta[name='twitter:image']", { name: 'twitter:image', content: absImage })
      upsertMeta("meta[name='twitter:image:alt']", { name: 'twitter:image:alt', content: title || 'Voltik - Servicios de eficiencia energética' })
    }

    // Robots
    if (robots) {
      upsertMeta("meta[name='robots']", { name: 'robots', content: robots })
    }

    // Article specifics
    if (type === 'article') {
      if (articlePublishedTime) {
        upsertMeta("meta[property='article:published_time']", {
          property: 'article:published_time',
          content: articlePublishedTime,
        })
      }
    }

    // Twitter card: large if image, else summary
    upsertMeta("meta[name='twitter:card']", {
      name: 'twitter:card',
      content: absImage ? 'summary_large_image' : 'summary',
    })

    // JSON-LD
    const existing = document.getElementById('seo-jsonld') as HTMLScriptElement | null
    if (jsonLd) {
      const el = existing || document.createElement('script')
      el.type = 'application/ld+json'
      el.id = 'seo-jsonld'
      el.text = JSON.stringify(jsonLd)
      if (!existing) document.head.appendChild(el)
    } else if (existing) {
      existing.remove()
    }
  }, [title, description, image, type, robots, articlePublishedTime, jsonLd, pathname])

  return null
}
