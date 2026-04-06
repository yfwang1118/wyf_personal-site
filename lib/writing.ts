import { type Locale } from "@/lib/i18n";
import type { WritingCategory, WritingContent } from "@/lib/types";

export type WritingSeriesRecord = {
  slug: string;
  title: string;
  description: string;
  category: WritingCategory;
  articles: Array<{
    slug: string;
    title: string;
    summary: string;
    content: string[];
    featured?: boolean;
  }>;
};

export type WritingArticleRecord = {
  slug: string;
  title: string;
  summary: string;
  content: string[];
  featured?: boolean;
  category: WritingCategory;
  series?: {
    slug: string;
    title: string;
    description: string;
  };
};

function getCategoryMap(writing: WritingContent) {
  return new Map(writing.categories.map((category) => [category.key, category]));
}

export function getWritingSeries(writing: WritingContent): WritingSeriesRecord[] {
  const categories = getCategoryMap(writing);

  return writing.series.map((series) => ({
    slug: series.slug,
    title: series.title,
    description: series.description,
    category: categories.get(series.category) ?? writing.categories[0],
    articles: series.articles.map((article) => ({
      slug: article.slug,
      title: article.title,
      summary: article.summary,
      content: article.content,
      featured: article.featured
    }))
  }));
}

export function getWritingArticles(writing: WritingContent): WritingArticleRecord[] {
  const categories = getCategoryMap(writing);
  const standalone = writing.entries.map((entry) => ({
    slug: entry.slug,
    title: entry.title,
    summary: entry.summary,
    content: entry.content,
    featured: entry.featured,
    category: categories.get(entry.category) ?? writing.categories[0]
  }));
  const inSeries = getWritingSeries(writing).flatMap((series) =>
    series.articles.map((article) => ({
      slug: article.slug,
      title: article.title,
      summary: article.summary,
      content: article.content,
      featured: article.featured,
      category: series.category,
      series: {
        slug: series.slug,
        title: series.title,
        description: series.description
      }
    }))
  );

  return [...inSeries, ...standalone];
}

export function getWritingArticle(writing: WritingContent, slug: string) {
  return getWritingArticles(writing).find((article) => article.slug === slug);
}

export function getWritingSeriesItem(writing: WritingContent, slug: string) {
  return getWritingSeries(writing).find((series) => series.slug === slug);
}

export function getFeaturedWritingArticles(writing: WritingContent) {
  return getWritingArticles(writing).filter((article) => article.featured);
}

export function getWritingArticlesByCategory(writing: WritingContent, categoryKey: WritingCategory["key"]) {
  return getWritingArticles(writing).filter((article) => article.category.key === categoryKey);
}

export function getWritingSeriesByCategory(writing: WritingContent, categoryKey: WritingCategory["key"]) {
  return getWritingSeries(writing).filter((series) => series.category.key === categoryKey);
}

export function getWritingHref(locale: Locale, slug: string) {
  return `/${locale}/writing/${slug}`;
}

export function getWritingSeriesHref(locale: Locale, slug: string) {
  return `/${locale}/writing/series/${slug}`;
}
