import { Container, Title, Text, Grid } from '@mantine/core'
import { ProjectCard } from './ProjectCard'

import xsurflogImg1 from '/images/projects/xsurflog/image-1.png'
import xsurflogImg2 from '/images/projects/xsurflog/image-2.png'
import xsurflogImg3 from '/images/projects/xsurflog/image-3.png'

import vertexAuthImg1 from '/images/projects/vertex-auth/image-1.png'
import vertexAuthImg2 from '/images/projects/vertex-auth/image-2.png'

import euschool from '/images/projects/euschool/eu-school.jpeg'

import gridpbx from '/images/projects/gridpbx/gridpbx.png'

import payrollImg1 from '/images/projects/payroll/image-1.png'
import payrollImg2 from '/images/projects/payroll/image-2.png'
import payrollImg3 from '/images/projects/payroll/image-3.png'
import payrollImg4 from '/images/projects/payroll/image-4.png'
import payrollImg5 from '/images/projects/payroll/image-5.png'
import payrollImg6 from '/images/projects/payroll/image-6.png'

const projects = [
  {
    title: 'Payroll System',
    description: `
    Payroll System is a system that helps companies manage their payroll process.
    It is built with Vuejs frontend and Laravel backend, implementing PostgreSQL for database and Vuetify for UI.
    It is under development and not yet released.
    `,
    technologies: ['Vuejs', 'Laravel', 'Vuetify', 'PostgreSQL', 'Git'],
    images: [
      payrollImg1,
      payrollImg2,
      payrollImg3,
      payrollImg4,
      payrollImg5,
      payrollImg6,
    ],
    githubUrl: 'https://github.com/chibelsonda/payroll',
  },
  {
    title: 'GridPBX Communication',
    description: `
    GridPBX is a cloud-based telephony system that provides a complete suite of communication tools for businesses.
    It includes features such as voicemail, call forwarding, call recording, and more.
    It also includes a web interface for managing the system.
    It is built with Laravel backend and Vuejs frontend, implementing JWT authentication for secure user management and API access.
    `,
    technologies: ['PHP', 'Laravel', 'Vuejs', 'Vuetify', 'MySQL', 'Linux', 'Git'],
    images: [
      gridpbx,
    ],
    githubUrl: '',
  },
  {
    title: 'EU School',
    description: `A Web Site for Japanese ESL students. It books teacher, room, and student schedules. 
    It also has a dashboard for the school administrators to manage the school.`,
    technologies: ['Php', 'Laravel', 'MySQL', 'JQuery', 'Boostrap', 'AWS', 'HTML', 'CSS', 'Linux', 'Git'],
    images: [
      euschool,
    ],
    siteUrl: '',
    githubUrl: '',
  },
  {
    title: 'Vertex Auth',
    description: `A centralized authentication system for Vertex Cybersecurity. Built with Nuxtjs frontend and Golang backend.`,
    technologies: ['Vuejs', 'Nuxtjs', 'Golang', 'MySQL', 'Boostrap', 'HTML', 'CSS', 'JWT', 'Git'],
    images: [
      vertexAuthImg1,
      vertexAuthImg2,
    ],
    siteUrl: 'https://auth.vertexcybersecurity.com.au/',
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
    technologies: ['Php', 'Javascript', 'MySql', 'Bootstrap', 'JQuery', 'HTML', 'Git'],
    images: [
      xsurflogImg1,
      xsurflogImg2,
      xsurflogImg3,
    ],
    siteUrl: 'https://xsurflog.com',
    githubUrl: '',
  },
  {
    title: 'Daily Time Record System',
    description: `
    Daily Time Record System is a system that helps college employees manage their daily time record process.
    It includes features such as time in, time out, and overtime.
    It is built with C# .Net and MS SQL Server, implementing Crystal Report for reporting.
    It is a desktop application that runs on Windows. 
    `,
    technologies: ['C#', '.Net', 'MS SQL Server', 'Crystal Report', 'Windows Server'],
    images: [],
    githubUrl: '',
  },
  {
    title: 'Supply Management System',
    description: `
    Supply Management System is a system that helps college administrators manage their supply process.
    It includes features such as inventory management, supplier management, purchase order management, and more.
    It is built with C# .Net and MySQL, implementing Crystal Report for reporting and Excel for data export.
    It is a desktop application that runs on Windows. 
    `,
    technologies: ['C#', '.Net', 'Entity Framework', 'MySQL', 'Crystal Report', 'Excel', 'Linux'],
    images: [],
    githubUrl: '',
  },
  {
    title: 'Rosario Waterworks Billing System',
    description: `
    Rosario Waterworks Billing System is a system that helps Rosario Waterworks manage their billing process.
    It includes features such as billing, payment, and more.
    It is built with C# .Net and MySQL, implementing Crystal Report for reporting.
    It is a desktop application that runs on Windows. 
    `,
    technologies: ['C#', '.Net', 'MySQL', 'Crystal Report'],
    images: [],
    githubUrl: '',
  },
  {
    title: 'College Enrollment System',
    description: `
    College Enrollment System is a system that helps colleges manage their enrollment process.
    It includes features such as student enrollment, student management, student records, class management, and more.
    It is built with C# .Net and MySQL, implementing Crystal Report for reporting and Excel for data export.
    It is a desktop application that runs on Windows. 
    `,
    technologies: ['C#', '.Net', 'MySQL', 'Crystal Report', 'Excel', 'Linux'],
    images: [],
    githubUrl: '',
  },
  {
    title: 'College Library System',
    description: `
    College Library System is a desktop application that helps colleges manage their library process.
    It includes features such as borrowing, returning, indexing, and cataloging books, student login, printing library cards.
    It is built with VB6 and MySQL, implementing Crystal Report for reporting.
    It is a desktop application that runs on Windows. 
    `,
    technologies: ['VB6', 'MySQL', 'Crystal Report'],
    images: [],
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
      <Grid mx={{ sm: 'sm', md: 'xl' }} gutter="md" justify={projects.length <= 2 ? 'center' : 'flex-start'}>
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
