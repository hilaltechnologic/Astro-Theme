# Demo Content Guide

This guide explains the demo content included with the Astro Personal Blog Theme and how to customize it.

## 📝 Sample Blog Posts

The theme includes two sample blog posts to demonstrate the features:

### 1. Getting Started with Astro
- **File**: `src/content/blog/getting-started-with-astro.md`
- **Topics**: Web development, Astro framework, tutorials
- **Features Demonstrated**:
  - Code syntax highlighting
  - Long-form content
  - Multiple headings and sections
  - Code blocks with different languages
  - Lists and formatting

### 2. Why I Love Tailwind CSS
- **File**: `src/content/blog/why-i-love-tailwind-css.md`
- **Topics**: CSS, Tailwind, web design, frontend
- **Features Demonstrated**:
  - Personal opinion pieces
  - Technical content
  - Code examples
  - Best practices
  - Conclusion sections

## 🎨 Sample Images

The demo posts use images from Unsplash:

- **Astro Post**: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop`
- **Tailwind Post**: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop`

## 📄 Sample Pages

### Homepage (`src/pages/index.astro`)
- Hero section with call-to-action buttons
- Featured posts section
- About section with placeholder content
- Newsletter signup section

### About Page (`src/pages/about.astro`)
- Personal introduction
- Skills and expertise section
- Experience timeline
- Contact call-to-action

### Contact Page (`src/pages/contact.astro`)
- Contact form
- Social media links
- FAQ section
- Contact information

## 🔧 Customization Instructions

### Replace Demo Content

1. **Blog Posts**:
   - Delete or replace files in `src/content/blog/`
   - Update frontmatter with your information
   - Replace images with your own

2. **Page Content**:
   - Edit `src/pages/index.astro` for homepage
   - Edit `src/pages/about.astro` for about page
   - Edit `src/pages/contact.astro` for contact page

3. **Site Information**:
   - Update `src/components/Header.astro` for site title
   - Update `src/components/Footer.astro` for social links
   - Update `astro.config.mjs` for site URL

### Add Your Own Content

1. **New Blog Posts**:
   ```bash
   # Create new post
   touch src/content/blog/your-post-title.md
   ```

2. **New Pages**:
   ```bash
   # Create new page
   touch src/pages/your-page.astro
   ```

3. **New Components**:
   ```bash
   # Create new component
   touch src/components/YourComponent.astro
   ```

## 🖼️ Image Guidelines

### Recommended Image Sizes

- **Hero Images**: 1200x600px (16:9 ratio)
- **Blog Post Images**: 800x400px (2:1 ratio)
- **Profile Images**: 400x400px (1:1 ratio)
- **Favicon**: 32x32px or 64x64px

### Image Formats

- **WebP**: Best for web (smaller file size)
- **JPEG**: Good for photos
- **PNG**: Good for graphics with transparency
- **SVG**: Best for icons and logos

### Image Optimization

1. **Compress images** before adding to `public/`
2. **Use descriptive filenames** (e.g., `astro-tutorial-hero.jpg`)
3. **Add alt text** for accessibility
4. **Consider lazy loading** for better performance

## 📊 Content Structure

### Blog Post Frontmatter

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
pubDate: 2024-01-15
heroImage: "https://example.com/image.jpg" # Optional
tags: ["tag1", "tag2"]
---
```

### Required Fields

- `title`: Post title
- `description`: Brief description for SEO
- `pubDate`: Publication date
- `tags`: Array of tags for categorization

### Optional Fields

- `heroImage`: Featured image URL
- `updatedDate`: Last update date

## 🎯 Content Best Practices

### Writing Blog Posts

1. **Clear Structure**:
   - Introduction
   - Main content with headings
   - Conclusion
   - Call-to-action

2. **SEO Optimization**:
   - Use descriptive titles
   - Include relevant keywords
   - Write meta descriptions
   - Use proper heading hierarchy

3. **Readability**:
   - Short paragraphs
   - Clear headings
   - Use lists and code blocks
   - Include images where helpful

### Page Content

1. **Homepage**:
   - Clear value proposition
   - Featured content
   - Call-to-action buttons
   - Newsletter signup

2. **About Page**:
   - Personal story
   - Skills and experience
   - Professional background
   - Contact information

3. **Contact Page**:
   - Multiple contact methods
   - Contact form
   - Social media links
   - Response time expectations

## 🚀 Performance Tips

### Content Optimization

1. **Image Optimization**:
   - Use WebP format
   - Compress images
   - Use appropriate sizes
   - Add lazy loading

2. **Text Content**:
   - Keep paragraphs short
   - Use clear headings
   - Include relevant keywords
   - Write for your audience

3. **Code Examples**:
   - Use syntax highlighting
   - Keep examples concise
   - Include comments
   - Test all code

## 📱 Mobile Considerations

### Content for Mobile

1. **Short paragraphs** (2-3 sentences max)
2. **Large, readable fonts**
3. **Touch-friendly buttons**
4. **Fast-loading images**
5. **Clear navigation**

### Testing

1. **Test on real devices**
2. **Check loading speed**
3. **Verify touch interactions**
4. **Test readability**

## 🔍 SEO Content

### Meta Information

1. **Page titles** (under 60 characters)
2. **Meta descriptions** (under 160 characters)
3. **Open Graph tags** for social sharing
4. **Twitter Card tags**

### Content Structure

1. **Use H1 for page titles**
2. **Use H2-H6 for sections**
3. **Include relevant keywords**
4. **Write descriptive alt text**

## 📈 Analytics Content

### Tracking Setup

1. **Google Analytics** (if using)
2. **Search Console** verification
3. **Social media tracking**
4. **Newsletter analytics**

### Content Metrics

1. **Page views**
2. **Time on page**
3. **Bounce rate**
4. **Social shares**

## 🎨 Branding Content

### Visual Identity

1. **Logo and favicon**
2. **Color scheme**
3. **Typography choices**
4. **Image style**

### Voice and Tone

1. **Professional but approachable**
2. **Technical but accessible**
3. **Consistent across all content**
4. **Reflects your personality**

---

**Remember**: The demo content is just a starting point. Customize everything to match your brand, voice, and audience! 