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

  const homeLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  const allLinks = [
    ...homeLinks,
    { label: 'Run a Territory', href: '/run-a-territory' },
  ]

  const navLinks = isHome ? allLinks : [{ label: 'Home', href: '/' }, { label: 'Run a Territory', href: '/run-a-territory' }]

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#2D8C4E] text-white text-center text-sm py-2 px-4 font-medium tracking-wide z-50 relative">
        Now booking in Calgary →{' '}
        <a href={BOOKING_URL} className="underline underline-offset-2 font-semibold hover:text-white/80 transition-colors">
          Schedule your cleaning today
        </a>
      </div>

      <nav className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-[#F2F5F8]'
      }`}>
        <div className="container-site flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src="/logo.svg" alt="Bin Bathers" className="h-9 md:h-11 w-auto" />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#5A6B80] hover:text-[#1B2A45] transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-[#2D8C4E] font-semibold'
                      : 'text-[#5A6B80] hover:text-[#1B2A45]'
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${PHONE.replace(/\D/g, '')}`}
              className="text-sm font-medium text-[#5A6B80] hover:text-[#D4A32C] transition-colors"
            >
              {PHONE}
            </a>
            <a
              href={BOOKING_URL}
              className="inline-flex items-center px-6 py-2.5 text-sm font-bold tracking-wide uppercase bg-[#D4A32C] text-white hover:brightness-110 transition-all duration-200 rounded-full shadow-md"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
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
            className="fixed inset-0 z-50 bg-white flex flex-col pt-24 px-8"
          >
            <button
              onClick={() => setIsMobileOpen(false)}
              className="absolute top-5 right-6 text-3xl text-[#1B2A45] font-light"
              aria-label="Close menu"
            >
              ×
            </button>
            <div className="flex flex-col gap-6 mt-4">
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="text-2xl font-bold text-[#1B2A45] hover:text-[#2D8C4E] transition-colors"
                      style={{ fontFamily: 'Rubik, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-2xl font-bold text-[#1B2A45] hover:text-[#2D8C4E] transition-colors"
                      style={{ fontFamily: 'Rubik, sans-serif' }}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-auto pb-12 space-y-4">
              <a
                href={BOOKING_URL}
                onClick={() => setIsMobileOpen(false)}
                className="block w-full text-center px-8 py-4 text-base font-bold uppercase tracking-wider bg-[#D4A32C] text-white rounded-full shadow-lg"
              >
                Book Now
              </a>
              <a
                href={`tel:${PHONE.replace(/\D/g, '')}`}
                className="block text-center text-lg font-medium text-[#5A6B80]"
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
