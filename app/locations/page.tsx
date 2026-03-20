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
import { StyledProseSection } from '@/components/ui/ContentRenderer'

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

      {/* Locations Introduction */}
      <StyledProseSection background="white" showImage imageIndex={2}>
        <h2>Why Local WordPress Expertise Matters</h2>

        <p>
          When a business in Albuquerque hires a WordPress agency from New York
          or Los Angeles, they get a team that has never set foot in New Mexico,
          does not understand the local market dynamics, and treats every city in
          America the same way. We have spent over 8 years building WordPress
          websites exclusively for New Mexico businesses, and that local focus
          gives us advantages that remote agencies cannot replicate. We understand
          the seasonal patterns that affect tourism businesses in Santa Fe. We
          know which neighborhoods in Las Cruces are growing and where the
          commercial development is heading. We understand the government and
          laboratory economy in Los Alamos and how it shapes the service
          businesses that support it.
        </p>

        <p>
          Local expertise also matters for SEO. Google's local search algorithm
          rewards websites that demonstrate genuine relevance to a geographic
          area. That means more than just mentioning a city name on your homepage.
          It means building location-specific content, earning local backlinks,
          managing your Google Business Profile correctly, and ensuring your NAP
          (Name, Address, Phone) information is consistent across every directory
          and citation source. We have done this work for over 400 businesses
          across every major New Mexico city, and we know exactly what it takes
          to rank in each local market.
        </p>

        <h2>The New Mexico Business Landscape</h2>

        <p>
          New Mexico's economy is diverse and distinct from any other state. In{' '}
          <Link href="/locations/albuquerque">Albuquerque</Link>, the largest city
          and economic hub, we serve businesses across healthcare, technology,
          hospitality, legal services, home services, and retail. The Albuquerque
          metro area, including <Link href="/locations/rio-rancho">Rio Rancho</Link>,
          represents the state's largest consumer market and the most competitive
          digital landscape. Businesses here need WordPress sites that can compete
          against well-funded competitors with sophisticated online presences.
        </p>

        <p>
          <Link href="/locations/santa-fe">Santa Fe</Link> presents a completely
          different challenge. The state capital's economy is driven by art,
          tourism, government, and high-end hospitality. Websites for Santa Fe
          businesses need to convey premium quality while performing flawlessly
          on mobile devices, since many visitors are tourists researching
          restaurants, galleries, and hotels on their phones.{' '}
          <Link href="/locations/las-cruces">Las Cruces</Link>, anchored by New
          Mexico State University, has a growing technology sector alongside
          traditional agriculture and healthcare industries.{' '}
          <Link href="/locations/farmington">Farmington</Link> and the Four
          Corners region serve the energy sector and outdoor recreation tourism.
          Each market demands a tailored approach to WordPress development and
          digital strategy.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-1">
        <h2>How We Tailor Our Approach for Each City</h2>

        <p>
          We do not use a one-size-fits-all strategy for local SEO and WordPress
          development. A dentist in Rio Rancho faces different competitive
          dynamics than a dentist in Santa Fe. The search volume, the competitor
          landscape, the customer demographics, and the conversion triggers are
          all different. We research each local market individually before we
          write a line of code or a word of content. This includes analyzing
          the top-ranking competitors in your city, identifying the specific
          search terms your potential customers are using, and understanding the
          local factors that influence buying decisions.
        </p>

        <p>
          For each city we serve, we have developed detailed market profiles that
          inform our development and SEO strategy. We know that Albuquerque
          businesses benefit from neighborhood-level targeting because the metro
          area is large enough to support hyper-local search strategies. We know
          that Santa Fe businesses often compete nationally for tourism-related
          keywords while simultaneously targeting local residents for everyday
          services. We know that Las Cruces businesses need to account for
          cross-border traffic from El Paso. These insights come from years of
          hands-on experience serving businesses in each market, not from reading
          a census report.
        </p>

        <h2>Local SEO Advantages of Working with a New Mexico Agency</h2>

        <p>
          Working with a WordPress agency that is based in New Mexico provides
          tangible SEO advantages. We can create genuinely local content because
          we know these communities firsthand. When we write location pages for
          our clients, we reference real landmarks, real neighborhoods, and real
          local events because we have actually been to these places. Google's
          algorithms are increasingly sophisticated at detecting generic,
          templated location content versus authentic, locally informed content.
          Our pages rank because they are genuine, not because they are stuffed
          with keywords.
        </p>

        <p>
          We also maintain relationships with local business organizations,
          chambers of commerce, and media outlets across New Mexico. These
          relationships support our link-building efforts for clients who need
          to establish local authority. A backlink from the Albuquerque Journal
          or a mention in the Santa Fe Reporter carries more local SEO weight
          than a link from a generic national directory. Our established presence
          in the New Mexico business community gives our clients access to
          link-building and PR opportunities that out-of-state agencies simply
          cannot provide.
        </p>
      </StyledProseSection>

      <StyledProseSection background="muted">
        <h2>Our Service Area Coverage</h2>

        <p>
          We provide WordPress development, SEO, speed optimization, security,
          maintenance, and WooCommerce services to businesses in every corner of
          New Mexico. Our primary service areas include{' '}
          <Link href="/locations/albuquerque">Albuquerque</Link>,{' '}
          <Link href="/locations/santa-fe">Santa Fe</Link>,{' '}
          <Link href="/locations/las-cruces">Las Cruces</Link>,{' '}
          <Link href="/locations/rio-rancho">Rio Rancho</Link>,{' '}
          <Link href="/locations/roswell">Roswell</Link>,{' '}
          <Link href="/locations/farmington">Farmington</Link>, and{' '}
          <Link href="/locations/los-alamos">Los Alamos</Link>. However, we
          serve businesses throughout the state, including smaller communities
          like Taos, Silver City, Carlsbad, Hobbs, Clovis, and Alamogordo. If
          your business is in New Mexico, we can help you regardless of where
          you are located.
        </p>

        <p>
          Each city page below provides detailed information about our services
          in that specific market, including the industries we commonly serve,
          the local competitive landscape, and the results we have achieved for
          businesses in that area. We encourage you to visit the page for your
          city to learn how our WordPress expertise translates to real business
          growth in your specific market.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-2">
        <h2>Remote-First Approach with Local Market Knowledge</h2>

        <p>
          Our workflow is built for efficient remote collaboration. We use
          video calls for discovery sessions and project reviews. We share
          working prototypes through staging environments so you can see and
          interact with your site throughout development. We communicate
          through structured project management tools that keep every
          conversation, decision, and file organized in one place. This
          remote-first approach means we can serve businesses anywhere in
          New Mexico without geographic limitations, while our deep local
          knowledge ensures that your website is built with your specific
          market in mind.
        </p>

        <p>
          The combination of remote efficiency and local expertise is what
          makes our approach unique. You get the convenience and cost savings
          of a digital-first workflow with the strategic advantage of an agency
          that truly understands New Mexico. We have delivered 400+ projects
          with a 99% satisfaction rate using this model, and we have proven
          that you do not need to sit in the same room as your web developer
          to get outstanding results. What you need is a team that understands
          your market, respects your time, and delivers measurable outcomes.
          Explore our city pages below to see how we can help your business
          grow in your specific New Mexico market.
        </p>
      </StyledProseSection>

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
