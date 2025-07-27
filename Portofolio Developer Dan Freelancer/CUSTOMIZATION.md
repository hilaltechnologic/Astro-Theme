# Customization Guide

This guide will help you customize the Astro portfolio theme to match your personal brand and requirements.

## 🎨 Color Scheme

### Primary Colors
The theme uses a custom color palette defined in `tailwind.config.mjs`. You can modify these colors:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // Main primary color
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
  },
  secondary: {
    // Gray scale colors
  },
  accent: {
    // Purple/pink accent colors
  }
}
```

### Color Suggestions
- **Blue**: Professional, trustworthy
- **Green**: Growth, success
- **Purple**: Creative, innovative
- **Orange**: Energetic, friendly
- **Red**: Bold, attention-grabbing

## 📝 Content Customization

### Personal Information

1. **Update Layout.astro**
   ```astro
   <!-- Change in src/layouts/Layout.astro -->
   <title>Your Name - Full-Stack Developer</title>
   <meta name="description" content="Your custom description" />
   ```

2. **Update Header.astro**
   ```astro
   <!-- Change in src/components/Header.astro -->
   <span class="text-xl font-bold">Your Name</span>
   ```

3. **Update Contact Information**
   ```astro
   <!-- Change in src/components/Contact.astro -->
   const contactInfo = [
     {
       icon: 'mail',
       title: 'Email',
       value: 'your@email.com',
       link: 'mailto:your@email.com'
     },
     // ... other contact info
   ];
   ```

### Hero Section

Update `src/components/Hero.astro`:
```astro
<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold">
  Your Name &
  <span class="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
    Your Title
  </span>
</h1>

<p class="text-xl sm:text-2xl text-secondary-600 dark:text-secondary-300">
  Your custom tagline or description
</p>
```

### Services

Update `src/components/Services.astro`:
```astro
const services = [
  {
    icon: 'globe',
    title: 'Your Service',
    description: 'Your service description',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
    color: 'from-blue-500 to-cyan-500'
  },
  // ... add more services
];
```

### Portfolio Projects

Update `src/components/Portfolio.astro`:
```astro
const projects = [
  {
    id: 1,
    title: 'Your Project',
    category: 'web',
    image: '/projects/your-project.jpg',
    description: 'Project description',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://your-project.com',
    githubUrl: 'https://github.com/yourname/project',
    featured: true
  },
  // ... add more projects
];
```

## 🖼️ Images and Assets

### Profile Photo
- Add your profile photo to `public/profile.jpg`
- Update the hero section to use your photo

### Project Images
- Add project screenshots to `public/projects/`
- Recommended size: 800x600px
- Format: JPG or PNG

### Favicon
- Replace `public/favicon.svg` with your logo
- Size: 32x32px or larger

### Open Graph Image
- Add `public/og-image.jpg` for social media sharing
- Size: 1200x630px

## 🔧 Advanced Customization

### Adding New Pages

1. Create a new file in `src/pages/`
2. Import the Layout and Header components
3. Add your content

Example:
```astro
---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
---

<Layout title="Page Title - Your Name">
  <Header />
  <main class="pt-16">
    <!-- Your content here -->
  </main>
</Layout>
```

### Adding New Components

1. Create a new file in `src/components/`
2. Export the component
3. Import and use in your pages

### Custom Animations

Add custom animations in `tailwind.config.mjs`:
```javascript
animation: {
  'custom-bounce': 'customBounce 1s infinite',
},
keyframes: {
  customBounce: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
},
```

### Custom Fonts

1. Add Google Fonts link in `src/layouts/Layout.astro`
2. Update font family in `tailwind.config.mjs`

## 📱 Responsive Design

The theme is fully responsive with these breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Custom Breakpoints

Add custom breakpoints in `tailwind.config.mjs`:
```javascript
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
},
```

## 🌙 Dark Mode

The theme includes automatic dark mode detection. Customize dark mode colors:

```javascript
// In tailwind.config.mjs
darkMode: 'class', // or 'media'
```

### Dark Mode Colors

Update dark mode colors in components:
```astro
class="bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white"
```

## 📊 SEO Optimization

### Meta Tags
Update meta tags in `src/layouts/Layout.astro`:
```astro
<meta name="description" content="Your custom description" />
<meta name="keywords" content="your, keywords, here" />
<meta name="author" content="Your Name" />
```

### Structured Data
Add structured data for better SEO:
```astro
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "jobTitle": "Full-Stack Developer",
  "url": "https://yourwebsite.com"
}
</script>
```

## 🔗 Social Media

### Social Links
Update social media links in `src/components/Contact.astro`:
```astro
const socialLinks = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/yourname' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/yourname' },
  { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/yourname' },
  // Add more social links
];
```

### Social Media Meta Tags
Update Open Graph and Twitter Card meta tags in `src/layouts/Layout.astro`.

## 📧 Contact Form

### Form Integration
The contact form is ready for integration with:
- Netlify Forms
- Formspree
- EmailJS
- Custom backend

### Form Handler
Update the form handler in `src/components/Contact.astro`:
```javascript
contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  // Add your form submission logic here
  // Example: Send to your backend API
  
  const formData = new FormData(contactForm);
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: formData
  });
  
  if (response.ok) {
    alert('Message sent successfully!');
    contactForm.reset();
  }
});
```

## 🚀 Performance Optimization

### Image Optimization
- Use WebP format for better compression
- Optimize images before uploading
- Use appropriate image sizes

### Code Splitting
Astro automatically optimizes your code, but you can:
- Lazy load non-critical components
- Use dynamic imports for large components

### Caching
Add caching headers in your hosting platform:
- Static assets: 1 year
- HTML pages: 1 hour
- API responses: 5 minutes

## 🔒 Security

### Security Headers
Add security headers in your hosting platform:
```
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### Form Security
- Implement CSRF protection
- Validate form inputs
- Use HTTPS for form submissions

## 📈 Analytics

### Google Analytics
Add Google Analytics in `src/layouts/Layout.astro`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Other Analytics
- Plausible Analytics
- Fathom Analytics
- Simple Analytics

## 🎯 Testing

### Browser Testing
Test your site on:
- Chrome, Firefox, Safari, Edge
- Mobile browsers
- Different screen sizes

### Performance Testing
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

### Accessibility Testing
- WAVE Web Accessibility Evaluator
- axe DevTools
- Lighthouse accessibility audit

## 📚 Additional Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)
- [Web.dev](https://web.dev)

## 🤝 Support

If you need help with customization:
1. Check the [Astro documentation](https://docs.astro.build)
2. Search existing issues
3. Create a new issue with detailed information

---

**Happy customizing! 🎨** 