const guideSide = require('../guide/index')
const configSide = require('../config/index')
const testSide = require('../vuecomtest/index')

module.exports = {
    base: './dist',
    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',
    themeConfig: {
        // 可是为什么我必须写了 repo, nav 才会生效
        repo: 'PP-Shrimp/vite-doc.git', // GitHub. 同时也可以是一个完整的 GitLab URL
        //   docsDir: 'docs',  // 假如文档不是放在仓库的根目录下：
        //   editLinks: true, // 默认是 false, 设置为 true 来启用
        //   editLinkText: 'Edit this page on GitHub', // 默认为 "Edit this page"
        lastUpdated: 'Last Updated', // 选项来获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部

        //   algolia: { // 搜索框
        //     apiKey: 'c57105e511faa5558547599f120ceeba',
        //     indexName: 'vitepress'
        //   },
        logo: '/img/1.png',  // 路径读取为 docs/public
        nav: [{ // 顶部导航
                text: 'Guide',
                link: '/guide/getting-started',
                activeMatch: '^/$|^/guide/'
            },
            {
                text: 'Config Reference',
                link: '/config/basics',
                activeMatch: '^/config/'
            },{
                text: 'vue-component',
                link: '/vuecomtest/test',
                activeMatch: '^/vuecomtest/'
            }
        ],

        sidebar: {
            '/guide/': guideSide(),
            '/config/': configSide(),
            '/vuecomtest/': testSide(),
            '/': guideSide(),
        }
    }
}