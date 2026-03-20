import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { generatePageMetadata } from '@/lib/metadata'
import { services } from '@/content/services'
import { serviceImages } from '@/content/images'
import { ServiceIconComponent } from '@/components/ui/ServiceIcon'
import { siteConfig } from '@/content/site-config'
import { Container, SectionWrapper, Card, Badge } from '@/components/ui/Shared'
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

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Audit',
    description: 'We analyze your current setup, identify bottlenecks, and understand your business goals.',
    icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z',
  },
  {
    step: '02',
    title: 'Strategy & Plan',
    description: 'We build a detailed action plan with clear deliverables, timeline, and expected outcomes.',
    icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z',
  },
  {
    step: '03',
    title: 'Execute & Build',
    description: 'Our team implements every element with clean code, best practices, and thorough testing.',
    icon: 'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
  },
  {
    step: '04',
    title: 'Review & Launch',
    description: 'You review the work, we make revisions, and launch when you are 100% satisfied.',
    icon: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
  },
  {
    step: '05',
    title: 'Support & Optimize',
    description: 'Six months of free post-launch support plus ongoing optimization recommendations.',
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  },
]

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

      {/* ══════════════════════════════════════════════════════════════
          HERO — Split layout matching homepage hero style
         ══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background — matches homepage hero gradient */}
        <div className="absolute inset-0 hero-gradient -z-20" />
        <div className="absolute inset-0 grid-pattern -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -z-10" aria-hidden="true" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl -z-10" aria-hidden="true" />
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-accent-100/30 rounded-full blur-2xl -z-10" aria-hidden="true" />

        <Container className="relative z-10">
          <Breadcrumbs items={[
            { name: 'Services', href: '/services' },
            { name: service.shortTitle, href: `/services/${service.slug}` },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-4">
            {/* Left — Text */}
            <div>
              {/* Icon badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100 shadow-sm mb-6 animate-fade-in">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white">
                  <ServiceIconComponent icon={service.icon} className="w-4 h-4" />
                </div>
                <span className="text-sm font-heading font-semibold text-primary-700">{service.shortTitle}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground tracking-tight leading-[1.08] mb-6 animate-slide-up">
                {service.title}
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {service.description}
              </p>

              {/* Price + CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Button href="/contact" size="lg" className="shine-effect">
                  {siteConfig.ctaPrimary}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                <Button href="/pricing" variant="outline" size="lg">See Pricing</Button>
                {service.price && (
                  <span className="px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-700 font-heading font-bold text-sm">
                    {service.price}
                  </span>
                )}
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground font-heading animate-fade-in" style={{ animationDelay: '0.4s' }}>
                {[
                  `${siteConfig.stats.projects} Projects`,
                  `${siteConfig.stats.satisfaction} Satisfaction`,
                  '6-Month Free Support',
                ].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-success/10 flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-success" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Hero image */}
            <div className="relative animate-slide-up" style={{ animationDelay: '0.15s' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                <Image
                  src={heroImage}
                  alt={service.title}
                  width={900}
                  height={500}
                  className="object-cover w-full"
                  priority
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-950/30 via-transparent to-accent-500/10" />
                {/* Bottom label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-primary-950/70 to-transparent">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/90 text-sm font-heading font-medium">WordPress {service.shortTitle}</span>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-primary-200/60 animate-pulse hidden lg:block" aria-hidden="true" />
              <div className="absolute -bottom-6 -left-6 w-14 h-14 rounded-full bg-accent-200/50 animate-pulse hidden lg:block" style={{ animationDelay: '1s' }} aria-hidden="true" />
              <div className="absolute top-1/2 -right-8 w-6 h-6 rounded-full bg-primary-300/40 animate-pulse hidden lg:block" style={{ animationDelay: '2s' }} aria-hidden="true" />
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          WHAT'S INCLUDED — Feature grid with gradient icons
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-950 via-primary-900 to-accent-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] bg-[length:24px_24px]" aria-hidden="true" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-accent-500/20 to-primary-500/10 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-primary-500/15 to-accent-500/10 blur-3xl" aria-hidden="true" />

        <Container className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              What&apos;s Included
            </h2>
            <p className="text-lg text-primary-200 max-w-2xl mx-auto">
              Every deliverable is designed for measurable impact on your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((feature, i) => (
              <AnimateOnScroll key={feature} delay={i * 60}>
                <div className="flex items-start gap-4 p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-400 to-primary-400 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-heading font-medium text-white/90">{feature}</span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LONG-FORM CONTENT — Designed sections via ContentRenderer
         ══════════════════════════════════════════════════════════════ */}
      {service.longContent && <ContentRenderer html={service.longContent} />}

      {/* ══════════════════════════════════════════════════════════════
          PROCESS — Horizontal steps with icons and connecting line
         ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary-50/40 via-white to-accent-50/30 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-[0.03]" aria-hidden="true" />
        <Container className="relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Our {service.shortTitle} Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A clear, proven workflow from discovery to delivery. No black boxes.
            </p>
          </div>

          {/* Desktop: horizontal connected steps */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-primary-200" aria-hidden="true" />

              <div className="grid grid-cols-5 gap-4">
                {processSteps.map((step, i) => (
                  <AnimateOnScroll key={step.step} delay={i * 100}>
                    <div className="text-center relative">
                      {/* Step circle */}
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-5 shadow-lg relative z-10">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                        </svg>
                      </div>
                      {/* Step number */}
                      <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-heading font-bold mb-3">
                        Step {step.step}
                      </span>
                      <h3 className="text-sm font-heading font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile: vertical cards */}
          <div className="lg:hidden max-w-lg mx-auto space-y-4">
            {processSteps.map((step, i) => (
              <AnimateOnScroll key={step.step} delay={i * 80}>
                <div className="flex items-start gap-4 bg-white rounded-2xl border border-border p-5 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-heading font-bold text-primary-600">{step.step}</span>
                    <h3 className="text-sm font-heading font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          TESTIMONIALS
         ══════════════════════════════════════════════════════════════ */}
      <Testimonials limit={2} />

      {/* ══════════════════════════════════════════════════════════════
          RELATED SERVICES — Cards with gradient headers
         ══════════════════════════════════════════════════════════════ */}
      <SectionWrapper
        heading="Related Services"
        subheading="Explore other ways we can help your business grow online."
        background="alt"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((r, i) => {
            const relImage = serviceImageMap[r.slug] || serviceImages.development
            return (
              <AnimateOnScroll key={r.slug} delay={i * 80}>
                <Link href={`/services/${r.slug}`} className="block h-full group">
                  <div className="bg-card rounded-2xl border border-border overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-primary-200 hover:-translate-y-1">
                    {/* Image header */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={relImage}
                        alt={r.shortTitle}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 via-primary-950/10 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                          <ServiceIconComponent icon={r.icon} className="w-5 h-5" />
                        </div>
                      </div>
                      {r.price && (
                        <div className="absolute top-3 right-3">
                          <Badge variant="primary" className="bg-white/90 text-primary-700">{r.price}</Badge>
                        </div>
                      )}
                    </div>
                    {/* Body */}
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-base font-heading font-bold text-foreground group-hover:text-primary-600 transition-colors mb-2">
                        {r.shortTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground flex-1 mb-4">{r.description.slice(0, 120)}...</p>
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

      {/* ══════════════════════════════════════════════════════════════
          CTA BANNER
         ══════════════════════════════════════════════════════════════ */}
      <CTABanner heading={`Ready for ${service.shortTitle}?`} subheading="Get a free consultation and custom quote for your project." />
    </>
  )
}
