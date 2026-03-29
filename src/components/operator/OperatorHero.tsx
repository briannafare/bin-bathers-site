import { motion } from 'framer-motion'

const APPLY_URL = 'sms:14035555555'
const PHONE = '(403) 555-5555'

export function OperatorHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed operator hero image */}
      <div className="relative min-h-[460px] md:min-h-[540px]">
        <img
          src="/images/operator-hero.jpg"
          alt="Student operator running a bin cleaning territory in Calgary"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B2A45]/90 via-[#1B2A45]/70 to-[#1B2A45]/20" />

        {/* Content */}
        <div className="relative z-10 container-site flex items-center min-h-[460px] md:min-h-[540px] py-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#6CC34A] mb-3">
                Territory Operators
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-black text-white leading-[1.05] mb-5"
              style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)' }}
            >
              Run Your Own<br />Business This Summer
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="flex items-center gap-2 mb-3"
            >
              <div className="h-px flex-1 max-w-[60px] bg-white/30" />
              <span className="text-white/70 text-sm font-medium">Limited Territories Available</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/75 text-base leading-relaxed mb-8 max-w-sm"
            >
              No experience required — full training, equipment, and marketing provided. Top performers earn $25K–$50K+.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href={APPLY_URL}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#2D8C4E] text-white font-bold text-base rounded-lg shadow-lg hover:bg-[#268040] transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 3h12a1 1 0 011 1v8a1 1 0 01-1 1H6l-4 3V4a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                Text to Apply Now
              </a>
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/15 backdrop-blur-sm text-white font-bold text-base rounded-lg border border-white/30 hover:bg-white/25 transition-all duration-200"
              >
                {PHONE}
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating earnings badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-8 right-6 md:right-12 bg-[#D4A32C] text-white px-5 py-4 rounded-xl shadow-xl"
        >
          <div className="text-xs font-bold uppercase tracking-widest opacity-85 mb-0.5">Top Operators Earn</div>
          <div className="text-2xl font-black" style={{ fontFamily: 'Rubik, sans-serif' }}>$25K–$50K+</div>
          <div className="text-xs opacity-80">per season</div>
        </motion.div>
      </div>
    </section>
  )
}
