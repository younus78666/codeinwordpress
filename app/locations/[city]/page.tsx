import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { locations } from '@/content/locations'
import { services } from '@/content/services'
import { ServiceIconComponent } from '@/components/ui/ServiceIcon'
import { siteConfig } from '@/content/site-config'
import { Container, SectionWrapper, Card } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema, LocalBusinessSchema } from '@/components/seo/JsonLd'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { GoogleMap } from '@/components/sections/GoogleMap'
import { FAQSection } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/Features'

type Props = { params: { city: string } }

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const location = locations.find((l) => l.slug === params.city)
  if (!location) return {}
  return generatePageMetadata({
    title: `WordPress Agency in ${location.city}, ${location.state}`,
    description: location.description,
    path: `/locations/${location.slug}`,
  })
}

export default function LocationPage({ params }: Props) {
  const location = locations.find((l) => l.slug === params.city)
  if (!location) notFound()

  const nearbyCities = location.nearbyCities
    .map((slug) => locations.find((l) => l.slug === slug))
    .filter(Boolean) as typeof locations

  const cityFaqs = [
    {
      question: `How much does a WordPress website cost in ${location.city}?`,
      answer: `Our WordPress websites for ${location.city} businesses start at $500 for a starter site with up to 10 pages. Professional builds with advanced features are $900, and complex projects including e-commerce start at $1,500. Every project includes a 14-day money-back guarantee.`,
      category: 'pricing' as const,
    },
    {
      question: `Do you offer in-person meetings in ${location.city}?`,
      answer: `We work primarily through video calls, email, and screen sharing, which allows us to serve ${location.city} businesses efficiently. This approach lets us focus your budget on building a great website rather than travel time.`,
      category: 'general' as const,
    },
    {
      question: `How long does it take to build a website for a ${location.city} business?`,
      answer: `Most ${location.city} projects take 2 to 4 weeks from kickoff to launch. A simple starter site can be ready in under two weeks, while complex builds with WooCommerce or custom features may take 4 to 6 weeks. We provide a clear timeline during our consultation.`,
      category: 'general' as const,
    },
    {
      question: `What industries do you serve in ${location.city}?`,
      answer: `We serve all industries in ${location.city} including restaurants, law firms, medical practices, real estate, construction, retail, tourism, professional services, and more. Every WordPress site we build is tailored to your specific business and target audience.`,
      category: 'services' as const,
    },
  ]

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Locations', href: '/locations' },
        { name: location.city, href: `/locations/${location.slug}` },
      ]} />
      <LocalBusinessSchema
        city={location.city}
        state={location.state}
        geo={location.geo}
        areaServed={location.city}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[
            { name: 'Locations', href: '/' },
            { name: location.city, href: `/locations/${location.slug}` },
          ]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight mb-6">
              WordPress Agency in{' '}
              <span className="text-primary-600">{location.city}, {location.state}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">{siteConfig.ctaPrimary}</Button>
              <Button href="/pricing" variant="outline" size="lg">View Pricing</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Local Intro */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Serving {location.city} Businesses with WordPress Excellence
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{location.localIntro}</p>
            <div className="flex flex-wrap gap-2">
              {location.neighborhoods.map((n) => (
                <span key={n} className="px-3 py-1.5 rounded-full bg-primary-50 text-primary-700 text-xs font-heading font-semibold">
                  {n}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-2xl p-5 text-center">
                <div className="text-2xl font-display font-bold text-primary-700">{location.population}</div>
                <div className="text-xs font-heading text-primary-600 mt-1">Population</div>
              </div>
              <div className="bg-primary-50 rounded-2xl p-5 text-center">
                <div className="text-2xl font-display font-bold text-primary-700">{siteConfig.stats.projects}</div>
                <div className="text-xs font-heading text-primary-600 mt-1">Projects Done</div>
              </div>
            </div>
            <GoogleMap lat={location.geo.lat} lng={location.geo.lng} title={`${siteConfig.name} - ${location.city}`} />
          </div>
        </div>
      </SectionWrapper>

      {/* Long-form content */}
      {location.longContent && (
        <section className="py-16 md:py-24">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-headings:tracking-tight prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-secondary-600 prose-p:leading-relaxed prose-a:text-primary-600 prose-a:underline prose-a:decoration-primary-300 prose-a:underline-offset-2 hover:prose-a:decoration-primary-600 prose-strong:text-foreground prose-li:text-secondary-600"
                dangerouslySetInnerHTML={{ __html: location.longContent }}
              />
            </div>
          </Container>
        </section>
      )}

      {/* Services Available */}
      <SectionWrapper
        background="alt"
        heading={`WordPress Services in ${location.city}`}
        subheading={`Everything your ${location.city} business needs for a powerful online presence.`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service, i) => (
            <AnimateOnScroll key={service.slug} delay={i * 60}>
              <Link href={`/services/${service.slug}`} className="block h-full group">
                <Card className="h-full" padding="md">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3 text-primary-600">
                    <ServiceIconComponent icon={service.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground group-hover:text-primary-600 transition-colors mb-1">
                    {service.shortTitle}
                  </h3>
                  <p className="text-xs text-muted-foreground">{service.description.slice(0, 80)}...</p>
                </Card>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* City FAQ */}
      <FAQSection faqs={cityFaqs} heading={`${location.city} WordPress FAQ`} subheading={`Common questions from ${location.city} businesses.`} />

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <SectionWrapper background="alt" heading="Also Serving Nearby Cities">
          <div className="flex flex-wrap justify-center gap-4">
            {nearbyCities.map((nearby) => (
              <Link
                key={nearby.slug}
                href={`/locations/${nearby.slug}`}
                className="px-6 py-3 rounded-xl bg-white border border-border text-sm font-heading font-semibold text-secondary-700 hover:border-primary-300 hover:text-primary-600 transition-colors"
              >
                {nearby.city}, {nearby.state}
              </Link>
            ))}
          </div>
        </SectionWrapper>
      )}

      <CTABanner
        heading={`Ready to Grow Your ${location.city} Business?`}
        subheading={`Get a free consultation and custom quote for your ${location.city} WordPress project.`}
      />
    </>
  )
}
