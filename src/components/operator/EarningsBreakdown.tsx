import { FadeInOnScroll } from '../ui/FadeInOnScroll'

const APPLY_URL = 'sms:14035555555'

const tiers = [
  {
    homes: '10 Homes/Week',
    weekly: '$420/week',
    monthly: '$1,680/month',
    desc: 'Great for part-time operators',
    highlight: false,
  },
  {
    homes: '15 Homes/Week',
    weekly: '$630/week',
    monthly: '$2,520/month',
    desc: 'The sweet spot for most student operators',
    highlight: true,
  },
  {
    homes: '20 Homes/Week',
    weekly: '$840/week',
    monthly: '$3,360/month',
    desc: 'Full-time hustle. Real money.',
    highlight: false,
  },
]

export function EarningsBreakdown() {
  return (
    <section id="earnings" className="py-20 md:py-28 bg-[#1B2A45] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2D8C4E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-site relative z-10">
        <FadeInOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">Earnings</span>
          <h2
            className="font-black text-white"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            What You Can Earn
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {tiers.map((tier, i) => (
            <FadeInOnScroll key={tier.homes} delay={i * 0.1}>
              <div
                className={`p-8 rounded-2xl text-center ${
                  tier.highlight
                    ? 'bg-[#D4A32C] shadow-2xl -translate-y-2'
                    : 'bg-white/[0.08] border border-white/10'
                }`}
              >
                <div className={`text-sm font-bold uppercase tracking-widest mb-4 ${tier.highlight ? 'text-white/80' : 'text-white/50'}`}>
                  {tier.homes}
                </div>
                <div
                  className={`text-3xl font-black mb-1 ${tier.highlight ? 'text-white' : 'text-white'}`}
                  style={{ fontFamily: 'Rubik, sans-serif' }}
                >
                  {tier.weekly}
                </div>
                <div className={`text-sm mb-4 ${tier.highlight ? 'text-white/80' : 'text-white/60'}`}>
                  {tier.monthly}
                </div>
                <p className={`text-xs leading-relaxed ${tier.highlight ? 'text-white/90' : 'text-white/50'}`}>
                  {tier.desc}
                </p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll className="text-center" delay={0.2}>
          <p className="text-white/50 text-sm mb-8 max-w-md mx-auto">
            Top performers earn $25K–$50K+ per season. Your earnings scale with your effort — no cap, no ceiling.
          </p>
          <a
            href={APPLY_URL}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4A32C] text-white font-bold text-base rounded-full shadow-xl hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
          >
            Apply Now — It's Free
          </a>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
