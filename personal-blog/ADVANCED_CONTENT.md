# Advanced Content Features

This theme includes powerful advanced content features that enhance the user experience and make your blog more engaging and functional.

## 🚀 Available Features

### 1. Search Functionality
**Component:** `SearchBar.astro`

**Features:**
- Full-text search across all blog posts
- Real-time search results
- Highlighted search terms
- Tag-based filtering
- Responsive search interface

**Usage:**
```astro
---
import SearchBar from '../components/SearchBar.astro';
---

<SearchBar />
```

**Customization:**
```javascript
// Customize search behavior
class SearchManager {
  constructor() {
    this.searchIndex = [];
    this.posts = [];
  }
  
  // Add custom search logic
  async loadPosts() {
    // Fetch posts from your API
  }
  
  // Custom search algorithm
  search(query) {
    // Implement custom search
  }
}
```

---

### 2. Reading Progress Bar
**Component:** `ReadingProgress.astro`

**Features:**
- Visual progress indicator
- Smooth animations
- Color changes near completion
- Responsive design
- Performance optimized

**Usage:**
```astro
---
import ReadingProgress from '../components/ReadingProgress.astro';
---

<ReadingProgress />
```

**Customization:**
```css
/* Custom progress bar styles */
#reading-progress-bar {
  background: linear-gradient(90deg, #0ea5e9, #0284c7);
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.3);
}

/* Custom colors for different states */
#reading-progress-bar.completed {
  background: linear-gradient(90deg, #10b981, #059669);
}
```

---

### 3. Table of Contents
**Component:** `TableOfContents.astro`

**Features:**
- Auto-generated from headings (H2, H3, H4)
- Smooth scroll navigation
- Active section highlighting
- Responsive design
- Sticky positioning

**Usage:**
```astro
---
import TableOfContents from '../components/TableOfContents.astro';
---

<div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
  <div class="lg:col-span-3">
    <!-- Your article content -->
  </div>
  <div class="lg:col-span-1">
    <TableOfContents />
  </div>
</div>
```

**Customization:**
```javascript
// Custom TOC behavior
class TableOfContents {
  constructor() {
    this.headings = [];
    this.tocItems = [];
  }
  
  // Custom heading extraction
  extractHeadings() {
    // Custom logic for heading detection
  }
  
  // Custom scroll behavior
  setupScrollSpy() {
    // Custom scroll spy implementation
  }
}
```

---

### 4. Code Syntax Highlighting
**Component:** `CodeHighlight.astro`

**Features:**
- Support for multiple languages
- Copy to clipboard functionality
- Language detection
- Custom themes
- Responsive design

**Usage:**
```astro
---
import CodeHighlight from '../components/CodeHighlight.astro';
---

<CodeHighlight>
  <code class="language-javascript">
    // Your code here
    function example() {
      console.log("Hello World!");
    }
  </code>
</CodeHighlight>
```

**Supported Languages:**
- JavaScript/TypeScript
- HTML
- CSS
- Python
- Bash/Shell
- And more...

**Customization:**
```css
/* Custom syntax highlighting colors */
.language-javascript .keyword {
  color: #c084fc;
}

.language-javascript .string {
  color: #86efac;
}

.language-javascript .number {
  color: #fbbf24;
}
```

---

### 5. Image Gallery
**Component:** `ImageGallery.astro`

**Features:**
- Masonry layout
- Lightbox functionality
- Responsive design
- Lazy loading
- Caption support

**Usage:**
```astro
---
import ImageGallery from '../components/ImageGallery.astro';

const images = [
  {
    src: "/path/to/image1.jpg",
    alt: "Description 1",
    caption: "Optional caption"
  },
  {
    src: "/path/to/image2.jpg",
    alt: "Description 2"
  }
];
---

<ImageGallery images={images} columns={3} />
```

**Customization:**
```javascript
// Custom gallery behavior
class ImageGallery {
  constructor() {
    this.images = [];
    this.currentIndex = 0;
  }
  
  // Custom lightbox implementation
  openLightbox(index) {
    // Custom lightbox logic
  }
  
  // Custom navigation
  showNextImage() {
    // Custom navigation logic
  }
}
```

---

### 6. Video Embeds
**Component:** `VideoEmbed.astro`

**Features:**
- YouTube support
- Vimeo support
- Custom video files
- Responsive design
- Lazy loading
- Multiple aspect ratios

**Usage:**
```astro
---
import VideoEmbed from '../components/VideoEmbed.astro';
---

<!-- YouTube Video -->
<VideoEmbed 
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  title="My Video"
  aspectRatio="16:9"
/>

<!-- Vimeo Video -->
<VideoEmbed 
  url="https://vimeo.com/148751763"
  title="My Vimeo Video"
  aspectRatio="16:9"
/>

<!-- Custom Video -->
<VideoEmbed 
  url="/path/to/video.mp4"
  title="Custom Video"
  aspectRatio="4:3"
  autoplay={false}
  controls={true}
/>
```

**Supported Platforms:**
- YouTube (all URL formats)
- Vimeo
- Custom video files (MP4, WebM, OGG, etc.)

---

## 🎯 Implementation Guide

### Setting Up Search

1. **Add Search Component:**
```astro
<!-- In your layout or page -->
<SearchBar />
```

