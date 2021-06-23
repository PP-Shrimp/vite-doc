module.exports = {
    title: 'Hello VitePress',
    base: '/',
    repo: 'vuejs/vitepress',
    docsDir: 'docs',
    themeConfig: {
        //   头部导航
        nav: [
            { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
            {
                text: 'Config Reference',
                link: '/config/basics',
                activeMatch: '^/config/'
            },
        ],
        //   侧边导航
        sidebar: {
            '/guide/': getGuideSidebar(),
            '/config/': getConfigSidebar(),
            '/': getGuideSidebar()
        }
    }
}

function getGuideSidebar() {
    console.log('load Guide side bar');
    
    return [
        {
            text: 'Introduction',
            children: [
                { text: 'What is VitePress?', link: '/' },
                { text: 'Getting Started', link: '/guide/getting-started' }
            ]
        },
        {
            text: 'Advanced',
            children: [
                { text: 'Frontmatter', link: '/guide/frontmatter' },
                { text: 'Theming', link: '/guide/theming' },
            ]
        }
    ]
}

function getConfigSidebar() {
    console.log('load Config side bar');
    return [
        {
            text: 'App Config',
            children: [{ text: 'Basics', link: '/config/basics' }]
        },
        {
            text: 'Theme Config',
            children: [
                { text: 'Homepage', link: '/config/homepage' },
                { text: 'Algolia Search', link: '/config/algolia-search' },
            ]
        }
    ]
}