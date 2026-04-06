export type NavigationItem = {
  label: string;
  href: "/" | "/work" | "/writing" | "/about" | "/contact";
};

export type NavigationDictionary = {
  items: NavigationItem[];
  resumeLabel: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
};

export type ProfileContent = {
  name: string;
  title: string;
  hero: {
    headline: string;
    subheadline: string;
  };
  homeIntro: {
    heading: string;
    body: string;
  };
  focusAreas: Array<{
    title: string;
    description: string;
  }>;
  selectedWork: Array<{
    title: string;
    summary: string;
  }>;
  featuredWriting: Array<{
    title: string;
    category: string;
    summary: string;
  }>;
  contactLinks: ContactLink[];
};

export type WorkTheme = {
  title: string;
  points: string[];
};

export type WorkRole = {
  company: string;
  title: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type WorkContent = {
  pageTitle: string;
  overview: string;
  sections: {
    themes: string;
    roles: string;
    outcomes: string;
    skills: string;
  };
  themes: WorkTheme[];
  roles: WorkRole[];
  outcomes: string[];
  skillGroups: Array<{
    title: string;
    items: string[];
  }>;
};

export type WritingEntry = {
  slug: string;
  title: string;
  summary: string;
  category: "tech-essays" | "research-notes" | "literary-writing";
  featured?: boolean;
};

export type WritingSeriesArticle = {
  slug: string;
  title: string;
  summary: string;
  content: string[];
};

export type WritingSeries = {
  slug: string;
  title: string;
  description: string;
  articles: WritingSeriesArticle[];
};

export type WritingCategory = {
  key: WritingEntry["category"];
  title: string;
  description: string;
};

export type WritingContent = {
  pageTitle: string;
  intro: string;
  sections: {
    categories: string;
    featured: string;
    series: string;
  };
  categories: WritingCategory[];
  series: WritingSeries[];
  entries: WritingEntry[];
};

export type AboutContent = {
  pageTitle: string;
  biography: string;
  howIGotHere: string[];
  whatICareAbout: string[];
  whyWritingMatters: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export type ContactContent = {
  pageTitle: string;
  intro: string;
  methods: ContactMethod[];
  resume: {
    label: string;
    href: string;
    note: string;
  };
};

export type SiteDictionary = {
  navigation: NavigationDictionary;
  profile: ProfileContent;
  work: WorkContent;
  writing: WritingContent;
  about: AboutContent;
  contact: ContactContent;
};
