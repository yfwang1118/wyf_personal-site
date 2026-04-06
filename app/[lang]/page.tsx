import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/content";
import { isValidLocale, type Locale } from "@/lib/i18n";

export default async function HomePage({
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
    <section className="site-shell" style={{ padding: "5rem 0 6rem" }}>
      <p className="muted" style={{ marginBottom: "1rem" }}>
        {dictionary.profile.title}
      </p>
      <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", lineHeight: 1.05, margin: 0 }}>
        {dictionary.profile.hero.headline}
      </h1>
      <p className="muted" style={{ fontSize: "1.125rem", maxWidth: "42rem", marginTop: "1.5rem" }}>
        {dictionary.profile.hero.subheadline}
      </p>
      <div className="surface" style={{ marginTop: "3rem", padding: "1.5rem", borderRadius: "1rem" }}>
        <h2 style={{ marginTop: 0 }}>{dictionary.profile.homeIntro.heading}</h2>
        <p style={{ marginBottom: 0 }}>{dictionary.profile.homeIntro.body}</p>
      </div>
    </section>
  );
}
