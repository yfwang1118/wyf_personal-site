import type { WorkContent } from "@/lib/types";

export const workZh: WorkContent = {
  pageTitle: "工作",
  overview:
    "我有 5.5 年 NLP / LLM 算法经验，目前在美团 LongCat 基座团队负责大模型后训练与能力评测优化。我的工作主要围绕 Coding / Tool-use Agent、自动化评测，以及面向真实任务的数据飞轮优化展开。",
  sections: {
    themes: "能力主题",
    roles: "代表经历",
    outcomes: "代表产出",
    skills: "核心能力"
  },
  themes: [
    {
      title: "后训练与数据飞轮",
      points: [
        "从 badcase、日志与可执行环境中定位失败模式。",
        "将其转化为可训练任务与评测信号。",
        "打通数据生成、过滤、训练、评测与验证。"
      ]
    },
    {
      title: "Coding / Tool-use Agent",
      points: [
        "Scaffold 泛化。",
        "工具 schema 与 action interface 的鲁棒性。",
        "执行反馈与状态维护。",
        "真实任务与 benchmark 的对齐。"
      ]
    },
    {
      title: "评测与能力测量",
      points: [
        "LLM-as-judge 与 verifier 链路。",
        "结构化 OOD 思路。",
        "与行为证据绑定的 benchmark 设计。"
      ]
    },
    {
      title: "面向产品的优化",
      points: [
        "对齐 offline 与 online 信号。",
        "在真实生产闭环中改善模型行为。",
        "使用 sandbox replay 与可复现任务加速迭代。"
      ]
    }
  ],
  roles: [
    {
      company: "美团",
      title: "大模型算法工程师",
      period: "2023.08 – 至今",
      summary: "聚焦真实生产场景下的大模型后训练、Coding / Tool-use Agent 与评测系统优化。",
      highlights: [
        "Coding Agent 的后训练与评测闭环优化。",
        "复杂指令遵循任务的 Spec 抽象与 judge 驱动评测。",
        "蒸馏与高效训练实验。"
      ]
    },
    {
      company: "科大讯飞",
      title: "NLP 研究员",
      period: "2020.07 – 2023.08",
      summary: "参与教育方向 NLP 与语音系统建设，覆盖口语评测、作文评分、语义理解与面向生产的模型迭代。",
      highlights: [
        "构建过面向业务目标的 NLP 系统。",
        "长期在理解、评分与上线迭代之间做联动优化。"
      ]
    }
  ],
  outcomes: [
    "提升 Coding Agent 在 OOD 与跨 scaffold 场景下的表现。",
    "建立 online badcase 到 sandbox replay 到优化再到验证的闭环。",
    "为复杂指令任务建立 Spec 抽象与 judge 驱动的自动评测链路。",
    "探索小模型蒸馏与高效延续训练方案。"
  ],
  skillGroups: [
    { title: "后训练", items: ["SFT", "蒸馏", "数据构造", "失败驱动迭代"] },
    { title: "Agents", items: ["Coding Agent", "Tool use", "Scaffold 泛化", "执行反馈"] },
    { title: "评测", items: ["LLM judge", "Verifier 设计", "OOD 测试", "Benchmark"] },
    { title: "工程", items: ["Sandbox replay", "任务 schema 设计", "Offline-online 闭环"] },
    { title: "流程与工具", items: ["Prompting", "错误分析", "Spec 抽象", "诊断方法"] }
  ]
};
