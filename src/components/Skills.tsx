import { Section } from './Section'
import { Grid, Badge, Stack } from '@mantine/core'

const skills = [
  'PHP',
  'Laravel',
  'React',
  'Vue',
  'C#',
  '.NET',
  'PostgreSQL',
  'MySQL',
  'JavaScript',
]

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies I work with">
      <Grid gutter="md" justify="center">
        {skills.map((skill) => (
          <Grid.Col key={skill} span={{ base: 6, sm: 4, md: 3 }}>
            <Stack align="center" gap="xs">
              <Badge size="lg" variant="filled" color="blue" style={{ width: '100%', textAlign: 'center', padding: '12px' }}>
                {skill}
              </Badge>
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  )
}
