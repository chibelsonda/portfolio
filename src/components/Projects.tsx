import { Badge, Box, Button, Collapse, Container, Grid, Group, Image, Modal, Paper, Stack, Text, Title, UnstyledButton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { useId } from 'react'
import { ProjectCard } from './ProjectCard'

import euschool from '/images/projects/euschool/eu-school.jpeg'
import gridpbx from '/images/projects/gridpbx/gridpbx.png'
import hrImg1 from '/images/projects/hr/image-1.png'
import hrImg2 from '/images/projects/hr/image-2.png'
import payrollImg1 from '/images/projects/payroll/image-1.png'
import payrollImg2 from '/images/projects/payroll/image-2.png'
import payrollImg3 from '/images/projects/payroll/image-3.png'
import socialDiscovery from '/images/projects/social/social-discovery.png'
import socialFeed from '/images/projects/social/social-feed.png'
import socialLogin from '/images/projects/social/social-login.png'
import socialMessaging from '/images/projects/social/social-messaging.png'
import vertexAuthImg1 from '/images/projects/vertex-auth/image-1.png'
import vertexAuthImg2 from '/images/projects/vertex-auth/image-2.png'
import xsurflogImg1 from '/images/projects/xsurflog/image-1.png'
import xsurflogImg2 from '/images/projects/xsurflog/image-2.png'
import xsurflogImg3 from '/images/projects/xsurflog/image-3.png'

const featuredProjects = [
  {
    title: 'Ethical Brand Social Platform',
    category: 'Social platform modernization',
    summary: 'A full-stack social platform spanning community, content, realtime messaging, commerce, identity, moderation, and administration.',
    features: [
      'Personalized social feed with posts, stories, saved content, reactions, and discovery',
      'Community experiences for profiles, groups, pages, events, forums, blogs, jobs, and fundraisers',
      'Realtime direct and group messaging with notifications and presence-aware workflows',
      'Marketplace, offers, advertising, wallet, payment, and bank-transfer experiences',
      'Extensive administration for users, content, settings, feature controls, moderation, and platform health',
      'Account security including SSO, two-factor authentication, sessions, privacy controls, and social sign-in',
    ],
    technicalDetails: [
      'Vue 3 and TypeScript SPA using Vue Router, Pinia, Vite, Tailwind CSS, and typed API contracts',
      'Domain-first Laravel 12 API backed by MySQL with UUID-first public identifiers',
      'Redis queues and Laravel Reverb power asynchronous work, notifications, and realtime features',
      'Docker Compose development stack includes Nginx, PHP-FPM, MySQL, Redis, Reverb, and queue workers',
      'Migration commands, parity verification, and rollout runbooks support modernization from the legacy platform',
    ],
    technologies: ['Vue.js', 'TypeScript', 'Laravel', 'MySQL', 'Redis', 'Docker'],
    images: [socialFeed, socialMessaging, socialDiscovery, socialLogin],
  },
  {
    title: 'HR System',
    category: 'Business operations',
    summary: 'A full-stack platform for managing human-resources processes through a focused web interface and a relational backend.',
    features: [
      'Centralizes human-resources processes in a single web application',
      'Provides a focused interface for managing day-to-day HR information',
      'Keeps operational records in a structured relational database',
    ],
    technicalDetails: [
      'React frontend composed with Mantine UI components',
      'ASP.NET Core backend for application and business logic',
      'PostgreSQL persistence for HR data',
    ],
    technologies: ['React', 'Mantine', 'ASP.NET Core', 'PostgreSQL'],
    images: [hrImg1, hrImg2],
  },
  {
    title: 'Payroll System',
    category: 'Financial operations',
    summary: 'A payroll application designed to help organizations manage recurring payroll workflows in one maintainable system.',
    features: [
      'Centralizes recurring payroll workflows in one application',
      'Provides a browser-based interface for managing payroll information',
      'Maintains payroll records in a relational data store',
    ],
    technicalDetails: [
      'Vue.js frontend built with Vuetify components',
      'Laravel backend for payroll workflows and data access',
      'PostgreSQL database for persistent payroll records',
    ],
    technologies: ['Vue.js', 'Laravel', 'Vuetify', 'PostgreSQL'],
    images: [payrollImg1, payrollImg2, payrollImg3],
    githubUrl: 'https://github.com/chibelsonda/payroll',
  },
  {
    title: 'Vertex Auth',
    category: 'Identity & security',
    summary: 'A centralized authentication platform for Vertex Cybersecurity, providing a shared foundation for secure user access.',
    features: [
      'Centralized sign-in experience for Vertex Cybersecurity systems',
      'Secure user-management and authentication workflows',
      'Reusable identity foundation for connected applications',
    ],
    technicalDetails: [
      'Nuxt frontend for the authentication interface',
      'Go backend services for identity operations',
      'JWT-based access with user data stored in MySQL',
    ],
    technologies: ['Nuxt', 'Go', 'MySQL', 'JWT'],
    images: [vertexAuthImg1, vertexAuthImg2],
    siteUrl: 'https://auth.vertexcybersecurity.com.au/',
  },
  {
    title: 'XSurfLog',
    category: 'Cybersecurity',
    summary: 'A browser and endpoint security product that helps organizations reduce phishing exposure, monitor web activity, and protect company data.',
    features: [
      'Detects and blocks phishing, scam, and dangerous websites',
      'Records website activity for compliance reviews and incident investigation',
      'Helps prevent employees from sending company data to unsafe destinations',
      'Supports computers, laptops, tablets, and mobile devices',
      'Provides visibility into risky browsing behavior and employee security risk',
    ],
    technicalDetails: [
      'Available as a browser extension or installed endpoint application',
      'Supports both cloud-hosted and on-premises deployments',
      'PHP and MySQL backend with a JavaScript, Bootstrap, and jQuery interface',
    ],
    technologies: ['PHP', 'JavaScript', 'MySQL', 'Bootstrap'],
    images: [xsurflogImg1, xsurflogImg2, xsurflogImg3],
    siteUrl: 'https://xsurflog.com',
  },
]

const featuredProjectColumns = [
  featuredProjects.filter((_, index) => index % 2 === 0),
  featuredProjects.filter((_, index) => index % 2 === 1),
]

const additionalProjects = [
  {
    title: 'GridPBX Communication',
    summary: 'Cloud telephony management for voicemail, forwarding, recording, and business communications.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Linux'],
    features: ['Web-based administration for the communication platform', 'Voicemail management', 'Call forwarding configuration', 'Call-recording workflows'],
    technicalDetails: ['Laravel backend and Vue.js frontend', 'JWT authentication for user management and API access', 'MySQL database hosted in a Linux environment'],
    image: gridpbx,
  },
  {
    title: 'EU School',
    summary: 'Scheduling and administration for Japanese ESL students, teachers, rooms, and school staff.',
    technologies: ['Laravel', 'MySQL', 'AWS', 'jQuery'],
    features: ['Coordinates teacher, room, and student bookings', 'Supports scheduling for Japanese ESL students', 'Administrative dashboard for managing school operations'],
    technicalDetails: ['Laravel application backed by MySQL', 'jQuery and Bootstrap user interface', 'Deployed with AWS and Linux infrastructure'],
    image: euschool,
  },
  {
    title: 'Daily Time Record System',
    summary: 'Windows application for employee time-in, time-out, overtime, and operational reporting.',
    technologies: ['C#', '.NET', 'SQL Server', 'Crystal Reports'],
    features: ['Records employee time-in and time-out activity', 'Tracks employee overtime', 'Produces daily-time-record reports'],
    technicalDetails: ['Windows desktop application built with C# and .NET', 'SQL Server database for employee time records', 'Crystal Reports for printable reporting'],
  },
  {
    title: 'Supply Management System',
    summary: 'Inventory, supplier, and purchase-order workflows with reporting and Excel export.',
    technologies: ['C#', '.NET', 'MySQL', 'Entity Framework'],
    features: ['Tracks inventory and available supplies', 'Maintains supplier information', 'Manages purchase-order workflows', 'Exports operational data to Excel'],
    technicalDetails: ['C# and .NET desktop application', 'Entity Framework data access with MySQL', 'Crystal Reports for printable reporting'],
  },
  {
    title: 'Waterworks Billing System',
    summary: 'Billing and payment management for Rosario Waterworks, including operational reports.',
    technologies: ['C#', '.NET', 'MySQL', 'Crystal Reports'],
    features: ['Centralizes customer billing records', 'Records and manages customer payments', 'Generates billing and payment reports'],
    technicalDetails: ['C# and .NET desktop application', 'MySQL database for billing and payment data', 'Crystal Reports for printable documents'],
  },
  {
    title: 'College Enrollment System',
    summary: 'Enrollment, student records, and class-management workflows for college administrators.',
    technologies: ['C#', '.NET', 'MySQL', 'Excel'],
    features: ['Processes student enrollment', 'Maintains student information and academic records', 'Supports class-management workflows', 'Exports administrative data to Excel'],
    technicalDetails: ['C# and .NET desktop application', 'MySQL relational database', 'Crystal Reports for enrollment and student reporting'],
  },
  {
    title: 'College Library System',
    summary: 'Cataloging, borrowing, returns, student access, and library-card printing in a desktop application.',
    technologies: ['VB6', 'MySQL', 'Crystal Reports'],
    features: ['Indexes and catalogs library books', 'Tracks borrowing and return transactions', 'Provides student login', 'Prints student library cards'],
    technicalDetails: ['Windows desktop application built with VB6', 'MySQL database for catalog and transaction data', 'Crystal Reports for printable output'],
  },
]

