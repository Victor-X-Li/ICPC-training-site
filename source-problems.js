/* First five source additions, with verified Camp reuse metadata restored on 2026-10-12. */
(function(root){const problems=[
  {
    "id": "qoj5465",
    "title": "Maximum GCD",
    "url": "https://qoj.ac/problem/5465",
    "platform": "QOJ",
    "origin": "ICPC",
    "contest": "The 2023 ICPC Asia Hong Kong Regional Programming Contest — K（2022 赛季）",
    "originalContest": "The 2023 ICPC Asia Hong Kong Regional Programming Contest — K（2022 赛季）",
    "year": 2023,
    "estimate": 1800,
    "topics": [
      "数论"
    ],
    "subtopics": [
      "GCD / LCM",
      "模运算与逆元"
    ],
    "requirements": [
      "GCD 与整除关系",
      "取模操作的可达性",
      "上下界与构造证明"
    ],
    "reason": "工具基础，难点在证明操作的可达范围与最终最优值。",
    "sourceTags": [
      "Universal Cup",
      "Petrozavodsk Camp"
    ],
    "reuseNote": "复用：1st Universal Cup · Stage 2: Hong Kong；Petrozavodsk Winter 2023 · Day 3",
    "provenanceNote": "原赛 2023-01-14 · 2022 赛季",
    "categories": [
      "ICPC/Regionals",
      "Universal Cup",
      "Petrozavodsk Programming Camp"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "qoj8167",
    "title": "Yet Another Simple Math Problem",
    "url": "https://qoj.ac/problem/8167",
    "platform": "QOJ",
    "origin": "TTPC",
    "contest": "TTPC 2023 · C",
    "originalContest": "Tokyo Tech Programming Contest 2023",
    "year": 2023,
    "estimate": 2000,
    "topics": [
      "组合数学"
    ],
    "subtopics": [
      "双计数与对象转换",
      "基础计数与组合数"
    ],
    "requirements": [
      "整数数对计数",
      "一一对应证明",
      "对称性",
      "整数二分",
      "溢出处理"
    ],
    "reason": "训练计数对象转换与整数边界的完整证明，实现较轻。",
    "sourceTags": [
      "Universal Cup"
    ],
    "reuseNote": "复用：2nd Universal Cup · Stage 20: Ōokayama (2024)",
    "categories": [
      "Universal Cup",
      "The 2nd Universal Cup",
      "Stage 20: Ōokayama"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "qoj10219",
    "title": "Yet Another Crossover Episode",
    "url": "https://qoj.ac/problem/10219",
    "platform": "QOJ",
    "origin": "ICPC",
    "contest": "ICPC Asia Dhaka Regional 2024 · F",
    "originalContest": "ICPC Asia Dhaka Regional Contest 2024",
    "year": 2024,
    "estimate": 2200,
    "topics": [
      "数论",
      "组合数学"
    ],
    "subtopics": [
      "GCD / LCM",
      "递推与计数 DP"
    ],
    "requirements": [
      "GCD性质",
      "位运算",
      "基础子集和/最大值DP",
      "频数统计",
      "有序数对计数",
      "零值边界"
    ],
    "reason": "数论性质与基础子集 DP 的衔接题，证明和边界计数都有独立训练价值。",
    "sourceTags": [
      "Universal Cup"
    ],
    "reuseNote": "复用：3rd Universal Cup · Stage 32: Dhaka (2025)",
    "categories": [
      "Universal Cup",
      "The 3rd Universal Cup",
      "Stage 32: Dhaka"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "qoj5542",
    "title": "Doubled GCD",
    "url": "https://qoj.ac/problem/5542",
    "platform": "QOJ",
    "origin": "ICPC",
    "contest": "The 2022 ICPC Asia Jakarta Regional Contest — F",
    "originalContest": "The 2022 ICPC Asia Jakarta Regional Contest — F",
    "year": 2022,
    "estimate": 2200,
    "topics": [
      "数论"
    ],
    "subtopics": [
      "GCD / LCM",
      "质因数与约数"
    ],
    "requirements": [
      "GCD",
      "质因子指数",
      "基础贪心与小根堆",
      "交换论证"
    ],
    "reason": "需要抽象操作的数论性质，并完整证明合并顺序的最优性。",
    "sourceTags": [],
    "categories": [
      "ICPC/Regionals"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "apio22_perm",
    "title": "Permutation",
    "url": "https://oj.uz/problem/view/APIO22_perm",
    "platform": "oj.uz",
    "origin": "国外 OI",
    "contest": "Asia-Pacific Informatics Olympiad 2022 — Problem 3 (Permutation)",
    "originalContest": "Asia-Pacific Informatics Olympiad 2022 — Problem 3 (Permutation)",
    "year": 2022,
    "estimate": 2700,
    "topics": [
      "组合数学"
    ],
    "subtopics": [
      "双计数与对象转换"
    ],
    "requirements": [
      "递增子序列计数",
      "构造与不变量",
      "二进制表示"
    ],
    "reason": "训练把计数关系用于逆向构造，并同时证明正确性与输出规模；适合作为少量提高题。",
    "sourceTags": [],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  }
];if(typeof module!=='undefined'&&module.exports)module.exports=problems;else root.SourceProblems=problems;})(typeof globalThis!=='undefined'?globalThis:this);
