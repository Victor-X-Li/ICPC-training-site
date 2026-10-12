(function(root) {
  const DATA = typeof module !== 'undefined' && module.exports ? require('./problems.js') : root.ProblemData;
  const defaults=()=>({topic:'all'});
  function normalize(input={}) {
    const topic=DATA.topicAliases[input?.topic]||input?.topic;
    return {topic:DATA.topics.includes(topic)?topic:'all'};
  }
  function eligible(p) {
    const banned=['rollback','persistent','primitive-root','multiplicative-order','dirichlet-convolution','mobius-inversion','advanced-number-theory-sieve','generating-functions','prufer','lucas','binomial-inversion','burnside'];
    if((p.requirements||[]).some(x=>banned.includes(x))) return false;
    return !(p.topics.includes('并查集')&&p.estimate<1600);
  }
  function select(problems,input={}) {
    const s=normalize(input);
    return problems.filter(p=>eligible(p)&&(s.topic==='all'||p.topics.includes(s.topic)))
      .sort((a,b)=>a.estimate-b.estimate||a.id.localeCompare(b.id));
  }
  function fromQuery(search) {
    const p=new URLSearchParams(search);
    return p.has('topic')?normalize({topic:p.get('topic')}):null;
  }
  function toQuery(input) { return `?topic=${encodeURIComponent(normalize(input).topic)}`; }
  function readJSON(storage,key,fallback) {try{const value=storage?.getItem(key);return value?JSON.parse(value):fallback;}catch{return fallback;}}
  function writeJSON(storage,key,value) {try{if(!storage)return false;storage.setItem(key,JSON.stringify(value));return true;}catch{return false;}}
  const api={defaults,normalize,eligible,select,fromQuery,toQuery,readJSON,writeJSON};
  if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.ProblemEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
