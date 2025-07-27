import { en } from './translations/en';
import { id } from './translations/id';
import { es } from './translations/es';
import type { Language } from './config';

export const translations = {
  en,
  id,
  es
};

export type TranslationKey = keyof typeof en;

// Get translation for a specific key and language
export function getTranslation(
  key: string,
  lang: Language,
  params?: Record<string, string | number>
): string {
  const keys = key.split('.');
  let translation: any = translations[lang] || translations.en;
  
  for (const k of keys) {
    translation = translation?.[k];
    if (!translation) {
      // Fallback to English
      let fallback: any = translations.en;
      for (const fk of keys) {
        fallback = fallback?.[fk];
      }
      translation = fallback || key;
      break;
    }
  }
  
  if (typeof translation !== 'string') {
    return key;
  }
  
  // Replace parameters
  if (params) {
    return translation.replace(/\{(\w+)\}/g, (match, param) => {
      return params[param]?.toString() || match;
    });
  }
  
  return translation;
}

// Get all translations for a specific key
export function getAllTranslations(key: string): Record<Language, string> {
  const result: Record<Language, string> = {} as Record<Language, string>;
  
  Object.keys(translations).forEach((lang) => {
    result[lang as Language] = getTranslation(key, lang as Language);
  });
  
  return result;
}

// Check if a translation exists
export function hasTranslation(key: string, lang: Language): boolean {
  const keys = key.split('.');
  let translation: any = translations[lang];
  
  for (const k of keys) {
    translation = translation?.[k];
    if (!translation) {
      return false;
    }
  }
  
  return typeof translation === 'string';
}

// Get translation with fallback
export function getTranslationWithFallback(
  key: string,
  lang: Language,
  fallbackLang: Language = 'en',
  params?: Record<string, string | number>
): string {
  if (hasTranslation(key, lang)) {
    return getTranslation(key, lang, params);
  }
  
  return getTranslation(key, fallbackLang, params);
} 