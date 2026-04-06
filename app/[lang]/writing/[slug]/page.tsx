import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { getWritingArticle, getWritingArticles, getWritingArticlesByCategory, getWritingHref } from "@/lib/writing";

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

  const relatedArticles = article.series
    ? getWritingArticlesByCategory(dictionary.writing, article.category.key).filter(
        (item) => item.slug !== article.slug
      )
    : getWritingArticlesByCategory(dictionary.writing, article.category.key).filter((item) => item.slug !== article.slug);
  const copy =
    locale === "en"
      ? {
          backToWriting: "Back to writing",
          backToWork: "See work",
          relatedEyebrow: "Related",
          relatedTitle: "Continue from here",
          relatedCopy:
            "Each article page should be linkable and reusable, so related pieces stay close instead of getting buried in the index.",
          openArticle: "Read article",
          inSeries: "Series",
          category: "Theme"
        }
      : {
          backToWriting: "返回写作页",
          backToWork: "查看 work",
          relatedEyebrow: "延伸阅读",
          relatedTitle: "从这里继续往下读",
          relatedCopy: "现在每篇文章都可以被单独引用，所以相关内容会直接挂在文章页下面，而不是埋在索引里。",
          openArticle: "阅读文章",
          inSeries: "专题",
          category: "主题"
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
            <Link className="button-link button-link--secondary" href={`/${locale}/writing` as Route}>
              {copy.backToWriting}
            </Link>
            <Link className="button-link button-link--secondary" href={`/${locale}/work` as Route}>
              {copy.backToWork}
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

      {relatedArticles.length > 0 ? (
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
          </div>
        </section>
      ) : null}
    </>
  );
}
