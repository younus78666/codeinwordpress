import Link from 'next/link'
import { siteConfig } from '@/content/site-config'
import { Container } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { StyledProseSection } from '@/components/ui/ContentRenderer'

export function HomepageIntro() {
  return (
    <>
      {/* Section heading */}
      <section className="pt-14 md:pt-20 pb-0 bg-white">
        <Container>
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight mb-4">
                A WordPress Agency Built for New Mexico Businesses
              </h2>
              <p className="text-lg text-muted-foreground">
                We are not a generic web design shop. We are WordPress specialists who understand what local businesses need to compete online.
              </p>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      <StyledProseSection background="white" showImage imageIndex={3}>
        <p>
          Code In WordPress started with a simple idea: New Mexico businesses
          deserve better websites. Not template-based throwaway sites that look
          like everything else on the internet, but professionally built WordPress
          websites with clean code, fast load times, and real search engine visibility.
          Over the past {siteConfig.stats.experience} years, we have completed{' '}
          {siteConfig.stats.projects} WordPress projects for businesses across{' '}
          <Link href="/locations/albuquerque">Albuquerque</Link>,{' '}
          <Link href="/locations/santa-fe">Santa Fe</Link>,{' '}
          <Link href="/locations/las-cruces">Las Cruces</Link>, and every corner of the state.
        </p>

        <p>
          What does a WordPress agency actually do? We handle the technical work that
          most business owners do not have time to learn. That means building your site
          from a blank canvas using WordPress, the platform that powers over 43% of
          all websites on the internet. We configure your hosting environment, write
          custom code when needed, set up Elementor or Advanced Custom Fields for
          easy editing, and make sure the whole thing loads in under two seconds.
        </p>

        <p>
          But building a website is only half the job. A site that nobody can find
          on Google is just an expensive business card. That is why every project
          we deliver includes{' '}
          <Link href="/services/wordpress-seo">technical SEO</Link> from the start.
          Schema markup, meta tag optimization, XML sitemaps, internal linking
          architecture, and Core Web Vitals tuning. We do not treat search engine
          optimization as an add-on. It is woven into every decision we make, from
          your URL structure to your heading hierarchy.
        </p>

        <p>
          Whether you are a law firm in Santa Fe that needs more qualified leads, a
          restaurant in Albuquerque launching online ordering, or a contractor in
          Las Cruces who wants to rank for local search terms, our approach stays
          the same: understand your business first, then build a WordPress website
          that actually generates results. Not just traffic, but phone calls,
          form submissions, and revenue. That is the difference between a WordPress
          agency that writes code and one that understands business.
        </p>

        <h2>What Makes Us Different from Template Agencies</h2>

        <p>
          We have seen the damage that template-based web design shops do to
          businesses in New Mexico. A company in Rio Rancho pays two thousand
          dollars for a site built on a premade theme, gets a generic layout
          with stock photos, and six months later wonders why nobody is finding
          them on Google. The problem is not WordPress itself. The problem is that
          most agencies treat every project like a paint-by-numbers exercise. They
          swap in your logo, change the colors, and call it done. We refuse to
          work that way.
        </p>

        <p>
          Our team builds every WordPress website from a blank starter theme. That
          means no bloated code from a multipurpose theme that tries to do
          everything and does nothing well. No unnecessary JavaScript libraries
          loading on every page. No CSS files packed with styles you will never
          use. When we write code, it serves a purpose. When we add a plugin, it
          solves a specific problem. This disciplined approach is why our sites
          consistently score 90 or higher on Google PageSpeed Insights while most
          template-based sites struggle to break 50.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-1">
        <h2>Our Technical Approach to WordPress Development</h2>

        <p>
          We are not just designers who happen to use WordPress. Our team includes
          developers who understand PHP, JavaScript, MySQL, and the WordPress REST
          API at a code level. When a client needs custom functionality, such as a
          reservation system for a restaurant in Albuquerque or a property listing
          portal for a real estate agency in Santa Fe, we build it properly. We
          write custom plugins when off-the-shelf solutions would slow down the
          site or introduce security vulnerabilities.
        </p>

        <p>
          Our development stack includes Advanced Custom Fields Pro for flexible
          content management, custom Gutenberg blocks for intuitive editing, and
          server-level caching configurations that make sites load in under two
          seconds on mobile connections. We deploy on optimized hosting environments
          with PHP 8.2, Redis object caching, and CDN integration. Every technical
          decision is made with performance, security, and long-term
          maintainability in mind.
        </p>

        <h2>Speed, SEO, and Security for New Mexico Businesses</h2>

        <p>
          For local businesses in New Mexico, website performance is not a luxury.
          It is a competitive necessity. When someone in Las Cruces searches for a
          plumber and your competitor's site loads in 1.5 seconds while yours takes
          6 seconds, Google knows which site to rank higher. We have helped
          businesses cut their load times by 60 to 80 percent through our{' '}
          <Link href="/services/wordpress-speed-optimization">speed optimization</Link>{' '}
          service, and the impact on rankings is immediate and measurable.
        </p>

        <p>
          Security is another area where we see businesses get burned by cheap
          development. A hacked WordPress site does not just go offline. It gets
          blacklisted by Google, loses months of SEO progress, and damages your
          reputation with customers. Our{' '}
          <Link href="/services/wordpress-security">security hardening</Link>{' '}
          process includes Web Application Firewalls, two-factor authentication,
          file integrity monitoring, automated malware scanning, and regular
          security audits. In {siteConfig.stats.experience} years of managing
          WordPress sites, we have maintained a perfect security record for
          clients on our maintenance plans.
        </p>

        <h2>Industries We Serve Across New Mexico</h2>

        <p>
          Our {siteConfig.stats.projects} completed projects span nearly every
          industry you will find in the Land of Enchantment. We have built
          appointment booking systems for medical practices in Albuquerque,
          portfolio sites for artists and galleries along Canyon Road in Santa Fe,
          lead generation websites for HVAC and plumbing companies in Rio Rancho,
          and e-commerce stores for retailers in Las Cruces. We have worked with
          law firms, dental offices, restaurants, nonprofits, construction
          companies, tourism operators, and technology startups.
        </p>

        <p>
          Each industry has its own requirements. A restaurant needs online
          ordering integration, menu management, and reservation functionality.
          A law firm needs attorney profile pages, practice area content
          architecture, and lead capture forms that comply with bar advertising
          rules. A contractor needs before-and-after project galleries, service
          area pages, and a review management system. We bring this industry-specific
          knowledge to every project because we have done it before, often multiple
          times.
        </p>
      </StyledProseSection>

      <StyledProseSection background="muted">
        <h2>Our Track Record and Results</h2>

        <p>
          Numbers tell the story better than promises. Over {siteConfig.stats.experience}{' '}
          years, we have delivered {siteConfig.stats.projects} projects with a{' '}
          {siteConfig.stats.satisfaction} client satisfaction rate. Our average
          client sees a 45 percent increase in organic traffic within 90 days of
          launching their new WordPress site. We have helped businesses triple
          their monthly lead volume, cut their bounce rates in half, and achieve
          first-page Google rankings for competitive local search terms. One
          Albuquerque home services company went from zero organic leads to over
          50 qualified inquiries per month within four months of launching the
          site we built for them.
        </p>

        <h2>Why WordPress Is the Right Platform for Your Business</h2>

        <p>
          Some agencies push proprietary platforms or website builders because it
          locks clients in and guarantees recurring revenue. We chose WordPress
          because it is the best platform for businesses that want to own their
          website, control their content, and scale without limitations. WordPress
          powers 43 percent of the entire internet, from small business sites to
          enterprise platforms for companies like Disney, Sony, and The New York
          Times. It is open source, endlessly customizable, and supported by the
          largest developer community in the world.
        </p>

        <p>
          With WordPress, you are never locked into a single vendor. If you ever
          decide to move to a different agency or bring development in-house, you
          take your entire website with you. Your content, your design, your
          functionality. That kind of ownership matters, and it is something you
          will never get with Wix, Squarespace, or proprietary agency platforms.
          We believe in building assets for our clients, not dependencies.
        </p>

        <h2>How We Approach Each Project Differently</h2>

        <p>
          Every business that contacts us gets a discovery process before we write
          a single line of code. We learn about your customers, your competitors,
          your revenue goals, and the specific problems your current website is
          causing. A tourism company in Farmington has completely different needs
          than a medical clinic in Los Alamos. A WooCommerce store selling
          handmade jewelry has different requirements than a multi-location
          dental practice. We refuse to apply the same template to every project
          because cookie-cutter solutions produce cookie-cutter results.
        </p>

        <p>
          Our process moves through discovery, strategy, design, development,
          testing, and launch, with client input at every stage. We do not
          disappear for six weeks and come back with a finished product. You see
          progress weekly, provide feedback on working prototypes, and approve
          every major decision before we move forward. This collaborative approach
          is why {siteConfig.stats.satisfaction} of our clients say they would
          recommend us and why the majority of our new business comes from referrals
          from past clients who saw real results from the websites we built for them.
        </p>
      </StyledProseSection>
    </>
  )
}
