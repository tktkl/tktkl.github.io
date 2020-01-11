module.exports = {
    title: 'tktkl',
    description: 'tktkl基于GithubPage',
    head: [
      ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    base: '/',
    markdown: {
        lineNumber: true
    },
    themeConfig: {
        sidebar: 'auto',
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav:[
            { text: '前端算法', link: '/vue/' }, // 内部链接 以docs为根目录
            { text: '博客', link: '/css/' }, // 外部链接
            // 下拉列表
            {
                text: 'GitHub',
                items: [
                    { text: 'GitHub地址', link: 'https://github.com/tktkl' },
                    {
                        text: '算法仓库',
                        link: 'https://github.com/tktkll'
                    }
                ]
            }
        ],

    }
}