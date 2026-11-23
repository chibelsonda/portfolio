import { Badge, Grid, Group, Paper, Stack, Text, Title } from '@mantine/core'
import { Section } from './Section'

const skillGroups = [
  { title: 'Backend', description: 'Business logic, APIs, authentication, and reporting', skills: ['PHP', 'Laravel', 'C#', 'ASP.NET Core', 'Go'] },
  { title: 'Frontend', description: 'Responsive application interfaces and workflows', skills: ['React', 'Vue.js', 'Nuxt', 'JavaScript', 'Mantine', 'Vuetify'] },
  { title: 'Data', description: 'Relational modeling, querying, and data-driven systems', skills: ['PostgreSQL', 'MySQL', 'SQL Server', 'Entity Framework'] },
  { title: 'Delivery', description: 'Production environments and collaborative delivery', skills: ['Linux', 'AWS', 'Git', 'JWT', 'REST APIs'] },
]

export function Skills() {
  return (
    <Section id="skills" title="Capabilities" subtitle="A versatile toolkit for building and supporting complete applications.">
      <Grid gutter="lg">
        {skillGroups.map((group) => (
          <Grid.Col key={group.title} span={{ base: 12, sm: 6 }}>
            <Paper withBorder radius="lg" p="xl" h="100%" className="content-card">
              <Stack gap="md">
                <div>
                  <Title order={3} size="h4" mb={6}>{group.title}</Title>
                  <Text c="dimmed" size="sm">{group.description}</Text>
                </div>
                <Group gap="xs">
                  {group.skills.map((skill) => (
                    <Badge key={skill} size="lg" variant="light" color="blue">{skill}</Badge>
                  ))}
                </Group>
              </Stack>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  )
}
