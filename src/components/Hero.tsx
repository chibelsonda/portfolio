import { Avatar, Badge, Button, Container, Grid, Group, Paper, Stack, Text, Title } from '@mantine/core'
import { IconArrowDown, IconMail } from '@tabler/icons-react'
import { EMAIL_URL, PROFILE_IMAGE } from '../constants/links'

export function Hero() {
  return (
    <section id="top" className="hero-section">
      <Container size="xl" py={{ base: 64, md: 104 }}>
        <Grid align="center" gutter={{ base: 48, md: 72 }}>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="lg" align="flex-start">
              <Badge variant="light" size="lg" radius="xl">Full-stack developer · Business systems</Badge>
              <Title order={1} className="hero-title">
                I build dependable software for real-world operations.
              </Title>
              <Text size="xl" c="dimmed" maw={700} lh={1.6}>
                I create secure web and desktop applications across the full stack—from intuitive interfaces and APIs to databases, reporting, and deployment.
              </Text>
              <Group gap="sm">
                {['Laravel & .NET', 'React & Vue', 'PostgreSQL & MySQL'].map((item) => (
                  <Badge key={item} variant="outline" color="gray" size="lg">{item}</Badge>
                ))}
              </Group>
              <Group gap="md" mt="sm">
                <Button component="a" href="#projects" size="lg" rightSection={<IconArrowDown size={18} />}>
                  Explore my work
                </Button>
                <Button component="a" href={EMAIL_URL} size="lg" variant="default" leftSection={<IconMail size={18} />}>
                  Start a conversation
                </Button>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 5 }}>
            <Paper className="profile-panel" radius="xl" p={{ base: 'xl', md: 40 }}>
              <Stack align="center" gap="lg">
                <Avatar
                  src={PROFILE_IMAGE}
                  alt="Portrait of Chicote Belsonda"
                  radius="50%"
                  className="profile-avatar"
                />
                <Stack gap={4} align="center">
                  <Title order={2} size="h2">Chicote Belsonda</Title>
                  <Text c="dimmed" size="lg">Full-stack web developer</Text>
                </Stack>
                <Group gap="xs" justify="center">
                  <Badge variant="dot" color="blue">Web & desktop</Badge>
                  <Badge variant="dot" color="indigo">Security-minded</Badge>
                  <Badge variant="dot" color="grape">End-to-end delivery</Badge>
                </Group>
              </Stack>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  )
}
