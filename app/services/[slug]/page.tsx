import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { services } from '@/content/services'
import { ServiceIconComponent } from '@/components/ui/ServiceIcon'
import { siteConfig } from '@/content/site-config'
import { Container, SectionWrapper, Card } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema, JsonLd } from '@/components/seo/JsonLd'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABanner } from '@/components/sections/Features'
import { ContentRenderer } from '@/components/ui/ContentRenderer'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) return {}
  return generatePageMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  })
}

const processSteps = [
  { step: '01', title: 'Discovery & Audit', description: 'We analyze your current setup, identify bottlenecks, and understand your business goals.' },
  { step: '02', title: 'Strategy & Plan', description: 'We build a detailed action plan with clear deliverables, timeline, and expected outcomes.' },
  { step: '03', title: 'Execute & Build', description: 'Our team implements every element with clean code, best practices, and thorough testing.' },
  { step: '04', title: 'Review & Launch', description: 'You review the work, we make revisions, and launch when you are 100% satisfied.' },
  { step: '05', title: 'Support & Optimize', description: 'Six months of free post-launch support plus ongoing optimization recommendations.' },
]

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: service.title, href: `/services/${service.slug}` },
      ]} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: { '@type': 'State', name: 'New Mexico' },
        ...(service.price && {
          offers: {
            '@type': 'Offer',
            price: service.price.replace(/[^0-9]/g, ''),
            priceCurrency: 'USD',
            description: service.price,
          },
        }),
      }} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[
            { name: 'Services', href: '/services' },
            { name: service.shortTitle, href: `/services/${service.slug}` },
          ]} />
          <div className="max-w-3xl">
            <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-4 text-primary-600">
              <ServiceIconComponent icon={service.icon} className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6">
              {service.description}
            </p>
            {service.price && (
              <p className="text-xl font-heading font-bold text-primary-600 mb-8">{service.price}</p>
            )}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg">{siteConfig.ctaPrimary}</Button>
              <Button href="/pricing" variant="outline" size="lg">See All Pricing</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Long-form content with designed sections */}
      {service.longContent && <ContentRenderer html={service.longContent} />}

      {/* What's Included */}
      <SectionWrapper heading="What&apos;s Included" subheading="Every deliverable is designed for measurable impact on your business.">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.features.map((feature, i) => (
            <AnimateOnScroll key={feature} delay={i * 60}>
              <div className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-border">
                <svg className="w-5 h-5 mt-0.5 shrink-0 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-heading font-medium text-foreground">{feature}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper background="alt" heading="Our Process" subheading="A clear, proven workflow from discovery to delivery.">
        <div className="mx-auto max-w-3xl space-y-6">
          {processSteps.map((step, i) => (
            <AnimateOnScroll key={step.step} delay={i * 100}>
              <div className="flex items-start gap-5 bg-white rounded-2xl border border-border p-6">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                  <span className="text-sm font-display font-bold text-primary-700">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-base font-heading font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <Testimonials limit={2} />

      {/* Related Services */}
      <SectionWrapper heading="Related Services" subheading="Explore other ways we can help your business grow online.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((r, i) => (
            <AnimateOnScroll key={r.slug} delay={i * 80}>
              <Link href={`/services/${r.slug}`} className="block h-full group">
                <Card className="h-full" padding="lg">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-3 text-primary-600">
                    <ServiceIconComponent icon={r.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-heading font-bold text-foreground group-hover:text-primary-600 transition-colors mb-2">
                    {r.shortTitle}
                  </h3>
                  <p className="text-sm text-muted-foreground">{r.description.slice(0, 100)}...</p>
                </Card>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner heading={`Ready for ${service.shortTitle}?`} subheading="Get a free consultation and custom quote for your project." />
    </>
  )
}
