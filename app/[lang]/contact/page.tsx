import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export default async function ContactPage({
  params
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dictionary = getDictionary(locale);
  const copy =
    locale === "en"
      ? {
          overview: "Contact",
          availability: "Availability",
          availabilityTitle: "Best for conversations around LLM systems and writing",
          availabilityCopy:
            "The most relevant messages are usually about post-training loops, coding agents, evaluation design, or technical writing around AI systems.",
          methodsEyebrow: "Channels",
          methodsTitle: "Where to reach me",
          methodsCopy: "Email is the most direct path. GitHub is the best place to see code and current projects.",
          topicsEyebrow: "Good reasons to reach out",
          topicsTitle: "Topics I am especially happy to discuss",
          topicsCopy:
            "If your problem overlaps with these areas, the conversation will probably be useful immediately.",
          resumeLabel: "Resume"
        }
      : {
          overview: "联系",
          availability: "适合交流的话题",
          availabilityTitle: "最适合围绕 LLM 系统与写作相关的问题交流",
          availabilityCopy: "最匹配的消息通常来自后训练闭环、Coding Agent、评测设计，或者 AI 系统相关技术写作。",
          methodsEyebrow: "联系方式",
          methodsTitle: "可以通过这些入口找到我",
          methodsCopy: "邮箱是最直接的方式，GitHub 更适合看代码和最近的项目。",
          topicsEyebrow: "欢迎交流",
          topicsTitle: "这几类问题我尤其愿意展开聊",
          topicsCopy: "如果你的问题和这些方向重合，通常能比较快进入有效交流。",
          resumeLabel: "简历"
        };

  return (
    <>
      <section className="site-shell section section--hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{copy.overview}</div>
            <h1 className="section-title" style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}>
              {dictionary.contact.pageTitle}
            </h1>
            <p className="hero-summary">{dictionary.contact.intro}</p>
          </div>
          <aside className="surface-card hero-panel">
            <div>
              <div className="eyebrow">{copy.availability}</div>
              <h2 className="hero-panel__heading">{copy.availabilityTitle}</h2>
            </div>
            <p className="hero-panel__copy">{copy.availabilityCopy}</p>
            <div className="hero-links">
              <a className="hero-link" href={dictionary.contact.resume.href}>
                <span>{copy.resumeLabel}</span>
                <span>{dictionary.contact.resume.note}</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="site-shell section">
        <div className="section-heading">
          <div className="eyebrow">{copy.methodsEyebrow}</div>
          <h2 className="section-title">{copy.methodsTitle}</h2>
          <p className="section-copy">{copy.methodsCopy}</p>
        </div>
        <div className="contact-grid">
          {dictionary.contact.methods.map((method) => {
            const isExternal = method.href.startsWith("http");

            return (
              <a
                key={method.label}
                className="surface-card contact-card"
                href={method.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
              >
                <p className="contact-card__label">{method.label}</p>
                <p className="contact-card__value">{method.value}</p>
              </a>
            );
          })}
          <a className="surface-card contact-card" href={dictionary.contact.resume.href}>
            <p className="contact-card__label">{copy.resumeLabel}</p>
            <p className="contact-card__value">{dictionary.contact.resume.note}</p>
          </a>
        </div>
      </section>

      <section className="site-shell section">
        <div className="section-heading">
          <div className="eyebrow">{copy.topicsEyebrow}</div>
          <h2 className="section-title">{copy.topicsTitle}</h2>
          <p className="section-copy">{copy.topicsCopy}</p>
        </div>
        <div className="grid-3">
          {dictionary.profile.focusAreas.map((area, index) => (
            <article key={area.title} className="surface-card detail-card">
              <div className="detail-card__index">0{index + 1}</div>
              <h3 className="detail-card__title">{area.title}</h3>
              <p className="detail-card__copy">{area.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
