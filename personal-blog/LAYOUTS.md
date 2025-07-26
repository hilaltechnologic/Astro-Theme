# Multiple Layout Options

This theme includes **4 different layout options** to match different content types, audiences, and personal preferences. Each layout is designed with specific use cases in mind.

## 🎨 Available Layouts

### 1. Classic Layout (`/layouts/classic`)
**Perfect for:** Traditional blogs, personal journals, content-focused sites

**Features:**
- Traditional blog structure with familiar navigation
- Clean typography optimized for reading
- Content-focused design with minimal distractions
- Standard header/footer layout
- Ideal for writers and content creators

**Best for:**
- Personal blogs
- News sites
- Educational content
- Long-form articles

---

### 2. Magazine Layout (`/layouts/magazine`)
**Perfect for:** Content-rich blogs, digital magazines, discovery-focused sites

**Features:**
- Dynamic grid layouts with featured content highlights
- Visual content hierarchy with large featured posts
- Sidebar content for additional discovery
- Dark header with prominent branding
- Content discovery focus

**Best for:**
- Digital magazines
- Multi-topic blogs
- Content discovery platforms
- News aggregators

---

### 3. Portfolio Layout (`/layouts/portfolio`)
**Perfect for:** Professional portfolios, freelancers, creative professionals

**Features:**
- Professional gradient header design
- Skills showcase section
- Project highlights with detailed cards
- Achievement-focused content presentation
- Professional appearance suitable for clients

**Best for:**
- Freelancers
- Developers
- Designers
- Consultants
- Creative professionals

---

### 4. Minimalist Layout (`/layouts/minimalist`)
**Perfect for:** Writers, thinkers, minimalists, content-first approach

**Features:**
- Clean, uncluttered design
- Generous whitespace
- Typography-focused layout
- Minimal navigation
- Content-first approach

**Best for:**
- Writers and authors
- Philosophers and thinkers
- Minimalist bloggers
- Content-focused sites

---

## 🚀 How to Use Different Layouts

### Option 1: Manual Layout Selection
Import the desired layout in your pages:

```astro
---
// For Classic Layout
import ClassicLayout from '../layouts/ClassicLayout.astro';

// For Magazine Layout
import MagazineLayout from '../layouts/MagazineLayout.astro';

// For Portfolio Layout
import PortfolioLayout from '../layouts/PortfolioLayout.astro';

// For Minimalist Layout
import MinimalistLayout from '../layouts/MinimalistLayout.astro';
---

<ClassicLayout title="Your Page Title">
  <!-- Your content here -->
</ClassicLayout>
```

### Option 2: Layout Configuration
Create a configuration system to switch layouts:

```astro
---
// src/utils/layoutConfig.ts
export const LAYOUT_CONFIG = {
  default: 'classic',
  pages: {
    '/': 'classic',
    '/blog': 'magazine',
    '/about': 'portfolio',
    '/contact': 'minimalist'
  }
};
---
```

### Option 3: User Preference
Allow users to choose their preferred layout:

```astro
---
// Store user preference in localStorage
const userLayout = Astro.cookies.get('preferred-layout')?.value || 'classic';
---
```

## 🎯 Layout Comparison

| Feature | Classic | Magazine | Portfolio | Minimalist |
|---------|---------|----------|-----------|------------|
| **Header Style** | Clean, standard | Dark, prominent | Gradient, professional | Minimal, light |
| **Content Focus** | Reading | Discovery | Showcase | Content |
| **Navigation** | Standard | Enhanced | Professional | Minimal |
| **Typography** | Readable | Dynamic | Professional | Clean |
| **Whitespace** | Moderate | Varied | Balanced | Generous |
| **Best For** | Traditional blogs | Content discovery | Professional work | Content-first |

## 🔧 Customization

### Layout-Specific Styling
Each layout can be customized independently:

