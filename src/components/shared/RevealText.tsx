import type { ReactNode, ElementType } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type Props = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
  y?: number
  blur?: boolean
}

export function RevealText({ children, as: Tag = 'div', className, delay = 0, y = 24, blur = true }: Props) {
  const MotionTag = motion.create(Tag)
  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y, filter: blur ? 'blur(8px)' : 'blur(0px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
