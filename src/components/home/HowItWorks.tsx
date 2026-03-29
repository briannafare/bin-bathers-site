import { FadeInOnScroll } from '../ui/FadeInOnScroll'
import { BinCurbside, BinSpray, BinSparkle } from '../icons/BinIcons'

const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'

const steps = [
  {
    num: '1',
    icon: <BinCurbside />,
    title: 'Leave Bins Out',
    desc: "Set your bins curbside after collection day. That's your only job.",
  },
  {
    num: '2',
    icon: <BinSpray />,
    title: 'We Clean & Sanitize',
    desc: 'We pressure wash inside and out — grime, odor, and bacteria gone in minutes.',
  },
  {
    num: '3',
    icon: <BinSparkle />,
    title: 'Enjoy Fresh Bins',
    desc: 'Open your garage without holding your breath. Clean, sanitized, ready to go.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-[#F2F5F8]">
      <div className="container-site">
        <FadeInOnScroll className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">How It Works</span>
          <h2
            className="font-black text-[#1B2A45] mb-2"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
          >
            Three Steps to Fresh Bins
          </h2>
          <p className="text-[#5A6B80] text-base">Your only job is leaving your bins out. We handle everything else.</p>
        </FadeInOnScroll>

        {/* Steps row with arrows */}
        <FadeInOnScroll delay={0.1}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 max-w-3xl mx-auto mb-10">
            {steps.map((step, i) => (
              <div key={step.num} className="flex flex-col md:flex-row items-center w-full md:w-auto">
                {/* Step card */}
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm w-full md:w-52 lg:w-56 min-w-0">
                  <div className="w-16 h-16 rounded-full bg-[#F0FAF4] border-2 border-[#2D8C4E]/20 flex items-center justify-center mb-3 text-[#2D8C4E]">
                    {step.icon}
                  </div>
                  <div
                    className="text-sm font-black text-[#2D8C4E] mb-1"
                    style={{ fontFamily: 'Rubik, sans-serif' }}
                  >
                    {step.num}. {step.title}
                  </div>
                  <p className="text-[#5A6B80] text-xs leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow between steps */}
                {i < steps.length - 1 && (
                  <div className="flex items-center justify-center text-[#2D8C4E] my-3 md:my-0 md:mx-2">
                    {/* Down arrow mobile, Right arrow desktop */}
                    <svg className="md:hidden" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <svg className="hidden md:block" width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M5 14h18M17 8l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.15} className="text-center">
          <p className="text-[#5A6B80] text-sm mb-6">
            From grimy and smelly to clean and fresh in minutes.
          </p>
          <a
            href={BOOKING_URL}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2D8C4E] text-white font-bold text-base rounded-lg shadow-md hover:bg-[#268040] transition-all duration-200"
          >
            Schedule My Cleaning
          </a>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
