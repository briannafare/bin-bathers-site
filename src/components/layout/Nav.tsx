import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'
const PHONE = '(403) 555-5555'

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/97 backdrop-blur-md shadow-md'
          : 'bg-white shadow-sm'
      }`}>
        <div className="container-site flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 py-2">
            <img src="/logo.svg" alt="Bin Bathers" className="h-10 md:h-12 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors ${
                isHome ? 'text-[#2D8C4E]' : 'text-[#5A6B80] hover:text-[#1B2A45]'
              }`}
            >
              Home
            </Link>
            {isHome && (
              <>
                <a href="#how-it-works" className="text-sm font-medium text-[#5A6B80] hover:text-[#1B2A45] transition-colors">
                  How It Works
                </a>
                <a href="#pricing" className="text-sm font-medium text-[#5A6B80] hover:text-[#1B2A45] transition-colors">
                  Pricing
                </a>
              </>
            )}
            <Link
              to="/run-a-territory"
              className={`text-sm font-semibold transition-colors ${
                !isHome ? 'text-[#2D8C4E]' : 'text-[#5A6B80] hover:text-[#1B2A45]'
              }`}
            >
              Run a Territory
            </Link>
            <a
              href={BOOKING_URL}
              className="text-sm font-semibold text-[#5A6B80] hover:text-[#1B2A45] transition-colors hidden lg:block"
            >
              Book Cleaning
            </a>
          </div>

          {/* Desktop CTA — phone button style like mockup */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="flex items-center gap-2 px-4 py-2 bg-[#2D8C4E] text-white font-bold text-sm rounded-lg hover:bg-[#268040] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2h3l1.5 3.5-1.75 1.05A9 9 0 006.45 9.25L7.5 7.5 11 9v3c0 .55-.45 1-1 1C4.42 13 1 9.58 1 5.5c0-.55.45-1 1-1z" fill="currentColor"/>
              </svg>
              {PHONE}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[#1B2A45] block origin-center"
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-[#1B2A45] block"
            />
            <motion.span
              animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-[#1B2A45] block origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-50 bg-white flex flex-col pt-20 px-8"
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-5 right-5 text-3xl text-[#1B2A45] font-light w-10 h-10 flex items-center justify-center"
              aria-label="Close menu"
            >
              ×
            </button>
            <div className="flex flex-col gap-5 mt-4">
              {[
                { label: 'Home', to: '/', isLink: true },
                { label: 'How It Works', href: '/#how-it-works', isLink: false },
                { label: 'Pricing', href: '/#pricing', isLink: false },
                { label: 'FAQ', href: '/#faq', isLink: false },
                { label: 'Run a Territory', to: '/run-a-territory', isLink: true },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.07 + i * 0.05 }}
                >
                  {item.isLink && item.to ? (
                    <Link
                      to={item.to}
                      className="text-2xl font-bold text-[#1B2A45] hover:text-[#2D8C4E] transition-colors"
                      style={{ fontFamily: 'Rubik, sans-serif' }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-2xl font-bold text-[#1B2A45] hover:text-[#2D8C4E] transition-colors"
                      style={{ fontFamily: 'Rubik, sans-serif' }}
                    >
                      {item.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-auto pb-12 space-y-3">
              <a
                href={BOOKING_URL}
                onClick={() => setIsMobileOpen(false)}
                className="block w-full text-center px-8 py-4 text-base font-bold bg-[#2D8C4E] text-white rounded-lg shadow-md"
              >
                Book Your Cleaning
              </a>
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="block text-center text-lg font-semibold text-[#2D8C4E]"
              >
                {PHONE}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
