import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export default async function WorkPage({
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
  const currentRole = dictionary.work.roles[0];
  const copy =
    locale === "en"
      ? {
          overview: "Work",
          summary: "Current scope",
          themesEyebrow: "Capability themes",
          themesTitle: "The layers I usually connect inside a single project",
          themesCopy:
            "Most of my work is cross-functional by default: model behavior, data construction, evaluation design, and engineering interfaces move together.",
          rolesEyebrow: "Experience",
          rolesTitle: "Roles shaped by real-task iteration",
          rolesCopy:
            "I have mostly worked on systems that have to absorb ambiguity from product requirements and translate it into reproducible technical loops.",
          outcomesEyebrow: "Outcomes and skills",
          outcomesTitle: "What this work has been building toward",
          outcomesCopy:
            "Across roles, the recurring goal has been to make model improvement more diagnosable, more operational, and closer to real production behavior."
        }
      : {
          overview: "工作",
          summary: "当前范围",
          themesEyebrow: "能力主题",
          themesTitle: "我通常会在一个项目里同时连接的几层问题",
          themesCopy: "我的工作天然是跨层的：模型行为、数据构造、评测设计与工程接口，往往需要一起推进。",
          rolesEyebrow: "经历",
          rolesTitle: "被真实任务迭代塑造出来的工作经历",
          rolesCopy: "我做得最多的，是把业务里的模糊需求吸收到系统里，再翻译成可复现、可迭代的技术闭环。",
          outcomesEyebrow: "产出与能力",
          outcomesTitle: "这些工作最终在往哪里积累",
          outcomesCopy: "跨不同角色，一条主线始终没变：让模型优化更可诊断、更工程化，也更贴近真实生产行为。"
        };

  return (
    <>
      <section className="site-shell section section--hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{copy.overview}</div>
            <h1 className="section-title" style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}>
              {dictionary.work.pageTitle}
            </h1>
            <p className="hero-summary">{dictionary.work.overview}</p>
          </div>
          <aside className="surface-card hero-panel">
            <div>
              <div className="eyebrow">{copy.summary}</div>
              <h2 className="hero-panel__heading">
                {currentRole.company} · {currentRole.title}
              </h2>
            </div>
            <p className="hero-panel__copy">{currentRole.summary}</p>
            <dl className="hero-facts">
              <div className="hero-fact">
                <dt>{locale === "en" ? "Period" : "时间"}</dt>
                <dd>{currentRole.period}</dd>
              </div>
              <div className="hero-fact">
                <dt>{locale === "en" ? "Themes" : "主题数"}</dt>
                <dd>{dictionary.work.themes.length}</dd>
              </div>
              <div className="hero-fact">
                <dt>{locale === "en" ? "Roles" : "经历数"}</dt>
                <dd>{dictionary.work.roles.length}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="site-shell section">
        <div className="section-heading">
          <div className="eyebrow">{copy.themesEyebrow}</div>
          <h2 className="section-title">{copy.themesTitle}</h2>
          <p className="section-copy">{copy.themesCopy}</p>
        </div>
        <div className="grid-2">
          {dictionary.work.themes.map((theme, index) => (
            <article key={theme.title} className="surface-card detail-card">
              <div className="detail-card__index">0{index + 1}</div>
              <h3 className="detail-card__title">{theme.title}</h3>
              <ul className="detail-card__list">
                {theme.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section">
        <div className="section-heading">
          <div className="eyebrow">{copy.rolesEyebrow}</div>
          <h2 className="section-title">{copy.rolesTitle}</h2>
          <p className="section-copy">{copy.rolesCopy}</p>
        </div>
        <div className="timeline">
          {dictionary.work.roles.map((role) => (
            <article key={`${role.company}-${role.period}`} className="surface-card timeline-card">
              <div className="timeline-card__meta">
                <div>
                  <p className="timeline-card__role">{role.title}</p>
                  <h3 className="timeline-card__company">{role.company}</h3>
                </div>
                <div className="timeline-card__period">{role.period}</div>
              </div>
              <p className="timeline-card__summary">{role.summary}</p>
              <ul className="bullet-list">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section">
        <div className="split-layout">
          <div className="section-heading">
            <div className="eyebrow">{copy.outcomesEyebrow}</div>
            <h2 className="section-title">{copy.outcomesTitle}</h2>
            <p className="section-copy">{copy.outcomesCopy}</p>
          </div>
          <div className="panel-stack">
            <div className="surface-card detail-card">
              <h3 className="detail-card__title">{dictionary.work.sections.outcomes}</h3>
              <ul className="check-list">
                {dictionary.work.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
            <div className="tag-groups">
              {dictionary.work.skillGroups.map((group) => (
                <article key={group.title} className="surface-card tag-group">
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
