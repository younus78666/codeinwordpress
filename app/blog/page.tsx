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
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 lg:p-12 flex items-center justify-center min-h-[250px]">
                  <div className="text-center">
                    <span className="text-6xl">📈</span>
                    <p className="text-sm font-heading font-semibold text-primary-600 mt-3">Featured Article</p>
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
                          <span className="text-4xl">
                            {post.category === 'Security' ? '🔒' : 
                             post.category === 'SEO' ? '🔍' :
                             post.category === 'WooCommerce' ? '🛒' :
                             post.category === 'Business' ? '💰' : '⚡'}
                          </span>
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
