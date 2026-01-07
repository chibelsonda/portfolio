import { Container, Title, Text, Grid } from '@mantine/core'
import { ProjectCard } from './ProjectCard'

import xsurflogImg1 from '../../public/images/projects/xsurflog/image-1.png'
import xsurflogImg2 from '../../public/images/projects/xsurflog/image-2.png'
import xsurflogImg3 from '../../public/images/projects/xsurflog/image-3.png'

import euschool from '../../public/images/projects/euschool/eu-school.jpeg'

const projects = [
  // {
  //   title: 'College Enrollment System',
  //   description: 'A comprehensive enrollment system built with C# .NET, featuring optimized large queries using stored procedures for improved performance and scalability.',
  //   technologies: ['C#', '.NET', 'SQL Server'],
  //   images: [
  //     '/projects/college-enrollment.jpg',
  //     '/projects/college-enrollment-2.jpg',
  //     '/projects/college-enrollment-3.jpg',
  //   ],
  //   siteUrl: 'https://example.com',
  // },
  // {
  //   title: 'Laravel + React API System',
  //   description: 'Full-stack application with Laravel backend and React frontend, implementing JWT authentication for secure user management and API access.',
  //   technologies: ['Laravel', 'React', 'JWT', 'MySQL'],
  //   images: [
  //     '/projects/laravel-react.jpg',
  //     '/projects/laravel-react-2.jpg',
  //   ],
  //   githubUrl: 'https://github.com/example/laravel-react',
  // },
  {
    title: 'EU School',
    description: `A Web Site for Japanese ESL students. It books teacher, room, and student schedules. 
    It also has a dashboard for the school administrators to manage the school.`,
    technologies: ['Php', 'Laravel', 'MySQL', 'JQuery', 'Boostrap', 'AWS', 'HTML', 'CSS', 'Linux'],
    images: [
      euschool,
    ],
    siteUrl: '',
    githubUrl: '',
  },
  {
    title: 'XSurfLog',
    description: `XSurfLog is a security tool that protects users while browsing the internet. 
    It works as a browser extension or installed app and helps prevent phishing attacks and dangerous websites.
    What XSurfLog does (in simple terms):
    Blocks fake and dangerous websites
    It detects and stops phishing and scam sites - even if someone clicks a bad link by mistake.
    Tracks website activity
    - It records which websites are visited so companies can check for security problems, follow rules, and investigate issues if something goes wrong.
    Prevents data leaks
    - It helps stop employees from accidentally or intentionally sending company data to unsafe places.
    Works everywhere
    - It can be used in the cloud or installed inside a company, and works on computers, laptops, tablets, and phones.
    Helps manage employee security risks
    It helps companies see risky behavior and improve security awareness.`,
    technologies: ['Php', 'Javascript', 'MySql', 'Bootstrap', 'JQuery', 'HTML'],
    images: [
        xsurflogImg1,
        xsurflogImg2,
        xsurflogImg3,
    ],
    siteUrl: 'https://xsurflog.com',
    githubUrl: '',
  },
]

export function Projects() {
  return (
    <Container fluid py="xl" id="projects">
      <Title order={2} mb="sm" style={{ textAlign: 'center' }}>
        Projects
      </Title>
      <Text c="dimmed" size="lg" mb="xl" style={{ textAlign: 'center' }}>
        Some of my work
      </Text>
      <Grid gutter="md" justify={projects.length <= 2 ? 'center' : 'flex-start'}>
        {projects.map((project, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              images={project.images}
              siteUrl={project.siteUrl}
              githubUrl={project.githubUrl}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  )
}
