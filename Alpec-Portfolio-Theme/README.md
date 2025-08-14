# Alpec Portfolio Theme

A modern and futuristic portfolio theme built with **Astro Framework** and **Tailwind CSS**. This theme features cutting-edge design elements, smooth animations, interactive components, and a complete portfolio showcase perfect for developers and designers.

## Features

- **Built with Astro** - Fast, modern static site generator
- **Futuristic Design** - Modern UI with neon accents and glassmorphism effects
- **Fully Responsive** - Optimized for all devices and screen sizes
- **Lightning Fast** - Optimized performance with Astro's static generation
- **Smooth Animations** - CSS animations and scroll-triggered transitions
- **Smooth Scroll Navigation** - Seamless navigation between sections
- **SEO Optimized** - Meta tags, Open Graph, and structured data
- **Interactive Elements** - Custom cursor effects and hover animations
- **Background Effects** - Floating particles and animated backgrounds
- **Modern Color Palette** - Cyan, purple, green, and pink accents
- **Interactive Components** - Project filtering, animated progress bars, contact forms
- **Professional Content** - Complete portfolio sections with realistic data

## Design Elements

- **Dark Theme** with gradient backgrounds
- **Glassmorphism** effects for modern UI elements
- **Cyber Borders** with gradient outlines
- **Floating Particles** for dynamic backgrounds
- **Gradient Text** effects for headings
- **Smooth Hover** effects on interactive elements
- **Mobile-First** responsive design
- **Animated Progress Bars** for skills showcase
- **Interactive Timeline** for career journey
- **Project Cards** with filtering capabilities

##  Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download** this theme
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:4321`

### Build for Production

```bash
npm run build
```

## Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── projects/           # Project placeholder images
├── src/
│   ├── components/
│   │   ├── Header.astro        # Navigation with mobile menu
│   │   ├── Hero.astro          # Hero section with CTA
│   │   ├── About.astro         # Interactive timeline & personal info
│   │   ├── Projects.astro      # Project gallery with filtering
│   │   ├── ProjectCard.astro   # Individual project cards
│   │   ├── Skills.astro        # Animated skills & tech stack
│   │   ├── ContactForm.astro   # Contact form with validation
│   │   └── Footer.astro        # Footer with social links
│   ├── data/
│   │   └── projects.ts         # Project data structure
│   ├── layouts/
│   │   └── Layout.astro        # Main layout with SEO
│   ├── pages/
│   │   └── index.astro         # Complete homepage
│   └── styles/
│       └── global.css          # Global styles and animations
├── astro.config.mjs            # Astro configuration
├── tailwind.config.mjs         # Tailwind CSS with custom theme
├── tsconfig.json               # TypeScript configuration
└── package.json
```

## Complete Sections

### 1. Hero Section
- **Animated Introduction** with gradient text effects
- **Professional Tagline** and description
- **Technology Tags** (React, Node.js, TypeScript, Design)
- **Call-to-Action Buttons** (View My Work, Get In Touch)
- **Scroll Down Indicator** with smooth animation

### 2. About Section
- **Personal Information Card** with avatar and contact details
- **Interactive Career Timeline** with 4 professional milestones
- **Professional Journey** from 2016-Present
- **Contact Information** (Location, Email, Availability)
- **Download CV Button** with modern styling
- **Animated Statistics** (50 Projects, 25 Clients, 3 Years Experience, 15 Technologies)
- **Responsive Two-Column Layout**

### 3. Projects Section
- **6 Sample Projects** with realistic data and descriptions
- **Interactive Filtering** by category (All, Web, Mobile, Design, Full-Stack)
- **Project Cards** with hover effects and glassmorphism
- **Technology Tags** for each project
- **Live Demo & Source Links** with external link handling
- **Featured Project Badges** and category indicators
- **Load More Projects** functionality
- **Project Statistics** display

### 4. ⚡ Skills Section
- **Technical Proficiency** with 6 animated progress bars
- **Professional Skills** showcasing soft skills
- **Technology Stack** with 12 interactive technology cards
- **Skill Percentages** ranging from 75%-95%
- **Technology Categorization** (Frontend, Backend, Database, Cloud, DevOps, Design)
- **Certifications & Achievements** with 3 professional certifications
- **Hover Effects** and smooth animations
- **Responsive Grid Layouts**

### 5. Contact Section
- **Contact Form** with real-time validation
- **Form Fields** (Name, Email, Subject, Message)
- **Contact Information** with icons (Email, Phone, Location)
- **Social Media Links** (GitHub, LinkedIn, Twitter)
- **Form Submission** with loading states and feedback
- **Glassmorphism Styling** with cyber borders
- **Accessibility Features** (ARIA labels, focus management)

