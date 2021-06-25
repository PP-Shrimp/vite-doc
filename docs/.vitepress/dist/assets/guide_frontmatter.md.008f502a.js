import{o as e,c as a,a as n}from"./app.42b3b703.js";const t='{"title":"Frontmatter","description":"","frontmatter":{},"headers":[{"level":2,"title":"Alternative frontmatter Formats","slug":"alternative-frontmatter-formats"},{"level":2,"title":"Predefined Variables","slug":"predefined-variables"},{"level":3,"title":"title","slug":"title"},{"level":3,"title":"head","slug":"head"},{"level":3,"title":"navbar","slug":"navbar"},{"level":3,"title":"sidebar","slug":"sidebar"},{"level":3,"title":"editLink","slug":"editlink"}],"relativePath":"guide/frontmatter.md","lastUpdated":1624440457687}',s={},o=n('<h1 id="frontmatter"><a class="header-anchor" href="#frontmatter" aria-hidden="true">#</a> Frontmatter</h1><p>Any Markdown file that contains a YAML frontmatter block will be processed by <a href="https://github.com/jonschlinkert/gray-matter" target="_blank" rel="noopener noreferrer">gray-matter</a>. The frontmatter must be at the top of the Markdown file, and must take the form of valid YAML set between triple-dashed lines. Example:</p><div class="language-md"><pre><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Docs with VitePress\n<span class="token key atrule">editLink</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="token punctuation">---</span></span>\n</code></pre></div><p>Between the triple-dashed lines, you can set <a href="#predefined-variables">predefined variables</a>, or even create custom ones of your own. These variables can be used via the special <code>$frontmatter</code> variable.</p><p>Here’s an example of how you could use it in your Markdown file:</p><div class="language-md"><pre><code><span class="token front-matter-block"><span class="token punctuation">---</span>\n<span class="token font-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Docs with VitePress\n<span class="token key atrule">editLink</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="token punctuation">---</span></span>\n\n<span class="token title important"><span class="token punctuation">#</span> {{ $frontmatter.title }}</span>\n\nGuide content\n</code></pre></div><h2 id="alternative-frontmatter-formats"><a class="header-anchor" href="#alternative-frontmatter-formats" aria-hidden="true">#</a> Alternative frontmatter Formats</h2><p>VitePress also supports JSON frontmatter syntax, starting and ending in curly braces:</p><div class="language-json"><pre><code>---\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Blogging Like a Hacker&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;editLink&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span>\n---\n</code></pre></div><h2 id="predefined-variables"><a class="header-anchor" href="#predefined-variables" aria-hidden="true">#</a> Predefined Variables</h2><h3 id="title"><a class="header-anchor" href="#title" aria-hidden="true">#</a> title</h3><ul><li>Type: <code>string</code></li><li>Default: <code>h1_title || siteData.title</code></li></ul><p>Title of the current page.</p><h3 id="head"><a class="header-anchor" href="#head" aria-hidden="true">#</a> head</h3><ul><li>Type: <code>array</code></li><li>Default: <code>undefined</code></li></ul><p>Specify extra head tags to be injected:</p><div class="language-yaml"><pre><code><span class="token punctuation">---</span>\n<span class="token key atrule">head</span><span class="token punctuation">:</span>\n  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> description\n      <span class="token key atrule">content</span><span class="token punctuation">:</span> hello\n  <span class="token punctuation">-</span> <span class="token punctuation">-</span> meta\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> keywords\n      <span class="token key atrule">content</span><span class="token punctuation">:</span> super duper SEO\n<span class="token punctuation">---</span>\n\n</code></pre></div><h3 id="navbar"><a class="header-anchor" href="#navbar" aria-hidden="true">#</a> navbar</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>undefined</code></li></ul><p>You can disable the navbar on a specific page with <code>navbar: false</code></p><h3 id="sidebar"><a class="header-anchor" href="#sidebar" aria-hidden="true">#</a> sidebar</h3><ul><li>Type: <code>boolean|&#39;auto&#39;</code></li><li>Default: <code>undefined</code></li></ul><p>You can decide to show the sidebar on a specific page with <code>sidebar: auto</code> or disable it with <code>sidebar: false</code></p><h3 id="editlink"><a class="header-anchor" href="#editlink" aria-hidden="true">#</a> editLink</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>undefined</code></li></ul><p>Define if this page should include an edit link.</p>',26);s.render=function(n,t,s,l,i,r){return e(),a("div",null,[o])};export default s;export{t as __pageData};
