import { Container, Title, Text } from '@mantine/core'
import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <Container size="xl" py={{ base: 56, md: 88 }} id={id}>
      <Title order={2} mb="sm" ta="center" className="section-title">
        {title}
      </Title>
      {subtitle && (
        <Text c="dimmed" size="lg" mb={42} ta="center" maw={680} mx="auto" lh={1.6}>
          {subtitle}
        </Text>
      )}
      {children}
    </Container>
  )
}
