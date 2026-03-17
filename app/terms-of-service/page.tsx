import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/content/site-config'
import { Container } from '@/components/ui/Shared'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms of Service',
  description: `Terms of service for ${siteConfig.name}. Read our terms regarding WordPress development services, payments, and project delivery.`,
  path: '/terms-of-service',
})

export default function TermsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Terms of Service', href: '/terms-of-service' }]} />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <Breadcrumbs items={[{ name: 'Terms of Service', href: '/terms-of-service' }]} />
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Terms of Service</h1>
            <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

            <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-secondary-600 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
              <h2>Acceptance of Terms</h2>
              <p>By accessing and using {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;the Company&quot;) and our services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.</p>

              <h2>Services</h2>
              <p>We provide WordPress development, website design, speed optimization, SEO services, website maintenance, and related digital services. The specific scope, deliverables, timeline, and pricing for each project are agreed upon in writing before work begins, typically through a proposal or contract.</p>

              <h2>Payment Terms</h2>
              <p>Payment terms are outlined in each project proposal. For projects under $900, full payment is due before work begins. For projects over $900, we require 50% upfront and 50% upon completion before launch. We accept payments via bank transfer, PayPal, and major credit cards through our invoicing system.</p>

              <h2>Money-Back Guarantee</h2>
              <p>All projects include a 14-day money-back guarantee from the date of the initial design presentation. If you are not satisfied with the design direction within this period, you may request a full refund. This guarantee covers the design concept phase only and does not apply after development work has begun beyond the initial design.</p>

              <h2>Project Delivery</h2>
              <p>We strive to deliver all projects within the agreed-upon timeline. Timelines begin after receipt of initial payment and all required content and assets from the client. Delays caused by client unavailability, late content delivery, or scope changes may extend the project timeline.</p>

              <h2>Intellectual Property</h2>
              <p>Upon full payment, all custom code, designs, and content created specifically for your project become your property. We retain the right to showcase the completed work in our portfolio unless otherwise agreed. Third-party plugins, themes, and assets used in your project remain subject to their respective licenses.</p>

              <h2>Post-Launch Support</h2>
              <p>Every project includes 6 months of free post-launch support for bug fixes and minor adjustments. This support covers issues directly related to the work we delivered. Major feature additions, redesigns, or changes not related to the original scope require a separate agreement.</p>

              <h2>Limitation of Liability</h2>
              <p>Our total liability for any claims related to our services shall not exceed the total amount paid by the client for the specific project in question. We are not liable for any indirect, incidental, or consequential damages, including loss of revenue, data, or business opportunities.</p>

              <h2>Termination</h2>
              <p>Either party may terminate a project with written notice. If the client terminates a project after work has begun, payment is due for all work completed up to the date of termination. If we terminate, any unused prepayment will be refunded proportionally.</p>

              <h2>Changes to Terms</h2>
              <p>We reserve the right to update these terms at any time. Changes take effect immediately upon posting to this page. Continued use of our services constitutes acceptance of the revised terms.</p>

              <h2>Contact</h2>
              <p>For questions about these terms, contact us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
