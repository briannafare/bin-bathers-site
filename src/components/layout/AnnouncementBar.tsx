const BOOKING_URL = 'https://clienthub.getjobber.com/booking/bin-bathers'

export function AnnouncementBar() {
  return (
    <div className="bg-[#2D8C4E] text-white text-center text-sm py-2 px-4 font-medium tracking-wide">
      Now booking in Calgary →{' '}
      <a
        href={BOOKING_URL}
        className="underline underline-offset-2 font-semibold hover:text-white/80 transition-colors"
      >
        Schedule your cleaning today
      </a>
    </div>
  )
}
