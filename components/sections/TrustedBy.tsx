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
    <section className="py-12 border-y border-border bg-muted/30">
      <Container>
        <p className="text-center text-sm text-muted-foreground uppercase tracking-wider font-heading mb-8">
          Trusted by businesses across New Mexico
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {companies.map((name) => (
            <span
              key={name}
              className="font-heading font-bold text-lg text-secondary-300 hover:text-secondary-500 transition-colors duration-200 select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}
