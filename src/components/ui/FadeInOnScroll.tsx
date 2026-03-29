import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInOnScrollProps {
  children: ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  once?: boolean
  threshold?: number
  className?: string
}

export function FadeInOnScroll({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 30,
  once = true,
  threshold = 0.15,
  className = '',
}: FadeInOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: threshold }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
