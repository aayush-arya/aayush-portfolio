export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="animate-float absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full opacity-50 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent 70%)' }}
      />
      <div
        className="animate-float absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full opacity-40 blur-[110px]"
        style={{ background: 'radial-gradient(circle, #8b5cf6, transparent 70%)', animationDelay: '-3s' }}
      />
      <div
        className="animate-float absolute bottom-[-200px] left-1/3 h-[420px] w-[420px] rounded-full opacity-40 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #06b6d4, transparent 70%)', animationDelay: '-6s' }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
    </div>
  )
}
