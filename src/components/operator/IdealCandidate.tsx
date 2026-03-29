import { FadeInOnScroll } from '../ui/FadeInOnScroll'

const forYouItems = [
  "You're a student or young hustler in Calgary looking for real income — not minimum wage.",
  "You're comfortable knocking on doors and talking to homeowners.",
  "You don't mind getting your hands dirty (literally).",
  "You want to run something, not just clock in and out.",
  "You have access to a vehicle.",
]

const notForYouItems = [
  "You're looking for a sit-down job.",
  "You need someone to tell you what to do every hour.",
  "You're not comfortable with sales or customer interaction.",
]

export function IdealCandidate() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site">
        <FadeInOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">Ideal Fit</span>
          <h2
            className="font-black text-[#1B2A45]"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Who This Is For
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For You */}
          <FadeInOnScroll>
            <div className="bg-[#F2F5F8] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-[#2D8C4E] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8L7 12L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1B2A45]" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  This IS for you if...
                </h3>
              </div>
              <ul className="space-y-4">
                {forYouItems.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#5A6B80] leading-relaxed">
                    <span className="text-[#2D8C4E] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>

          {/* Not For You */}
          <FadeInOnScroll delay={0.1}>
            <div className="bg-[#FFF5F5] rounded-2xl p-8 border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 3L11 11M11 3L3 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#1B2A45]" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  This is NOT for you if...
                </h3>
              </div>
              <ul className="space-y-4">
                {notForYouItems.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#5A6B80] leading-relaxed">
                    <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}
