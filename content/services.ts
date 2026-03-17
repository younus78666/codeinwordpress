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
    title: 'Custom WordPress Development in New Mexico',
    shortTitle: 'WordPress Development',
    description: 'We build WordPress websites from scratch with clean code, not cookie-cutter templates. Every site is custom-designed for your brand, optimized for speed, and built to convert visitors into customers.',
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
    description: 'A slow website costs you money every single day. We dig into your WordPress setup, find every bottleneck, and fix them. Most clients see their Lighthouse score jump 40 to 60 points within a week.',
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
    description: 'Getting traffic from Google is not magic, it is technical precision. We handle the schema markup, meta optimization, internal linking, and content structure that search engines actually care about.',
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
    description: 'WordPress is not a set-it-and-forget-it platform. Plugins need updating, backups need running, and security needs monitoring. Our maintenance plans handle all of it so you can focus on running your business.',
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
    description: 'If your WordPress site gets hacked, you lose rankings, customer trust, and potentially sensitive data. We lock down your installation with firewall rules, malware scanning, and proactive monitoring before problems happen.',
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
    description: 'Selling online should not mean fighting with your website. We set up WooCommerce stores that are fast, easy to manage, and optimized to turn browsers into buyers. From product pages to checkout flow, every step is designed to convert.',
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
    description: 'Your website is the first impression most customers get of your business. If it looks outdated, loads slowly, or does not work on mobile, you are losing money. We redesign WordPress sites with modern aesthetics, better UX, and SEO-safe migrations.',
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
