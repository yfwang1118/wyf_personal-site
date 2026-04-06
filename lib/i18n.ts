export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
