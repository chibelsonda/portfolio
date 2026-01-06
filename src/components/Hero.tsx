import { Container, Title, Text, Stack, Group, Button } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'

export function Hero() {
  return (
    <Container size="lg" py="xl" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <Stack gap="lg" align="center" style={{ textAlign: 'center' }}>
        <Title order={1} size="3rem" fw={700}>
          Chicote Belsonda
        </Title>
        <Text size="xl" c="dimmed" fw={500}>
          Full Stack Web Developer
        </Text>
        <Text size="md" c="dimmed" maw={600}>
          Passionate about building scalable web applications and delivering exceptional user experiences.
        </Text>
        <Group gap="md" mt="md">
          <Button
            component="a"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            leftSection={<IconBrandGithub size={18} />}
            size="md"
          >
            GitHub
          </Button>
          <Button
            component="a"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            leftSection={<IconBrandLinkedin size={18} />}
            size="md"
          >
            LinkedIn
          </Button>
        </Group>
      </Stack>
    </Container>
  )
}
