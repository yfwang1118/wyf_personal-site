import type { WorkContent } from "@/lib/types";

export const workEn: WorkContent = {
  pageTitle: "Work",
  overview:
    "I have 5.5 years of experience in NLP and LLM systems, and currently work on post-training and evaluation for large models at Meituan LongCat. My work centers on coding/tool-use agents, automated evaluation, and data flywheel optimization grounded in real tasks.",
  sections: {
    themes: "Capability themes",
    roles: "Selected roles",
    outcomes: "Selected outcomes",
    skills: "Core skills"
  },
  themes: [
    {
      title: "Post-training and data flywheel",
      points: [
        "Identify failure modes from badcases, logs, and executable environments.",
        "Convert them into trainable tasks and evaluation signals.",
        "Connect data generation, filtering, training, evaluation, and validation."
      ]
    },
    {
      title: "Coding / tool-use agents",
      points: [
        "Scaffold generalization.",
        "Tool schema and action interface robustness.",
        "Execution feedback and state maintenance.",
        "Real-task and benchmark alignment."
      ]
    },
    {
      title: "Evaluation and capability measurement",
      points: [
        "LLM-as-judge and verifier pipelines.",
        "Structured OOD thinking.",
        "Benchmark design tied to behavior evidence."
      ]
    },
    {
      title: "Product-facing optimization",
      points: [
        "Align offline and online signals.",
        "Improve model behavior in real production loops.",
        "Use sandbox replay and reproducible tasks for iteration."
      ]
    }
  ],
  roles: [
    {
      company: "Meituan",
      title: "LLM Algorithm Engineer",
      period: "2023.08 – Present",
      summary:
        "Focused on post-training, coding/tool-use agents, and evaluation systems for production LLM scenarios.",
      highlights: [
        "Coding agent post-training and evaluation loop optimization.",
        "Complex instruction following spec abstraction and judge-based evaluation.",
        "Distillation and efficient training experiments."
      ]
    },
    {
      company: "iFlytek",
      title: "NLP Researcher",
      period: "2020.07 – 2023.08",
      summary:
        "Worked on education-focused NLP and speech systems, including spoken assessment, essay scoring, semantic understanding, and production-facing iteration.",
      highlights: [
        "Built production NLP systems with measurable quality targets.",
        "Worked across language understanding, scoring, and deployment-facing loops."
      ]
    }
  ],
  outcomes: [
    "Improved cross-scaffold performance for coding agents on OOD settings.",
    "Built online badcase to sandbox replay to optimization to validation loops.",
    "Developed spec abstraction and judge-based evaluation pipelines for complex instruction tasks.",
    "Explored distillation and efficient continuation training for smaller models."
  ],
  skillGroups: [
    { title: "Post-training", items: ["SFT", "Distillation", "Data curation", "Failure-driven iteration"] },
    { title: "Agents", items: ["Coding agents", "Tool use", "Scaffold generalization", "Execution feedback"] },
    { title: "Evaluation", items: ["LLM judge", "Verifier design", "OOD testing", "Benchmarking"] },
    { title: "Engineering", items: ["Sandbox replay", "Task schema design", "Offline-online loops"] },
    { title: "Workflow & tooling", items: ["Prompting", "Error analysis", "Spec abstraction", "Diagnostics"] }
  ]
};
