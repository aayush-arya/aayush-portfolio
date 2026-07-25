import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 z-[200] h-[3px] w-full origin-left bg-gradient-to-r from-primary via-accent to-secondary"
      style={{ scaleX }}
    />
  )
}
