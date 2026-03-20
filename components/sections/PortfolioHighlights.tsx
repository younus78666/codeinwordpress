import { projects } from '@/content/portfolio'
import { SectionWrapper, Card, Badge } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { Button } from '@/components/ui/Button'

/* ── Portfolio Highlights ── */

const gradients = [
  'bg-gradient-to-br from-primary-600 to-accent-500',
  'bg-gradient-to-br from-accent-500 to-primary-600',
  'bg-gradient-to-br from-primary-700 to-primary-500',
]

function UpArrowIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
    </svg>
  )
}

export function PortfolioHighlights() {
  const featured = projects.slice(0, 3)

  return (
    <SectionWrapper
      id="portfolio-highlights"
      heading="Real Results for Real Businesses"
      subheading="Every project we deliver is measured by the impact it has on our clients' bottom line. Here are a few recent wins."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {featured.map((project, i) => (
          <AnimateOnScroll key={project.slug} delay={i * 100}>
            <div className="group h-full">
              <div className="h-full flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-[0_0_30px_rgba(8,145,178,0.15)] hover:border-primary-300 hover:-translate-y-1">
                {/* Gradient header */}
                <div className={`${gradients[i]} px-6 py-8 relative`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_60%)]" aria-hidden="true" />

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-sm font-heading font-bold text-white border border-white/20">
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white relative z-10 pr-12">
                    {project.client}
                  </h3>
                  <p className="text-sm text-white/80 mt-1 relative z-10">
                    {project.title}
                  </p>

                  {/* Duration tag */}
                  <span className="inline-block mt-3 text-xs bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-white/90 relative z-10">
                    {project.duration}
                  </span>
                </div>

                {/* Body */}
                <div className="px-6 pt-5 pb-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="primary">{project.industry}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {project.location}
                    </span>
                  </div>

                  {/* Key results as mini cards */}
                  <div className="grid grid-cols-1 gap-2 flex-1">
                    {project.results.slice(0, 3).map((result) => (
                      <div
                        key={result.metric}
                        className="flex items-center justify-between gap-2 bg-muted/50 rounded-lg px-3 py-2 border border-border/50"
                      >
                        <div className="flex items-center gap-2">
                          <UpArrowIcon />
                          <span className="text-sm text-muted-foreground">{result.metric}</span>
                        </div>
                        <span className="text-sm font-heading font-bold text-primary-700 whitespace-nowrap">
                          {result.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial snippet */}
                  {project.testimonialQuote && (
                    <p className="mt-4 text-xs text-muted-foreground italic leading-relaxed border-l-2 border-primary-300 pl-3">
                      &ldquo;{project.testimonialQuote.length > 80
                        ? project.testimonialQuote.slice(0, 80) + '...'
                        : project.testimonialQuote}&rdquo;
                    </p>
                  )}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      {/* CTA */}
      <AnimateOnScroll delay={350}>
        <div className="mt-12 text-center">
          <Button
            href="/portfolio"
            variant="primary"
            size="lg"
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            }
          >
            View all projects
          </Button>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>
  )
}
