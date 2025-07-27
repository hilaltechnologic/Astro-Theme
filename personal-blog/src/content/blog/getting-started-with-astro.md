---
title: "Getting Started with Astro: A Modern Web Framework"
description: "Learn how to build fast, modern websites with Astro. This comprehensive guide covers everything from installation to deployment."
pubDate: 2024-01-15
heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop"
tags: ["astro", "web development", "tutorial"]
category: "Tutorials"
author: "John Doe"
readingTime: 8
---

# Getting Started with Astro: A Modern Web Framework

Astro is a modern web framework that allows you to build fast, content-focused websites. It's designed to be simple, performant, and developer-friendly. In this guide, we'll explore how to get started with Astro and build your first project.

## What is Astro?

Astro is a static site generator that focuses on content and performance. It allows you to use your favorite UI components and frameworks (React, Vue, Svelte, etc.) while generating static HTML for optimal performance.

### Key Features

- **Zero JavaScript by default**: Pages are rendered to static HTML
- **Component Islands**: Add interactivity only where needed
- **Multiple framework support**: Use React, Vue, Svelte, and more
- **Built-in optimizations**: Automatic image optimization, CSS bundling, and more
- **TypeScript support**: First-class TypeScript support out of the box

## Installation

Getting started with Astro is straightforward. You can create a new project using the following command:

```bash
npm create astro@latest my-astro-project
```

This will guide you through the setup process and create a new Astro project with the recommended configuration.

## Project Structure

A typical Astro project has the following structure:

```
my-astro-project/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── content/
├── public/
├── astro.config.mjs
└── package.json
```

### Key Directories

- **`src/pages/`**: Contains your pages and routes
- **`src/components/`**: Reusable UI components
- **`src/layouts/`**: Page layouts and templates
- **`src/content/`**: Content collections (blog posts, etc.)
- **`public/`**: Static assets (images, fonts, etc.)

## Creating Your First Page

In Astro, pages are created using `.astro` files in the `src/pages/` directory. Here's a simple example:

```astro
---
// Frontmatter goes here
const title = "Hello, Astro!";
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
    <p>Welcome to your first Astro page!</p>
  </body>
</html>
```

## Using Components

Astro components are similar to other frameworks but with some key differences. Here's an example:

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

You can then use this component in your pages:

```astro
---
import Header from '../components/Header.astro';
---

<html>
  <body>
    <Header title="My Astro Site" />
    <main>
      <p>Welcome to my site!</p>
    </main>
  </body>
</html>
```

## Content Collections

Astro's content collections allow you to manage structured content like blog posts. Here's how to set it up:

1. **Define your schema** in `src/content/config.ts`:

```typescript
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

2. **Create content** in `src/content/blog/`:

```markdown
---
title: "My First Blog Post"
description: "This is my first blog post using Astro"
pubDate: 2024-01-15
tags: ["astro", "blog"]
---

# My First Blog Post

This is the content of my first blog post...
```

3. **Display content** in your pages:

```astro
---
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
---

<ul>
  {posts.map((post) => (
    <li>
      <a href={`/blog/${post.slug}`}>{post.data.title}</a>
    </li>
  ))}
</ul>
```

## Styling

Astro supports multiple styling approaches:

### CSS Modules

```astro
---
import styles from './MyComponent.module.css';
---

<div class={styles.container}>
  <h1 class={styles.title}>Hello World</h1>
</div>
```

### Tailwind CSS

Astro has excellent Tailwind CSS integration:

```bash
npm install -D tailwindcss @tailwindcss/typography
npx tailwindcss init
```

### Scoped Styles

You can also use scoped styles directly in your components:

```astro
---
// Component logic here
---

<div class="container">
  <h1>Hello World</h1>
</div>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  h1 {
    color: #333;
    font-size: 2rem;
  }
</style>
```

## Deployment

Astro sites can be deployed to various platforms:

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages

Astro has built-in support for GitHub Pages deployment.

## Performance Benefits

One of Astro's biggest advantages is its performance. By default, Astro:

- Generates static HTML
- Eliminates unnecessary JavaScript
- Optimizes images and assets
- Provides excellent Core Web Vitals scores

## Conclusion

Astro is an excellent choice for building modern, performant websites. Its focus on content and performance makes it ideal for blogs, documentation sites, and marketing pages.

Whether you're a seasoned developer or just starting out, Astro provides a great developer experience with powerful features and excellent performance out of the box.

Start building with Astro today and experience the difference! 