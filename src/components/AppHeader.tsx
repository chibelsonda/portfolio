import { ActionIcon, Button, Container, Group, Menu, useMantineColorScheme } from '@mantine/core'
import { IconDownload, IconMenu2, IconMoon, IconSun } from '@tabler/icons-react'
import { RESUME_URL } from '../constants/links'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Capabilities', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function AppHeader() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Container size="xl" h="100%">
      <Group justify="space-between" h="100%" wrap="nowrap">
        <Group gap="xs" visibleFrom="md">
          {navigation.map((item) => (
            <Button key={item.href} component="a" href={item.href} variant="subtle" color="gray">
              {item.label}
            </Button>
          ))}
        </Group>

        <Group gap="xs" wrap="nowrap">
          <Button
            component="a"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            leftSection={<IconDownload size={17} />}
            visibleFrom="sm"
          >
            Resume
          </Button>
          <ActionIcon
            variant="subtle"
            size="lg"
            onClick={toggleColorScheme}
            aria-label={`Switch to ${colorScheme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
          </ActionIcon>

          <Menu shadow="md" width={190} position="bottom-end">
            <Menu.Target>
              <ActionIcon variant="subtle" size="lg" hiddenFrom="md" aria-label="Open navigation">
                <IconMenu2 size={22} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              {navigation.map((item) => (
                <Menu.Item key={item.href} component="a" href={item.href}>
                  {item.label}
                </Menu.Item>
              ))}
              <Menu.Divider hiddenFrom="sm" />
              <Menu.Item component="a" href={RESUME_URL} target="_blank" rel="noopener noreferrer" hiddenFrom="sm">
                View resume
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </Container>
  )
}
