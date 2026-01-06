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
    <Container size="lg" py="xl" id={id}>
      <Title order={2} mb="sm" style={{ textAlign: 'center' }}>
        {title}
      </Title>
      {subtitle && (
        <Text c="dimmed" size="lg" mb="xl" style={{ textAlign: 'center' }}>
          {subtitle}
        </Text>
      )}
      {children}
    </Container>
  )
}
