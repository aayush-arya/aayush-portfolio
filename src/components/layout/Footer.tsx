import { useState } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, ArrowUp, Check } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { profile } from '@/data/profile'

const socials = [
  { icon: FaGithub, href: profile.socials.github, label: 'GitHub', external: true },
  { icon: FaLinkedin, href: profile.socials.linkedin, label: 'LinkedIn', external: true },
  { icon: Mail, href: profile.socials.email, label: 'Email', external: false },
]

export function Footer() {
  const [copied, setCopied] = useState(false)

  function handleEmailClick(e: ReactMouseEvent) {
    e.preventDefault()
    navigator.clipboard?.writeText(profile.email).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
    window.location.href = profile.socials.email
  }

  return (
    <footer className="relative border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="font-display text-xl font-semibold text-white">
            Aayush<span className="text-primary">.</span>
          </span>
          <p className="text-sm text-gray-500">Built with React, Tailwind, and a lot of coffee.</p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              onClick={label === 'Email' ? handleEmailClick : undefined}
              aria-label={label === 'Email' ? 'Copy email address' : label}
              data-cursor-hover
              whileHover={{ y: -4, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="glass relative flex h-11 w-11 items-center justify-center rounded-full text-gray-300 transition-colors hover:text-white"
            >
              {label === 'Email' && copied ? <Check size={17} className="text-emerald-400" /> : <Icon size={17} />}
            </motion.a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-cursor-hover
          className="glass flex h-11 w-11 items-center justify-center rounded-full text-gray-300 transition-colors hover:text-white"
          aria-label="Back to top"
        >
          <ArrowUp size={17} />
        </button>
      </div>

      <p className="mt-10 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Aayush Arya. All rights reserved.
      </p>
    </footer>
  )
}
