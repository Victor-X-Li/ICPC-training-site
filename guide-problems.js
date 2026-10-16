/* Problems discovered through USACO Guide and checked against original contest material.
 * Estimates are independent CF-scale assessments. No solution text is shipped.
 */
(function (root) {
  const problems = [
    {
      "id": "usaco1159",
      "title": "Connecting Two Barns",
      "url": "https://usaco.org/index.php?page=viewproblem2&cpid=1159",
      "platform": "USACO",
      "origin": "USACO",
      "contest": "USACO 2021 December · Silver · 2",
      "originalContest": "USACO 2021 December Contest, Silver — Problem 2",
      "year": 2021,
      "originalMonth": 12,
      "estimate": 1800,
      "topics": [
        "并查集",
        "图论建模"
      ],
      "subtopics": [
        "连通块与代价建模"
      ],
      "requirements": [
        "dsu",
        "connected-components",
        "two-pointers",
        "int64"
      ],
      "reason": "把操作限制转成可证明的最优性条件，兼顾结构划分与代价计算。",
      "estimateBasis": "需要证明最多两次连接的结构，再协调连通块与有序编号；实现负担适中。",
      "guideUrl": "https://usaco.guide/silver/graph-traversal",
      "editorialUrl": "https://usaco.org/current/data/sol_prob2_silver_dec21.html",
      "collection": "usaco-guide-2026-10",
      "discoverySource": "USACO Guide",
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-16",
      "evidence": [
        "https://usaco.guide/silver/graph-traversal",
        "https://usaco.org/index.php?page=viewproblem2&cpid=1159",
        "https://usaco.org/current/data/sol_prob2_silver_dec21.html"
      ]
    },
    {
      "id": "usaco1206",
      "title": "Redistributing Gifts",
      "url": "https://usaco.org/index.php?page=viewproblem2&cpid=1206",
      "platform": "USACO",
      "origin": "USACO",
      "contest": "USACO 2022 February · Silver · 1",
      "originalContest": "USACO 2022 February Contest, Silver — Problem 1",
      "year": 2022,
      "originalMonth": 2,
      "estimate": 1900,
      "topics": [
        "DFS 及其应用",
        "图论建模"
      ],
      "subtopics": [
        "可达性与交换结构"
      ],
      "requirements": [
        "directed-graphs",
        "reachability",
        "dfs",
        "cycle-decomposition"
      ],
      "reason": "核心在于证明分配条件与图结构的对应关系，实现工具本身较基础。",
      "estimateBasis": "主要跨度是从全局分配到单个选择的充要条件；重复 DFS 足以满足 N≤500。",
      "guideUrl": "https://usaco.guide/silver/graph-traversal",
      "editorialUrl": "https://usaco.org/current/data/sol_prob1_silver_feb22.html",
      "collection": "usaco-guide-2026-10",
      "discoverySource": "USACO Guide",
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-16",
      "evidence": [
        "https://usaco.guide/silver/graph-traversal",
        "https://usaco.org/index.php?page=viewproblem2&cpid=1206",
        "https://usaco.org/current/data/sol_prob1_silver_feb22.html"
      ]
    },
    {
      "id": "cf1513d",
      "title": "GCD and MST",
      "url": "https://codeforces.com/problemset/problem/1513/D",
      "platform": "Codeforces",
      "origin": "Codeforces",
      "contest": "Divide by Zero 2021 / CF Round 714 · D",
      "originalContest": "Divide by Zero 2021 and Codeforces Round 714 (Div. 2) — D",
      "year": 2021,
      "estimate": 2100,
      "topics": [
        "MST",
        "并查集",
        "数论",
        "优化建图"
      ],
      "subtopics": [
        "隐式图MST",
        "GCD / LCM"
      ],
      "requirements": [
        "kruskal",
        "dsu",
        "divisibility",
        "implicit-graph",
        "amortized-analysis"
      ],
      "reason": "整除性质、图的隐式规模和贪心过程互相制约，适合完整论证复杂度与最优性。",
      "estimateBasis": "需要同时证明候选边压缩、贪心安全性和扩展扫描的总量；不是直接运行 MST。",
      "guideUrl": "https://usaco.guide/gold/mst",
      "editorialUrl": "https://codeforces.com/blog/entry/89550",
      "collection": "usaco-guide-2026-10",
      "discoverySource": "USACO Guide",
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-16",
      "evidence": [
        "https://usaco.guide/gold/mst",
        "https://codeforces.com/problemset/problem/1513/D",
        "https://codeforces.com/blog/entry/89550"
      ]
    },
    {
      "id": "usaco1211",
      "title": "Moo Network",
      "url": "https://usaco.org/index.php?page=viewproblem2&cpid=1211",
      "platform": "USACO",
      "origin": "USACO",
      "contest": "USACO 2022 February · Gold · 3",
      "originalContest": "USACO 2022 February Contest, Gold — Problem 3",
      "year": 2022,
      "originalMonth": 2,
      "estimate": 2100,
      "topics": [
        "MST",
        "优化建图"
      ],
      "subtopics": [
        "隐式图MST",
        "MST性质与交换"
      ],
      "requirements": [
        "kruskal",
        "sparse-graph",
        "mst-cycle-property",
        "sorting",
        "int64"
      ],
      "reason": "候选规模很大，关键是证明保留的结构足够表达最优解。",
      "estimateBasis": "利用坐标范围限制筛去冗余边，并处理交换论证和平方距离的 64 位实现。",
      "guideUrl": "https://usaco.guide/gold/mst",
      "editorialUrl": "https://usaco.org/current/data/sol_prob3_gold_feb22.html",
      "collection": "usaco-guide-2026-10",
      "discoverySource": "USACO Guide",
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-16",
      "evidence": [
        "https://usaco.guide/gold/mst",
        "https://usaco.org/index.php?page=viewproblem2&cpid=1211",
        "https://usaco.org/current/data/sol_prob3_gold_feb22.html"
      ]
    },
    {
      "id": "usaco1304",
      "title": "Moo Route II",
      "url": "https://usaco.org/index.php?page=viewproblem2&cpid=1304",
      "platform": "USACO",
      "origin": "USACO",
      "contest": "USACO 2023 February · Silver · 3",
      "originalContest": "USACO 2023 February Contest, Silver — Problem 3",
      "year": 2023,
      "originalMonth": 2,
      "estimate": 2100,
      "topics": [
        "最短路",
        "优化建图",
        "图论建模"
      ],
      "subtopics": [
        "时间或反向最短路",
        "事件驱动的可达性"
      ],
      "requirements": [
        "label-correcting",
        "event-reachability",
        "sorted-adjacency",
        "amortized-analysis"
      ],
      "reason": "状态可以反复改善，需要认真证明搜索的总处理量与终止性。",
      "estimateBasis": "到达时间不满足普通 Dijkstra 的定点性质；难点是把可用航班的激活组织成有界总量。",
      "guideUrl": "https://usaco.guide/silver/graph-traversal",
      "editorialUrl": "https://usaco.org/current/data/sol_prob3_silver_feb23.html",
      "collection": "usaco-guide-2026-10",
      "discoverySource": "USACO Guide",
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-16",
      "evidence": [
        "https://usaco.guide/silver/graph-traversal",
        "https://usaco.org/index.php?page=viewproblem2&cpid=1304",
        "https://usaco.org/current/data/sol_prob3_silver_feb23.html"
      ]
    },
    {
      "id": "abc171_f",
      "title": "Strivore",
      "url": "https://atcoder.jp/contests/abc171/tasks/abc171_f",
      "platform": "AtCoder",
      "origin": "AtCoder",
      "contest": "ABC 171 · F",
      "originalContest": "AtCoder Beginner Contest 171 — F",
      "year": 2020,
      "estimate": 2100,
      "topics": [
        "组合数学"
      ],
      "subtopics": [
        "组合计数",
        "模运算与逆元"
      ],
      "requirements": [
        "combinatorics",
        "binomial-coefficients",
        "canonical-decomposition",
        "modular-inverse"
      ],
      "reason": "需要区分操作方式与最终对象，建立不重不漏的计数描述。",
      "estimateBasis": "关键是为含给定子序列的字符串选定唯一表示，再处理组合数与幂的线性计算。",
      "guideUrl": "https://usaco.guide/gold/combo",
      "editorialUrl": "https://img.atcoder.jp/abc171/editorial.pdf",
      "collection": "usaco-guide-2026-10",
      "discoverySource": "USACO Guide",
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-16",
      "evidence": [
        "https://usaco.guide/gold/combo",
        "https://atcoder.jp/contests/abc171/tasks/abc171_f",
        "https://img.atcoder.jp/abc171/editorial.pdf"
      ]
    },
    {
      "id": "usaco1184",
      "title": "Cereal 2",
      "url": "https://usaco.org/index.php?page=viewproblem2&cpid=1184",
      "platform": "USACO",
      "origin": "USACO",
      "contest": "USACO 2022 January · Silver · 3",
      "originalContest": "USACO 2022 January Contest, Silver — Problem 3",
      "year": 2022,
      "originalMonth": 1,
      "estimate": 2200,
      "topics": [
        "DFS 及其应用",
        "图论建模"
      ],
      "subtopics": [
        "DFS 树上的构造",
        "生成树与环结构"
      ],
      "requirements": [
        "graph-modeling",
        "dfs",
        "spanning-tree",
        "cycle-structure",
        "constructive-proof"
      ],
      "reason": "既要证明最优值，也要构造能达到该值的顺序，适合检验建模的完整性。",
      "estimateBasis": "抽象出图结构后还需协调选择偏好与输出顺序；上下界证明和构造缺一不可。",
      "guideUrl": "https://usaco.guide/silver/graph-traversal",
      "editorialUrl": "https://usaco.org/current/data/sol_prob3_silver_jan22.html",
      "collection": "usaco-guide-2026-10",
      "discoverySource": "USACO Guide",
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-16",
      "evidence": [
        "https://usaco.guide/silver/graph-traversal",
        "https://usaco.org/index.php?page=viewproblem2&cpid=1184",
        "https://usaco.org/current/data/sol_prob3_silver_jan22.html"
      ]
    },
    {
      "id": "usaco1259",
      "title": "Strongest Friendship Group",
      "url": "https://usaco.org/index.php?page=viewproblem2&cpid=1259",
      "platform": "USACO",
      "origin": "USACO",
      "contest": "USACO 2022 December · Gold · 3",
      "originalContest": "USACO 2022 December Contest, Gold — Problem 3",
      "year": 2022,
      "originalMonth": 12,
      "estimate": 2300,
      "topics": [
        "并查集",
        "图论建模"
      ],
      "subtopics": [
        "离线连通性",
        "贪心与图结构"
      ],
      "requirements": [
        "dsu",
        "offline-connectivity",
        "degree-peeling",
        "greedy-proof"
      ],
      "reason": "需要把局部选择与全局目标联系起来，并证明选取的状态覆盖最优解。",
      "estimateBasis": "最小度剥离的覆盖性证明与逆序连通块维护组合使用；无需回滚或可持久化。",
      "guideUrl": "https://usaco.guide/gold/dsu",
      "editorialUrl": "https://usaco.org/current/data/sol_prob3_gold_dec22.html",
      "collection": "usaco-guide-2026-10",
      "discoverySource": "USACO Guide",
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-16",
      "evidence": [
        "https://usaco.guide/gold/dsu",
        "https://usaco.org/index.php?page=viewproblem2&cpid=1259",
        "https://usaco.org/current/data/sol_prob3_gold_dec22.html"
      ]
    },
    {
      "id": "cf1627e",
      "title": "Not Escaping",
      "url": "https://codeforces.com/problemset/problem/1627/E",
      "platform": "Codeforces",
      "origin": "Codeforces",
      "contest": "CF Round 766 · E",
      "originalContest": "Codeforces Round 766 (Div. 2) — E",
      "year": 2022,
      "estimate": 2300,
      "topics": [
        "最短路",
        "优化建图",
        "动态规划"
      ],
      "subtopics": [
        "辅助节点与压缩建图",
        "分层最短路"
      ],
      "requirements": [
        "coordinate-compression",
        "sparse-graph",
        "row-dp",
        "negative-edges",
        "two-sweeps",
        "int64"
      ],
      "reason": "重点是控制状态规模，并利用结构处理含收益的转移。",
      "estimateBasis": "需要压缩关键位置并证明逐层处理和层内转移的正确性；实现包含稀疏状态与不可达边界。",
      "guideUrl": "https://usaco.guide/gold/shortest-paths",
      "editorialUrl": "https://codeforces.com/blog/entry/99067",
      "collection": "usaco-guide-2026-10",
      "discoverySource": "USACO Guide",
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-16",
      "evidence": [
        "https://usaco.guide/gold/shortest-paths",
        "https://codeforces.com/problemset/problem/1627/E",
        "https://codeforces.com/blog/entry/99067"
      ]
    },
    {
      "id": "usaco1162",
      "title": "HILO",
      "url": "https://usaco.org/index.php?page=viewproblem2&cpid=1162",
      "platform": "USACO",
      "origin": "USACO",
      "contest": "USACO 2021 December · Gold · 2",
      "originalContest": "USACO 2021 December Contest, Gold — Problem 2",
      "year": 2021,
      "originalMonth": 12,
      "estimate": 2400,
      "topics": [
        "笛卡尔树与单调栈",
        "区间结构"
      ],
      "subtopics": [
        "单调栈维护聚合信息",
        "离线状态变化"
      ],
      "requirements": [
        "monotonic-stack",
        "offline-processing",
        "local-contributions",
        "amortized-analysis"
      ],
      "reason": "多个查询间有共享结构，难点在于找出哪些信息真正发生变化。",
      "estimateBasis": "需要证明冗余比较的结构与跨参数维护规则，明显超过直接求相邻较大或较小元素。",
      "guideUrl": "https://usaco.guide/gold/stacks",
      "editorialUrl": "https://usaco.org/current/data/sol_prob2_gold_dec21.html",
      "collection": "usaco-guide-2026-10",
      "discoverySource": "USACO Guide",
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-16",
      "evidence": [
        "https://usaco.guide/gold/stacks",
        "https://usaco.org/index.php?page=viewproblem2&cpid=1162",
        "https://usaco.org/current/data/sol_prob2_gold_dec21.html"
      ]
    },
    {
      "id": "usaco1474",
      "title": "Reachable Pairs",
      "url": "https://usaco.org/index.php?page=viewproblem2&cpid=1474",
      "platform": "USACO",
      "origin": "USACO",
      "contest": "USACO 2025 January · Gold · 2",
      "originalContest": "USACO 2025 January Contest, Gold — Problem 2",
      "year": 2025,
      "originalMonth": 1,
      "estimate": 2400,
      "topics": [
        "并查集",
        "优化建图",
        "图论建模"
      ],
      "subtopics": [
        "离线连通性",
        "代价与图模型转换"
      ],
      "requirements": [
        "dsu",
        "offline-connectivity",
        "implicit-graph",
        "component-metadata",
        "int64"
      ],
      "reason": "图的显式变化很大，需要寻找等价且可维护的结构，并证明统计量一致。",
      "estimateBasis": "保连通性的隐式模型与活跃点对统计是主要门槛，必须区分连通用途与计数用途；无需回滚。",
      "guideUrl": "https://usaco.guide/gold/dsu",
      "editorialUrl": "https://usaco.org/current/data/sol_prob2_gold_jan25.html",
      "collection": "usaco-guide-2026-10",
      "discoverySource": "USACO Guide",
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-16",
      "evidence": [
        "https://usaco.guide/gold/dsu",
        "https://usaco.org/index.php?page=viewproblem2&cpid=1474",
        "https://usaco.org/current/data/sol_prob2_gold_jan25.html"
      ]
    },
    {
      "id": "usaco1283",
      "title": "Moo Route",
      "url": "https://usaco.org/index.php?page=viewproblem2&cpid=1283",
      "platform": "USACO",
      "origin": "USACO",
      "contest": "USACO 2023 January · Gold · 3",
      "originalContest": "USACO 2023 January Contest, Gold — Problem 3",
      "year": 2023,
      "originalMonth": 1,
      "estimate": 2400,
      "topics": [
        "组合数学"
      ],
      "subtopics": [
        "组合计数",
        "模运算与逆元"
      ],
      "requirements": [
        "combinatorics",
        "binomial-coefficients",
        "bijection",
        "optimality-proof",
        "modular-inverse"
      ],
      "reason": "先理解最优对象的结构，再证明计数描述既唯一又完整。",
      "estimateBasis": "局部选择与全局最优路线的一一对应需要归纳证明；组合数本身只是最终计算工具。",
      "guideUrl": "https://usaco.guide/gold/combo",
      "editorialUrl": "https://usaco.org/current/data/sol_prob3_gold_jan23.html",
      "collection": "usaco-guide-2026-10",
      "discoverySource": "USACO Guide",
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-16",
      "evidence": [
        "https://usaco.guide/gold/combo",
        "https://usaco.org/index.php?page=viewproblem2&cpid=1283",
        "https://usaco.org/current/data/sol_prob3_gold_jan23.html"
      ]
    }
  ];

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = problems;
  } else {
    root.GuideProblems = problems;
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
