---
title: "Getting Started with Astro: A Modern Web Framework"
description: "Learn how to build fast, modern websites with Astro - a web framework designed for content-driven websites"
pubDate: 2024-01-20
author: "Your Name"
tags: ["astro", "web-development", "tutorial"]
featured: true
readingTime: 8
---

# Getting Started with Astro: A Modern Web Framework

Astro is a modern web framework that's gaining popularity for its unique approach to building websites. In this post, I'll introduce you to Astro and show you how to get started with it.

## What is Astro?

Astro is a web framework designed for content-driven websites. It's built on the principle of **"zero JavaScript by default"** - meaning your site loads with minimal JavaScript, resulting in faster performance and better user experience.

### Key Features

- **Islands Architecture**: Only load JavaScript when needed
- **Multi-framework Support**: Use React, Vue, Svelte, and more
- **Built-in Performance**: Automatic optimizations out of the box
- **Content Collections**: Type-safe content management
- **Static Site Generation**: Perfect for blogs and documentation

## Why Choose Astro?

### Performance First
Astro prioritizes performance by shipping zero JavaScript to the browser by default. This means your sites load faster and provide a better user experience.

### Developer Experience
Astro provides an excellent developer experience with:
- Hot module replacement
- TypeScript support
- Built-in integrations
- Intuitive file-based routing

### Flexibility
You can use your favorite UI frameworks (React, Vue, Svelte, etc.) or stick with vanilla HTML, CSS, and JavaScript.

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm, yarn, or pnpm

### Installation

Create a new Astro project:

```bash
npm create astro@latest my-astro-site
```

Follow the prompts to set up your project. You can choose from several starter templates or start with a minimal setup.

### Project Structure

After installation, your project will have this structure:

```
my-astro-site/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── content/
├── public/
├── astro.config.mjs
└── package.json
```

### Creating Your First Page

Create a new file at `src/pages/index.astro`:

```astro
---
// This is the frontmatter section
const title = "Welcome to My Astro Site";
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>This is my first Astro page!</p>
  </body>
</html>
```

### Adding Components

Create reusable components in the `src/components/` directory:

```astro
---
// src/components/Header.astro
const { title } = Astro.props;
---

<header>
  <h1>{title}</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/blog">Blog</a>
  </nav>
</header>
```

Use the component in your pages:

```astro
---
import Header from '../components/Header.astro';
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My Astro Site</title>
  </head>
  <body>
    <Header title="My Astro Site" />
    <main>
      <p>Welcome to my site!</p>
    </main>
  </body>
</html>
```

## Working with Content

### Markdown Pages

Astro has built-in support for Markdown. Create `.md` files in your `src/pages/` directory:

```markdown
---
title: "About Us"
description: "Learn more about our company"
---

# About Us

This is an **About** page written in Markdown.

## Our Mission

We strive to create amazing web experiences.
```

### Content Collections

For larger sites, use content collections for type-safe content management:

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  'blog': blog,
};
```

## Styling Your Site

### CSS Support

Astro supports various styling approaches:

**Global CSS:**
```css
/* src/styles/global.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
```

**Component-scoped CSS:**
```astro
---
// Component with scoped styles
---

<div class="card">
  <h2>Card Title</h2>
  <p>Card content</p>
</div>

<style>
  .card {
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 8px;
  }
</style>
```

### CSS Frameworks

Astro integrates with popular CSS frameworks:

```bash
# Install Tailwind CSS
npx astro add tailwind
```

## Deployment

Astro sites can be deployed to various platforms:

### Netlify
```bash
npm run build
```

### Vercel
```bash
npm run build
```

### GitHub Pages
```bash
npm run build
```

## Best Practices

### 1. Use Islands Architecture
Only add JavaScript when necessary. Keep your site fast by default.

### 2. Optimize Images
Use Astro's image optimization:

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my-image.jpg';
---

<Image src={myImage} alt="Description" />
```

### 3. Leverage Content Collections
Use content collections for type-safe content management and better organization.

### 4. Implement SEO
Add proper meta tags and structured data:

```astro
---
const title = "Page Title";
const description = "Page description";
---

<html lang="en">
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
  </head>
  <body>
    <!-- Content -->
  </body>
</html>
```

## Conclusion

Astro is an excellent choice for building modern, performant websites. Its unique approach to JavaScript delivery and excellent developer experience make it a compelling option for content-driven sites.

Whether you're building a blog, documentation site, or marketing page, Astro provides the tools and flexibility you need to create amazing web experiences.

### Next Steps

- Explore the [official Astro documentation](https://docs.astro.build/)
- Check out the [Astro integrations](https://astro.build/integrations/)
- Join the [Astro community](https://astro.build/community/)

---

*Have you tried Astro? What's your experience with it? I'd love to hear your thoughts in the comments!* 