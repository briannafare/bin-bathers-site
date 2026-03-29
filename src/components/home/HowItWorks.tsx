import { FadeInOnScroll } from '../ui/FadeInOnScroll'
import { BinCurbside, BinSpray, BinSparkle } from '../icons/BinIcons'

const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'

const steps = [
  {
    num: '01',
    icon: <BinCurbside />,
    title: 'Leave Your Bins Out',
    desc: "Set your bins curbside on your scheduled cleaning day. That's your only job.",
  },
  {
    num: '02',
    icon: <BinSpray />,
    title: 'We Clean & Sanitize',
    desc: 'Our team pressure washes your bins inside and out — removing grime, odor, and bacteria in minutes.',
  },
  {
    num: '03',
    icon: <BinSparkle />,
    title: 'Enjoy Fresh Bins',
    desc: "Open your garage without holding your breath. Your bins are clean, sanitized, and ready to go.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="container-site">
        <FadeInOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">The Process</span>
          <h2
            className="font-black text-[#1B2A45]"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Three Steps to Fresh Bins
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, i) => (
            <FadeInOnScroll key={step.num} delay={i * 0.12}>
              <div className="relative">
                {/* Connector line on desktop */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+48px)] right-[-calc(50%-48px)] h-px border-t-2 border-dashed border-[#2D8C4E]/30 z-0" />
                )}
                <div className="relative z-10 flex flex-col items-center text-center p-8 rounded-2xl bg-[#F2F5F8] hover:shadow-md transition-shadow duration-300">
                  <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mb-5 shadow-sm text-[#2D8C4E]">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-black text-[#2D8C4E]/20 mb-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-[#1B2A45] mb-3" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-[#5A6B80] leading-relaxed text-sm">{step.desc}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll className="text-center">
          <a
            href={BOOKING_URL}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4A32C] text-white font-bold text-base tracking-wide rounded-full shadow-md hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
          >
            Schedule My Cleaning
          </a>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
