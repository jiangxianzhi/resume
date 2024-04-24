import{_ as n,o as s,c as a,a as p}from"./app-CrKXQHLj.js";const t={},o=p(`<h1 id="穷举法" tabindex="-1"><a class="header-anchor" href="#穷举法"><span>穷举法</span></a></h1><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题：</span></a></h2><p>某人准备跑20圈来锻炼自己的身体，他准备分多次(&gt;1)跑完，每次都跑正整数圈，然后休息下再继续跑。 为了有效地提高自己的体能，他决定每次跑的圈数都必须比上次跑的多 设第一次圈数不能小于0，那么请问他可以有多少种跑完这 20 圈的方案? 输出方案总数，以及每种方案的排序。（比如1,19/ 1,2,17 都是有效方案）</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>穷举法</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;malloc.h&gt;</span></span>
<span class="token keyword">void</span> <span class="token function">runningSolution</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">*</span>array<span class="token punctuation">,</span><span class="token keyword">int</span> count<span class="token punctuation">,</span><span class="token keyword">int</span> sum<span class="token punctuation">,</span><span class="token keyword">int</span><span class="token operator">*</span> num<span class="token punctuation">)</span><span class="token punctuation">{</span>
sum <span class="token operator">+=</span>i<span class="token punctuation">;</span>
array<span class="token punctuation">[</span>count<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>sum <span class="token operator">&gt;</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>sum<span class="token operator">==</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>count<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span>array<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
num<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d &quot;</span><span class="token punctuation">,</span>num<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> k <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>k<span class="token operator">&lt;=</span><span class="token number">20</span><span class="token operator">-</span>i<span class="token punctuation">;</span>k<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">runningSolution</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span>array<span class="token punctuation">,</span>count<span class="token punctuation">,</span>sum<span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">int</span> num<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
num<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">20</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> <span class="token operator">*</span>tmpArray <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token function">malloc</span><span class="token punctuation">(</span><span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span><span class="token number">20</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        tmpArray<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
        <span class="token function">runningSolution</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>tmpArray<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),e=[o];function c(l,u){return s(),a("div",null,e)}const k=n(t,[["render",c],["__file","穷举法.html.vue"]]),r=JSON.parse('{"path":"/algorithm/others/%E7%A9%B7%E4%B8%BE%E6%B3%95.html","title":"穷举法","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"问题：","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]}],"git":{},"filePathRelative":"algorithm/others/穷举法.md"}');export{k as comp,r as data};
