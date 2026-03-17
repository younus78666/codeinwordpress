export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'WordPress Development', href: '/services/wordpress-development' },
      { label: 'Speed Optimization', href: '/services/speed-optimization' },
      { label: 'WordPress SEO', href: '/services/wordpress-seo' },
      { label: 'Website Maintenance', href: '/services/website-maintenance' },
      { label: 'Security Hardening', href: '/services/security-hardening' },
      { label: 'WooCommerce Development', href: '/services/woocommerce-development' },
      { label: 'Website Redesign', href: '/services/website-redesign' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Locations',
    href: '/locations',
    children: [
      { label: 'Albuquerque', href: '/locations/albuquerque' },
      { label: 'Santa Fe', href: '/locations/santa-fe' },
      { label: 'Las Cruces', href: '/locations/las-cruces' },
      { label: 'Rio Rancho', href: '/locations/rio-rancho' },
      { label: 'Roswell', href: '/locations/roswell' },
      { label: 'Farmington', href: '/locations/farmington' },
      { label: 'Los Alamos', href: '/locations/los-alamos' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export const footerLinks = {
  services: [
    { label: 'WordPress Development', href: '/services/wordpress-development' },
    { label: 'Speed Optimization', href: '/services/speed-optimization' },
    { label: 'WordPress SEO', href: '/services/wordpress-seo' },
    { label: 'Maintenance Plans', href: '/services/website-maintenance' },
    { label: 'Security Hardening', href: '/services/security-hardening' },
    { label: 'WooCommerce', href: '/services/woocommerce-development' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
  ],
  cities: [
    { label: 'Albuquerque', href: '/locations/albuquerque' },
    { label: 'Santa Fe', href: '/locations/santa-fe' },
    { label: 'Las Cruces', href: '/locations/las-cruces' },
    { label: 'Rio Rancho', href: '/locations/rio-rancho' },
    { label: 'Roswell', href: '/locations/roswell' },
    { label: 'Farmington', href: '/locations/farmington' },
    { label: 'Los Alamos', href: '/locations/los-alamos' },
  ],
}
