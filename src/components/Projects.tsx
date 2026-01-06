import { Section } from './Section'
import { Grid } from '@mantine/core'
import { ProjectCard } from './ProjectCard'

const projects = [
  {
    title: 'College Enrollment System',
    description: 'A comprehensive enrollment system built with C# .NET, featuring optimized large queries using stored procedures for improved performance and scalability.',
    technologies: ['C#', '.NET', 'SQL Server'],
  },
  {
    title: 'Laravel + React API System',
    description: 'Full-stack application with Laravel backend and React frontend, implementing JWT authentication for secure user management and API access.',
    technologies: ['Laravel', 'React', 'JWT', 'MySQL'],
  },
  {
    title: 'Task / Todo Management System',
    description: 'A modern task management application that helps users organize and track their daily tasks efficiently with an intuitive user interface.',
    technologies: ['React', 'TypeScript', 'PostgreSQL'],
  },
]

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Some of my recent work">
      <Grid gutter="md">
        {projects.map((project, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
            <ProjectCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  )
}
