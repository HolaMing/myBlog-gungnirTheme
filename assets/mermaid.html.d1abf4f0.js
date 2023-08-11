import{_ as p,r as i,o as r,c as o,a as n,w as s,b as e,d as l,e as a}from"./app.3b9e4cfa.js";const u={},m=l('<p><a href="https://www.npmjs.com/package/@renovamen/vuepress-plugin-mermaid/v/next" target="_blank"><img src="https://img.shields.io/npm/v/@renovamen/vuepress-plugin-mermaid/next.svg?style=flat-square&amp;logo=npm" style="display:inline;margin:0 4px 0 0;" alt="npm"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/main/packages/plugins/mermaid" target="_blank"><img src="https://img.shields.io/badge/GitHub-@renovamen/vuepress--plugin--mermaid-26A2FF?style=flat-square&amp;logo=github" style="display:inline;margin:0 4px 0 0;" alt="github"></a><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/mermaid/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" style="display:inline;margin:0 4px 0 0;" alt="license"></a></p><p>Plugin <code>@renovamen/vuepress-plugin-mermaid@next</code> for adding <a href="https://mermaid-js.github.io" target="_blank" rel="noopener noreferrer">Mermaid</a> to <a href="https://v2.vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">VuePress 2</a> to create complex diagrams in Markdown.</p><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2>',3),h=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"pnpm"),a(),e("span",{class:"token function"},"install"),a(` @renovamen/vuepress-plugin-mermaid@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"yarn"),a(),e("span",{class:"token function"},"add"),a(` @renovamen/vuepress-plugin-mermaid@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),v=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"npm"),a(),e("span",{class:"token function"},"install"),a(` @renovamen/vuepress-plugin-mermaid@next
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),f=l(`<p>Then add it to your <code>.vuepress/config.js</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> mermaidPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;@renovamen/vuepress-plugin-mermaid&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">mermaidPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> token</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&quot;mermaidjs&quot;</code></p></li><li><p>Details: Custom token of the fenced code block.</p></li></ul><h3 id="theme" tabindex="-1"><a class="header-anchor" href="#theme" aria-hidden="true">#</a> theme</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&quot;default&quot;</code></p></li><li><p>Details: Theme (<a href="https://github.com/mermaid-js/mermaid/tree/develop/src/themes" target="_blank" rel="noopener noreferrer">here</a> are all themes supported by Mermaid)</p></li></ul><h3 id="darktheme" tabindex="-1"><a class="header-anchor" href="#darktheme" aria-hidden="true">#</a> darkTheme</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&quot;dark&quot;</code></p></li><li><p>Details: Theme for dark mode. Only works when <a href="#darkselector">darkSelector</a> and <a href="#darkclass">darkClass</a> are set.</p></li></ul><h3 id="darkselector" tabindex="-1"><a class="header-anchor" href="#darkselector" aria-hidden="true">#</a> darkSelector</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>undefined</code></p></li><li><p>Details</p><ul><li>A CSS selector for the plugin to select an element and check if the dark mode is enabled by <a href="#darkclass">darkClass</a></li><li>For default theme and Gungnir theme, this option should be <code>html</code></li></ul></li></ul><h3 id="darkclass" tabindex="-1"><a class="header-anchor" href="#darkclass" aria-hidden="true">#</a> darkClass</h3><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>undefined</code></p></li><li><p>Details</p><ul><li>A class name for the plugin to check if the dark mode is enabled</li><li>For default theme and Gungnir theme, this option should be <code>dark</code></li></ul></li></ul>`,13),b={class:"custom-container tip"},k={viewBox:"0 0 25 25",xmlns:"http://www.w3.org/2000/svg","xml:space":"preserve",style:{"fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2"}},_=e("path",{d:"M297.6 258.73H296c-59.47.87-110.69 51.45-111.83 110.43-.626 36.485 16.525 71.085 45.94 92.68 17.86 13.18 29.88 33.56 33.77 56.42h67.62c4-22.82 16.13-43.3 34.16-56.74 28.589-21.097 45.496-54.587 45.496-90.118 0-30.03-12.078-58.833-33.496-79.882a113.133 113.133 0 0 0-80.06-32.79ZM265.19 550.7v26.6c0 4.84 1.17 6.43 1.17 6.43l63.72-.59V550.7h-64.89Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),x=e("path",{d:"M297.64 123.3C133.26 123.3 0 256.56 0 420.94s133.26 297.63 297.64 297.63 297.63-133.25 297.63-297.63S462 123.3 297.64 123.3ZM385 487.57c-14.11 10.48-22.51 28.09-22.51 47.14v48.43c-.016 17.792-14.648 32.428-32.44 32.45h-64.86c-15.6 0-32.44-12-32.44-38.29v-42.82c0-19-8.21-36.4-21.93-46.52-37.882-27.85-59.959-72.44-59.14-119.45 1.46-77.24 66-141.09 143.81-142.22 38.87.19 76.89 14.37 105 42.11a143.764 143.764 0 0 1 43.14 103c-.159 45.761-21.911 88.86-58.63 116.17Z",style:{fill:"#48b884","fill-rule":"nonzero"},transform:"matrix(.042 0 0 .042 0 -5.178)"},null,-1),y=[_,x],w=e("p",{class:"custom-container-title"},"TIP",-1),C=e("p",null,[a("The default theme and Gungnir theme will add a class name "),e("code",null,"dark"),a(" to the "),e("code",null,"html"),a(" element to enable dark mode.")],-1),T=e("p",null,"Click the mode switcher in the lower right corner to see what happens!",-1),q=e("h2",{id:"usage",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#usage","aria-hidden":"true"},"#"),a(" Usage")],-1),M=e("p",null,[a("The token info of the code block should be "),e("code",null,"mermaidjs"),a(" (or "),e("code",null,"options.token"),a(" if you set), for example:")],-1),j=l(`<details class="custom-container details"><summary>Code</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\`\`\`mermaidjs
sequenceDiagram
  Alice-&gt;John: Hello John, how are you?
  loop Every minute
    John--&gt;Alice: Great!
  end
\`\`\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>Refer to the <a href="https://mermaid-js.github.io" target="_blank" rel="noopener noreferrer">documentation of Mermaid</a> for more information.</p><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2><p><a href="https://github.com/Renovamen/vuepress-theme-gungnir/blob/main/packages/plugins/mermaid/LICENSE" target="_blank" rel="noopener noreferrer">MIT</a></p>`,4);function D(G,N){const t=i("CodeGroupItem"),d=i("CodeGroup"),c=i("Mermaid");return r(),o("div",null,[m,n(d,null,{default:s(()=>[n(t,{title:"PNPM",active:""},{default:s(()=>[h]),_:1}),n(t,{title:"YARN",active:""},{default:s(()=>[g]),_:1}),n(t,{title:"NPM"},{default:s(()=>[v]),_:1})]),_:1}),f,e("div",b,[(r(),o("svg",k,y)),w,C,T]),q,M,n(c,{id:"mermaid_64a56f74","data-code":`sequenceDiagram
  Alice->John: Hello John, how are you?
  loop Every minute
    John-->Alice: Great!
  end`}),j])}var I=p(u,[["render",D],["__file","mermaid.html.vue"]]);export{I as default};
