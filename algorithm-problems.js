/* Independently assessed algorithm training collection. No solutions are shipped. */
(function (root) {
  const problems = [
  {
    "id": "abc380_e",
    "url": "https://atcoder.jp/contests/abc380/tasks/abc380_e",
    "title": "1D Bucket Tool",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 380 · E",
    "originalContest": "AtCoder Beginner Contest 380 — E",
    "year": 2024,
    "estimate": 1800,
    "topics": [
      "并查集"
    ],
    "subtopics": [
      "并查集状态维护"
    ],
    "requirements": [
      "dsu",
      "component-metadata",
      "interval-boundaries"
    ],
    "reason": "需要辨明更新对连通块结构的影响，并协调局部状态与全局统计。",
    "sourceTags": [
      "AtCoder"
    ],
    "reuseNote": "复用现有 abc380_e；保留原 ID 和 1800 估值，增加专题、要求和核实证据。",
    "routeStage": 1,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "cf2020d",
    "url": "https://codeforces.com/problemset/problem/2020/D",
    "title": "Connect the Dots",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 976 (Div. 2) and Divide By Zero 9.0 — D",
    "originalContest": "Codeforces Round 976 (Div. 2) and Divide By Zero 9.0 — D",
    "year": 2024,
    "estimate": 1900,
    "topics": [
      "并查集"
    ],
    "subtopics": [
      "离线连通性"
    ],
    "requirements": [
      "dsu",
      "offline-connectivity",
      "small-step-enumeration",
      "difference-array"
    ],
    "reason": "关键在于限制重复处理的总量，把批量操作转成可逐一扫描的连通信息。",
    "sourceTags": [
      "Codeforces"
    ],
    "reuseNote": "复用现有 cf2020d；使用站内原 ID，避免新建 cf2020_d 重复项。",
    "routeStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc328_f",
    "url": "https://atcoder.jp/contests/abc328/tasks/abc328_f",
    "title": "Good Set Query",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 328 · F",
    "originalContest": "AtCoder Beginner Contest 328 — F",
    "year": 2023,
    "estimate": 2000,
    "topics": [
      "并查集"
    ],
    "subtopics": [
      "带权或扩展并查集"
    ],
    "requirements": [
      "dsu",
      "weighted-dsu",
      "potential-differences",
      "int64"
    ],
    "reason": "需要让合并方向、代表元和关系信息始终一致，并区分两类约束检查。",
    "sourceTags": [
      "AtCoder"
    ],
    "routeStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc314_f",
    "url": "https://atcoder.jp/contests/abc314/tasks/abc314_f",
    "title": "A Certain Game",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 314 · F",
    "originalContest": "AtCoder Beginner Contest 314 — F",
    "year": 2023,
    "estimate": 2200,
    "topics": [
      "并查集"
    ],
    "subtopics": [
      "并查集状态维护",
      "合并历史与树上统计"
    ],
    "requirements": [
      "dsu",
      "merge-history-tree",
      "linearity-of-expectation",
      "modular-inverse",
      "tree-traversal"
    ],
    "reason": "需要保留合并过程中形成的信息，再把逐成员更新变成统一统计。",
    "sourceTags": [
      "AtCoder"
    ],
    "reuseNote": "复用现有 abc314_f。已有组合/期望相关标签可合并保留；本文件仅补并查集训练元数据。",
    "routeStage": 3,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "cf1985h2",
    "url": "https://codeforces.com/problemset/problem/1985/H2",
    "title": "Maximize the Largest Component (Hard Version)",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 952 (Div. 4) — H2",
    "originalContest": "Codeforces Round 952 (Div. 4) — H2",
    "year": 2024,
    "estimate": 2300,
    "topics": [
      "并查集"
    ],
    "subtopics": [
      "并查集状态维护"
    ],
    "requirements": [
      "dsu-or-component-labeling",
      "component-bounding-box",
      "2d-difference",
      "two-set-inclusion-exclusion"
    ],
    "reason": "难点是证明各连通块影响的范围，并让大量候选之间的重复贡献只计算一次。",
    "sourceTags": [
      "Codeforces"
    ],
    "reuseNote": "复用现有 cf1985h2。可与已有容斥题单去重合并；不是新增一份重复题。",
    "routeStage": 3,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc352_e",
    "url": "https://atcoder.jp/contests/abc352/tasks/abc352_e",
    "title": "Clique Connect",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 352 · E",
    "originalContest": "AtCoder Beginner Contest 352 — E",
    "year": 2024,
    "estimate": 1900,
    "topics": [
      "最小生成树"
    ],
    "subtopics": [
      "Kruskal",
      "MST性质与交换",
      "隐式图MST"
    ],
    "requirements": [
      "kruskal",
      "dsu",
      "equal-weight-clique-sparsification",
      "threshold-connectivity",
      "int64"
    ],
    "reason": "需要证明减少候选边后仍保留最优性，再安排合适的处理顺序。",
    "sourceTags": [
      "AtCoder"
    ],
    "routeStage": 1,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc282_e",
    "url": "https://atcoder.jp/contests/abc282/tasks/abc282_e",
    "title": "Choose Two and Eat One",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 282 · E",
    "originalContest": "AtCoder Beginner Contest 282 — E",
    "year": 2022,
    "estimate": 2000,
    "topics": [
      "最小生成树"
    ],
    "subtopics": [
      "Prim",
      "隐式图MST",
      "MST性质与交换"
    ],
    "requirements": [
      "dense-prim",
      "implicit-complete-graph",
      "maximum-spanning-tree",
      "modular-exponentiation",
      "tree-leaf-elimination"
    ],
    "reason": "最大生成树题：训练操作与树的双向对应，以及隐式稠密图的实现选择。",
    "sourceTags": [
      "AtCoder"
    ],
    "routeStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "qoj9414",
    "url": "https://qoj.ac/problem/9414",
    "title": "Colorful Spanning Tree",
    "platform": "QOJ",
    "origin": "CCPC",
    "contest": "The 2024 CCPC Shandong Invitational Contest and Provincial Collegiate Programming Contest — J",
    "originalContest": "The 2024 CCPC Shandong Invitational Contest and Provincial Collegiate Programming Contest — J",
    "year": 2024,
    "estimate": 2300,
    "topics": [
      "最小生成树"
    ],
    "subtopics": [
      "Prim",
      "隐式图MST",
      "MST性质与交换"
    ],
    "requirements": [
      "dense-prim",
      "implicit-complete-graph",
      "identical-vertex-compression",
      "mst-exchange-proof",
      "int64"
    ],
    "reason": "图的显式规模极大，重点是证明重复结构如何缩小模型，而后处理稠密关系。",
    "sourceTags": [
      "CCPC"
    ],
    "routeStage": 3,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc383_e",
    "url": "https://atcoder.jp/contests/abc383/tasks/abc383_e",
    "title": "Sum of Max Matching",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 383 · E",
    "originalContest": "Daiwa Securities Co. Ltd. Programming Contest 2024 (AtCoder Beginner Contest 383) — E",
    "year": 2024,
    "estimate": 2200,
    "topics": [
      "最小生成树",
      "并查集"
    ],
    "subtopics": [
      "Kruskal",
      "MST性质与交换",
      "并查集状态维护"
    ],
    "requirements": [
      "kruskal",
      "dsu",
      "threshold-connectivity",
      "bottleneck-path",
      "component-counts",
      "greedy-matching"
    ],
    "reason": "需要解释按代价逐层合并时为何可以立即完成局部配对，再维护剩余信息。",
    "sourceTags": [
      "AtCoder"
    ],
    "reuseNote": "复用现有 abc383_e；同一记录同时覆盖 MST 与 DSU，路线各自引用而不复制题目。",
    "routeStage": 3,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "qoj6560",
    "url": "https://qoj.ac/problem/6560",
    "title": "Broken Minimum Spanning Tree",
    "platform": "QOJ",
    "origin": "ICPC",
    "contest": "2023 ICPC North America Championship — C",
    "originalContest": "2023 ICPC North America Championship — C",
    "year": 2023,
    "estimate": 2500,
    "topics": [
      "最小生成树"
    ],
    "subtopics": [
      "Kruskal",
      "MST性质与交换",
      "生成树变换"
    ],
    "requirements": [
      "kruskal",
      "dsu",
      "lexicographic-edge-priority",
      "tree-cycle-exchange",
      "constructive-output"
    ],
    "reason": "同时要求优化目标与最少修改，并输出每一步都保持合法的变换过程，证明负担较高。",
    "sourceTags": [
      "ICPC",
      "Universal Cup"
    ],
    "routeStage": 3,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc302_f",
    "url": "https://atcoder.jp/contests/abc302/tasks/abc302_f",
    "title": "Merge Set",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 302 · F",
    "originalContest": "TOYOTA MOTOR CORPORATION Programming Contest 2023#2 (AtCoder Beginner Contest 302)",
    "year": 2023,
    "estimate": 1700,
    "topics": [
      "优化建图",
      "图论与建模",
      "图论建模"
    ],
    "subtopics": [
      "辅助节点与压缩建图"
    ],
    "requirements": [
      "BFS",
      "bipartite incidence graph",
      "auxiliary vertices",
      "operation-to-path equivalence"
    ],
    "reason": "辅助节点主线起点，训练如何保留操作次数并避免枚举所有集合间关系。",
    "sourceTags": [
      "AtCoder"
    ],
    "routeStage": 1,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "辅助节点与压缩建图"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "graph-modeling.md",
        "section": 2
      }
    ]
  },
  {
    "id": "abc237_e",
    "url": "https://atcoder.jp/contests/abc237/tasks/abc237_e",
    "title": "Skiing",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 237 · E",
    "originalContest": "AtCoder Beginner Contest 237",
    "year": 2022,
    "estimate": 2000,
    "topics": [
      "最短路拓展",
      "优化建图",
      "图论与建模",
      "最短路",
      "图论建模"
    ],
    "subtopics": [
      "代价与图模型转换",
      "Dijkstra拓展"
    ],
    "requirements": [
      "Dijkstra",
      "potential reweighting",
      "telescoping path cost",
      "non-negative edge weights"
    ],
    "reason": "从含正负收益的过程重建代价，训练何时能恢复永久化的适用条件。",
    "sourceTags": [
      "AtCoder"
    ],
    "routeStage": 1,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "代价与图模型转换",
      "Dijkstra拓展"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "dijkstra-and-shortest-path-trees.md",
        "section": 7
      }
    ]
  },
  {
    "id": "cf1486e",
    "url": "https://codeforces.com/problemset/problem/1486/E",
    "title": "Paired Payment",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 703 (Div. 2) · E",
    "originalContest": "Codeforces Round 703 (Div. 2)",
    "year": 2021,
    "estimate": 2100,
    "topics": [
      "优化建图",
      "最短路拓展",
      "图论与建模",
      "最短路",
      "图论建模"
    ],
    "subtopics": [
      "状态扩展建图",
      "辅助节点与压缩建图",
      "Dijkstra拓展"
    ],
    "requirements": [
      "Dijkstra",
      "state expansion",
      "pending edge weight",
      "bounded weight domain",
      "implicit transitions"
    ],
    "reason": "训练保留足够历史信息的状态定义，并分析扩展图的真实规模。",
    "sourceTags": [
      "Codeforces"
    ],
    "routeStage": 1,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "状态扩展建图",
      "辅助节点与压缩建图",
      "Dijkstra拓展"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "dijkstra-and-shortest-path-trees.md",
        "section": 3
      }
    ]
  },
  {
    "id": "qoj20402",
    "url": "https://qoj.ac/problem/20402",
    "title": "Floor is Lava",
    "platform": "QOJ",
    "origin": "CCC",
    "contest": "Canadian Computing Competition 2025 Senior · S4",
    "originalContest": "2025 Canadian Computing Competition Senior",
    "year": 2025,
    "estimate": 2300,
    "topics": [
      "优化建图",
      "最短路拓展",
      "图论与建模"
    ],
    "subtopics": [
      "状态扩展建图",
      "辅助节点与压缩建图",
      "代价与图模型转换",
      "Dijkstra拓展"
    ],
    "requirements": [
      "Dijkstra",
      "line graph states",
      "sorted adjacency chains",
      "absolute-difference metric",
      "graph compression equivalence"
    ],
    "reason": "用户指定题：适合集中检查状态选择、压缩后路径等价性与规模证明。",
    "sourceTags": [
      "CCC",
      "国外 OI"
    ],
    "routeStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc204_e",
    "url": "https://atcoder.jp/contests/abc204/tasks/abc204_e",
    "title": "Rush Hour 2",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 204 · E",
    "originalContest": "AtCoder Beginner Contest 204",
    "year": 2021,
    "estimate": 2400,
    "topics": [
      "最短路拓展",
      "图论与建模"
    ],
    "subtopics": [
      "Dijkstra拓展",
      "时间或反向最短路"
    ],
    "requirements": [
      "time-dependent Dijkstra",
      "waiting dominance",
      "FIFO arrival envelope",
      "integer floor optimization",
      "integer square root"
    ],
    "reason": "训练带等待的时间依赖转移，并证明单个最早到达标签为何仍然足够。",
    "sourceTags": [
      "AtCoder"
    ],
    "routeStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc342_e",
    "url": "https://atcoder.jp/contests/abc342/tasks/abc342_e",
    "title": "Last Train",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 342 · E",
    "originalContest": "HUAWEI Programming Contest 2024 (AtCoder Beginner Contest 342)",
    "year": 2024,
    "estimate": 2200,
    "topics": [
      "最短路拓展",
      "图论与建模"
    ],
    "subtopics": [
      "Dijkstra拓展",
      "时间或反向最短路"
    ],
    "requirements": [
      "reverse-time Dijkstra",
      "max-priority label setting",
      "arithmetic train schedule",
      "64-bit arithmetic"
    ],
    "reason": "将永久化拓展到最晚出发时间，检查方向转换与时刻取整的正确性。",
    "sourceTags": [
      "AtCoder"
    ],
    "routeStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc324_f",
    "url": "https://atcoder.jp/contests/abc324/tasks/abc324_f",
    "title": "Beautiful Path",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 324 · F",
    "originalContest": "Japan Registry Services Programming Contest 2023 (AtCoder Beginner Contest 324)",
    "year": 2023,
    "estimate": 2100,
    "topics": [
      "最短路拓展",
      "图论与建模",
      "优化建图"
    ],
    "subtopics": [
      "代价与图模型转换"
    ],
    "requirements": [
      "parametric binary search",
      "ratio-to-additive cost transformation",
      "DAG DP",
      "negative edge weights",
      "floating-point precision"
    ],
    "reason": "把路径整体目标改成局部可加量，比较图上 DP 与不同最短路算法的边界。",
    "sourceTags": [
      "AtCoder"
    ],
    "routeStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc264_g",
    "url": "https://atcoder.jp/contests/abc264/tasks/abc264_g",
    "title": "String Fair",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 264 · G",
    "originalContest": "freee Programming Contest 2022 (AtCoder Beginner Contest 264)",
    "year": 2022,
    "estimate": 2500,
    "topics": [
      "优化建图",
      "最短路拓展",
      "图论与建模"
    ],
    "subtopics": [
      "状态扩展建图",
      "代价与图模型转换",
      "Bellman–Ford与负环"
    ],
    "requirements": [
      "Bellman-Ford",
      "reachable negative cycle detection",
      "finite-state graph",
      "bounded substring memory",
      "non-empty walk boundary"
    ],
    "reason": "从局部字符串评分建立有限图，训练状态充分性、无界性判断和边界处理。",
    "sourceTags": [
      "AtCoder"
    ],
    "routeStage": 3,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "arc173_d",
    "url": "https://atcoder.jp/contests/arc173/tasks/arc173_d",
    "title": "Bracket Walk",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "AtCoder Regular Contest 173 · D",
    "originalContest": "AtCoder Regular Contest 173",
    "year": 2024,
    "estimate": 2800,
    "topics": [
      "最短路拓展",
      "图论与建模",
      "优化建图"
    ],
    "subtopics": [
      "代价与图模型转换",
      "Bellman–Ford与负环"
    ],
    "requirements": [
      "Bellman-Ford",
      "positive and negative cycle detection",
      "strong connectivity",
      "Eulerian closed walks",
      "cycle decomposition",
      "balanced-bracket cyclic shift"
    ],
    "reason": "证明型提高题，把全局闭游走限制与环的符号结构联系起来。",
    "sourceTags": [
      "AtCoder"
    ],
    "routeStage": 3,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc359_e",
    "url": "https://atcoder.jp/contests/abc359/tasks/abc359_e",
    "title": "Water Tank",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 359 · E",
    "originalContest": "UNIQUE VISION Programming Contest 2024 Summer (AtCoder Beginner Contest 359)",
    "year": 2024,
    "estimate": 1900,
    "topics": [
      "笛卡尔树与单调栈",
      "区间结构"
    ],
    "subtopics": [
      "单调栈维护聚合信息"
    ],
    "requirements": [
      "monotonic stack",
      "aggregate blocks",
      "amortized analysis",
      "simulation invariant"
    ],
    "reason": "现有题作为起点：从过程性质推出需要维护的信息，再理解整块合并为何足够。",
    "sourceTags": [
      "AtCoder"
    ],
    "routeStage": 1,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "单调栈维护聚合信息"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "cartesian-tree-and-monotonic-stack.md",
        "section": 7
      }
    ]
  },
  {
    "id": "cf1748e",
    "url": "https://codeforces.com/problemset/problem/1748/E",
    "title": "Yet Another Array Counting Problem",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 833 (Div. 2) · E",
    "originalContest": "Codeforces Round 833 (Div. 2)",
    "year": 2022,
    "estimate": 2200,
    "topics": [
      "笛卡尔树与单调栈"
    ],
    "subtopics": [
      "笛卡尔树结构",
      "笛卡尔树上的 DP"
    ],
    "requirements": [
      "Cartesian tree",
      "stable tie breaking",
      "tree DP",
      "prefix sums",
      "monotonic stack"
    ],
    "reason": "训练区间比较条件与整棵树结构的对应，并处理相等元素带来的严格性差别。",
    "sourceTags": [
      "Codeforces"
    ],
    "routeStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "笛卡尔树结构",
      "笛卡尔树上的 DP"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "cartesian-tree-and-monotonic-stack.md",
        "section": 9
      }
    ]
  },
  {
    "id": "cf1913d",
    "url": "https://codeforces.com/problemset/problem/1913/D",
    "title": "Array Collapse",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Educational Codeforces Round 160 · D",
    "originalContest": "Educational Codeforces Round 160 (Rated for Div. 2)",
    "year": 2023,
    "estimate": 2300,
    "topics": [
      "笛卡尔树与单调栈"
    ],
    "subtopics": [
      "单调栈优化 DP",
      "笛卡尔树结构",
      "笛卡尔树上的 DP"
    ],
    "requirements": [
      "monotonic stack",
      "prefix sums",
      "Cartesian tree",
      "boundary-state tree DP",
      "distinct outcome counting"
    ],
    "reason": "训练操作可达性与计数去重，也可比较同一问题的两种状态组织方式。",
    "sourceTags": [
      "Codeforces"
    ],
    "routeStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "单调栈优化 DP",
      "笛卡尔树结构",
      "笛卡尔树上的 DP"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "cartesian-tree-and-monotonic-stack.md",
        "section": 8
      }
    ]
  },
  {
    "id": "cf2048f",
    "url": "https://codeforces.com/problemset/problem/2048/F",
    "title": "Kevin and Math Class",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Global Round 28 · F",
    "originalContest": "Codeforces Global Round 28",
    "year": 2024,
    "estimate": 2600,
    "topics": [
      "笛卡尔树与单调栈"
    ],
    "subtopics": [
      "笛卡尔树结构",
      "笛卡尔树上的 DP"
    ],
    "requirements": [
      "Cartesian tree",
      "tree DP",
      "monotone min-max merge",
      "two pointers",
      "integer ceiling division"
    ],
    "reason": "提高题：证明操作范围可以规范化，并用状态单调性降低合并成本。",
    "sourceTags": [
      "Codeforces"
    ],
    "routeStage": 3,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "cf1986f",
    "url": "https://codeforces.com/problemset/problem/1986/F",
    "title": "Non-academic Problem",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 954 (Div. 3) · F",
    "originalContest": "Codeforces Round 954 (Div. 3)",
    "year": 2024,
    "estimate": 1800,
    "topics": [
      "DFS拓展",
      "图论与建模",
      "DFS 及其应用",
      "图论建模",
      "Tarjan"
    ],
    "subtopics": [
      "DFS 树与返祖边",
      "桥与割点"
    ],
    "requirements": [
      "undirected DFS tree",
      "low-link bridges",
      "subtree sizes",
      "back-edge coverage",
      "64-bit pair counting"
    ],
    "reason": "桥的应用起点：把删边造成的连通性变化和全局目标联系起来。",
    "sourceTags": [
      "Codeforces"
    ],
    "routeStage": 1,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "DFS 树与返祖边",
      "桥与割点"
    ],
    "tarjanSubtopics": [
      "割边"
    ],
    "tarjanStage": 1,
    "tarjanVerifiedAt": "2026-10-19",
    "tarjanEvidence": [
      "https://codeforces.com/problemset/problem/1986/F"
    ],
    "tarjan": true,
    "notesPractice": true,
    "notesSections": [
      {
        "file": "dfs-tarjan-and-block-cut-trees.md",
        "section": 3
      }
    ]
  },
  {
    "id": "abc334_g",
    "url": "https://atcoder.jp/contests/abc334/tasks/abc334_g",
    "title": "Christmas Color Grid 2",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 334 · G",
    "originalContest": "UNIQUE VISION Programming Contest 2023 Christmas (AtCoder Beginner Contest 334)",
    "year": 2023,
    "estimate": 2200,
    "topics": [
      "DFS拓展",
      "图论与建模",
      "DFS 及其应用",
      "图论建模",
      "Tarjan",
      "数学期望"
    ],
    "subtopics": [
      "DFS 树与返祖边",
      "桥与割点"
    ],
    "requirements": [
      "low-link articulation points",
      "DFS forest",
      "component counting after vertex deletion",
      "modular inverse"
    ],
    "reason": "从判定割点推进到量化删点影响，特别练习根节点和多个连通分量的边界。",
    "sourceTags": [
      "AtCoder"
    ],
    "routeStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "DFS 树与返祖边",
      "桥与割点"
    ],
    "tarjanSubtopics": [
      "割点"
    ],
    "tarjanStage": 1,
    "tarjanVerifiedAt": "2026-10-19",
    "tarjanEvidence": [
      "https://atcoder.jp/contests/abc334/tasks/abc334_g",
      "https://atcoder.jp/contests/abc334/editorial/8988"
    ],
    "tarjan": true,
    "notesPractice": true,
    "notesSections": [
      {
        "file": "dfs-tarjan-and-block-cut-trees.md",
        "section": 7
      }
    ]
  },
  {
    "id": "cf1364d",
    "url": "https://codeforces.com/problemset/problem/1364/D",
    "title": "Ehab's Last Corollary",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 649 (Div. 2) · D",
    "originalContest": "Codeforces Round 649 (Div. 2)",
    "year": 2020,
    "estimate": 2200,
    "topics": [
      "DFS拓展"
    ],
    "subtopics": [
      "DFS 树与返祖边",
      "DFS 树上的构造"
    ],
    "requirements": [
      "undirected DFS tree",
      "ancestor back edges",
      "chordless cycle construction",
      "independent set",
      "constructive proof"
    ],
    "reason": "训练从 DFS 树的结构性质推出必然存在的构造，而不是把 DFS 仅当作遍历工具。",
    "sourceTags": [
      "Codeforces"
    ],
    "routeStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "qoj6414",
    "url": "https://qoj.ac/problem/6414",
    "title": "Classical Maximization Problem",
    "platform": "QOJ",
    "origin": "Petrozavodsk Camp",
    "contest": "Petrozavodsk Winter 2023 · Day 7 · H",
    "originalContest": "44th Petrozavodsk Programming Camp, Winter 2023 · Day 7: Gennady Korotkevich Contest 7",
    "year": 2023,
    "estimate": 2300,
    "topics": [
      "DFS拓展",
      "图论与建模",
      "优化建图"
    ],
    "subtopics": [
      "DFS 树与返祖边",
      "DFS 树上的构造",
      "代价与图模型转换"
    ],
    "requirements": [
      "bipartite incidence graph",
      "coordinate compression",
      "undirected DFS tree",
      "no cross edges",
      "edge pairing",
      "parity invariant"
    ],
    "reason": "近期 Camp 构造题：同时训练对象转换、局部剩余状态以及最优性证明。",
    "sourceTags": [
      "Petrozavodsk Camp",
      "Universal Cup"
    ],
    "reuseNote": "原题2023-02-07；后来用于 The 1st Universal Cup, Stage 16: Gomel（2023年5月）。QOJ6414页面列出两次使用记录，category/142明确列出Camp Day7；后来的UCup日期不当原始年份。",
    "routeStage": 3,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "cses3211",
    "url": "https://cses.fi/problemset/task/3211",
    "title": "Number of Subset Xors",
    "platform": "CSES",
    "origin": "CSES",
    "contest": "CSES Problem Set · Bitwise Operations",
    "year": null,
    "estimate": 1400,
    "topics": [
      "线性基"
    ],
    "subtopics": [
      "XOR与可表示性",
      "线性基插入与秩"
    ],
    "requirements": [
      "xor-linear-basis"
    ],
    "reason": "从 0 起步的基础练习：先建立异或可表示性与秩的概念。",
    "basisStage": 1,
    "routeStage": 1,
    "foundation": true,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "XOR与可表示性",
      "线性基插入与秩"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "xor-basis.md",
        "section": 1
      }
    ]
  },
  {
    "id": "cses3191",
    "url": "https://cses.fi/problemset/task/3191",
    "title": "Maximum Xor Subset",
    "platform": "CSES",
    "origin": "CSES",
    "contest": "CSES Problem Set · Bitwise Operations",
    "year": null,
    "estimate": 1500,
    "topics": [
      "线性基"
    ],
    "subtopics": [
      "线性基插入与秩",
      "最大子集异或"
    ],
    "requirements": [
      "xor-linear-basis"
    ],
    "reason": "基础练习：在正确插入的基础上，训练查询过程的不变量。",
    "basisStage": 2,
    "routeStage": 2,
    "foundation": true,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc236_f",
    "url": "https://atcoder.jp/contests/abc236/tasks/abc236_f",
    "title": "Spices",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 236 · F",
    "year": 2022,
    "estimate": 2100,
    "topics": [
      "线性基"
    ],
    "subtopics": [
      "XOR与可表示性",
      "线性基建模"
    ],
    "requirements": [
      "xor-linear-basis"
    ],
    "reason": "第一道建模题：将可表示性的要求与选择代价联系起来。",
    "basisStage": 3,
    "routeStage": 3,
    "foundation": false,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc283_g",
    "url": "https://atcoder.jp/contests/abc283/tasks/abc283_g",
    "title": "Partial Xor Enumeration",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 283 · G",
    "year": 2022,
    "estimate": 2300,
    "topics": [
      "线性基"
    ],
    "subtopics": [
      "线性基插入与秩",
      "有序异或枚举"
    ],
    "requirements": [
      "xor-linear-basis"
    ],
    "reason": "表示与顺序的提高题：检查同一空间的不同基会如何影响查询。",
    "basisStage": 4,
    "routeStage": 4,
    "foundation": false,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "线性基插入与秩",
      "有序异或枚举"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "xor-basis.md",
        "section": 2
      }
    ]
  },
  {
    "id": "abc223_h",
    "url": "https://atcoder.jp/contests/abc223/tasks/abc223_h",
    "title": "Xor Query",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 223 · H",
    "year": 2021,
    "estimate": 2500,
    "topics": [
      "线性基"
    ],
    "subtopics": [
      "XOR与可表示性",
      "区间与前缀查询"
    ],
    "requirements": [
      "xor-linear-basis"
    ],
    "reason": "区间查询提高题，安排在线性基基本操作与表示性质掌握之后。",
    "basisStage": 5,
    "routeStage": 5,
    "foundation": false,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc301_d",
    "url": "https://atcoder.jp/contests/abc301/tasks/abc301_d",
    "title": "Bitmask",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 301 · D",
    "year": 2023,
    "estimate": 1600,
    "topics": [
      "01 Trie与二进制"
    ],
    "subtopics": [
      "按位贪心与二进制建模"
    ],
    "requirements": [
      "binary-comparison"
    ],
    "reason": "二进制主线起点，训练高低位决策与上界之间的关系。",
    "routeStage": 1,
    "foundation": false,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc281_f",
    "url": "https://atcoder.jp/contests/abc281/tasks/abc281_f",
    "title": "Xor Minimization",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC 281 · F",
    "year": 2022,
    "estimate": 2000,
    "topics": [
      "01 Trie与二进制",
      "01 Trie"
    ],
    "subtopics": [
      "Trie分治",
      "按位贪心与二进制建模"
    ],
    "requirements": [
      "binary-comparison",
      "01-trie"
    ],
    "reason": "训练按位划分中的分支选择，避免把局部贪心误用于整体目标。",
    "routeStage": 2,
    "foundation": false,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "Trie分治",
      "按位贪心与二进制建模"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "binary-trie.md",
        "section": 4
      }
    ]
  },
  {
    "id": "cf1658d2",
    "url": "https://codeforces.com/problemset/problem/1658/D2",
    "title": "388535 (Hard Version)",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 779 (Div. 2) · D2",
    "year": 2022,
    "estimate": 2200,
    "topics": [
      "01 Trie与二进制",
      "01 Trie"
    ],
    "subtopics": [
      "01 Trie查询",
      "异或阈值与前缀",
      "按位贪心与二进制建模"
    ],
    "requirements": [
      "binary-comparison",
      "01-trie"
    ],
    "reason": "逆向恢复题，训练如何准确刻画候选值的验证条件。",
    "routeStage": 3,
    "foundation": false,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "01 Trie查询",
      "异或阈值与前缀",
      "按位贪心与二进制建模"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "binary-trie.md",
        "section": 2
      }
    ]
  },
  {
    "id": "cf1416c",
    "url": "https://codeforces.com/problemset/problem/1416/C",
    "title": "XOR Inverse",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 673 (Div. 1) · C",
    "year": 2020,
    "estimate": 2200,
    "topics": [
      "01 Trie与二进制",
      "01 Trie"
    ],
    "subtopics": [
      "Trie分治",
      "按位贪心与二进制建模"
    ],
    "requirements": [
      "binary-comparison",
      "01-trie"
    ],
    "reason": "训练全局异或操作下的比较结构与贡献归类。",
    "routeStage": 3,
    "foundation": false,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12",
    "collection": "algorithms-2026-10",
    "algorithm": true,
    "algorithmSubtopics": [
      "Trie分治",
      "按位贪心与二进制建模"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "binary-trie.md",
        "section": 3
      }
    ]
  },
  {
    "id": "cf1720d2",
    "url": "https://codeforces.com/problemset/problem/1720/D2",
    "title": "Xor-Subsequence (hard version)",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 815 (Div. 2) · D2",
    "year": 2022,
    "estimate": 2500,
    "topics": [
      "01 Trie与二进制"
    ],
    "subtopics": [
      "01 Trie查询",
      "异或阈值与前缀"
    ],
    "requirements": [
      "binary-comparison",
      "01-trie"
    ],
    "reason": "提高题：为二进制查询维护额外状态，连接到 DP 转移。",
    "routeStage": 4,
    "foundation": false,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc276_f",
    "title": "Double Chance",
    "estimate": 2100,
    "year": 2022,
    "url": "https://atcoder.jp/contests/abc276/tasks/abc276_f",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC276 · F",
    "originalContest": "ABC276 · F",
    "topics": [
      "数学期望",
      "动态规划"
    ],
    "requirements": [
      "expectation",
      "fenwick-tree",
      "counting"
    ],
    "reason": "期望最大值的计数需要与动态前缀统计配合，而不只是枚举取值。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/abc276/tasks/abc276_f"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "expected-value.md",
        "section": 3
      }
    ]
  },
  {
    "id": "abc360_e",
    "title": "Random Swaps of Balls",
    "platform": "AtCoder",
    "contest": "ABC 360 · E",
    "year": 2024,
    "estimate": 1800,
    "topics": [
      "组合数学",
      "数学期望"
    ],
    "url": "https://atcoder.jp/contests/abc360/tasks/abc360_e",
    "origin": "AtCoder",
    "classic": false,
    "requirements": [],
    "verifiedAt": "2026-10-12",
    "uncertainty": 200,
    "notesPractice": true,
    "notesSections": [
      {
        "file": "expected-value.md",
        "section": 4
      }
    ]
  },
  {
    "id": "abc300_e",
    "title": "Dice Product 3",
    "estimate": 1900,
    "year": 2023,
    "url": "https://atcoder.jp/contests/abc300/tasks/abc300_e",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC300 · E",
    "originalContest": "ABC300 · E",
    "topics": [
      "数学期望",
      "动态规划"
    ],
    "requirements": [
      "probability-dp",
      "self-loop",
      "modular-inverse"
    ],
    "reason": "从第一步概率递推识别自环，处理稀疏数值状态和模意义下的概率。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/abc300/tasks/abc300_e"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "expected-value.md",
        "section": 5
      }
    ]
  },
  {
    "id": "abc323_e",
    "title": "Playlist",
    "estimate": 1900,
    "year": 2023,
    "url": "https://atcoder.jp/contests/abc323/tasks/abc323_e",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC323 · E",
    "originalContest": "ABC323 · E",
    "topics": [
      "数学期望",
      "动态规划"
    ],
    "requirements": [
      "probability-dp",
      "forward-dp"
    ],
    "reason": "区分事件时刻与观察时刻，以概率质量向前传播描述随机过程。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/abc323/tasks/abc323_e"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "expected-value.md",
        "section": 7
      }
    ]
  },
  {
    "id": "abc350_e",
    "title": "Toward 0",
    "estimate": 2000,
    "year": 2024,
    "url": "https://atcoder.jp/contests/abc350/tasks/abc350_e",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC350 · E",
    "originalContest": "ABC350 · E",
    "topics": [
      "数学期望",
      "动态规划"
    ],
    "requirements": [
      "expectation-dp",
      "self-loop",
      "memoization"
    ],
    "reason": "在随机转移与可选动作之间区分期望和最小化，协调自环与记忆化状态。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/abc350/tasks/abc350_e"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "expected-value.md",
        "section": 8
      }
    ]
  },
  {
    "id": "abc234_g",
    "title": "Divide a Sequence",
    "estimate": 2300,
    "year": 2022,
    "url": "https://atcoder.jp/contests/abc234/tasks/abc234_g",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC234 · G",
    "originalContest": "ABC234 · G",
    "topics": [
      "笛卡尔树与单调栈",
      "动态规划"
    ],
    "requirements": [
      "monotonic-stack",
      "weighted-dp",
      "prefix-sum"
    ],
    "reason": "将区间极值的变化组织为可合并的 DP 贡献，重点在组内信息为何足够。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/abc234/tasks/abc234_g"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "cartesian-tree-and-monotonic-stack.md",
        "section": 8
      }
    ]
  },
  {
    "id": "cf1473e",
    "title": "Minimum Path",
    "estimate": 2300,
    "year": 2021,
    "url": "https://codeforces.com/problemset/problem/1473/E",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Educational Codeforces Round 102 · E",
    "originalContest": "Educational Codeforces Round 102 · E",
    "topics": [
      "最短路",
      "优化建图"
    ],
    "requirements": [
      "dijkstra",
      "state-graph"
    ],
    "reason": "把整条路线的特殊计费规则整理成有限状态，并验证局部转移保留全局目标。",
    "sourceTags": [
      "Codeforces"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://codeforces.com/problemset/problem/1473/E"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "dijkstra-and-shortest-path-trees.md",
        "section": 3
      }
    ]
  },
  {
    "id": "cf786b",
    "title": "Legacy",
    "estimate": 2300,
    "year": 2017,
    "url": "https://codeforces.com/problemset/problem/786/B",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 406 (Div. 1) · B",
    "originalContest": "Codeforces Round 406 (Div. 1) · B",
    "topics": [
      "优化建图",
      "最短路"
    ],
    "requirements": [
      "segment-tree-graph",
      "dijkstra"
    ],
    "reason": "保留这道较早的代表题，用于核对点到区间和区间到点的方向及辅助路线合法性。",
    "sourceTags": [
      "Codeforces"
    ],
    "classic": true,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://codeforces.com/problemset/problem/786/B"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "dijkstra-and-shortest-path-trees.md",
        "section": 4
      },
      {
        "file": "graph-modeling.md",
        "section": 9
      }
    ]
  },
  {
    "id": "abc252_e",
    "title": "Road Reduction",
    "estimate": 1800,
    "year": 2022,
    "url": "https://atcoder.jp/contests/abc252/tasks/abc252_e",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC252 · E",
    "originalContest": "ABC252 · E",
    "topics": [
      "最短路"
    ],
    "requirements": [
      "dijkstra",
      "shortest-path-tree"
    ],
    "reason": "由逐点最短距离解释选树的整体目标，并输出一致的原边集合。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/abc252/tasks/abc252_e"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "dijkstra-and-shortest-path-trees.md",
        "section": 6
      }
    ]
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
    "topics": [
      "Tarjan"
    ],
    "subtopics": [
      "边双连通分量",
      "强连通定向",
      "最优构造"
    ],
    "tarjanSubtopics": [
      "割边",
      "边双连通分量"
    ],
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
    "classic": true,
    "collection": "tarjan-2026-10",
    "verifiedAt": "2026-10-19",
    "uncertainty": 200,
    "tarjan": true,
    "notesPractice": true,
    "notesSections": [
      {
        "file": "dfs-tarjan-and-block-cut-trees.md",
        "section": 3
      }
    ]
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
    "topics": [
      "Tarjan"
    ],
    "subtopics": [
      "边双连通分量",
      "桥树",
      "路径存在性"
    ],
    "tarjanSubtopics": [
      "割边",
      "边双连通分量"
    ],
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
    "classic": true,
    "collection": "tarjan-2026-10",
    "verifiedAt": "2026-10-19",
    "uncertainty": 200,
    "tarjan": true,
    "notesPractice": true,
    "notesSections": [
      {
        "file": "dfs-tarjan-and-block-cut-trees.md",
        "section": 4
      }
    ]
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
    "topics": [
      "Tarjan"
    ],
    "subtopics": [
      "点双连通分量",
      "圆方树",
      "简单路径存在性"
    ],
    "tarjanSubtopics": [
      "点双连通分量（圆方树）"
    ],
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
    "classic": false,
    "collection": "tarjan-2026-10",
    "verifiedAt": "2026-10-19",
    "uncertainty": 200,
    "tarjan": true,
    "notesPractice": true,
    "notesSections": [
      {
        "file": "dfs-tarjan-and-block-cut-trees.md",
        "section": 6
      }
    ]
  },
  {
    "id": "abc245_f",
    "title": "Endless Walk",
    "estimate": 1800,
    "year": 2022,
    "url": "https://atcoder.jp/contests/abc245/tasks/abc245_f",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC245 · F",
    "originalContest": "ABC245 · F",
    "topics": [
      "Tarjan",
      "DFS 及其应用"
    ],
    "requirements": [
      "scc",
      "dag-reachability"
    ],
    "reason": "把能够无限行走的条件与有向环及其前驱结构联系起来，检验 SCC 缩点后的信息。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/abc245/tasks/abc245_f"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "dfs-tarjan-and-block-cut-trees.md",
        "section": 9
      }
    ]
  },
  {
    "id": "abc284_f",
    "title": "ABCBAC",
    "estimate": 2000,
    "year": 2023,
    "url": "https://atcoder.jp/contests/abc284/tasks/abc284_f",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC284 · F",
    "originalContest": "ABC284 · F",
    "topics": [
      "字符串哈希"
    ],
    "requirements": [
      "rolling-hash",
      "string-indexing"
    ],
    "reason": "在原串与反串之间准确对齐子串，练习区间指纹、拼接与最终核实。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/abc284/tasks/abc284_f"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "randomness-and-string-hashing.md",
        "section": 3
      }
    ]
  },
  {
    "id": "abc331_f",
    "title": "Palindrome Query",
    "estimate": 2100,
    "year": 2023,
    "url": "https://atcoder.jp/contests/abc331/tasks/abc331_f",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC331 · F",
    "originalContest": "ABC331 · F",
    "topics": [
      "字符串哈希",
      "区间结构"
    ],
    "requirements": [
      "rolling-hash",
      "segment-tree"
    ],
    "reason": "将正反方向的字符串指纹放入可修改的区间结构，保持长度与拼接顺序。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/abc331/tasks/abc331_f"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "randomness-and-string-hashing.md",
        "section": 6
      }
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
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "graph-modeling.md",
        "section": 3
      }
    ]
  },
  {
    "id": "abc277_e",
    "title": "Crystal Switches",
    "estimate": 1900,
    "year": 2022,
    "url": "https://atcoder.jp/contests/abc277/tasks/abc277_e",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC277 · E",
    "originalContest": "ABC277 · E",
    "topics": [
      "优化建图",
      "最短路"
    ],
    "requirements": [
      "state-graph",
      "zero-one-bfs"
    ],
    "reason": "识别开关状态中哪些历史可以忘掉，再准确区分移动费用与切换费用。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/abc277/tasks/abc277_e"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "graph-modeling.md",
        "section": 6
      }
    ]
  },
  {
    "id": "cf1422d",
    "title": "Returning Home",
    "estimate": 2200,
    "year": 2020,
    "url": "https://codeforces.com/problemset/problem/1422/D",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 675 (Div. 2) · D",
    "originalContest": "Codeforces Round 675 (Div. 2) · D",
    "topics": [
      "优化建图",
      "最短路"
    ],
    "requirements": [
      "geometric-sparsification",
      "dijkstra"
    ],
    "reason": "从坐标费用中证明大量直接边可以被稀疏路线替代，并处理起终点的不对称。",
    "sourceTags": [
      "Codeforces"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://codeforces.com/problemset/problem/1422/D"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "graph-modeling.md",
        "section": 7
      }
    ]
  },
  {
    "id": "cf920e",
    "title": "Connected Components?",
    "estimate": 2000,
    "year": 2018,
    "url": "https://codeforces.com/problemset/problem/920/E",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Educational Codeforces Round 37 · E",
    "originalContest": "Educational Codeforces Round 37 · E",
    "topics": [
      "优化建图",
      "图论建模"
    ],
    "requirements": [
      "complement-graph",
      "implicit-bfs",
      "amortized-analysis"
    ],
    "reason": "保留这道较早的补图代表题，直接练习成功删除与失败检查的总次数分析。",
    "sourceTags": [
      "Codeforces"
    ],
    "classic": true,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://codeforces.com/problemset/problem/920/E"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "graph-modeling.md",
        "section": 8
      }
    ]
  },
  {
    "id": "cf1895d",
    "title": "XOR Construction",
    "estimate": 1900,
    "year": 2023,
    "url": "https://codeforces.com/problemset/problem/1895/D",
    "platform": "Codeforces",
    "origin": "ICPC",
    "contest": "2023–2024 ICPC NERC Southern and Volga Russian Regional · N / CF 1895D",
    "originalContest": "2023–2024 ICPC NERC Southern and Volga Russian Regional · N / CF 1895D",
    "topics": [
      "01 Trie"
    ],
    "requirements": [
      "xor-prefix",
      "binary-trie"
    ],
    "reason": "用一个首项统一表示整段构造，并把排列条件转成可验证的值域限制。",
    "sourceTags": [
      "Codeforces",
      "ICPC"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://codeforces.com/problemset/problem/1895/D"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "binary-trie.md",
        "section": 4
      }
    ]
  },
  {
    "id": "qoj4579",
    "title": "XOR Pairs",
    "estimate": 1700,
    "year": 2021,
    "url": "https://qoj.ac/problem/4579",
    "platform": "QOJ",
    "origin": "ICPC",
    "contest": "2021 ICPC Asia Jakarta Regional · A",
    "originalContest": "2021 ICPC Asia Jakarta Regional · A",
    "topics": [
      "01 Trie"
    ],
    "requirements": [
      "bit-analysis",
      "counting"
    ],
    "reason": "二进制关系能否先固定结果再计数，练习区分位分析与数据结构需求。",
    "sourceTags": [
      "QOJ",
      "ICPC"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://qoj.ac/problem/4579"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "binary-trie.md",
        "section": 4
      }
    ]
  },
  {
    "id": "abc141_f",
    "title": "Xor Sum 3",
    "estimate": 2000,
    "year": 2019,
    "url": "https://atcoder.jp/contests/abc141/tasks/abc141_f",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC141 · F",
    "originalContest": "ABC141 · F",
    "topics": [
      "线性基"
    ],
    "requirements": [
      "xor-basis",
      "linear-projection"
    ],
    "reason": "从目标函数逐位拆出固定贡献，再检查投影是否保留可达空间。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/abc141/tasks/abc141_f"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "xor-basis.md",
        "section": 5
      }
    ]
  },
  {
    "id": "agc045_a",
    "title": "Xor Battle",
    "estimate": 2200,
    "year": 2020,
    "url": "https://atcoder.jp/contests/agc045/tasks/agc045_a",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "AGC045 · A",
    "originalContest": "AGC045 · A",
    "topics": [
      "线性基"
    ],
    "requirements": [
      "xor-basis",
      "game-dp",
      "reverse-processing"
    ],
    "reason": "倒推博弈中的获胜集合，区分一个选择可行与所有选择都必须可行。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/agc045/tasks/agc045_a"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "xor-basis.md",
        "section": 5
      }
    ]
  },
  {
    "id": "cf1902f",
    "title": "Trees and XOR Queries Again",
    "estimate": 2500,
    "year": 2023,
    "url": "https://codeforces.com/problemset/problem/1902/F",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 914 (Div. 2) · F",
    "originalContest": "Codeforces Round 914 (Div. 2) · F",
    "topics": [
      "线性基",
      "LCA"
    ],
    "requirements": [
      "xor-basis",
      "lca",
      "position-aware-basis"
    ],
    "reason": "空间摘要要支持位置截断；需要证明压缩后仍保留每个查询路径的生成空间。",
    "sourceTags": [
      "Codeforces"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://codeforces.com/problemset/problem/1902/F"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "xor-basis.md",
        "section": 5
      }
    ]
  },
  {
    "id": "cf1062e",
    "title": "Company",
    "estimate": 2300,
    "year": 2018,
    "url": "https://codeforces.com/problemset/problem/1062/E",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 520 (Div. 2) · E",
    "originalContest": "Codeforces Round 520 (Div. 2) · E",
    "topics": [
      "LCA"
    ],
    "requirements": [
      "lca",
      "dfs-order",
      "range-query"
    ],
    "reason": "保留这道与讲义性质直接对应的旧题，练习点集极值摘要、删除候选与区间查询。",
    "sourceTags": [
      "Codeforces"
    ],
    "classic": true,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://codeforces.com/problemset/problem/1062/E"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "lca-properties.md",
        "section": 1
      }
    ]
  },
  {
    "id": "cf1702g2",
    "title": "Passable Paths (hard version)",
    "estimate": 2100,
    "year": 2022,
    "url": "https://codeforces.com/problemset/problem/1702/G2",
    "platform": "Codeforces",
    "origin": "Codeforces",
    "contest": "Codeforces Round 805 (Div. 3) · G2",
    "originalContest": "Codeforces Round 805 (Div. 3) · G2",
    "topics": [
      "LCA"
    ],
    "requirements": [
      "lca",
      "tree-distance",
      "path-membership"
    ],
    "reason": "把点集是否能放在一条路径上转为少量端点与路径成员关系的检查。",
    "sourceTags": [
      "Codeforces"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://codeforces.com/problemset/problem/1702/G2"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "lca-properties.md",
        "section": 2
      }
    ]
  },
  {
    "id": "abc359_g",
    "title": "Sum of Tree Distance",
    "estimate": 2400,
    "year": 2024,
    "url": "https://atcoder.jp/contests/abc359/tasks/abc359_g",
    "platform": "AtCoder",
    "origin": "AtCoder",
    "contest": "ABC359 · G",
    "originalContest": "ABC359 · G",
    "topics": [
      "LCA"
    ],
    "requirements": [
      "lca",
      "virtual-tree",
      "edge-contribution"
    ],
    "reason": "分组后的树上点对距离和，需要组织相关点的连接结构并控制全部组的总规模。",
    "sourceTags": [
      "AtCoder"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-20",
    "evidence": [
      "https://atcoder.jp/contests/abc359/tasks/abc359_g"
    ],
    "notesPractice": true,
    "notesSections": [
      {
        "file": "lca-properties.md",
        "section": 7
      }
    ]
  }
];
  if (typeof module !== "undefined" && module.exports) module.exports = problems;
  else root.AlgorithmProblems = problems;
})(typeof globalThis !== "undefined" ? globalThis : this);
