import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Sparkles, ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { projects } from '@/data/profile'
import type { Project } from '@/data/profile'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { GlowCard } from '@/components/shared/GlowCard'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <GlowCard className="flex flex-col overflow-hidden rounded-3xl">
      <div className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 bg-black/20" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <Sparkles className="relative z-10 text-white/90" size={40} strokeWidth={1.5} />
        <span className="glass absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium text-white">{project.category}</span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-gray-400">{project.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
          {project.tech.length > 4 && <Badge>+{project.tech.length - 4}</Badge>}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <button onClick={onOpen} data-cursor-hover className="flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-white">
            View details <ArrowUpRight size={14} />
          </button>
          <div className="flex items-center gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" data-cursor-hover aria-label="GitHub" className="text-gray-400 transition-colors hover:text-white">
                <FaGithub size={18} />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" data-cursor-hover aria-label="Live demo" className="text-gray-400 transition-colors hover:text-white">
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </GlowCard>
  )
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects worth talking about"
          description="A selection of systems I designed end-to-end — from data model to deployed UI."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} onOpen={() => setActive(project)} />
            </motion.div>
          ))}
        </div>
      </div>

      <Modal open={Boolean(active)} onClose={() => setActive(null)}>
        {active && (
          <div className="flex flex-col gap-6">
            <div>
              <span className="text-xs font-medium tracking-wider text-secondary uppercase">{active.category}</span>
              <h3 className="mt-2 font-display text-2xl font-semibold text-white">{active.title}</h3>
              <p className="mt-1 text-sm text-gray-400">{active.tagline}</p>
            </div>

            <p className="text-sm leading-relaxed text-gray-400">{active.description}</p>

            <div>
              <p className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">Key Features</p>
              <ul className="flex flex-col gap-2.5">
                {active.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              {active.github && (
                <a
                  href={active.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="glass flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white"
                >
                  <FaGithub size={15} /> Source
                </a>
              )}
              {active.demo && (
                <a
                  href={active.demo}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-hover
                  className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-white"
                >
                  <ExternalLink size={15} /> Live Demo
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
