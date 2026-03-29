import { useEffect } from 'react'
import { HeroBento } from '../components/home/HeroBento'
import { TrustBar } from '../components/home/TrustBar'
import { ProblemAgitation } from '../components/home/ProblemAgitation'
import { HowItWorks } from '../components/home/HowItWorks'
import { Pricing } from '../components/home/Pricing'
import { GrossStat } from '../components/home/GrossStat'
import { BeforeAfter } from '../components/home/BeforeAfter'
import { WhyBinBathers } from '../components/home/WhyBinBathers'
import { ServiceAreas } from '../components/home/ServiceAreas'
import { Testimonials } from '../components/home/Testimonials'
import { FAQ } from '../components/home/FAQ'
import { FinalCTA } from '../components/home/FinalCTA'

export function Home() {
  useEffect(() => {
    document.title = "Bin Bathers — Calgary's Bin Cleaning Service | Clean Bins. Fresh Homes."
  }, [])

  return (
    <>
      <HeroBento />
      <TrustBar />
      <ProblemAgitation />
      <HowItWorks />
      <Pricing />
      <GrossStat />
      <BeforeAfter />
      <WhyBinBathers />
      <ServiceAreas />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  )
}
