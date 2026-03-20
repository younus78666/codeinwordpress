import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { Container, SectionWrapper } from '@/components/ui/Shared'
import { StyledProseSection } from '@/components/ui/ContentRenderer'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'
import { PricingTable } from '@/components/sections/PricingTable'
import { FAQSection } from '@/components/sections/FAQ'
import { CTABanner } from '@/components/sections/Features'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { faqs } from '@/content/faqs'

export const metadata: Metadata = generatePageMetadata({
  title: 'WordPress Website Pricing | Plans Starting at $500',
  description: 'WordPress website pricing starting at $500. Transparent packages for starter sites, professional builds, and enterprise solutions. 14-day money-back guarantee included.',
  path: '/pricing',
})

const guarantees = [
  { iconPath: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z', title: '14-Day Money-Back Guarantee', text: 'Not satisfied with the initial design direction? Full refund within the first 14 days, no questions asked.' },
  { iconPath: 'M11.42 15.17l-5.384-3.19A.75.75 0 005.25 12.72v6.57a.75.75 0 00.786.72l5.384-.32a.75.75 0 00.684-.663v-3.78a.75.75 0 00-.684-.077z', title: '6 Months Free Support', text: 'Every project includes six months of post-launch support for bug fixes, minor updates, and guidance.' },
  { iconPath: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z', title: 'Free Consultation', text: 'Book a call to discuss your project. We will provide a detailed scope, timeline, and quote before you commit.' },
]

export default function PricingPage() {
  const pricingFaqs = faqs.filter(f => f.category === 'pricing')

  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Pricing', href: '/pricing' }]} />

      <section className="pt-32 pb-4 md:pt-40 md:pb-4 hero-gradient grid-pattern">
        <Container>
          <Breadcrumbs items={[{ name: 'Pricing', href: '/pricing' }]} />
        </Container>
      </section>

      <PricingTable />

      {/* Detailed Pricing Guide — Long-form UC 6.2 content */}
      <StyledProseSection background="white">
        <h2>Understanding WordPress Website Costs</h2>
        <p className="text-lg font-medium text-secondary-500 !mt-0">A transparent, experience-driven breakdown of what you are paying for and why it matters.</p>
        <h2>What Is Actually Included in Each Pricing Tier</h2>
        <p>
          We have structured our pricing to be as transparent as possible because, frankly, most agencies are not. In eight-plus years of building WordPress websites, we have heard too many horror stories from business owners who paid for a &quot;complete website package&quot; only to discover that hosting, SSL certificates, SEO setup, and mobile optimization were all billed as extras. Our packages include everything you need to launch a professional, high-performing website. No hidden line items, no surprise invoices after the fact.
        </p>
        <p>
          Our Starter tier at five hundred dollars is designed for small businesses and solopreneurs who need a clean, fast, professional web presence without unnecessary complexity. This includes up to five custom-designed pages, mobile-responsive design, basic on-page SEO setup with proper meta tags and heading structure, contact form integration, Google Analytics and Search Console configuration, SSL certificate setup, speed optimization to achieve sub-three-second load times, and six months of post-launch support. We have built Starter sites for everything from a yoga studio in Santa Fe to a mobile notary service in Las Cruces, and the results consistently exceed what these businesses had before, even when they had previously paid two or three times as much to other providers.
        </p>
        <p>
          The Professional tier at fifteen hundred dollars is our most popular package and is built for established businesses that need more functionality and a stronger SEO foundation. Everything in the Starter tier is included, plus up to fifteen pages, advanced SEO with schema markup and local business structured data, WooCommerce setup for up to fifty products if needed, custom contact forms with conditional logic, blog setup with category architecture, Google Business Profile optimization, and a comprehensive sixty-point pre-launch audit. This is the tier we recommend for most service-based businesses in New Mexico. A plumbing company in Albuquerque that chose this package saw their Google Maps visibility increase by over two hundred percent within four months of launch.
        </p>
        <p>
          The Enterprise tier at three thousand five hundred dollars and up is for businesses with complex requirements: large e-commerce catalogs, membership systems, multi-location setups, custom integrations with CRMs or booking systems, or high-traffic sites that demand advanced caching and CDN configurations. Every Enterprise project starts with a detailed technical discovery phase where we map out your exact requirements, identify potential challenges, and build a custom scope document. A tourism company in Taos came to us needing a site with real-time availability booking, multi-language support, and integration with three different property management systems. That project required the Enterprise tier, and the resulting site now processes over two hundred bookings per month with zero downtime.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-1" showImage={true} imageIndex={0} imagePosition="right">
        <h2>How We Determine Pricing for Custom Projects</h2>
        <p>
          Not every project fits neatly into a predefined package, and we are completely comfortable with that. When a project requires custom functionality, our pricing is based on four key factors: the number and complexity of pages, the level of custom development required such as custom plugins or theme modifications, the integrations needed with third-party systems, and the content migration workload if you have an existing site.
        </p>
        <p>
          We provide detailed, itemized quotes so you can see exactly where every dollar goes. If your budget is limited, we will tell you honestly what can be achieved within that budget and what should be phased into a future update. We would rather build you an excellent five-page site now and expand it later than deliver a mediocre fifteen-page site that does not perform well from the start.
        </p>
      </StyledProseSection>

      <StyledProseSection background="muted">
        <h2>What Affects WordPress Website Cost</h2>
        <p>
          Understanding what drives cost helps you make informed decisions about your project. The primary cost factors we see across hundreds of projects include design complexity, where custom illustrations and animations cost more than clean typography-focused layouts. Content volume matters because a fifty-page site with unique content on every page requires significantly more development time than a ten-page site. E-commerce functionality adds cost because product catalogs, payment gateway integration, shipping calculators, and inventory management all require careful setup and testing. Custom integrations with tools like Salesforce, HubSpot, QuickBooks, or industry-specific software require development time for API connections and data mapping. Finally, content creation costs vary depending on whether you provide your own copy and images or need us to handle photography, copywriting, and graphic design.
        </p>
        <p>
          We always recommend investing in quality copywriting and professional photography. We have seen firsthand how a well-built site with mediocre content underperforms compared to a simpler site with compelling, authentic content. A restaurant in Albuquerque&#39;s Old Town invested in professional food photography alongside their website rebuild, and their online reservation requests tripled within two months.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-2">
        <h2>Our Pricing Versus Industry Averages</h2>
        <p>
          Let us be direct about where we stand in the market. The average cost of a professionally built WordPress website in the United States ranges from three thousand to fifteen thousand dollars for a standard business site, according to industry surveys from Clutch and GoodFirms. Agencies in major metro areas like Denver, Phoenix, or Austin routinely charge five thousand to ten thousand dollars for sites comparable to our Professional tier.
        </p>
        <p>
          Our pricing is deliberately lower than national averages, but not because we cut corners. We operate as a lean, remote-first team without the overhead of a downtown office, a large sales team, or layers of middle management. Those savings get passed directly to our clients. You are getting the same caliber of development work that a major-market agency delivers, at a price point that makes sense for New Mexico businesses. We have completed over four hundred projects at this price range and maintained a ninety-nine percent satisfaction rate. The value speaks for itself.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-3" showImage={true} imageIndex={3} imagePosition="left">
        <h2>The ROI of Investing in a Professional WordPress Site</h2>
        <p>
          We understand that spending money on a website can feel like a leap of faith, especially for small businesses watching every dollar. So let us talk about return on investment in concrete terms. A well-built WordPress site is not an expense. It is a revenue-generating asset that works for your business twenty-four hours a day, seven days a week.
        </p>
        <p>
          Consider a real example: a home services company in Rio Rancho was spending eight hundred dollars per month on Google Ads with mediocre results because their website had a seventy-eight percent bounce rate and took over six seconds to load on mobile. After investing in a Professional tier rebuild with us, their bounce rate dropped to thirty-two percent, their organic traffic increased by fifty-five percent, and they were able to cut their ad spend in half while generating more leads than before. The site paid for itself in under three months.
        </p>
        <p>
          For e-commerce businesses, the math is even more straightforward. If your current site converts at one percent and we can improve that to two and a half percent through better design, faster load times, and an optimized checkout flow, you have effectively increased your revenue by one hundred fifty percent without spending an additional dollar on advertising. We have achieved exactly this kind of improvement for multiple WooCommerce clients.
        </p>
      </StyledProseSection>

      <StyledProseSection background="white">
        <h2>Hidden Costs to Watch Out for with Other Providers</h2>
        <p>
          In our experience, the most common hidden costs that other agencies spring on clients include premium theme and plugin licenses that require annual renewal fees the client was never told about, hosting that is bundled at an inflated rate with the agency taking a markup, content updates and minor changes billed at seventy-five to one hundred fifty dollars per hour after launch, SSL certificate renewal fees even though SSL certificates are free from most hosting providers, and SEO that was &quot;included&quot; but turns out to be nothing more than installing the Yoast plugin without actually configuring it.
        </p>
        <p>
          We eliminate all of these issues. We use theme and plugin solutions that do not create licensing traps. We recommend hosting providers directly and do not take a cut. Our six months of free post-launch support covers minor updates and changes. We set up free SSL certificates and make sure they auto-renew. And our SEO setup involves actual technical optimization, not just installing a plugin and calling it done.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-1">
        <h2>Our Payment Process and Terms</h2>
        <p>
          We keep our payment process simple and fair. For standard projects, we require a fifty percent deposit to begin work, with the remaining fifty percent due upon completion and your approval before launch. For Enterprise projects, we typically break payments into three milestones: one-third at project kickoff, one-third at design approval, and one-third at launch.
        </p>
        <p>
          We accept payment via bank transfer, credit card, and PayPal. We issue professional invoices with clear line items and payment terms. There are no contracts with hidden auto-renewal clauses. If you are not happy with the initial design direction within the first fourteen days, we offer a full money-back guarantee, no questions asked.
        </p>
      </StyledProseSection>

      <StyledProseSection background="muted" showImage={true} imageIndex={5} imagePosition="right">
        <h2>Why We Include Six Months of Free Support</h2>
        <p>
          This is one of the things our clients appreciate most, and it is something many agencies simply do not offer. We include six months of post-launch support with every project because we know from experience that the first few months after launch are when most issues surface. Maybe you need to update some content. Maybe a plugin needs a compatibility patch after a WordPress update. Maybe you want to add a new team member&#39;s bio to the About page. These small tasks should not cost you extra when you just paid for a brand-new website.
        </p>
        <p>
          Our free support covers bug fixes, minor content updates, plugin updates, security patches, and general guidance on using your site. It does not cover major new features or significant redesigns, but it covers everything a typical business owner needs during those critical first months. After the six-month period, you can transition to one of our maintenance plans or handle updates independently with the training and documentation we provide at launch.
        </p>
      </StyledProseSection>

      <StyledProseSection background="gradient-2">
        <h2>Why Ongoing Maintenance Matters</h2>
        <p>
          A WordPress site is not a set-it-and-forget-it asset. WordPress core, themes, and plugins release updates regularly, and skipping those updates creates security vulnerabilities and compatibility issues. We have been called in to rescue sites that went a full year without updates and had been quietly compromised by malware for months without the owner knowing.
        </p>
        <p>
          Our maintenance plans start at ninety-nine dollars per month and include weekly WordPress core, theme, and plugin updates, daily automated backups with off-site storage, uptime monitoring with instant alerts, monthly performance and security reports, and up to two hours of content updates or minor changes per month. For businesses that depend on their website for lead generation or e-commerce revenue, ongoing maintenance is not optional. It is the cost of protecting your investment and ensuring your site continues to perform at the level it was built to achieve.
        </p>
      </StyledProseSection>

      {/* Guarantees */}
      <SectionWrapper background="alt" heading="Our Guarantees" subheading="Every project comes with built-in protection for your investment.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {guarantees.map((g, i) => (
            <AnimateOnScroll key={g.title} delay={i * 100}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-4 text-primary-600 mx-auto">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={g.iconPath} />
                  </svg>
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.text}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </SectionWrapper>

      <FAQSection faqs={pricingFaqs} heading="Pricing Questions" subheading="Common questions about our packages and payment options." />

      <CTABanner
        heading="Ready to Get Started?"
        subheading="Book a free consultation and get a custom quote for your project."
        primaryText="Get a Free Quote"
        primaryHref="/contact"
      />
    </>
  )
}
