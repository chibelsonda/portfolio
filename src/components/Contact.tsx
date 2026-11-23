import { Anchor, Button, Group, Paper, Stack, Text, Title } from '@mantine/core'
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconSend } from '@tabler/icons-react'
import { EMAIL, EMAIL_URL, GITHUB_URL, LINKEDIN_URL } from '../constants/links'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" title="Let’s build something useful" subtitle="Have a role, project, or technical challenge that fits my background? I’d be glad to hear about it.">
      <Paper radius="xl" p={{ base: 'xl', md: 48 }} className="contact-panel">
        <Stack gap="xl" align="center" ta="center">
          <Stack gap="xs" align="center">
            <Title order={3} size="h2">Start a conversation</Title>
            <Text c="dimmed" size="lg" maw={600} lh={1.6}>
              Tell me what you are building, where you need help, and what a successful outcome looks like.
            </Text>
            <Anchor href={EMAIL_URL} fw={600} size="lg">{EMAIL}</Anchor>
          </Stack>

          <Button component="a" href={EMAIL_URL} size="lg" rightSection={<IconSend size={18} />}>
            Email me
          </Button>

          <Group gap="sm" justify="center">
            <Button
              component="a"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              leftSection={<IconBrandGithub size={18} />}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="default"
              leftSection={<IconBrandLinkedin size={18} />}
            >
              LinkedIn
            </Button>
            <Button component="a" href={EMAIL_URL} variant="default" leftSection={<IconMail size={18} />}>
              Email
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Section>
  )
}
