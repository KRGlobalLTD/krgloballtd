// src/i18n/adapter.ts
// ADAPTER MINCE autour du système i18n custom

let activeKey: 'fr' | 'en' = 'en';
try {
  const stored = localStorage.getItem('lang');
  if (stored === 'fr' || stored === 'en') {
    activeKey = stored;
  } else {
    localStorage.setItem('lang', activeKey);
  }
} catch {
  // ignore
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const __I18N__: any | undefined;

export function getLang(): string {
  try {
    return __I18N__?.getLang?.() ?? activeKey;
  } catch {
    return activeKey;
  }
}

export function setLang(lng: 'fr' | 'en') {
  activeKey = lng;
  try {
    __I18N__?.setLang?.(lng);
  } catch {
    /* no-op */
  }
  try {
    localStorage.setItem('lang', lng);
  } catch {
    /* no-op */
  }
}

export function t(key: string, fallback?: string): string {
  try {
    const v = __I18N__?.t?.(key);
    if (typeof v === 'string' && v.length) return v;
  } catch {
    /* ignore */
  }
  try {
    const dict = __I18N__?.dict?.[getLang()];
    if (dict && key in dict) return dict[key];
  } catch {
    /* ignore */
  }
  return fallback ?? key;
}

export function has(key: string): boolean {
  try {
    if (__I18N__?.has?.(key) === true) return true;
    const dict = __I18N__?.dict?.[getLang()];
    return !!dict && key in dict;
  } catch {
    return false;
  }
}