const additionalProjectColumns = {
  tablet: [
    additionalProjects.filter((_, index) => index % 2 === 0),
    additionalProjects.filter((_, index) => index % 2 === 1),
  ],
  desktop: [
    additionalProjects.filter((_, index) => index % 3 === 0),
    additionalProjects.filter((_, index) => index % 3 === 1),
    additionalProjects.filter((_, index) => index % 3 === 2),
  ],
}

interface CompactProjectCardProps {
  title: string
  summary: string
  technologies: string[]
  features: string[]
  technicalDetails: string[]
  image?: string
}

function CompactProjectCard({ title, summary, technologies, features, technicalDetails, image }: CompactProjectCardProps) {
  const [opened, { toggle }] = useDisclosure(false)
  const [imageOpened, { open: openImage, close: closeImage }] = useDisclosure(false)
  const detailsId = useId()

  return (
    <>
      <Paper withBorder radius="lg" p="xl" className="compact-project">
        <Stack gap="md" h="100%">
          {image && (
            <UnstyledButton
              className="project-image-button compact-project-image"
              onClick={openImage}
              aria-label={`Open ${title} screenshot`}
            >
              <Image src={image} alt={`${title} interface`} h={170} fit="contain" loading="lazy" />
            </UnstyledButton>
          )}

          <div>
            <Title order={4} size="h4">{title}</Title>
            <Text c="dimmed" size="sm" mt="xs" lh={1.6}>{summary}</Text>
          </div>

          <div>
            <Button
              variant="subtle"
              size="compact-sm"
              px={0}
              onClick={toggle}
              aria-expanded={opened}
              aria-controls={detailsId}
              rightSection={
                <IconChevronDown
                  size={16}
                  className="details-chevron"
                  data-opened={opened || undefined}
                />
              }
            >
              {opened ? 'Hide details' : 'More details'}
            </Button>
            <Collapse in={opened} id={detailsId}>
              <Stack gap="lg" mt="md">
                <div>
                  <Text size="xs" fw={700} tt="uppercase" c="dimmed" lts="0.06em">Key features</Text>
                  <Stack component="ul" gap={7} mt="xs" className="project-highlights">
                    {features.map((feature) => <Text component="li" key={feature} size="sm">{feature}</Text>)}
                  </Stack>
                </div>
                <div>
                  <Text size="xs" fw={700} tt="uppercase" c="dimmed" lts="0.06em">Technical implementation</Text>
                  <Stack component="ul" gap={7} mt="xs" className="project-highlights">
                    {technicalDetails.map((detail) => <Text component="li" key={detail} size="sm">{detail}</Text>)}
                  </Stack>
                </div>
              </Stack>
            </Collapse>
          </div>

          <Group gap={6} mt="auto">
            {technologies.map((technology) => (
              <Badge key={technology} variant="light" color="gray">{technology}</Badge>
            ))}
          </Group>
        </Stack>
      </Paper>

      {image && (
        <Modal opened={imageOpened} onClose={closeImage} size="min(1100px, 94vw)" title={`${title} screenshot`} centered>
          <Image src={image} alt={`${title} interface, enlarged screenshot`} mah="72vh" fit="contain" />
        </Modal>
      )}
    </>
  )
}

