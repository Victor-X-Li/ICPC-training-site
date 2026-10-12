(function(root){
  const routes=[
  {
    "name": "并查集",
    "topic": "并查集",
    "summary": "状态维护、带权关系、离线连通性与合并历史；不含回滚。",
    "subtopics": [
      "并查集状态维护",
      "带权或扩展并查集",
      "离线连通性",
      "合并历史与树上统计"
    ]
  },
  {
    "name": "MST · Kruskal 与 Prim",
    "topic": "最小生成树",
    "summary": "稀疏化、交换证明、隐式稠密图；Prim 包含最大生成树。",
    "subtopics": [
      "Kruskal",
      "Prim",
      "隐式图MST",
      "MST性质与交换",
      "生成树变换"
    ]
  },
  {
    "name": "优化建图",
    "topic": "优化建图",
    "summary": "状态扩展、辅助节点与规模压缩；包含 Floor is Lava。",
    "subtopics": [
      "状态扩展建图",
      "辅助节点与压缩建图",
      "代价与图模型转换"
    ]
  },
  {
    "name": "最短路及其拓展",
    "topic": "最短路拓展",
    "summary": "广义 Dijkstra、时间与反向问题、Bellman–Ford／SPFA 的重复松弛与负环。",
    "subtopics": [
      "Dijkstra拓展",
      "Bellman–Ford与负环",
      "时间或反向最短路"
    ]
  },
  {
    "name": "笛卡尔树与单调栈",
    "topic": "笛卡尔树与单调栈",
    "summary": "真正的树结构题、聚合信息与 DP；不新增简单 NGE 练习。",
    "subtopics": [
      "笛卡尔树结构",
      "笛卡尔树上的 DP",
      "单调栈维护聚合信息",
      "单调栈优化 DP"
    ]
  },
  {
    "name": "线性基 · 从 0 开始",
    "topic": "线性基",
    "summary": "可表示性与秩 → 最大异或 → 建模 → 有序枚举 → 区间查询。",
    "subtopics": [
      "XOR与可表示性",
      "线性基插入与秩",
      "最大子集异或",
      "线性基建模",
      "有序异或枚举",
      "区间与前缀查询"
    ]
  },
  {
    "name": "01 Trie 与二进制",
    "topic": "01 Trie与二进制",
    "summary": "按位比较、查询、Trie 分治与查询状态扩展。",
    "subtopics": [
      "按位贪心与二进制建模",
      "01 Trie查询",
      "异或阈值与前缀",
      "Trie分治"
    ]
  },
  {
    "name": "DFS 及其拓展",
    "topic": "DFS拓展",
    "summary": "DFS 树、返祖边、桥与割点，以及利用结构性质做构造。",
    "subtopics": [
      "DFS 树与返祖边",
      "桥与割点",
      "DFS 树上的构造"
    ]
  }
];
  if(typeof module!=="undefined"&&module.exports)module.exports=routes;else root.AlgorithmRoutes=routes;
})(typeof globalThis!=="undefined"?globalThis:this);
