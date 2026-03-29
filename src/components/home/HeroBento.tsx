import { motion } from 'framer-motion'

const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'
const PHONE = '(403) 555-5555'

export function HeroBento() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed hero image */}
      <div className="relative min-h-[480px] md:min-h-[560px]">
        <img
          src="/images/hero-clean-bins.jpg"
          alt="Freshly cleaned residential bins on a Calgary driveway"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A45]/85 via-[#1B2A45]/65 to-[#1B2A45]/30" />

        {/* Hero content */}
        <div className="relative z-10 container-site flex items-center min-h-[480px] md:min-h-[560px] py-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#6CC34A] mb-3">
                Calgary's Bin Cleaning Service
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-black text-white leading-[1.05] mb-5"
              style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(2.4rem, 6vw, 4.2rem)' }}
            >
              Clean Bins.<br />Fresh Homes.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-white/80 text-lg leading-relaxed mb-8 max-w-sm"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Professional bin cleaning in Calgary — fast, affordable, and odor-free. No contracts. No hidden fees.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={BOOKING_URL}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#2D8C4E] text-white font-bold text-base rounded-lg shadow-lg hover:bg-[#268040] hover:scale-[1.02] transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 7H16" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 2V4M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Book Your Cleaning
              </a>
              <a
                href={`sms:${PHONE.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/15 backdrop-blur-sm text-white font-bold text-base rounded-lg border border-white/30 hover:bg-white/25 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 3h12a1 1 0 011 1v8a1 1 0 01-1 1H6l-4 3V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                Text Us to Book
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pricing strip below hero */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container-site py-5">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm font-semibold text-[#5A6B80] uppercase tracking-wider shrink-0">
              Simple, Transparent Pricing
            </p>
            <div className="flex-1 grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { bins: '1 Bin', price: '$30' },
                { bins: '2 Bins', price: '$55' },
                { bins: '3 Bins', price: '$75' },
              ].map((item) => (
                <a
                  key={item.bins}
                  href="#pricing"
                  className="group flex flex-col items-center py-3 px-2 rounded-lg border-2 border-gray-200 hover:border-[#2D8C4E] hover:bg-[#F0FAF4] transition-all duration-200 text-center"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#5A6B80] group-hover:text-[#2D8C4E]">
                    {item.bins}
                  </span>
                  <span
                    className="text-2xl font-black text-[#1B2A45]"
                    style={{ fontFamily: 'Rubik, sans-serif' }}
                  >
                    {item.price}
                  </span>
                </a>
              ))}
            </div>
            <a
              href={BOOKING_URL}
              className="shrink-0 px-6 py-3 bg-[#2D8C4E] text-white font-bold text-sm rounded-lg hover:bg-[#268040] transition-colors"
            >
              Book Now
            </a>
          </div>
          <p className="text-xs text-[#5A6B80] text-center mt-3">
            No contracts. No hidden fees. Just clean bins whenever you need them.
          </p>
        </div>
      </div>
    </section>
  )
}
