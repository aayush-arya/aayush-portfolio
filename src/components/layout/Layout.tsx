import type { ReactNode } from 'react'
import { useLenis } from '@/hooks/useLenis'
import { CustomCursor } from '@/components/shared/CustomCursor'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { CommandPalette } from '@/components/shared/CommandPalette'
import { GlobalBackground } from '@/components/shared/GlobalBackground'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export function Layout({ children }: { children: ReactNode }) {
  useLenis()

  return (
    <div className="relative min-h-screen bg-[#030712]">
      <GlobalBackground />
      <div className="relative z-10">
        <CustomCursor />
        <ScrollProgress />
        <CommandPalette />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
