# Code In WordPress — Production Website

Professional WordPress development agency website built with Next.js 14, Tailwind CSS, and TypeScript. Optimized for speed, SEO, and conversions.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Language:** TypeScript
- **Deployment:** Vercel
- **Fonts:** Sora (display) + Plus Jakarta Sans (headings) + DM Sans (body)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
codeinwordpress/
├── app/                         # Next.js App Router pages
│   ├── layout.tsx               # Root layout (fonts, header, footer, search, popup)
│   ├── page.tsx                 # Homepage
│   ├── about/page.tsx           # About page
│   ├── blog/page.tsx            # Blog listing (placeholder for UC v6.2)
│   ├── contact/page.tsx         # Contact page with form + map
│   ├── faq/page.tsx             # FAQ page with accordion + categories
│   ├── pricing/page.tsx         # Pricing page (3 tiers)
│   ├── privacy-policy/page.tsx  # Privacy policy
│   ├── terms-of-service/page.tsx # Terms of service
│   ├── not-found.tsx            # Custom 404
│   ├── services/
│   │   ├── page.tsx             # Services listing
│   │   └── [slug]/page.tsx      # Service detail (7 services)
│   ├── locations/
│   │   ├── page.tsx             # Locations index (all 7 cities)
│   │   └── [city]/page.tsx      # City page (7 NM cities)
│   ├── api/
│   │   ├── contact/route.ts     # Contact form API
│   │   └── og/route.tsx         # OG image generation
│   ├── sitemap.ts               # Dynamic sitemap
│   └── robots.ts                # Robots.txt
├── components/
│   ├── layout/                  # Header, Footer, MobileMenu, SearchModal, SkipToContent, LeadPopup
│   ├── sections/                # Hero, Services, Features, Testimonials, FAQ, ContactForm, PricingTable, GoogleMap, NewsletterForm
│   ├── ui/                      # Button, Card, Container, SectionWrapper, Badge, Input, AnimateOnScroll
│   └── seo/                     # JsonLd (6 schema types), Breadcrumbs
├── content/                     # All content data (single source of truth)
│   ├── site-config.ts           # Business info, contact, social links
│   ├── services.ts              # 7 services with features and pricing
│   ├── locations.ts             # 7 NM cities with geo, neighborhoods, intros
│   ├── testimonials.ts          # 6 client testimonials
│   ├── faqs.ts                  # 12 FAQs in 4 categories
│   ├── pricing.ts               # 3 pricing tiers ($500/$900/$1500)
│   └── navigation.ts            # Nav links + footer links
├── lib/                         # Utilities
│   ├── fonts.ts                 # Google Fonts config (zero CLS)
│   ├── metadata.ts              # SEO metadata helper
│   └── utils.ts                 # cn(), slugify(), readingTime()
├── public/
│   └── llms.txt                 # AI crawler guidance
├── tailwind.config.ts           # Full design system (28+ color tokens)
├── next.config.ts               # Security headers, image formats
├── vercel.json                  # Vercel deployment config
└── .env.example                 # Environment variables template
```

## How to Edit Content

All content is in TypeScript files under `/content/`. Edit data there — zero component changes needed.

| What to edit            | File                     |
|------------------------|--------------------------|
| Business info, phone   | `content/site-config.ts` |
| Services               | `content/services.ts`    |
| City/location pages    | `content/locations.ts`   |
| Testimonials           | `content/testimonials.ts`|
| FAQ questions          | `content/faqs.ts`        |
| Pricing tiers          | `content/pricing.ts`     |
| Navigation links       | `content/navigation.ts`  |

## SEO Features

- **Meta tags:** Unique title + description per page via `generateMetadata()`
- **Open Graph:** Auto-generated OG images via `/api/og` route
- **Schema (JSON-LD):** Organization, WebSite, BreadcrumbList, FAQPage, Service, LocalBusiness
- **Sitemap:** Dynamic `sitemap.xml` covering all pages, services, locations
- **Robots.txt:** Allow all, block `/api/`
- **llms.txt:** AI crawler guidance for AEO
- **Canonical URLs:** On every page
- **Breadcrumbs:** Visual + structured data on every page

## Key Features

- **CMD+K Search:** Global search modal with keyboard navigation
- **Off-canvas mobile menu:** Slides from right, focus trap, escape to close
- **Lead capture popup:** Shows after 15s or on exit intent (once per session)
- **Contact form:** Client-side validation + server-side API route
- **Google Maps:** Embedded on contact page and city pages
- **Scroll animations:** Intersection Observer-based reveal animations
- **Skip to content:** WCAG accessibility link
- **Responsive:** Mobile-first from every component

## Deployment

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Code In WordPress"
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. Connect to Vercel:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Framework will auto-detect as Next.js

3. Set environment variables in Vercel dashboard (see `.env.example`)

4. Deploy — automatic on every push to `main`

## Performance Targets

- Lighthouse Mobile: 95+
- Lighthouse Desktop: 98+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Total Blocking Time: < 200ms
