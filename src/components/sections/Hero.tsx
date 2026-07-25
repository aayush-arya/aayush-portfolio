import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Send, FolderGit2 } from 'lucide-react'
import { profile } from '@/data/profile'
import { useTypewriter } from '@/hooks/useTypewriter'
import { MagneticButton } from '@/components/shared/MagneticButton'

const ParticleField = lazy(() => import('@/components/three/ParticleField').then((m) => ({ default: m.ParticleField })))

export function Hero() {
  const role = useTypewriter(profile.taglineRoles, { typingSpeed: 70, deletingSpeed: 35, pauseTime: 1500 })

  function scrollToProjects() {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24">
      <Suspense fallback={null}>
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <ParticleField />
        </div>
      </Suspense>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-gray-300 uppercase"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Available for opportunities
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl leading-[1.05] font-semibold text-white sm:text-6xl md:text-7xl"
        >
          Hi, I'm <span className="text-gradient">{profile.firstName} Arya</span>
        </motion.h1>

        <div className="mt-5 h-9 font-display text-xl font-medium text-gray-300 sm:text-2xl md:text-3xl">
          <span>{role}</span>
          <span className="animate-pulse text-primary">|</span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-2xl text-base text-gray-400 sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            onClick={scrollToProjects}
            className="bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_30px_-6px_rgba(99,102,241,0.7)]"
          >
            <FolderGit2 size={16} />
            View Projects
          </MagneticButton>

          <MagneticButton
            as="a"
            href={profile.resumeUrl}
            className="glass text-white"
          >
            <Download size={16} />
            Download Resume
          </MagneticButton>

          <MagneticButton
            as="a"
            href="#contact"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border border-white/10 text-gray-300 hover:text-white"
          >
            <Send size={16} />
            Hire Me
          </MagneticButton>
        </motion.div>
      </div>

      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gray-500 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.button>
    </section>
  )
}
