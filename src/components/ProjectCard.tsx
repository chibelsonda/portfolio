import { Card, Text, Badge, Stack } from '@mantine/core'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
}

export function ProjectCard({ title, description, technologies }: ProjectCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
      <Stack gap="md">
        <Text fw={600} size="lg">
          {title}
        </Text>
        <Text size="sm" c="dimmed">
          {description}
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {technologies.map((tech) => (
            <Badge key={tech} variant="light" color="blue">
              {tech}
            </Badge>
          ))}
        </div>
      </Stack>
    </Card>
  )
}
