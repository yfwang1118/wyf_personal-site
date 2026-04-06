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

  const dictionary = getDictionary(lang as Locale);

  return (
    <section className="site-shell" style={{ padding: "4rem 0 6rem" }}>
      <h1>{dictionary.about.pageTitle}</h1>
      <p className="muted" style={{ maxWidth: "44rem" }}>
        {dictionary.about.biography}
      </p>
    </section>
  );
}
