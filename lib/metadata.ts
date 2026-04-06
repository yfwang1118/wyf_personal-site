import type { Metadata } from "next";
import { type Locale } from "@/lib/i18n";

export function getLocalizedMetadata(lang: Locale): Metadata {
  if (lang === "zh") {
    return {
      title: "王宇峰",
      description: "王宇峰的中英双语个人网站。"
    };
  }

  return {
    title: "Wang Yufeng",
    description: "Bilingual personal website for Wang Yufeng."
  };
}
