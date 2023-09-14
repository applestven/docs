## 





## puppteer相关 

1. userAgent.js

```js
const puppeteer = require('puppeteer');

const USER_AGENTS  = [
  // Chrome
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/B08C390',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
  // Firefox
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:54.0) Gecko/20100101 Firefox/54.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:53.0) Gecko/20100101 Firefox/53.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:52.0) Gecko/20100101 Firefox/52.0',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:51.0) Gecko/20100101 Firefox/51.0',
  // Safari
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Safari/602.1.50',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.7 (KHTML, like Gecko) Version/9.1.2 Safari/601.7.7',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/601.7.8 (KHTML, like Gecko) Version/9.1.3 Safari/601.7.8',
  // IE
  'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; AS; rv:11.0) like Gecko',
  'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Trident/7.0; AS; rv:11.0) like Gecko',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; Trident/7.0; rv:11.0) like Gecko',
  // Opera
  'Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14',
  'Opera/9.80 (Windows NT 5.1) Presto/2.12.388 Version/12.14',
  'Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.14',
  'Opera/9.80 (Windows NT 6.1; Win64; x64) Presto/2.12.388 Version/12.14',
];



// module.exports = { launchBrowser };

// 动态切换代理
async function launchBrowser(options = {}) {
    const { user_agent, proxy } = options;
    const browser = await puppeteer.launch({
      executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', // 打开chrome
      defaultViewport: {
        width: 1308,
        height: 906 
      },
      headless: false,
      ignoreDefaultArgs:['--enable-automation'], // 正在收chrome的自动。。。
      args: [
        '--disable-features=site-per-process',
        '--no-sandbox',
        '--disable-setuid-sandbox',// 禁用设置用户 ID 沙盒
        '--disable-blink-features=AutomationControlled',
        // '--disable-web-security',          // 禁用同源策略
        // '--disable-dev-shm-usage',         // 禁用共享内存
        '--incognito',                     // 使用隐身模式  //这可以另外打开一个浏览器
        `--user-agent=${user_agent || USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]}`,
        proxy ? `--proxy-server=${proxy}` : ''
      ],
    });
    if (proxy) {
      await switchProxy(browser, proxy);
    }
  
    return browser;
  }
// 手动切换代理  
  async function switchProxy(browser, proxy) {
    // const pages = await browser.pages();
    // const promises = pages.map(page => page.setExtraHTTPHeaders({
    //   'Proxy-Switch-Ip': 'yes'
    // }));
    // await Promise.all(promises);
    // const page = await browser.newPage()
    // await page.goto('https://httpbin.org/ip', { timeout: 30000 });
    // await browser.close();
    // const newBrowser = await launchBrowser({ proxy });
    // return newBrowser;
    const pages = await browser.pages();
    const promises = pages.map(page => page.setExtraHTTPHeaders({
      'Proxy-Switch-Ip': 'yes'
    }));
    await Promise.all(promises);
    await browser.close();
    const newBrowser = await launchBrowser({ proxy });
    return newBrowser;
  }
  
  module.exports = { launchBrowser };


// 手动设置代理，可以这样调用 ：
// const { launchBrowser } = require('./launchBrowser');
// async function run() {
//   const browser = await launchBrowser({
//     proxy: 'http://127.0.0.1:8888',
//     user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
//   });
//   // your code here
// }

// run();


// 动态切换代理，可以这样调用：
// const { launchBrowser } = require('./launchBrowser');
// async function run() {
//   let browser = await launchBrowser({
//     proxy: 'http://127.0.0.1:8888',
//     user_agent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
//   });
//   // your code here
//   browser = await switchProxy(browser, 'http://127.0.0.1:9999');
//   // your code here
// }

// run();


```