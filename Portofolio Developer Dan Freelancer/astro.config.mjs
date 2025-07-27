import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  site: 'https://your-portfolio.com',
  integrations: [
    tailwind(),
    mdx({
      syntaxHighlight: 'prism',
      remarkPlugins: [],
      rehypePlugins: [],
      gfm: true,
      remarkRehype: {
        footnoteLabel: 'References',
        footnoteBackLabel: 'Back to content',
      },
    }),
    sitemap()
  ],
  output: 'static',
  adapter: vercel(),
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
}); 