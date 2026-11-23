import { Anchor, Container, Group, Text } from '@mantine/core'
import { EMAIL_URL } from '../constants/links'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container size="xl" py="xl">
        <Group justify="space-between" gap="md">
          <Text size="sm" c="dimmed">© {new Date().getFullYear()} Chicote Belsonda</Text>
          <Anchor href={EMAIL_URL} size="sm">Let’s work together</Anchor>
        </Group>
      </Container>
    </footer>
  )
}
