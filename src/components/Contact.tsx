import { Section } from './Section'
import { Stack, Text, Group, Button } from '@mantine/core'
import { IconMail, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import { GITHUB_URL, LINKEDIN_URL, EMAIL_URL } from '../constants/links'

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's connect and discuss opportunities">
      <Stack gap="lg" align="center" maw={600} mx="auto">
        <Text size="md" style={{ textAlign: 'center' }}>
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </Text>
        <Group gap="md" justify="center">
          <Button
            component="a"
            href={EMAIL_URL}
            leftSection={<IconMail size={18} />}
            size="md"
          >
            Email Me
          </Button>
          <Button
            component="a"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
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
    </Section>
  )
}
