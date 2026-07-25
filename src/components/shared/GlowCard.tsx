import { useRef } from 'react'
import type { ReactNode, MouseEvent as ReactMouseEvent } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  className?: string
}

export function GlowCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: ReactMouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={cn(
        'glass group relative overflow-hidden rounded-2xl',
        '[--x:50%] [--y:50%]',
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(500px circle at var(--x) var(--y), rgba(99,102,241,0.16), transparent 60%)',
        }}
      />
      {children}
    </motion.div>
  )
}
