import { FadeInOnScroll } from '../ui/FadeInOnScroll'

const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'

const plans = [
  {
    name: '1 Bin',
    price: '$30',
    desc: 'Perfect for your worst offender — green, blue, or black.',
    cta: 'Book 1 Bin',
    badge: null,
    highlight: false,
  },
  {
    name: '2 Bins',
    price: '$55',
    desc: 'Cover your garbage and recycling. Save $5.',
    cta: 'Book 2 Bins',
    badge: 'MOST POPULAR',
    highlight: true,
  },
  {
    name: '3 Bins',
    price: '$75',
    desc: 'The full reset — green, blue, and black. All three sparkling.',
    cta: 'Book 3 Bins',
    badge: 'BEST VALUE',
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#F2F5F8]">
      <div className="container-site">
        <FadeInOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">Pricing</span>
          <h2
            className="font-black text-[#1B2A45]"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Straightforward Pricing. No Surprises.
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {plans.map((plan, i) => (
            <FadeInOnScroll key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-[#1B2A45] text-white shadow-2xl -translate-y-2 border-t-4 border-[#D4A32C]'
                    : 'bg-white shadow-md hover:shadow-xl hover:-translate-y-1 border-t-4 border-transparent hover:border-[#2D8C4E]'
                }`}
              >
                {plan.badge && (
                  <span
                    className={`absolute -top-3.5 right-6 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                      plan.badge === 'MOST POPULAR'
                        ? 'bg-[#D4A32C] text-white'
                        : 'bg-[#2D8C4E] text-white'
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}
                <div
                  className={`text-sm font-bold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-white/60' : 'text-[#5A6B80]'}`}
                >
                  {plan.name}
                </div>
                <div
                  className={`text-5xl font-black mb-4 ${plan.highlight ? 'text-white' : 'text-[#1B2A45]'}`}
                  style={{ fontFamily: 'Rubik, sans-serif' }}
                >
                  {plan.price}
                </div>
                <p className={`text-sm leading-relaxed mb-8 flex-1 ${plan.highlight ? 'text-white/70' : 'text-[#5A6B80]'}`}>
                  {plan.desc}
                </p>
                <a
                  href={BOOKING_URL}
                  className={`block w-full text-center py-3.5 font-bold text-sm tracking-wide rounded-full transition-all duration-200 ${
                    plan.highlight
                      ? 'bg-[#D4A32C] text-white hover:brightness-110 shadow-md'
                      : 'border-2 border-[#1B2A45] text-[#1B2A45] hover:bg-[#1B2A45] hover:text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll className="text-center">
          <p className="text-[#5A6B80] text-sm">
            No contracts. No hidden fees. No commitments. Just clean bins whenever you need them.
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
