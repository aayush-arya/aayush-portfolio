import { motion } from 'framer-motion'
import { Briefcase, MapPin, FileBadge } from 'lucide-react'
import { experience } from '@/data/profile'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { GlowCard } from '@/components/shared/GlowCard'

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-4xl flex-col gap-14">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative flex flex-col gap-8">
          <div className="absolute top-2 bottom-2 left-[27px] hidden w-px bg-gradient-to-b from-primary via-accent to-transparent sm:block" />
          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-5"
            >
              <div className="glass relative z-10 hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-primary sm:flex">
                <Briefcase size={22} />
              </div>

              <GlowCard className="flex-1 rounded-3xl p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-sm font-medium text-primary">{exp.company}</p>
                  </div>
                  {exp.current && (
                    <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-400">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                      Current
                    </span>
                  )}
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                  <span>{exp.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {exp.location}
                  </span>
                </div>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {exp.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-gray-400">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-primary to-accent" />
                      {point}
                    </li>
                  ))}
                </ul>

                {exp.certificateUrl && (
                  <a
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300 transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <FileBadge size={14} />
                    View Certificate
                  </a>
                )}
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
