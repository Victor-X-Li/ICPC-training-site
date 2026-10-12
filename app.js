(function () {
  'use strict';
  const E = window.ProblemEngine, D = window.ProblemData, $ = id => document.getElementById(id);
  const KEYS = { filters: 'vectorli.desk.filters.v1', completed: 'vectorli.desk.completed.v1' };
  let storage; try { storage = window.localStorage; } catch { storage = null; }
  const knownIDs = new Set(D.problems.map(p => p.id));
  const readCompleted = () => { const ids = E.readJSON(storage, KEYS.completed, []); return Array.isArray(ids) ? [...new Set(ids.filter(id => knownIDs.has(id)))] : []; };
  let completed = readCompleted();
  let state = E.normalize(E.fromQuery(window.location.search) || E.readJSON(storage, KEYS.filters, {}));
  const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  let toastTimer, warnedStorage = false;
  function toast(message) { $('toast').textContent = message; $('toast').classList.add('visible'); window.clearTimeout(toastTimer); toastTimer = window.setTimeout(() => $('toast').classList.remove('visible'), 2600); }
  function persist() { if (!E.writeJSON(storage, KEYS.filters, state) && !warnedStorage) { warnedStorage = true; toast('当前浏览器无法保存专题选择。'); } try { window.history.replaceState(null, '', E.toQuery(state) + window.location.hash); } catch { } }
  function apply(topic) { state = E.normalize({ topic }); persist(); render(); $('results').focus({ preventScroll: true }); }
  function renderTopics() {
    const topics = ['all', ...D.topics];
    $('topicNav').innerHTML = topics.map(topic => {
      const count = E.select(D.problems, { topic }).length, label = topic === 'all' ? '全部题目' : topic;
      return `<button class="topic-button ${state.topic === topic ? 'active' : ''}" data-topic="${escape(topic)}" aria-pressed="${state.topic === topic}"><span>${escape(label)}</span><span class="topic-count">${count}</span></button>`;
    }).join('');
  }
  function render() {
    const problems = E.select(D.problems, state), done = new Set(completed);
    $('listTitle').textContent = state.topic === 'all' ? '全部题目' : state.topic;
    $('resultCount').textContent = `${problems.length} 题`;
    $('completionSummary').textContent = `已完成 ${problems.filter(p => done.has(p.id)).length} / ${problems.length}`;
    renderTopics();
    $('problemRows').innerHTML = problems.map((p, i) => {
      const checked = done.has(p.id), tone = p.estimate >= 2400 ? 'hard' : p.estimate >= 2000 ? 'medium' : '';
      return `<tr data-problem="${escape(p.id)}" class="${checked ? 'completed' : ''}"><td class="completion-cell"><label class="completion-toggle"><input type="checkbox" data-complete="${escape(p.id)}" ${checked ? 'checked' : ''} aria-label="${checked ? '取消完成标记' : '标记为已完成'}：${escape(p.title)}"><span class="sr-only">已完成</span></label></td><td class="number-cell">${String(i + 1).padStart(2, '0')}</td><td><a class="problem-title" href="${escape(p.url)}" target="_blank" rel="noopener noreferrer">${escape(p.title)}</a><div class="problem-meta"><span class="problem-id">${escape(p.id.toUpperCase().replace('ABC', 'ABC '))}</span>${p.topics.map(t => `<span class="topic-tag">${escape(t)}</span>`).join('')}</div></td><td><span class="source-name">${escape(p.platform)}${p.origin !== p.platform && p.origin !== '国外 OI' ? ` · ${escape(p.origin)}` : ''}</span><span class="contest-name">${escape(p.contest)} · ${p.year === null ? '年份未知' : p.year}</span></td><td class="difficulty-cell"><span class="rating-badge ${tone}">${p.estimate}</span></td></tr>`;
    }).join('');
    $('emptyState').hidden = problems.length > 0;
    $('footerCount').textContent = `共 ${D.problems.length} 道题目`;
  }
  $('topicNav').addEventListener('click', event => { const button = event.target.closest('[data-topic]'); if (button) apply(button.dataset.topic); });
  $('problemRows').addEventListener('change', event => {
    const input = event.target.closest('[data-complete]'); if (!input || !knownIDs.has(input.dataset.complete)) return;
    const id = input.dataset.complete; completed = completed.filter(value => value !== id); if (input.checked) completed.push(id);
    const saved = E.writeJSON(storage, KEYS.completed, completed); render(); if (!saved) toast('完成状态已更新，但当前浏览器无法保存。');
    $('problemRows').querySelector(`[data-complete="${id}"]`)?.focus({ preventScroll: true });
  });
  window.addEventListener('popstate', () => { state = E.normalize(E.fromQuery(window.location.search) || {}); render(); });
  window.addEventListener('storage', event => { if (event.key === KEYS.completed || event.key === null) { completed = readCompleted(); render(); } });
  render();
})();
