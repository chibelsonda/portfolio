import { Section } from './Section'
import { Grid } from '@mantine/core'
import { ProjectCard } from './ProjectCard'

import xsurflogImg1 from '../../public/images/projects/xsurflog/image-1.png'
import xsurflogImg2 from '../../public/images/projects/xsurflog/image-2.png'
import xsurflogImg3 from '../../public/images/projects/xsurflog/image-3.png'

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
  // {
  //   title: 'Task / Todo Management System',
  //   description: 'A modern task management application that helps users organize and track their daily tasks efficiently with an intuitive user interface.',
  //   technologies: ['React', 'TypeScript', 'PostgreSQL'],
  //   images: [
  //     '/projects/todo-system.jpg',
  //   ],
  // },
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
  },
]

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Some of my recent work">
      <Grid gutter="md">
        {projects.map((project, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 6 }}>
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
    </Section>
  )
}
