import { SectionWrapper } from '@/components/ui/Shared'
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll'

const steps = [
  {
    number: '01',
    title: 'Discovery and Audit',
    description: 'Every project starts with a conversation. We learn about your business, your customers, your competitors, and what success looks like for you. If you have an existing site, we run a full technical audit covering speed, SEO health, security vulnerabilities, and content gaps. This is not a generic checklist. It is a custom analysis of where you stand and what it takes to win.',
  },
  {
    number: '02',
    title: 'Strategy and Architecture',
    description: 'Based on what we learn in discovery, we map out your site architecture, keyword targets, content structure, and technical requirements. You get a clear plan with page counts, timelines, and deliverables before we write a single line of code. No guessing, no scope creep, no surprises.',
  },
  {
    number: '03',
    title: 'Design and Development',
    description: 'We build your WordPress website with clean, hand-written code. Not a recycled template with your logo slapped on. Every page is responsive from the first pixel, optimized for speed, and structured for search engines. We use Elementor Pro for sections that need easy editing and custom PHP when the situation demands it.',
  },
  {
    number: '04',
    title: 'SEO Integration and Testing',
    description: 'Before launch, every page gets its meta tags, schema markup, Open Graph tags, and internal links. We test across devices, browsers, and connection speeds. We verify your Google Search Console and Analytics setup. We check your Core Web Vitals. If anything scores below 90 on Lighthouse, we fix it before you see it.',
  },
  {
    number: '05',
    title: 'Launch and Ongoing Support',
    description: 'We deploy your site, submit it to Google for indexing, and walk you through how to manage it yourself. Then we stick around. Every project includes 6 months of free post-launch support for bug fixes, content updates, and technical questions. After that, our maintenance plans keep things running smooth and secure.',
  },
]

export function HowWeWork() {
  return (
    <SectionWrapper
      background="alt"
      heading="How We Build WordPress Websites"
      subheading="A clear, proven process from first call to launch day. No black boxes, no vague timelines."
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {steps.map((step, i) => (
          <AnimateOnScroll key={step.number} delay={i * 100}>
            <div className="flex items-start gap-5 bg-white rounded-2xl border border-border p-6 md:p-8 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center shrink-0">
                <span className="text-lg font-display font-bold text-white">{step.number}</span>
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </SectionWrapper>
  )
}
