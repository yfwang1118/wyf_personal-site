"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLang: Locale;
};

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const basePath = pathname ?? `/${currentLang}`;
  const buildPath = (lang: Locale) =>
    (basePath.match(/^\/(en|zh)(?=\/|$)/)
      ? basePath.replace(/^\/(en|zh)(?=\/|$)/, `/${lang}`)
      : `/${lang}`) as Route;

  return (
    <div className="language-switcher" aria-label={currentLang === "en" ? "Language switcher" : "语言切换"}>
      <Link
        href={buildPath("en")}
        className={`language-switcher__link${currentLang === "en" ? " is-current" : ""}`}
      >
        EN
      </Link>
      <Link
        href={buildPath("zh")}
        className={`language-switcher__link${currentLang === "zh" ? " is-current" : ""}`}
      >
        中文
      </Link>
    </div>
  );
}
