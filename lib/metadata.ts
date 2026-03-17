import { Metadata } from 'next'
import { siteConfig } from '@/content/site-config'

type PageMetaProps = {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  noIndex = false,
}: PageMetaProps): Metadata {
  const url = `${siteConfig.url}${path}`
  const ogImage = image || `${siteConfig.url}/api/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    alternates: { canonical: url },
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      locale: 'en_US',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
