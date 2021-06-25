const testSide = function () {
    return [{
            text: 'Introduction',
            children: [{
                    text: 'Getting Started',
                    link: '/vuecomtest/test'
                },
                {
                    text: 'Configuration',
                    link: '/vuecomtest/test2'
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
                }
            ]
        }
    ]
}

module.exports = testSide