import type { ProfileContent } from "@/lib/types";
import { type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  lang: Locale;
  profile: ProfileContent;
};

export function SiteFooter({ lang, profile }: SiteFooterProps) {
  return (
    <footer className="site-shell" style={{ paddingTop: "2rem" }}>
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem", color: "var(--muted)" }}>
        <p style={{ margin: 0 }}>
          {profile.name} · {lang === "en" ? "Bilingual personal site scaffold" : "双语个人网站骨架"}
        </p>
      </div>
    </footer>
  );
}
