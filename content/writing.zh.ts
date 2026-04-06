import type { WritingContent } from "@/lib/types";

export const writingZh: WritingContent = {
  pageTitle: "写作",
  intro:
    "写作是我思考的一部分。我会写 LLM 系统、评测与能力测量、论文阅读，也会保留一部分更偏反思与文学表达的内容。",
  sections: {
    categories: "写作分类",
    featured: "精选文章"
  },
  categories: [
    {
      key: "tech-essays",
      title: "技术文章",
      description: "围绕后训练、Agent、工具使用与面向产品的 AI 系统展开的公开技术写作。"
    },
    {
      key: "research-notes",
      title: "研究札记",
      description: "关于能力测量、结构化 OOD、construct validity 与 benchmark 设计的笔记。"
    },
    {
      key: "literary-writing",
      title: "文学 / 个人写作",
      description: "作为第二层表达而保留的、经过筛选的反思与文学写作。"
    }
  ],
  entries: [
    {
      slug: "agent-evaluation-as-diagnosis",
      title: "把 Agent 评测当作诊断，而不只是打分",
      summary: "评测框架应该帮助定位失效模式，而不是只输出一个分数。",
      category: "tech-essays",
      featured: true
    },
    {
      slug: "what-coding-agents-learn-from-trajectories",
      title: "Coding Agent 从轨迹数据中真正学到了什么",
      summary: "关于监督信号、执行轨迹与模仿边界的一些思考。",
      category: "tech-essays",
      featured: true
    },
    {
      slug: "badcases-to-post-training-loops",
      title: "从 badcase 到后训练闭环",
      summary: "如何把真实业务失效转化为可训练、可评测的任务。",
      category: "tech-essays"
    },
    {
      slug: "beyond-leaderboard-capability-measurement",
      title: "超越排行榜：关于能力测量的笔记",
      summary: "关于 validity、证据与 benchmark 真正想说明什么。",
      category: "research-notes",
      featured: true
    },
    {
      slug: "structured-ood-and-behavior-evidence",
      title: "Agent 评测中的结构化 OOD 与行为证据",
      summary: "如何从迁移、分布错位与可观察行为来思考评测设计。",
      category: "research-notes"
    },
    {
      slug: "construct-validity-for-llm-benchmarks",
      title: "LLM Benchmark 的 Construct Validity",
      summary: "一个 benchmark 声称自己测到了什么，这件事需要被说清楚。",
      category: "research-notes"
    },
    {
      slug: "selected-reflective-essay",
      title: "一篇反思性文章",
      summary: "与技术写作并行存在的另一种节奏。",
      category: "literary-writing",
      featured: true
    },
    {
      slug: "fragment-and-prose-note",
      title: "一则文学片段",
      summary: "短篇散文与片段式记录。",
      category: "literary-writing"
    }
  ]
};
