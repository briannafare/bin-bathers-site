import { useState, useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FadeInOnScroll } from '../ui/FadeInOnScroll'

const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'

export function BeforeAfter() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const [isPulsing, setIsPulsing] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsPulsing(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(Math.max(x, 2), 98))
    setIsPulsing(false)
  }, [])

  const startDrag = () => { isDragging.current = true }
  const endDrag = () => { isDragging.current = false }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container-site">
        <FadeInOnScroll className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">Results</span>
          <h2
            className="font-black text-[#1B2A45]"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            From Grimy to Gleaming in Minutes
          </h2>
          <p className="text-[#5A6B80] mt-3 text-lg">Same bin. Same day. Completely different experience.</p>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <div className="max-w-3xl mx-auto">
            <div
              ref={containerRef}
              className="relative overflow-hidden rounded-2xl cursor-ew-resize select-none shadow-2xl"
              style={{ aspectRatio: '16/9' }}
              onMouseDown={startDrag}
              onMouseUp={endDrag}
              onMouseLeave={endDrag}
              onMouseMove={(e) => handleMove(e.clientX)}
              onTouchStart={startDrag}
              onTouchEnd={endDrag}
              onTouchMove={(e) => handleMove(e.touches[0].clientX)}
            >
              {/* After image (full bg) */}
              <img
                src="/images/after-clean-bin.jpg"
                alt="After cleaning — sparkling clean bin"
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />
              {/* Green tint on after side */}
              <div className="absolute inset-0 bg-[#2D8C4E]/10 mix-blend-multiply" />

              {/* Before image (clipped left) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
              >
                <img
                  src="/images/before-dirty-bin.jpg"
                  alt="Before cleaning — dirty grimy bin"
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-red-900/20 mix-blend-multiply" />
              </div>

              {/* Divider line */}
              <div
                className="absolute top-0 bottom-0 z-10 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
              >
                {/* Drag handle */}
                <motion.div
                  animate={isPulsing ? { scale: [1, 1.15, 1] } : {}}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border-2 border-[#D4A32C] shadow-xl flex items-center justify-center"
                  style={{ minWidth: 44, minHeight: 44 }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 4L3 10L7 16M13 4L17 10L13 16" stroke="#1B2A45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>

              {/* Labels */}
              <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-red-600/80 text-white rounded-full backdrop-blur-sm">
                Before
              </span>
              <span className="absolute top-4 right-4 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#2D8C4E]/90 text-white rounded-full backdrop-blur-sm">
                After
              </span>
            </div>

            <div className="text-center mt-8">
              <p className="text-xs text-[#5A6B80] mb-4">← Drag to compare →</p>
              <a
                href={BOOKING_URL}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D4A32C] text-white font-bold text-base rounded-full shadow-md hover:brightness-110 hover:scale-[1.02] transition-all duration-200"
              >
                See What Clean Bins Feel Like
              </a>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
