import { AuroraBackground } from '@/components/shared/AuroraBackground'

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <AuroraBackground />
    </div>
  )
}
