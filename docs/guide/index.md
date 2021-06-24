---
sidebarDepth: 2
---

# 什么是 VitePress？

::: warning WARNING
VitePress is currently in 0.x status. It is already suitable for out-of-the-box documentation use, but the config and theming API may still change between minor releases.
:::

VitePress is [VuePress](https://vuepress.vuejs.org/)' little brother, built on top of [Vite](https://github.com/vitejs/vite).

## 动机

我们喜爱 VuePress v1, 但是使用 webpack 构建时, 就算是一个简单的只有几页的文档所耗费的时间也是让人无法忍受的;<br />
We love VuePress v1, but being built on top of Webpack, the time it takes to spin up the dev server for a simple doc site with a few pages is just becoming unbearable.

更离谱的是热更新也会耗时几秒钟才会在浏览器中反映出来<br />
Even HMR updates can take up to seconds to reflect in the browser!

从根本上上说, 只是因为 VuePress v1 是一个基于 webpack 的应用程序;<br />
Fundamentally, this is because VuePress v1 is a Webpack app under the hood. 

即使是有两个页面, webpack 也会将所有资源打包,包括所有的主题资源文件<br />
Even with just two pages, it's a full on Webpack project (including all the theme source files) being compiled. 

当项目中的有很多页面的时候, 就会变的更糟糕 - 每个页面都需要呗完全编译, 而这期间服务器不能展示任何东西<br />
It gets even worse when the project has many pages – every page must first be fully compiled before the server can even display anything!

令人惊喜的是, vite 非常完美的解决了这些问题: <br />
Incidentally, Vite solves these problems really well: 

几乎实时的服务启动, 按需编译, 轻巧快速的热更新 <br />
nearly instant server start, an on-demand compilation that only compiles the page being served, and lightning-fast HMR.

而且在 vuepress v1 中,还有一些需要改进的设计, 但由于需要大量的重构，我从来没有时间修复 <br />
Plus, there are a few additional design issues I have noted in VuePress v1 over time but never had the time to fix due to the amount of refactoring it would require.

现在, 有了 vite 和 vue3, 正好重新设计一套有力的 Vue 静态站点生成器 <br />
Now, with Vite and Vue 3, it is time to rethink what a "Vue-powered static site generator" can really be.

## 改进的地方

There're couple of things that are improved from VuePress v1....

### It Uses Vue 3

Leverages Vue 3's improved template static analysis to stringify static content as much as possible. Static content is sent as string literals instead of JavaScript render function code – the JS payload is therefore _much_ cheaper to parse, and hydration also becomes faster.

Note the optimization is applied while still allowing the user to freely mix Vue components inside markdown content – the compiler does the static/dynamic separation for you automatically and you never need to think about it.

### It Uses Vite Under The Hood

- Faster dev server start
- Faster hot updates
- Faster build (uses Rollup internally)

### Lighter Page Weight

- Vue 3 tree-shaking + Rollup code splitting
- Does not ship metadata for every page on every request. This decouples page weight from total number of pages. Only the current page's metadata is sent. Client side navigation fetches the new page's component and metadata together.
- Does not use `vue-router` because the need of VitePress is very simple and specific - a simple custom router (under 200 LOC) is used instead.
- (WIP) i18n locale data should also be fetched on demand.

## 其他不同点

VitePress is more opinionated and less configurable: VitePress aims to scale back the complexity in the current VuePress and restart from its minimalist roots.

VitePress is future oriented: VitePress only targets browsers that support native ES module imports. It encourages the use of native JavaScript without transpilation, and CSS variables for theming.

## 将来这会是 VuePress 的下一版本么？

We already have [vuepress-next](https://github.com/vuepress/vuepress-next), which would be the next major version of VuePress. It also makes lots of improvements over VuePress v1, and also supports Vite now.

VitePress is not compatible with the current VuePress ecosystem (mostly themes and plugins). The overall idea is that VitePress will have a drastically more minimal theming API (preferring JavaScript APIs instead of file layout conventions) and likely no plugins (all customization is done in themes).
