import { Badge, Button, Card, Collapse, Group, Image, Modal, Stack, Text, Title, UnstyledButton } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { useDisclosure } from '@mantine/hooks'
import { IconBrandGithub, IconChevronDown, IconExternalLink, IconPhoto } from '@tabler/icons-react'
import { useId, useState } from 'react'

interface ProjectCardProps {
  title: string
  summary: string
  category: string
  features: string[]
  technicalDetails: string[]
  technologies: string[]
  images?: string[]
  siteUrl?: string
  githubUrl?: string
}

export function ProjectCard({
  title,
  summary,
  category,
  features,
  technicalDetails,
  technologies,
  images = [],
  siteUrl,
  githubUrl,
}: ProjectCardProps) {
  const [opened, setOpened] = useState(false)
  const [initialSlide, setInitialSlide] = useState(0)
  const [detailsOpened, { toggle: toggleDetails }] = useDisclosure(false)
  const detailsId = useId()
  const hasImages = images.length > 0

  const openGallery = (index: number) => {
    setInitialSlide(index)
    setOpened(true)
  }

  const screenshot = (image: string, index: number) => (
    <UnstyledButton
      className="project-image-button"
      onClick={() => openGallery(index)}
      aria-label={`Open ${title} screenshot ${index + 1}`}
    >
      <Image
        src={image}
        alt={`${title} interface, screenshot ${index + 1}`}
        h={230}
        fit="contain"
        loading="lazy"
      />
    </UnstyledButton>
  )

  return (
    <>
      <Card withBorder radius="lg" padding="xl" className="project-card">
        <Stack gap="lg">
          {hasImages ? (
            images.length === 1 ? (
              screenshot(images[0], 0)
            ) : (
              <Carousel withIndicators height={230} slideSize="100%" className="project-carousel">
                {images.map((image, index) => (
                  <Carousel.Slide key={image}>{screenshot(image, index)}</Carousel.Slide>
                ))}
              </Carousel>
            )
          ) : (
            <div className="project-placeholder" aria-hidden="true"><IconPhoto size={30} /></div>
          )}

          <Stack gap="sm">
            <Badge variant="light" w="fit-content">{category}</Badge>
            <Title order={3} size="h3">{title}</Title>
            <Text c="dimmed" lh={1.65}>{summary}</Text>
          </Stack>

          <div>
            <Button
              variant="subtle"
              size="compact-sm"
              px={0}
              onClick={toggleDetails}
              aria-expanded={detailsOpened}
              aria-controls={detailsId}
              rightSection={
                <IconChevronDown
                  size={16}
                  className="details-chevron"
                  data-opened={detailsOpened || undefined}
                />
              }
            >
              {detailsOpened ? 'Hide details' : 'More details'}
            </Button>
            <Collapse in={detailsOpened} id={detailsId}>
              <Stack gap="lg" mt="md">
                <div>
                  <Text size="xs" fw={700} tt="uppercase" c="dimmed" lts="0.06em">Key features</Text>
                  <Stack component="ul" gap={8} mt="xs" className="project-highlights">
                    {features.map((feature) => <Text component="li" key={feature} size="sm">{feature}</Text>)}
                  </Stack>
                </div>
                <div>
                  <Text size="xs" fw={700} tt="uppercase" c="dimmed" lts="0.06em">Technical implementation</Text>
                  <Stack component="ul" gap={8} mt="xs" className="project-highlights">
                    {technicalDetails.map((detail) => <Text component="li" key={detail} size="sm">{detail}</Text>)}
                  </Stack>
                </div>
              </Stack>
            </Collapse>
          </div>

          <Group gap="xs">
            {technologies.map((technology) => (
              <Badge key={technology} variant="outline" color="gray">{technology}</Badge>
            ))}
          </Group>

          {(siteUrl || githubUrl) && (
            <Group gap="sm" mt="auto">
              {siteUrl && (
                <Button
                  component="a"
                  href={siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="light"
                  rightSection={<IconExternalLink size={16} />}
                >
                  Live site
                </Button>
              )}
              {githubUrl && (
                <Button
                  component="a"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="default"
                  leftSection={<IconBrandGithub size={16} />}
                >
                  Source code
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
          size="min(1100px, 94vw)"
          title={`${title} gallery`}
          centered
          padding="md"
        >
          <Carousel withIndicators initialSlide={initialSlide} height="min(68vh, 680px)">
            {images.map((image, index) => (
              <Carousel.Slide key={image}>
                <Image
                  src={image}
                  alt={`${title} interface, enlarged screenshot ${index + 1}`}
                  h="min(68vh, 680px)"
                  fit="contain"
                />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Modal>
      )}
    </>
  )
}
