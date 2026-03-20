import { testimonials } from '@/content/testimonials'
import { SectionWrapper, Card } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

function GradientStar() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="url(#starGradient)">
      <defs>
        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ef4444" />
        </linearGradient>
      </defs>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export function Testimonials({ limit = 3 }: { limit?: number }) {
  const items = testimonials.slice(0, limit)

  return (
    <SectionWrapper
      background="alt"
      heading="What Our Clients Say"
      subheading="Real results from real businesses across New Mexico. Read why 200+ companies trust us with their WordPress websites."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {items.map((t, i) => (
          <AnimateOnScroll key={t.name} delay={i * 100}>
            <Card className="h-full flex flex-col relative overflow-hidden" padding="lg">
              {/* Gradient top border */}
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"
                aria-hidden="true"
              />

              {/* Decorative quote mark */}
              <span
                className="absolute top-4 right-4 text-6xl font-serif text-primary-100 select-none leading-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <GradientStar key={s} />
                ))}
              </div>

              {/* Quote - larger text */}
              <blockquote className="text-base text-secondary-700 leading-relaxed flex-1 mb-6 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border relative z-10">
                {/* Gradient ring around avatar */}
                <div className="p-0.5 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-700 font-heading font-bold text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-heading font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}, {t.company} &middot; {t.city}</div>
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
