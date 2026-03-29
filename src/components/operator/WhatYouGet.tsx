import { FadeInOnScroll } from '../ui/FadeInOnScroll'
import { ShieldCheck, MapPinSimple, CalendarCheck, BinSpray } from '../icons/BinIcons'

const cards = [
  {
    icon: <ShieldCheck />,
    title: 'The Bin Bathers Brand',
    desc: "You operate under an established brand with professional logo, uniforms, and marketing materials. You look legit from day one.",
  },
  {
    icon: <MapPinSimple />,
    title: 'Website & Marketing',
    desc: "Your territory gets featured on our website. We handle online booking, customer acquisition, and digital marketing so you can focus on cleaning.",
  },
  {
    icon: <CalendarCheck />,
    title: 'Training & Scripts',
    desc: "Step-by-step training on equipment, cleaning technique, customer communication, and door-to-door sales scripts. No prior experience needed.",
  },
  {
    icon: <BinSpray />,
    title: 'Starter Kit',
    desc: "Professional equipment and everything you need to start servicing homes immediately. Starter kits range from $500–$750 depending on your territory size.",
  },
]

export function WhatYouGet() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site">
        <FadeInOnScroll className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">What's Included</span>
          <h2
            className="font-black text-[#1B2A45]"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Everything You Need to Start Earning
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <FadeInOnScroll key={card.title} delay={i * 0.1}>
              <div className="flex gap-5 p-7 rounded-2xl bg-[#F2F5F8] hover:shadow-md transition-shadow duration-300 h-full">
                <div className="shrink-0 w-12 h-12 flex items-center justify-center text-[#2D8C4E]">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B2A45] mb-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                    {card.title}
                  </h3>
                  <p className="text-[#5A6B80] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
