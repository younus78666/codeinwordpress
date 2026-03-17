import { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { siteConfig } from '@/content/site-config'
import { Container } from '@/components/ui/Shared'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { BreadcrumbSchema } from '@/components/seo/JsonLd'

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy',
  description: `Privacy policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
  path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Privacy Policy', href: '/privacy-policy' }]} />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-10">Last updated: March 2026</p>

            <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-secondary-600 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
              <h2>Information We Collect</h2>
              <p>We collect information you provide directly when you fill out our contact form, request a quote, or communicate with us via email or phone. This may include your name, email address, phone number, website URL, and project details.</p>
              <p>We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device type, pages visited, and referring URL. This data is collected through cookies and analytics tools.</p>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to respond to your inquiries, provide quotes and proposals, deliver our WordPress development and SEO services, send project updates, and improve our website and services. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

              <h2>Cookies and Analytics</h2>
              <p>Our website uses cookies and similar technologies to improve your browsing experience and analyze site traffic. We use Google Analytics to understand how visitors interact with our site. You can opt out of analytics tracking by adjusting your browser settings or using browser extensions designed for this purpose.</p>

              <h2>Third-Party Services</h2>
              <p>We may use third-party services to operate our website and business, including hosting providers, email services, analytics platforms, and payment processors. These third parties have access to your information only to perform specific tasks on our behalf and are obligated to protect your data.</p>

              <h2>Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of electronic storage or internet transmission is completely secure, and we cannot guarantee absolute security.</p>

              <h2>Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information at any time. You may also opt out of receiving communications from us. To exercise these rights, please contact us at {siteConfig.email}.</p>

              <h2>Children&apos;s Privacy</h2>
              <p>Our services are not directed at individuals under the age of 13. We do not knowingly collect personal information from children.</p>

              <h2>Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>

              <h2>Contact Us</h2>
              <p>If you have questions about this privacy policy or our data practices, please contact us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or call <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phoneDisplay}</a>.</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
