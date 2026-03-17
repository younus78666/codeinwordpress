import { pricingTiers } from '@/content/pricing'
import { SectionWrapper, Card } from '@/components/ui/Shared'
import { Button } from '@/components/ui/Button'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'
import { cn } from '@/lib/utils'

export function PricingTable() {
  return (
    <SectionWrapper
      heading="Transparent, Fair Pricing"
      subheading="No hidden fees, no surprises. Every plan includes a 14-day money-back guarantee and 6 months of free post-launch support."
      id="pricing"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
        {pricingTiers.map((tier, i) => (
          <AnimateOnScroll key={tier.name} delay={i * 120}>
            <div
              className={cn(
                'relative rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl',
                tier.highlighted
                  ? 'border-primary-500 bg-white shadow-lg ring-2 ring-primary-100 md:-mt-4 md:mb-0'
                  : 'border-border bg-white hover:border-primary-200'
              )}
            >
              {/* Popular badge */}
              {tier.highlighted && (
                <div className="bg-primary-600 text-white text-center py-2 text-xs font-heading font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Tier name */}
                <h3 className="text-lg font-heading font-bold text-foreground">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-4">{tier.pageCount}</p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-display font-bold text-foreground">{tier.price}</span>
                  {tier.period && <span className="text-muted-foreground text-sm ml-1">{tier.period}</span>}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                {/* CTA */}
                <Button
                  href="/contact"
                  variant={tier.highlighted ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full mb-8"
                >
                  {tier.cta}
                </Button>

                {/* Features */}
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-secondary-700">
                      {feature.includes('Everything in') ? (
                        <>
                          <svg className="w-4 h-4 mt-0.5 shrink-0 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span className="font-semibold text-primary-700 font-heading">{feature}</span>
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 mt-0.5 shrink-0 text-success" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
