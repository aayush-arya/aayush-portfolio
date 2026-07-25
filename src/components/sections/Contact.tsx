import { useRef, useState } from 'react'
import type { FormEvent, MouseEvent as ReactMouseEvent } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { profile } from '@/data/profile'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { GlowCard } from '@/components/shared/GlowCard'
import { MagneticButton } from '@/components/shared/MagneticButton'

const contactInfo = [
  { icon: Mail, label: 'Email', value: profile.email, href: profile.socials.email, copyValue: profile.email, external: false },
  { icon: Phone, label: 'Phone', value: profile.phone, href: profile.socials.phone, copyValue: profile.phone, external: false },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined, copyValue: undefined, external: false },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: profile.socials.github.replace('https://github.com/', '@'),
    href: profile.socials.github,
    copyValue: undefined,
    external: true,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: profile.socials.linkedin.replace('https://linkedin.com/in/', ''),
    href: profile.socials.linkedin,
    copyValue: undefined,
    external: true,
  },
]

type Status = 'idle' | 'sending' | 'sent' | 'copied' | 'error'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null)

  async function copyValue(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value)
      setCopiedLabel(label)
      setTimeout(() => setCopiedLabel((current) => (current === label ? null : current)), 1800)
    } catch {
      // clipboard API unavailable — silently ignore, the value is still visible on the card
    }
  }

  async function copyMessageToClipboard(data: FormData) {
    const name = data.get('user_name')?.toString() ?? ''
    const email = data.get('user_email')?.toString() ?? ''
    const subject = data.get('subject')?.toString() ?? ''
    const message = data.get('message')?.toString() ?? ''
    const text = `Subject: ${subject}\nFrom: ${name} <${email}>\n\n${message}`

    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return false
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formRef.current) return
    const data = new FormData(formRef.current)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      // EmailJS isn't configured for this deployment — copy the composed message
      // to the clipboard instead of relying on a mailto: link, since mailto
      // silently fails whenever the visitor's OS has no default mail client set.
      const copied = await copyMessageToClipboard(data)
      setStatus(copied ? 'copied' : 'error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      setStatus('sent')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      const copied = await copyMessageToClipboard(data)
      setStatus(copied ? 'copied' : 'error')
    }
  }

  return (
    <section id="contact" className="relative px-6 py-28 sm:py-36">
      <div className="mx-auto flex max-w-5xl flex-col gap-14">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great"
          description="Open to internships, full-time roles, and interesting collaborations."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-4">
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              const isCopied = copiedLabel === item.label

              function handleCopyClick(e: ReactMouseEvent) {
                e.preventDefault()
                e.stopPropagation()
                if (item.copyValue) copyValue(item.label, item.copyValue)
              }

              const content = (
                <GlowCard className="flex items-center gap-4 rounded-2xl p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="truncate text-sm font-medium text-white">{item.value}</p>
                  </div>
                  {item.copyValue && (
                    <button
                      onClick={handleCopyClick}
                      data-cursor-hover
                      aria-label={`Copy ${item.label.toLowerCase()}`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-gray-500 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  )}
                </GlowCard>
              )
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                      data-cursor-hover
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              )
            })}
          </div>

          <GlowCard className="rounded-3xl p-6 sm:p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-medium text-gray-400">Name</label>
                  <input
                    id="name"
                    name="user_name"
                    required
                    placeholder="Jane Doe"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-primary/50 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-medium text-gray-400">Email</label>
                  <input
                    id="email"
                    name="user_email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-primary/50 focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-medium text-gray-400">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Let's work together"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-primary/50 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-medium text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-primary/50 focus:outline-none"
                />
              </div>

              <MagneticButton
                as="button"
                className="justify-center bg-gradient-to-r from-primary to-accent text-white shadow-[0_0_30px_-6px_rgba(99,102,241,0.7)] disabled:opacity-60"
              >
                <span className="flex items-center gap-2">
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </span>
              </MagneticButton>

              {status === 'sent' && (
                <p className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
                </p>
              )}
              {status === 'copied' && (
                <p className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 size={16} /> Copied your message — paste it into an email to {profile.email}.
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-center gap-2 text-sm text-rose-400">
                  <AlertCircle size={16} /> Couldn't copy automatically — email me directly at {profile.email}.
                </p>
              )}
            </form>
          </GlowCard>
        </div>
      </div>
    </section>
  )
}
