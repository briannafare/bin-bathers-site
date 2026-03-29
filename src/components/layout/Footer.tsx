import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#1B2A45] text-white">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <img
              src="/logo.svg"
              alt="Bin Bathers"
              className="h-10 w-auto mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Clean Bins. Fresh Homes. Calgary's professional bin cleaning service — fast, affordable, and odor-free.
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <a href="tel:14035555555" className="block hover:text-white transition-colors">(403) 555-5555</a>
              <a href="mailto:hello@binbathers.ca" className="block hover:text-white transition-colors">hello@binbathers.ca</a>
              <p>Calgary, Alberta</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'How It Works', href: '/#how-it-works' },
                { label: 'Pricing', href: '/#pricing' },
                { label: 'Service Areas', href: '/#service-areas' },
                { label: 'FAQ', href: '/#faq' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'Book Now', href: 'https://clienthub.getjobber.com/booking/bin-bathers', external: true },
                { label: 'Run a Territory', href: '/run-a-territory', external: false },
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 Bin Bathers. All rights reserved. Locally owned and operated in Calgary, AB.
          </p>
        </div>
      </div>
    </footer>
  )
}
