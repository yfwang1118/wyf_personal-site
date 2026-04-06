import type { WritingContent } from "@/lib/types";

export const writingEn: WritingContent = {
  pageTitle: "Writing",
  intro:
    "My writing will grow along three long-running tracks: LLM / AI, philosophy / issues, and literary work. They live inside one system, but they should not receive equal weight on the homepage. LLM / AI is the primary line I want people to see first.",
  sections: {
    categories: "Writing directions",
    featured: "Featured pieces",
    series: "Series"
  },
  categories: [
    {
      key: "llm-ai",
      title: "LLM / AI",
      description: "The primary writing track, centered on agents, evaluation, capability measurement, real systems, and methodology."
    },
    {
      key: "philosophy-issues",
      title: "Philosophy / Issues",
      description: "Longer-form writing on technology, judgment, institutions, and the human questions around them."
    },
    {
      key: "literary-creation",
      title: "Literary Writing",
      description: "Fiction, essays, and fragments kept as a stable parallel line of expression."
    }
  ],
  series: [
    {
      slug: "agent-capability-measurement-notes",
      title: "Notes on Agent Capability Measurement",
      description:
        "This series is not mainly about building a harder benchmark. It starts from a more basic question: when a model scores highly on a complex task, can we really say it possesses a corresponding capability? I use benchmark design, construct validity, psychometrics, nomological networks, and structured OOD to rethink LLM and agent evaluation.",
      category: "llm-ai",
      articles: [
        {
          slug: "measurement-view-1-score-is-not-capability",
          title:
            "Measurement View (1): High scores are not high capability: complex agent evaluation does not mainly need harder tasks",
          summary:
            "The central gap in complex agent evaluation is not difficulty alone, but whether task scores can genuinely support capability claims.",
          featured: true,
          content: [
            "Agent benchmarks have become longer, more interactive, and more realistic. But realism alone does not solve the core question: when a model scores highly on a complex benchmark, what capability claim does that actually support?",
            "A benchmark score is not a capability. It is an observed result under a particular task design, metric, environment, and evaluation rule.",
            "Once we accept that distinction, the harder problem appears: how do we connect latent capability, behavioral evidence, task scores, and real-world performance in a defensible way?",
            "That is why this series turns toward evidence-centered design, construct validity, psychometrics, nomological networks, and structured OOD. The next step in agent evaluation is not only better benchmarking, but better measurement thinking."
          ]
        }
      ]
    },
    {
      slug: "agent-systems-in-practice",
      title: "Agent Systems in Practice",
      description:
        "A more engineering-facing series on how evaluation enters optimization loops, what trajectory data really teaches coding agents, and how badcases become reusable system assets.",
      category: "llm-ai",
      articles: [
        {
          slug: "agent-evaluation-as-diagnosis",
          title: "Agent evaluation as diagnosis, not just scoring",
          summary: "Evaluation should help localize failure modes instead of collapsing everything into one score.",
          featured: true,
          content: [
            "Completion rate matters, but it only tells you whether a task ended well. It rarely tells you why the system succeeded or failed.",
            "I prefer to think of agent evaluation as a diagnostic system. The point is to separate failures in task understanding, decomposition, tool use, state tracking, or environment response handling.",
            "Once evaluation is treated as diagnosis, design priorities shift. Trajectory evidence, error taxonomies, and the division between judge and verifier become more important.",
            "In real systems, a good evaluation setup does not just say the model is strong. It tells you what to fix next."
          ]
        },
        {
          slug: "what-coding-agents-learn-from-trajectories",
          title: "What coding agents actually learn from trajectory data",
          summary: "Notes on supervision signals, execution traces, and the limits of imitation.",
          featured: true,
          content: [
            "Trajectory data is valuable not just because it is longer, but because it exposes decisions, tool calls, and environment feedback together.",
            "Still, the learnable part of a trajectory is not the whole trace. A model may absorb local repair patterns or scaffold-specific rhythms without learning broadly transferable abstractions.",
            "That is why the key questions are what pieces of a trajectory contain high-value transferable signal, and whether the model is learning problem structure or only a workflow template.",
            "Without separating those possibilities, it is easy to overestimate the generalization benefit of trajectory-heavy training."
          ]
        },
        {
          slug: "badcases-to-post-training-loops",
          title: "From badcases to post-training loops in real LLM systems",
          summary: "How to turn production failures into trainable and measurable tasks.",
          content: [
            "A badcase is only useful when it becomes the starting point of the next iteration loop.",
            "That usually means turning a raw failure into a reproducible task schema, executable environment, and reliable evaluation rule.",
            "Once a badcase enters sandbox replay, it stops being a one-off anecdote and becomes reusable system infrastructure.",
            "Failure-driven post-training is not just collecting more mistakes. It is engineering failure into a repeatable optimization asset."
          ]
        }
      ]
    },
    {
      slug: "benchmark-validity-notes",
      title: "Benchmark Validity and Structured OOD",
      description:
        "A methodology-facing series on what a benchmark is actually measuring, how structured OOD should be designed, and why high scores do not directly support high-capability claims.",
      category: "llm-ai",
      articles: [
        {
          slug: "beyond-leaderboard-capability-measurement",
          title: "Beyond leaderboard: notes on capability measurement",
          summary: "Thinking about validity, evidence, and what benchmarks are really claiming.",
          featured: true,
          content: [
            "Leaderboards are useful because they compress comparison. Capability research is difficult because it often needs the opposite: decompression.",
            "When we say a benchmark measures planning, reasoning, or agent capability, that is already a measurement claim.",
            "Such a claim needs evidence. It cannot rest only on the fact that the task performance looks roughly consistent with the label.",
            "If that link is not argued carefully, a higher score can still support a weak conclusion."
          ]
        },
        {
          slug: "structured-ood-and-behavior-evidence",
          title: "Structured OOD and behavior evidence in agent evaluation",
          summary: "How to think about transfer, distribution shift, and observed behavior in evaluation design.",
          content: [
            "OOD is not one thing. For agents, goal shifts, tool shifts, environment shifts, and constraint shifts each test different kinds of generalization.",
            "If those changes are not structured, an OOD result says little beyond the fact that performance moved.",
            "I prefer OOD setups built as interpretable perturbation families. Then the result can say what kind of capability breaks under what kind of change.",
            "Useful OOD evaluation is not mainly harder. It is more diagnostic."
          ]
        },
        {
          slug: "construct-validity-for-llm-benchmarks",
          title: "Construct validity for LLM benchmarks",
          summary: "A benchmark claim should be explicit about what it is claiming to measure.",
          content: [
            "Construct validity matters because benchmark scores do not interpret themselves.",
            "The gap between task design, scoring rule, and capability conclusion is where many benchmark claims become fragile.",
            "That is why higher scores do not automatically mean stronger capability, especially when the label itself is broad.",
            "Construct validity is not academic decoration. It is part of whether the benchmark conclusion can stand."
          ]
        }
      ]
    },
    {
      slug: "technology-judgment-and-human-questions",
      title: "Technology, Judgment, and Human Questions",
      description:
        "A philosophy / issues series in preparation, intended for writing on how technical systems shape judgment, how institutions absorb people, and what progress narratives leave out.",
      category: "philosophy-issues",
      articles: []
    },
    {
      slug: "slow-writing-fragments",
      title: "Slow Writing",
      description:
        "A slower literary space for prose, fragments, reflection, and writing that does not need to resolve itself too quickly.",
      category: "literary-creation",
      articles: [
        {
          slug: "selected-reflective-essay",
          title: "Slow sentences",
          summary: "A different rhythm of writing that lives beside the technical work.",
          featured: true,
          content: [
            "Technical writing often feels like bridge-building: taking a judgment from one side to another. Literary writing feels more like standing in the river and watching where the water goes.",
            "It does not have to prove usefulness immediately. It lets a sentence move more slowly and lets an idea arrive first as texture, temperature, or shape.",
            "For me this is not separate from technical work. It is a way of recalibrating language so it can hold what is not ready to be compressed yet.",
            "Some durable judgments are born not from the sharpest argument, but from a sentence that was allowed to slow down."
          ]
        },
        {
          slug: "fragment-and-prose-note",
          title: "The lit window at night",
          summary: "Short-form prose and reflective fragments.",
          content: [
            "After ten at night, the convenience store downstairs throws a rectangle of light onto the wall by the window.",
            "When I look up from the desk, that small bright surface feels like a page held open in the dark.",
            "At that hour the city recedes, and sentences finally begin to sound like they belong to me."
          ]
        }
      ]
    }
  ],
  entries: []
};
