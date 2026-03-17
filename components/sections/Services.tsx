import Link from 'next/link'
import { services } from '@/content/services'
import { siteConfig } from '@/content/site-config'
import { SectionWrapper, Card } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

/* ── Services Overview ── */
export function ServicesOverview() {
  return (
    <SectionWrapper
      id="services"
      heading="What We Do for New Mexico Businesses"
      subheading="Every service is built around one goal: making your WordPress website a lead-generating machine. No fluff, no filler, just work that moves the needle."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.slice(0, 6).map((service, i) => (
          <AnimateOnScroll key={service.slug} delay={i * 80}>
            <Link href={`/services/${service.slug}`} className="block h-full group">
              <Card className="h-full flex flex-col" padding="lg">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary-600 transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-sm text-muted-foreground flex-1 mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-heading font-semibold text-primary-600 group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Card>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}

/* ── Stats Bar ── */
const stats = [
  { value: siteConfig.stats.projects, label: 'WordPress Projects Delivered' },
  { value: siteConfig.stats.clients, label: 'Businesses Served' },
  { value: siteConfig.stats.experience, label: 'Years Building WordPress' },
  { value: siteConfig.stats.satisfaction, label: 'Client Satisfaction Rate' },
]

export function StatsBar() {
  return (
    <section className="py-14 md:py-20 bg-primary-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,rgba(255,255,255,0.05)_25%,rgba(255,255,255,0.05)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:40px_40px]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-heading text-primary-100">
                  {stat.label}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
