import { useRef } from 'react'
import type { ReactNode, MouseEvent as ReactMouseEvent } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  as?: 'button' | 'a'
  strength?: number
}

export function MagneticButton({ children, className, onClick, href, as = 'button', strength = 0.35 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: ReactMouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`
  }

  function handleLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0, 0, 0)'
  }

  const Tag = as === 'a' ? motion.a : motion.button

  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className="inline-block transition-transform duration-200 ease-out">
      <Tag
        href={href}
        onClick={onClick}
        data-cursor-hover
        whileTap={{ scale: 0.96 }}
        className={cn(
          'relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300',
          className
        )}
      >
        {children}
      </Tag>
    </div>
  )
}
