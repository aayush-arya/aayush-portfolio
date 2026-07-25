import { useCountUp } from '@/hooks/useCountUp'

export function AnimatedCounter({ value, suffix = '', label }: { value: number; suffix?: string; label: string }) {
  const { ref, value: current } = useCountUp<HTMLDivElement>(value)

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center">
      <span className="font-display text-gradient text-4xl font-semibold sm:text-5xl">
        {current}
        {suffix}
      </span>
      <span className="text-sm text-gray-500">{label}</span>
    </div>
  )
}
