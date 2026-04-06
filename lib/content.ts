import { aboutEn } from "@/content/about.en";
import { aboutZh } from "@/content/about.zh";
import { contactEn } from "@/content/contact.en";
import { contactZh } from "@/content/contact.zh";
import { navigationEn, navigationZh } from "@/content/navigation";
import { profileEn } from "@/content/profile.en";
import { profileZh } from "@/content/profile.zh";
import { workEn } from "@/content/work.en";
import { workZh } from "@/content/work.zh";
import { writingEn } from "@/content/writing.en";
import { writingZh } from "@/content/writing.zh";
import { type Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/types";

const dictionaries: Record<Locale, SiteDictionary> = {
  en: {
    navigation: navigationEn,
    profile: profileEn,
    work: workEn,
    writing: writingEn,
    about: aboutEn,
    contact: contactEn
  },
  zh: {
    navigation: navigationZh,
    profile: profileZh,
    work: workZh,
    writing: writingZh,
    about: aboutZh,
    contact: contactZh
  }
};

export function getDictionary(lang: Locale) {
  return dictionaries[lang];
}
