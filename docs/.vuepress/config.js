const moment = require('moment')
module.exports = {
  // base:'/docs/',
  // SEO 相关配置 
  title:"大青虫", // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
  description:"大青虫的成长日记",
  head:[
    ['link', { rel: 'icon', href: './assets/img/xiao.PNG' }],
    ['meta', { rel: 'author', content: '不爱吃青菜的大青虫' }],
    ['meta', { rel: 'Keywords', content: 'vuepress介绍说明 不爱吃青菜的大青虫' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.PNG' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.PNG' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  // ps:
  // moment插件处理相关
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          // const moment = require('moment')
          moment.locale('zh-cn')
          return moment(timestamp).format('llll')
        }
      }
    ],
    [
      '@vuepress/pwa', {
              serviceWorker: true,
              updatePopup: {
                message: "别让鸡零狗碎的琐事耗尽你对生活的向往",
                buttonText: "刷新"
              }
              
      }
    ]
  ],
  // ps：
  // 部署相关
  
  // ps:
    themeConfig: {
        // navbar: false,
      
      lastUpdated: '更新时间', // string | boolean
      logo: './assets/img/xiaosi.PNG',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about.html' },
        { text: 'External', link: 'https://google.com' },
        { text: 'forbidden', link: '/forbidden.html' },
      ],
      // sidebar: 'auto' ,

      // 侧边栏分组
      sidebar: [
        '',
        'about',
        'forbidden',
        {
          title: '举例的fool',   // 必要的
          path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1,    // 可选的, 默认值是 1
          children: [
            '/foo/foo1',
            '/foo/foo2',
            '/foo/foo3',
          ]
        },
      ]

      //多个侧边栏 
      // sidebar:{
      //   '/foo/':[
      //     '',     /* /foo/ */
      //   'foo1',  /* /foo/foo1.html */
      //   'foo2',   /* /foo/foo2.html */
      //   'foo3'   /* /foo/foo3.html */
      //   ],
      //   '/fooCopy/':[
      //     '',     
      //   'foo11',  
      //   'foo22',  
      //   'foo33'  
      //   ],
      //   // fallback
      // '/': [
      //   '',        /* / */
      //   'forbidden', /* /forbidden.html */
      //   'about'    /* /about.html */
      // ]
      // } 
      
    },
    
  }