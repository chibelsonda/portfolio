import { AppShell } from '@mantine/core'
import { AppHeader } from './components/AppHeader'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <AppShell header={{ height: 70 }}>
      <AppShell.Header>
        <AppHeader />
      </AppShell.Header>
      <AppShell.Main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </AppShell.Main>
    </AppShell>
  )
}

export default App
