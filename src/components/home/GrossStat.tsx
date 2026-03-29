import { FadeInOnScroll } from '../ui/FadeInOnScroll'

const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'

/**
 * DESIGN-COLLISION ELEMENT — the one unexpected moment on this site.
 * Every competitor uses safe green branding and happy lifestyle photos.
 * This section is honest, visceral, and impossible to ignore.
 * It earns the "starting at $30" CTA by making the problem undeniable.
 */
export function GrossStat() {
  return (
    <section className="py-20 md:py-28 bg-[#1B2A45] overflow-hidden relative">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container-site relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInOnScroll>
            {/* The brutalist number — the "unexpected element" */}
            <div
              className="font-black text-white leading-none mb-4"
              style={{
                fontFamily: 'Rubik, sans-serif',
                fontSize: 'clamp(5rem, 20vw, 14rem)',
                letterSpacing: '-0.04em',
              }}
            >
              <span className="text-[#D4A32C]">500</span>
              <span className="text-white/40 text-[0.4em] align-top mt-[0.3em] ml-1">×</span>
            </div>

            <p
              className="text-white text-xl md:text-2xl font-bold mb-3 leading-tight"
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              More bacteria than a toilet seat.
            </p>
            <p className="text-white/50 text-base mb-10">
              The average uncleaned garbage bin in July. That's what you open every week.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2D8C4E] text-white font-bold text-base rounded-lg shadow-xl hover:bg-[#268040] transition-all duration-200"
              >
                Fix It for $30 →
              </a>
              <span className="text-white/30 text-sm">No contracts. Book once. Cancel anytime.</span>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  )
}
