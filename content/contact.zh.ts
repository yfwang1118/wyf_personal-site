import type { ContactContent } from "@/lib/types";

export const contactZh: ContactContent = {
  pageTitle: "联系",
  intro: "欢迎就研究、工程或写作相关的话题与我交流。",
  methods: [
    {
      label: "邮箱",
      value: "810429024@qq.com",
      href: "mailto:810429024@qq.com"
    },
    {
      label: "GitHub",
      value: "github.com/yfwang1118",
      href: "https://github.com/yfwang1118"
    }
  ],
  resume: {
    label: "简历",
    href: "mailto:810429024@qq.com?subject=Resume%20Request",
    note: "可通过邮件索取。"
  }
};
