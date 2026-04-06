import type { ProfileContent } from "@/lib/types";

export const profileEn: ProfileContent = {
  name: "Wang Yufeng",
  title: "Engineer-researcher in LLM post-training, agents, and evaluation",
  hero: {
    headline: "I build post-training and evaluation loops for LLM agents.",
    subheadline:
      "Working on coding agents, tool use, structured evaluation, and capability measurement grounded in real tasks."
  },
  homeIntro: {
    heading: "Short intro",
    body:
      "I work at the intersection of LLM post-training, coding/tool-use agents, and evaluation systems. My focus is turning failure cases, logs, and executable environments into training signals, benchmarks, and iteration loops for real-world AI systems."
  },
  focusAreas: [
    {
      title: "Post-training & data flywheel",
      description:
        "Turning online failures and real logs into data, training signals, benchmarks, and iteration loops."
    },
    {
      title: "Coding / tool-use agents",
      description:
        "Working on scaffold generalization, tool interfaces, execution feedback, and real-task robustness."
    },
    {
      title: "Evaluation & capability measurement",
      description:
        "Designing judge/verifier pipelines, structured OOD tests, and behavior-based evaluation frameworks."
    }
  ],
  selectedWork: [
    {
      title: "Coding agent generalization",
      summary:
        "Cross-scaffold optimization for coding agents, with unified task schema, evaluation interface, and real-task robustness analysis."
    },
    {
      title: "Complex instruction following",
      summary:
        "Spec abstraction, constraint modeling, and judge-based evaluation pipelines for complex product-facing LLM tasks."
    },
    {
      title: "Distillation and efficient training",
      summary:
        "Distillation and turbo-style training experiments for smaller models, with attention to capacity limits and training efficiency."
    }
  ],
  featuredWriting: [
    {
      title: "Agent evaluation as diagnosis, not just scoring",
      category: "Tech Essay",
      summary: "Why evaluation should reveal failure structure rather than flatten it into a single number."
    },
    {
      title: "What coding agents learn from trajectory data",
      category: "Tech Essay",
      summary: "Notes on behavior traces, execution feedback, and where generalization actually comes from."
    },
    {
      title: "Notes on capability measurement and structured OOD",
      category: "Research Note",
      summary: "Thinking about benchmarks as evidence, not just ranking devices."
    },
    {
      title: "A reflective fragment",
      category: "Literary / Personal",
      summary: "A quieter layer of writing that sits beside the technical work."
    }
  ],
  contactLinks: [
    { label: "Email", value: "810429024@qq.com", href: "mailto:810429024@qq.com" },
    { label: "GitHub", value: "github.com/yfwang1118", href: "https://github.com/yfwang1118" },
    { label: "Resume", value: "Available on request", href: "mailto:810429024@qq.com?subject=Resume%20Request" }
  ]
};