### 6. Mobile Menu
- **Animated Hamburger Icon** with smooth transformation
- **Full-Screen Mobile Menu** with backdrop blur
- **Touch Gesture Support** for intuitive navigation
- **Staggered Animations** for menu items
- **Multiple Close Methods** (button, backdrop, escape key)

## Technologies Used

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Lucide Icons](https://lucide.dev/)** - Modern icon library
- **[Google Fonts](https://fonts.google.com/)** - Web fonts (Inter, JetBrains Mono)

## Customization

### Colors

The theme uses a futuristic color palette defined in `tailwind.config.mjs`:

- **Primary**: Blue shades for main elements
- **Accent Cyan**: `#00ffff` for highlights and progress bars
- **Accent Purple**: `#8b5cf6` for gradients and buttons
- **Accent Green**: `#10b981` for success states and skills
- **Accent Pink**: `#ec4899` for special elements and accents
- **Dark Shades**: Multiple dark tones for backgrounds and cards

### Typography

- **Primary Font**: Inter (Google Fonts) - Clean, modern sans-serif
- **Monospace Font**: JetBrains Mono for code elements and technical content

### Animations

- **Scroll-Triggered Animations** - Elements animate when they come into view
- **Progress Bar Animations** - Skills bars animate with smooth width transitions
- **Counter Animations** - Statistics count up from 0 to target values
- **Hover Effects** - Interactive elements with scale and glow effects
- **Mobile Menu Animations** - Smooth slide-in/out with staggered item animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customizing Content

### Personal Information

Edit the following files to customize with your information:

1. **`src/components/Hero.astro`** - Update name, title, description, and social links
2. **`src/components/About.astro`** - Update personal info, timeline, and contact details
3. **`src/components/Skills.astro`** - Update skills, percentages, and certifications
4. **`src/data/projects.ts`** - Add your real projects with descriptions and links
5. **`src/components/ContactForm.astro`** - Update contact information
6. **`src/layouts/Layout.astro`** - Update meta tags and site information

### Adding New Projects

Edit `src/data/projects.ts` to add your projects:

```typescript
{
  id: 7,
  title: "Your Project Name",
  description: "Project description...",
  image: "/images/projects/your-project.jpg",
  category: "Web", // or "Mobile", "Design", "Full-Stack"
  featured: true, // or false
  technologies: ["React", "Node.js", "MongoDB"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/yourusername/project"
}
```

### Updating Skills

Edit `src/components/Skills.astro` to update your skills and percentages:

```html
<div class="skill-item">
  <div class="flex justify-between items-center mb-2">
    <span class="text-white font-medium">Your Skill</span>
    <span class="text-accent-cyan text-sm font-medium">90%</span>
  </div>
  <div class="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
    <div class="skill-bar h-full bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full" data-width="90"></div>
  </div>
</div>
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and use it in `src/pages/index.astro`
3. Add navigation link in `src/components/Header.astro`

### Styling

- **Global styles**: `src/styles/global.css`
- **Tailwind config**: `tailwind.config.mjs`
- **Component styles**: Individual `.astro` files

##  Deployment

This theme can be deployed to any static hosting service:

- **[Netlify](https://netlify.com/)**
- **[Vercel](https://vercel.com/)**
- **[GitHub Pages](https://pages.github.com/)**
- **[Cloudflare Pages](https://pages.cloudflare.com/)**

### Build Command
```bash
npm run build
```

### Output Directory
```
dist/
```

## Key Features Highlights

- **5 Complete Sections** - Hero, About, Projects, Skills, Contact
- **Professional Timeline** - 4 career milestones with detailed descriptions
- **18 Technical & Soft Skills** - With animated progress bars
- **12 Technology Cards** - Interactive showcase with hover effects
- **3 Professional Certifications** - AWS, React, Full-Stack certifications
- **6 Sample Projects** - With filtering and detailed information
- **Animated Statistics** - Counters for projects, clients, experience
- **Modern UI/UX** - Glassmorphism, cyber borders, gradient effects
- **Mobile Responsive** - Perfect on all devices and screen sizes
- **SEO Optimized** - Complete meta tags and structured data

## License

MIT License - feel free to use this theme for personal and commercial projects.

## Contributing

Contributions, issues, and feature requests are welcome!

## Support

If you have any questions or need help customizing this theme, feel free to reach out.

---

**Built with ❤️ using Astro and Tailwind CSS**

** FULLY COMPLETE AND READY FOR DEPLOYMENT!** 
