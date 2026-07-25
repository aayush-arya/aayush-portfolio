import { useState } from 'react'
import { motion } from 'framer-motion'
import { Award, RotateCw } from 'lucide-react'
import { certifications } from '@/data/profile'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function Certifications() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({})

  function toggle(id: string) {
    setFlipped((f) => ({ ...f, [id]: !f[id] }))
  }

  return (
    <section id="certifications" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-6xl flex-col gap-14">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified knowledge"
          description="Click a card to flip it and see the details."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const isFlipped = Boolean(flipped[cert.id])
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="h-56 [perspective:1200px]"
              >
                <button
                  onClick={() => toggle(cert.id)}
                  data-cursor-hover
                  className="relative h-full w-full text-left transition-transform duration-700 [transform-style:preserve-3d]"
                  style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                  <div className="glass absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-3xl p-6 text-center [backface-visibility:hidden]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white">
                      <Award size={24} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-white">{cert.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{cert.issuer}</p>
                    </div>
                    <span className="absolute top-4 right-4 text-gray-600">
                      <RotateCw size={14} />
                    </span>
                    <span className="absolute bottom-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400">{cert.year}</span>
                  </div>

                  <div
                    className="glass absolute inset-0 flex flex-col justify-center gap-3 rounded-3xl p-6 [backface-visibility:hidden]"
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <span className="text-xs font-medium tracking-wider text-secondary uppercase">{cert.category}</span>
                    <p className="text-sm leading-relaxed text-gray-300">{cert.summary}</p>
                  </div>
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
