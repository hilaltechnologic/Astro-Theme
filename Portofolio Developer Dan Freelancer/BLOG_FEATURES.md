# Blog MDX Features Documentation

## Overview

The Astro Portfolio Theme now includes full MDX support for creating rich, interactive blog posts. MDX allows you to use React components and JavaScript expressions directly in your Markdown content.

## Features

### ✅ MDX Support
- Write blog posts using MDX (Markdown + JSX)
- Use React components within your content
- Embed interactive elements
- Syntax highlighting for code blocks
- Automatic table of contents generation

### ✅ Content Management
- Structured content with frontmatter
- Categories and tags support
- Reading time estimation
- Featured posts functionality
- Draft posts support

### ✅ SEO Optimized
- Automatic meta tags generation
- Open Graph and Twitter Cards
- Structured data markup
- Sitemap generation for blog posts

### ✅ Performance
- Static site generation
- Optimized images
- Lazy loading
- Minimal JavaScript

## File Structure

```
src/
├── content/
│   ├── config.ts          # Content collection configuration
│   └── blog/
│       ├── getting-started-with-astro.mdx
│       └── mastering-tailwind-css.mdx
├── layouts/
│   └── BlogPost.astro     # Blog post layout
└── pages/
    ├── blog/
    │   ├── index.astro    # Blog listing page
    │   └── [...slug].astro # Dynamic blog post pages
```

## Creating Blog Posts

### 1. Create a new MDX file

Create a new `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Your Blog Post Title"
description: "A brief description of your blog post"
excerpt: "A short excerpt that appears in the blog listing"
pubDate: 2024-07-27
categories: ["Web Development", "Tutorial"]
tags: ["astro", "web-development", "tutorial"]
author: "Your Name"
readingTime: "8 min read"
featured: true
---

# Your Blog Post Title

Your content goes here...

## Code Examples

```javascript
console.log("Hello, World!");
```

## Interactive Components

You can use React components in your MDX:

<MyComponent prop="value" />
```

### 2. Frontmatter Schema

The blog posts support the following frontmatter fields:

```typescript
{
  title: string;           // Required: Post title
  description: string;     // Required: Meta description
  excerpt?: string;        // Optional: Short excerpt for listings
  pubDate: Date;          // Required: Publication date
  updatedDate?: Date;     // Optional: Last updated date
  heroImage?: string;     // Optional: Hero image URL
  image?: string;         // Optional: Featured image URL
  categories: string[];   // Optional: Post categories
  tags: string[];         // Optional: Post tags
  author: string;         // Optional: Author name (defaults to "Your Name")
  readingTime?: string;   // Optional: Reading time estimate
  featured: boolean;      // Optional: Featured post flag
  draft: boolean;         // Optional: Draft post flag
}
```

## Blog Layout Features

### 1. Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly navigation

### 2. Typography
- Optimized typography with Tailwind Typography
- Proper heading hierarchy
- Readable line lengths
- Dark mode support

### 3. Code Highlighting
- Syntax highlighting with Prism.js
- Support for multiple languages
- Copy code functionality
- Dark/light theme support

### 4. Interactive Elements
- Social sharing buttons
- Category filtering
- Tag clouds
- Related posts

## Customization

### 1. Styling

Modify the blog layout in `src/layouts/BlogPost.astro`:

```astro
<article class="prose prose-lg dark:prose-invert max-w-none">
  <slot />
</article>
```

### 2. Components

Create custom components for your blog posts:

```astro
---
// src/components/CodeBlock.astro
const { code, language } = Astro.props;
---

<div class="code-block">
  <pre><code class={`language-${language}`}>{code}</code></pre>
</div>
```

### 3. Categories and Tags

Add new categories or tags by updating the frontmatter:

```mdx
---
categories: ["New Category", "Web Development"]
tags: ["new-tag", "astro", "mdx"]
---
```

## Advanced Features

### 1. Custom MDX Components

Create reusable components for your blog posts:

```jsx
// src/components/BlogComponents.jsx
export function Callout({ children, type = "info" }) {
  return (
    <div className={`callout callout-${type}`}>
      {children}
    </div>
  );
}

export function CodePen({ id }) {
  return (
    <iframe
      src={`https://codepen.io/embed/${id}`}
      height="400"
      style={{ width: '100%' }}
    />
  );
}
```

### 2. Interactive Elements

Add interactive elements to your blog posts:

```mdx
---
title: "Interactive Blog Post"
---

