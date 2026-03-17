import { siteConfig } from '@/content/site-config'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Shared'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 hero-gradient grid-pattern overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl -z-10" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-heading font-semibold mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Trusted by {siteConfig.stats.clients} businesses across New Mexico
          </div>

          {/* H1 — Primary keyword: WordPress agency New Mexico */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground tracking-tight leading-[1.08] mb-6 animate-slide-up">
            The WordPress Agency{' '}
            <span className="text-primary-600">New Mexico</span> Businesses Trust
          </h1>

          {/* Subheadline — conversational, includes secondary KWs */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
            We build WordPress websites that actually work for your business. Fast load times,
            search engine visibility, rock-solid security. Serving Albuquerque, Santa Fe,
            Las Cruces, and every corner of New Mexico.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button href="/contact" size="lg">
              {siteConfig.ctaPrimary}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              See Our Pricing
            </Button>
          </div>

          {/* Trust indicators — E-E-A-T signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-12 text-sm text-muted-foreground font-heading animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              {siteConfig.stats.projects} Projects Delivered
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              {siteConfig.stats.satisfaction} Client Satisfaction
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              {siteConfig.stats.experience} Years in WordPress
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              14-Day Money-Back Guarantee
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