```css
/* Classic Layout Customization */
.classic-layout {
  --header-bg: #ffffff;
  --text-color: #374151;
}

/* Magazine Layout Customization */
.magazine-layout {
  --header-bg: #1f2937;
  --accent-color: #0ea5e9;
}

/* Portfolio Layout Customization */
.portfolio-layout {
  --header-gradient: linear-gradient(135deg, #0ea5e9, #0284c7);
  --card-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

/* Minimalist Layout Customization */
.minimalist-layout {
  --font-weight: 300;
  --line-height: 1.8;
  --spacing: 2rem;
}
```

### Color Schemes
Each layout supports different color schemes:

```javascript
// tailwind.config.mjs
module.exports = {
  theme: {
    extend: {
      colors: {
        classic: {
          primary: '#0ea5e9',
          secondary: '#64748b'
        },
        magazine: {
          primary: '#1f2937',
          accent: '#0ea5e9'
        },
        portfolio: {
          primary: '#0ea5e9',
          gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)'
        },
        minimalist: {
          primary: '#374151',
          background: '#ffffff'
        }
      }
    }
  }
}
```

## 📱 Responsive Design

All layouts are fully responsive and optimized for:
- **Mobile devices** (320px - 768px)
- **Tablets** (768px - 1024px)
- **Desktop** (1024px+)
- **Large screens** (1440px+)

## 🎨 Design Principles

### Classic Layout
- **Principle:** Familiarity and readability
- **Focus:** Content consumption
- **Navigation:** Standard blog navigation

### Magazine Layout
- **Principle:** Content discovery and engagement
- **Focus:** Visual hierarchy and exploration
- **Navigation:** Enhanced with featured content

### Portfolio Layout
- **Principle:** Professional presentation
- **Focus:** Skills and achievements showcase
- **Navigation:** Professional and trustworthy

### Minimalist Layout
- **Principle:** Content-first, distraction-free
- **Focus:** Typography and readability
- **Navigation:** Minimal and unobtrusive

## 🔄 Switching Between Layouts

### For Theme Users
1. Choose your preferred layout from the demo pages
2. Update your page imports to use the desired layout
3. Customize colors and styling as needed

### For Theme Developers
1. Create layout selection system
2. Add user preference storage
3. Implement layout switching functionality
4. Add layout preview functionality

## 📊 Performance Considerations

- **Classic Layout:** Fastest loading, minimal JavaScript
- **Magazine Layout:** Moderate complexity, optimized images
- **Portfolio Layout:** Enhanced features, progressive loading
- **Minimalist Layout:** Lightweight, maximum performance

## 🎯 Use Case Recommendations

### Choose Classic Layout if:
- You write long-form content
- Your audience expects traditional blog structure
- You want maximum compatibility
- Content is your primary focus

### Choose Magazine Layout if:
- You publish diverse content types
- You want to highlight featured content
- Your audience likes to discover new content
- You have multiple content categories

### Choose Portfolio Layout if:
- You're a freelancer or consultant
- You want to showcase your work
- You need to impress potential clients
- You have projects to highlight

### Choose Minimalist Layout if:
- You're a writer or thinker
- You prefer clean, distraction-free design
- Your content is text-heavy
- You value simplicity and focus

## 🚀 Future Enhancements

### Planned Features:
- **Layout Switcher:** Allow users to switch layouts dynamically
- **Custom Layout Builder:** Drag-and-drop layout customization
- **Layout Presets:** Pre-configured layout variations
- **A/B Testing:** Test different layouts with your audience
- **Analytics Integration:** Track performance of different layouts

### Advanced Features:
- **Hybrid Layouts:** Combine features from multiple layouts
- **Seasonal Layouts:** Automatically switch layouts based on content
- **Personalized Layouts:** AI-driven layout recommendations
- **Layout Templates:** Industry-specific layout templates

---

## 📚 Additional Resources

- [Layout Demo Pages](/layouts)
- [Customization Guide](./CUSTOMIZATION.md)
- [Performance Optimization](./PERFORMANCE.md)
- [Responsive Design Guide](./RESPONSIVE.md)

---

*Choose the layout that best represents your brand and serves your audience's needs!* 