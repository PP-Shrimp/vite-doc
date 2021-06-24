const configSide = function () {
    return [{
            text: 'App Config',
            children: [{
                text: 'Basics',
                link: '/config/basics'
            }]
        },
        {
            text: 'Theme Config',
            children: [{
                    text: 'Homepage',
                    link: '/config/homepage'
                },
                {
                    text: 'Algolia Search',
                    link: '/config/algolia-search'
                },
                {
                    text: 'Carbon Ads',
                    link: '/config/carbon-ads'
                }
            ]
        }
    ]
}

module.exports = configSide