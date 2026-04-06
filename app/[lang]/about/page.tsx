import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export default async function AboutPage({
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
          overview: "About",
          pathEyebrow: "Path",
          pathTitle: "How I got here",
          pathCopy:
            "The through-line has been fairly consistent: moving from language systems into post-training, agent behavior, and evaluation loops grounded in real tasks.",
          careEyebrow: "Priorities",
          careTitle: "Questions I keep returning to",
          careCopy:
            "These are the concerns that shape how I frame research and engineering choices, not just what topics I happen to work on.",
          writingEyebrow: "Writing",
          writingTitle: "Why writing stays inside the work",
          writingCopy:
            "For me, writing is not a side activity. It is part of how I refine concepts, compare abstractions, and notice where my own thinking is still weak.",
          workButton: "See work",
          writingButton: "Read writing"
        }
      : {
          overview: "关于",
          pathEyebrow: "路径",
          pathTitle: "我是怎么走到这里的",
          pathCopy: "主线其实一直比较一致：从语言系统出发，逐步走向后训练、Agent 行为，以及面向真实任务的评测闭环。",
          careEyebrow: "长期关注",
          careTitle: "我会反复回到的几个问题",
          careCopy: "这些问题决定了我如何组织研究和工程判断，而不只是我表面上在做哪些主题。",
          writingEyebrow: "写作",
          writingTitle: "为什么写作始终留在工作内部",
          writingCopy: "对我来说，写作不是副业，它本身就是澄清概念、比较抽象层级、识别思考盲点的一部分。",
          workButton: "查看工作",
          writingButton: "进入写作"
        };

  return (
    <>
      <section className="site-shell section section--hero">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">{copy.overview}</div>
            <h1 className="section-title" style={{ fontSize: "clamp(2.8rem, 7vw, 5rem)" }}>
              {dictionary.about.pageTitle}
            </h1>
            <p className="hero-summary">{dictionary.about.biography}</p>
          </div>
          <aside className="surface-card quote-panel">
            <blockquote>{dictionary.about.whyWritingMatters}</blockquote>
            <cite>{dictionary.profile.name}</cite>
          </aside>
        </div>
      </section>

      <section className="site-shell section">
        <div className="section-heading">
          <div className="eyebrow">{copy.pathEyebrow}</div>
          <h2 className="section-title">{copy.pathTitle}</h2>
          <p className="section-copy">{copy.pathCopy}</p>
        </div>
        <div className="grid-3">
          {dictionary.about.howIGotHere.map((item, index) => (
            <article key={item} className="surface-card detail-card">
              <div className="detail-card__index">0{index + 1}</div>
              <h3 className="detail-card__title">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section">
        <div className="section-heading">
          <div className="eyebrow">{copy.careEyebrow}</div>
          <h2 className="section-title">{copy.careTitle}</h2>
          <p className="section-copy">{copy.careCopy}</p>
        </div>
        <div className="grid-2">
          {dictionary.about.whatICareAbout.map((item, index) => (
            <article key={item} className="surface-card detail-card">
              <div className="detail-card__index">0{index + 1}</div>
              <h3 className="detail-card__title">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell section">
        <div className="split-layout">
          <div className="section-heading">
            <div className="eyebrow">{copy.writingEyebrow}</div>
            <h2 className="section-title">{copy.writingTitle}</h2>
            <p className="section-copy">{copy.writingCopy}</p>
          </div>
          <div className="panel-stack">
            <Link className="button-link" href={`/${locale}/work` as Route}>
              {copy.workButton}
            </Link>
            <Link className="button-link button-link--secondary" href={`/${locale}/writing` as Route}>
              {copy.writingButton}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
