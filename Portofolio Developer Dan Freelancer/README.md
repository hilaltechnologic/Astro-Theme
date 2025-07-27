# Astro Portfolio Theme

A modern, responsive portfolio theme built with Astro for developers and freelancers. This theme features a clean design, dark mode support, and is optimized for performance and SEO.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark Mode**: Built-in dark/light mode toggle
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Astro for optimal performance
- **SEO Optimized**: Meta tags, structured data, and sitemap included
- **TypeScript Support**: Full TypeScript support for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Icon Support**: Lucide icons integration
- **Contact Form**: Ready-to-use contact form
- **Portfolio Showcase**: Filterable project gallery
- **Blog with MDX**: Rich blog system with MDX support for interactive content

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd astro-portfolio-theme
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📁 Project Structure

```
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Portfolio.astro
│   │   └── Contact.astro
│   ├── layouts/           # Page layouts
│   │   └── Layout.astro
│   ├── pages/             # Route pages
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── portfolio.astro
│   │   ├── contact.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   ├── content/           # Content collections
│   │   ├── config.ts
│   │   └── blog/          # MDX blog posts
│   └── layouts/           # Page layouts
│       ├── Layout.astro
│       └── BlogPost.astro
├── astro.config.mjs       # Astro configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Colors

The theme uses a custom color palette defined in `tailwind.config.mjs`:

- **Primary**: Blue shades for main actions and highlights
- **Secondary**: Gray shades for text and backgrounds
- **Accent**: Purple/pink shades for special elements

### Content

Update the following files to customize your content:

- `src/components/Hero.astro` - Hero section content
- `src/components/Services.astro` - Services offered
- `src/components/Portfolio.astro` - Project showcase
- `src/components/Contact.astro` - Contact information
- `src/pages/about.astro` - About page content

### Personal Information

Update these files with your information:

1. **Layout.astro**: Update meta description and footer
2. **Header.astro**: Change logo and navigation
3. **Contact.astro**: Update contact details and social links
4. **All pages**: Replace "Your Name" with your actual name

### Blog Posts

The theme includes a full MDX blog system:

1. **Create new posts**: Add `.mdx` files to `src/content/blog/`
2. **Frontmatter**: Include title, description, categories, tags, etc.
3. **MDX features**: Use React components and JavaScript in your posts
4. **Styling**: Posts use Tailwind Typography for beautiful formatting

Example blog post structure:

```mdx
---
title: "Your Blog Post"
description: "Post description"
pubDate: 2024-07-27
categories: ["Web Development"]
tags: ["astro", "mdx"]
author: "Your Name"
---

# Your Blog Post

Your content here...
```

### Images

Add your images to the `public/` directory:

- Profile photos: `public/profile.jpg`
- Project images: `public/projects/`
- Favicon: `public/favicon.svg`
- Open Graph image: `public/og-image.jpg`

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro        # Run Astro CLI commands
```

### Adding New Pages

1. Create a new `.astro` file in `src/pages/`
2. Import the Layout and Header components
3. Add your content following the existing structure

### Adding New Components

1. Create a new `.astro` file in `src/components/`
2. Export the component
3. Import and use in your pages

## 📱 Responsive Design

The theme is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is automatically detected based on user preference and can be toggled manually. The theme includes:

- Automatic system preference detection
- Manual toggle button in header
- Persistent preference storage
- Smooth transitions between modes

## ⚡ Performance

This theme is optimized for performance:

- **Astro**: Static site generation for fast loading
- **Image Optimization**: Built-in image optimization
- **CSS Optimization**: Purged unused styles
- **Lazy Loading**: Images and components load on demand
- **Minification**: All assets are minified in production

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data markup
- Sitemap generation
- Canonical URLs
- Robots.txt

## 📧 Contact Form

The contact form is ready to use. To make it functional:

1. **Email Service**: Integrate with services like:
   - Netlify Forms
   - Formspree
   - EmailJS
   - Custom backend

2. **Update the form handler** in `src/components/Contact.astro`

## 🚀 Deployment

### Netlify

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Connect your repository to Vercel
2. Framework preset: Astro
3. Build command: `npm run build`

### Other Platforms

The theme works with any static hosting service:
- GitHub Pages
- Surge
- Firebase Hosting
- AWS S3

## 📄 License

This theme is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you need help or have questions:

1. Check the [documentation](https://docs.astro.build)
2. Search existing [issues](https://github.com/your-repo/issues)
3. Create a new issue with details about your problem

## 🙏 Credits

- **Astro**: The web framework for content-driven websites
- **Tailwind CSS**: A utility-first CSS framework
- **Lucide**: Beautiful & consistent icon toolkit
- **Inter Font**: Modern font for better readability

---

**Made with ❤️ using Astro** 