/* Tarjan applications verified on 2026-10-19. Estimates are independent.
   Existing records below receive topic metadata only, preserving their IDs. */
(function (root) {
  const problems = [
    {
      "id": "cf1986f",
      "topics": ["Tarjan"],
      "tarjanSubtopics": ["割边"],
      "tarjanStage": 1,
      "tarjanVerifiedAt": "2026-10-19",
      "tarjanEvidence": [
        "https://codeforces.com/problemset/problem/1986/F"
      ]
    },
    {
      "id": "abc334_g",
      "topics": ["Tarjan"],
      "tarjanSubtopics": ["割点"],
      "tarjanStage": 1,
      "tarjanVerifiedAt": "2026-10-19",
      "tarjanEvidence": [
        "https://atcoder.jp/contests/abc334/tasks/abc334_g",
        "https://atcoder.jp/contests/abc334/editorial/8988"
      ]
    },
    {
      "id": "cf1276b",
      "title": "Two Fairs",
      "url": "https://codeforces.com/problemset/problem/1276/B",
      "platform": "Codeforces",
      "origin": "Codeforces",
      "contest": "Codeforces Round 606 (Div. 1) · B",
      "originalContest": "Codeforces Round 606 (Div. 1, based on Technocup 2020 Elimination Round 4)",
      "year": 2019,
      "estimate": 1900,
      "topics": ["Tarjan"],
      "subtopics": ["割点", "必经点与计数"],
      "tarjanSubtopics": ["割点"],
      "requirements": [
        "vertex-deletion connectivity",
        "DFS reachability",
        "64-bit pair counting"
      ],
      "reason": "把所有路径必须满足的条件转化为可统计的结构，适合作为割点性质应用的过渡。",
      "estimateBasis": "核心是证明必经条件与两侧集合的对应关系；实现较轻，可用两次避点 DFS，不强制运行 Tarjan。",
      "selectionNote": "2019 年 CF 题；保留其必要充分条件证明价值，避免把 Tarjan 当成唯一工具。",
      "editorialUrl": "https://codeforces.com/blog/entry/72239",
      "evidence": [
        "https://codeforces.com/problemset/problem/1276/B",
        "https://codeforces.com/blog/entry/72239"
      ],
      "tarjanStage": 1,
      "classic": true
    },
    {
      "id": "qoj12373",
      "title": "割点",
      "url": "https://qoj.ac/problem/12373",
      "platform": "QOJ",
      "origin": "CCPC",
      "contest": "CCPC 2025 · 福建邀请赛 / FJCPC · I",
      "originalContest": "2025 National Invitational of CCPC (Fujian), The 12th Fujian Collegiate Programming Contest",
      "year": 2025,
      "originalMonth": 6,
      "estimate": 2200,
      "topics": ["Tarjan"],
      "subtopics": ["割点", "圆方树性质", "图的构造"],
      "tarjanSubtopics": ["割点", "点双连通分量（圆方树）"],
      "requirements": [
        "articulation-point structure",
        "block-cut tree leaf properties",
        "constructive graphs",
        "degree constraints"
      ],
      "reason": "同时考查结构的必要条件与构造的充分性，训练价值在证明而非模板实现。",
      "estimateBasis": "需协调指定割点与单调度数约束，分类证明无解边界，再给出线性规模构造。",
      "qojSourceTag": "FJCPC 2025",
      "qojCategoryNote": "题页明确归属第 12 届福建省赛；Gym 同时标注为 2025 CCPC 福建邀请赛，不冒称区域赛或总决赛分类。",
      "editorialUrl": "https://codeforces.com/gym/105977/attachments/download/32216/Slide.pdf",
      "evidence": [
        "https://qoj.ac/problem/12373",
        "https://qoj.ac/download.php?id=12373&type=statement",
        "https://qoj.ac/problems?tag=FJCPC+2025",
        "https://codeforces.com/gym/105977/attachments/download/32216/Slide.pdf"
      ],
      "tarjanStage": 2,
      "classic": false
    },
    {
      "id": "cf652e",
      "title": "Pursuit For Artifacts",
      "url": "https://codeforces.com/problemset/problem/652/E",
      "platform": "Codeforces",
      "origin": "Codeforces",
      "contest": "Educational Codeforces Round 10 · E",
      "originalContest": "Educational Codeforces Round 10",
      "year": 2016,
      "estimate": 2200,
      "topics": ["Tarjan"],
      "subtopics": ["边双连通分量", "桥树", "路径存在性"],
      "tarjanSubtopics": ["割边", "边双连通分量"],
      "requirements": [
        "edge-biconnected components",
        "bridge-tree compression",
        "edge-simple trails",
        "tree path aggregation"
      ],
      "reason": "检验对路径限制与连通结构的精确理解，尤其适合区分点双和边双的使用边界。",
      "estimateBasis": "需证明缩点后保留哪些信息，以及块内绕行为何可行；整体线性，实现负担适中。",
      "selectionNote": "2016 年 CF 题；保留边不可重复而点可重复的辨析价值，与单纯求边双模板不同。",
      "editorialUrl": "https://codeforces.com/blog/entry/43986",
      "evidence": [
        "https://codeforces.com/problemset/problem/652/E",
        "https://codeforces.com/blog/entry/43986"
      ],
      "tarjanStage": 2,
      "classic": true
    },
    {
      "id": "abc318_g",
      "title": "Typical Path Problem",
      "url": "https://atcoder.jp/contests/abc318/tasks/abc318_g",
      "platform": "AtCoder",
      "origin": "AtCoder",
      "contest": "ABC 318 · G",
      "originalContest": "THIRD PROGRAMMING CONTEST 2023 ALGO（AtCoder Beginner Contest 318）",
      "year": 2023,
      "estimate": 2300,
      "topics": ["Tarjan"],
      "subtopics": ["点双连通分量", "圆方树", "简单路径存在性"],
      "tarjanSubtopics": ["点双连通分量（圆方树）"],
      "requirements": [
        "vertex-biconnected components",
        "block-cut tree",
        "simple-path existence",
        "tree path traversal"
      ],
      "reason": "用具体路径要求检验圆方树究竟保留了什么信息，证明与结构识别比实现更关键。",
      "estimateBasis": "需证明原图简单路径条件与圆方树上块的关系，不能误把原点必须位于树上路径作为判断；可线性求解。",
      "solutionScope": "采用已核实的圆方树解法，不要求最大流；官方另有拆点网络流解法。",
      "editorialUrl": "https://atcoder.jp/contests/abc318/editorial/7090",
      "officialEditorialUrl": "https://atcoder.jp/contests/abc318/editorial/7085",
      "evidence": [
        "https://atcoder.jp/contests/abc318/tasks/abc318_g",
        "https://atcoder.jp/contests/abc318/editorial/7090",
        "https://atcoder.jp/contests/abc318/editorial/7085"
      ],
      "tarjanStage": 2,
      "classic": false
    },
    {
      "id": "cf732f",
      "title": "Tourist Reform",
      "url": "https://codeforces.com/problemset/problem/732/F",
      "platform": "Codeforces",
      "origin": "Codeforces",
      "contest": "Codeforces Round 377 (Div. 2) · F",
      "originalContest": "Codeforces Round 377 (Div. 2)",
      "year": 2016,
      "estimate": 2400,
      "topics": ["Tarjan"],
      "subtopics": ["边双连通分量", "强连通定向", "最优构造"],
      "tarjanSubtopics": ["割边", "边双连通分量"],
      "requirements": [
        "edge-biconnected components",
        "bridge tree",
        "DFS edge orientation",
        "optimality proof"
      ],
      "reason": "需要先给出最优值上界，再构造达到上界的方案，把连通性知识推进到优化与证明。",
      "estimateBasis": "结合边双结构与定向构造；既要证明全局最优，也要正确输出每条原边的方向。",
      "selectionNote": "2016 年 CF 题；保留从结构上界到可达构造的完整证明链，区别于强连通定向模板。",
      "editorialUrl": "https://codeforces.com/blog/entry/47890",
      "evidence": [
        "https://codeforces.com/problemset/problem/732/F",
        "https://codeforces.com/blog/entry/47890",
        "https://codeforces.com/topic/48120/en3?mobile=true"
      ],
      "tarjanStage": 3,
      "classic": true
    },
    {
      "id": "apio18_duathlon",
      "title": "Duathlon",
      "url": "https://oj.uz/problem/view/APIO18_duathlon",
      "platform": "oj.uz",
      "origin": "国外 OI",
      "contest": "APIO 2018 · Problem 3",
      "originalContest": "Asia-Pacific Informatics Olympiad 2018",
      "year": 2018,
      "estimate": 2500,
      "topics": ["Tarjan"],
      "subtopics": ["点双连通分量", "圆方树", "树上计数"],
      "tarjanSubtopics": ["割点", "点双连通分量（圆方树）"],
      "requirements": [
        "vertex-biconnected components",
        "block-cut forest",
        "subtree-size counting",
        "complementary counting",
        "64-bit arithmetic"
      ],
      "reason": "从单次路径判定推进到全局计数，需要仔细证明计数对象及重复计算的边界。",
      "estimateBasis": "主要难度在将原图路径条件转换为圆方树上的组合计数；需处理非连通图，线性算法即可，无需动态树。",
      "selectionNote": "原题为 2018 年，作为五年偏好的有意例外：圆方树静态计数训练价值突出，承接 ABC318 G，不引入重型数据结构。",
      "editorialUrl": "https://usaco.guide/problems/apio-2018duathlon/solution",
      "evidence": [
        "https://oj.uz/problem/view/APIO18_duathlon",
        "https://oj.uz/problems/source/apio2018",
        "https://static.oj.uz/problem/77c788029e2720a727112cc4b67a1a2/statement/50fb1d45c2390222cbf06960ca6480f36bfc8aa63c36ab09ddecf9cb92c99f74/statement_en.pdf",
        "https://usaco.guide/problems/apio-2018duathlon/solution"
      ],
      "tarjanStage": 3,
      "classic": true
    },
    {
      "id": "cf555e",
      "title": "Case of Computer Network",
      "url": "https://codeforces.com/problemset/problem/555/E",
      "platform": "Codeforces",
      "origin": "Codeforces",
      "contest": "Codeforces Round 310 (Div. 1) · E",
      "originalContest": "Codeforces Round 310 (Div. 1)",
      "year": 2015,
      "estimate": 2600,
      "topics": ["Tarjan"],
      "subtopics": ["边双连通分量", "桥森林", "路径约束"],
      "tarjanSubtopics": ["割边", "边双连通分量"],
      "requirements": [
        "edge-biconnected components",
        "bridge forest",
        "strong orientation existence",
        "LCA",
        "tree difference accumulation",
        "parallel-edge handling"
      ],
      "reason": "综合提高题：多个路径要求必须同时成立，考查结构化简、冲突判定与证明的衔接。",
      "estimateBasis": "先证明块内可强连通定向，再在森林上结合 LCA 和两类差分累计方向约束；重边、非连通与冲突条件增加实现负担。",
      "selectionNote": "2015 年 CF 题；作为本轮末尾提高题，利用已接触的 LCA，新增负担主要是树上差分的综合应用。",
      "editorialUrl": "https://codeforces.com/blog/entry/18919",
      "evidence": [
        "https://codeforces.com/problemset/problem/555/E",
        "https://codeforces.com/blog/entry/18919"
      ],
      "tarjanStage": 4,
      "classic": true
    }
  ];

  for (const problem of problems) {
    if (!problem.title) continue;
    problem.collection = 'tarjan-2026-10';
    problem.verifiedAt = '2026-10-19';
    problem.uncertainty = 200;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = problems;
  } else {
    root.TarjanProblems = problems;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
