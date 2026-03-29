import { FadeInOnScroll } from '../ui/FadeInOnScroll'

const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'

const problems = [
  {
    icon: '🤢',
    headline: 'That smell on bin day.',
    body: "You know the one. It hits you the second you lift the lid in July. It's not just unpleasant — it's bacteria, mold, and decomposing waste that's been cooking all week.",
  },
  {
    icon: '🪲',
    headline: 'Maggots. Flies. Pests.',
    body: "A dirty bin is an open invitation. Food residue sticks to the walls and bottom long after your waste is picked up — and it brings company.",
  },
  {
    icon: '😬',
    headline: 'You keep meaning to clean them.',
    body: "But you're not going to get on your hands and knees with a garden hose and a bucket of bleach. That's not a judgment. That's just honest.",
  },
]

export function ProblemAgitation() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-site">
        <FadeInOnScroll className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">Sound Familiar?</span>
          <h2
            className="font-black text-[#1B2A45]"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}
          >
            Your bins deserve better. So do you.
          </h2>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {problems.map((p, i) => (
            <FadeInOnScroll key={i} delay={i * 0.1}>
              <div className="p-7 rounded-2xl bg-[#F2F5F8] border border-gray-100">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3
                  className="text-lg font-bold text-[#1B2A45] mb-3"
                  style={{ fontFamily: 'Rubik, sans-serif' }}
                >
                  {p.headline}
                </h3>
                <p className="text-[#5A6B80] text-sm leading-relaxed">{p.body}</p>
              </div>
            </FadeInOnScroll>
          ))}
        </div>

        <FadeInOnScroll className="text-center">
          <p className="text-[#5A6B80] text-base mb-5">
            There's a better option. It costs less than a pizza.
          </p>
          <a
            href={BOOKING_URL}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2D8C4E] text-white font-bold text-base rounded-lg shadow-md hover:bg-[#268040] transition-all duration-200"
          >
            Book a Cleaning →
          </a>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
