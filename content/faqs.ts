export type FAQ = {
  question: string
  answer: string
  category: 'general' | 'services' | 'pricing' | 'technical'
}

export const faqs: FAQ[] = [
  {
    question: 'How much does a WordPress website cost in New Mexico?',
    answer: 'Our WordPress websites start at $500 for a starter site with up to 10 pages. Professional sites with advanced features are $900, and complex builds including e-commerce start at $1,500. Every project includes a 14-day money-back guarantee and 6 months of free post-launch support. We are transparent about pricing because we believe you should know exactly what you are paying for.',
    category: 'pricing',
  },
  {
    question: 'How long does it take to build a WordPress website?',
    answer: 'Most projects take 2 to 4 weeks from kickoff to launch. A simple starter site can be ready in under two weeks, while complex builds with WooCommerce or custom functionality may take 4 to 6 weeks. We provide a clear timeline during our free consultation so there are no surprises.',
    category: 'general',
  },
  {
    question: 'What makes your WordPress agency different from others in New Mexico?',
    answer: 'We combine deep technical WordPress expertise with advanced SEO knowledge. Every site we build is optimized for speed, security, and search engine visibility from day one. With 400+ completed projects and a 99% client satisfaction rate, we focus on measurable results, not just aesthetics. We write real code, not just drag and drop templates.',
    category: 'general',
  },
  {
    question: 'Can you fix a slow WordPress website?',
    answer: 'That is one of our core specialties. We audit your site for bottlenecks including unoptimized images, render-blocking scripts, bloated plugins, and poor hosting configurations. Our speed optimization service typically improves Lighthouse scores by 40 to 60 points with measurable before-and-after results. Most speed projects are completed within one week.',
    category: 'services',
  },
  {
    question: 'Do you work with businesses outside New Mexico?',
    answer: 'Absolutely. While we specialize in serving New Mexico businesses in Albuquerque, Santa Fe, Las Cruces, and beyond, we work with clients across the United States, Canada, UK, and Australia. Everything happens remotely via video calls, email, and project management tools. Our 400+ completed projects span 12 countries.',
    category: 'general',
  },
  {
    question: 'Do you provide SEO services with WordPress development?',
    answer: 'Every website we build includes foundational SEO with proper meta tags, schema markup, XML sitemaps, and clean URL structures. For businesses that need ongoing SEO, we offer comprehensive plans including keyword research, content strategy, technical audits, and monthly ranking reports. SEO is not an add-on for us, it is built into the process.',
    category: 'services',
  },
  {
    question: 'Do you offer ongoing website maintenance?',
    answer: 'Yes. Our maintenance plans include weekly updates for WordPress core, themes, and plugins, daily automated backups, uptime monitoring, security scanning, and priority support. Plans start at $99 per month and include a monthly performance and health report.',
    category: 'services',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes. For projects over $900, we offer a two-payment structure: 50% upfront to begin work and 50% upon completion before launch. For enterprise projects, we can discuss custom payment schedules during our consultation call.',
    category: 'pricing',
  },
  {
    question: 'What is included in your pricing?',
    answer: 'All plans include custom WordPress development, responsive mobile design, basic SEO setup, contact form integration, speed optimization, security hardening, and 6 months of free post-launch support. Premium and Enterprise plans add schema markup, advanced features, and priority support.',
    category: 'pricing',
  },
  {
    question: 'Do I need to purchase hosting separately?',
    answer: 'Yes. We recommend managed WordPress hosts like Cloudways, Rocket.net, or SiteGround for optimal performance. We handle the full hosting setup and migration as part of your project. Hosting costs typically range from $10 to $50 per month depending on the provider and plan.',
    category: 'technical',
  },
  {
    question: 'Will I be able to edit my website myself after launch?',
    answer: 'Absolutely. We build every site with user-friendly editing in mind using Elementor or the WordPress block editor. Before handoff, we provide a walkthrough session showing you how to update text, images, pages, and blog posts. No coding knowledge required.',
    category: 'technical',
  },
  {
    question: 'Do you offer a money-back guarantee?',
    answer: 'Yes. Every project comes with a 14-day money-back guarantee. If you are not satisfied with the initial design concept and direction within the first 14 days, we will issue a full refund. We also provide 6 months of free post-project support for any bugs or minor adjustments.',
    category: 'pricing',
  },
]
