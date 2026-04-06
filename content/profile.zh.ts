import type { ProfileContent } from "@/lib/types";

export const profileZh: ProfileContent = {
  name: "王豫丰",
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
      title: "把 badcase 变成可执行、可训练、可验证的任务闭环",
      summary:
        "我更关心的不是只补一个 case，而是把失败转成任务 schema、sandbox replay、评测信号与后续优化动作。",
      relatedWritingSlug: "badcases-to-post-training-loops"
    },
    {
      title: "把复杂 Agent 评测做成诊断系统，而不是只输出完成率",
      summary:
        "很多系统问题不是一个总分能解释的，我更在意失败发生在哪一层、什么证据能支撑后续优化。",
      relatedWritingSlug: "agent-evaluation-as-diagnosis"
    },
    {
      title: "把任务成功重新翻译成能力测量问题",
      summary:
        "当模型在复杂任务上得高分时，我更想知道这究竟说明了什么能力，以及哪些只是环境和脚手架带来的表象。",
      relatedWritingSlug: "measurement-view-1-score-is-not-capability"
    }
  ],
  contactLinks: [
    { label: "邮箱", value: "810429024@qq.com", href: "mailto:810429024@qq.com" },
    { label: "GitHub", value: "github.com/yfwang1118", href: "https://github.com/yfwang1118" },
    { label: "简历", value: "可邮件索取", href: "mailto:810429024@qq.com?subject=Resume%20Request" }
  ]
};
