import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { generatePageMetadata } from '@/lib/metadata'
import { services } from '@/content/services'
import { serviceImages } from '@/content/images'
import { ServiceIconComponent } from '@/components/ui/ServiceIcon'
import { siteConfig } from '@/content/site-config'
import { Container, SectionWrapper, Badge } from '@/components/ui/Shared'
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

const serviceImageMap: Record<string, string> = {
  'wordpress-development': serviceImages.development,
  'speed-optimization': serviceImages.speedOptimization,
  'wordpress-seo': serviceImages.seo,
  'website-maintenance': serviceImages.maintenance,
  'security-hardening': serviceImages.security,
  'woocommerce-development': serviceImages.woocommerce,
  'website-redesign': serviceImages.redesign,
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)
  const heroImage = serviceImageMap[service.slug] || serviceImages.development

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
        provider: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
        areaServed: { '@type': 'State', name: 'New Mexico' },
        ...(service.price && {
          offers: { '@type': 'Offer', price: service.price.replace(/[^0-9]/g, ''), priceCurrency: 'USD', description: service.price },
        }),
      }} />

      {/* ═══ HERO — Split layout ═══ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 hero-gradient -z-20" />
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -z-10" aria-hidden="true" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl -z-10" aria-hidden="true" />

        <Container className="relative z-10">
          <Breadcrumbs items={[
            { name: 'Services', href: '/services' },
            { name: service.shortTitle, href: `/services/${service.slug}` },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-4">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100 shadow-sm mb-6 animate-fade-in">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white">
                  <ServiceIconComponent icon={service.icon} className="w-4 h-4" />
                </div>
                <span className="text-sm font-heading font-semibold text-primary-700">{service.shortTitle}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-bold text-foreground tracking-tight leading-[1.08] mb-6 animate-slide-up">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {service.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Button href="/contact" size="lg" className="shine-effect">
                  {siteConfig.ctaPrimary}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button href="/pricing" variant="outline" size="lg">See Pricing</Button>
                {service.price && (
                  <span className="px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 font-heading font-bold text-sm">{service.price}</span>
                )}
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-heading animate-fade-in" style={{ animationDelay: '0.4s' }}>
                {[`${siteConfig.stats.projects} Projects`, `${siteConfig.stats.satisfaction} Satisfaction`, '6-Month Free Support'].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-success/10 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative animate-slide-up" style={{ animationDelay: '0.15s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image src={heroImage} alt={service.title} width={900} height={500} className="object-cover w-full" priority />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/30 via-transparent to-accent-500/10" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-primary-950/70 to-transparent">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/90 text-sm font-heading font-medium">WordPress {service.shortTitle}</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary-200/60 animate-pulse hidden lg:block" aria-hidden="true" />
              <div className="absolute -bottom-6 -left-6 w-14 h-14 rounded-full bg-accent-200/50 animate-pulse hidden lg:block" style={{ animationDelay: '1s' }} aria-hidden="true" />
            </div>
          </div>
        </Container>
      </section>

      {/* ═══ FEATURES — 2x3 interactive boxes on dark bg ═══ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-950 via-primary-900 to-accent-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] bg-[length:24px_24px]" aria-hidden="true" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent-500/20 blur-3xl" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">What&apos;s Included</h2>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">Every deliverable is designed for measurable impact.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {service.features.map((feature, i) => (
              <AnimateOnScroll key={feature} delay={i * 60}>
                <div className="group relative bg-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/[0.14] hover:border-white/20 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-400 to-primary-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm font-heading font-medium text-white/90 pt-2">{feature}</span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══ LONG-FORM CONTENT — left/right images, h3 cards, list grids ═══ */}
      {service.longContent && <ContentRenderer html={service.longContent} />}

      {/* ═══ TESTIMONIALS ═══ */}
      <Testimonials limit={2} />

      {/* ═══ RELATED SERVICES ═══ */}
      <SectionWrapper heading="Related Services" subheading="Other ways we can help your business grow." background="alt">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((r, i) => {
            const img = serviceImageMap[r.slug] || serviceImages.development
            return (
              <AnimateOnScroll key={r.slug} delay={i * 80}>
                <Link href={`/services/${r.slug}`} className="block h-full group">
                  <div className="bg-card rounded-2xl border border-border overflow-hidden h-full flex flex-col hover:shadow-xl hover:border-primary-200 hover:-translate-y-1 transition-all duration-300">
                    <div className="relative h-44 overflow-hidden">
                      <Image src={img} alt={r.shortTitle} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        <ServiceIconComponent icon={r.icon} className="w-5 h-5" />
                      </div>
                      {r.price && <div className="absolute top-3 right-3"><Badge variant="primary" className="bg-white/90 text-primary-700">{r.price}</Badge></div>}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-base font-heading font-bold text-foreground group-hover:text-primary-600 transition-colors mb-2">{r.shortTitle}</h3>
                      <p className="text-sm text-muted-foreground flex-1 mb-4">{r.description.slice(0, 100)}...</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                        Learn more
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            )
          })}
        </div>
      </SectionWrapper>

      {/* ═══ CTA ═══ */}
      <CTABanner heading={`Ready for ${service.shortTitle}?`} subheading="Get a free consultation and custom quote for your project." />
    </>
  )
}
