import { motion } from 'framer-motion'
import { GraduationCap, Cloud, BrainCircuit, Briefcase } from 'lucide-react'
import { profile, journey, education } from '@/data/profile'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { RevealText } from '@/components/shared/RevealText'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { GlowCard } from '@/components/shared/GlowCard'

const icons = {
  graduation: GraduationCap,
  cloud: Cloud,
  brain: BrainCircuit,
  briefcase: Briefcase,
  code: BrainCircuit,
}

export function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-6xl flex-col gap-20">
        <SectionHeading eyebrow="About Me" title="The Engineer behind the Code" description={undefined} />

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.3fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-xs lg:mx-0"
          >
            <div className="glow-border animate-float relative overflow-hidden rounded-3xl">
              <img
                src="/images/profile.jpg"
                alt="Aayush Arya"
                width={720}
                height={900}
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
              <div className="glass absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs font-medium text-white">Open to work</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-5">
            {profile.longSummary.map((paragraph, i) => (
              <RevealText key={i} as="p" delay={i * 0.1} className="text-base leading-relaxed text-gray-400 sm:text-lg">
                {paragraph}
              </RevealText>
            ))}

            <RevealText delay={0.3} className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {education.map((ed) => (
                <div key={ed.id} className="glass rounded-2xl p-5">
                  <p className="font-display text-sm font-semibold text-white">{ed.title}</p>
                  <p className="mt-1 text-xs text-primary">{ed.place}</p>
                  <p className="mt-1 text-xs text-gray-500">{ed.period}</p>
                  <p className="mt-3 text-xs leading-relaxed text-gray-500">{ed.detail}</p>
                </div>
              ))}
            </RevealText>
          </div>

          <div className="relative flex flex-col gap-6 pl-2">
            <div className="absolute top-2 bottom-2 left-[27px] w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            {journey.map((item, i) => {
              const Icon = icons[item.icon]
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex gap-5"
                >
                  <div className="glass relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-primary">
                    <Icon size={22} />
                  </div>
                  <div className="glass flex-1 rounded-2xl p-5">
                    <span className="text-xs font-medium tracking-wider text-secondary uppercase">{item.year}</span>
                    <p className="mt-1 font-display text-base font-semibold text-white">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.place}</p>
                    <p className="mt-2 text-sm text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <GlowCard className="grid grid-cols-2 gap-8 rounded-3xl px-6 py-10 sm:grid-cols-4 sm:px-10">
          {profile.stats.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </GlowCard>
      </div>
    </section>
  )
}
