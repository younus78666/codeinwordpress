import { Container } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

/* ── Before & After ── */

const comparisons = [
  {
    label: 'Page Speed',
    before: '2.1s',
    after: '0.8s',
    beforePercent: 30,
    afterPercent: 90,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    type: 'gauge' as const,
  },
  {
    label: 'Google Ranking',
    before: 'Page 4',
    after: 'Page 1, Position 3',
    beforePercent: 0,
    afterPercent: 0,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    type: 'dots' as const,
  },
  {
    label: 'Monthly Leads',
    before: '5-10',
    after: '45-60',
    beforePercent: 15,
    afterPercent: 85,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    type: 'bars' as const,
  },
]

/* Gauge bar visualization for Page Speed */
function GaugeBar({ percent, color }: { percent: number; color: 'red' | 'green' }) {
  const barColor = color === 'red'
    ? 'bg-gradient-to-r from-red-500 to-red-400'
    : 'bg-gradient-to-r from-green-500 to-emerald-400'
  const glowColor = color === 'red'
    ? 'shadow-[0_0_8px_rgba(239,68,68,0.4)]'
    : 'shadow-[0_0_8px_rgba(34,197,94,0.4)]'

  return (
    <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden mt-2">
      <div
        className={`h-full rounded-full ${barColor} ${glowColor} transition-all duration-1000 ease-out`}
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}

/* Position dots visualization for Google Ranking */
function RankingDots({ isBefore }: { isBefore: boolean }) {
  const totalPages = 5
  const activeIndex = isBefore ? 3 : 0 // page 4 vs page 1

  return (
    <div className="flex items-center gap-2 mt-2">
      {Array.from({ length: totalPages }).map((_, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            className={`w-3.5 h-3.5 rounded-full transition-all duration-500 ${
              i === activeIndex
                ? isBefore
                  ? 'bg-red-400 shadow-[0_0_8px_rgba(239,68,68,0.5)] scale-125'
                  : 'bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.5)] scale-125'
                : 'bg-white/15'
            }`}
          />
          <span className="text-[9px] text-white/30">{i + 1}</span>
        </div>
      ))}
    </div>
  )
}

/* Bar chart visualization for Monthly Leads */
function LeadBars({ isBefore }: { isBefore: boolean }) {
  const bars = isBefore ? [20, 30, 15, 25, 18] : [70, 85, 60, 90, 75]
  const color = isBefore
    ? 'bg-gradient-to-t from-red-500 to-red-400'
    : 'bg-gradient-to-t from-green-500 to-emerald-400'

  return (
    <div className="flex items-end gap-1.5 h-10 mt-2">
      {bars.map((h, i) => (
        <div
          key={i}
          className={`w-3 rounded-t ${color} transition-all duration-700`}
          style={{ height: `${h}%`, transitionDelay: `${i * 80}ms` }}
        />
      ))}
    </div>
  )
}

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

      {/* Decorative gradient blobs */}
      <div
        className="absolute top-20 -left-32 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(8,145,178,0.6), transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 -right-24 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.5), transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)' }}
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
              <div
                className="relative rounded-2xl p-6 lg:p-8 bg-white/10 backdrop-blur-sm shadow-[0_0_30px_rgba(8,145,178,0.15)] group"
              >
                {/* Animated gradient border */}
                <div
                  className="absolute inset-0 rounded-2xl p-px overflow-hidden pointer-events-none"
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(8,145,178,0.4), rgba(34,197,94,0.3), rgba(139,92,246,0.3), rgba(8,145,178,0.4))',
                      backgroundSize: '300% 300%',
                      animation: 'gradientShift 4s ease infinite',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      WebkitMaskComposite: 'xor',
                      padding: '1px',
                      borderRadius: '1rem',
                    }}
                  />
                </div>

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
                  {/* Visualization */}
                  {item.type === 'gauge' && <GaugeBar percent={item.beforePercent} color="red" />}
                  {item.type === 'dots' && <RankingDots isBefore />}
                  {item.type === 'bars' && <LeadBars isBefore />}
                </div>

                {/* Animated pulsing arrow divider */}
                <div className="flex items-center gap-2 my-3">
                  <div className="flex-1 h-px bg-white/20" />
                  <svg
                    className="w-5 h-5 text-accent-400 shrink-0 animate-pulse"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
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
                  {/* Visualization */}
                  {item.type === 'gauge' && <GaugeBar percent={item.afterPercent} color="green" />}
                  {item.type === 'dots' && <RankingDots isBefore={false} />}
                  {item.type === 'bars' && <LeadBars isBefore={false} />}
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
