import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Eye, FileText } from 'lucide-react'
import { profile } from '@/data/profile'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { GlowCard } from '@/components/shared/GlowCard'
import { MagneticButton } from '@/components/shared/MagneticButton'
import { Modal } from '@/components/ui/Modal'

export function Resume() {
  const [preview, setPreview] = useState(false)

  return (
    <section id="resume" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-4xl flex-col gap-14">
        <SectionHeading eyebrow="Resume" title="Everything, on one page" description="A concise summary of my experience, skills, and education." />

        <GlowCard className="flex flex-col items-center gap-8 rounded-3xl p-10 text-center sm:p-14">
          <motion.div
            animate={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-accent text-white shadow-[0_0_40px_-8px_rgba(99,102,241,0.7)]"
          >
            <FileText size={32} />
          </motion.div>

          <div>
            <h3 className="font-display text-xl font-semibold text-white">{profile.name} — Resume</h3>
            <p className="mt-1 text-sm text-gray-500">Updated for {new Date().getFullYear()} · PDF · 1 page</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <MagneticButton
              onClick={() => setPreview(true)}
              className="glass text-white"
            >
              <Eye size={16} /> Preview Resume
            </MagneticButton>
            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              className="bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_30px_-6px_rgba(99,102,241,0.7)]"
            >
              <Download size={16} /> Download PDF
            </MagneticButton>
          </div>
        </GlowCard>
      </div>

      <Modal open={preview} onClose={() => setPreview(false)}>
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-lg font-semibold text-white">Resume Preview</h3>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white">
            <iframe src={profile.resumeUrl} title="Resume preview" className="h-[60vh] w-full" />
          </div>
        </div>
      </Modal>
    </section>
  )
}
