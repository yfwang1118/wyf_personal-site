import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";
import {
  getWritingArticle,
  getWritingArticles,
  getWritingArticlesByCategory,
  getWritingSeriesByCategory,
  getWritingSeriesHref,
  getWritingHref
} from "@/lib/writing";

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
  const allWritingArticles = getWritingArticles(dictionary.writing);
  const writingDirections = dictionary.writing.categories.map((category) => ({
    category,
    series: getWritingSeriesByCategory(dictionary.writing, category.key),
    articles: getWritingArticlesByCategory(dictionary.writing, category.key)
  }));
  const primaryDirection = writingDirections.find((item) => item.category.key === "llm-ai") ?? writingDirections[0];
  const secondaryDirections = writingDirections.filter((item) => item.category.key !== primaryDirection.category.key);
  const primarySeries = primaryDirection.series[0];
  const currentPractice = dictionary.profile.selectedWork.map((item) => ({
    ...item,
    article: item.relatedWritingSlug ? getWritingArticle(dictionary.writing, item.relatedWritingSlug) : undefined
  }));
  const homeCopy =
    locale === "en"
      ? {
          overview: "Profile",
          current: "Current role",
          focus: "Focus",
          writing: "Writing",
          categories: "Directions",
          heroPrimary: "Browse writing",
          heroSecondary: "See work",
          focusEyebrow: "Core areas",
          focusTitle: "The problems I keep returning to",
          focusCopy:
            "The common thread is translating messy real-task behavior into systems that can be trained, measured, and iterated on.",
          writingEyebrow: "Writing",
          writingTitle: "Make the LLM / AI track the clear primary line on the homepage",
          writingCopy:
            "The homepage should not flatten all writing into three equal cards. LLM / AI is the main body of work, while philosophy / issues and literary writing stay visible as secondary but durable tracks.",
          writingButton: "Open writing",
          primaryTrack: "Primary track",
          primarySeries: "Core series",
          seriesLabel: "Series",
          openSeries: "Open series",
          openDirection: "Open direction",
          seriesCount: "Series",
          articleCount: "Articles",
          upcoming: "In preparation",
          practiceEyebrow: "Current practice",
          practiceTitle: "What the work actually looks like right now",
          practiceCopy:
            "Instead of expanding work into broad claims, I would rather point to the concrete loops I keep building and the essays that come out of them.",
          practiceButton: "Open work",
          relatedEssay: "Related essay",
          contactEyebrow: "Reach out",
          contactTitle: "If the overlap is real, let's talk",
          contactCopy:
            "I am most interested in conversations around post-training systems, coding agents, evaluation design, and writing about AI systems.",
          contactButton: "Contact",
          totalArticles: "Article pages"
        }
      : {
          overview: "人物概览",
          current: "当前角色",
          focus: "聚焦方向",
          writing: "写作",
          categories: "方向",
          heroPrimary: "进入写作",
          heroSecondary: "查看工作",
          focusEyebrow: "核心方向",
          focusTitle: "我会反复回到的几类问题",
          focusCopy: "它们背后的共同主题，是把真实任务中的复杂行为翻译成可训练、可测量、可持续迭代的系统问题。",
          writingEyebrow: "写作结构",
          writingTitle: "主页上，LLM / AI 应该是最明确的主线",
          writingCopy:
            "我不想把三类写作平均摊开。主页里，LLM / AI 应该作为主区被优先看见；哲学 / 议题与文学创作则作为另外两条长期线被保留下来。",
          writingButton: "进入写作",
          primaryTrack: "核心主线",
          primarySeries: "当前重点专题",
          seriesLabel: "专题",
          openSeries: "进入专题",
          openDirection: "查看方向",
          seriesCount: "个专题",
          articleCount: "篇文章",
          upcoming: "专题整理中",
          practiceEyebrow: "当前实践",
          practiceTitle: "我现在真正长期在做的几条工作线",
          practiceCopy: "与其把 work 展开成很多抽象卡片，我更愿意把它压缩成几条具体的问题链，并直接连到对应文章。",
          practiceButton: "查看 work",
          relatedEssay: "相关文章",
          contactEyebrow: "联系我",
          contactTitle: "如果方向重合，欢迎直接交流",
          contactCopy: "我最愿意聊的话题是后训练系统、Coding Agent、评测设计，以及如何书写 AI 系统。",
          contactButton: "联系",
          totalArticles: "篇文章页"
        };

  return (
    <>
      <section className="site-shell section section--hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{homeCopy.overview}</div>
            <h1 className="hero-title">{dictionary.profile.hero.headline}</h1>
            <p className="hero-summary">{dictionary.profile.hero.subheadline}</p>
            <div className="hero-actions">
              <Link className="button-link" href={`/${locale}/writing` as Route}>
                {homeCopy.heroPrimary}
              </Link>
              <Link className="button-link button-link--secondary" href={`/${locale}/work` as Route}>
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
                  {dictionary.writing.categories.length} {homeCopy.categories} · {allWritingArticles.length} {homeCopy.totalArticles}
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
        <div className="section-heading">
          <div className="eyebrow">{homeCopy.writingEyebrow}</div>
          <h2 className="section-title">{homeCopy.writingTitle}</h2>
          <p className="section-copy">{homeCopy.writingCopy}</p>
        </div>
        <div className="writing-home-layout">
          <article className="surface-card writing-spotlight">
            <div className="article-card__meta">
              <span>{primaryDirection.category.title}</span>
              <span className="pill">{homeCopy.primaryTrack}</span>
            </div>
            <h3 className="detail-card__title" style={{ marginTop: 0 }}>
              {primaryDirection.category.title}
            </h3>
            <p className="detail-card__copy">{primaryDirection.category.description}</p>
            <div className="writing-spotlight__stats">
              <div className="essay-shell__meta-item">
                <span className="signal-list__label">{homeCopy.seriesCount}</span>
                <div>{primaryDirection.series.length}</div>
              </div>
              <div className="essay-shell__meta-item">
                <span className="signal-list__label">{homeCopy.articleCount}</span>
                <div>{primaryDirection.articles.length}</div>
              </div>
            </div>
            {primarySeries ? (
              <div className="series-preview">
                <span className="signal-list__label">{homeCopy.primarySeries}</span>
                <h4>{primarySeries.title}</h4>
                <p>{primarySeries.description}</p>
                <ul className="detail-card__list">
                  {primarySeries.articles.slice(0, 3).map((article) => (
                    <li key={article.slug}>{article.title}</li>
                  ))}
                </ul>
                <div className="hero-actions" style={{ marginTop: "1.4rem" }}>
                  <Link className="button-link" href={getWritingSeriesHref(locale, primarySeries.slug) as Route}>
                    {homeCopy.openSeries}
                  </Link>
                  <Link className="button-link button-link--secondary" href={`/${locale}/writing` as Route}>
                    {homeCopy.writingButton}
                  </Link>
                </div>
              </div>
            ) : null}
          </article>

          <div className="panel-stack">
            {secondaryDirections.map((item) => {
              const representativeSeries = item.series[0];

              return (
                <article key={item.category.key} className="surface-card detail-card">
                  <div className="article-card__meta">
                    <span>{item.category.title}</span>
                    <span className="pill">{representativeSeries ? homeCopy.seriesLabel : homeCopy.upcoming}</span>
                  </div>
                  <h3 className="detail-card__title" style={{ marginTop: 0 }}>
                    {representativeSeries?.title ?? item.category.title}
                  </h3>
                  <p className="detail-card__copy">
                    {representativeSeries?.description ?? item.category.description}
                  </p>
                  <div className="writing-spotlight__stats">
                    <div className="essay-shell__meta-item">
                      <span className="signal-list__label">{homeCopy.seriesCount}</span>
                      <div>{item.series.length}</div>
                    </div>
                    <div className="essay-shell__meta-item">
                      <span className="signal-list__label">{homeCopy.articleCount}</span>
                      <div>{item.articles.length}</div>
                    </div>
                  </div>
                  <div className="article-card__actions">
                    {representativeSeries ? (
                      <Link className="button-link button-link--secondary" href={getWritingSeriesHref(locale, representativeSeries.slug) as Route}>
                        {homeCopy.openDirection}
                      </Link>
                    ) : (
                      <a className="button-link button-link--secondary" href={`/${locale}/writing#${item.category.key}`}>
                        {homeCopy.openDirection}
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-shell section">
        <div className="split-layout">
          <div className="section-heading">
            <div className="eyebrow">{homeCopy.practiceEyebrow}</div>
            <h2 className="section-title">{homeCopy.practiceTitle}</h2>
            <p className="section-copy">{homeCopy.practiceCopy}</p>
            <div style={{ marginTop: "1.4rem" }}>
              <Link className="button-link button-link--secondary" href={`/${locale}/work` as Route}>
                {homeCopy.practiceButton}
              </Link>
            </div>
          </div>
          <div className="panel-stack">
            {currentPractice.map((item, index) => (
              <article key={item.title} className="surface-card detail-card">
                <div className="detail-card__index">0{index + 1}</div>
                <h3 className="detail-card__title">{item.title}</h3>
                <p className="detail-card__copy">{item.summary}</p>
                {item.article ? (
                  <div className="article-reference">
                    <span className="signal-list__label">{homeCopy.relatedEssay}</span>
                    <Link className="article-reference__link" href={getWritingHref(locale, item.article.slug) as Route}>
                      {item.article.title}
                    </Link>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
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
