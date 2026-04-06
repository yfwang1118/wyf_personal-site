import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { getFeaturedWritingArticles, getWritingArticles, getWritingArticlesByCategory, getWritingHref } from "@/lib/writing";

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
  const featuredArticles = getFeaturedWritingArticles(dictionary.writing);
  const writingThemes = dictionary.writing.categories.map((category) => ({
    category,
    articles: getWritingArticlesByCategory(dictionary.writing, category.key)
  }));
  const copy =
    locale === "en"
      ? {
          overview: "Writing",
          themesEyebrow: "Themes",
          themesTitle: "Writing organized around three durable tracks",
          themesCopy:
            "The structure here is intentional: technical writing, applied notes, and literary work should each have room to grow without collapsing into one undifferentiated archive.",
          seriesEyebrow: "Series",
          seriesTitle: "Long-form threads that unfold across multiple essays",
          seriesCopy:
            "Series are where I want an argument to continue. They hold together a larger question rather than flattening it into one isolated post.",
          featuredEyebrow: "Featured",
          featuredTitle: "A few entry points into the larger body of writing",
          featuredCopy:
            "These are the pieces I would most likely reference from the homepage, work page, or future project notes.",
          archiveEyebrow: "Archive",
          archiveTitle: "Browse by theme",
          archiveCopy: "Every article now has its own page, so the index can stay light and navigable.",
          jumpSeries: "Read series",
          jumpArchive: "Browse archive",
          totalThemes: "Themes",
          totalSeries: "Series",
          totalArticles: "Article pages",
          article: "Article",
          featured: "Featured",
          openArticle: "Read article",
          seriesLabel: "Series",
          seriesIntro: "Series overview"
        }
      : {
          overview: "写作",
          themesEyebrow: "主题",
          themesTitle: "围绕三条长期主线组织起来的写作",
          themesCopy:
            "这里的结构是有意为之的：技术写作、应用笔记和文学创作应该各自生长，而不是被压成一个没有区分度的归档页。",
          seriesEyebrow: "专题",
          seriesTitle: "适合被连续展开，而不是写成一篇就结束的问题",
          seriesCopy: "专题页负责组织长期论证，单篇文章页负责承载具体文本。这样写作结构才足够清楚，也方便在别处引用。",
          featuredEyebrow: "精选",
          featuredTitle: "几个更适合作为入口的代表性文章",
          featuredCopy: "这些文章更适合作为首页、work 页面和后续项目页里的引用入口。",
          archiveEyebrow: "归档",
          archiveTitle: "按主题浏览全部文章",
          archiveCopy: "现在每篇文章都有独立页面，所以索引页可以保持轻量，只负责导航和组织。",
          jumpSeries: "查看专题",
          jumpArchive: "查看归档",
          totalThemes: "个主题",
          totalSeries: "个专题",
          totalArticles: "篇文章页",
          article: "文章",
          featured: "精选",
          openArticle: "阅读文章",
          seriesLabel: "专题",
          seriesIntro: "专题说明"
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
              <a className="button-link" href="#series">
                {copy.jumpSeries}
              </a>
              <a className="button-link button-link--secondary" href="#archive">
                {copy.jumpArchive}
              </a>
            </div>
          </div>
          <aside className="surface-card hero-panel">
            <div>
              <div className="eyebrow">{copy.themesEyebrow}</div>
              <h2 className="hero-panel__heading">{copy.themesTitle}</h2>
            </div>
            <p className="hero-panel__copy">{copy.themesCopy}</p>
            <dl className="hero-facts">
              <div className="hero-fact">
                <dt>{copy.totalThemes}</dt>
                <dd>{dictionary.writing.categories.length}</dd>
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

      <section className="site-shell section">
        <div className="section-heading">
          <div className="eyebrow">{copy.themesEyebrow}</div>
          <h2 className="section-title">{copy.themesTitle}</h2>
          <p className="section-copy">{copy.themesCopy}</p>
        </div>
        <div className="grid-3">
          {writingThemes.map(({ category, articles }) => (
            <article key={category.key} className="surface-card detail-card">
              <div className="eyebrow">{category.title}</div>
              <h3 className="detail-card__title">{category.title}</h3>
              <p className="detail-card__copy">{category.description}</p>
              <ul className="detail-card__list">
                {articles.slice(0, 2).map((article) => (
                  <li key={article.slug}>{article.title}</li>
                ))}
              </ul>
              <div className="article-reference">
                <span className="signal-list__label">{copy.totalArticles}</span>
                <div>{articles.length}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section" id="series">
        <div className="section-heading">
          <div className="eyebrow">{copy.seriesEyebrow}</div>
          <h2 className="section-title">{copy.seriesTitle}</h2>
          <p className="section-copy">{copy.seriesCopy}</p>
        </div>
        <div className="panel-stack">
          {dictionary.writing.series.map((series) => (
            <section key={series.slug} className="surface-card topic-section">
              <div className="topic-section__head">
                <div className="eyebrow">{series.title}</div>
                <h2>{series.title}</h2>
                <p>{series.description}</p>
              </div>
              <div className="article-list">
                {series.articles.map((article, index) => (
                  <article key={article.slug} className="article-card">
                    <div className="article-card__meta">
                      <span>
                        {copy.article} 0{index + 1}
                      </span>
                      <span className="pill">{copy.seriesLabel}</span>
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
            </section>
          ))}
        </div>
      </section>

      <section className="site-shell section">
        <div className="section-heading">
          <div className="eyebrow">{copy.featuredEyebrow}</div>
          <h2 className="section-title">{copy.featuredTitle}</h2>
          <p className="section-copy">{copy.featuredCopy}</p>
        </div>
        <div className="featured-grid">
          {featuredArticles.map((article) => (
            <article key={article.slug} className="surface-card article-card article-card--linked">
              <div className="article-card__meta">
                <span>{article.category.title}</span>
                <span className="pill">{article.series ? copy.seriesLabel : copy.featured}</span>
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
      </section>

      <section className="site-shell section" id="archive">
        <div className="section-heading">
          <div className="eyebrow">{copy.archiveEyebrow}</div>
          <h2 className="section-title">{copy.archiveTitle}</h2>
          <p className="section-copy">{copy.archiveCopy}</p>
        </div>
        <div className="panel-stack">
          {writingThemes.map(({ category, articles }) => (
            <section key={category.key} className="surface-card topic-section">
              <div className="topic-section__head">
                <div className="eyebrow">{category.title}</div>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <div className="article-list">
                {articles.map((article, index) => (
                  <article key={article.slug} className="article-card">
                    <div className="article-card__meta">
                      <span>
                        {copy.article} 0{index + 1}
                      </span>
                      <span className="pill">{article.series ? copy.seriesLabel : category.title}</span>
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
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
