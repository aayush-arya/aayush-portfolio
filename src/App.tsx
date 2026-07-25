import { useState } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '@/components/layout/Layout'
import { LoadingScreen } from '@/components/shared/LoadingScreen'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Certifications } from '@/components/sections/Certifications'
import { Achievements } from '@/components/sections/Achievements'
import { Resume } from '@/components/sections/Resume'
import { Contact } from '@/components/sections/Contact'

function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <HelmetProvider>
      <LoadingScreen onDone={() => setLoaded(true)} />
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <Layout>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Achievements />
          <Resume />
          <Contact />
        </Layout>
      </div>
    </HelmetProvider>
  )
}

export default App
