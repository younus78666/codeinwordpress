import { Container } from '@/components/ui/Shared'

const companies = [
  'Desert Bloom Interiors',
  'Ortega Law Group',
  'SW Medical Associates',
  'Mountain Trail Adventures',
  'Atomic Coffee Roasters',
  'Rio Grande Construction',
]

export function TrustedBy() {
  return (
    <section className="py-14 bg-muted/30 relative">
      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <Container>
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider font-heading mb-10">
          Trusted by businesses across New Mexico
        </p>

        <div className="overflow-hidden">
          <div
            className="flex gap-6"
            style={{ animation: 'marquee 30s linear infinite' }}
          >
            {[...companies, ...companies].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white border border-border shadow-sm shrink-0"
              >
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-primary-500 to-accent-500" />
                <span className="font-heading font-bold text-secondary-500 whitespace-nowrap text-base">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />
    </section>
  )
}
