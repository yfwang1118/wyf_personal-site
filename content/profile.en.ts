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
      title: "Turn badcases into executable, trainable, and verifiable loops",
      summary:
        "I care less about patching one failure and more about converting it into task schema, sandbox replay, evaluation signal, and the next optimization step.",
      relatedWritingSlug: "badcases-to-post-training-loops"
    },
    {
      title: "Treat agent evaluation as diagnosis rather than completion-rate reporting",
      summary:
        "A single score rarely explains a system problem. I care about where the failure sits and what evidence can guide the next iteration.",
      relatedWritingSlug: "agent-evaluation-as-diagnosis"
    },
    {
      title: "Translate task success back into capability measurement",
      summary:
        "When a model scores highly on a complex task, I want to know what capability that really supports and what is only scaffold or environment effect.",
      relatedWritingSlug: "measurement-view-1-score-is-not-capability"
    }
  ],
  contactLinks: [
    { label: "Email", value: "810429024@qq.com", href: "mailto:810429024@qq.com" },
    { label: "GitHub", value: "github.com/yfwang1118", href: "https://github.com/yfwang1118" },
    { label: "Resume", value: "Available on request", href: "mailto:810429024@qq.com?subject=Resume%20Request" }
  ]
};
