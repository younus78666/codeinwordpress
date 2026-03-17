'use client'

import Link from 'next/link'
import { blogPosts } from '@/content/blog-posts'
import { Badge } from '@/components/ui/Shared'
import { NewsletterForm } from '@/components/sections/NewsletterForm'

// Extract unique categories with counts
const categories = blogPosts.reduce<Record<string, number>>((acc, post) => {
  acc[post.category] = (acc[post.category] || 0) + 1
  return acc
}, {})

// Popular posts (first 3 by default — replace with analytics-driven order later)
const popularPosts = blogPosts.slice(0, 3)

export function BlogSidebar() {
  return (
    <aside className="space-y-8" aria-label="Blog sidebar">
      {/* Categories */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h3 className="text-base font-heading font-bold text-foreground mb-4">Categories</h3>
        <ul className="space-y-2">
          {Object.entries(categories).map(([cat, count]) => (
            <li key={cat}>
              <button
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm font-heading text-secondary-600 hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                <span>{cat}</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">{count}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h3 className="text-base font-heading font-bold text-foreground mb-4">Popular Articles</h3>
        <ul className="space-y-4">
          {popularPosts.map((post, i) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex items-start gap-3">
                <span className="shrink-0 w-7 h-7 rounded-lg bg-primary-100 flex items-center justify-center text-xs font-heading font-bold text-primary-700">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-heading font-medium text-foreground group-hover:text-primary-600 transition-colors line-clamp-2">
                    {post.title}
                  </p>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter */}
      <div className="bg-primary-50 rounded-2xl p-6">
        <h3 className="text-base font-heading font-bold text-foreground mb-2">WordPress Tips Weekly</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Join 200+ business owners getting actionable WordPress and SEO tips every Thursday.
        </p>
        <NewsletterForm />
        <p className="text-xs text-muted-foreground mt-3">No spam. Unsubscribe anytime.</p>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <h3 className="text-base font-heading font-bold text-foreground mb-4">Need Help?</h3>
        <div className="space-y-2">
          <Link href="/services" className="flex items-center gap-2 text-sm font-heading text-secondary-600 hover:text-primary-600 transition-colors">
            <span>→</span> View Our Services
          </Link>
          <Link href="/pricing" className="flex items-center gap-2 text-sm font-heading text-secondary-600 hover:text-primary-600 transition-colors">
            <span>→</span> See Pricing
          </Link>
          <Link href="/contact" className="flex items-center gap-2 text-sm font-heading text-secondary-600 hover:text-primary-600 transition-colors">
            <span>→</span> Get a Free Quote
          </Link>
          <Link href="/faq" className="flex items-center gap-2 text-sm font-heading text-secondary-600 hover:text-primary-600 transition-colors">
            <span>→</span> FAQ
          </Link>
        </div>
      </div>
    </aside>
  )
}
