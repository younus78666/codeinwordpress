import { Container } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

/* ── Before & After ── */

const comparisons = [
  {
    label: 'Page Speed',
    before: '2.1s',
    after: '0.8s',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    label: 'Google Ranking',
    before: 'Page 4',
    after: 'Page 1, Position 3',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    label: 'Monthly Leads',
    before: '5-10',
    after: '45-60',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
]

export function BeforeAfter() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white relative overflow-hidden">
      {/* Dot-pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            The Transformation We Deliver
          </h2>
          <p className="mt-4 text-lg text-primary-200">
            Side-by-side proof of what happens when your WordPress site gets the expert treatment.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {comparisons.map((item, i) => (
            <AnimateOnScroll key={item.label} delay={i * 120}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 lg:p-8">
                {/* Icon + label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent-400">
                    {item.icon}
                  </div>
                  <span className="font-heading font-bold text-lg text-white">{item.label}</span>
                </div>

                {/* Before */}
                <div className="mb-4">
                  <span className="block text-xs font-heading font-semibold uppercase tracking-wider text-red-400 mb-1">
                    Before
                  </span>
                  <span className="text-2xl md:text-3xl font-display font-bold text-red-300/80">
                    {item.before}
                  </span>
                </div>

                {/* Arrow divider */}
                <div className="flex items-center gap-2 my-3">
                  <div className="flex-1 h-px bg-white/20" />
                  <svg className="w-5 h-5 text-accent-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                  <div className="flex-1 h-px bg-white/20" />
                </div>

                {/* After */}
                <div className="mt-4">
                  <span className="block text-xs font-heading font-semibold uppercase tracking-wider text-green-400 mb-1">
                    After
                  </span>
                  <span className="text-2xl md:text-3xl font-display font-bold text-green-300">
                    {item.after}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Footnote */}
        <AnimateOnScroll delay={400}>
          <p className="mt-10 text-center text-sm text-primary-300 relative z-10">
            Based on average results across 400+ completed projects
          </p>
        </AnimateOnScroll>
      </Container>
    </section>
  )
}
