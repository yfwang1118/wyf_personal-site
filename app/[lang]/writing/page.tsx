import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

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
  const featuredEntries = dictionary.writing.entries.filter((entry) => entry.featured);
  const series = dictionary.writing.series;
  const seriesArticleCount = series.reduce((count, item) => count + item.articles.length, 0);
  const writingTopics = dictionary.writing.categories.map((category) => ({
    category,
    entries: dictionary.writing.entries.filter((entry) => entry.category === category.key)
  }));
  const copy =
    locale === "en"
      ? {
          overview: "Writing",
          topicEyebrow: "Topics",
          topicTitle: "Writing organized by recurring themes",
          topicCopy:
            "Instead of a flat archive, I think of writing as a few longer-running tracks. Each topic holds together a cluster of related questions.",
          featuredEyebrow: "Featured",
          featuredTitle: "A few pieces that represent the larger threads",
          featuredCopy: "These are the entries that best capture how I currently think across technical and reflective writing.",
          jumpFeatured: "Jump to featured",
          jumpSeries: "Read series",
          jumpTopics: "Browse topics",
          totalEntries: "Entries",
          totalTopics: "Topics",
          totalSeries: "Series",
          articleLabel: "Article",
          seriesEyebrow: "Series",
          seriesTitle: "Long-form thematic writing",
          seriesCopy:
            "Some questions need more than standalone notes. These series are where I build an argument across multiple essays.",
          seriesDescription: "Series overview"
        }
      : {
          overview: "写作",
          topicEyebrow: "专题",
          topicTitle: "按持续主题组织的写作结构",
          topicCopy: "我不想把写作做成平铺归档，而更希望它像几条长期推进的主题线，每条线下挂着一组相关问题。",
          featuredEyebrow: "精选",
          featuredTitle: "几篇最能代表整体写作方向的文章",
          featuredCopy: "这些文章更能体现我当前在技术写作和反思性写作上的整体判断。",
          jumpFeatured: "查看精选",
          jumpSeries: "查看专题写作",
          jumpTopics: "查看专题",
          totalEntries: "篇文章",
          totalTopics: "个专题",
          totalSeries: "个系列",
          articleLabel: "文章",
          seriesEyebrow: "专题写作",
          seriesTitle: "按主题持续展开的长线写作",
          seriesCopy: "有些问题不适合写成单篇短文，而更适合被组织成连续推进的专题。",
          seriesDescription: "专题说明"
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
              <a className="button-link" href="#featured">
                {copy.jumpFeatured}
              </a>
              <a className="button-link button-link--secondary" href="#series">
                {copy.jumpSeries}
              </a>
              <a className="button-link button-link--secondary" href="#topics">
                {copy.jumpTopics}
              </a>
            </div>
          </div>
          <aside className="surface-card hero-panel">
            <div>
              <div className="eyebrow">{copy.topicEyebrow}</div>
              <h2 className="hero-panel__heading">{copy.topicTitle}</h2>
            </div>
            <p className="hero-panel__copy">{copy.topicCopy}</p>
            <dl className="hero-facts">
              <div className="hero-fact">
                <dt>{copy.totalTopics}</dt>
                <dd>{dictionary.writing.categories.length}</dd>
              </div>
              <div className="hero-fact">
                <dt>{copy.totalEntries}</dt>
                <dd>{dictionary.writing.entries.length + seriesArticleCount}</dd>
              </div>
              <div className="hero-fact">
                <dt>{copy.totalSeries}</dt>
                <dd>{series.length}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="site-shell section" id="series">
        <div className="section-heading">
          <div className="eyebrow">{copy.seriesEyebrow}</div>
          <h2 className="section-title">{copy.seriesTitle}</h2>
          <p className="section-copy">{copy.seriesCopy}</p>
        </div>
        <div className="panel-stack">
          {series.map((item) => (
            <section key={item.slug} className="surface-card topic-section">
              <div className="topic-section__head">
                <div className="eyebrow">{item.title}</div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className="article-list">
                {item.articles.map((article, index) => (
                  <article key={article.slug} className="article-card">
                    <div className="article-card__meta">
                      <span>
                        {copy.articleLabel} 0{index + 1}
                      </span>
                      <span className="pill">{copy.seriesDescription}</span>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.summary}</p>
                    <div style={{ display: "grid", gap: "0.9rem", marginTop: "1.2rem" }}>
                      {article.content.map((paragraph) => (
                        <p key={paragraph} style={{ margin: 0 }}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="site-shell section" id="topics">
        <div className="section-heading">
          <div className="eyebrow">{copy.topicEyebrow}</div>
          <h2 className="section-title">{copy.topicTitle}</h2>
          <p className="section-copy">{copy.topicCopy}</p>
        </div>
        <div className="topic-nav">
          {writingTopics.map(({ category, entries }) => (
            <a key={category.key} className="topic-nav__item" href={`#${category.key}`}>
              <strong>{category.title}</strong>
              <span>{category.description}</span>
              <span style={{ marginTop: "0.75rem" }}>
                {entries.length} {copy.totalEntries}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="site-shell section" id="featured">
        <div className="section-heading">
          <div className="eyebrow">{copy.featuredEyebrow}</div>
          <h2 className="section-title">{copy.featuredTitle}</h2>
          <p className="section-copy">{copy.featuredCopy}</p>
        </div>
        <div className="featured-grid">
          {featuredEntries.map((entry) => {
            const category = dictionary.writing.categories.find((item) => item.key === entry.category);

            return (
              <article key={entry.slug} className="surface-card article-card">
                <div className="article-card__meta">
                  <span>{category?.title}</span>
                  <span className="pill">{locale === "en" ? "Featured" : "精选"}</span>
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.summary}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="site-shell section">
        <div className="panel-stack">
          {writingTopics.map(({ category, entries }) => (
            <section key={category.key} id={category.key} className="surface-card topic-section">
              <div className="topic-section__head">
                <div className="eyebrow">{category.title}</div>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <div className="article-list">
                {entries.map((entry, index) => (
                  <article key={entry.slug} className="article-card">
                    <div className="article-card__meta">
                      <span>
                        {copy.articleLabel} 0{index + 1}
                      </span>
                      {entry.featured ? (
                        <span className="pill">{locale === "en" ? "Featured" : "精选"}</span>
                      ) : null}
                    </div>
                    <h3>{entry.title}</h3>
                    <p>{entry.summary}</p>
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
