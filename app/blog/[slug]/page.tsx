import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { blogPosts } from '@/content/blog-posts'
import { siteConfig } from '@/content/site-config'
import { Container, Badge } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema, JsonLd } from '@/components/seo/JsonLd'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { CTABanner } from '@/components/sections/Features'
import { BlogSidebar } from '@/components/sections/BlogSidebar'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = post.relatedSlugs
    .map((slug) => blogPosts.find((p) => p.slug === slug))
    .filter(Boolean) as typeof blogPosts

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: post.title, href: `/blog/${post.slug}` },
      ]} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.dateISO,
        dateModified: post.dateISO,
        author: {
          '@type': 'Person',
          name: post.author.name,
          jobTitle: post.author.role,
          url: `${siteConfig.url}/about`,
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
          logo: { '@type': 'ImageObject', url: `${siteConfig.url}/images/logo.png` },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${siteConfig.url}/blog/${post.slug}` },
        image: `${siteConfig.url}/api/og?title=${encodeURIComponent(post.title)}`,
      }} />

      {/* Article Header */}
      <article>
        <header className="pt-32 pb-10 md:pt-40 md:pb-14 hero-gradient grid-pattern">
          <Container>
            <Breadcrumbs items={[
              { name: 'Blog', href: '/blog' },
              { name: post.title.length > 40 ? post.title.slice(0, 40) + '...' : post.title, href: `/blog/${post.slug}` },
            ]} />
            <div className="max-w-3xl">
              <Badge variant="primary" className="mb-4">{post.category}</Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xs font-heading font-bold">
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="font-heading font-medium text-foreground">{post.author.name}</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-secondary-300" />
                <time dateTime={post.dateISO}>{post.date}</time>
                <span className="w-1 h-1 rounded-full bg-secondary-300" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </Container>
        </header>

        {/* 2-Column: Article Body + Sidebar */}
        <section className="py-12 md:py-16">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
              {/* Main content - 2/3 width */}
              <div className="lg:col-span-2">
                {/* Article prose */}
                <div
                  className="prose prose-lg prose-slate max-w-none
                    prose-headings:font-heading prose-headings:text-foreground prose-headings:tracking-tight
                    prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4
                    prose-p:text-secondary-600 prose-p:leading-relaxed
                    prose-a:text-primary-600 prose-a:underline prose-a:decoration-primary-300 prose-a:underline-offset-2 hover:prose-a:decoration-primary-600
                    prose-strong:text-foreground
                    prose-li:text-secondary-600"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Author Bio */}
                <div className="mt-12 pt-10 border-t border-border">
                  <AnimateOnScroll>
                    <div className="flex items-start gap-5 bg-muted rounded-2xl p-6 md:p-8">
                      <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-lg font-heading font-bold shrink-0">
                        {post.author.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-1">Written by</p>
                        <h3 className="text-lg font-heading font-bold text-foreground mb-1">{post.author.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{post.author.role}</p>
                        <p className="text-sm text-secondary-600 leading-relaxed">{post.author.bio}</p>
                        <Link href="/about" className="inline-flex items-center gap-1 text-sm font-heading font-semibold text-primary-600 mt-3 hover:gap-2 transition-all">
                          Learn more about the team
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </AnimateOnScroll>
                </div>
              </div>

              {/* Sidebar - 1/3 width, sticky */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-24">
                  <BlogSidebar />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="py-12 md:py-16 bg-muted">
            <Container>
              <h2 className="text-2xl font-heading font-bold text-foreground text-center mb-10">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {related.map((r, i) => (
                  <AnimateOnScroll key={r.slug} delay={i * 100}>
                    <Link href={`/blog/${r.slug}`} className="block group">
                      <div className="bg-white rounded-2xl border border-border p-6 h-full hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                        <Badge variant="default" className="mb-3">{r.category}</Badge>
                        <h3 className="text-base font-heading font-bold text-foreground group-hover:text-primary-600 transition-colors mb-2">
                          {r.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{r.excerpt}</p>
                        <div className="text-xs text-muted-foreground">
                          {r.date} &middot; {r.readTime}
                        </div>
                      </div>
                    </Link>
                  </AnimateOnScroll>
                ))}
              </div>
            </Container>
          </section>
        )}
      </article>

      <CTABanner
        heading="Need Help With Your WordPress Site?"
        subheading="Whether you need speed optimization, SEO, or a full rebuild, we have you covered."
        primaryText="Get a Free Quote"
        primaryHref="/contact"
        secondaryText="View Services"
        secondaryHref="/services"
      />
    </>
  )
}