2. **Configure Search Index:**
```javascript
// In your search component
async loadPosts() {
  const posts = await getCollection('blog');
  this.searchIndex = posts.map(post => ({
    title: post.data.title,
    description: post.data.description,
    content: post.body,
    url: `/blog/${post.slug}`,
    tags: post.data.tags
  }));
}
```

### Setting Up Reading Progress

1. **Add to Layout:**
```astro
<!-- In BaseLayout.astro -->
<div id="reading-progress" class="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
  <div id="reading-progress-bar" class="h-full bg-primary-600 transition-all duration-300"></div>
</div>
```

2. **Initialize Script:**
```javascript
// The script is automatically initialized
// Customize behavior as needed
```

### Setting Up Table of Contents

1. **Add to Article Layout:**
```astro
<div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
  <article class="lg:col-span-3">
    <!-- Your article content -->
  </article>
  <aside class="lg:col-span-1">
    <TableOfContents />
  </aside>
</div>
```

### Setting Up Code Highlighting

1. **Add Code Blocks:**
```astro
<CodeHighlight>
  <code class="language-javascript">
    // Your code here
  </code>
</CodeHighlight>
```

2. **Customize Themes:**
```css
/* Custom code block styling */
.code-highlight-container {
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
}
```

### Setting Up Image Gallery

1. **Prepare Images:**
```javascript
const images = [
  {
    src: "/images/image1.jpg",
    alt: "Description",
    caption: "Optional caption"
  }
];
```

2. **Add Gallery:**
```astro
<ImageGallery images={images} columns={3} />
```

### Setting Up Video Embeds

1. **Add Videos:**
```astro
<VideoEmbed 
  url="https://www.youtube.com/watch?v=VIDEO_ID"
  title="Video Title"
  aspectRatio="16:9"
/>
```

---

## 🎨 Customization Options

### Color Schemes

```css
/* Custom color variables */
:root {
  --search-highlight: #fef3c7;
  --progress-bar: #0ea5e9;
  --toc-active: #0ea5e9;
  --code-bg: #1f2937;
  --gallery-overlay: rgba(0, 0, 0, 0.8);
}
```

### Responsive Behavior

```css
/* Mobile optimizations */
@media (max-width: 768px) {
  .search-results {
    max-height: 300px;
  }
  
  .toc-container {
    position: static;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Performance Optimizations

```javascript
// Lazy loading for images
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      imageObserver.unobserve(entry.target);
    }
  });
});

// Lazy loading for videos
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      videoObserver.unobserve(entry.target);
    }
  });
});
```

---

## 📊 Performance Considerations

### Search Performance
- Use debounced search input
- Implement search indexing
- Cache search results
- Use virtual scrolling for large result sets

### Reading Progress
- Use `requestAnimationFrame` for smooth updates
- Throttle scroll events
- Optimize calculation frequency

### Table of Contents
- Generate TOC on build time
- Cache heading positions
- Use efficient scroll detection

### Code Highlighting
- Load syntax highlighting on demand
- Use web workers for large code blocks
- Implement syntax caching

### Image Gallery
- Use lazy loading
- Implement progressive image loading
- Optimize image sizes
- Use WebP format when possible

### Video Embeds
- Lazy load video iframes
- Use thumbnail previews
- Implement video preloading strategies

---

## 🔧 Advanced Configuration

### Search Configuration
```javascript
const searchConfig = {
  minQueryLength: 2,
  maxResults: 10,
  highlightClass: 'search-highlight',
  searchFields: ['title', 'description', 'content', 'tags'],
  fuzzySearch: true,
  caseSensitive: false
};
```

### TOC Configuration
```javascript
const tocConfig = {
  headingSelector: 'h2, h3, h4',
  scrollOffset: 80,
  highlightActive: true,
  smoothScroll: true,
  collapseSubsections: false
};
```

### Code Highlighting Configuration
```javascript
const codeConfig = {
  theme: 'github-dark',
  lineNumbers: true,
  copyButton: true,
  languageDetection: true,
  customLanguages: ['astro', 'mdx']
};
```

---

## 🚀 Future Enhancements

### Planned Features:
- **Advanced Search Filters:** Date, category, author filtering
- **Search Analytics:** Track popular search terms
- **Reading Time Estimation:** More accurate reading time calculation
- **Interactive TOC:** Collapsible sections
- **Code Block Themes:** Multiple syntax highlighting themes
- **Gallery Filters:** Category-based image filtering
- **Video Playlists:** Support for video playlists
- **Audio Embeds:** Support for audio files and podcasts

### Advanced Features:
- **AI-Powered Search:** Semantic search capabilities
- **Reading Analytics:** Track reading behavior
- **Smart TOC:** AI-generated table of contents
- **Live Code Editing:** In-browser code editing
- **Advanced Gallery:** 3D gallery effects
- **Video Analytics:** Track video engagement
- **Content Recommendations:** AI-powered content suggestions

---

## 📚 Additional Resources

- [Demo Page](/features/advanced-content)
- [Component Documentation](./COMPONENTS.md)
- [Performance Guide](./PERFORMANCE.md)
- [Customization Guide](./CUSTOMIZATION.md)

---

*These advanced content features will significantly enhance your blog's functionality and user experience!* 