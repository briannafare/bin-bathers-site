import { FadeInOnScroll } from '../ui/FadeInOnScroll'

const PHONE = '(403) 555-5555'
const APPLY_URL = 'sms:14035555555'

export function ApplyCTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-[#1f3254] via-[#1B2A45] to-[#162038] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#D4A32C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2D8C4E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-site relative z-10 text-center">
        <FadeInOnScroll>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A32C] mb-4">
            Limited Spots Available
          </span>
          <h2
            className="font-black text-white mb-6"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Ready to Run Your Own Business?
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Territories are limited — apply before yours is taken. We'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={APPLY_URL}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4A32C] text-white font-bold text-base rounded-full shadow-xl hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
            >
              Text to Apply — {PHONE}
            </a>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