# Interactive Blog Post

<Callout type="warning">
  This is a warning callout!
</Callout>

<CodePen id="abc123" />
```

### 3. Image Optimization

Use optimized images in your blog posts:

```mdx
---
title: "Post with Images"
heroImage: "/images/hero.jpg"
---

![Hero Image](/images/hero.jpg)

<Image src="/images/content.jpg" alt="Content image" width={800} height={600} />
```

## SEO Features

### 1. Meta Tags

Blog posts automatically generate:

- Title tag
- Meta description
- Open Graph tags
- Twitter Card tags
- Canonical URL

### 2. Structured Data

Automatic JSON-LD structured data for blog posts:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Post Title",
  "author": {
    "@type": "Person",
    "name": "Author Name"
  },
  "datePublished": "2024-07-27",
  "dateModified": "2024-07-27"
}
```

### 3. Sitemap

Blog posts are automatically included in the sitemap:

```xml
<url>
  <loc>https://yoursite.com/blog/post-slug</loc>
  <lastmod>2024-07-27</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

## Performance Optimizations

### 1. Static Generation

All blog posts are statically generated at build time:

```bash
npm run build
```

### 2. Image Optimization

Images are automatically optimized:

- WebP format support
- Responsive images
- Lazy loading
- Blur placeholder

### 3. Code Splitting

JavaScript is only loaded when needed:

- No JavaScript for static content
- Component islands for interactive elements
- Minimal bundle size

## Deployment

### 1. Build Process

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build
npm run preview
```

### 2. Deployment Platforms

The blog works with all major deployment platforms:

- **Vercel**: Automatic deployment
- **Netlify**: Git-based deployment
- **GitHub Pages**: Static hosting
- **AWS S3**: Manual deployment

### 3. Environment Variables

Set up environment variables for production:

```env
SITE_URL=https://yoursite.com
PUBLIC_SITE_URL=https://yoursite.com
```

## Analytics and Tracking

### 1. Google Analytics

Add Google Analytics to track blog performance:

```astro
---
// In your layout
---

<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Reading Time Tracking

Track reading time for better analytics:

```javascript
// Track reading time
const trackReadingTime = () => {
  const article = document.querySelector('article');
  const words = article.textContent.split(' ').length;
  const readingTime = Math.ceil(words / 200); // 200 words per minute
  
  // Send to analytics
  gtag('event', 'reading_time', {
    value: readingTime,
    post_title: document.title
  });
};
```

## Troubleshooting

### 1. Common Issues

**MDX not rendering**: Check that `@astrojs/mdx` is installed and configured.

**Images not loading**: Ensure images are in the `public/` directory.

**Styling issues**: Verify Tailwind CSS is properly configured.

### 2. Debug Mode

Enable debug mode for development:

```javascript
// astro.config.mjs
export default defineConfig({
  vite: {
    logLevel: 'info'
  }
});
```

## Best Practices

### 1. Content Organization

- Use descriptive filenames
- Organize posts by category
- Use consistent frontmatter
- Include proper meta descriptions

### 2. Performance

- Optimize images before uploading
- Use appropriate image formats
- Minimize external dependencies
- Test on multiple devices

### 3. SEO

- Write descriptive titles
- Include relevant keywords
- Use proper heading structure
- Add alt text to images

### 4. Accessibility

- Use semantic HTML
- Include proper ARIA labels
- Ensure keyboard navigation
- Test with screen readers

## Future Enhancements

### Planned Features

- [ ] Comment system integration
- [ ] Newsletter subscription
- [ ] Related posts algorithm
- [ ] Search functionality
- [ ] Reading progress indicator
- [ ] Social media preview customization
- [ ] RSS feed generation
- [ ] Email newsletter integration

### Community Contributions

We welcome contributions to improve the blog features:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Support

For support with the blog features:

1. Check the documentation
2. Search existing issues
3. Create a new issue
4. Join our community

---

*This documentation is part of the Astro Portfolio Theme. For more information, visit the main documentation.* 