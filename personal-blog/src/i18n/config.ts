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

export const defaultLanguage = 'en';

export const supportedLanguages = Object.keys(languages);

export type Language = keyof typeof languages;

// Language-specific configurations
export const languageConfig = {
  en: {
    dir: 'ltr',
    dateFormat: 'en-US',
    numberFormat: 'en-US'
  },
  id: {
    dir: 'ltr',
    dateFormat: 'id-ID',
    numberFormat: 'id-ID'
  },
  es: {
    dir: 'ltr',
    dateFormat: 'es-ES',
    numberFormat: 'es-ES'
  },
  fr: {
    dir: 'ltr',
    dateFormat: 'fr-FR',
    numberFormat: 'fr-FR'
  },
  de: {
    dir: 'ltr',
    dateFormat: 'de-DE',
    numberFormat: 'de-DE'
  },
  ja: {
    dir: 'ltr',
    dateFormat: 'ja-JP',
    numberFormat: 'ja-JP'
  },
  zh: {
    dir: 'ltr',
    dateFormat: 'zh-CN',
    numberFormat: 'zh-CN'
  },
  ko: {
    dir: 'ltr',
    dateFormat: 'ko-KR',
    numberFormat: 'ko-KR'
  }
};

// SEO language mappings
export const seoLanguageMap = {
  en: 'en',
  id: 'id',
  es: 'es',
  fr: 'fr',
  de: 'de',
  ja: 'ja',
  zh: 'zh',
  ko: 'ko'
};

// Get language from URL or localStorage
export function getLanguageFromUrl(url: URL): Language {
  const pathname = url.pathname;
  const langFromPath = pathname.split('/')[1] as Language;
  
  if (supportedLanguages.includes(langFromPath)) {
    return langFromPath;
  }
  
  return defaultLanguage;
}

// Get language from localStorage
export function getLanguageFromStorage(): Language {
  if (typeof window === 'undefined') return defaultLanguage;
  
  const stored = localStorage.getItem('preferred-language');
  if (stored && supportedLanguages.includes(stored)) {
    return stored as Language;
  }
  
  return defaultLanguage;
}

// Set language in localStorage
export function setLanguageInStorage(lang: Language): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('preferred-language', lang);
}

// Get browser language
export function getBrowserLanguage(): Language {
  if (typeof window === 'undefined') return defaultLanguage;
  
  const browserLang = navigator.language.split('-')[0];
  if (supportedLanguages.includes(browserLang)) {
    return browserLang as Language;
  }
  
  return defaultLanguage;
} 