import type { Metadata } from 'next'
import { siteConfig } from '@/content/site-config'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SearchModal } from '@/components/layout/SearchModal'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { CookieConsent } from '@/components/layout/CookieConsent'
import { SkipToContent, LeadPopup } from '@/components/layout/ClientComponents'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | WordPress Agency in New Mexico`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'WordPress development New Mexico',
    'WordPress agency Albuquerque',
    'WordPress speed optimization',
    'WordPress SEO services',
    'website development Santa Fe',
    'WooCommerce development NM',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | WordPress Agency in New Mexico`,
    description: siteConfig.description,
    images: [{ url: `${siteConfig.url}/api/og?title=${encodeURIComponent(siteConfig.name)}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <SearchModal />
        <ScrollToTop />
        <CookieConsent />
        <LeadPopup />
      </body>
    </html>
  )
}
