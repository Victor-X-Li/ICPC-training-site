/* Independently assessed algorithm training collection. No solutions are shipped. */
(function(root){
  const problems=[
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
      "图论与建模"
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
    "verifiedAt": "2026-10-12"
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
      "图论与建模"
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
    "verifiedAt": "2026-10-12"
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
      "图论与建模"
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
    "verifiedAt": "2026-10-12"
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
      "笛卡尔树与单调栈"
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
    "verifiedAt": "2026-10-12"
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
    "verifiedAt": "2026-10-12"
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
    "verifiedAt": "2026-10-12"
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
      "图论与建模"
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
    "verifiedAt": "2026-10-12"
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
      "图论与建模"
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
    "verifiedAt": "2026-10-12"
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
    "verifiedAt": "2026-10-12"
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
    "verifiedAt": "2026-10-12"
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
      "01 Trie与二进制"
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
    "verifiedAt": "2026-10-12"
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
      "01 Trie与二进制"
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
    "verifiedAt": "2026-10-12"
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
      "01 Trie与二进制"
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
    "verifiedAt": "2026-10-12"
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
  }
];
  if(typeof module!=="undefined"&&module.exports)module.exports=problems;else root.AlgorithmProblems=problems;
})(typeof globalThis!=="undefined"?globalThis:this);
