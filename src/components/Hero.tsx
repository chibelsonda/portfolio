import { Container, Title, Text, Stack, Group, Button, Avatar } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { GITHUB_URL, LINKEDIN_URL, PROFILE_IMAGE } from '../constants/links'

export function Hero() {
  return (
    <Container size="lg" py="xl" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <Stack gap="lg" align="center" style={{ textAlign: 'center' }}>
        <Avatar
          src={PROFILE_IMAGE}
          alt="Chicote Belsonda"
          size={200}
          radius="50%"
          style={{ 
            border: '4px solid var(--mantine-color-gray-2)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            width: 'clamp(150px, 20vw, 200px)',
            height: 'clamp(150px, 20vw, 200px)'
          }}
        />
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
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            leftSection={<IconBrandGithub size={18} />}
            size="md"
          >
            GitHub
          </Button>
          <Button
            component="a"
            href={LINKEDIN_URL}
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
