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
  const nextLang = currentLang === "en" ? "zh" : "en";
  const switchedPath = pathname.replace(`/${currentLang}`, `/${nextLang}`) as Route;

  return (
    <Link href={switchedPath} style={{ fontSize: "0.95rem", color: "var(--muted)" }}>
      {currentLang === "en" ? "中文" : "EN"}
    </Link>
  );
}
