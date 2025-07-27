# Troubleshooting Guide

This guide helps you resolve common issues when using the Astro Personal Blog Theme.

## 🚨 Common Issues

### Build Errors

#### "Cannot find module 'astro:content'"

**Cause**: Astro content collections not properly configured.

**Solution**:
1. Check that `src/content/config.ts` exists
2. Verify the collection is properly exported
3. Restart the development server

```bash
# Restart dev server
npm run dev
```

#### "Module not found" errors

**Cause**: Missing dependencies or incorrect imports.

**Solution**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript errors

**Cause**: Type definitions not found or incorrect.

**Solution**:
1. Check `tsconfig.json` configuration
2. Install missing type definitions
3. Restart TypeScript server

```bash
# Install types if missing
npm install --save-dev @types/node
```

### Development Server Issues

#### Server won't start

**Cause**: Port conflict or missing dependencies.

**Solution**:
```bash
# Check if port is in use
lsof -i :4321

# Kill process if needed
kill -9 <PID>

# Start with different port
npm run dev -- --port 3000
```

#### Hot reload not working

**Cause**: File watcher issues or browser cache.

**Solution**:
1. Clear browser cache
2. Restart development server
3. Check file permissions

```bash
# Restart with clean cache
npm run dev -- --clear
```

### Styling Issues

#### Tailwind CSS not working

**Cause**: Tailwind configuration issues or missing classes.

**Solution**:
1. Check `tailwind.config.mjs` configuration
2. Verify content paths
3. Restart development server

```javascript
// tailwind.config.mjs
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  // ... rest of config
}
```

#### Dark mode not working

**Cause**: JavaScript disabled or localStorage issues.

**Solution**:
1. Check browser console for errors
2. Verify JavaScript is enabled
3. Clear browser localStorage

```javascript
// Check localStorage
localStorage.removeItem('theme');
```

#### Custom styles not applying

**Cause**: CSS specificity or build issues.

**Solution**:
1. Use `!important` for critical styles
2. Check CSS order in build
3. Verify class names

```css
/* Force style application */
.custom-class {
  color: red !important;
}
```

### Content Issues

#### Blog posts not showing

**Cause**: Content collection configuration or file structure issues.

**Solution**:
1. Check `src/content/config.ts`
2. Verify markdown file structure
3. Check frontmatter format

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

#### Images not loading

**Cause**: Incorrect file paths or missing files.

**Solution**:
1. Check file paths in `public/` directory
2. Verify image URLs in content
3. Use relative paths for local images

```astro
<!-- Correct image path -->
<img src="/images/hero.jpg" alt="Hero image" />
```

#### Search not working

**Cause**: JavaScript errors or missing functionality.

**Solution**:
1. Check browser console for errors
2. Verify search script is loaded
3. Test with different browsers

### Performance Issues

#### Slow loading

**Cause**: Large images or unoptimized assets.

**Solution**:
1. Optimize images (WebP format)
2. Enable compression
3. Use CDN for assets

```bash
# Check bundle size
npm run build
```

#### Build taking too long

**Cause**: Large dependencies or inefficient build process.

**Solution**:
1. Update dependencies
2. Optimize build configuration
3. Use build caching

```bash
# Clear build cache
rm -rf dist .astro
```

### SEO Issues

#### Meta tags not working

**Cause**: Incorrect meta tag configuration.

**Solution**:
1. Check `BaseLayout.astro` meta tags
2. Verify Open Graph tags
3. Test with social media debuggers

```astro
<!-- Correct meta tag format -->
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
```

#### Sitemap not generating

**Cause**: Sitemap configuration issues.

**Solution**:
1. Check `astro.config.mjs` sitemap integration
2. Verify site URL configuration
3. Check build output

```javascript
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yourdomain.com',
  integrations: [sitemap()],
});
```

## 🔧 Debug Mode

### Enable Debug Logging

```bash
# Development with debug
DEBUG=* npm run dev

# Build with verbose output
npm run build --verbose
```

### Browser Debugging

1. **Open Developer Tools**:
   - Press F12 or right-click → Inspect
   - Check Console tab for errors
   - Check Network tab for failed requests

2. **Check for JavaScript Errors**:
   ```javascript
   // Add to components for debugging
   console.log('Component loaded');
   ```

3. **Test Responsive Design**:
   - Use browser dev tools
   - Test on real devices
   - Check mobile performance

## 🛠️ Advanced Troubleshooting

### Environment Issues

#### Node.js Version

**Check version**:
```bash
node --version
# Should be 18+ for Astro 4.0
```

**Update Node.js**:
```bash
# Using nvm
nvm install 18
nvm use 18

# Or download from nodejs.org
```

#### Package Manager Issues

**Clear cache**:
```bash
# npm
npm cache clean --force

# yarn
yarn cache clean

# pnpm
pnpm store prune
```

### File System Issues

#### File Permissions

**Fix permissions**:
```bash
# Linux/Mac
chmod -R 755 src/
chmod -R 644 src/**/*.astro

# Windows
# Check file properties and permissions
```

#### File Encoding

**Check encoding**:
```bash
# Ensure UTF-8 encoding
file -i src/components/Header.astro
```

### Network Issues

#### CORS Errors

**Solution**:
1. Check API endpoints
2. Verify CORS headers
3. Use proxy for development

#### CDN Issues

**Solution**:
1. Check CDN configuration
2. Verify asset URLs
3. Use fallback sources

## 📊 Performance Debugging

### Lighthouse Audit

1. **Run Lighthouse**:
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit

2. **Fix Issues**:
   - Optimize images
   - Minify CSS/JS
   - Enable compression
   - Fix accessibility issues

### Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev @astrojs/bundle-analyzer

# Add to astro.config.mjs
import bundleAnalyzer from '@astrojs/bundle-analyzer';

export default defineConfig({
  integrations: [bundleAnalyzer()],
});
```

## 🔍 Common Error Messages

### "Cannot resolve module"

**Solution**:
```bash
# Check import paths
# Verify file exists
# Check case sensitivity
```

### "Unexpected token"

**Solution**:
```bash
# Check syntax
# Verify file encoding
# Check for hidden characters
```

### "Module parse failed"

**Solution**:
```bash
# Check file format
# Verify loader configuration
# Check for syntax errors
```

## 📞 Getting Help

### Before Asking for Help

1. **Check this guide** for common solutions
2. **Search existing issues** on GitHub
3. **Check Astro documentation** at docs.astro.build
4. **Verify your setup** matches requirements

### When Asking for Help

Include the following information:

1. **Environment**:
   - Operating system
   - Node.js version
   - Package manager version

2. **Error Details**:
   - Full error message
   - Stack trace
   - Steps to reproduce

3. **Configuration**:
   - Relevant config files
   - Package.json
   - File structure

### Useful Commands

```bash
# Check system info
node --version
npm --version
astro --version

# Check project status
npm list
npm audit

# Debug build
npm run build --verbose

# Check file structure
tree src/ -I node_modules
```

## 🎯 Prevention Tips

### Best Practices

1. **Keep dependencies updated**
2. **Use version control**
3. **Test regularly**
4. **Monitor performance**
5. **Backup regularly**

### Development Workflow

1. **Start with clean install**
2. **Test in multiple browsers**
3. **Check mobile responsiveness**
4. **Validate HTML/CSS**
5. **Test accessibility**

---

**Remember**: Most issues can be resolved by checking the basics first - file paths, syntax, and configuration! 