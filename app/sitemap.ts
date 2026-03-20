import { MetadataRoute } from 'next'
import { services } from '@/content/services'
import { locations } from '@/content/locations'
import { blogPosts } from '@/content/blog-posts'

const BASE_URL = 'https://codeinwordpress.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: '', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/contact', priority: 0.9 },
    { path: '/pricing', priority: 0.9 },
    { path: '/faq', priority: 0.7 },
    { path: '/services', priority: 0.9 },
    { path: '/locations', priority: 0.8 },
    { path: '/blog', priority: 0.8 },
    { path: '/portfolio', priority: 0.8 },
    { path: '/privacy-policy', priority: 0.3 },
    { path: '/terms-of-service', priority: 0.3 },
  ]

  const servicePages = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.9,
  }))

  const locationPages = locations.map((l) => ({
    path: `/locations/${l.slug}`,
    priority: 0.9,
  }))

  const blogPages = blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.7,
  }))

  const allPages = [...staticPages, ...servicePages, ...locationPages, ...blogPages]

  return allPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page.priority,
  }))
}
