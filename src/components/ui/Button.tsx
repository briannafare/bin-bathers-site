import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
}

const base = 'inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-200 cursor-pointer'

const variants = {
  primary: 'bg-[#D4A32C] text-white hover:brightness-110 hover:scale-[1.02] shadow-md',
  outline: 'border-2 border-[#1B2A45] text-[#1B2A45] hover:bg-[#1B2A45] hover:text-white',
  ghost: 'text-[#1B2A45] hover:text-[#D4A32C]',
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-[8px]',
  md: 'px-6 py-3 text-sm rounded-[10px]',
  lg: 'px-8 py-4 text-base rounded-[12px]',
}

export function Button({ children, href, variant = 'primary', size = 'md', className = '', onClick }: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  if (href) {
    return <a href={href} className={cls}>{children}</a>
  }
  return <button onClick={onClick} className={cls}>{children}</button>
}
