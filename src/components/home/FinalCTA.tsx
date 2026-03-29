import { FadeInOnScroll } from '../ui/FadeInOnScroll'

const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'
const PHONE = '(403) 555-5555'

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#1B2A45] via-[#1f3254] to-[#162038] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2D8C4E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4A32C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-site relative z-10 text-center">
        <FadeInOnScroll>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-4">
            Ready? Let's Go.
          </span>
          <h2
            className="font-black text-white mb-6"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Ready for Clean Bins?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            We're in your neighborhood this week. Spots fill up fast in summer — book yours now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BOOKING_URL}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4A32C] text-white font-bold text-base rounded-full shadow-xl hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
            >
              Book My Cleaning — Starting at $30
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M10 4L15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={`sms:${PHONE.replace(/\D/g, '')}`}
              className="text-white/60 text-sm hover:text-white transition-colors"
            >
              Or text us: {PHONE}
            </a>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
