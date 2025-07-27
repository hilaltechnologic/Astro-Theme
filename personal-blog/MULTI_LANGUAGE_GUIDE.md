# Multi-Language Support Guide

## 🌍 Overview

The Astro Personal Blog Theme now includes comprehensive multi-language support with the following features:

- **8 Supported Languages**: English, Indonesian, Spanish, French, German, Japanese, Chinese, Korean
- **Automatic Language Detection**: Based on browser settings and user preferences
- **SEO Optimized**: Proper hreflang tags and language-specific meta tags
- **URL-based Routing**: Clean URLs with language prefixes (e.g., `/id/blog`, `/es/about`)
- **Persistent Language Selection**: Remembers user's language preference
- **Fallback System**: Graceful fallback to English for missing translations

## 🚀 Quick Start

### 1. Language Configuration

The language system is configured in `src/i18n/config.ts`:

```typescript
export const languages = {
  en: 'English',
  id: 'Bahasa Indonesia',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  ja: '日本語',
  zh: '中文',
  ko: '한국어'
};
```

### 2. Adding New Languages

To add a new language:

1. **Add language to config** (`src/i18n/config.ts`):
```typescript
export const languages = {
  // ... existing languages
  pt: 'Português'
};
```

2. **Create translation file** (`src/i18n/translations/pt.ts`):
```typescript
export const pt = {
  nav: {
    home: 'Início',
    blog: 'Blog',
    about: 'Sobre',
    contact: 'Contato'
  },
  // ... rest of translations
};
```

3. **Import in index** (`src/i18n/index.ts`):
```typescript
import { pt } from './translations/pt';
export const translations = {
  // ... existing translations
  pt
};
```

## 📁 File Structure

```
src/
├── i18n/
│   ├── config.ts              # Language configuration
│   ├── index.ts               # Translation utilities
│   └── translations/
│       ├── en.ts              # English translations
│       ├── id.ts              # Indonesian translations
│       └── es.ts              # Spanish translations
├── pages/
│   ├── [lang]/                # Language-specific routes
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   ├── contact.astro      # Contact page
│   │   └── blog/
│   │       ├── index.astro    # Blog listing
│   │       └── [slug].astro   # Individual posts
│   ├── index.astro            # Language redirect
│   └── blog/
│       └── index.astro        # Blog redirect
└── components/
    ├── Header.astro           # Updated with language selector
    ├── Footer.astro           # Updated with translations
    └── LanguageSelector.astro # Language switcher component
```

## 🔧 Configuration

### Language Detection Priority

1. **URL Language**: `/id/blog` → Indonesian
2. **Stored Preference**: localStorage `preferred-language`
3. **Browser Language**: `navigator.language`
4. **Default**: English

### URL Structure

- **English (default)**: `/`, `/blog`, `/about`
- **Other languages**: `/id/blog`, `/es/about`, `/fr/contact`

### SEO Configuration

Each language includes:
- Proper `lang` attribute on HTML
- `hreflang` tags for language alternatives
- Language-specific meta tags
- Structured data with language support

## 📝 Translation System

### Translation Keys

Translations are organized hierarchically:

```typescript
{
  nav: {
    home: 'Home',
    blog: 'Blog'
  },
  home: {
    hero: {
      title: 'Welcome to My Blog',
      subtitle: '...'
    }
  }
}
```

### Using Translations

```astro
---
import { getTranslation } from '../i18n/index';
const lang = getLanguageFromUrl(Astro.url);
---

<h1>{getTranslation('home.hero.title', lang)}</h1>
```

### Translation with Parameters

```typescript
// Translation
{
  footer: {
    copyright: '© {year} Your Blog. All rights reserved.'
  }
}

// Usage
getTranslation('footer.copyright', lang, { year: '2024' })
```

## 🎨 Language Selector Component

The `LanguageSelector.astro` component provides:

- **Dropdown Interface**: Clean, accessible dropdown
- **Keyboard Navigation**: Full keyboard support
- **Visual Feedback**: Active language highlighting
- **URL Generation**: Automatic URL generation for language switching

### Features

- **Hover/Click Activation**: Works with both hover and click
- **Outside Click Detection**: Closes when clicking outside
- **Accessibility**: Proper ARIA attributes and keyboard navigation
- **Smooth Animations**: CSS transitions for smooth interactions

## 🔄 Language Switching

### Automatic Redirects

The system includes intelligent redirects:

- **Root URL** (`/`): Redirects to user's preferred language
- **Blog URL** (`/blog`): Redirects to language-specific blog
- **Invalid Language**: Redirects to default language

### URL Generation

```typescript
// Generate language-specific URLs
const url = lang === 'en' ? '/blog' : `/${lang}/blog`;
```

## 📊 SEO Features

### Hreflang Tags

Automatically generated for each page:

