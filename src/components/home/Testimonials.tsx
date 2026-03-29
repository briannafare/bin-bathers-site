import { FadeInOnScroll } from '../ui/FadeInOnScroll'

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site">
        <FadeInOnScroll className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">Reviews</span>
          <h2
            className="font-black text-[#1B2A45]"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            What Our Neighbors Are Saying
          </h2>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#F2F5F8] rounded-2xl p-10 text-center relative">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#D4A32C">
                    <path d="M10 1l2.39 6.26H18.5l-4.95 3.74 1.9 6.26L10 13.27l-5.45 4 1.9-6.26L1.5 7.26h6.11z" />
                  </svg>
                ))}
              </div>

              {/* Quote mark */}
              <div className="text-6xl text-[#2D8C4E]/20 font-serif leading-none mb-2">"</div>

              <blockquote className="text-[#1B2A45] text-lg leading-relaxed font-medium mb-6" style={{ fontFamily: 'Rubik, sans-serif' }}>
                New to the neighborhood? So are we. We're a Calgary-born team on a mission to make bin day the best day of the week. Book your first cleaning and see why our customers keep coming back.
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2D8C4E] flex items-center justify-center">
                  <img src="/logo.svg" alt="Bin Bathers" className="w-6 h-6" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-[#1B2A45]">The Bin Bathers Team</div>
                  <div className="text-xs text-[#5A6B80]">Calgary, AB</div>
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