export function Projects() {
  return (
    <section id="projects" className="projects-section">
      <Container size="xl" py={{ base: 56, md: 88 }}>
        <Title order={2} ta="center" className="section-title">Selected work</Title>
        <Text c="dimmed" size="lg" mt="sm" mb={42} ta="center" maw={720} mx="auto" lh={1.6}>
          Production-focused systems across business operations, financial workflows, communications, identity, and cybersecurity.
        </Text>

        <Stack gap="xl" hiddenFrom="md">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Stack>

        <Box visibleFrom="md">
          <Grid gutter="xl" align="flex-start">
            {featuredProjectColumns.map((projects, columnIndex) => (
              <Grid.Col key={columnIndex} span={6}>
                <Stack gap="xl">
                  {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </Stack>
              </Grid.Col>
            ))}
          </Grid>
        </Box>

        <Stack gap="lg" mt={{ base: 56, md: 80 }}>
          <div>
            <Title order={3} size="h2">Additional systems</Title>
            <Text c="dimmed" mt={6}>A broader view of the domains and technology generations I have worked across.</Text>
          </div>
          <Stack gap="lg" hiddenFrom="sm">
            {additionalProjects.map((project) => (
              <CompactProjectCard key={project.title} {...project} />
            ))}
          </Stack>

          <Box visibleFrom="sm" hiddenFrom="lg">
            <Grid gutter="lg" align="flex-start">
              {additionalProjectColumns.tablet.map((projects, columnIndex) => (
                <Grid.Col key={columnIndex} span={6}>
                  <Stack gap="lg">
                    {projects.map((project) => (
                      <CompactProjectCard key={project.title} {...project} />
                    ))}
                  </Stack>
                </Grid.Col>
              ))}
            </Grid>
          </Box>

          <Box visibleFrom="lg">
            <Grid gutter="lg" align="flex-start">
              {additionalProjectColumns.desktop.map((projects, columnIndex) => (
                <Grid.Col key={columnIndex} span={4}>
                  <Stack gap="lg">
                    {projects.map((project) => (
                      <CompactProjectCard key={project.title} {...project} />
                    ))}
                  </Stack>
                </Grid.Col>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </section>
  )
}
