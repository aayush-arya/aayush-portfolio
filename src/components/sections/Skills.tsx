import { useState } from 'react'
import { motion } from 'framer-motion'
import { Code2, Cloud, FlaskConical, Server, BrainCircuit, Binary } from 'lucide-react'
import { skillCategories } from '@/data/profile'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { GlowCard } from '@/components/shared/GlowCard'
import { cn } from '@/lib/utils'

const icons: Record<string, typeof Code2> = {
  'code-2': Code2,
  cloud: Cloud,
  'flask-conical': FlaskConical,
  server: Server,
  'brain-circuit': BrainCircuit,
  binary: Binary,
}

export function Skills() {
  const [activeId, setActiveId] = useState(skillCategories[0].id)
  const active = skillCategories.find((c) => c.id === activeId) ?? skillCategories[0]

  return (
    <section id="skills" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="A working toolkit spanning cloud infrastructure, applied ML, and full-stack development."
        />

        <div className="flex flex-wrap justify-center gap-3">
          {skillCategories.map((cat) => {
            const Icon = icons[cat.icon]
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                data-cursor-hover
                className={cn(
                  'relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors',
                  activeId === cat.id ? 'text-white' : 'glass text-gray-400 hover:text-white'
                )}
              >
                {activeId === cat.id && (
                  <motion.span
                    layoutId="skill-active"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon size={15} className="relative" />
                <span className="relative">{cat.label}</span>
              </button>
            )
          })}
        </div>

        <GlowCard className="rounded-3xl p-8 sm:p-10">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid gap-x-10 gap-y-7 sm:grid-cols-2"
          >
            {active.skills.map((skill, i) => (
              <div key={skill.name}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-white">{skill.name}</span>
                  <span className="font-mono text-xs text-gray-500">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </GlowCard>
      </div>
    </section>
  )
}
