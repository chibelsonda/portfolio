import { Section } from './Section'
import { Text, Stack } from '@mantine/core'

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="Get to know me better">
      <Stack gap="md" maw={800} mx="auto">
        <Text size="md">
          I'm a Full Stack Web Developer with a passion for creating efficient, scalable, and user-friendly web applications.
          I enjoy working across the entire technology stack, from backend APIs to frontend interfaces.
        </Text>
        <Text size="md">
          My experience spans multiple technologies and frameworks, allowing me to choose the right tools for each project.
          I'm always eager to learn new technologies and improve my skills.
        </Text>
      </Stack>
    </Section>
  )
}
