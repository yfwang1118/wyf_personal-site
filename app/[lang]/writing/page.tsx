import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { getWritingArticles, getWritingSeriesByCategory, getWritingSeriesHref } from "@/lib/writing";

export default async function WritingPage({
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
  const allArticles = getWritingArticles(dictionary.writing);
  const writingDirections = dictionary.writing.categories.map((category) => {
    const series = getWritingSeriesByCategory(dictionary.writing, category.key);
    const articleCount = series.reduce((count, item) => count + item.articles.length, 0);

    return {
      category,
      series,
      articleCount
    };
  });
  const copy =
    locale === "en"
      ? {
          overview: "Writing",
          directionsEyebrow: "Directions",
          directionsTitle: "Writing organized by direction and then by series",
          directionsCopy:
            "The structure here is simple: three long-running directions, each broken into series, with standalone article pages carrying the full text.",
          jumpPrimary: "See LLM / AI",
          jumpDirections: "Browse directions",
          totalDirections: "Directions",
          totalSeries: "Series",
          totalArticles: "Article pages",
          openSeries: "Open series",
          articleCount: "Articles",
          latestSeries: "Representative series",
          noSeries: "Series in preparation",
          noSeriesCopy:
            "This direction is already part of the writing system, but its long-form series is still being organized."
        }
      : {
          overview: "写作",
          directionsEyebrow: "方向",
          directionsTitle: "先按方向组织，再按专题展开",
          directionsCopy:
            "这里不是按时间堆叠的博客页，而是一张写作地图：最上层是三条长期方向，中间层是专题，正文则放在每篇独立文章页里。",
          jumpPrimary: "查看 LLM / AI",
          jumpDirections: "浏览全部方向",
          totalDirections: "个方向",
          totalSeries: "个专题",
          totalArticles: "篇文章页",
          openSeries: "进入专题",
          articleCount: "篇文章",
          latestSeries: "代表专题",
          noSeries: "专题整理中",
          noSeriesCopy: "这个方向已经被保留进写作结构里，但对应的长线专题还在持续整理。"
        };

  return (
    <>
      <section className="site-shell section section--hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{copy.overview}</div>
            <h1 className="section-title" style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}>
              {dictionary.writing.pageTitle}
            </h1>
            <p className="hero-summary">{dictionary.writing.intro}</p>
            <div className="hero-actions">
              <a className="button-link" href="#llm-ai">
                {copy.jumpPrimary}
              </a>
              <a className="button-link button-link--secondary" href="#directions">
                {copy.jumpDirections}
              </a>
            </div>
          </div>
          <aside className="surface-card editorial-card hero-panel">
            <div>
              <div className="eyebrow">{copy.directionsEyebrow}</div>
              <h2 className="hero-panel__heading">{copy.directionsTitle}</h2>
            </div>
            <p className="hero-panel__copy">{copy.directionsCopy}</p>
            <dl className="hero-facts">
              <div className="hero-fact">
                <dt>{copy.totalDirections}</dt>
                <dd>{writingDirections.length}</dd>
              </div>
              <div className="hero-fact">
                <dt>{copy.totalSeries}</dt>
                <dd>{dictionary.writing.series.length}</dd>
              </div>
              <div className="hero-fact">
                <dt>{copy.totalArticles}</dt>
                <dd>{allArticles.length}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="site-shell section" id="directions">
        <div className="section-heading">
          <div className="eyebrow">{copy.directionsEyebrow}</div>
          <h2 className="section-title">{copy.directionsTitle}</h2>
          <p className="section-copy">{copy.directionsCopy}</p>
        </div>
        <div className="grid-3">
          {writingDirections.map((item) => (
            <a key={item.category.key} className="topic-nav__item topic-nav__item--editorial" href={`#${item.category.key}`}>
              <strong>{item.category.title}</strong>
              <span>{item.category.description}</span>
              <span style={{ marginTop: "0.75rem" }}>
                {item.series.length} {copy.totalSeries} · {item.articleCount} {copy.totalArticles}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="site-shell section">
        <div className="panel-stack">
          {writingDirections.map((item) => (
            <section key={item.category.key} id={item.category.key} className="surface-card editorial-card topic-section">
              <div className="topic-section__head">
                <div className="eyebrow">{item.category.title}</div>
                <h2>{item.category.title}</h2>
                <p>{item.category.description}</p>
              </div>
              {item.series.length > 0 ? (
                <div className="series-grid">
                  {item.series.map((series) => (
                    <article key={series.slug} className="surface-card editorial-card series-card series-card--dense">
                      <div className="article-card__meta">
                        <span>{copy.latestSeries}</span>
                        <span className="pill">
                          {series.articles.length} {copy.articleCount}
                        </span>
                      </div>
                      <h3>{series.title}</h3>
                      <p>{series.description}</p>
                      {series.articles.length > 0 ? (
                        <ul className="detail-card__list">
                          {series.articles.slice(0, 3).map((article) => (
                            <li key={article.slug}>{article.title}</li>
                          ))}
                        </ul>
                      ) : null}
                      <div className="article-card__actions">
                        <Link className="text-link" href={getWritingSeriesHref(locale, series.slug) as Route}>
                          {copy.openSeries}
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="surface-card editorial-card empty-state-card">
                  <div className="eyebrow">{copy.noSeries}</div>
                  <h3>{item.category.title}</h3>
                  <p>{copy.noSeriesCopy}</p>
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
