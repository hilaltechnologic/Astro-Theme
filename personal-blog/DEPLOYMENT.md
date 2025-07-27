# Deployment Guide

This guide covers how to deploy your Astro Personal Blog Theme to various hosting platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

3. **Configuration**:
   - Framework Preset: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Netlify

1. **Push to GitHub** (same as Vercel)

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Choose your repository

3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 (or higher)

### GitHub Pages

1. **Update Configuration**:
   ```javascript
   // astro.config.mjs
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/your-repo-name',
   });
   ```

2. **Create GitHub Action**:
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
     workflow_dispatch:
   
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: 18
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Pages section
   - Source: Deploy from a branch
   - Branch: gh-pages

## 🔧 Manual Deployment

### Build for Production

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Preview the build
npm run preview
```

### Upload to Web Server

1. **Upload Files**:
   - Upload the entire `dist/` folder to your web server
   - Ensure all files are in the public directory

2. **Configure Server**:
   - Set up proper MIME types
   - Enable gzip compression
   - Configure caching headers

### Static Hosting Services

#### AWS S3 + CloudFront

1. **Create S3 Bucket**:
   ```bash
   aws s3 mb s3://your-blog-bucket
   aws s3 website s3://your-blog-bucket --index-document index.html --error-document 404.html
   ```

2. **Upload Files**:
   ```bash
   aws s3 sync dist/ s3://your-blog-bucket --delete
   ```

3. **Set Up CloudFront**:
   - Create CloudFront distribution
   - Point to S3 bucket
   - Configure custom domain

#### Firebase Hosting

1. **Install Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Project**:
   ```bash
   firebase init hosting
   ```

3. **Deploy**:
   ```bash
   firebase deploy
   ```

## 🌐 Domain Configuration

### Custom Domain Setup

1. **DNS Configuration**:
   - Add A record pointing to your hosting provider
   - Add CNAME record for www subdomain
   - Wait for DNS propagation (up to 48 hours)

2. **SSL Certificate**:
   - Most hosting providers offer free SSL
   - Let's Encrypt for custom servers
   - Configure HTTPS redirects

### Environment Variables

Create `.env` file for production:

```env
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_TWITTER_HANDLE=@yourusername
```

## 📊 Performance Optimization

### Pre-deployment Checklist

1. **Build Optimization**:
   ```bash
   npm run build
   ```

2. **Check Bundle Size**:
   - Review build output
   - Optimize large files
   - Remove unused dependencies

3. **Image Optimization**:
   - Compress all images
   - Use WebP format where possible
   - Add lazy loading

4. **SEO Verification**:
   - Check meta tags
   - Verify sitemap
   - Test social sharing

### Performance Monitoring

1. **Lighthouse Audit**:
   - Run Lighthouse in Chrome DevTools
   - Aim for 90+ scores
   - Fix performance issues

2. **Core Web Vitals**:
   - First Contentful Paint: < 1.5s
   - Largest Contentful Paint: < 2.5s
   - Cumulative Layout Shift: < 0.1

3. **Real User Monitoring**:
   - Google Analytics
   - Web Vitals monitoring
   - Error tracking

## 🔒 Security Considerations

### Security Headers

Add security headers to your hosting configuration:

```http
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### HTTPS Configuration

1. **Force HTTPS**:
   - Redirect HTTP to HTTPS
   - Use HSTS headers
   - Configure secure cookies

2. **SSL Certificate**:
   - Use valid SSL certificate
   - Auto-renewal setup
   - Monitor expiration dates

## 📱 Mobile Optimization

### Mobile Testing

1. **Device Testing**:
   - Test on real devices
   - Check touch interactions
   - Verify responsive design

2. **Performance**:
   - Test on slow connections
   - Check mobile Core Web Vitals
   - Optimize for mobile users

## 🔍 SEO Deployment

### Search Engine Setup

1. **Google Search Console**:
   - Add your domain
   - Submit sitemap
   - Monitor indexing

2. **Bing Webmaster Tools**:
   - Add your domain
   - Submit sitemap
   - Monitor performance

### Analytics Setup

1. **Google Analytics**:
   ```html
   <!-- Add to BaseLayout.astro -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

2. **Other Analytics**:
   - Plausible Analytics
   - Fathom Analytics
   - Simple Analytics

## 🚨 Troubleshooting

### Common Issues

1. **Build Errors**:
   ```bash
   # Clear cache
   rm -rf node_modules
   npm install
   npm run build
   ```

2. **404 Errors**:
   - Check file paths
   - Verify build output
   - Configure server redirects

3. **Performance Issues**:
   - Optimize images
   - Minify CSS/JS
   - Enable compression
   - Use CDN

### Debug Mode

Enable debug mode for troubleshooting:

```bash
# Development with debug
DEBUG=* npm run dev

# Build with verbose output
npm run build --verbose
```

## 📈 Post-Deployment

### Monitoring

1. **Uptime Monitoring**:
   - UptimeRobot
   - Pingdom
   - StatusCake

2. **Performance Monitoring**:
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

3. **Error Tracking**:
   - Sentry
   - LogRocket
   - Bugsnag

### Maintenance

1. **Regular Updates**:
   - Update dependencies
   - Security patches
   - Performance improvements

2. **Backup Strategy**:
   - Version control
   - Database backups
   - File backups

3. **Content Updates**:
   - Regular blog posts
   - SEO optimization
   - Performance monitoring

## 🎯 Platform-Specific Guides

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Netlify Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy

# Production deploy
netlify deploy --prod
```

### AWS Amplify

1. **Connect Repository**:
   - Go to AWS Amplify Console
   - Connect your GitHub repository
   - Configure build settings

2. **Build Settings**:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
   ```

## 🔄 Continuous Deployment

### GitHub Actions

```yaml
name: Deploy
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

**Happy deploying! 🚀** 