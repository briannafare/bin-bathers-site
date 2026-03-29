import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInOnScroll } from '../ui/FadeInOnScroll'

const faqs = [
  {
    q: 'Do I need experience?',
    a: "None. We train you on everything — equipment, technique, customer scripts, and territory management. If you can follow directions and talk to people, you're qualified.",
  },
  {
    q: 'How much does it cost to start?',
    a: "Starter kits range from $500–$750 depending on your territory. This covers your equipment and training. You start earning immediately — most operators recover their kit cost in the first week.",
  },
  {
    q: 'Is this a franchise?',
    a: "It's a territory operator model. You run your own territory under the Bin Bathers brand. We provide the brand, marketing, booking system, and training. You provide the hustle and the service.",
  },
  {
    q: 'What areas are available?',
    a: "We're opening territories across Calgary and surrounding communities. Availability changes weekly. Apply now to check what's open near you.",
  },
  {
    q: 'How many hours per week?',
    a: "That's up to you. Most operators run 15–25 hours per week and service 10–20 homes. You set your own schedule around school, other work, or whatever else you've got going on.",
  },
  {
    q: 'When can I start?',
    a: "As soon as your training is complete and your kit arrives. Most operators go from application to first job in under a week.",
  },
]

function AccordionItem({ item, isOpen, onToggle }: { item: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-white/10 transition-colors duration-200 ${isOpen ? 'border-l-4 border-l-[#D4A32C]' : 'border-l-4 border-l-transparent'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-4 text-left text-white hover:text-[#D4A32C] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold pr-4" style={{ fontFamily: 'Rubik, sans-serif' }}>{item.q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl shrink-0 text-[#D4A32C] font-light leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-5 text-white/60 text-sm leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function OperatorFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 md:py-28 bg-[#1B2A45]">
      <div className="container-site max-w-3xl">
        <FadeInOnScroll className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">FAQ</span>
          <h2
            className="font-black text-white"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Operator Questions, Answered
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                item={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
