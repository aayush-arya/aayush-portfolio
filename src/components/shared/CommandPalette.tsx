import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, ArrowRight, Mail, FileDown } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { navLinks, profile } from '@/data/profile'

type Command = {
  id: string
  label: string
  hint: string
  icon: ReactNode
  action: () => void
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const commands: Command[] = useMemo(
    () => [
      ...navLinks.map((link) => ({
        id: link.href,
        label: `Go to ${link.label}`,
        hint: 'Section',
        icon: <ArrowRight size={15} />,
        action: () => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }),
      })),
      {
        id: 'github',
        label: 'Open GitHub',
        hint: 'Profile',
        icon: <FaGithub size={15} />,
        action: () => window.open(profile.socials.github, '_blank'),
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn',
        hint: 'Profile',
        icon: <FaLinkedin size={15} />,
        action: () => window.open(profile.socials.linkedin, '_blank'),
      },
      {
        id: 'email',
        label: 'Send an email',
        hint: 'Contact',
        icon: <Mail size={15} />,
        action: () => window.open(profile.socials.email, '_blank'),
      },
      {
        id: 'resume',
        label: 'Download resume',
        hint: 'PDF',
        icon: <FileDown size={15} />,
        action: () => window.open(profile.resumeUrl, '_blank'),
      },
    ],
    []
  )

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))

  function run(cmd: Command) {
    cmd.action()
    setOpen(false)
    setQuery('')
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[400] flex items-start justify-center p-4 pt-[12vh] sm:p-8 sm:pt-[16vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <motion.div
            className="glass relative w-full max-w-lg overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
              <Search size={16} className="text-gray-500" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, links, actions..."
                className="w-full bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
              />
              <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-gray-500">ESC</kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && <div className="px-3 py-6 text-center text-sm text-gray-500">No results found</div>}
              {filtered.map((cmd) => (
                <button
                  key={cmd.id}
                  onClick={() => run(cmd)}
                  data-cursor-hover
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  <span className="text-primary">{cmd.icon}</span>
                  <span className="flex-1">{cmd.label}</span>
                  <span className="text-xs text-gray-600">{cmd.hint}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
