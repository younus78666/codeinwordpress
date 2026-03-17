import { Metadata } from 'next'
import Link from 'next/link'
import { generatePageMetadata } from '@/lib/metadata'
import { locations } from '@/content/locations'
import { siteConfig } from '@/content/site-config'
import { Container, Card } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { CTABanner } from '@/components/sections/Features'
import { GoogleMap } from '@/components/sections/GoogleMap'

export const metadata: Metadata = generatePageMetadata({
  title: 'WordPress Agency Serving All of New Mexico',
  description: 'Professional WordPress development and SEO services in Albuquerque, Santa Fe, Las Cruces, Rio Rancho, Roswell, Farmington, and Los Alamos. Serving all 7 major NM cities.',
  path: '/locations',
})

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Locations', href: '/locations' }]} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[{ name: 'Locations', href: '/locations' }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground tracking-tight mb-6">
              Serving Businesses Across{' '}
              <span className="text-primary-600">New Mexico</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              From Albuquerque to Farmington, we build fast, SEO-optimized WordPress websites for businesses in every corner of the Land of Enchantment. Local expertise, professional results.
            </p>
            <Button href="/contact" size="lg">{siteConfig.ctaPrimary}</Button>
          </div>
        </Container>
      </section>

      {/* Cities Grid */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {locations.map((location, i) => (
              <AnimateOnScroll key={location.slug} delay={i * 80}>
                <Link href={`/locations/${location.slug}`} className="block h-full group">
                  <Card className="h-full flex flex-col" padding="lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider">
                          {location.state}
                        </span>
                      </div>
                      <span className="text-xs font-heading text-muted-foreground">
                        Pop. {location.population}
                      </span>
                    </div>
                    <h2 className="text-xl font-heading font-bold text-foreground group-hover:text-primary-600 transition-colors mb-2">
                      {location.city}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 flex-1">
                      {location.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {location.neighborhoods.slice(0, 3).map((n) => (
                        <span key={n} className="px-2 py-0.5 rounded-md bg-muted text-xs font-heading text-muted-foreground">
                          {n}
                        </span>
                      ))}
                      {location.neighborhoods.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-muted text-xs font-heading text-muted-foreground">
                          +{location.neighborhoods.length - 3} more
                        </span>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-sm font-heading font-semibold text-primary-600 group-hover:gap-2.5 transition-all">
                      View {location.city} page
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Card>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* Map overview - using GoogleMap component (no hardcoded API key) */}
      <section className="py-16 md:py-24 bg-muted">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Statewide Coverage
            </h2>
            <p className="text-lg text-muted-foreground">
              While we serve clients nationwide, we specialize in New Mexico businesses. Every city page is optimized for local SEO to help you rank in your specific market.
            </p>
          </div>
          <GoogleMap lat={34.5199} lng={-105.8701} zoom={6} title="Code In WordPress - New Mexico Service Area" className="h-[350px] md:h-[450px]" />
        </Container>
      </section>

      <CTABanner
        heading="Don't See Your City?"
        subheading="We serve all of New Mexico and beyond. Contact us for a free quote regardless of your location."
      />
    </>
  )
}
