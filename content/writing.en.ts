import type { WritingContent } from "@/lib/types";

export const writingEn: WritingContent = {
  pageTitle: "Writing",
  intro:
    "Writing is part of how I think. I write about LLM systems, evaluation, capability measurement, research papers, and occasionally more reflective or literary topics.",
  sections: {
    categories: "Writing categories",
    featured: "Featured entries"
  },
  categories: [
    {
      key: "tech-essays",
      title: "Tech Essays",
      description: "Public technical writing on post-training, agents, tool use, and product-facing AI systems."
    },
    {
      key: "research-notes",
      title: "Research Notes",
      description: "Notes on capability measurement, structured OOD, construct validity, and benchmark design."
    },
    {
      key: "literary-writing",
      title: "Literary / Personal Writing",
      description: "A curated secondary layer of reflective and literary writing."
    }
  ],
  entries: [
    {
      slug: "agent-evaluation-as-diagnosis",
      title: "Agent evaluation as diagnosis, not just scoring",
      summary: "Why evaluation frameworks should localize failure patterns instead of flattening them.",
      category: "tech-essays",
      featured: true
    },
    {
      slug: "what-coding-agents-learn-from-trajectories",
      title: "What coding agents actually learn from trajectory data",
      summary: "On supervision signals, execution traces, and the limits of imitation.",
      category: "tech-essays",
      featured: true
    },
    {
      slug: "badcases-to-post-training-loops",
      title: "From badcases to post-training loops in real LLM systems",
      summary: "A practical view on turning product failures into trainable and measurable tasks.",
      category: "tech-essays"
    },
    {
      slug: "beyond-leaderboard-capability-measurement",
      title: "Beyond leaderboard: notes on capability measurement",
      summary: "Thinking about validity, evidence, and what benchmarks are supposed to show.",
      category: "research-notes",
      featured: true
    },{