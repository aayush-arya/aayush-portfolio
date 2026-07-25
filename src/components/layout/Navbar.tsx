import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Command } from 'lucide-react'
import { navLinks } from '@/data/profile'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/shared/Logo'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)))

  function scrollTo(href: string) {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 z-[150] w-[min(94vw,1100px)] -translate-x-1/2"
    >
      <div className="glass flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        <Logo onClick={() => scrollTo('#home')} />

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              data-cursor-hover
              className={cn(
                'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                active === link.href.slice(1) ? 'text-white' : 'text-gray-400 hover:text-white'
              )}
            >
              {active === link.href.slice(1) && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-white/10"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', ctrlKey: true }))}
            data-cursor-hover
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-400 transition-colors hover:text-white sm:flex"
          >
            <Command size={13} />
            <span>Search</span>
            <kbd className="rounded border border-white/10 bg-white/5 px-1 font-mono text-[10px]">⌘K</kbd>
          </button>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            data-cursor-hover
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass mt-2 overflow-hidden rounded-2xl lg:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    'rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors',
                    active === link.href.slice(1) ? 'bg-white/10 text-white' : 'text-gray-400'
                  )}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
