import type { ProfileContent } from "@/lib/types";
import { type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  lang: Locale;
  profile: ProfileContent;
};

export function SiteFooter({ lang, profile }: SiteFooterProps) {
  const footerCopy =
    lang === "en"
      ? "Open to conversations on research, engineering, and writing around LLM systems."
      : "欢迎围绕 LLM 系统相关的研究、工程与写作话题交流。";

  return (
    <footer className="site-shell site-footer">
      <div className="surface-card site-footer__grid">
        <div className="site-footer__intro">
          <div className="eyebrow">{lang === "en" ? "Elsewhere" : "更多入口"}</div>
          <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 4vw, 2.15rem)" }}>
            {profile.name}
          </h2>
          <p>{footerCopy}</p>
        </div>
        <div className="site-footer__links">
          {profile.contactLinks.map((link) => {
            const isExternal = link.href.startsWith("http");

            return (
              <a
                key={link.label}
                className="site-footer__link"
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                <span>{link.label}</span>
                <span>{link.value}</span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
