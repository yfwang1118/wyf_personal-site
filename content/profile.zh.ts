import type { ProfileContent } from "@/lib/types";

export const profileZh: ProfileContent = {
  name: "王宇峰",
  title: "关注大模型后训练、Agent 与评测的工程研究者",
  hero: {
    headline: "我在做面向 LLM Agent 的后训练与评测闭环",
    subheadline:
      "关注 Coding Agent、工具使用、结构化评测与真实任务驱动的能力优化。"
  },
  homeIntro: {
    heading: "简介",
    body:
      "我主要关注大模型后训练、Coding / Tool-use Agent，以及能力评测系统。更具体地说，我长期在做的一件事，是把真实任务中的 badcase、日志与可执行环境，转化为训练信号、评测基准与可持续迭代的优化闭环。"
  },
  focusAreas: [
    {
      title: "后训练与数据飞轮",
      description: "从线上 badcase 与真实日志中提取训练信号，形成数据、训练、评测、验证闭环。"
    },
    {
      title: "Coding / Tool-use Agent",
      description: "关注 scaffold 泛化、工具接口、执行反馈与真实任务中的稳定性问题。"
    },
    {
      title: "评测与能力测量",
      description: "设计 judge / verifier 链路、结构化 OOD 测试与基于行为证据的评测框架。"
    }
  ],
  selectedWork: [
    {
      title: "Coding Agent 泛化优化",
      summary:
        "围绕统一任务 schema、评测接口与真实任务失效分析，提升模型在跨 scaffold 场景中的鲁棒性。"
    },
    {
      title: "复杂指令遵循 Spec 化",
      summary: "面向复杂业务需求，进行约束抽象、Spec 设计与 judge 驱动的自动化评测。"
    },
    {
      title: "蒸馏与高效训练探索",
      summary: "面向小模型与 Turbo 场景，探索蒸馏收益、容量瓶颈与低成本延续训练方案。"
    }
  ],
  featuredWriting: [
    {
      title: "把 Agent 评测当作诊断，而不只是打分",
      category: "技术文章",
      summary: "评测应该揭示失效结构，而不是把复杂行为压缩成一个总分。"
    },
    {
      title: "Coding Agent 从轨迹数据中真正学到了什么",
      category: "技术文章",
      summary: "关于行为轨迹、执行反馈，以及泛化能力来源的一些笔记。"
    },
    {
      title: "能力测量与结构化 OOD 的一些记录",
      category: "研究札记",
      summary: "把 benchmark 看作证据，而不是单纯排行榜。"
    },
    {
      title: "一则短篇反思",
      category: "文学 / 个人写作",
      summary: "作为技术工作之外的第二层表达。"
    }
  ],
  contactLinks: [
    { label: "邮箱", value: "810429024@qq.com", href: "mailto:810429024@qq.com" },
    { label: "GitHub", value: "github.com/yfwang1118", href: "https://github.com/yfwang1118" },
    { label: "简历", value: "可邮件索取", href: "mailto:810429024@qq.com?subject=Resume%20Request" }
  ]
};
