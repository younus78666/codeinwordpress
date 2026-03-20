import { siteConfig } from '@/content/site-config'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Shared'

function BrowserMockup({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* Decorative dots around the mockup */}
      <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary-200/60 animate-pulse" aria-hidden="true" />
      <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-accent-200/50 animate-pulse" style={{ animationDelay: '1s' }} aria-hidden="true" />
      <div className="absolute top-1/2 -right-8 w-5 h-5 rounded-full bg-primary-300/40 animate-pulse" style={{ animationDelay: '2s' }} aria-hidden="true" />
      <div className="absolute -top-8 left-1/3 w-6 h-6 rounded-full bg-accent-300/30 animate-pulse" style={{ animationDelay: '0.5s' }} aria-hidden="true" />
      <div className="absolute -bottom-3 right-1/4 w-4 h-4 rounded-full bg-primary-400/30 animate-pulse" style={{ animationDelay: '1.5s' }} aria-hidden="true" />

      {/* Browser frame */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-secondary-200/60 bg-white">
        {/* Browser chrome / title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-secondary-800 border-b border-secondary-700">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          {/* URL bar */}
          <div className="flex-1 mx-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary-700/80 text-secondary-300 text-xs font-mono">
              <svg className="w-3 h-3 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="truncate">yourwebsite.com</span>
            </div>
          </div>
          {/* Dots menu */}
          <div className="flex gap-0.5">
            <span className="w-1 h-1 rounded-full bg-secondary-500" />
            <span className="w-1 h-1 rounded-full bg-secondary-500" />
            <span className="w-1 h-1 rounded-full bg-secondary-500" />
          </div>
        </div>

        {/* Website content inside the browser */}
        <div className="bg-white">
          {/* Nav bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-secondary-100">
            <div className="w-16 h-3 rounded-full bg-primary-500/80" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-2 rounded-full bg-secondary-200" />
              <div className="w-10 h-2 rounded-full bg-secondary-200" />
              <div className="w-10 h-2 rounded-full bg-secondary-200" />
              <div className="w-14 h-5 rounded-md bg-primary-500/90" />
            </div>
          </div>

          {/* Hero area with gradient */}
          <div className="relative mx-3 mt-3 rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #0891b2 50%, #2563eb 100%)' }}>
            <div className="px-5 py-6">
              <div className="w-24 h-2.5 rounded-full bg-white/90 mb-2" />
              <div className="w-36 h-2 rounded-full bg-white/60 mb-3" />
              <div className="flex gap-2">
                <div className="w-14 h-4 rounded-md bg-white/90" />
                <div className="w-14 h-4 rounded-md bg-white/30 border border-white/50" />
              </div>
            </div>
            {/* Decorative gradient circles inside hero */}
            <div className="absolute top-1 right-2 w-10 h-10 rounded-full bg-white/10" />
            <div className="absolute bottom-0 right-8 w-6 h-6 rounded-full bg-white/10" />
          </div>

          {/* Content area with sidebar */}
          <div className="flex gap-3 px-3 py-3">
            {/* Main content */}
            <div className="flex-1 space-y-2.5">
              {/* Content block 1 */}
              <div className="p-3 rounded-lg bg-secondary-50 border border-secondary-100">
                <div className="w-20 h-2 rounded-full bg-secondary-300 mb-2" />
                <div className="w-full h-1.5 rounded-full bg-secondary-200 mb-1.5" />
                <div className="w-4/5 h-1.5 rounded-full bg-secondary-200 mb-1.5" />
                <div className="w-3/5 h-1.5 rounded-full bg-secondary-200" />
              </div>
              {/* Content block 2 - cards row */}
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 rounded-lg bg-secondary-50 border border-secondary-100">
                  <div className="w-6 h-6 mx-auto rounded-md bg-primary-100 mb-1.5 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-sm bg-primary-400/60" />
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-secondary-200 mb-1" />
                  <div className="w-4/5 h-1 rounded-full bg-secondary-100 mx-auto" />
                </div>
                <div className="p-2 rounded-lg bg-secondary-50 border border-secondary-100">
                  <div className="w-6 h-6 mx-auto rounded-md bg-accent-100 mb-1.5 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-sm bg-accent-400/60" />
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-secondary-200 mb-1" />
                  <div className="w-4/5 h-1 rounded-full bg-secondary-100 mx-auto" />
                </div>
                <div className="p-2 rounded-lg bg-secondary-50 border border-secondary-100">
                  <div className="w-6 h-6 mx-auto rounded-md bg-green-100 mb-1.5 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-sm bg-green-400/60" />
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-secondary-200 mb-1" />
                  <div className="w-4/5 h-1 rounded-full bg-secondary-100 mx-auto" />
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="hidden sm:block w-24 space-y-2">
              <div className="p-2 rounded-lg bg-secondary-50 border border-secondary-100">
                <div className="w-full h-1.5 rounded-full bg-secondary-200 mb-1.5" />
                <div className="w-4/5 h-1.5 rounded-full bg-secondary-200 mb-1.5" />
                <div className="w-3/5 h-1.5 rounded-full bg-secondary-200" />
              </div>
              <div className="p-2 rounded-lg bg-primary-50 border border-primary-100">
                <div className="w-full h-8 rounded-md bg-primary-100 mb-1.5" />
                <div className="w-full h-1.5 rounded-full bg-primary-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36 hero-gradient overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl -z-10" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-100/20 rounded-full blur-3xl -z-10" aria-hidden="true" />

      {/* Additional depth: overlapping gradient circles */}
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-accent-100/30 rounded-full blur-2xl -z-10" aria-hidden="true" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-primary-50/40 rounded-full blur-2xl -z-10" aria-hidden="true" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern -z-5" aria-hidden="true" />

      {/* Diagonal line pattern for additional texture */}
      <div
        className="absolute inset-0 -z-5 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #1d4ed8 0, #1d4ed8 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side: Text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary-100 text-primary-700 text-sm font-heading font-semibold mb-8 animate-fade-in shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Trusted by {siteConfig.stats.clients} businesses across New Mexico
            </div>

            {/* H1 -- Primary keyword: WordPress agency New Mexico */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground tracking-tight leading-[1.08] mb-6 animate-slide-up">
              The WordPress Agency{' '}
              <span className="gradient-text">New Mexico</span>{' '}
              Businesses Trust
            </h1>

            {/* Subheadline -- conversational, includes secondary KWs */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 animate-slide-up" style={{ animationDelay: '0.15s' }}>
              We build WordPress websites that actually work for your business. Fast load times,
              search engine visibility, rock-solid security. Serving Albuquerque, Santa Fe,
              Las Cruces, and every corner of New Mexico.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button href="/contact" size="lg" className="shine-effect">
                {siteConfig.ctaPrimary}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button href="/pricing" variant="outline" size="lg">
                See Our Pricing
              </Button>
            </div>

            {/* Trust indicators -- E-E-A-T signals */}
            <div className="flex flex-wrap items-start gap-x-6 gap-y-3 mt-12 text-sm text-muted-foreground font-heading animate-fade-in" style={{ animationDelay: '0.5s' }}>
              {[
                { label: `${siteConfig.stats.projects} Projects Delivered` },
                { label: `${siteConfig.stats.satisfaction} Client Satisfaction` },
                { label: `${siteConfig.stats.experience} Years in WordPress` },
                { label: '14-Day Money-Back Guarantee' },
              ].map((item) => (
                <span key={item.label} className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-success/10">
                    <svg className="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right side: Browser mockup */}
          <div className="relative animate-slide-up" style={{ animationDelay: '0.25s' }}>
            {/* Desktop: full size with rotation and float */}
            <div className="hidden lg:block">
              <BrowserMockup className="relative animate-float transform rotate-2 hover:rotate-0 transition-transform duration-500" />
            </div>
            {/* Mobile/Tablet: smaller, centered, no rotation */}
            <div className="block lg:hidden">
              <BrowserMockup className="relative max-w-sm mx-auto" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
