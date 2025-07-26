import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-blog-theme-demo.pages.dev', // Cloudflare Pages
  // site: 'https://astro-blog-theme-demo.netlify.app', // Netlify
  // site: 'https://astro-blog-theme-demo.vercel.app', // Vercel
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('private'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  // Build optimization
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  // Vite configuration for better performance
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro'],
            'components': ['@astrojs/mdx', '@astrojs/tailwind']
          }
        }
      }
    },
    ssr: {
      noExternal: ['@astrojs/mdx']
    }
  },
  // Output configuration for static hosting
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  }
}); 