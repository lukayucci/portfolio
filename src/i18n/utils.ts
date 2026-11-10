import { ui, defaultLang, type Lang, type UIKey } from './ui';

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

export function getLangFromUrl(url: URL): Lang {
  const path = url.pathname.startsWith(basePath)
    ? url.pathname.slice(basePath.length)
    : url.pathname;
  const [, segment] = path.split('/');
  if (segment === 'en') return 'en';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function localizePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return `${basePath}${clean}`;
  return `${basePath}/en${clean === '/' ? '/' : clean}`;
}

export function otherLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
