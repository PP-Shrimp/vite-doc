# vitepress 踩坑

内容是抄的,随缘翻译

主要的坑在 .vitepress/config.js 中

1. nav 不出现, 增加了配置 repo, 出现了!

2. 如何将 config.js 搞成 ts版的, 以及使用 import 语法而不是 require

3. 侧边栏问题

    ```
        sidebar: {
            '/guide/': guideSide(),
            '/config/': configSide(),
            '/vuecomtest/': testSide(),
            '/': guideSide(),  <--- 为什么必须这个是最后一个
        }
    ```
    ```
            '/': guideSide(),  
            '/vuecomtest/': testSide(),   这样写的话 这个侧边栏读不出来
    ```

4. config.js 中的所有参数 [https://github.com/vuejs/vitepress/blob/master/src/node/config.ts#L15](https://github.com/vuejs/vitepress/blob/master/src/node/config.ts#L15)<br />
  并没有 dest 这样的参数控制打包输入目录