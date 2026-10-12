/* Second limited source expansion: CCPC and Camp. Verified on 2026-10-12. */
(function (root) {
  const problems = [
    {
      "id": "qoj14814",
      "title": "k-子集和最大公约数问题",
      "url": "https://qoj.ac/problem/14814",
      "platform": "QOJ",
      "origin": "CCPC",
      "contest": "第十一届中国大学生程序设计竞赛 哈尔滨站（CCPC 2025 Harbin Site）— A",
      "originalContest": "第十一届中国大学生程序设计竞赛 哈尔滨站（CCPC 2025 Harbin Site）— A",
      "year": 2025,
      "estimate": 1800,
      "topics": [
        "数论"
      ],
      "subtopics": [
        "GCD / LCM"
      ],
      "requirements": [
        "GCD / LCM",
        "整除关系",
        "必要性与充分性证明",
        "64 位整数"
      ],
      "reason": "实现短，重点是把大量隐式对象归约为可计算的条件，并证明最优性。",
      "sourceTags": [
        "Petrozavodsk Camp"
      ],
      "reuseNote": "复用：Petrozavodsk Winter 2026 · Day 4: Harbin Contest",
      "categories": [
        "China Collegiate Programming Contest (CCPC)",
        "第十一届中国大学生程序设计竞赛（CCPC 2025）",
        "Petrozavodsk Programming Camp"
      ],
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-12"
    },
    {
      "id": "qoj6410",
      "title": "Classical DP Problem",
      "url": "https://qoj.ac/problem/6410",
      "platform": "QOJ",
      "origin": "Petrozavodsk Camp",
      "contest": "Petrozavodsk Winter 2023. Day 7. Gennady Korotkevich Contest 7 · D",
      "originalContest": "44th Petrozavodsk Programming Camp, Winter 2023 — Day 7: Gennady Korotkevich Contest 7",
      "year": 2023,
      "estimate": 2400,
      "topics": [
        "组合数学",
        "容斥原理"
      ],
      "subtopics": [
        "覆盖与满射",
        "直接容斥与补集",
        "递推与计数 DP"
      ],
      "requirements": [
        "覆盖关系",
        "最优性证明",
        "两事件容斥",
        "基础二维计数 DP",
        "阶乘",
        "模运算"
      ],
      "reason": "Camp 原创组合题，结合最优性证明、重复计数处理和可压缩的计数状态。",
      "sourceTags": [
        "Petrozavodsk Camp",
        "Universal Cup"
      ],
      "reuseNote": "复用：1st Universal Cup · Stage 16: Gomel (2023)",
      "categories": [
        "Training Camps",
        "Petrozavodsk Programming Camp",
        "44th Petrozavodsk Programming Camp (2023 Winter)",
        "Day 7. Gennady Korotkevich Contest 7"
      ],
      "classic": false,
      "uncertainty": 200,
      "verifiedAt": "2026-10-12",
      "ieStage": 4
    }
  ]; if (typeof module !== 'undefined' && module.exports) module.exports = problems; else root.ExtraSourceProblems = problems;
})(typeof globalThis !== 'undefined' ? globalThis : this);
