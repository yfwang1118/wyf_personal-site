import type { Route } from "next";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { NavigationDictionary, ProfileContent } from "@/lib/types";
import { type Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  lang: Locale;
  navigation: NavigationDictionary;
  profile: ProfileContent;
};

export function SiteHeader({ lang, navigation, profile }: SiteHeaderProps) {
  const homeHref = `/${lang}` as Route;

  return (
    <header className="site-shell" style={{ padding: "1.5rem 0 0.5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          borderBottom: "1px solid var(--border)",
          paddingBottom: "1rem"
        }}
      >
        <div>
          <Link href={homeHref} style={{ fontWeight: 600 }}>
            {profile.name}
          </Link>
        </div>
        <nav style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
          {navigation.items.map((item) => {
            const href = `/${lang}${item.href === "/" ? "" : item.href}` as Route;

            return (
              <Link key={item.href} href={href} className="muted">
              {item.label}
              </Link>
            );
          })}
          <LanguageSwitcher currentLang={lang} />
        </nav>
      </div>
    </header>
  );
}
