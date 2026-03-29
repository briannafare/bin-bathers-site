import { motion } from 'framer-motion'

const APPLY_URL = 'sms:14035555555'

export function OperatorHero() {
  return (
    <section className="bg-[#F2F5F8] py-20 md:py-28">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-4">
              Territory Operators
            </span>
            <h1
              className="font-black text-[#1B2A45] leading-[1.05] mb-6"
              style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(2.4rem, 6vw, 4rem)' }}
            >
              Run Your Own Business This Summer
            </h1>
            <p className="text-[#5A6B80] text-lg leading-relaxed mb-8">
              Limited territories available in Calgary. No experience required — full training, equipment, and marketing provided. Top performers earn $25K–$50K+.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={APPLY_URL}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4A32C] text-white font-bold text-base rounded-full shadow-lg hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
              >
                Apply Now
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M10 4L15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#earnings"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1B2A45] text-[#1B2A45] font-bold text-base rounded-full hover:bg-[#1B2A45] hover:text-white transition-all duration-200"
              >
                See Earnings
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/images/operator-hero.jpg"
                alt="Young operator with pressure washing equipment on suburban driveway"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A45]/30 to-transparent" />
            </div>
            {/* Floating earnings badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -left-4 md:-left-6 bg-[#D4A32C] text-white px-5 py-3 rounded-xl shadow-xl"
            >
              <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-0.5">Top Operators Earn</div>
              <div className="text-xl font-black" style={{ fontFamily: 'Rubik, sans-serif' }}>$25K–$50K+</div>
              <div className="text-xs opacity-80">per season</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
