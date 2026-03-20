import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/content/site-config'
import { blogPosts } from '@/content/blog-posts'
import { Container, Card, Badge } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { CTABanner } from '@/components/sections/Features'
import { BlogSidebar } from '@/components/sections/BlogSidebar'

export const metadata: Metadata = generatePageMetadata({
  title: 'WordPress Blog | Tips, Guides & Insights',
  description: 'WordPress development tips, speed optimization guides, SEO strategies, and maintenance best practices from the Code In WordPress team.',
  path: '/blog',
})

const posts = blogPosts

function CategoryIcon({ category }: { category: string }) {
  const iconClass = 'w-7 h-7 text-primary-600'
  switch (category) {
    case 'Security':
      return <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
    case 'SEO':
      return <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
    case 'WooCommerce':
      return <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
    case 'Business':
      return <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    default:
      return <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
  }
}

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight mb-6">
              WordPress <span className="text-primary-600">Insights</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Practical guides, tutorials, and strategies on WordPress development, speed optimization, SEO, and growing your business online.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured post */}
      <section className="py-16 md:py-24">
        <Container>
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-8 lg:p-12 flex items-center justify-center min-h-[250px] relative overflow-hidden">
                  <div className="absolute inset-0 dot-pattern opacity-30" aria-hidden="true" />
                  <div className="text-center relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                      </svg>
                    </div>
                    <p className="text-sm font-heading font-semibold text-white/90">Featured Article</p>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge variant="primary" className="mb-4 w-fit">{posts[0].category}</Badge>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                    {posts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
                    <span>{posts[0].date}</span>
                    <span className="w-1 h-1 rounded-full bg-secondary-300" />
                    <span>{posts[0].readTime}</span>
                  </div>
                  <Button href={`/blog/${posts[0].slug}`} variant="primary" size="md" className="w-fit">
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Post grid + Sidebar (2-column layout) */}
      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Main content - 2/3 width */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.slice(1).map((post, i) => (
                  <AnimateOnScroll key={post.slug} delay={i * 80}>
                    <Link href={`/blog/${post.slug}`} className="block h-full group">
                      <Card className="h-full flex flex-col" padding="lg">
                        <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl h-40 flex items-center justify-center mb-5">
                          <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center">
                            <CategoryIcon category={post.category} />
                          </div>
                        </div>
                        <Badge variant="default" className="mb-3 w-fit">{post.category}</Badge>
                        <h3 className="text-lg font-heading font-bold text-foreground group-hover:text-primary-600 transition-colors mb-2 flex-1">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                      </Card>
                    </Link>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>

            {/* Sidebar - 1/3 width */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        heading="Need Help With Your WordPress Site?"
        subheading="Whether you need a new site, speed fix, or SEO boost, we can help."
      />
    </>
  )
}
