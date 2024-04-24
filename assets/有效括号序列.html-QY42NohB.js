import{_ as a,r as p,o as t,c as e,b as n,d as o,e as c,a as l}from"./app-PRfn_fru.js";const i={},u=l(`<h1 id="有效括号序列" tabindex="-1"><a class="header-anchor" href="#有效括号序列"><span>有效括号序列</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>给出一个仅包含字符&#39;(&#39;,&#39;)&#39;,&#39;{&#39;,&#39;}&#39;,&#39;[&#39;和&#39;]&#39;,的字符串，判断给出的字符串是否是合法的括号序列 括号必须以正确的顺序关闭，&quot;()&quot;和&quot;()[]{}&quot;都是合法的括号序列，但&quot;(]&quot;和&quot;([)]&quot;不合法。</p><p>数据范围：字符串长度 0≤n≤10000</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>利用栈结构，不符合对称就入栈，符合就出栈</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token keyword">char</span> <span class="token function">Transform</span><span class="token punctuation">(</span><span class="token keyword">char</span> a<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span> a<span class="token operator">==</span><span class="token char">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token char">&#39;(&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span> a<span class="token operator">==</span><span class="token char">&#39;]&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token char">&#39;[&#39;</span><span class="token punctuation">;</span>
              <span class="token keyword">if</span><span class="token punctuation">(</span> a<span class="token operator">==</span> <span class="token char">&#39;}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token char">&#39;{&#39;</span><span class="token punctuation">;</span>
              <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

bool <span class="token function">isValid</span><span class="token punctuation">(</span> <span class="token keyword">char</span> <span class="token operator">*</span>s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>stack<span class="token punctuation">;</span>
    stack <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token function">strlen</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token operator">*</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//其实没必要和这个一样长</span>
    <span class="token keyword">int</span> stackTop <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token function">strlen</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token char">&#39;(&#39;</span><span class="token operator">||</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token char">&#39;[&#39;</span><span class="token operator">||</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token char">&#39;{&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// 入栈</span>
            stack<span class="token punctuation">[</span>stackTop<span class="token operator">++</span><span class="token punctuation">]</span><span class="token operator">=</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token char">&#39;)&#39;</span><span class="token operator">||</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token char">&#39;]&#39;</span><span class="token operator">||</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token char">&#39;}&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>stackTop<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token function">Transform</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">==</span>stack<span class="token punctuation">[</span>stackTop<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
               stackTop<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>stackTop<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r={id:"题目网站",tabindex:"-1"},k={class:"header-anchor",href:"#题目网站"},d={href:"https://www.nowcoder.com/practice/37548e94a270412c8b9fb85643c8ccc2?tpId=308&tqId=726&ru=/exam/oj&qru=/ta/algorithm-start/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308",target:"_blank",rel:"noopener noreferrer"};function v(m,h){const s=p("ExternalLinkIcon");return t(),e("div",null,[u,n("h2",r,[n("a",k,[n("span",null,[n("a",d,[o("题目网站"),c(s)])])])])])}const f=a(i,[["render",v],["__file","有效括号序列.html.vue"]]),w=JSON.parse('{"path":"/algorithm/stack/%E6%9C%89%E6%95%88%E6%8B%AC%E5%8F%B7%E5%BA%8F%E5%88%97.html","title":"有效括号序列","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":2,"title":"题目网站","slug":"题目网站","link":"#题目网站","children":[]}],"git":{},"filePathRelative":"algorithm/stack/有效括号序列.md"}');export{f as comp,w as data};
