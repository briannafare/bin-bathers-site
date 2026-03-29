import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeInOnScroll } from '../ui/FadeInOnScroll'

const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'

const faqs = [
  {
    q: 'How does bin cleaning work?',
    a: "It's simple — leave your bins curbside after collection day, and our team arrives with professional pressure washing equipment. We clean your bins inside and out with high-pressure hot water, removing grime, bacteria, and odor. The whole process takes just minutes per bin.",
  },
  {
    q: 'Do I need to be home?',
    a: "Nope. Just leave your empty bins out where we can access them. We'll clean them and put them back. You'll come home to fresh bins — that's it.",
  },
  {
    q: 'What bins do you clean?',
    a: "We clean all three Calgary residential bins — black (garbage), blue (recycling), and green (compost/organics). Pick one, two, or all three.",
  },
  {
    q: 'Do you use chemicals?',
    a: "No. We use high-pressure hot water only — no soaps, no chemicals. It's effective enough to eliminate bacteria and odor, and safe for your driveway, yard, and the environment.",
  },
  {
    q: 'Is there a contract or subscription?',
    a: "No contracts. No subscriptions required. Book whenever your bins need it — once a season, once a month, or once because your green bin went feral. Totally up to you.",
  },
  {
    q: 'How much does it cost?',
    a: "1 bin is $30, 2 bins are $55, and all 3 bins are $75. No hidden fees. What you see is what you pay.",
  },
  {
    q: 'What areas of Calgary do you serve?',
    a: "We're currently serving neighborhoods across Calgary and expanding weekly. Book online or text us to confirm we're in your area.",
  },
  {
    q: 'How do I book?',
    a: "Click any 'Book Your Cleaning' button on this site — it takes you straight to our booking page where you pick your date and bins. Takes about 60 seconds.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

function AccordionItem({ item, isOpen, onToggle }: { item: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-gray-200 transition-colors duration-200 ${isOpen ? 'border-l-4 border-l-[#D4A32C]' : 'border-l-4 border-l-transparent'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-4 text-left text-[#1B2A45] hover:text-[#2D8C4E] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold pr-4" style={{ fontFamily: 'Rubik, sans-serif' }}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl shrink-0 text-[#2D8C4E] font-light leading-none"
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
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <p className="px-4 pb-5 text-[#5A6B80] leading-relaxed text-sm">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F2F5F8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: headline + CTA */}
          <FadeInOnScroll className="lg:col-span-2">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">FAQ</span>
            <h2
              className="font-black text-[#1B2A45] mb-4"
              style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}
            >
              Questions About Bin Cleaning in Calgary
            </h2>
            <p className="text-[#5A6B80] mb-8 text-sm leading-relaxed">
              Everything you need to know about getting your bins cleaned. Still have questions? Just text us.
            </p>
            <a
              href={BOOKING_URL}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4A32C] text-white font-bold text-sm rounded-full shadow-md hover:brightness-110 transition-all duration-200"
            >
              Book My Cleaning
            </a>
          </FadeInOnScroll>

          {/* Right: accordion */}
          <FadeInOnScroll delay={0.15} className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
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
      </div>
    </section>
  )
}
