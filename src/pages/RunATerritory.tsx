import { useEffect } from 'react'
import { OperatorHero } from '../components/operator/OperatorHero'
import { WhatYouGet } from '../components/operator/WhatYouGet'
import { EarningsBreakdown } from '../components/operator/EarningsBreakdown'
import { OperatorProcess } from '../components/operator/OperatorProcess'
import { IdealCandidate } from '../components/operator/IdealCandidate'
import { OperatorFAQ } from '../components/operator/OperatorFAQ'
import { ApplyCTA } from '../components/operator/ApplyCTA'

export function RunATerritory() {
  useEffect(() => {
    document.title = 'Run Your Own Bin Cleaning Business This Summer | Bin Bathers Calgary'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Start your own bin cleaning business in Calgary. No experience needed. Earn $25K-50K+. Equipment, training, and marketing provided. Apply now.')
  }, [])

  return (
    <>
      <OperatorHero />
      <WhatYouGet />
      <EarningsBreakdown />
      <OperatorProcess />
      <IdealCandidate />
      <OperatorFAQ />
      <ApplyCTA />
    </>
  )
}
