/* Mathematical collection verified against original statements and official editorials on 2026-10-12. */
(function(root){const problems=[
  {
    "id": "cf2000e",
    "title": "Photoshoot for Gorillas",
    "url": "https://codeforces.com/contest/2000/problem/E",
    "platform": "Codeforces",
    "year": 2024,
    "estimate": 1500,
    "subtopics": [
      "双计数与对象转换"
    ],
    "requirements": [
      "贡献计数",
      "排序",
      "基础贪心"
    ],
    "reason": "训练把大量重叠对象的总和改写为局部贡献，并证明最优安排。",
    "origin": "Codeforces",
    "originalContest": "Codeforces Round 966 (Div. 3)",
    "contest": "Codeforces Round 966 (Div. 3) · CF2000E",
    "topics": [
      "组合数学"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc280_d",
    "title": "Factorial and Multiple",
    "url": "https://atcoder.jp/contests/abc280/tasks/abc280_d",
    "platform": "AtCoder",
    "year": 2022,
    "estimate": 1600,
    "subtopics": [
      "质因数与约数"
    ],
    "requirements": [
      "试除分解",
      "质因子指数",
      "阶乘中的整除关系"
    ],
    "reason": "性质推导与实现都较紧凑，适合检查质因子指数的理解。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 280",
    "contest": "ABC 280 · D",
    "topics": [
      "数论"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc357_d",
    "title": "88888888",
    "url": "https://atcoder.jp/contests/abc357/tasks/abc357_d",
    "platform": "AtCoder",
    "year": 2024,
    "estimate": 1600,
    "subtopics": [
      "模运算与逆元"
    ],
    "requirements": [
      "模逆元",
      "快速幂",
      "等比数列求和"
    ],
    "reason": "推导简洁，主要检查模意义除法与大指数处理。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 357",
    "contest": "ABC 357 · D",
    "topics": [
      "数论"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc246_f",
    "title": "typewriter",
    "url": "https://atcoder.jp/contests/abc246/tasks/abc246_f",
    "platform": "AtCoder",
    "year": 2022,
    "estimate": 1800,
    "subtopics": [
      "直接容斥与补集",
      "基础计数与组合数"
    ],
    "requirements": [
      "集合交集",
      "子集枚举",
      "快速幂",
      "模运算"
    ],
    "reason": "专项起步题：事件定义清楚，适合检查交集计数与符号是否理解到位。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 246 · F",
    "contest": "ABC 246 · F",
    "topics": [
      "组合数学",
      "容斥原理"
    ],
    "ieStage": 1,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "cf1295d",
    "title": "Same GCDs",
    "url": "https://codeforces.com/problemset/problem/1295/D",
    "platform": "Codeforces",
    "year": 2020,
    "estimate": 1800,
    "subtopics": [
      "GCD / LCM",
      "互质计数与欧拉函数"
    ],
    "requirements": [
      "GCD",
      "欧拉函数直接计算",
      "完整剩余系计数"
    ],
    "reason": "需要证明计数范围与条件的等价转化，代码较短。",
    "origin": "Codeforces",
    "originalContest": "Educational Codeforces Round 81 (Div. 2)",
    "contest": "Educational Codeforces Round 81 (Div. 2) · CF1295D",
    "topics": [
      "数论"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc183_e",
    "title": "Queen on Grid",
    "url": "https://atcoder.jp/contests/abc183/tasks/abc183_e",
    "platform": "AtCoder",
    "year": 2020,
    "estimate": 1900,
    "subtopics": [
      "路径计数",
      "递推与计数 DP"
    ],
    "requirements": [
      "网格动态规划",
      "前缀累加",
      "模运算"
    ],
    "reason": "训练障碍与多种移动规则共同影响计数时的状态设计和转移优化。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 183",
    "contest": "ABC 183 · E",
    "topics": [
      "组合数学"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc232_e",
    "title": "Rook Path",
    "url": "https://atcoder.jp/contests/abc232/tasks/abc232_e",
    "platform": "AtCoder",
    "year": 2021,
    "estimate": 1900,
    "subtopics": [
      "路径计数",
      "递推与计数 DP"
    ],
    "requirements": [
      "基础动态规划",
      "对称性分析",
      "模运算"
    ],
    "reason": "训练证明大量位置可以共享计数状态，避免被巨大棋盘规模误导。",
    "origin": "AtCoder",
    "originalContest": "M-SOLUTIONS Programming Contest 2021 (AtCoder Beginner Contest 232)",
    "contest": "ABC 232 · E",
    "topics": [
      "组合数学"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc340_f",
    "title": "S = 1",
    "url": "https://atcoder.jp/contests/abc340/tasks/abc340_f",
    "platform": "AtCoder",
    "year": 2024,
    "estimate": 1900,
    "subtopics": [
      "扩欧与丢番图方程",
      "GCD / LCM"
    ],
    "requirements": [
      "扩展欧几里得",
      "线性丢番图方程",
      "整数解存在性与界限"
    ],
    "reason": "建模步骤短，但要严谨处理有解条件、符号和解的范围。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 340",
    "contest": "ABC 340 · F",
    "topics": [
      "数论"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc358_e",
    "title": "Alphabet Tiles",
    "url": "https://atcoder.jp/contests/abc358/tasks/abc358_e",
    "platform": "AtCoder",
    "year": 2024,
    "estimate": 1900,
    "subtopics": [
      "基础计数与组合数",
      "递推与计数 DP"
    ],
    "requirements": [
      "组合数",
      "模运算",
      "基础动态规划"
    ],
    "reason": "训练在重复字符与出现次数限制下建立不重不漏的计数状态。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 358",
    "contest": "ABC 358 · E",
    "topics": [
      "组合数学"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "cf1750d",
    "title": "Count GCD",
    "url": "https://codeforces.com/problemset/problem/1750/D",
    "platform": "Codeforces",
    "year": 2022,
    "estimate": 1900,
    "subtopics": [
      "整除与互质容斥",
      "GCD / LCM",
      "质因数与约数",
      "互质计数与欧拉函数"
    ],
    "requirements": [
      "GCD性质",
      "不同质因子分解",
      "质因子子集枚举",
      "整数除法",
      "乘法原理"
    ],
    "reason": "从整除链条件进入互质计数，适合作为数论容斥的第一道完整建模题。",
    "origin": "Codeforces",
    "originalContest": "CodeTON Round 3 · D",
    "contest": "CodeTON Round 3 · D",
    "topics": [
      "数论",
      "组合数学",
      "容斥原理"
    ],
    "ieStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "cf2044f",
    "title": "Easy Demon Problem",
    "url": "https://codeforces.com/problemset/problem/2044/F",
    "platform": "Codeforces",
    "year": 2024,
    "estimate": 1900,
    "subtopics": [
      "质因数与约数"
    ],
    "requirements": [
      "约数枚举",
      "代数整理",
      "集合查询"
    ],
    "reason": "二维描述需要代数转化，另有正负号和批量查询的实现负担。",
    "origin": "Codeforces",
    "originalContest": "Codeforces Round 993 (Div. 4)",
    "contest": "Codeforces Round 993 (Div. 4) · CF2044F",
    "topics": [
      "数论"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc172_e",
    "title": "NEQ",
    "url": "https://atcoder.jp/contests/abc172/tasks/abc172_e",
    "platform": "AtCoder",
    "year": 2020,
    "estimate": 2000,
    "subtopics": [
      "对称性与交集归类",
      "基础计数与组合数"
    ],
    "requirements": [
      "排列数",
      "组合数",
      "模逆元",
      "按集合大小归类"
    ],
    "reason": "专门训练交集只依赖集合大小时的归类，检验从指数枚举到线性求和的理由。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 172 · E",
    "contest": "ABC 172 · E",
    "topics": [
      "组合数学",
      "容斥原理"
    ],
    "ieStage": 5,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc216_f",
    "title": "Max Sum Counting",
    "url": "https://atcoder.jp/contests/abc216/tasks/abc216_f",
    "platform": "AtCoder",
    "year": 2021,
    "estimate": 2000,
    "subtopics": [
      "递推与计数 DP",
      "双计数与对象转换"
    ],
    "requirements": [
      "计数背包",
      "排序",
      "模运算"
    ],
    "reason": "训练同时含最大值与总和的限制，并明确每个合法集合唯一计入的位置。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 216",
    "contest": "ABC 216 · F",
    "topics": [
      "组合数学"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc152_f",
    "title": "Tree and Constraints",
    "url": "https://atcoder.jp/contests/abc152/tasks/abc152_f",
    "platform": "AtCoder",
    "year": 2020,
    "estimate": 2100,
    "subtopics": [
      "覆盖与满射",
      "直接容斥与补集"
    ],
    "requirements": [
      "树的路径与DFS",
      "子集枚举",
      "位集",
      "集合并集"
    ],
    "reason": "把覆盖条件放到树的路径上，训练非对称交集与多个限制重叠的处理。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 152 · F",
    "contest": "ABC 152 · F",
    "topics": [
      "组合数学",
      "容斥原理"
    ],
    "ieStage": 4,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "arc116_c",
    "title": "Multiple Sequences",
    "url": "https://atcoder.jp/contests/arc116/tasks/arc116_c",
    "platform": "AtCoder",
    "year": 2021,
    "estimate": 2100,
    "subtopics": [
      "基础计数与组合数",
      "质因数与约数"
    ],
    "requirements": [
      "质因数分解",
      "隔板法",
      "组合数",
      "模逆元"
    ],
    "reason": "训练把整除序列的结构与整数分配计数联系起来，兼顾数论和组合建模。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Regular Contest 116",
    "contest": "ARC 116 · C",
    "topics": [
      "数论",
      "组合数学"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "arc160_b",
    "title": "Triple Pair",
    "url": "https://atcoder.jp/contests/arc160/tasks/arc160_b",
    "platform": "AtCoder",
    "year": 2023,
    "estimate": 2100,
    "subtopics": [
      "整除分块"
    ],
    "requirements": [
      "整除分块（固定分子 floor(N/i)）",
      "分类计数",
      "整数边界与模运算"
    ],
    "reason": "需要证明分类完整且互不重叠，再把大范围求和压缩。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Regular Contest 160",
    "contest": "ARC 160 · B",
    "topics": [
      "数论"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "cf1909d",
    "title": "Split Plus K",
    "url": "https://codeforces.com/problemset/problem/1909/D",
    "platform": "Codeforces",
    "year": 2023,
    "estimate": 2100,
    "subtopics": [
      "GCD / LCM"
    ],
    "requirements": [
      "GCD",
      "操作不变量",
      "可行性与最优性证明"
    ],
    "reason": "工具基础，难点在发现统一的不变量并证明最少操作数。",
    "origin": "Codeforces",
    "originalContest": "Pinely Round 3 (Div. 1 + Div. 2)",
    "contest": "Pinely Round 3 (Div. 1 + Div. 2) · CF1909D",
    "topics": [
      "数论"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "cf2037g",
    "title": "Natlan Exploring",
    "url": "https://codeforces.com/problemset/problem/2037/G",
    "platform": "Codeforces",
    "year": 2024,
    "estimate": 2100,
    "subtopics": [
      "整除与互质容斥",
      "质因数与约数",
      "递推与计数 DP"
    ],
    "requirements": [
      "不同质因子分解",
      "基础质数筛或最小质因子预处理",
      "质因子子集枚举",
      "线性DP",
      "模运算"
    ],
    "reason": "容斥用于合并带权状态，练习从静态计数过渡到动态累计。",
    "origin": "Codeforces",
    "originalContest": "Codeforces Round 988 (Div. 3) · G",
    "contest": "Codeforces Round 988 (Div. 3) · G",
    "topics": [
      "数论",
      "组合数学",
      "容斥原理"
    ],
    "ieStage": 2,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc193_e",
    "title": "Oversleeping",
    "url": "https://atcoder.jp/contests/abc193/tasks/abc193_e",
    "platform": "AtCoder",
    "year": 2021,
    "estimate": 2200,
    "subtopics": [
      "中国剩余定理",
      "扩欧与丢番图方程"
    ],
    "requirements": [
      "CRT（模数可不互质）",
      "扩展欧几里得",
      "周期条件建模"
    ],
    "reason": "需要联合周期条件，正确区分无解情况并处理很大的最早时刻。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 193",
    "contest": "ABC 193 · E",
    "topics": [
      "数论"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc349_f",
    "title": "Subsequence LCM",
    "url": "https://atcoder.jp/contests/abc349/tasks/abc349_f",
    "platform": "AtCoder",
    "year": 2024,
    "estimate": 2200,
    "subtopics": [
      "容斥结合子集 DP",
      "GCD / LCM",
      "质因数与约数",
      "覆盖与满射"
    ],
    "requirements": [
      "质因数分解",
      "质因子指数",
      "状态压缩",
      "子集和DP",
      "直接事件容斥",
      "快速幂"
    ],
    "reason": "数论与组合的衔接题，训练条件压缩、子集计数以及空对象边界。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 349 · F",
    "contest": "ABC 349 · F",
    "topics": [
      "数论",
      "组合数学",
      "容斥原理"
    ],
    "ieStage": 6,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc297_f",
    "title": "Minimum Bounding Box 2",
    "url": "https://atcoder.jp/contests/abc297/tasks/abc297_f",
    "platform": "AtCoder",
    "year": 2023,
    "estimate": 2300,
    "subtopics": [
      "直接容斥与补集",
      "双计数与对象转换",
      "基础计数与组合数"
    ],
    "requirements": [
      "组合数",
      "模逆元",
      "贡献计数",
      "集合交集"
    ],
    "reason": "将容斥放进几何计数场景，训练事件选择和计数对象转换。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 297 · F",
    "contest": "ABC 297 · F",
    "topics": [
      "组合数学",
      "容斥原理"
    ],
    "ieStage": 1,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "cf1342e",
    "title": "Placing Rooks",
    "url": "https://codeforces.com/problemset/problem/1342/E",
    "platform": "Codeforces",
    "year": 2020,
    "estimate": 2300,
    "subtopics": [
      "覆盖与满射",
      "对称性与交集归类",
      "基础计数与组合数"
    ],
    "requirements": [
      "组合数",
      "快速幂",
      "模逆元",
      "满射计数",
      "对称性"
    ],
    "reason": "先证明配置结构，再进入覆盖计数；适合检查是否能解释公式为何成立。",
    "origin": "Codeforces",
    "originalContest": "Educational Codeforces Round 86 · E",
    "contest": "Educational Codeforces Round 86 · E",
    "topics": [
      "组合数学",
      "容斥原理"
    ],
    "ieStage": 4,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc213_g",
    "title": "Connectivity 2",
    "url": "https://atcoder.jp/contests/abc213/tasks/abc213_g",
    "platform": "AtCoder",
    "year": 2021,
    "estimate": 2400,
    "subtopics": [
      "容斥结合子集 DP",
      "递推与计数 DP",
      "双计数与对象转换"
    ],
    "requirements": [
      "子集枚举",
      "状态压缩DP",
      "连通分量",
      "补集计数",
      "乘法原理"
    ],
    "reason": "专项收束题：把难以直接计数的全局限制转成可证明的子集递推。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 213 · G",
    "contest": "ABC 213 · G",
    "topics": [
      "组合数学",
      "容斥原理"
    ],
    "ieStage": 6,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc217_f",
    "title": "Make Pair",
    "url": "https://atcoder.jp/contests/abc217/tasks/abc217_f",
    "platform": "AtCoder",
    "year": 2021,
    "estimate": 2400,
    "subtopics": [
      "递推与计数 DP",
      "基础计数与组合数"
    ],
    "requirements": [
      "区间动态规划",
      "组合数",
      "模运算"
    ],
    "reason": "训练区分最终配对与操作顺序，并证明递推没有遗漏和重复。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 217",
    "contest": "ABC 217 · F",
    "topics": [
      "组合数学"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "abc242_f",
    "title": "Black and White Rooks",
    "url": "https://atcoder.jp/contests/abc242/tasks/abc242_f",
    "platform": "AtCoder",
    "year": 2022,
    "estimate": 2500,
    "subtopics": [
      "覆盖与满射",
      "对称性与交集归类",
      "基础计数与组合数"
    ],
    "requirements": [
      "组合数",
      "模逆元",
      "二维容斥",
      "乘法原理",
      "对称性"
    ],
    "reason": "覆盖专项提高题，将两类对象的约束和行列覆盖同时纳入计数。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Beginner Contest 242 · F",
    "contest": "ABC 242 · F",
    "topics": [
      "组合数学",
      "容斥原理"
    ],
    "ieStage": 4,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "arc145_c",
    "title": "Split and Maximize",
    "url": "https://atcoder.jp/contests/arc145/tasks/arc145_c",
    "platform": "AtCoder",
    "year": 2022,
    "estimate": 2500,
    "subtopics": [
      "卡特兰与反射原理",
      "基础计数与组合数"
    ],
    "requirements": [
      "卡特兰数",
      "交换论证",
      "基础组合数",
      "模运算"
    ],
    "reason": "训练先证明最优结构，再建立排列计数与前缀合法对象之间的对应。",
    "origin": "AtCoder",
    "originalContest": "AtCoder Regular Contest 145",
    "contest": "ARC 145 · C",
    "topics": [
      "组合数学"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "cf2025e",
    "title": "Card Game",
    "url": "https://codeforces.com/contest/2025/problem/E",
    "platform": "Codeforces",
    "year": 2024,
    "estimate": 2500,
    "subtopics": [
      "卡特兰与反射原理",
      "递推与计数 DP"
    ],
    "requirements": [
      "受限路径计数",
      "计数动态规划",
      "模运算"
    ],
    "reason": "训练从胜负匹配条件建立可证明的计数模型，并合并多个类别的结果。",
    "origin": "Codeforces",
    "originalContest": "Educational Codeforces Round 170 (Rated for Div. 2)",
    "contest": "Educational Codeforces Round 170 (Rated for Div. 2) · CF2025E",
    "topics": [
      "组合数学"
    ],
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  },
  {
    "id": "cf2127f",
    "title": "Hamed and AghaBalaSar",
    "url": "https://codeforces.com/problemset/problem/2127/F",
    "platform": "Codeforces",
    "year": 2025,
    "estimate": 2800,
    "subtopics": [
      "有界整数解",
      "基础计数与组合数",
      "双计数与对象转换",
      "对称性与交集归类"
    ],
    "requirements": [
      "隔板法",
      "组合数",
      "模逆元",
      "贡献求和",
      "调和级数复杂度分析"
    ],
    "reason": "有界整数解的提高题：综合计数建模、对称性和求和复杂度证明。",
    "origin": "Codeforces",
    "originalContest": "Atto Round 1 / Codeforces Round 1041 · F",
    "contest": "Atto Round 1 / Codeforces Round 1041 · F",
    "topics": [
      "组合数学",
      "容斥原理"
    ],
    "ieStage": 3,
    "classic": false,
    "uncertainty": 200,
    "verifiedAt": "2026-10-12"
  }
];if(typeof module!=='undefined'&&module.exports)module.exports=problems;else root.MathProblems=problems;})(typeof globalThis!=='undefined'?globalThis:this);
