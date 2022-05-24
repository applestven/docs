
const moment = require('moment')
const secret = require('./secret')
module.exports = 

  {
    '@vuepress/last-updated':
    {
      transformer: (timestamp, lang) => {
        moment.locale('zh-cn')
        return moment(timestamp).format('llll')
      }
    }
  ,
  
    '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
              // message: "别让鸡零狗碎的琐事耗尽你对生活的向往",
              message: "更新了前端笔记",
              buttonText: "刷新"
            }
            
    }
  ,
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',

      // 其他的 Vssue 配置
      owner: 'applestven', //需要添加评论的github项目 applestven/docs
      repo: 'docs',// 目录
      clientId: secret.clientId,
      clientSecret: secret.clientSecret,
    },
    '@vuepress/back-to-top':true,
    '@vuepress/medium-zoom': {
      selector: 'img.custom',
    },
    "vuepress-plugin-auto-sidebar": {}
  
}
// ps:
  // moment插件处理相关
  // plugins: [
  //   [
  //     '@vuepress/last-updated',
  //     {
  //       transformer: (timestamp, lang) => {
  //         moment.locale('zh-cn')
  //         return moment(timestamp).format('llll')
  //       }
  //     }
  //   ],
  //   [
  //     '@vuepress/pwa', {
  //             serviceWorker: true,
  //             updatePopup: {
  //               message: "别让鸡零狗碎的琐事耗尽你对生活的向往",
  //               buttonText: "刷新"
  //             }
              
  //     }
  //   ],[
  //     '@vssue/vuepress-plugin-vssue', {
  //       // 设置 `platform` 而不是 `api`
  //       platform: 'github-v4',
  
  //       // 其他的 Vssue 配置
  //       owner: 'applestven', //需要添加评论的github项目 applestven/docs
  //       repo: 'docs',// 目录
  //       clientId: '8f6184ec21bdb9697775',
  //       clientSecret: 'a0199b8eca0e73ed637ff4315fc08fba599c53a3',
  //     },
  //   ]
  // ],