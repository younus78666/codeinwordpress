import { SectionWrapper } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

const steps = [
  {
    number: '01',
    title: 'Discovery and Audit',
    description: 'Every project starts with a conversation. We learn about your business, your customers, your competitors, and what success looks like for you. If you have an existing site, we run a full technical audit covering speed, SEO health, security vulnerabilities, and content gaps. This is not a generic checklist. It is a custom analysis of where you stand and what it takes to win.',
    gradient: 'from-primary-400 to-primary-600',
  },
  {
    number: '02',
    title: 'Strategy and Architecture',
    description: 'Based on what we learn in discovery, we map out your site architecture, keyword targets, content structure, and technical requirements. You get a clear plan with page counts, timelines, and deliverables before we write a single line of code. No guessing, no scope creep, no surprises.',
    gradient: 'from-primary-500 to-accent-500',
  },
  {
    number: '03',
    title: 'Design and Development',
    description: 'We build your WordPress website with clean, hand-written code. Not a recycled template with your logo slapped on. Every page is responsive from the first pixel, optimized for speed, and structured for search engines. We use Elementor Pro for sections that need easy editing and custom PHP when the situation demands it.',
    gradient: 'from-accent-400 to-primary-500',
  },
  {
    number: '04',
    title: 'SEO Integration and Testing',
    description: 'Before launch, every page gets its meta tags, schema markup, Open Graph tags, and internal links. We test across devices, browsers, and connection speeds. We verify your Google Search Console and Analytics setup. We check your Core Web Vitals. If anything scores below 90 on Lighthouse, we fix it before you see it.',
    gradient: 'from-primary-600 to-accent-400',
  },
  {
    number: '05',
    title: 'Launch and Ongoing Support',
    description: 'We deploy your site, submit it to Google for indexing, and walk you through how to manage it yourself. Then we stick around. Every project includes 6 months of free post-launch support for bug fixes, content updates, and technical questions. After that, our maintenance plans keep things running smooth and secure.',
    gradient: 'from-accent-500 to-primary-400',
  },
]

export function HowWeWork() {
  return (
    <SectionWrapper
      background="alt"
      heading="How We Build WordPress Websites"
      subheading="A clear, proven process from first call to launch day. No black boxes, no vague timelines."
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical connecting line - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2" aria-hidden="true">
          <div className="w-full h-full bg-gradient-to-b from-primary-200 via-accent-300 to-primary-200" />
        </div>

        <div className="space-y-12 md:space-y-16">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1
            return (
              <AnimateOnScroll key={step.number} delay={i * 100}>
                <div className="relative">
                  {/* Center dot on the timeline - hidden on mobile */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 items-center justify-center" aria-hidden="true">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Decorative circles around step - hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 top-4 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-primary-200/40 animate-ping" style={{ animationDuration: '3s', animationDelay: `${i * 0.5}s` }} aria-hidden="true" />

                  <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Content side */}
                    <div className={`flex-1 w-full ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <div className={`bg-white rounded-2xl border border-border p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 ${isEven ? '' : 'md:ml-auto'}`}>
                        <div className={`flex items-start gap-4 ${isEven ? '' : 'md:flex-row-reverse md:text-left'}`}>
                          {/* Number badge */}
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shrink-0 shadow-lg shadow-primary-500/20">
                            <span className="text-lg font-display font-bold text-white">{step.number}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-heading font-bold text-foreground mb-2">{step.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Gradient image placeholder side */}
                    <div className="flex-1 w-full flex justify-center">
                      <div className="relative w-full max-w-xs aspect-square">
                        <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${step.gradient} opacity-90 shadow-xl`}>
                          {/* Dot pattern overlay */}
                          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
                          {/* Decorative inner shapes */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm" />
                          </div>
                          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10" />
                          <div className="absolute bottom-6 left-6 w-12 h-12 rounded-lg bg-white/10 rotate-12" />
                        </div>
                        {/* Decorative dots around the image */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-accent-300/60" aria-hidden="true" />
                        <div className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full bg-primary-300/60" aria-hidden="true" />
                        <div className="absolute top-1/2 -right-4 w-3 h-3 rounded-full bg-primary-400/40" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
