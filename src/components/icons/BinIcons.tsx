const iconProps = {
  width: 48,
  height: 48,
  viewBox: '0 0 48 48',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function BinCurbside() {
  return (
    <svg {...iconProps}>
      {/* Bin body */}
      <rect x="12" y="14" width="24" height="28" rx="2" />
      {/* Bin lid */}
      <rect x="10" y="10" width="28" height="5" rx="1" />
      {/* Handle */}
      <path d="M20 10 V7 Q24 5 28 7 V10" />
      {/* Vertical lines on body */}
      <line x1="18" y1="18" x2="18" y2="38" />
      <line x1="24" y1="18" x2="24" y2="38" />
      <line x1="30" y1="18" x2="30" y2="38" />
      {/* Arrow indicating "put out" */}
      <path d="M38 24 L44 24 M40 20 L44 24 L40 28" />
    </svg>
  )
}

export function BinSpray() {
  return (
    <svg {...iconProps}>
      {/* Bin body */}
      <rect x="8" y="16" width="22" height="26" rx="2" />
      {/* Bin lid */}
      <rect x="6" y="12" width="26" height="5" rx="1" />
      {/* Handle */}
      <path d="M16 12 V9 Q19 7 22 9 V12" />
      {/* Water spray lines */}
      <path d="M34 20 Q38 18 42 16" strokeDasharray="2 2" />
      <path d="M34 24 Q38 24 43 24" strokeDasharray="2 2" />
      <path d="M34 28 Q38 30 42 32" strokeDasharray="2 2" />
      {/* Spray nozzle */}
      <path d="M30 18 L34 20 L34 30 L30 32 Z" />
    </svg>
  )
}

export function BinSparkle() {
  return (
    <svg {...iconProps}>
      {/* Bin body */}
      <rect x="12" y="14" width="24" height="28" rx="2" />
      {/* Bin lid */}
      <rect x="10" y="10" width="28" height="5" rx="1" />
      {/* Handle */}
      <path d="M20 10 V7 Q24 5 28 7 V10" />
      {/* Sparkles */}
      <path d="M8 8 L9 5 L10 8 L13 9 L10 10 L9 13 L8 10 L5 9 Z" />
      <path d="M36 6 L37 4 L38 6 L40 7 L38 8 L37 10 L36 8 L34 7 Z" />
      <path d="M38 28 L39 26 L40 28 L42 29 L40 30 L39 32 L38 30 L36 29 Z" />
    </svg>
  )
}

export function BinStink() {
  return (
    <svg {...iconProps}>
      {/* Bin body */}
      <rect x="12" y="18" width="24" height="24" rx="2" />
      {/* Bin lid slightly open */}
      <path d="M10 18 Q24 14 38 18" />
      {/* Handle */}
      <path d="M20 18 V15 Q24 13 28 15 V18" />
      {/* Stink wavy lines */}
      <path d="M16 6 Q18 4 16 2" />
      <path d="M22 8 Q24 5 22 2" />
      <path d="M28 6 Q30 4 28 2" />
    </svg>
  )
}

export function LeafDrop() {
  return (
    <svg {...iconProps}>
      {/* Leaf */}
      <path d="M12 36 Q8 20 24 8 Q40 8 38 24 Q36 36 20 38 Q16 38 12 36 Z" />
      {/* Leaf vein */}
      <path d="M12 36 Q20 24 34 12" />
      {/* Water drop */}
      <path d="M30 28 Q30 22 36 22 Q42 22 42 28 Q42 34 36 38 Q30 34 30 28 Z" />
    </svg>
  )
}

export function DollarSimple() {
  return (
    <svg {...iconProps}>
      <circle cx="24" cy="24" r="18" />
      <path d="M24 10 V14 M24 34 V38" />
      <path d="M17 17 Q17 14 24 14 Q31 14 31 18 Q31 22 24 22 Q31 22 31 27 Q31 31 24 31 Q17 31 17 28" />
    </svg>
  )
}

export function MapPinSimple() {
  return (
    <svg {...iconProps}>
      <path d="M24 6 C16 6 10 12 10 20 C10 30 24 42 24 42 C24 42 38 30 38 20 C38 12 32 6 24 6 Z" />
      <circle cx="24" cy="20" r="5" />
    </svg>
  )
}

export function NoseStrike() {
  return (
    <svg {...iconProps}>
      {/* Simple nose shape */}
      <path d="M24 8 Q24 8 22 18 Q18 28 16 32 Q18 36 24 36 Q30 36 32 32 Q30 28 26 18 Q24 8 24 8 Z" />
      {/* Strike-through */}
      <line x1="6" y1="6" x2="42" y2="42" strokeWidth="3" />
    </svg>
  )
}

export function ShieldCheck() {
  return (
    <svg {...iconProps}>
      <path d="M24 4 L40 10 L40 26 Q40 38 24 44 Q8 38 8 26 L8 10 Z" />
      <polyline points="16,24 22,30 32,18" />
    </svg>
  )
}

export function CalendarCheck() {
  return (
    <svg {...iconProps}>
      <rect x="6" y="10" width="36" height="32" rx="3" />
      <line x1="6" y1="20" x2="42" y2="20" />
      <line x1="16" y1="6" x2="16" y2="14" />
      <line x1="32" y1="6" x2="32" y2="14" />
      <polyline points="15,28 21,34 33,24" />
    </svg>
  )
}
