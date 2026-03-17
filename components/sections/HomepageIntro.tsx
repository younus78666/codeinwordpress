import Link from 'next/link'
import { siteConfig } from '@/content/site-config'
import { SectionWrapper } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

export function HomepageIntro() {
  return (
    <SectionWrapper
      heading="A WordPress Agency Built for New Mexico Businesses"
      subheading="We are not a generic web design shop. We are WordPress specialists who understand what local businesses need to compete online."
    >
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-p:text-secondary-600 prose-p:leading-relaxed prose-a:text-primary-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline">
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
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>
  )
}
