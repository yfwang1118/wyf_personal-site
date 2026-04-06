import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export default async function HomePage({
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
  const homeCopy =
    locale === "en"
      ? {
          overview: "Profile",
          current: "Current role",
          focus: "Focus",
          writing: "Writing topics",
          featured: "Featured entries",
          topics: "Topics",
          heroPrimary: "See work",
          heroSecondary: "Browse writing",
          focusEyebrow: "Core areas",
          focusTitle: "Where I spend most of my time and attention",
          focusCopy:
            "The common thread is turning messy real-world behavior into systems that can be trained, evaluated, and improved.",
          workEyebrow: "Selected work",
          workTitle: "Problem spaces I keep returning to",
          workCopy:
            "These are the recurring threads in my recent engineering and research work across post-training, agent behavior, and evaluation.",
          principlesEyebrow: "How I work",
          principlesTitle: "What I optimize for beyond the model metric",
          principlesCopy:
            "I care about loops that survive contact with real tasks: reproducibility, failure localization, and a clear link between evidence and iteration.",
          writingEyebrow: "Writing tracks",
          writingTitle: "Three recurring themes in my writing",
          writingCopy:
            "I treat writing as a second workspace for clarifying ideas, pressure-testing concepts, and making technical intuitions more legible.",
          articles: "Articles",
          contactEyebrow: "Reach out",
          contactTitle: "If the overlap is real, let's talk",
          contactCopy:
            "I am most interested in conversations around post-training systems, coding agents, evaluation design, and writing about AI systems.",
          contactButton: "Contact"
        }
      : {
          overview: "人物概览",
          current: "当前角色",
          focus: "聚焦方向",
          writing: "写作结构",
          featured: "精选文章",
          topics: "专题",
          heroPrimary: "查看工作",
          heroSecondary: "进入写作",
          focusEyebrow: "核心方向",
          focusTitle: "我主要把时间放在哪里",
          focusCopy: "它们背后的共同主题，是把真实任务里的复杂行为转化为可训练、可评测、可持续优化的系统问题。",
          workEyebrow: "代表工作",
          workTitle: "我会反复回到的几个问题空间",
          workCopy: "最近几年的工程与研究工作，基本都围绕后训练、Agent 行为与评测系统这几条主线展开。",
          principlesEyebrow: "方法与判断",
          principlesTitle: "除了模型指标，我还在优化什么",
          principlesCopy:
            "我更在意那些能在真实任务中持续运转的闭环：可复现、能定位失效、并且让证据和迭代真正连接起来。",
          writingEyebrow: "写作专题",
          writingTitle: "我持续书写的三条主题线",
          writingCopy: "对我来说，写作是第二工作台，用来澄清概念、检验直觉，也让技术判断变得更可交流。",
          articles: "篇文章",
          contactEyebrow: "联系我",
          contactTitle: "如果方向重合，欢迎直接交流",
          contactCopy: "我最愿意聊的话题是后训练系统、Coding Agent、评测设计，以及如何书写 AI 系统。",
          contactButton: "联系"
        };

  const writingTopics = dictionary.writing.categories.map((category) => ({
    category,
    entries: dictionary.writing.entries.filter((entry) => entry.category === category.key)
  }));

  return (
    <>
      <section className="site-shell section section--hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{homeCopy.overview}</div>
            <h1 className="hero-title">{dictionary.profile.hero.headline}</h1>
            <p className="hero-summary">{dictionary.profile.hero.subheadline}</p>
            <div className="hero-actions">
              <Link className="button-link" href={`/${locale}/work` as Route}>
                {homeCopy.heroPrimary}
              </Link>
              <Link className="button-link button-link--secondary" href={`/${locale}/writing` as Route}>
                {homeCopy.heroSecondary}
              </Link>
            </div>
          </div>
          <aside className="surface-card surface-card--accent hero-panel">
            <div>
              <div className="eyebrow">{homeCopy.current}</div>
              <h2 className="hero-panel__heading">
                {currentRole.company} · {currentRole.title}
              </h2>
            </div>
            <p className="hero-panel__copy">{dictionary.profile.homeIntro.body}</p>
            <dl className="hero-facts">
              <div className="hero-fact">
                <dt>{homeCopy.current}</dt>
                <dd>{currentRole.period}</dd>
              </div>
              <div className="hero-fact">
                <dt>{homeCopy.focus}</dt>
                <dd>{dictionary.profile.focusAreas.map((area) => area.title).join(" · ")}</dd>
              </div>
              <div className="hero-fact">
                <dt>{homeCopy.writing}</dt>
                <dd>
                  {dictionary.writing.categories.length} {homeCopy.topics} ·{" "}
                  {dictionary.writing.entries.filter((entry) => entry.featured).length} {homeCopy.featured}
                </dd>
              </div>
            </dl>
            <div className="hero-links">
              {dictionary.profile.contactLinks.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <a
                    key={link.label}
                    className="hero-link"
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
          </aside>
        </div>
      </section>

      <section className="site-shell section">
        <div className="section-heading">
          <div className="eyebrow">{homeCopy.focusEyebrow}</div>
          <h2 className="section-title">{homeCopy.focusTitle}</h2>
          <p className="section-copy">{homeCopy.focusCopy}</p>
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

      <section className="site-shell section">
        <div className="split-layout">
          <div className="section-heading">
            <div className="eyebrow">{homeCopy.workEyebrow}</div>
            <h2 className="section-title">{homeCopy.workTitle}</h2>
            <p className="section-copy">{homeCopy.workCopy}</p>
          </div>
          <div className="panel-stack">
            {dictionary.profile.selectedWork.map((item, index) => (
              <article key={item.title} className="surface-card detail-card">
                <div className="detail-card__index">0{index + 1}</div>
                <h3 className="detail-card__title">{item.title}</h3>
                <p className="detail-card__copy">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell section">
        <div className="split-layout">
          <div className="section-heading">
            <div className="eyebrow">{homeCopy.principlesEyebrow}</div>
            <h2 className="section-title">{homeCopy.principlesTitle}</h2>
            <p className="section-copy">{homeCopy.principlesCopy}</p>
          </div>
          <div className="panel-stack">
            <aside className="surface-card quote-panel">
              <blockquote>{dictionary.about.whyWritingMatters}</blockquote>
              <cite>{dictionary.profile.name}</cite>
            </aside>
            <div className="signal-list">
              {dictionary.about.whatICareAbout.map((item, index) => (
                <div key={item} className="signal-list__item">
                  <span className="signal-list__label">
                    {locale === "en" ? "Priority" : "关注点"} 0{index + 1}
                  </span>
                  <div>{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell section">
        <div className="section-heading">
          <div className="eyebrow">{homeCopy.writingEyebrow}</div>
          <h2 className="section-title">{homeCopy.writingTitle}</h2>
          <p className="section-copy">{homeCopy.writingCopy}</p>
        </div>
        <div className="grid-3">
          {writingTopics.map(({ category, entries }) => (
            <article key={category.key} className="surface-card detail-card">
              <div className="eyebrow">{category.title}</div>
              <h3 className="detail-card__title">{entries[0]?.title ?? category.title}</h3>
              <p className="detail-card__copy">{category.description}</p>
              <ul className="detail-card__list">
                {entries.slice(0, 2).map((entry) => (
                  <li key={entry.slug}>{entry.title}</li>
                ))}
              </ul>
              <div style={{ marginTop: "1.1rem" }}>
                <a className="button-link button-link--secondary" href={`/${locale}/writing#${category.key}`}>
                  {locale === "en" ? "Open topic" : "进入专题"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section">
        <div className="split-layout">
          <div className="section-heading">
            <div className="eyebrow">{homeCopy.contactEyebrow}</div>
            <h2 className="section-title">{homeCopy.contactTitle}</h2>
            <p className="section-copy">{homeCopy.contactCopy}</p>
          </div>
          <div className="panel-stack">
            {dictionary.contact.methods.map((method) => {
              const isExternal = method.href.startsWith("http");

              return (
                <a
                  key={method.label}
                  className="hero-link"
                  href={method.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  <span>{method.label}</span>
                  <span>{method.value}</span>
                </a>
              );
            })}
            <Link className="button-link" href={`/${locale}/contact` as Route}>
              {homeCopy.contactButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
