import { Group, Button, ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconSun, IconMoon, IconBrandGithub, IconBrandLinkedin, IconDownload } from '@tabler/icons-react'

export function AppHeader() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Group justify="space-between" p="md" style={{ borderBottom: '1px solid var(--mantine-color-gray-3)' }} wrap="nowrap">
      <Group gap="md" wrap="nowrap">
        <Button
          component="a"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="subtle"
          leftSection={<IconBrandGithub size={18} />}
          size="md"
          visibleFrom="xs"
        >
          GitHub
        </Button>
        <ActionIcon
          component="a"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="subtle"
          size="lg"
          hiddenFrom="xs"
          aria-label="GitHub"
        >
          <IconBrandGithub size={20} />
        </ActionIcon>
        <Button
          component="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="subtle"
          leftSection={<IconBrandLinkedin size={18} />}
          size="md"
          visibleFrom="xs"
        >
          LinkedIn
        </Button>
        <ActionIcon
          component="a"
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          variant="subtle"
          size="lg"
          hiddenFrom="xs"
          aria-label="LinkedIn"
        >
          <IconBrandLinkedin size={20} />
        </ActionIcon>
        <Button
          component="a"
          href="#"
          variant="subtle"
          leftSection={<IconDownload size={18} />}
          size="md"
          visibleFrom="sm"
        >
          Download CV
        </Button>
        <ActionIcon
          component="a"
          href="#"
          variant="subtle"
          size="lg"
          hiddenFrom="sm"
          aria-label="Download CV"
        >
          <IconDownload size={20} />
        </ActionIcon>
      </Group>
      <ActionIcon
        variant="subtle"
        size="lg"
        onClick={toggleColorScheme}
        aria-label="Toggle color scheme"
      >
        {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
      </ActionIcon>
    </Group>
  )
}
