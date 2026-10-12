(function (root) {
  const syllabus = [
    ['数论', 'GCD / LCM', false], ['数论', '质因数与约数', false], ['数论', '模运算与逆元', false], ['数论', '扩欧与丢番图方程', false], ['数论', '互质计数与欧拉函数', false], ['数论', '中国剩余定理', true], ['数论', '整除分块', true],
    ['组合数学', '基础计数与组合数', false], ['组合数学', '双计数与对象转换', false], ['组合数学', '递推与计数 DP', false], ['组合数学', '路径计数', false], ['组合数学', '卡特兰与反射原理', true],
    ['容斥专项', '直接容斥与补集', false], ['容斥专项', '整除与互质容斥', false], ['容斥专项', '有界整数解', false], ['容斥专项', '覆盖与满射', false], ['容斥专项', '对称性与交集归类', true], ['容斥专项', '容斥结合子集 DP', true]
  ].map(([group, name, advanced]) => ({ group, name, advanced, selected: true }));
  if (typeof module !== 'undefined' && module.exports) module.exports = syllabus; else root.MathSyllabus = syllabus;
})(typeof globalThis !== 'undefined' ? globalThis : this);
