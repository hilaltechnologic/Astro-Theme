# Deployment Guide

This guide will help you deploy your Astro portfolio theme to various hosting platforms.

## 🚀 Quick Deploy Options

### Netlify (Recommended)

1. **Connect your repository**
   - Push your code to GitHub/GitLab/Bitbucket
   - Go to [netlify.com](https://netlify.com) and sign up
   - Click "New site from Git"
   - Connect your repository

2. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 (or higher)

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live in minutes

### Vercel

1. **Connect your repository**
   - Go to [vercel.com](https://vercel.com) and sign up
   - Click "New Project"
   - Import your repository

2. **Configure settings**
   - Framework preset: Astro
   - Build command: `npm run build`
   - Output directory: `dist`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live instantly

## 📋 Pre-deployment Checklist

Before deploying, make sure to:

- [ ] Update personal information in all components
- [ ] Replace placeholder images with your own
- [ ] Update contact information and social links
- [ ] Test the contact form functionality
- [ ] Optimize images for web
- [ ] Update meta descriptions and titles
- [ ] Test on different devices and browsers

## 🔧 Environment Variables

If you're using environment variables, add them to your hosting platform:

### Netlify
- Go to Site settings > Environment variables
- Add your variables (e.g., `CONTACT_EMAIL`, `ANALYTICS_ID`)

### Vercel
- Go to Project settings > Environment variables
- Add your variables

## 📝 Custom Domain

### Netlify
1. Go to Site settings > Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

### Vercel
1. Go to Project settings > Domains
2. Add your custom domain
3. Configure DNS records as instructed

## 🔍 SEO Optimization

After deployment:

1. **Submit to search engines**
   - Google Search Console
   - Bing Webmaster Tools

2. **Test performance**
   - Google PageSpeed Insights
   - GTmetrix
   - WebPageTest

3. **Check mobile responsiveness**
   - Google Mobile-Friendly Test

## 📊 Analytics Setup

### Google Analytics
1. Create a Google Analytics account
2. Get your tracking ID
3. Add the script to your layout

### Other Options
- Plausible Analytics
- Fathom Analytics
- Simple Analytics

## 🔒 Security Headers

Add security headers to your hosting platform:

### Netlify
Create a `_headers` file in your `public` directory:

```
/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Vercel
Create a `vercel.json` file:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

## 🚨 Troubleshooting

### Build Errors
- Check Node.js version (18+ required)
- Clear cache: `npm run clean`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### 404 Errors
- Check your `astro.config.mjs` site URL
- Ensure all internal links are correct
- Test the sitemap generation

### Performance Issues
- Optimize images
- Enable compression on your hosting platform
- Use CDN for static assets

## 📞 Support

If you encounter issues:

1. Check the [Astro documentation](https://docs.astro.build)
2. Search existing issues in the repository
3. Create a new issue with detailed information

## 🎉 Congratulations!

Your portfolio is now live! Share it with the world and start attracting clients. 