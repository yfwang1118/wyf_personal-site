import type { WritingContent } from "@/lib/types";

export const writingZh: WritingContent = {
  pageTitle: "写作",
  intro:
    "我的写作会长期分成三条线：LLM / AI，哲学 / 议题，以及文学创作。它们共用同一套写作系统，但在主页和专题页里会有不同权重，其中 LLM / AI 是当前最核心、也最希望被优先看见的部分。",
  sections: {
    categories: "写作方向",
    featured: "精选文章",
    series: "专题写作"
  },
  categories: [
    {
      key: "llm-ai",
      title: "LLM / AI",
      description: "当前最核心的写作主线，围绕 Agent、评测、能力测量、真实系统和方法论展开。"
    },
    {
      key: "philosophy-issues",
      title: "哲学 / 议题",
      description: "围绕技术、判断、制度、人与时代感的一组长期议题写作。"
    },
    {
      key: "literary-creation",
      title: "文学创作",
      description: "作为另一条稳定表达线保留的小说、散文、片段与慢节奏写作。"
    }
  ],
  series: [
    {
      slug: "agent-capability-measurement-notes",
      title: "Agent 能力测量笔记",
      description:
        "这个专题想讨论的，不是如何再做一个更难的 benchmark，而是一个更基础的问题：当模型在复杂任务上拿到高分时，我们到底能不能说，它真的具备了某种能力？我会沿着 benchmark design、construct validity、psychometrics、nomological networks、结构化 OOD 等线索，重新理解 LLM 与 Agent 的评测问题，并尝试把“任务成功”还原成“潜在能力测量”。",
      category: "llm-ai",
      articles: [
        {
          slug: "measurement-view-1-score-is-not-capability",
          title: "测量观（一）：高分不等于高能力：复杂 Agent 评测，真正缺的不是更难的题",
          summary:
            "复杂 Agent 评测里最核心的问题，不是题目还不够难，而是我们能否把任务得分真正解释为潜在能力的证据。",
          featured: true,
          content: [
            "这两年，Agent 很热，评测也越来越热。",
            "大家做了很多事：把任务拉长，把工具接进来，把环境做得更真，把 workflow 做得更像现实世界。于是我们看到越来越多 benchmark，不再只是几道静态题，而是一个可以调用工具、分步执行、甚至需要长期推进的任务系统。",
            "看上去，一切都在变得更真实。",
            "但我越来越觉得，复杂 Agent 评测里真正悬而未决的问题，也许并不是“题还不够难”，而是另一个更基础、也更少被正面讨论的问题：当一个模型在复杂 benchmark 上拿到高分时，我们到底能不能据此说，它真的具备了某种能力？",
            "benchmark 分数从来都不是能力本身。它只是某些任务、某些数据、某些指标、某些环境设置之下，模型表现出来的一组结果。至于这组结果和我们口中的“推理能力”“规划能力”“工具使用能力”“长期任务执行能力”之间，到底是什么关系，很多时候并没有被真正说清楚。",
            "也正因为这个问题越来越突出，这两年真正值得重视的评测研究，并不只是又做出了多少个新榜单，而是开始反过来追问：我们到底有没有测到自己声称在测的东西。",
            "如果把这一组文献真正想推动的变化压成一句话，我会写成这样：今天复杂 Agent 评测真正缺的，不只是更长的任务、更真的环境、更多的工具，而是一套能把“潜在能力-行为证据-任务得分-真实世界表现”连起来的测量框架。"
          ]
        }
      ]
    },
    {
      slug: "agent-systems-in-practice",
      title: "Agent 系统与评测实践",
      description:
        "更贴近工程现场的一组文章，关心真实系统里评测如何进入优化闭环、轨迹数据到底学到了什么、badcase 如何被工程化为可执行资产。",
      category: "llm-ai",
      articles: [
        {
          slug: "agent-evaluation-as-diagnosis",
          title: "把 Agent 评测当作诊断，而不只是打分",
          summary: "评测框架应该帮助定位失效模式，而不是只输出一个总分。",
          featured: true,
          content: [
            "复杂 Agent 系统里，任务完成率当然重要，但它只告诉你“成没成”，很少告诉你“为什么成”或者“为什么没成”。如果评测只停在总分，它对系统优化的帮助其实很有限。",
            "我更倾向把 Agent 评测当作一个诊断系统。也就是说，评测设计要能拆出失败发生在哪一层：是任务理解、计划分解、工具调用、状态维护，还是环境反馈处理出了问题。",
            "一旦评测目标从“排个榜”转到“定位失效模式”，很多设计取舍就会变。你会更在意轨迹证据、error taxonomy、judge 与 verifier 的分工，以及失败案例能否回流到训练和 prompt 迭代里。",
            "对真实系统来说，好的评测不是帮你宣布模型已经很强，而是帮你更快知道下一步该修哪里。只有这样，评测才真正进入优化闭环。"
          ]
        },
        {
          slug: "what-coding-agents-learn-from-trajectories",
          title: "Coding Agent 从轨迹数据中真正学到了什么",
          summary: "关于监督信号、执行轨迹与模仿边界的一些思考。",
          featured: true,
          content: [
            "很多人会把轨迹数据直接理解成“更完整的监督”。但对 Coding Agent 来说，轨迹的价值并不只是更长，而在于它把决策过程、工具调用和环境反馈同时暴露了出来。",
            "问题在于，轨迹里的可学习部分并不等于整条轨迹本身。模型可能学到局部决策模式、常见 repair path，或者某种 scaffold 下的行动节奏，但未必学到跨环境泛化的抽象能力。",
            "所以我更关心两件事：第一，轨迹中哪些片段是可迁移的高价值信号；第二，这些信号是让模型学会了解题结构，还是只学会了某种模板化 workflow。",
            "如果这两点不分开，轨迹数据看起来越丰富，越容易让人高估它带来的真实泛化收益。"
          ]
        },
        {
          slug: "badcases-to-post-training-loops",
          title: "从 badcase 到后训练闭环",
          summary: "如何把真实业务失效转化为可训练、可评测的任务。",
          content: [
            "badcase 的价值不在于它能说明模型还不行，而在于它能成为下一轮优化的起点。真正关键的是，如何把零散失败翻译成可复现、可执行、可对比的任务表达。",
            "这通常需要几步转换：先做失败归因，再抽出任务 schema，然后把环境、约束和判分规则补齐，最后接进训练或评测链路。少任何一步，badcase 都很容易只停留在人工复盘层面。",
            "一旦 badcase 能进入 sandbox replay，它就不再只是一个案例，而会变成一个反复可调用的系统资产。你可以用它做 prompt 修补、数据构造、模型回归测试，甚至做 OOD 验证。",
            "所以 badcase 驱动的后训练，本质上不是“收集更多失败”，而是“把失败工程化”。"
          ]
        }
      ]
    },
    {
      slug: "benchmark-validity-notes",
      title: "Benchmark Validity 与结构化 OOD",
      description:
        "这组文章更偏方法论，关注 benchmark 到底在测什么、结构化 OOD 应该怎么设计，以及高分与高能力之间为什么不能直接画等号。",
      category: "llm-ai",
      articles: [
        {
          slug: "beyond-leaderboard-capability-measurement",
          title: "超越排行榜：关于能力测量的笔记",
          summary: "关于 validity、证据与 benchmark 真正想说明什么。",
          featured: true,
          content: [
            "排行榜很有用，它提供了一个快速可见的比较界面。但排行榜天然擅长压缩复杂性，而能力研究真正需要的，往往恰恰是把复杂性重新展开。",
            "当我们说一个 benchmark 在测“推理”“规划”或者“Agent 能力”时，这其实不是一句中性描述，而是一个测量声明。这个声明需要证据支撑，而不是只靠任务表现看起来像。",
            "也正因为如此，我越来越觉得 benchmark 的讨论不能只停留在工程搭建和题目设计上。我们还需要问：它到底代表什么构念？哪些证据支持这个判断？又有哪些替代解释没有被排除？",
            "如果这些问题不被认真处理，分数越高，结论反而可能越虚。"
          ]
        },
        {
          slug: "structured-ood-and-behavior-evidence",
          title: "Agent 评测中的结构化 OOD 与行为证据",
          summary: "如何从迁移、分布错位与可观察行为来思考评测设计。",
          content: [
            "OOD 不是一个统一概念。对 Agent 来说，目标变化、工具变化、环境变化、约束变化，往往分别对应着不同类型的泛化要求。",
            "如果不把这些变化结构化，只说“模型在 OOD 上表现如何”，信息量其实很有限。因为你不知道模型失败的到底是规划、适配、记忆维护，还是对某种接口假设的依赖。",
            "我更倾向把 OOD 设计成一组有解释力的结构化扰动。这样一来，评测结果不只是告诉你模型退化了多少，还能告诉你它到底在哪类变化下最脆弱。",
            "真正有用的 OOD 评测，不是追求更难，而是追求更可解释。"
          ]
        },
        {
          slug: "construct-validity-for-llm-benchmarks",
          title: "LLM Benchmark 的 Construct Validity",
          summary: "一个 benchmark 声称自己测到了什么，这件事需要被说清楚。",
          content: [
            "Construct validity 之所以重要，是因为 benchmark 分数本身不会替你自动完成能力解释。任务得分只是观察值，构念才是你真正想说的那个对象。",
            "这中间一旦缺少论证，研究就很容易出现一个常见问题：任务设计、评分方式和最终能力结论之间的链条并不牢靠。",
            "很多 LLM benchmark 之所以争议越来越大，不是因为任务没用，而是因为大家开始意识到：高分不天然等于高能力，尤其当能力标签本身很宏大时更是如此。",
            "所以 construct validity 不是附加的学术洁癖，而是决定 benchmark 结论能不能站得住的基础条件。"
          ]
        }
      ]
    },
    {
      slug: "technology-judgment-and-human-questions",
      title: "技术、判断与人",
      description:
        "这是哲学 / 议题方向里会长期推进的一条线，准备讨论技术系统如何塑造判断、人如何被制度化，以及所谓“进步”叙事里被忽略的东西。",
      category: "philosophy-issues",
      articles: []
    },
    {
      slug: "slow-writing-fragments",
      title: "缓慢写作",
      description: "收纳那些不急着下结论的文字：散文、片段、反思，以及更接近文学创作的慢节奏写作。",
      category: "literary-creation",
      articles: [
        {
          slug: "selected-reflective-essay",
          title: "缓慢的句子",
          summary: "与技术写作并行存在的另一种节奏。",
          featured: true,
          content: [
            "有时候我会觉得，写技术文章像是在搭桥，要把模糊的判断从此岸送到彼岸；而文学写作更像是在河里停下来，看水到底往哪里去。",
            "它不要求立刻给出一个结论，也不急着证明自己有用。它允许句子在纸上慢一点，允许一个念头先以气味、温度和某种模糊的形状出现。",
            "也正因为这样，文学写作对我不是技术工作的对立面，反而像是一种校准。它提醒我，语言不只是用来压缩信息，也用来保留那些暂时还不适合被过快归纳的东西。",
            "很多时候，一个人真正稳定下来的判断，未必诞生于最锋利的论证，而可能先诞生于一段被认真写下来的缓慢句子。"
          ]
        },
        {
          slug: "fragment-and-prose-note",
          title: "夜里的窗口",
          summary: "短篇散文与片段式记录。",
          content: [
            "夜里十点以后，楼下便利店的灯光会把窗边那一小块墙照得很亮，像有人把一张纸贴在黑暗里。",
            "有时我写到一半抬头，会看见那块亮面静静停着。它不说话，也不催促，只是提醒我：还有一些没有说完的话，可以继续慢慢写。",
            "城市的声音在这个时刻会退到很远，只剩键盘、风和偶尔经过的脚步声。句子也是在这种时候，才像真正属于自己。"
          ]
        }
      ]
    }
  ],
  entries: []
};
