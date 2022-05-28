const headConf = require('./config/headConf.js')
const pluginsConf  = require('./config/pluginsConf')
const navConf  = require('./nav.js')

module.exports = {
  // base:'/docs/',
  // SEO 相关配置 
  title:"大青虫", // 网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
  description:"文档、笔记、博客",
  head:headConf,
  plugins: pluginsConf,
  themeConfig: { // navbar: false,
      lastUpdated: '更新时间', // string | boolean
      logo: './assets/img/xiaosi.PNG',
      nav: navConf, // 右侧导航
      sidebar: {
        "/前端/wepack/base/": [
          {
            text: "基础配置",
            children: [
              "wepack/base/README.md",
              // "/base/base.md",
              // "/base/config.md",
              // "/base/development.md",
              // "/base/css.md",
              // "/base/image.md",
              // "/base/output.md",
              // "/base/clean.md",
              // "/base/font.md",
              // "/base/other.md",
              // "/base/javascript.md",
              // "/base/html.md",
              // "/base/server.md",
              // "/base/production.md",
              // "/base/optimizeCss.md",
              // "/base/minifyHtml.md",
              // "/base/summary.md",
            ],
          },
        ],
      }
    },
    
  }