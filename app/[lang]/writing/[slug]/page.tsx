import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";
import {
  getWritingArticle,
  getWritingArticles,
  getWritingArticlesByCategory,
  getWritingHref,
  getWritingSeries,
  getWritingSeriesHref,
  getWritingSeriesItem
} from "@/lib/writing";

export function generateStaticParams() {
  const locales: Locale[] = ["en", "zh"];

  return locales.flatMap((locale) =>
    getWritingArticles(getDictionary(locale).writing).map((article) => ({
      lang: locale,
      slug: article.slug
    }))
  );
}

export default async function WritingArticlePage({
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
  const article = getWritingArticle(dictionary.writing, slug);

  if (!article) {
    notFound();
  }

  const currentSeries = article.series ? getWritingSeriesItem(dictionary.writing, article.series.slug) : undefined;
  const relatedArticles = currentSeries
    ? getWritingArticles(dictionary.writing).filter(
        (item) => item.series?.slug === currentSeries.slug && item.slug !== article.slug
      )
    : getWritingArticlesByCategory(dictionary.writing, article.category.key).filter((item) => item.slug !== article.slug);
  const relatedSeries = getWritingSeries(dictionary.writing)
    .filter((item) => item.category.key === article.category.key && item.slug !== currentSeries?.slug)
    .slice(0, 3);
  const copy =
    locale === "en"
      ? {
          backToWriting: "Back to writing",
          backToSeries: "Back to series",
          relatedEyebrow: "Related",
          relatedTitle: "Continue from here",
          relatedCopy:
            "Article pages should remain attached to the larger structure, so the surrounding series and nearby essays are visible from the reading page.",
          openArticle: "Read article",
          openSeries: "Open series",
          inSeries: "Series",
          category: "Direction"
        }
      : {
          backToWriting: "返回写作页",
          backToSeries: "返回专题页",
          relatedEyebrow: "延伸阅读",
          relatedTitle: "从这里继续往下读",
          relatedCopy: "文章页不应该和整体结构断开，所以从正文页也应该能顺手回到专题，并继续沿着附近内容阅读。",
          openArticle: "阅读文章",
          openSeries: "进入专题",
          inSeries: "专题",
          category: "方向"
        };

  return (
    <>
      <section className="site-shell section section--hero">
        <div className="content-narrow">
          <div className="eyebrow">
            {article.category.title}
            {article.series ? (
              <>
                <span>·</span>
                <span>{article.series.title}</span>
              </>
            ) : null}
          </div>
          <h1 className="section-title" style={{ fontSize: "clamp(2.6rem, 6vw, 4.4rem)" }}>
            {article.title}
          </h1>
          <p className="hero-summary">{article.summary}</p>
          <div className="hero-actions">
            {article.series ? (
              <Link className="button-link" href={getWritingSeriesHref(locale, article.series.slug) as Route}>
                {copy.backToSeries}
              </Link>
            ) : null}
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
              <span className="signal-list__label">{copy.category}</span>
              <div>{article.category.title}</div>
            </div>
            {article.series ? (
              <div className="essay-shell__meta-item">
                <span className="signal-list__label">{copy.inSeries}</span>
                <div>{article.series.title}</div>
              </div>
            ) : null}
          </div>
          <div className="prose-flow">
            {article.content.map((paragraph, index) => (
              <p key={`${article.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      {relatedArticles.length > 0 || relatedSeries.length > 0 ? (
        <section className="site-shell section">
          <div className="section-heading">
            <div className="eyebrow">{copy.relatedEyebrow}</div>
            <h2 className="section-title">{copy.relatedTitle}</h2>
            <p className="section-copy">{copy.relatedCopy}</p>
          </div>
          <div className="grid-3">
            {relatedArticles.slice(0, 3).map((item) => (
              <article key={item.slug} className="surface-card article-card article-card--linked">
                <div className="article-card__meta">
                  <span>{item.category.title}</span>
                  <span className="pill">{item.series ? copy.inSeries : copy.category}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="article-card__actions">
                  <Link className="button-link button-link--secondary" href={getWritingHref(locale, item.slug) as Route}>
                    {copy.openArticle}
                  </Link>
                </div>
              </article>
            ))}
            {relatedArticles.length === 0
              ? relatedSeries.map((item) => (
                  <article key={item.slug} className="surface-card article-card article-card--linked">
                    <div className="article-card__meta">
                      <span>{item.category.title}</span>
                      <span className="pill">{copy.inSeries}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="article-card__actions">
                      <Link className="button-link button-link--secondary" href={getWritingSeriesHref(locale, item.slug) as Route}>
                        {copy.openSeries}
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
