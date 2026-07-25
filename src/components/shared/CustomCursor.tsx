import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function CustomCursor() {
  const isFinePointer = useMediaQuery('(hover: hover) and (pointer: fine)')
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    if (!isFinePointer) return

    document.body.classList.add('custom-cursor-active')

    // gsap.quickTo gives the ring a springy, lagging follow while the dot tracks exactly
    const moveRing = gsap.quickTo(ringRef.current, 'x', { duration: 0.5, ease: 'power3' })
    const moveRingY = gsap.quickTo(ringRef.current, 'y', { duration: 0.5, ease: 'power3' })

    function onMove(e: MouseEvent) {
      setHidden(false)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
      moveRing(e.clientX)
      moveRingY(e.clientY)
      const target = e.target as HTMLElement
      setIsPointer(Boolean(target.closest('a, button, [data-cursor-hover]')))
    }

    function onLeave() {
      setHidden(true)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [isFinePointer])

  if (!isFinePointer) return null

  return (
    <div className={`pointer-events-none fixed inset-0 z-[999] transition-opacity duration-300 ${hidden ? 'opacity-0' : 'opacity-100'}`}>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
      />
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,border-color] duration-200 ease-out ${
          isPointer ? 'h-12 w-12 border-primary/70 bg-primary/10' : 'h-8 w-8 border-white/30'
        }`}
      />
    </div>
  )
}
