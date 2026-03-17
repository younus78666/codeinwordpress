export type Testimonial = {
  name: string
  role: string
  company: string
  city: string
  quote: string
  rating: number
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Owner',
    company: 'Desert Bloom Interiors',
    city: 'Albuquerque',
    quote: 'They rebuilt our entire website in two weeks. Page speed went from a 38 to a 96 on Lighthouse, and our organic traffic doubled within three months. Best investment we made all year.',
    rating: 5,
  },
  {
    name: 'James Ortega',
    role: 'Managing Partner',
    company: 'Ortega & Associates Law',
    city: 'Santa Fe',
    quote: 'We needed a firm that understood both design and SEO. They delivered a site that looks premium, ranks for our target keywords, and actually generates qualified leads. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Maria Gutierrez',
    role: 'Marketing Director',
    company: 'Mesilla Valley Medical',
    city: 'Las Cruces',
    quote: 'Our old site was a security nightmare. They cleaned the malware, rebuilt our WordPress from scratch, and set up ongoing maintenance. We haven\'t had a single issue since.',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Founder',
    company: 'Four Corners Tech Solutions',
    city: 'Farmington',
    quote: 'Professional, responsive, and they actually understand WordPress at a deep technical level. Not just another page builder agency. These folks write real code.',
    rating: 5,
  },
  {
    name: 'Lisa Patel',
    role: 'Owner',
    company: 'Atomic City Coffee',
    city: 'Los Alamos',
    quote: 'From WooCommerce setup to Google Maps integration, they handled everything. Our online orders increased 60% in the first month after launch. The ROI speaks for itself.',
    rating: 5,
  },
  {
    name: 'Robert Sandoval',
    role: 'CEO',
    company: 'Rio Grande Builders',
    city: 'Rio Rancho',
    quote: 'We went through three other developers before finding Code In WordPress. They understood our industry, built location pages for all our service areas, and our phone actually rings now.',
    rating: 5,
  },
]
