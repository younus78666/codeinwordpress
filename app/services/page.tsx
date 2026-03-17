import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { services } from '@/content/services'
import { Container, Card } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { CTABanner } from '@/components/sections/Features'

export const metadata: Metadata = generatePageMetadata({
  title: 'WordPress Services',
  description: 'Professional WordPress development, speed optimization, SEO, maintenance, security, WooCommerce, and redesign services. Serving businesses across New Mexico.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight mb-6">
              WordPress Services That <span className="text-primary-600">Deliver Results</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              From custom development to ongoing optimization, every service is designed to make your website faster, more visible, and more profitable. No fluff, no filler.
            </p>
            <Button href="/contact" size="lg">Get a Free Quote</Button>
          </div>
        </Container>
      </section>

      {/* Service Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <AnimateOnScroll key={service.slug} delay={i * 80}>
                <Link href={`/services/${service.slug}`} className="block h-full group">
                  <Card className="h-full flex flex-col" padding="lg">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div className="flex-1">
                        <h2 className="text-xl font-heading font-bold text-foreground group-hover:text-primary-600 transition-colors mb-1">
                          {service.title}
                        </h2>
                        {service.price && (
                          <span className="text-sm font-heading font-semibold text-primary-600">{service.price}</span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-5 flex-1">{service.description}</p>
                    <ul className="space-y-2 mb-5">
                      {service.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-secondary-600">
                          <svg className="w-4 h-4 mt-0.5 shrink-0 text-success" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                      View details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Card>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  )
}
