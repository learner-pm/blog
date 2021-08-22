module.exports = {
    host: 'localhost',
    port: '8080',
    title: "Learning Blog",
    base: '/',
    description: "个人学习博客",
    head: [
        ['link', { rel: 'icon', href: './favicon.ico' }]
    ],
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig: {
        sidebarDepth: 3,
        nav: [
            { text: '首页', link: '/my/' },
            { text: '前端', link: '/frontEnd/ecmascript/' },
            { text: '数据结构与算法', link: '/dataStructure/data/' },
            { text: '后端', link: '/backEnd/' },
            { text: 'GitHub', link: 'https://github.com/Thank-love' },
        ],
        sidebar: {
            '/backEnd/': [
                {
                    title: "后端",
                    collapsable: false,
                    children: [
                        '/backEnd/'
                    ]
                }
            ],

            '/dataStructure/': [
                {
                    title: "数据结构",
                    collapsable: false,
                    children: [
                        '/dataStructure/data/'
                    ]
                },
                {
                    title: "算法",
                    collapsable: false,
                    children: [
                        '/dataStructure/algorithm/'
                    ]
                }
            ],
            '/frontEnd/': [
                {
                    title: 'ECMAScript',
                    collapsable: false,
                    children: [
                        '/frontEnd/ecmascript/',
                        '/frontEnd/ecmascript/one',
                        '/frontEnd/ecmascript/two',
                        '/frontEnd/ecmascript/three',
                        '/frontEnd/ecmascript/four',
                        '/frontEnd/ecmascript/five',
                        '/frontEnd/ecmascript/six',
                        // '/frontEnd/ecmascript/seven',
                        // '/frontEnd/ecmascript/eight',
                        // '/frontEnd/ecmascript/nine'
                    ]
                },
                {
                    title: 'HTML/CSS',
                    collapsable: false,
                    children: [
                        '/frontEnd/html/',
                        '/frontEnd/html/one',
                    ]
                },
                {
                    title: '浏览器',
                    collapsable: false,
                    children: [
                        '/frontEnd/other/',
                        '/frontEnd/other/one',
                        '/frontEnd/other/two',
                        '/frontEnd/other/three',
                        '/frontEnd/other/four'
                    ]
                }


            ],
        },
        lastUpdated: 'Last Updated', // string | boolean
        smoothScroll: true
    },
}