import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export function useCountUp<T extends HTMLElement = HTMLDivElement>(target: number, duration = 1600) {
  const ref = useRef<T | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf: number
    const start = performance.now()

    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return { ref, value }
}
