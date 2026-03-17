import Link from 'next/link'
import { Container } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient grid-pattern min-h-[80vh] flex items-center">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          {/* 404 number */}
          <div className="text-8xl md:text-9xl font-display font-bold text-primary-200 mb-4 select-none" aria-hidden="true">
            404
          </div>

          <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
            Page Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            Sorry, the page you are looking for does not exist or has been moved. Let us help you find what you need.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button href="/" size="lg">
              Back to Home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>

          {/* Quick links */}
          <div className="border-t border-border pt-8">
            <p className="text-sm font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Popular Pages
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'About', href: '/about' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-xl bg-white border border-border text-sm font-heading font-medium text-secondary-600 hover:border-primary-300 hover:text-primary-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
