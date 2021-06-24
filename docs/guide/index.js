const guideSide = function () {
    return [{
            text: 'Introduction',
            children: [{
                    text: 'Getting Started',
                    link: '/guide/getting-started'
                },
                {
                    text: 'Configuration',
                    link: '/guide/configuration'
                },
                {
                    text: 'Asset Handling',
                    link: '/guide/assets'
                },
                {
                    text: 'Markdown Extensions',
                    link: '/guide/markdown'
                },
                {
                    text: 'Using Vue in Markdown',
                    link: '/guide/using-vue'
                },
                {
                    text: 'Deploying',
                    link: '/guide/deploy'
                }
            ]
        },
        {
            text: 'Advanced',
            children: [{
                    text: 'Frontmatter',
                    link: '/guide/frontmatter'
                },
                {
                    text: 'Theming',
                    link: '/guide/theming'
                },
                {
                    text: 'API Reference',
                    link: '/guide/api'
                },
                {
                    text: 'Differences from Vuepress',
                    link: '/guide/differences-from-vuepress'
                }
            ]
        }
    ]
}

module.exports = guideSide