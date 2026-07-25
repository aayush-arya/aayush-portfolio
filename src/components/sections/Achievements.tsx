import { motion } from 'framer-motion'
import { Trophy, Users, Swords, Star } from 'lucide-react'
import { achievements } from '@/data/profile'
import type { Achievement } from '@/data/profile'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { GlowCard } from '@/components/shared/GlowCard'

const categoryIcon: Record<Achievement['category'], typeof Trophy> = {
  Award: Star,
  Hackathon: Trophy,
  Leadership: Users,
  Competition: Swords,
}

const categoryColor: Record<Achievement['category'], string> = {
  Award: 'text-amber-400',
  Hackathon: 'text-primary',
  Leadership: 'text-secondary',
  Competition: 'text-rose-400',
}

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-5xl flex-col gap-14">
        <SectionHeading eyebrow="Achievements" title="Milestones along the way" />

        <div className="grid gap-6 sm:grid-cols-2">
          {achievements.map((item, i) => {
            const Icon = categoryIcon[item.category]
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <GlowCard className="flex h-full flex-col gap-4 rounded-3xl p-6">
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ${categoryColor[item.category]}`}>
                      <Icon size={19} />
                    </div>
                    <span className="text-xs text-gray-500">{item.year}</span>
                  </div>
                  <div>
                    <span className={`text-xs font-medium tracking-wider uppercase ${categoryColor[item.category]}`}>{item.category}</span>
                    <h3 className="mt-1 font-display text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
                  </div>
                </GlowCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
