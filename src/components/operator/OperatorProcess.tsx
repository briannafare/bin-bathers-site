import { FadeInOnScroll } from '../ui/FadeInOnScroll'

const steps = [
  {
    num: '01',
    title: 'Apply',
    desc: "Text us or fill out the form. We'll get back to you within 24 hours to set up a quick call.",
  },
  {
    num: '02',
    title: 'Train',
    desc: 'Complete our hands-on training covering equipment operation, cleaning technique, and customer scripts. Takes one day.',
  },
  {
    num: '03',
    title: 'Launch',
    desc: "Pick up your starter kit, claim your territory, and start booking homes. We handle the brand, website, and marketing — you handle the hustle.",
  },
]

export function OperatorProcess() {
  return (
    <section className="py-20 md:py-28 bg-[#F2F5F8]">
      <div className="container-site">
        <FadeInOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">How It Works</span>
          <h2
            className="font-black text-[#1B2A45]"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            From Application to First Pay in Days
          </h2>
        </FadeInOnScroll>

        <div className="max-w-2xl mx-auto space-y-5">
          {steps.map((step, i) => (
            <FadeInOnScroll key={step.num} delay={i * 0.12}>
              <div className="flex gap-6 items-start bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div
                  className="shrink-0 w-14 h-14 rounded-xl bg-[#1B2A45] flex items-center justify-center text-2xl font-black text-[#D4A32C]"
                  style={{ fontFamily: 'Rubik, sans-serif' }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1B2A45] mb-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-[#5A6B80] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
