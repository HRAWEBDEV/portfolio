const locales = {
 en: { dir: 'ltr', lang: 'english', calendar: 'garegorian', langAlias: 'en' },
 fa: {
  dir: 'rtl',
  lang: 'persian',
  calendar: 'jalali',
  langAlias: 'fa',
 },
} as const;

type SupportedLocals = keyof typeof locales;

export { type SupportedLocals, locales };
