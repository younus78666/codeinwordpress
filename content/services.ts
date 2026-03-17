export type Service = {
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: string
  features: string[]
  price?: string
}

export const services: Service[] = [
  {
    slug: 'wordpress-development',
    title: 'Custom WordPress Development',
    shortTitle: 'WordPress Dev',
    description: 'Pixel-perfect WordPress websites built with clean code, fast load times, and conversion-focused design. From starter sites to complex multi-page builds.',
    icon: '⚡',
    features: [
      'Custom theme development from scratch',
      'Elementor and ACF-powered layouts',
      'WooCommerce integration ready',
      'Mobile-first responsive design',
      'WCAG accessibility compliance',
      'Performance-optimized from day one',
    ],
    price: 'From $500',
  },
  {
    slug: 'speed-optimization',
    title: 'WordPress Speed Optimization',
    shortTitle: 'Speed Optimization',
    description: 'Slow sites lose visitors and rankings. We diagnose bottlenecks, optimize assets, configure caching, and deliver measurable speed improvements.',
    icon: '🚀',
    features: [
      'Core Web Vitals optimization',
      'Image compression and lazy loading',
      'Database and query optimization',
      'CDN configuration and caching',
      'Plugin audit and cleanup',
      'Before/after speed reports',
    ],
    price: 'From $500',
  },
  {
    slug: 'wordpress-seo',
    title: 'WordPress SEO Services',
    shortTitle: 'WordPress SEO',
    description: 'Technical SEO audits, on-page optimization, schema markup, and content strategies that get your WordPress site ranking on Google.',
    icon: '📈',
    features: [
      'Comprehensive technical SEO audit',
      'On-page optimization for every page',
      'Schema markup (JSON-LD) implementation',
      'Internal linking architecture',
      'Google Search Console setup',
      'Monthly ranking reports',
    ],
    price: 'From $500',
  },
  {
    slug: 'website-maintenance',
    title: 'WordPress Maintenance Plans',
    shortTitle: 'Maintenance',
    description: 'Keep your WordPress site secure, updated, and running smoothly with proactive maintenance. Backups, updates, monitoring, and priority support.',
    icon: '🛡️',
    features: [
      'Weekly core and plugin updates',
      'Daily automated backups',
      'Uptime and security monitoring',
      'Monthly performance reports',
      'Priority email and chat support',
      'Emergency fix response within 4 hours',
    ],
    price: 'From $99/mo',
  },
  {
    slug: 'security-hardening',
    title: 'WordPress Security Hardening',
    shortTitle: 'Security',
    description: 'Protect your website from hackers, malware, and vulnerabilities. We lock down your WordPress installation and clean infected sites.',
    icon: '🔒',
    features: [
      'Malware scanning and removal',
      'Firewall configuration',
      'Login security and 2FA setup',
      'File permission hardening',
      'SSL certificate installation',
      'Security audit and report',
    ],
    price: 'From $500',
  },
  {
    slug: 'woocommerce-development',
    title: 'WooCommerce Development',
    shortTitle: 'WooCommerce',
    description: 'Launch or upgrade your online store with WooCommerce. Custom product pages, payment gateways, shipping setup, and conversion optimization.',
    icon: '🛒',
    features: [
      'Custom WooCommerce store setup',
      'Payment gateway integration',
      'Product page optimization',
      'Shipping and tax configuration',
      'Inventory management setup',
      'Checkout flow optimization',
    ],
    price: 'From $1,500',
  },
  {
    slug: 'website-redesign',
    title: 'WordPress Website Redesign',
    shortTitle: 'Redesign',
    description: 'Outdated website holding you back? We redesign your WordPress site with modern aesthetics, better UX, and improved conversions.',
    icon: '🎨',
    features: [
      'Full visual redesign and rebrand',
      'Content migration and restructuring',
      'SEO-safe URL redirects',
      'Conversion rate optimization',
      'Mobile experience overhaul',
      'Analytics and tracking setup',
    ],
    price: 'From $900',
  },
]
