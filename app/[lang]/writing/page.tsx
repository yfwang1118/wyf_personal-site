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

  const dictionary = getDictionary(lang as Locale);

  return (
    <section className="site-shell" style={{ padding: "4rem 0 6rem" }}>
      <h1>{dictionary.writing.pageTitle}</h1>
      <p className="muted" style={{ maxWidth: "44rem" }}>
        {dictionary.writing.intro}
      </p>
      <div className="surface" style={{ marginTop: "2rem", padding: "1.5rem", borderRadius: "1rem" }}>
        <strong>{dictionary.writing.sections.categories}</strong>
        <p style={{ marginBottom: 0 }}>
          Category schema is in place for Tech Essays, Research Notes, and Literary / Personal Writing.
        </p>
      </div>
    </section>
  );
}
