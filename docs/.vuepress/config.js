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
      // sidebar: 'auto' ,
      
      
    },
    
  }