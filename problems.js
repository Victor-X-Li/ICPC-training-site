/* Curated seed set. Titles and provenance checked against linked primary pages on 2026-10-12.
   estimate is an independent CF-scale assessment; no official rating is imported. */
(function (root) {
  const rows = [
    ['abc380_e', '1D Bucket Tool', 'AtCoder', 'ABC 380 · E', 2024, 1800, ['并查集'], 'https://atcoder.jp/contests/abc380/tasks/abc380_e'],
    ['abc372_e', 'K-th Largest Connected Components', 'AtCoder', 'ABC 372 · E', 2024, 1700, ['并查集'], 'https://atcoder.jp/contests/abc372/tasks/abc372_e'],
    ['abc334_e', 'Christmas Color Grid 1', 'AtCoder', 'ABC 334 · E', 2023, 1800, ['并查集', '组合数学'], 'https://atcoder.jp/contests/abc334/tasks/abc334_e'],
    ['abc314_f', 'A Certain Game', 'AtCoder', 'ABC 314 · F', 2023, 2200, ['并查集', '组合数学'], 'https://atcoder.jp/contests/abc314/tasks/abc314_f'],
    ['cf2020d', 'Connect the Dots', 'Codeforces', 'CF 2020D', 2024, 1900, ['并查集'], 'https://codeforces.com/problemset/problem/2020/D'],
    ['cf1985h2', 'Maximize the Largest Component (Hard Version)', 'Codeforces', 'CF 1985H2', 2024, 2300, ['并查集'], 'https://codeforces.com/problemset/problem/1985/H2'],
    ['abc383_e', 'Sum of Max Matching', 'AtCoder', 'ABC 383 · E', 2024, 2200, ['最小生成树', '并查集'], 'https://atcoder.jp/contests/abc383/tasks/abc383_e'],
    ['abc342_e', 'Last Train', 'AtCoder', 'ABC 342 · E', 2024, 2200, ['图论与建模'], 'https://atcoder.jp/contests/abc342/tasks/abc342_e'],
    ['abc302_f', 'Merge Set', 'AtCoder', 'ABC 302 · F', 2023, 1900, ['图论与建模'], 'https://atcoder.jp/contests/abc302/tasks/abc302_f'],
    ['abc394_e', 'Palindromic Shortest Path', 'AtCoder', 'ABC 394 · E', 2025, 2100, ['图论与建模'], 'https://atcoder.jp/contests/abc394/tasks/abc394_e'],
    ['abc349_f', 'Subsequence LCM', 'AtCoder', 'ABC 349 · F', 2024, 2300, ['数论', '组合数学'], 'https://atcoder.jp/contests/abc349/tasks/abc349_f'],
    ['abc340_f', 'S = 1', 'AtCoder', 'ABC 340 · F', 2024, 1900, ['数论'], 'https://atcoder.jp/contests/abc340/tasks/abc340_f'],
    ['abc280_d', 'Factorial and Multiple', 'AtCoder', 'ABC 280 · D', 2022, 1600, ['数论'], 'https://atcoder.jp/contests/abc280/tasks/abc280_d'],
    ['cf2037g', 'Natlan Exploring', 'Codeforces', 'CF 2037G', 2024, 2200, ['数论', '组合数学'], 'https://codeforces.com/problemset/problem/2037/G'],
    ['cf2044e', 'Insane Problem', 'Codeforces', 'CF 2044E', 2024, 1500, ['数论'], 'https://codeforces.com/problemset/problem/2044/E'],
    ['cf2044f', 'Easy Demon Problem', 'Codeforces', 'CF 2044F', 2024, 1900, ['数论'], 'https://codeforces.com/problemset/problem/2044/F'],
    ['abc360_e', 'Random Swaps of Balls', 'AtCoder', 'ABC 360 · E', 2024, 1800, ['组合数学'], 'https://atcoder.jp/contests/abc360/tasks/abc360_e'],
    ['abc358_e', 'Alphabet Tiles', 'AtCoder', 'ABC 358 · E', 2024, 2000, ['组合数学', '动态规划与树'], 'https://atcoder.jp/contests/abc358/tasks/abc358_e'],
    ['cf2000e', 'Photoshoot for Gorillas', 'Codeforces', 'CF 2000E', 2024, 1600, ['组合数学'], 'https://codeforces.com/problemset/problem/2000/E'],
    ['abc359_d', 'Avoid K Palindrome', 'AtCoder', 'ABC 359 · D', 2024, 1900, ['动态规划与树'], 'https://atcoder.jp/contests/abc359/tasks/abc359_d'],
    ['cf1997d', 'Maximize the Root', 'Codeforces', 'CF 1997D', 2024, 1800, ['动态规划与树'], 'https://codeforces.com/problemset/problem/1997/D'],
    ['abc379_f', 'Buildings 2', 'AtCoder', 'ABC 379 · F', 2024, 2200, ['区间与单调结构'], 'https://atcoder.jp/contests/abc379/tasks/abc379_f'],
    ['abc372_d', 'Buildings', 'AtCoder', 'ABC 372 · D', 2024, 1700, ['区间与单调结构'], 'https://atcoder.jp/contests/abc372/tasks/abc372_d'],
    ['abc359_e', 'Water Tank', 'AtCoder', 'ABC 359 · E', 2024, 1900, ['区间与单调结构'], 'https://atcoder.jp/contests/abc359/tasks/abc359_e'],
    ['cf1927d', 'Find the Different Ones!', 'Codeforces', 'CF 1927D', 2024, 1400, ['区间与单调结构'], 'https://codeforces.com/problemset/problem/1927/D'],
    ['qoj9059', 'Item Selection', 'QOJ', 'ICPC 2023 · Pacific Northwest Regional', 2023, 1600, ['图论与建模'], 'https://qoj.ac/problem/9059', 'ICPC'],
    ['qoj10403', 'Citizenship', 'QOJ', 'ICPC 2024 · World Finals · C', 2024, 2500, ['图论与建模'], 'https://qoj.ac/problem/10403', 'ICPC']
  ];
  const seedProblems = rows.map(([id, title, platform, contest, year, estimate, topics, url, origin]) => ({ id, title, platform, contest, year, estimate, topics, url, origin: origin || platform, classic: false, requirements: [], verifiedAt: '2026-10-12', uncertainty: 200 }));
  const mathematical = typeof module !== 'undefined' && module.exports ? require('./math-problems.js') : root.MathProblems;
  const previousSources = typeof module !== 'undefined' && module.exports ? require('./source-problems.js') : root.SourceProblems;
  const extraSources = typeof module !== 'undefined' && module.exports ? require('./extra-source-problems.js') : root.ExtraSourceProblems;
  const sourceProblems = [...previousSources, ...extraSources];
  const mathProblems = [...mathematical, ...sourceProblems];
  const syllabus = typeof module !== 'undefined' && module.exports ? require('./syllabus.js') : root.MathSyllabus;
  const map = new Map(seedProblems.map(p => [p.id, p]));
  for (const p of mathProblems) { const old = map.get(p.id); map.set(p.id, { ...(old || { classic: false, uncertainty: 200 }), ...p, collection: 'math-2026-10', topics: [...new Set([...(old?.topics || []), ...p.topics])], verifiedAt: '2026-10-12' }); }
  const algorithms = typeof module !== 'undefined' && module.exports ? require('./algorithm-problems.js') : root.AlgorithmProblems;
  const algorithmRoutes = typeof module !== 'undefined' && module.exports ? require('./algorithm-syllabus.js') : root.AlgorithmRoutes;
  const algorithmAddedIds = [], algorithmReusedIds = [];
  for (const p of algorithms) {
    const old = map.get(p.id); (old ? algorithmReusedIds : algorithmAddedIds).push(p.id);
    map.set(p.id, { ...(old || { classic: false, uncertainty: 200 }), ...p, collection: old?.collection || 'algorithms-2026-10', algorithm: true, subtopics: old?.collection === 'math-2026-10' ? old.subtopics : p.subtopics, algorithmSubtopics: p.subtopics, topics: [...new Set([...(old?.topics || []), ...p.topics])], verifiedAt: '2026-10-12' });
  }
  const guideProblems = typeof module !== 'undefined' && module.exports
    ? require('./guide-problems.js')
    : root.GuideProblems;
  const guideAddedIds = [];
  for (const p of guideProblems) {
    const old = map.get(p.id);
    if (!old) guideAddedIds.push(p.id);
    map.set(p.id, {
      ...(old || {}),
      ...p,
      topics: [...new Set([...(old?.topics || []), ...p.topics])]
    });
  }
  const algorithmSyllabus = algorithmRoutes.flatMap(route => route.subtopics.map(name => ({ name, group: route.name, topic: route.topic, selected: true })));
  const topicAliases = {
    '最小生成树': 'MST', '图论与建模': '图论建模', '区间与单调结构': '区间结构',
    '动态规划与树': '动态规划', '容斥': '容斥原理', '最短路拓展': '最短路',
    '01 Trie与二进制': '01 Trie', 'DFS拓展': 'DFS 及其应用'
  };
  const topics = ['并查集', 'MST', '图论建模', '区间结构', '数论', '组合数学', '动态规划', '容斥原理', '优化建图', '最短路', '笛卡尔树与单调栈', '线性基', '01 Trie', 'DFS 及其应用'];
  const problems = [...map.values()];
  for (const p of problems) p.topics = [...new Set(p.topics.map(t => topicAliases[t] || t))];
  for (const route of algorithmRoutes) route.topic = topicAliases[route.topic] || route.topic;
  const data = { problems, syllabus, algorithmRoutes, algorithmSyllabus, algorithmAddedIds, algorithmReusedIds, guideAddedIds, topics, topicAliases, sources: [...new Set(['Codeforces', 'AtCoder', 'QOJ', 'ICPC', ...[...sourceProblems, ...algorithms, ...guideProblems].flatMap(p => [p.platform, p.origin, ...(p.sourceTags || [])])])], verifiedAt: '2026-10-12', updatedAt: '2026-10-16' };
  if (typeof module !== 'undefined' && module.exports) module.exports = data;
  else root.ProblemData = data;
})(typeof globalThis !== 'undefined' ? globalThis : this);
