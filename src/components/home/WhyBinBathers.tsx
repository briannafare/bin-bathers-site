import { FadeInOnScroll } from '../ui/FadeInOnScroll'
import { NoseStrike, LeafDrop, DollarSimple, MapPinSimple } from '../icons/BinIcons'

const cards = [
  {
    icon: <NoseStrike />,
    title: 'Open your bin without holding your breath',
    desc: "You deserve to not dread bin day. Your bins get pressure washed inside and out — grime, bacteria, mold, and odor gone. Not masked. Gone.",
  },
  {
    icon: <LeafDrop />,
    title: 'Hot water only. No chemicals.',
    desc: "High-pressure hot water is all it takes. Nothing harsh goes onto your driveway, into your yard, or down the storm drain. Effective AND responsible.",
  },
  {
    icon: <DollarSimple />,
    title: 'Starting at $30. No contracts.',
    desc: "Book once, book monthly, book whenever. You're never locked in. Pay only when you book, only for what you need.",
  },
  {
    icon: <MapPinSimple />,
    title: 'You don\'t lift a finger.',
    desc: "Leave your empty bins curbside. Your team arrives, cleans, and returns them — while you're at work, running errands, or doing literally anything else.",
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
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">Why It Works</span>
          <h2
            className="font-black text-white"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Clean bins. No chemicals. No commitment.
          </h2>
          <p className="text-white/50 mt-3 max-w-lg mx-auto text-base">
            The way it should have been done all along.
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
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

        <FadeInOnScroll className="text-center" delay={0.2}>
          <a
            href="https://clienthub.getjobber.com/booking/bin-bathers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D8C4E] text-white font-bold text-base rounded-lg shadow-xl hover:bg-[#268040] transition-all duration-200"
          >
            Book your first cleaning →
          </a>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
