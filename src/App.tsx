import { AppShell } from '@mantine/core'
import { AppHeader } from './components/AppHeader'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <AppShell header={{ height: 70 }}>
      <AppShell.Header className="site-header">
        <AppHeader />
      </AppShell.Header>
      <AppShell.Main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </AppShell.Main>
    </AppShell>
  )
}

export default App
