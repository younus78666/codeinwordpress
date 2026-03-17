export type PricingTier = {
  name: string
  price: string
  period?: string
  description: string
  features: string[]
  highlighted: boolean
  cta: string
  pageCount: string
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$500',
    description: 'Perfect for small businesses, freelancers, and startups that need a professional online presence.',
    pageCount: 'Up to 10 pages',
    features: [
      'Up to 10 pages',
      'Custom WordPress theme',
      'Responsive mobile design',
      'Contact form setup',
      'Basic SEO setup (meta tags, sitemap)',
      'Speed optimization',
      'SSL certificate installation',
      '6 months free support',
      '14-day money-back guarantee',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$900',
    description: 'For growing businesses that need more pages, advanced features, and stronger SEO foundations.',
    pageCount: 'Up to 20 pages',
    features: [
      'Up to 20 pages',
      'Everything in Starter, plus:',
      'Advanced SEO (schema markup, OG tags)',
      'Blog setup with categories',
      'Google Analytics and Search Console',
      'Social media integration',
      'Newsletter signup form',
      'Image gallery or portfolio section',
      'Priority email support',
      '6 months free support',
      '14-day money-back guarantee',
    ],
    highlighted: true,
    cta: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: '$1,500',
    description: 'For established businesses, e-commerce stores, and complex projects requiring custom solutions.',
    pageCount: '20+ pages or e-commerce',
    features: [
      '20+ pages or WooCommerce store',
      'Everything in Professional, plus:',
      'WooCommerce or custom functionality',
      'Multi-location pages',
      'Advanced schema (LocalBusiness, Product)',
      'Custom post types and taxonomies',
      'Third-party API integrations',
      'Performance audit and optimization',
      'Security hardening package',
      'Dedicated project manager',
      '6 months free support',
      '14-day money-back guarantee',
    ],
    highlighted: false,
    cta: 'Contact Us',
  },
]