```html
<link rel="alternate" hreflang="en" href="/blog" />
<link rel="alternate" hreflang="id" href="/id/blog" />
<link rel="alternate" hreflang="es" href="/es/blog" />
<link rel="alternate" hreflang="x-default" href="/blog" />
```

### Meta Tags

Language-specific meta tags:

```html
<html lang="en" dir="ltr">
<meta property="og:locale" content="en" />
```

## 🛠️ Development

### Adding New Pages

1. **Create language-specific route**:
```
src/pages/[lang]/new-page.astro
```

2. **Add translations**:
```typescript
// In each translation file
{
  newPage: {
    title: 'New Page',
    description: 'Page description'
  }
}
```

3. **Use translations**:
```astro
---
import { getTranslation } from '../../i18n/index';
const lang = getLanguageFromUrl(Astro.url);
---

<h1>{getTranslation('newPage.title', lang)}</h1>
```

### Testing Different Languages

1. **Direct URL access**: `/id/blog`, `/es/about`
2. **Language selector**: Use the dropdown in the header
3. **Browser language**: Change browser language settings

## 🚀 Deployment Considerations

### Static Generation

All language variants are pre-generated:

```typescript
export async function getStaticPaths() {
  const posts = await getCollection('blog');
  const paths = [];
  
  for (const lang of ['en', 'id', 'es']) {
    for (const post of posts) {
      paths.push({
        params: { 
          lang: lang === 'en' ? undefined : lang,
          slug: post.slug 
        },
        props: { post, lang }
      });
    }
  }
  
  return paths;
}
```

### Performance

- **Lazy Loading**: Translations loaded on demand
- **Caching**: Language preferences cached in localStorage
- **CDN Ready**: All language variants can be cached by CDN

## 🔧 Customization

### Adding More Languages

1. **Update config** (`src/i18n/config.ts`)
2. **Create translation file** (`src/i18n/translations/[lang].ts`)
3. **Update imports** (`src/i18n/index.ts`)
4. **Test thoroughly** with native speakers

### Custom Language Selector

You can customize the language selector by modifying `LanguageSelector.astro`:

```astro
<!-- Custom styling -->
<div class="custom-language-selector">
  <!-- Your custom implementation -->
</div>
```

### Date/Number Formatting

Language-specific formatting:

```typescript
const formatDate = (date: Date, language: Language) => {
  return new Intl.DateTimeFormat(
    language === 'en' ? 'en-US' : 
    language === 'id' ? 'id-ID' : 'en-US',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  ).format(date);
};
```

## 🐛 Troubleshooting

### Common Issues

1. **Translation not found**:
   - Check translation key exists in all language files
   - Verify import in `src/i18n/index.ts`

2. **Language not switching**:
   - Clear localStorage: `localStorage.removeItem('preferred-language')`
   - Check browser language settings

3. **SEO issues**:
   - Verify hreflang tags are generated
   - Check canonical URLs

4. **Build errors**:
   - Ensure all translation files are properly imported
   - Check for missing translation keys

### Debug Mode

Enable debug logging:

```typescript
// In your component
console.log('Current language:', lang);
console.log('Translation:', getTranslation('key', lang));
```

## 📈 Analytics

### Language Usage Tracking

Track language preferences:

```javascript
// Track language selection
function trackLanguageChange(lang) {
  // Your analytics code
  gtag('event', 'language_change', {
    language: lang
  });
}
```

### SEO Monitoring

Monitor language-specific performance:

- **Search Console**: Set up language-specific properties
- **Analytics**: Track language-specific user behavior
- **Performance**: Monitor page load times per language

## 🎯 Best Practices

### Translation Management

1. **Consistent Keys**: Use consistent naming conventions
2. **Context Comments**: Add comments for translators
3. **Parameter Validation**: Validate translation parameters
4. **Fallback Strategy**: Always provide English fallback

### Content Strategy

1. **Localized Content**: Consider cultural differences
2. **Date Formats**: Use appropriate date formats per locale
3. **Number Formats**: Use locale-appropriate number formatting
4. **Currency**: Consider currency display for e-commerce

### Performance

1. **Bundle Optimization**: Consider code-splitting by language
2. **Caching Strategy**: Cache language preferences
3. **CDN Configuration**: Configure CDN for language variants

## 🔮 Future Enhancements

### Planned Features

- **RTL Support**: Right-to-left language support
- **Dynamic Translations**: Server-side translation loading
- **Translation Management**: Admin interface for translations
- **Auto-translation**: AI-powered translation suggestions
- **Language Analytics**: Detailed language usage analytics

### Community Contributions

- **Translation Crowdsourcing**: Community translation platform
- **Language Packs**: Downloadable language packs
- **Translation Memory**: Shared translation database

---

This multi-language system provides a solid foundation for international blog themes while maintaining excellent performance and SEO optimization. The modular design makes it easy to extend and customize for specific needs. 