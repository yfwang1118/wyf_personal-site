import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { getWritingArticlesByCategory, getWritingHref, getWritingSeries, getWritingSeriesByCategory, getWritingSeriesHref, getWritingSeriesItem } from "@/lib/writing";

export function generateStaticParams() {
  const locales: Locale[] = ["en", "zh"];

  return locales.flatMap((locale) =>
    getWritingSeries(getDictionary(locale).writing).map((series) => ({
      lang: locale,
      slug: series.slug
    }))
  );
}

export default async function WritingSeriesPage({
  params
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dictionary = getDictionary(locale);
  const series = getWritingSeriesItem(dictionary.writing, slug);

  if (!series) {
    notFound();
  }

  const relatedSeries = getWritingSeriesByCategory(dictionary.writing, series.category.key).filter(
    (item) => item.slug !== series.slug
  );
  const fallbackArticles = getWritingArticlesByCategory(dictionary.writing, series.category.key).filter(
    (item) => item.series?.slug !== series.slug
  );
  const copy =
    locale === "en"
      ? {
          backToWriting: "Back to writing",
          direction: "Direction",
          seriesLabel: "Series",
          articleCount: "Articles",
          openArticle: "Read article",
          openSeries: "Open series",
          noArticles: "Articles in preparation",
          noArticlesCopy:
            "This series has been created as part of the larger writing map, but the article list is still being expanded.",
          relatedEyebrow: "Related",
          relatedTitle: "Continue through the same direction",
          relatedCopy:
            "Series sit in the middle layer of the writing system, so nearby series in the same direction should remain easy to reach."
        }
      : {
          backToWriting: "返回写作页",
          direction: "方向",
          seriesLabel: "专题",
          articleCount: "篇文章",
          openArticle: "阅读文章",
          openSeries: "进入专题",
          noArticles: "文章整理中",
          noArticlesCopy: "这个专题已经进入整体结构里，但具体文章还在持续补充。",
          relatedEyebrow: "继续阅读",
          relatedTitle: "沿着同一方向继续往下看",
          relatedCopy: "专题应该承担中间层的组织作用，所以同一方向下的相邻专题也应该能被顺手看到。"
        };

  return (
    <>
      <section className="site-shell section section--hero">
        <div className="content-narrow">
          <div className="eyebrow">
            {series.category.title}
            <span>·</span>
            <span>{copy.seriesLabel}</span>
          </div>
          <h1 className="section-title" style={{ fontSize: "clamp(2.6rem, 6vw, 4.4rem)" }}>
            {series.title}
          </h1>
          <p className="hero-summary">{series.description}</p>
          <div className="hero-actions">
            <Link className="button-link button-link--secondary" href={`/${locale}/writing` as Route}>
              {copy.backToWriting}
            </Link>
          </div>
        </div>
      </section>

      <section className="site-shell section">
        <article className="surface-card essay-shell">
          <div className="essay-shell__meta">
            <div className="essay-shell__meta-item">
              <span className="signal-list__label">{copy.direction}</span>
              <div>{series.category.title}</div>
            </div>
            <div className="essay-shell__meta-item">
              <span className="signal-list__label">{copy.articleCount}</span>
              <div>{series.articles.length}</div>
            </div>
          </div>
          {series.articles.length > 0 ? (
            <div className="series-grid">
              {series.articles.map((article, index) => (
                <article key={article.slug} className="surface-card series-card">
                  <div className="article-card__meta">
                    <span>
                      {copy.seriesLabel} 0{index + 1}
                    </span>
                    <span className="pill">{series.category.title}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.summary}</p>
                  <div className="article-card__actions">
                    <Link className="button-link button-link--secondary" href={getWritingHref(locale, article.slug) as Route}>
                      {copy.openArticle}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state-card">
              <div className="eyebrow">{copy.noArticles}</div>
              <h3>{series.title}</h3>
              <p>{copy.noArticlesCopy}</p>
            </div>
          )}
        </article>
      </section>

      {relatedSeries.length > 0 || fallbackArticles.length > 0 ? (
        <section className="site-shell section">
          <div className="section-heading">
            <div className="eyebrow">{copy.relatedEyebrow}</div>
            <h2 className="section-title">{copy.relatedTitle}</h2>
            <p className="section-copy">{copy.relatedCopy}</p>
          </div>
          <div className="grid-3">
            {relatedSeries.slice(0, 3).map((item) => (
              <article key={item.slug} className="surface-card article-card article-card--linked">
                <div className="article-card__meta">
                  <span>{item.category.title}</span>
                  <span className="pill">{copy.seriesLabel}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="article-card__actions">
                  <Link className="button-link button-link--secondary" href={getWritingSeriesHref(locale, item.slug) as Route}>
                    {copy.openSeries}
                  </Link>
                </div>
              </article>
            ))}
            {relatedSeries.length === 0
              ? fallbackArticles.slice(0, 3).map((item) => (
                  <article key={item.slug} className="surface-card article-card article-card--linked">
                    <div className="article-card__meta">
                      <span>{item.category.title}</span>
                      <span className="pill">{copy.articleCount}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <div className="article-card__actions">
                      <Link className="button-link button-link--secondary" href={getWritingHref(locale, item.slug) as Route}>
                        {copy.openArticle}
                      </Link>
                    </div>
                  </article>
                ))
              : null}
          </div>
        </section>
      ) : null}
    </>
  );
}
