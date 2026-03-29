import { motion } from 'framer-motion'

const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'

const cellVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: 0.1 + i * 0.1, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const words = ['Clean', 'Bins.', 'Fresh', 'Homes.']

export function HeroBento() {
  return (
    <section className="bg-[#F2F5F8] pb-16 pt-4 md:pt-8 md:pb-20 lg:pb-24">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 auto-rows-auto">

          {/* Headline + CTA — 3 cols */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={cellVariants}
            className="lg:col-span-3 flex flex-col justify-center p-8 lg:p-12 rounded-2xl bg-[#1B2A45] min-h-[280px]"
          >
            <h1
              className="font-black leading-[1.05] tracking-tight text-white mb-5"
              style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85 }}
              className="text-white/70 text-lg leading-relaxed mb-8 max-w-md"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Professional bin cleaning in Calgary — fast, affordable, and odor-free. No contracts. No hidden fees.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <a
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4A32C] text-white font-bold text-base tracking-wide rounded-full shadow-lg hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
              >
                Book Your Cleaning
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M10 4L15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image — 2 cols, spans 2 rows on desktop */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={cellVariants}
            className="lg:col-span-2 lg:row-span-2 relative min-h-[260px] lg:min-h-[420px] rounded-2xl overflow-hidden"
          >
            <img
              src="/images/hero-clean-bins.jpg"
              alt="Three freshly cleaned residential bins on a Calgary driveway"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A45]/20 to-transparent" />
          </motion.div>

          {/* Pricing mini-cards row */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cellVariants}
            className="lg:col-span-3 grid grid-cols-3 gap-3"
          >
            {[
              { bins: '1 Bin', price: '$30', desc: 'Single bin' },
              { bins: '2 Bins', price: '$55', desc: 'Save $5', highlight: true },
              { bins: '3 Bins', price: '$75', desc: 'Best value' },
            ].map((card) => (
              <a
                key={card.bins}
                href="#pricing"
                className={`group relative p-4 md:p-5 rounded-xl transition-all duration-200 cursor-pointer ${
                  card.highlight
                    ? 'bg-[#D4A32C] text-white shadow-md hover:brightness-110'
                    : 'bg-white border-l-4 border-[#2D8C4E] shadow-sm hover:border-[#D4A32C] hover:-translate-y-0.5'
                }`}
              >
                <div
                  className={`text-xs font-semibold uppercase tracking-widest mb-1 ${card.highlight ? 'text-white/80' : 'text-[#2D8C4E]'}`}
                >
                  {card.bins}
                </div>
                <div
                  className={`text-2xl font-black ${card.highlight ? 'text-white' : 'text-[#1B2A45]'}`}
                  style={{ fontFamily: 'Rubik, sans-serif' }}
                >
                  {card.price}
                </div>
                <div className={`text-xs mt-1 ${card.highlight ? 'text-white/70' : 'text-[#5A6B80]'}`}>
                  {card.desc}
                </div>
              </a>
            ))}
            <div className="col-span-3">
              <p className="text-xs text-[#5A6B80] text-center mt-2">
                Simple, transparent pricing. Just pick your bins.
              </p>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={cellVariants}
            className="lg:col-span-3"
          >
            <div className="flex flex-wrap gap-2">
              {[
                { icon: '🌿', label: 'Eco-Friendly Cleaning' },
                { icon: '📍', label: 'Locally Owned & Operated' },
                { icon: '⚡', label: 'Fast & Reliable Scheduling' },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-[#1B2A45]"
                >
                  <span>{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
