export type Project = {
  slug: string
  title: string
  client: string
  industry: string
  location: string
  services: string[]
  challenge: string
  solution: string
  results: { metric: string; value: string }[]
  testimonialQuote?: string
  duration: string
  year: number
}

export const projects: Project[] = [
  {
    slug: 'desert-bloom-interiors',
    title: 'Full WordPress Build & SEO Strategy',
    client: 'Desert Bloom Interiors',
    industry: 'Interior Design',
    location: 'Albuquerque, NM',
    services: ['WordPress Development', 'WordPress SEO'],
    challenge:
      'Desert Bloom Interiors had no web presence beyond a basic Facebook page. They were losing high-value residential clients to competitors who ranked on Google. Their portfolio of stunning Southwestern-inspired designs had no professional showcase online.',
    solution:
      'We built a custom WordPress site with a filterable portfolio gallery, integrated booking system, and location-optimized SEO targeting Albuquerque interior design keywords. Every page was crafted to highlight their unique desert aesthetic while converting visitors into consultation requests.',
    results: [
      { metric: 'Organic Traffic', value: '+520% in 6 months' },
      { metric: 'Google Ranking', value: 'Page 1 for 15 keywords' },
      { metric: 'Consultation Requests', value: '+280% increase' },
      { metric: 'Page Load Time', value: '1.4s average' },
    ],
    testimonialQuote:
      'Code In WordPress built us a site that actually looks like our brand. Within three months we were getting consultation requests from Google searches alone.',
    duration: '8 weeks',
    year: 2024,
  },
  {
    slug: 'ortega-law-group',
    title: 'Website Redesign & Speed Optimization',
    client: 'Ortega Law Group',
    industry: 'Legal Services',
    location: 'Santa Fe, NM',
    services: ['Website Redesign', 'Speed Optimization'],
    challenge:
      'Ortega Law Group had an outdated WordPress site built in 2017 that loaded in over 9 seconds on mobile. Potential clients were bouncing before the page even rendered. Their intake form completion rate was under 1%, costing them thousands in lost cases each month.',
    solution:
      'We completely redesigned the site with a modern, trust-focused layout and stripped out 14 unnecessary plugins dragging down performance. The new build features optimized images, clean code, and a streamlined intake process that reduces friction for potential clients.',
    results: [
      { metric: 'Page Load Time', value: '1.2s (from 9.1s)' },
      { metric: 'Bounce Rate', value: '-62% reduction' },
      { metric: 'Form Completions', value: '+340% increase' },
      { metric: 'Lighthouse Score', value: '96 (from 28)' },
    ],
    testimonialQuote:
      'Our old site was embarrassing. The new one loads instantly and we are getting more intake form submissions than ever before. Worth every dollar.',
    duration: '5 weeks',
    year: 2024,
  },
  {
    slug: 'southwest-medical-associates',
    title: 'WooCommerce Store & Custom Development',
    client: 'Southwest Medical Associates',
    industry: 'Healthcare',
    location: 'Las Cruces, NM',
    services: ['WooCommerce', 'WordPress Development'],
    challenge:
      'Southwest Medical Associates needed to sell medical supplies and supplements online while integrating with their existing patient management system. Their previous developer had left behind a tangled mess of custom code with no documentation and multiple security vulnerabilities.',
    solution:
      'We built a HIPAA-aware WooCommerce store with custom product categories, patient account integration, and secure checkout. The entire codebase was rewritten with clean, documented code and proper security hardening to protect sensitive patient data.',
    results: [
      { metric: 'Online Revenue', value: '+$45K in first quarter' },
      { metric: 'Order Processing Time', value: '-75% reduction' },
      { metric: 'Security Score', value: 'A+ rating' },
      { metric: 'Cart Abandonment', value: '-38% reduction' },
    ],
    duration: '10 weeks',
    year: 2025,
  },
  {
    slug: 'mountain-trail-adventures',
    title: 'WordPress Development & SEO Campaign',
    client: 'Mountain Trail Adventures',
    industry: 'Tourism & Outdoor',
    location: 'Farmington, NM',
    services: ['WordPress Development', 'WordPress SEO'],
    challenge:
      'Mountain Trail Adventures offered guided hiking, rafting, and camping tours across the Four Corners region but relied entirely on word-of-mouth and a dated Wix site. They had zero Google visibility for high-intent tourism keywords and were missing out on the growing outdoor recreation market.',
    solution:
      'We developed a visually immersive WordPress site with tour booking functionality, trail guides with embedded maps, and a comprehensive SEO strategy targeting outdoor tourism keywords across the Four Corners area. Each tour page was optimized with schema markup for local search visibility.',
    results: [
      { metric: 'Organic Traffic', value: '+410% in 6 months' },
      { metric: 'Online Bookings', value: '+$62K annual revenue' },
      { metric: 'Google Ranking', value: 'Page 1 for 22 keywords' },
      { metric: 'Conversion Rate', value: '5.2% (from 0.8%)' },
    ],
    testimonialQuote:
      'We went from invisible on Google to getting bookings from people across the country. The site pays for itself every single month.',
    duration: '7 weeks',
    year: 2024,
  },
  {
    slug: 'atomic-coffee-roasters',
    title: 'WooCommerce Store & Speed Optimization',
    client: 'Atomic Coffee Roasters',
    industry: 'Coffee & E-Commerce',
    location: 'Los Alamos, NM',
    services: ['WooCommerce', 'Speed Optimization'],
    challenge:
      'Atomic Coffee Roasters had a WooCommerce store that took 8 seconds to load and crashed during their holiday sales. They were losing online orders to competitors with faster, more reliable shopping experiences. Their subscription model was managed entirely through spreadsheets.',
    solution:
      'We rebuilt their WooCommerce store from the ground up with performance-first architecture, implemented a proper subscription management system with automated recurring orders, and optimized every image and script for sub-2-second load times even during peak traffic.',
    results: [
      { metric: 'Page Load Time', value: '1.1s (from 8.4s)' },
      { metric: 'Revenue Increase', value: '+$38K in first quarter' },
      { metric: 'Subscription Signups', value: '+190% increase' },
      { metric: 'Uptime During Sales', value: '99.9% availability' },
    ],
    testimonialQuote:
      'Our holiday sale ran without a single crash for the first time ever. Subscriptions are growing every week now that the checkout actually works.',
    duration: '6 weeks',
    year: 2025,
  },
  {
    slug: 'rio-grande-construction',
    title: 'Redesign, Security & Ongoing Maintenance',
    client: 'Rio Grande Construction',
    industry: 'Construction',
    location: 'Rio Rancho, NM',
    services: ['Website Redesign', 'Security Hardening', 'Maintenance'],
    challenge:
      'Rio Grande Construction discovered their WordPress site had been hacked and was serving malware to visitors. Their hosting provider threatened to shut them down. The site was running outdated plugins with known vulnerabilities, and they had no backup or maintenance plan in place.',
    solution:
      'We cleaned the malware infection, rebuilt the site with a hardened security configuration, and implemented a comprehensive maintenance plan with daily backups, automated updates, and 24/7 uptime monitoring. The redesign also modernized their project portfolio to showcase their commercial builds.',
    results: [
      { metric: 'Security Score', value: 'A+ (from F)' },
      { metric: 'Uptime', value: '99.97% over 12 months' },
      { metric: 'Lead Generation', value: '+165% increase' },
      { metric: 'Conversion Rate', value: '4.8% (from 1.2%)' },
    ],
    testimonialQuote:
      'After getting hacked, we were terrified of our own website. Code In WordPress cleaned everything up and now we never worry about security. The maintenance plan is worth its weight in gold.',
    duration: '4 weeks',
    year: 2024,
  },
]
