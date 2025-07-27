# Customization Guide

This guide will help you customize the Astro Personal Blog Theme to match your brand and preferences.

## 🎨 Color Customization

### Primary Colors

The theme uses a blue-based primary color scheme. To change it, edit `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',   // Lightest
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Main color
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',  // Darkest
  },
}
```

### Popular Color Schemes

#### Purple Theme
```javascript
primary: {
  50: '#faf5ff',
  100: '#f3e8ff',
  200: '#e9d5ff',
  300: '#d8b4fe',
  400: '#c084fc',
  500: '#a855f7',
  600: '#9333ea',
  700: '#7c3aed',
  800: '#6b21a8',
  900: '#581c87',
}
```

#### Green Theme
```javascript
primary: {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
}
```

#### Orange Theme
```javascript
primary: {
  50: '#fff7ed',
  100: '#ffedd5',
  200: '#fed7aa',
  300: '#fdba74',
  400: '#fb923c',
  500: '#f97316',
  600: '#ea580c',
  700: '#c2410c',
  800: '#9a3412',
  900: '#7c2d12',
}
```

## 🔤 Typography Customization

### Font Families

Change fonts in `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  serif: ['Merriweather', 'Georgia', 'serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

### Popular Font Combinations

#### Modern & Clean
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  serif: ['Playfair Display', 'Georgia', 'serif'],
  mono: ['Fira Code', 'monospace'],
}
```

#### Professional
```javascript
fontFamily: {
  sans: ['Open Sans', 'system-ui', 'sans-serif'],
  serif: ['Lora', 'Georgia', 'serif'],
  mono: ['Source Code Pro', 'monospace'],
}
```

#### Creative
```javascript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
  serif: ['Crimson Text', 'Georgia', 'serif'],
  mono: ['Space Mono', 'monospace'],
}
```

## 🏠 Site Information

### Update Site Title and Description

Edit `src/components/Header.astro`:
```astro
<a href="/" class="text-2xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
  Your Blog Name
</a>
```

### Update Meta Information

Edit `src/layouts/BaseLayout.astro`:
```astro
<meta property="og:site_name" content="Your Blog Name" />
<meta name="twitter:site" content="@yourusername" />
```

### Update Footer Information

Edit `src/components/Footer.astro`:
```astro
<h3 class="text-2xl font-bold mb-4">Your Blog Name</h3>
<p class="text-gray-400 mb-6 max-w-md">
  Your blog description here.
</p>
```

## 🔗 Social Links

### Update Social Media Links

In `src/components/Footer.astro`, update the social links:

```astro
<a href="https://twitter.com/yourusername" class="text-gray-400 hover:text-white transition-colors">
  <!-- Twitter icon -->
</a>
<a href="https://github.com/yourusername" class="text-gray-400 hover:text-white transition-colors">
  <!-- GitHub icon -->
</a>
<a href="https://linkedin.com/in/yourusername" class="text-gray-400 hover:text-white transition-colors">
  <!-- LinkedIn icon -->
</a>
<a href="mailto:your@email.com" class="text-gray-400 hover:text-white transition-colors">
  <!-- Email icon -->
</a>
```

## 📄 Page Content

### About Page

Edit `src/pages/about.astro` to add your personal information:

```astro
<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Who I Am</h2>
<p class="text-lg leading-relaxed mb-6">
  Your personal story and background here.
</p>
```

### Contact Page

Edit `src/pages/contact.astro` to update contact information:

```astro
<p class="text-gray-600 dark:text-gray-300 mb-2">your@email.com</p>
<p class="text-gray-600 dark:text-gray-300 mb-2">@yourusername</p>
<p class="text-gray-600 dark:text-gray-300 mb-2">linkedin.com/in/yourusername</p>
```

## 🎯 Navigation

### Add/Remove Menu Items

Edit `src/components/Header.astro` to modify navigation:

```astro
<nav class="hidden md:flex items-center space-x-8">
  <a href="/" class="...">Home</a>
  <a href="/blog" class="...">Blog</a>
  <a href="/about" class="...">About</a>
  <a href="/contact" class="...">Contact</a>
  <!-- Add new items here -->
</nav>
```

## 📝 Blog Post Styling

### Customize Blog Post Layout

Edit `src/layouts/BlogPost.astro` to modify:

- Header styling
- Content typography
- Social sharing buttons
- Reading time display

### Prose Styling

Customize the prose styles in `tailwind.config.mjs`:

```javascript
typography: {
  DEFAULT: {
    css: {
      maxWidth: 'none',
      color: '#374151',
      a: {
        color: '#0ea5e9',
        '&:hover': {
          color: '#0284c7',
        },
      },
      // Add more customizations here
    },
  },
}
```

## 🖼️ Images and Assets

### Replace Placeholder Images

1. Add your images to `public/` directory
2. Update image references in components
3. Optimize images for web (recommended: WebP format)

### Favicon

Replace `public/favicon.svg` with your own icon.

## 🎨 Advanced Customization

### Custom Components

Create new components in `src/components/`:

```astro
---
// src/components/CustomComponent.astro
const { title } = Astro.props;
---

<div class="custom-component">
  <h2>{title}</h2>
  <slot />
</div>
```

### Custom Layouts

Create new layouts in `src/layouts/`:

```astro
---
// src/components/CustomLayout.astro
import BaseLayout from './BaseLayout.astro';
---

<BaseLayout title="Custom Page">
  <div class="custom-layout">
    <slot />
  </div>
</BaseLayout>
```

### Custom Pages

Create new pages in `src/pages/`:

```astro
---
// src/pages/custom-page.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<BaseLayout title="Custom Page">
  <Header />
  <main>
    <h1>Custom Page Content</h1>
  </main>
  <Footer />
</BaseLayout>
```

## 🔧 Configuration Files

### Astro Configuration

Edit `astro.config.mjs` for site-wide settings:

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
      theme: 'github-dark', // Change code theme
      wrap: true
    }
  }
});
```

### Tailwind Configuration

Edit `tailwind.config.mjs` for styling customization:

```javascript
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Your customizations here
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
```

## 🚀 Performance Optimization

### Image Optimization

1. Use WebP format for images
2. Compress images before adding to `public/`
3. Consider using a CDN for images

### Code Splitting

The theme automatically optimizes:
- CSS purging (unused styles removed)
- JavaScript bundling
- Image optimization
- Font loading

## 🔍 SEO Customization

### Meta Tags

Edit `src/layouts/BaseLayout.astro` to customize meta tags:

```astro
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
```

### Structured Data

Add structured data for better SEO in your layouts.

## 🎯 Testing Your Changes

### Development

1. Run `npm run dev` to start development server
2. Open `http://localhost:4321` in your browser
3. Make changes and see them live

### Production Build

1. Run `npm run build` to create production build
2. Run `npm run preview` to preview production build
3. Test all pages and functionality

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)

## 🆘 Getting Help

If you need help with customization:

1. Check the [Astro documentation](https://docs.astro.build/)
2. Review the [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Open an issue on GitHub
4. Contact support

---

**Happy customizing! 🎨** 