import { Card, Text, Badge, Stack, Image, Modal, Button, Group } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react'
import { useRef, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  images?: string[]
  siteUrl?: string
  githubUrl?: string
}

export function ProjectCard({ title, description, technologies, images, siteUrl, githubUrl }: ProjectCardProps) {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }))
  const [opened, setOpened] = useState(false)
  const [initialSlide, setInitialSlide] = useState(0)

  const handleImageClick = (index: number) => {
    setInitialSlide(index)
    setOpened(true)
  }

  const hasImages = images && images.length > 0

  return (
    <>
      <Card shadow="sm" padding="lg" radius="sm" withBorder h="100%">
        <Stack gap="md">
          {hasImages && (
            <Card.Section>
              {images!.length === 1 ? (
                <Image
                  src={images![0]}
                  alt={title}
                  height={200}
                  fit="cover"
                  style={{ 
                    borderTopLeftRadius: 'var(--mantine-radius-md)', 
                    borderTopRightRadius: 'var(--mantine-radius-md)',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleImageClick(0)}
                />
              ) : (
                <Carousel
                  withIndicators
                  height={200}
                  slideSize="100%"
                  plugins={[autoplay.current]}
                  onMouseEnter={() => autoplay.current.stop()}
                  onMouseLeave={() => autoplay.current.reset()}
                  classNames={{
                    indicator: 'carousel-indicator',
                  }}
                  styles={{
                    indicator: {
                      width: 8,
                      height: 8,
                      transition: 'width 250ms ease',
                    },
                  }}
                >
                  {images!.map((image, index) => (
                    <Carousel.Slide key={index}>
                      <Image
                        src={image}
                        alt={`${title} - Screenshot ${index + 1}`}
                        height={200}
                        fit="cover"
                        style={{ 
                          borderTopLeftRadius: 'var(--mantine-radius-md)', 
                          borderTopRightRadius: 'var(--mantine-radius-md)',
                          cursor: 'pointer'
                        }}
                        onClick={() => handleImageClick(index)}
                      />
                    </Carousel.Slide>
                  ))}
                </Carousel>
              )}
            </Card.Section>
          )}
        <Text fw={600} size="lg">
          {title}
        </Text>
        <Text size="sm" c="dimmed">
          {description}
        </Text>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {technologies.map((tech) => (
            <Badge key={tech} variant="light" color="blue">
              {tech}
            </Badge>
          ))}
        </div>
        {(siteUrl || githubUrl) && (
          <Group gap="xs" mt="xs" grow>
            {siteUrl && (
              <Button
                component="a"
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                leftSection={<IconExternalLink size={16} />}
              >
                Visit Site
              </Button>
            )}
            {githubUrl && (
              <Button
                component="a"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                leftSection={<IconBrandGithub size={16} />}
              >
                GitHub
              </Button>
            )}
          </Group>
        )}
      </Stack>
    </Card>

      {hasImages && (
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          size="xl"
          title={title}
          centered
          styles={{
            body: {
              padding: 0,
            },
            header: {
              marginBottom: 0,
            },
            content: {
              maxHeight: '90vh',
            },
          }}
        >
          <Carousel
            withIndicators
            height={600}
            slideSize="100%"
            initialSlide={initialSlide}
            classNames={{
              indicator: 'carousel-indicator',
            }}
            styles={{
              root: {
                maxHeight: 'calc(90vh - 60px)',
              },
              viewport: {
                maxHeight: 'calc(90vh - 60px)',
              },
              indicator: {
                width: 8,
                height: 8,
                transition: 'width 250ms ease',
              },
            }}
          >
            {images!.map((image, index) => (
              <Carousel.Slide key={index}>
                <Image
                  src={image}
                  alt={`${title} - Screenshot ${index + 1}`}
                  height={600}
                  fit="contain"
                  style={{ maxHeight: 'calc(90vh - 60px)' }}
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Modal>
      )}
    </>
  )
}
