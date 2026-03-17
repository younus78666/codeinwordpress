import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/content/site-config'
import { SectionWrapper, Container, Card } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { StatsBar } from '@/components/sections/Services'
import { CTABanner } from '@/components/sections/Features'
import { Testimonials } from '@/components/sections/Testimonials'

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us',
  description: `Learn about ${siteConfig.name} — a WordPress development agency with ${siteConfig.stats.experience} years of experience, ${siteConfig.stats.projects} completed projects, and a ${siteConfig.stats.satisfaction} client satisfaction rate.`,
  path: '/about',
})

const values = [
  { icon: '🎯', title: 'Results Over Everything', description: 'A beautiful website means nothing if it does not generate leads, rank on Google, and load fast. We measure success in business outcomes, not design awards.' },
  { icon: '🔍', title: 'Transparency First', description: 'You will always know exactly what we are working on, how much it costs, and when it will be done. No black boxes, no vague timelines, no surprise invoices.' },
  { icon: '⚡', title: 'Technical Excellence', description: 'We write clean, optimized code. We do not just drag-and-drop templates. Every site is built to perform at the highest level for speed, SEO, and security.' },
  { icon: '🤝', title: 'Long-Term Partnership', description: 'We are not interested in one-off transactions. Our 6-month free support period and maintenance plans reflect our commitment to your long-term success.' },
]

const timeline = [
  { year: '2017', event: 'Started freelancing on WordPress with a focus on speed optimization and clean code.' },
  { year: '2019', event: 'Reached 100+ completed projects across the US, UK, and Australia. Earned Top Rated badge on Upwork.' },
  { year: '2021', event: 'Expanded into technical SEO services, combining development expertise with advanced search optimization.' },
  { year: '2023', event: 'Surpassed 300+ projects and $100K+ in completed work. Launched codeinwordpress.com targeting New Mexico businesses.' },
  { year: '2025', event: '400+ projects completed with a 99% satisfaction rate. Serving 15+ WordPress sites on ongoing retainers across 12+ countries.' },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight mb-6">
              WordPress Experts with{' '}
              <span className="text-primary-600">{siteConfig.stats.experience} Years</span> of Proof
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              We are a WordPress-focused development and SEO agency that has completed {siteConfig.stats.projects} projects for businesses across New Mexico and 12+ countries worldwide. Every site we build is optimized for speed, security, and search visibility from day one.
            </p>
            <Button href="/contact" size="lg">Work With Us</Button>
          </div>
        </Container>
      </section>

      <StatsBar />

      {/* Our Values */}
      <SectionWrapper heading="What We Stand For" subheading="The principles that guide every project, every decision, and every line of code.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((v, i) => (
            <AnimateOnScroll key={v.title} delay={i * 100}>
              <Card padding="lg" className="h-full">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper background="alt" heading="Our Journey" subheading="From a solo freelancer to a full-service WordPress agency.">
        <div className="mx-auto max-w-2xl">
          <div className="relative border-l-2 border-primary-200 pl-8 space-y-10">
            {timeline.map((item, i) => (
              <AnimateOnScroll key={item.year} delay={i * 100}>
                <div className="relative">
                  <div className="absolute -left-[2.56rem] top-1 w-5 h-5 rounded-full bg-primary-600 border-4 border-white" />
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-heading font-bold mb-2">
                    {item.year}
                  </span>
                  <p className="text-sm text-secondary-700 leading-relaxed">{item.event}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Testimonials limit={3} />
      <CTABanner heading="Ready to Start Your Project?" subheading="Get a free consultation and quote. No pressure, no commitment." />
    </>
  )
}
