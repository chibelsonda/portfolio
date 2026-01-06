# Developer Portfolio - Chicote Belsonda

A clean, modern developer portfolio built with React, TypeScript, and Mantine UI. This portfolio showcases projects, skills, and contact information in a professional and responsive design.

## 🚀 Features

- **Modern UI**: Built with Mantine v8+ components for a clean, professional look
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Toggle between light and dark themes
- **TypeScript**: Fully typed for better development experience
- **Fast Performance**: Built with Vite for optimal build times and HMR
- **No Backend**: Fully static site, ready to deploy anywhere

## 🛠️ Tech Stack

- **React** 19.2.0
- **TypeScript** 5.9.3
- **Vite** 7.2.4
- **Mantine** 8.3.11
- **Tabler Icons** 3.36.1

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory, ready to be deployed to any static hosting service.

## 📁 Project Structure

```
src/
├── components/
│   ├── AppHeader.tsx      # Header with navigation and theme toggle
│   ├── Section.tsx         # Reusable section wrapper component
│   ├── ProjectCard.tsx     # Project card component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   └── Contact.tsx         # Contact section
├── App.tsx                 # Main app component
├── main.tsx                # Application entry point
└── index.css               # Global styles
```

## 🎨 Components

### AppHeader
Header component with social media links (GitHub, LinkedIn), Download CV button, and dark/light mode toggle. Responsive design shows icons only on mobile devices.

### Section
Reusable wrapper component for consistent section styling with title and optional subtitle.

### ProjectCard
Card component for displaying project information with title, description, and technology badges.

### Sections
- **Hero**: Introduction section with name, role, and social links
- **About**: Personal introduction and background
- **Skills**: Technology stack displayed as badges
- **Projects**: Showcase of recent projects
- **Contact**: Contact information and social links

## 👨‍💻 Developer

**Chicote Belsonda**  
Full Stack Web Developer

### Skills
- PHP, Laravel
- React, Vue
- C#, .NET
- PostgreSQL, MySQL
- JavaScript

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Customization

To customize the portfolio for your own use:

1. Update developer information in:
   - `src/components/Hero.tsx` - Name and role
   - `src/components/About.tsx` - About section content
   - `src/components/Skills.tsx` - Skills array
   - `src/components/Projects.tsx` - Projects array
   - `src/components/Contact.tsx` - Contact information

2. Update social links in:
   - `src/components/AppHeader.tsx`
   - `src/components/Hero.tsx`
   - `src/components/Contact.tsx`

3. Update page title in `index.html`

## 📄 License

This project is open source and available under the MIT License.
