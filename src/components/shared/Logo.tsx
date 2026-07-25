import { motion } from 'framer-motion'

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <motion.button
      onClick={onClick}
      data-cursor-hover
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="group flex items-center gap-2.5"
      aria-label="Go to home"
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
        <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary opacity-80 blur-md transition-opacity duration-300 group-hover:opacity-100" />
        <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-accent to-secondary font-display text-lg font-bold text-white transition-transform duration-300 group-hover:-rotate-6">
          A
        </span>
        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#030712]" />
      </span>
      <span className="hidden font-display text-base font-semibold text-white sm:inline">
        Aayush<span className="text-primary">.</span>
      </span>
    </motion.button>
  )
}
