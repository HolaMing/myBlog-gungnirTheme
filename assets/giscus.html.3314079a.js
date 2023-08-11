import{_ as p,r as o,o as l,c,a as e,w as a,d as i,b as s,e as n}from"./app.3b9e4cfa.js";const u={},d=i('<p><a href="https://www.npmjs.com/package/vuepress-plugin-giscus/v/next" target="_blank"><img src="https://img.shields.io/npm/v/vuepress-plugin-giscus/next.svg?style=flat-square&amp;logo=npm" style="display:inline;margin:0 4px 0 0;" alt="npm"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/giscus" target="_blank"><img src="https://img.shields.io/badge/GitHub-vuepress--plugin--giscus-26A2FF?style=flat-square&amp;logo=github" style="display:inline;margin:0 4px 0 0;" alt="github"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/giscus/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display:inline;margin:0 4px 0 0;" alt="license"></a></p><p>Plugin <code>vuepress-plugin-giscus@next</code> for adding comment system <a href="https://github.com/giscus/giscus" target="_blank" rel="noopener noreferrer">Giscus</a> powered by <a href="https://docs.github.com/en/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a> to <a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress 2</a>.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2>',3),g=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"pnpm"),n(),s("span",{class:"token function"},"install"),n(` vuepress-plugin-giscus@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),m=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"yarn"),n(),s("span",{class:"token function"},"add"),n(` vuepress-plugin-giscus@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),h=s("div",{class:"language-bash ext-sh line-numbers-mode"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"npm"),n(),s("span",{class:"token function"},"install"),n(` vuepress-plugin-giscus@next
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),b=i(`<h2 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation" aria-hidden="true">#</a> Preparation</h2><p>First you need to:</p><ul><li>Create a public Github repository and <a href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/enabling-or-disabling-github-discussions-for-a-repository" target="_blank" rel="noopener noreferrer">enable Discussions</a> for it</li><li>Install <a href="https://github.com/apps/giscus" target="_blank" rel="noopener noreferrer">Giscus app</a></li><li>Browse <a href="https://giscus.app/" target="_blank" rel="noopener noreferrer">Giscus&#39;s website</a> and generate your repo id, category id and other things on the website</li></ul><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>Add the plugin to your <code>.vuepress/config.js</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> giscusPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;vuepress-plugin-giscus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">giscusPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">repo</span><span class="token operator">:</span> <span class="token string">&quot;[repo]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// required, string, format: user_name/repo_name</span>
      <span class="token literal-property property">repoId</span><span class="token operator">:</span> <span class="token string">&quot;[repo id]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// required, string, generate it on Giscus&#39;s website</span>
      <span class="token literal-property property">category</span><span class="token operator">:</span> <span class="token string">&quot;[category name]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// required, string</span>
      <span class="token literal-property property">categoryId</span><span class="token operator">:</span> <span class="token string">&quot;[category id]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// required, string, generate it on Giscus&#39;s website</span>
      <span class="token literal-property property">mapping</span><span class="token operator">:</span> <span class="token string">&quot;[page &lt;-&gt; discussion mapping]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// optional, string, default=&quot;title&quot;</span>
      <span class="token literal-property property">reactionsEnabled</span><span class="token operator">:</span> <span class="token string">&quot;[enable reactions or not?]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// optional, boolean, default=true</span>
      <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&quot;[theme]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// optional, string, default=&quot;light&quot;</span>
      <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&quot;[language]&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// optional, string, default=&quot;auto&quot; (follow the site&#39;s language, fell to &quot;en&quot; if your site&#39;s language is not supported by Giscus)</span>
      <span class="token literal-property property">lazyLoad</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// optional, boolean, default=false (if true, loading of Giscus will be deferred until the user scrolls near the comments container)</span>
      <span class="token literal-property property">crossorigin</span><span class="token operator">:</span> <span class="token string">&quot;[crossorigin]&quot;</span>  <span class="token comment">// optional, string, default=&quot;anonymous&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="component" tabindex="-1"><a class="header-anchor" href="#component" aria-hidden="true">#</a> Component</h2><p>After that, <code>Giscus</code> will have already been registered as a Vue component, so you can use it in Vuepress directly. You can also change Giscus&#39; theme, language and enablement on-the-fly by pass props to the component (<a href="https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#parent-to-giscus-message-events" target="_blank" rel="noopener noreferrer">how it works</a>):</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;Giscus :theme=&quot;theme&quot; :lang=&quot;lang&quot; :reactionsEnabled=&quot;reactionsEnabled&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2><p><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/giscus/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a></p>`,11);function k(v,f){const t=o("CodeGroupItem"),r=o("CodeGroup");return l(),c("div",null,[d,e(r,null,{default:a(()=>[e(t,{title:"PNPM",active:""},{default:a(()=>[g]),_:1}),e(t,{title:"YARN",active:""},{default:a(()=>[m]),_:1}),e(t,{title:"NPM"},{default:a(()=>[h]),_:1})]),_:1}),b])}var q=p(u,[["render",k],["__file","giscus.html.vue"]]);export{q as default};
