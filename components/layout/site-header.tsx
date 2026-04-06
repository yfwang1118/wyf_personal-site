"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { NavigationDictionary, ProfileContent } from "@/lib/types";
import { type Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  lang: Locale;
  navigation: NavigationDictionary;
  profile: ProfileContent;
};

export function SiteHeader({ lang, navigation, profile }: SiteHeaderProps) {
  const pathname = usePathname();
  const homeHref = `/${lang}` as Route;

  return (
    <header className="site-shell site-header">
      <div className="site-header__bar">
        <div className="site-header__brand">
          <Link className="site-header__name" href={homeHref}>
            {profile.name}
          </Link>
          <p className="site-header__title">{profile.title}</p>
        </div>
        <div className="site-header__controls">
          <nav className="site-nav" aria-label={lang === "en" ? "Primary navigation" : "主导航"}>
          {navigation.items.map((item) => {
            const href = `/${lang}${item.href === "/" ? "" : item.href}` as Route;
            const isHome = item.href === "/";
            const isActive = isHome
              ? pathname === href
              : pathname === href || pathname.startsWith(`${href}/`);

            return (
              <Link
                key={item.href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`site-nav__link${isActive ? " is-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          </nav>
          <LanguageSwitcher currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
