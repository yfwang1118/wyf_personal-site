import type { NavigationDictionary } from "@/lib/types";

export const navigationEn: NavigationDictionary = {
  items: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Writing", href: "/writing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  resumeLabel: "Resume"
};

export const navigationZh: NavigationDictionary = {
  items: [
    { label: "首页", href: "/" },
    { label: "工作", href: "/work" },
    { label: "写作", href: "/writing" },
    { label: "关于", href: "/about" },
    { label: "联系", href: "/contact" }
  ],
  resumeLabel: "简历"
};
