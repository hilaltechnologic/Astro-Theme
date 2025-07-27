# Astro Personal Blog Theme

A modern, responsive personal blog theme built with Astro and Tailwind CSS. Perfect for developers, writers, and content creators who want a beautiful, fast, and customizable blog.

## ✨ Features

- **Modern Design**: Clean, professional design with dark mode support
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Astro for optimal performance
- **SEO Optimized**: Built-in SEO features and meta tags
- **Content Collections**: Easy blog post management with Astro's content collections
- **Search & Filter**: Built-in search and tag filtering for blog posts
- **Social Sharing**: Easy social media sharing for blog posts
- **Newsletter Signup**: Newsletter subscription form
- **Reading Time**: Automatic reading time calculation
- **Syntax Highlighting**: Beautiful code syntax highlighting
- **RSS Feed**: Automatic RSS feed generation
- **Sitemap**: Automatic sitemap generation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download this theme**
   ```bash
   git clone <repository-url>
   cd astro-personal-blog-theme
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
astro-personal-blog-theme/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Header.astro    # Navigation header
│   │   └── Footer.astro    # Site footer
│   ├── content/
│   │   ├── blog/           # Blog posts (markdown)
│   │   └── config.ts       # Content collection config
│   ├── layouts/            # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   └── pages/              # Astro pages
│       ├── index.astro     # Homepage
│       ├── about.astro     # About page
│       ├── contact.astro   # Contact page
│       └── blog/           # Blog pages
├── public/                 # Static assets
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
└── package.json
```

## 🎨 Customization

### Colors

The theme uses a custom color palette defined in `tailwind.config.mjs`. You can customize the colors by modifying the `primary` and `secondary` color objects:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
    900: '#0c4a6e',
  },
  secondary: {
    50: '#fdf4ff',
    100: '#fae8ff',
    // ... more shades
    900: '#701a75',
  },
}
```

### Typography

The theme uses Inter for body text, Merriweather for headings, and JetBrains Mono for code. You can change these in `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  serif: ['Merriweather', 'Georgia', 'serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Site Information

Update the following files with your information:

- `src/components/Header.astro` - Site title and navigation
- `src/components/Footer.astro` - Social links and contact info
- `src/pages/about.astro` - Personal information
- `src/pages/contact.astro` - Contact details
- `astro.config.mjs` - Site URL and meta information

### Blog Posts

Add new blog posts by creating markdown files in `src/content/blog/`. Each post should have frontmatter with:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
pubDate: 2024-01-15
heroImage: "https://example.com/image.jpg" # Optional
tags: ["tag1", "tag2"]
---

# Your content here
```

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with required fields
3. Write your content in Markdown
4. The post will automatically appear on your blog

### Content Collections

The theme uses Astro's content collections for type-safe content management. The schema is defined in `src/content/config.ts`:

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});
```

## 🔧 Configuration

### Astro Configuration

The main Astro configuration is in `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
```

### Tailwind Configuration

Customize the design system in `tailwind.config.mjs`:

```javascript
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { /* your colors */ },
      fontFamily: { /* your fonts */ },
      typography: { /* prose styles */ },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages

1. Update `astro.config.mjs`:
   ```javascript
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/your-repo-name',
   });
   ```

2. Set up GitHub Actions for automatic deployment

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro` - Run Astro CLI commands

## 🎯 Features in Detail

### Dark Mode

The theme includes a dark mode toggle that persists user preference in localStorage.

### Search & Filter

The blog page includes:
- Real-time search through post titles and content
- Tag-based filtering
- Responsive design for mobile and desktop

### Social Sharing

Blog posts include social sharing buttons for Twitter and LinkedIn.

### Newsletter Signup

The homepage and footer include newsletter signup forms (backend integration required).

### Reading Time

Automatic reading time calculation for blog posts using the `reading-time` package.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This theme is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Astro](https://astro.build) - The amazing static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Unsplash](https://unsplash.com) - Beautiful stock photos
- [Heroicons](https://heroicons.com) - Beautiful icons

## 📞 Support

If you have any questions or need help customizing this theme, please open an issue on GitHub.

---

**Happy blogging! 🚀** 