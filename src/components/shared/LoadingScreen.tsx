import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function LoadingScreen({ onDone }: { onDone?: () => void }) {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const start = performance.now()
    const durationMs = 1400
    let raf: number

    function tick(now: number) {
      const elapsed = now - start
      const pct = Math.min(100, Math.round((elapsed / durationMs) * 100))
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setDone(true)
          onDone?.()
        }, 250)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#030712]"
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="aurora-bg pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Aayush<span className="text-gradient">.</span>Arya
            </motion.div>
            <div className="relative h-px w-48 overflow-hidden rounded-full bg-white/10 sm:w-64">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-secondary"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="font-mono text-xs tracking-[0.3em] text-white/40">{progress}%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
