import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Enable base styles for proper Tailwind functionality
      applyBaseStyles: true,
    })
  ],
  output: 'static',
  site: 'https://your-portfolio-site.com',
  base: '/',
  trailingSlash: 'ignore',
  
  // Build optimizations
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
    split: true,
  },
  
  // Performance optimizations
  compressHTML: true,
  
  // Vite configuration for additional optimizations
  vite: {
    build: {
      // Enable CSS code splitting
      cssCodeSplit: true,
      // Minify CSS
      cssMinify: true,
      // Enable rollup optimizations
      rollupOptions: {
        output: {
          // Manual chunks for better caching
          manualChunks: (id) => {
            // Separate vendor chunks
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
    css: {
      transformer: 'postcss',
      // CSS preprocessing optimizations
      preprocessorOptions: {
        scss: {
          // Optimize SCSS compilation
          outputStyle: 'compressed',
        },
      },
    },
    // Enable esbuild optimizations
    esbuild: {
      // Remove console logs in production
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
      // Minify identifiers
      minifyIdentifiers: true,
      // Minify syntax
      minifySyntax: true,
      // Minify whitespace
      minifyWhitespace: true,
    },
    // Server optimizations for development
    server: {
      // Enable HTTP/2 in development
      https: false,
      // Optimize HMR
      hmr: {
        overlay: true,
      },
    },
    // Optimize dependencies
    optimizeDeps: {
      // Include dependencies that should be pre-bundled
      include: [],
      // Exclude dependencies from pre-bundling
      exclude: [],
    },
  },
  
  // Experimental features for better performance
  experimental: {
    // Enable content collections optimization
    contentCollectionCache: true,
  },
  
  // Image optimization
  image: {
    // Enable image optimization
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Optimize images
        limitInputPixels: 268402689, // 16384 x 16384
      },
    },
  },
  
  // Prefetch configuration
  prefetch: {
    // Enable prefetching for better navigation
    prefetchAll: true,
    // Default prefetch strategy
    defaultStrategy: 'hover',
  },
});
