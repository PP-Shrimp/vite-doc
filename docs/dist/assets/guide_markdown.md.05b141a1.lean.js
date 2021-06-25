import{o as n,c as e,e as t,b as s,d as l}from"./app.74d22259.js";var a="/assets/line-numbers-mobile.f5ca96ee.gif",o="/assets/line-numbers-desktop.cc304762.png";const i='{"title":"Markdown Extensions","description":"","frontmatter":{"sidebarDepth":3},"headers":[{"level":2,"title":"Header Anchors","slug":"header-anchors"},{"level":2,"title":"Links","slug":"links"},{"level":3,"title":"Internal Links","slug":"internal-links"},{"level":3,"title":"Page Suffix","slug":"page-suffix"},{"level":3,"title":"External Links","slug":"external-links"},{"level":2,"title":"Frontmatter","slug":"frontmatter"},{"level":2,"title":"GitHub-Style Tables","slug":"github-style-tables"},{"level":2,"title":"Emoji 🎉","slug":"emoji"},{"level":2,"title":"Table of Contents","slug":"table-of-contents"},{"level":2,"title":"Custom Containers","slug":"custom-containers"},{"level":3,"title":"Default Title","slug":"default-title"},{"level":3,"title":"Custom Title","slug":"custom-title"},{"level":2,"title":"Syntax Highlighting in Code Blocks","slug":"syntax-highlighting-in-code-blocks"},{"level":2,"title":"Line Highlighting in Code Blocks","slug":"line-highlighting-in-code-blocks"},{"level":2,"title":"Line Numbers","slug":"line-numbers"},{"level":2,"title":"Import Code Snippets","slug":"import-code-snippets"},{"level":2,"title":"Advanced Configuration","slug":"advanced-configuration"}],"relativePath":"guide/markdown.md","lastUpdated":1624515286289}',r={},u=s("h1",{id:"markdown-extensions"},[s("a",{class:"header-anchor",href:"#markdown-extensions","aria-hidden":"true"},"#"),l(" Markdown Extensions")],-1),c=s("h2",{id:"header-anchors"},[s("a",{class:"header-anchor",href:"#header-anchors","aria-hidden":"true"},"#"),l(" Header Anchors")],-1),p=s("p",null,[l("Headers automatically get anchor links applied. Rendering of anchors can be configured using the "),s("code",null,"markdown.anchor"),l(" option.")],-1),d=s("h2",{id:"links"},[s("a",{class:"header-anchor",href:"#links","aria-hidden":"true"},"#"),l(" Links")],-1),g=s("h3",{id:"internal-links"},[s("a",{class:"header-anchor",href:"#internal-links","aria-hidden":"true"},"#"),l(" Internal Links")],-1),h=s("p",null,[l("Internal links are converted to router link for SPA navigation. Also, every "),s("code",null,"index.md"),l(" contained in each sub-directory will automatically be converted to "),s("code",null,"index.html"),l(", with corresponding URL "),s("code",null,"/"),l(".")],-1),k=s("p",null,"For example, given the following directory structure:",-1),m=s("div",{class:"language-"},[s("pre",null,[s("code",null,".\n├─ index.md\n├─ foo\n│  ├─ index.md\n│  ├─ one.md\n│  └─ two.md\n└─ bar\n   ├─ index.md\n   ├─ three.md\n   └─ four.md\n")])],-1),f=s("p",null,[l("And providing you are in "),s("code",null,"foo/one.md"),l(":")],-1),b=s("div",{class:"language-md"},[s("pre",null,[s("code",null,[s("span",{class:"token url"},[l("["),s("span",{class:"token content"},"Home"),l("]("),s("span",{class:"token url"},"/"),l(")")]),l(),s("span",{class:"token comment"},"\x3c!-- sends the user to the root index.md --\x3e"),l("\n"),s("span",{class:"token url"},[l("["),s("span",{class:"token content"},"foo"),l("]("),s("span",{class:"token url"},"/foo/"),l(")")]),l(),s("span",{class:"token comment"},"\x3c!-- sends the user to index.html of directory foo --\x3e"),l("\n"),s("span",{class:"token url"},[l("["),s("span",{class:"token content"},"foo heading"),l("]("),s("span",{class:"token url"},"./#heading"),l(")")]),l(),s("span",{class:"token comment"},"\x3c!-- anchors user to a heading in the foo index file --\x3e"),l("\n"),s("span",{class:"token url"},[l("["),s("span",{class:"token content"},"bar - three"),l("]("),s("span",{class:"token url"},"../bar/three"),l(")")]),l(),s("span",{class:"token comment"},"\x3c!-- you can omit extention --\x3e"),l("\n"),s("span",{class:"token url"},[l("["),s("span",{class:"token content"},"bar - three"),l("]("),s("span",{class:"token url"},"../bar/three.md"),l(")")]),l(),s("span",{class:"token comment"},"\x3c!-- you can append .md --\x3e"),l("\n"),s("span",{class:"token url"},[l("["),s("span",{class:"token content"},"bar - four"),l("]("),s("span",{class:"token url"},"../bar/four.html"),l(")")]),l(),s("span",{class:"token comment"},"\x3c!-- or you can append .html --\x3e"),l("\n")])])],-1),v=s("h3",{id:"page-suffix"},[s("a",{class:"header-anchor",href:"#page-suffix","aria-hidden":"true"},"#"),l(" Page Suffix")],-1),x=s("p",null,[l("Pages and internal links get generated with the "),s("code",null,".html"),l(" suffix by default.")],-1),y=s("h3",{id:"external-links"},[s("a",{class:"header-anchor",href:"#external-links","aria-hidden":"true"},"#"),l(" External Links")],-1),w=s("p",null,[l("Outbound links automatically get "),s("code",null,'target="_blank" rel="noopener noreferrer"'),l(":")],-1),j=s("ul",null,[s("li",null,[s("a",{href:"https://vuejs.org",target:"_blank",rel:"noopener noreferrer"},"vuejs.org")]),s("li",null,[s("a",{href:"https://github.com/vuejs/vitepress",target:"_blank",rel:"noopener noreferrer"},"VitePress on GitHub")])],-1),C=s("h2",{id:"frontmatter"},[s("a",{class:"header-anchor",href:"#frontmatter","aria-hidden":"true"},"#"),l(" Frontmatter")],-1),T=s("p",null,[s("a",{href:"https://jekyllrb.com/docs/frontmatter/",target:"_blank",rel:"noopener noreferrer"},"YAML frontmatter"),l(" is supported out of the box:")],-1),I=s("div",{class:"language-yaml"},[s("pre",null,[s("code",null,[s("span",{class:"token punctuation"},"---"),l("\n"),s("span",{class:"token key atrule"},"title"),s("span",{class:"token punctuation"},":"),l(" Blogging Like a Hacker\n"),s("span",{class:"token key atrule"},"lang"),s("span",{class:"token punctuation"},":"),l(" en"),s("span",{class:"token punctuation"},"-"),l("US\n"),s("span",{class:"token punctuation"},"---"),l("\n\n")])])],-1),H=s("p",null,"This data will be available to the rest of the page, along with all custom and theming components.",-1),L=s("p",null,[l("For more details, see "),s("a",{href:"./frontmatter.html"},"Frontmatter"),l(".")],-1),P=s("h2",{id:"github-style-tables"},[s("a",{class:"header-anchor",href:"#github-style-tables","aria-hidden":"true"},"#"),l(" GitHub-Style Tables")],-1),A=s("p",null,[s("strong",null,"Input")],-1),S=s("div",{class:"language-"},[s("pre",null,[s("code",null,"| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n")])],-1),O=s("p",null,[s("strong",null,"Output")],-1),_=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Tables"),s("th",{style:{"text-align":"center"}},"Are"),s("th",{style:{"text-align":"right"}},"Cool")])]),s("tbody",null,[s("tr",null,[s("td",null,"col 3 is"),s("td",{style:{"text-align":"center"}},"right-aligned"),s("td",{style:{"text-align":"right"}},"$1600")]),s("tr",null,[s("td",null,"col 2 is"),s("td",{style:{"text-align":"center"}},"centered"),s("td",{style:{"text-align":"right"}},"$12")]),s("tr",null,[s("td",null,"zebra stripes"),s("td",{style:{"text-align":"center"}},"are neat"),s("td",{style:{"text-align":"right"}},"$1")])])],-1),B=s("h2",{id:"emoji"},[s("a",{class:"header-anchor",href:"#emoji","aria-hidden":"true"},"#"),l(" Emoji 🎉")],-1),D=s("p",null,[s("strong",null,"Input")],-1),E=s("div",{class:"language-"},[s("pre",null,[s("code",null,":tada: :100:\n")])],-1),M=s("p",null,[s("strong",null,"Output")],-1),N=s("p",null,"🎉 💯",-1),V=s("p",null,[l("A "),s("a",{href:"https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json",target:"_blank",rel:"noopener noreferrer"},"list of all emojis"),l(" is available.")],-1),F=s("h2",{id:"table-of-contents"},[s("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),l(" Table of Contents")],-1),G=s("p",null,[s("strong",null,"Input")],-1),Y=s("div",{class:"language-"},[s("pre",null,[s("code",null,"[[toc]]\n")])],-1),$=s("p",null,[s("strong",null,"Output")],-1),z=s("p",null,[s("div",{class:"table-of-contents"},[s("ul",null,[s("li",null,[s("a",{href:"#header-anchors"},"Header Anchors")]),s("li",null,[s("a",{href:"#links"},"Links"),s("ul",null,[s("li",null,[s("a",{href:"#internal-links"},"Internal Links")]),s("li",null,[s("a",{href:"#page-suffix"},"Page Suffix")]),s("li",null,[s("a",{href:"#external-links"},"External Links")])])]),s("li",null,[s("a",{href:"#frontmatter"},"Frontmatter")]),s("li",null,[s("a",{href:"#github-style-tables"},"GitHub-Style Tables")]),s("li",null,[s("a",{href:"#emoji"},"Emoji")]),s("li",null,[s("a",{href:"#table-of-contents"},"Table of Contents")]),s("li",null,[s("a",{href:"#custom-containers"},"Custom Containers"),s("ul",null,[s("li",null,[s("a",{href:"#default-title"},"Default Title")]),s("li",null,[s("a",{href:"#custom-title"},"Custom Title")])])]),s("li",null,[s("a",{href:"#syntax-highlighting-in-code-blocks"},"Syntax Highlighting in Code Blocks")]),s("li",null,[s("a",{href:"#line-highlighting-in-code-blocks"},"Line Highlighting in Code Blocks")]),s("li",null,[s("a",{href:"#line-numbers"},"Line Numbers")]),s("li",null,[s("a",{href:"#import-code-snippets"},"Import Code Snippets")]),s("li",null,[s("a",{href:"#advanced-configuration"},"Advanced Configuration")])])])],-1),R=s("p",null,[l("Rendering of the TOC can be configured using the "),s("code",null,"markdown.toc"),l(" option.")],-1),q=s("h2",{id:"custom-containers"},[s("a",{class:"header-anchor",href:"#custom-containers","aria-hidden":"true"},"#"),l(" Custom Containers")],-1),U=s("p",null,"Custom containers can be defined by their types, titles, and contents.",-1),W=s("h3",{id:"default-title"},[s("a",{class:"header-anchor",href:"#default-title","aria-hidden":"true"},"#"),l(" Default Title")],-1),J=s("p",null,[s("strong",null,"Input")],-1),K=s("div",{class:"language-md"},[s("pre",null,[s("code",null,"::: tip\nThis is a tip\n:::\n\n::: warning\nThis is a warning\n:::\n\n::: danger\nThis is a dangerous warning\n:::\n")])],-1),Q=s("p",null,[s("strong",null,"Output")],-1),X=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,"This is a tip")],-1),Z=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,"This is a warning")],-1),nn=s("div",{class:"danger custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,"This is a dangerous warning")],-1),en=s("h3",{id:"custom-title"},[s("a",{class:"header-anchor",href:"#custom-title","aria-hidden":"true"},"#"),l(" Custom Title")],-1),tn=s("p",null,[s("strong",null,"Input")],-1),sn=s("div",{class:"language-md"},[s("pre",null,[s("code",null,"::: danger STOP\nDanger zone, do not proceed\n:::\n")])],-1),ln=s("p",null,[s("strong",null,"Output")],-1),an=s("div",{class:"danger custom-block"},[s("p",{class:"custom-block-title"},"STOP"),s("p",null,"Danger zone, do not proceed")],-1),on=s("h2",{id:"syntax-highlighting-in-code-blocks"},[s("a",{class:"header-anchor",href:"#syntax-highlighting-in-code-blocks","aria-hidden":"true"},"#"),l(" Syntax Highlighting in Code Blocks")],-1),rn=s("p",null,[l("VitePress uses "),s("a",{href:"https://prismjs.com/",target:"_blank",rel:"noopener noreferrer"},"Prism"),l(" to highlight language syntax in Markdown code blocks, using coloured text. Prism supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:")],-1),un=s("p",null,[s("strong",null,"Input")],-1),cn=s("div",{class:"language-"},[s("pre",null,[s("code",null,"```js\nexport default {\n  name: 'MyComponent',\n  // ...\n}\n```\n")])],-1),pn=s("p",null,[s("strong",null,"Output")],-1),dn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token punctuation"},"{"),l("\n  name"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},"'MyComponent'"),l("\n  "),s("span",{class:"token comment"},"// ..."),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1),gn=s("p",null,[s("strong",null,"Input")],-1),hn=s("div",{class:"language-"},[s("pre",null,[s("code",null,'```html\n<ul>\n  <li v-for="todo in todos" :key="todo.id">\n    {{ todo.text }}\n  </li>\n</ul>\n```\n')])],-1),kn=s("p",null,[s("strong",null,"Output")],-1),mn=s("div",{class:"language-html"},[s("pre",null,[s("code",null,[s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("ul")]),s("span",{class:"token punctuation"},">")]),l("\n  "),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"<"),l("li")]),l(),s("span",{class:"token attr-name"},"v-for"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("todo in todos"),s("span",{class:"token punctuation"},'"')]),l(),s("span",{class:"token attr-name"},":key"),s("span",{class:"token attr-value"},[s("span",{class:"token punctuation attr-equals"},"="),s("span",{class:"token punctuation"},'"'),l("todo.id"),s("span",{class:"token punctuation"},'"')]),s("span",{class:"token punctuation"},">")]),l("{{ todo.text }}"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("li")]),s("span",{class:"token punctuation"},">")]),l("\n"),s("span",{class:"token tag"},[s("span",{class:"token tag"},[s("span",{class:"token punctuation"},"</"),l("ul")]),s("span",{class:"token punctuation"},">")]),l("\n")])])],-1),fn=s("p",null,[l("A "),s("a",{href:"https://prismjs.com/#languages-list",target:"_blank",rel:"noopener noreferrer"},"list of valid languages"),l(" is available on Prism’s site.")],-1),bn=s("h2",{id:"line-highlighting-in-code-blocks"},[s("a",{class:"header-anchor",href:"#line-highlighting-in-code-blocks","aria-hidden":"true"},"#"),l(" Line Highlighting in Code Blocks")],-1),vn=s("p",null,[s("strong",null,"Input")],-1),xn=s("div",{class:"language-"},[s("pre",null,[s("code",null,"```js{4}\nexport default {\n  data () {\n    return {\n      msg: 'Highlighted!'\n    }\n  }\n}\n```\n")])],-1),yn=s("p",null,[s("strong",null,"Output")],-1),wn=s("div",{class:"language-js"},[s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{class:"highlighted"}," "),s("br"),s("br"),s("br"),s("br")]),s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token punctuation"},"{"),l("\n  "),s("span",{class:"token function"},"data"),l(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token punctuation"},"{"),l("\n    "),s("span",{class:"token keyword"},"return"),l(),s("span",{class:"token punctuation"},"{"),l("\n      msg"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},"'Highlighted!'"),l("\n    "),s("span",{class:"token punctuation"},"}"),l("\n  "),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1),jn=s("p",null,"In addition to a single line, you can also specify multiple single lines, ranges, or both:",-1),Cn=s("ul",null,[s("li",null,[l("Line ranges: for example "),s("code",null,"{5-8}"),l(", "),s("code",null,"{3-10}"),l(", "),s("code",null,"{10-17}")]),s("li",null,[l("Multiple single lines: for example "),s("code",null,"{4,7,9}")]),s("li",null,[l("Line ranges and single lines: for example "),s("code",null,"{4,7-13,16,23-27,40}")])],-1),Tn=s("p",null,[s("strong",null,"Input")],-1),In=s("div",{class:"language-"},[s("pre",null,[s("code",null,"```js{1,4,6-7}\nexport default { // Highlighted\n  data () {\n    return {\n      msg: `Highlighted!\n      This line isn't highlighted,\n      but this and the next 2 are.`,\n      motd: 'VitePress is awesome',\n      lorem: 'ipsum',\n    }\n  }\n}\n```\n")])],-1),Hn=s("p",null,[s("strong",null,"Output")],-1),Ln=s("div",{class:"language-js"},[s("div",{class:"highlight-lines"},[s("div",{class:"highlighted"}," "),s("br"),s("br"),s("div",{class:"highlighted"}," "),s("br"),s("div",{class:"highlighted"}," "),s("div",{class:"highlighted"}," "),s("div",{class:"highlighted"}," "),s("br"),s("br"),s("br"),s("br")]),s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token punctuation"},"{"),l(),s("span",{class:"token comment"},"// Highlighted"),l("\n  "),s("span",{class:"token function"},"data"),l(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token punctuation"},"{"),l("\n    "),s("span",{class:"token keyword"},"return"),l(),s("span",{class:"token punctuation"},"{"),l("\n      msg"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token template-string"},[s("span",{class:"token template-punctuation string"},"`"),s("span",{class:"token string"},"Highlighted!\n      This line isn't highlighted,\n      but this and the next 2 are."),s("span",{class:"token template-punctuation string"},"`")]),s("span",{class:"token punctuation"},","),l("\n      motd"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},"'VitePress is awesome'"),s("span",{class:"token punctuation"},","),l("\n      lorem"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token string"},"'ipsum'"),s("span",{class:"token punctuation"},","),l("\n    "),s("span",{class:"token punctuation"},"}"),l("\n  "),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1),Pn=s("h2",{id:"line-numbers"},[s("a",{class:"header-anchor",href:"#line-numbers","aria-hidden":"true"},"#"),l(" Line Numbers")],-1),An=s("p",null,"You can enable line numbers for each code blocks via config:",-1),Sn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[l("module"),s("span",{class:"token punctuation"},"."),l("exports "),s("span",{class:"token operator"},"="),l(),s("span",{class:"token punctuation"},"{"),l("\n  markdown"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n    lineNumbers"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token boolean"},"true"),l("\n  "),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1),On=s("ul",null,[s("li",null,"Demo:")],-1),_n=s("picture",null,[s("source",{srcset:"/assets/line-numbers-mobile.f5ca96ee.gif",media:"(max-width: 719px)"}),s("img",{class:"line-numbers-mobile-snap",src:a,alt:"Image"})],-1),Bn=s("picture",null,[s("source",{srcset:"/assets/line-numbers-desktop.cc304762.png",media:"(min-width: 720px)"}),s("img",{class:"line-numbers-desktop-snap",src:o,alt:"Image"})],-1),Dn=s("h2",{id:"import-code-snippets"},[s("a",{class:"header-anchor",href:"#import-code-snippets","aria-hidden":"true"},"#"),l(" Import Code Snippets")],-1),En=s("p",null,"You can import code snippets from existing files via following syntax:",-1),Mn=s("div",{class:"language-md"},[s("pre",null,[s("code",null,"<<< @/filepath\n")])],-1),Nn=s("p",null,[l("It also supports "),s("a",{href:"#line-highlighting-in-code-blocks"},"line highlighting"),l(":")],-1),Vn=s("div",{class:"language-md"},[s("pre",null,[s("code",null,"<<< @/filepath{highlightLines}\n")])],-1),Fn=s("p",null,[s("strong",null,"Input")],-1),Gn=s("div",{class:"language-md"},[s("pre",null,[s("code",null,"<<< @/snippets/snippet.js{2}\n")])],-1),Yn=s("p",null,[s("strong",null,"Code file")],-1),$n=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token keyword"},"function"),l(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token punctuation"},"{"),l("\n  "),s("span",{class:"token comment"},"// .."),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1),zn=s("p",null,[s("strong",null,"Output")],-1),Rn=s("div",{class:"language-js"},[s("div",{class:"highlight-lines"},[s("br"),s("div",{class:"highlighted"}," "),s("br"),s("br")]),s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(),s("span",{class:"token keyword"},"function"),l(),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token punctuation"},"{"),l("\n  "),s("span",{class:"token comment"},"// .."),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1),qn=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"TIP"),s("p",null,[l("The value of "),s("code",null,"@"),l(" corresponds to the source root. By default it's the VitePress project root, unless "),s("code",null,"srcDir"),l(" is configured.")])],-1),Un=s("p",null,[l("You can also use a "),s("a",{href:"https://code.visualstudio.com/docs/editor/codebasics#_folding",target:"_blank",rel:"noopener noreferrer"},"VS Code region"),l(" to only include the corresponding part of the code file. You can provide a custom region name after a "),s("code",null,"#"),l(" following the filepath ("),s("code",null,"snippet"),l(" by default):")],-1),Wn=s("p",null,[s("strong",null,"Input")],-1),Jn=s("div",{class:"language-md"},[s("pre",null,[s("code",null,"<<< @/snippets/snippet-with-region.js{1}\n")])],-1),Kn=s("p",null,[s("strong",null,"Code file")],-1),Qn=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[s("span",{class:"token comment"},"// #region snippet"),l("\n"),s("span",{class:"token keyword"},"function"),l(),s("span",{class:"token function"},"foo"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token punctuation"},"{"),l("\n  "),s("span",{class:"token comment"},"// .."),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token comment"},"// #endregion snippet"),l("\n\n"),s("span",{class:"token keyword"},"export"),l(),s("span",{class:"token keyword"},"default"),l(" foo\n")])])],-1),Xn=s("p",null,[s("strong",null,"Output")],-1),Zn=s("div",{class:"language-js"},[s("div",{class:"highlight-lines"},[s("div",{class:"highlighted"}," "),s("br"),s("br")]),s("pre",null,[s("code",null,[s("span",{class:"token keyword"},"function"),l(),s("span",{class:"token function"},"foo"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token punctuation"},"{"),l("\n  "),s("span",{class:"token comment"},"// .."),l("\n"),s("span",{class:"token punctuation"},"}")])])],-1),ne=s("h2",{id:"advanced-configuration"},[s("a",{class:"header-anchor",href:"#advanced-configuration","aria-hidden":"true"},"#"),l(" Advanced Configuration")],-1),ee=s("p",null,[l("VitePress uses "),s("a",{href:"https://github.com/markdown-it/markdown-it",target:"_blank",rel:"noopener noreferrer"},"markdown-it"),l(" as the Markdown renderer. A lot of the extensions above are implemented via custom plugins. You can further customize the "),s("code",null,"markdown-it"),l(" instance using the "),s("code",null,"markdown"),l(" option in "),s("code",null,".vitepress/config.js"),l(":")],-1),te=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[l("module"),s("span",{class:"token punctuation"},"."),l("exports "),s("span",{class:"token operator"},"="),l(),s("span",{class:"token punctuation"},"{"),l("\n  markdown"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l("\n    "),s("span",{class:"token comment"},"// options for markdown-it-anchor"),l("\n    anchor"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l(" permalink"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token boolean"},"false"),l(),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),l("\n\n    "),s("span",{class:"token comment"},"// options for markdown-it-toc"),l("\n    toc"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"{"),l(" includeLevel"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"["),s("span",{class:"token number"},"1"),s("span",{class:"token punctuation"},","),l(),s("span",{class:"token number"},"2"),s("span",{class:"token punctuation"},"]"),l(),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),l("\n\n    "),s("span",{class:"token function-variable function"},"config"),s("span",{class:"token operator"},":"),l(),s("span",{class:"token punctuation"},"("),s("span",{class:"token parameter"},"md"),s("span",{class:"token punctuation"},")"),l(),s("span",{class:"token operator"},"=>"),l(),s("span",{class:"token punctuation"},"{"),l("\n      "),s("span",{class:"token comment"},"// use more markdown-it plugins!"),l("\n      md"),s("span",{class:"token punctuation"},"."),s("span",{class:"token function"},"use"),s("span",{class:"token punctuation"},"("),s("span",{class:"token function"},"require"),s("span",{class:"token punctuation"},"("),s("span",{class:"token string"},"'markdown-it-xxx'"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),l("\n    "),s("span",{class:"token punctuation"},"}"),l("\n  "),s("span",{class:"token punctuation"},"}"),l("\n"),s("span",{class:"token punctuation"},"}"),l("\n")])])],-1);r.render=function(s,l,a,o,i,r){return n(),e("div",null,[u,c,p,d,g,h,k,m,f,b,v,x,y,w,j,C,T,I,H,L,P,A,S,O,_,B,D,E,M,N,V,F,G,Y,$,z,R,q,U,W,J,K,Q,X,Z,nn,en,tn,sn,ln,an,on,rn,un,cn,pn,dn,gn,hn,kn,mn,fn,bn,vn,xn,yn,wn,jn,Cn,Tn,In,Hn,Ln,Pn,An,Sn,On,_n,Bn,Dn,En,Mn,Nn,Vn,Fn,Gn,Yn,t("lint disable strong-marker"),$n,t("lint enable strong-marker"),zn,t("lint disable strong-marker"),Rn,t("lint enable strong-marker"),qn,Un,Wn,Jn,Kn,t("lint disable strong-marker"),Qn,t("lint enable strong-marker"),Xn,t("lint disable strong-marker"),Zn,t("lint enable strong-marker"),ne,ee,te])};export default r;export{i as __pageData};