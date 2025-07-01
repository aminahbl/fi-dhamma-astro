import { defaultLang, showDefaultLang } from './ui';
import uiFi from '../content/ui/fi.json';
import uiEn from '../content/ui/en.json';

const ui = {
  fi: uiFi,
  en: uiEn,
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = ui[lang] || ui[defaultLang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: keyof typeof ui = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${String(l)}${path}`;
  }
}
