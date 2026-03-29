import { FadeInOnScroll } from '../ui/FadeInOnScroll'
import { NoseStrike, LeafDrop, DollarSimple, MapPinSimple } from '../icons/BinIcons'

const cards = [
  {
    icon: <NoseStrike />,
    title: 'No More Bin Day Dread',
    desc: "You know the smell. That wave of hot garbage when you open the lid in July. We eliminate it — and the bacteria, mold, and pests that come with it.",
  },
  {
    icon: <LeafDrop />,
    title: 'Eco-Friendly Process',
    desc: "We use high-pressure hot water cleaning — no harsh chemicals entering your yard, driveway, or the storm drain. Effective AND responsible.",
  },
  {
    icon: <DollarSimple />,
    title: 'Actually Affordable',
    desc: "Starting at $30 per bin with no contracts or recurring fees. Book when you need it. Skip when you don't. Your call.",
  },
  {
    icon: <MapPinSimple />,
    title: 'We Come to You',
    desc: "Curbside service on your schedule. You don't lift a finger — or a lid.",
  },
]

export function WhyBinBathers() {
  return (
    <section className="py-20 md:py-28 bg-[#1B2A45] relative overflow-hidden">
      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />

      <div className="container-site relative z-10">
        <FadeInOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">Why Us</span>
          <h2
            className="font-black text-white"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Why Calgary Homeowners Choose Bin Bathers
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((card, i) => (
            <FadeInOnScroll key={card.title} delay={i * 0.1}>
              <div className="flex gap-5 p-7 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.09] transition-colors duration-300">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center text-[#2D8C4E]">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {card.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
