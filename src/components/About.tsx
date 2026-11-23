import { Grid, Paper, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { IconCloudComputing, IconCode, IconDatabase } from '@tabler/icons-react'
import { Section } from './Section'

const strengths = [
  {
    icon: IconCode,
    title: 'Product-minded development',
    description: 'I turn operational needs into practical interfaces, workflows, APIs, and integrations that people can use confidently.',
  },
  {
    icon: IconDatabase,
    title: 'Systems that handle real work',
    description: 'My portfolio spans HR, payroll, enrollment, billing, authentication, reporting, communications, and cybersecurity.',
  },
  {
    icon: IconCloudComputing,
    title: 'End-to-end ownership',
    description: 'I work from frontend and backend implementation through data modeling, Linux environments, cloud deployment, and maintenance.',
  },
]

export function About() {
  return (
    <Section id="about" title="Engineering across the stack" subtitle="Practical software, built around the people and processes it supports.">
      <Grid gutter="lg">
        {strengths.map(({ icon: Icon, title, description }) => (
          <Grid.Col key={title} span={{ base: 12, md: 4 }}>
            <Paper withBorder radius="lg" p="xl" h="100%" className="content-card">
              <Stack gap="md">
                <ThemeIcon size={46} radius="md" variant="light"><Icon size={25} /></ThemeIcon>
                <Title order={3} size="h4">{title}</Title>
                <Text c="dimmed" lh={1.7}>{description}</Text>
              </Stack>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  )
}
