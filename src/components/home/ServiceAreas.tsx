import { FadeInOnScroll } from '../ui/FadeInOnScroll'

const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'

const areas = [
  'Altadore', 'Bowness', 'Brentwood', 'Cranston', 'Crescent Heights',
  'Dalhousie', 'Douglasdale', 'Edgemont', 'Evanston', 'Hillhurst',
  'Inglewood', 'Kensington', 'Killarney', 'Marda Loop', 'McKenzie Towne',
  'Mount Royal', 'Parkhill', 'Sage Hill', 'Sunnyside', 'Tuscany',
  'Varsity', 'West Hillhurst',
]

export function ServiceAreas() {
  return (
    <section id="service-areas" className="py-20 md:py-28 bg-[#F2F5F8]">
      <div className="container-site">
        <FadeInOnScroll className="text-center mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#2D8C4E] mb-3">Coverage</span>
          <h2
            className="font-black text-[#1B2A45] mb-4"
            style={{ fontFamily: 'Rubik, sans-serif', fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}
          >
            Serving Neighborhoods Across Calgary
          </h2>
          <p className="text-[#5A6B80] max-w-xl mx-auto text-base leading-relaxed">
            Bin Bathers is currently cleaning bins across Calgary and expanding into new neighborhoods every week. Select your area to check availability.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.15}>
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {areas.map((area) => (
              <a
                key={area}
                href={BOOKING_URL}
                className="group px-4 py-2 bg-white rounded-full border border-[#2D8C4E]/40 text-sm font-medium text-[#1B2A45] hover:bg-[#D4A32C] hover:border-[#D4A32C] hover:text-white hover:scale-[1.03] transition-all duration-200 cursor-pointer shadow-sm"
              >
                {area}
              </a>
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2} className="text-center">
          <p className="text-[#5A6B80] text-sm max-w-md mx-auto">
            Don't see your neighborhood? We're expanding fast.{' '}
            <a href={BOOKING_URL} className="text-[#2D8C4E] font-semibold hover:text-[#D4A32C] transition-colors">
              Book anyway
            </a>{' '}
            — if we're not there yet, we'll let you know when we are.
          </p>
        </FadeInOnScroll>
      </div>
    </section>
  )
}
