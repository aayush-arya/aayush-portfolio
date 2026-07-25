import { RevealText } from '@/components/shared/RevealText'

type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: Props) {
  return (
    <div className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <RevealText as="span" className="glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-primary uppercase">
        {eyebrow}
      </RevealText>
      <RevealText as="h2" delay={0.08} className="font-display max-w-2xl text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
        {title}
      </RevealText>
      {description && (
        <RevealText as="p" delay={0.16} className="max-w-xl text-base text-gray-400 sm:text-lg">
          {description}
        </RevealText>
      )}
    </div>
  )
}
