import{_ as a,r as p,o as t,c as o,b as n,d as e,e as c,a as l}from"./app-CrKXQHLj.js";const i="/assets/image-CoB7ANZN.png",r={},u=l('<h1 id="ranko手表枚举法" tabindex="-1"><a class="header-anchor" href="#ranko手表枚举法"><span>ranko手表枚举法</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>ranko 的手表坏了，正常应该显示 xx:xx 的形式（4 个数字），比如下午 1 点半应该显示 13:30 ，但现在经常会有一些数字有概率无法显示。 ranko 在 t1t1​ 时刻看了下时间，过了一段时间在 t2t2​ 时刻看了下时间。她想知道， t1t1​ 和 t2t2​ 这两个时刻之间相距的时间的最大值和最小值是多少？ 保证 t1t1​ 在 t2t2​ 之前（且 t1t1​ 和 t2t2​ 不等）。t1t1​和 t2t2​在同一天的 00:00 到 23:59 之间。 <br><img src="'+i+`" alt="alt text"></p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>反向试探法(反向穷举法，枚举法），从0000到23*60+59，看看这个时间适不适合 18：0？ 或者2？：1？的规则 ，适合就加入分别对应的数组，然后遍历两个数组找到最大最小值。</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span> time1<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> time2<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> time1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s&quot;</span><span class="token punctuation">,</span> time2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 如果符合time1的加入array1</span>
<span class="token comment">// time2的加入time2</span>
    <span class="token keyword">int</span> array1<span class="token punctuation">[</span><span class="token number">10000</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> p1 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> array2<span class="token punctuation">[</span><span class="token number">10000</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> p2 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> MaxTime <span class="token operator">=</span> <span class="token number">23</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">+</span> <span class="token number">59</span><span class="token punctuation">;</span> <span class="token comment">//最大时间</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> MaxTime<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> hour <span class="token operator">=</span> i <span class="token operator">/</span> <span class="token number">60</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> minu <span class="token operator">=</span> i <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">;</span>
        <span class="token comment">// 每个位置符合</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>hour <span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token char">&#39;0&#39;</span> <span class="token operator">==</span> time1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> time1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
                <span class="token punctuation">(</span>hour <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token char">&#39;0&#39;</span> <span class="token operator">==</span> time1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> time1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
                <span class="token punctuation">(</span>minu <span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token char">&#39;0&#39;</span> <span class="token operator">==</span> time1<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">||</span> time1<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
                <span class="token punctuation">(</span>minu <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token char">&#39;0&#39;</span> <span class="token operator">==</span> time1<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">||</span> time1<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// printf(&quot;%d%d:%d%d&quot;,hour/10,hour%10,minu/10,minu%10);</span>
            array1<span class="token punctuation">[</span>p1<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>hour <span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token char">&#39;0&#39;</span> <span class="token operator">==</span> time2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> time2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
                <span class="token punctuation">(</span>hour <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token char">&#39;0&#39;</span> <span class="token operator">==</span> time2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> time2<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
                <span class="token punctuation">(</span>minu <span class="token operator">/</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token char">&#39;0&#39;</span> <span class="token operator">==</span> time2<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">||</span> time2<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
                <span class="token punctuation">(</span>minu <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token char">&#39;0&#39;</span> <span class="token operator">==</span> time2<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">||</span> time2<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// printf(&quot;%d%d:%d%d&quot;,hour/10,hour%10,minu/10,minu%10);</span>
            array2<span class="token punctuation">[</span>p2<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>


    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> min <span class="token operator">=</span> <span class="token number">1000000</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> p1<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> p2<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>array2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> array1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                min <span class="token operator">=</span> <span class="token punctuation">(</span>array2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> array1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> min <span class="token operator">?</span> <span class="token punctuation">(</span>array2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> array1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> min<span class="token punctuation">;</span>
                max <span class="token operator">=</span> <span class="token punctuation">(</span>array2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> array1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> max <span class="token operator">?</span> <span class="token punctuation">(</span>array2<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> array1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> max<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// else if (array1[i]&gt;array2[j]){</span>
            <span class="token comment">//  min=(array1[i]-array2[j])&lt;min?(array1[i]-array2[j]):min;</span>
            <span class="token comment">//     max = (array1[i]-array2[j])&gt;max?(array1[i]-array2[j]):max;</span>
            <span class="token comment">// }</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d&quot;</span><span class="token punctuation">,</span> min<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),k={id:"题目网站",tabindex:"-1"},m={class:"header-anchor",href:"#题目网站"},d={href:"https://www.nowcoder.com/practice/37275e85ae7c4453920eae6b9f7f45fc?tpId=308&tqId=1714944&ru=/exam/oj&qru=/ta/algorithm-start/question-ranking&sourceUrl=%2Fexam%2Foj",target:"_blank",rel:"noopener noreferrer"};function v(b,h){const s=p("ExternalLinkIcon");return t(),o("div",null,[u,n("h2",k,[n("a",m,[n("span",null,[n("a",d,[e("题目网站"),c(s)])])])])])}const f=a(r,[["render",v],["__file","ranko手表枚举法.html.vue"]]),_=JSON.parse('{"path":"/algorithm/others/ranko%E6%89%8B%E8%A1%A8%E6%9E%9A%E4%B8%BE%E6%B3%95.html","title":"ranko手表枚举法","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":2,"title":"题目网站","slug":"题目网站","link":"#题目网站","children":[]}],"git":{},"filePathRelative":"algorithm/others/ranko手表枚举法.md"}');export{f as comp,_ as data};
