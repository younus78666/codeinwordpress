import Link from 'next/link'
import { services } from '@/content/services'
import { siteConfig } from '@/content/site-config'
import { SectionWrapper, Card } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { ServiceIconComponent } from '@/components/ui/ServiceIcon'

/* -- Services Overview -- */
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
              <Card className="h-full flex flex-col relative overflow-hidden" padding="lg">
                {/* Gradient top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Number indicator */}
                <span className="absolute top-4 right-4 text-xs font-mono text-secondary-200">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4 text-white">
                  <ServiceIconComponent icon={service.icon} />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary-600 transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-sm text-muted-foreground flex-1 mb-4">
                  {service.description}
                </p>

                {/* Price badge */}
                {service.price && (
                  <span className="inline-flex items-center self-start px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-heading font-semibold mb-4">
                    {service.price}
                  </span>
                )}

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

/* -- Stats Bar -- */
const stats = [
  {
    value: siteConfig.stats.projects,
    label: 'WordPress Projects Delivered',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: siteConfig.stats.clients,
    label: 'Businesses Served',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    value: siteConfig.stats.experience,
    label: 'Years Building WordPress',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: siteConfig.stats.satisfaction,
    label: 'Client Satisfaction Rate',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
]

export function StatsBar() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-accent-900 relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] bg-[length:24px_24px]" aria-hidden="true" />

      {/* Large decorative gradient circle */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-accent-500/20 to-primary-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-primary-500/15 to-accent-500/10 blur-3xl" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 100}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-colors duration-300">
                <div className="flex justify-center mb-3 text-white/80">
                  {stat.icon}
                </div>
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
