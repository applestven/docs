
## puppteer 学习 
Puppeteer 是一个 Node 库，它提供了一个高级 API 来通过 DevTools 协议控制 Chromium 或 Chrome。Puppeteer 默认以 headless 模式运行，但是可以通过修改配置文件运行“有头”模式。

能做什么?
你可以在浏览器中手动执行的绝大多数操作都可以使用 Puppeteer 来完成！ 下面是一些示例：

生成页面 PDF。
抓取 SPA（单页应用）并生成预渲染内容（即“SSR”（服务器端渲染））。
自动提交表单，进行 UI 测试，键盘输入等。
创建一个时时更新的自动化测试环境。 使用最新的 JavaScript 和浏览器功能直接在最新版本的Chrome中执行测试。
捕获网站的 timeline trace，用来帮助分析性能问题。
测试浏览器扩展。


## 中文文档 
https://puppeteer.bootcss.com/

示例 ： 

## 请求头设置
setting.js
```js 
module.exports = {
    // 注意事项：Chrome添加ignoreDefaultArgs: ["--enable-automation"]无效，请自行测试
    optionsLaunch : {
        headless: false,
        devtools: false,
        defaultViewport: {
            width:1980,
            height: 768 * 2
        },
        slowMo: 250,
        timeout: 50*1000,
        // product: "chrome",
        ignoreHTTPSErrors: true,
        ignoreDefaultArgs: ["--enable-automation"],
        // channel: "chrome",
        // executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
        args:[
            '--no-sandbox',
            '--proxy-server=socks5://127.0.0.1:7890',
            '--disable-extensions',
            '--hide-scrollbars',
            '--disable-bundled-ppapi-flash',
            '--mute-audio',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-gpu',
            '--disable-web-security',
            '--disable-infobars',
            '--disable-blink-features=AutomationControlled'
        ],
        dumpio: false,
        
    }
}
```

## 1.爬取接口数据
``` js
// 1. 爬取接口数据
// 使用http，axios等爬取api接口数据，for example 

const axios = require('axios')
const fs = require('fs')

;(async function(){
    const {data} = await axios.get("https://api.juejin.cn/user_api/v1/author/recommend?category_id=&cursor=0&limit=20")
    // const {data} = await axios.get("http://kquan999.com/api/bulletin/getBulletin?operat_system=1")

    console.log(data ,996)
    fs.writeFileSync('./static/data.json',JSON.stringify(data))
})()
```

## 2.爬取html页面 
``` js
// 有些页面是服务端渲染的 ，很多数据并不是通过api接口获取的 ， 
// 此时api接口是无法拿到想要的数据的 ，
// 此时可以使用request、crawl等爬取整个html页面 ，然后再从中寻找想要的数据

const request = require('request')
const fs = require('fs')

const url = 'http://www.foshan.gov.cn/'
// const url = 'http://localhost:8080/#/'

request(url,(err,res,body)=>{
    console.log(body)
    fs.writeFileSync('index.html',body)
})


```

## 3.爬取网易云歌词
```js
// 3. 爬取网易云歌词


// b 获取页面数据 
const fs = require('fs') 
const puppeteer  = require('puppeteer')

;(async()=>{
    const browser = await (puppeteer.launch({headless:false}));
    const page = await browser.newPage();
    //  设置页面视窗大小
    await page.setViewport({
        width: 2000,
        height: 768 * 2
    });
    // 进入页面 
    await page.goto("https://music.163.com/#")

    // 点击搜索框拟人输入  忘情水 
    const musicName = '忘情水';
    await page.type('.txt.j-flag',musicName,{delay:0})

    // 回车 
    await page.keyboard.press('Enter')

    // 获取歌曲列表的iframe
    await page.waitForTimeout(2000)
    let iframe = await page.frames().find(f => f.name() === 'contentFrame');
    const SONG_LS_SELECTOR = await iframe.$('.srchsongst'); 
    
    //获取忘情水的地址 
    const selectedSongHref = await iframe.evaluate(e => {
        console.log(e.childNodes, 77)
        const songList = Array.from(e.childNodes);
        const idx = songList.findIndex(v => v.childNodes[1].innerText.replace(/\s/g, '') === '忘情水(Live)');
        return songList[idx].childNodes[1].firstChild.firstChild.firstChild.href;
    }, SONG_LS_SELECTOR);
    console.log(selectedSongHref, 996)
    
    // 进入歌曲页面
    await page.goto(selectedSongHref);

     // 获取歌曲页面嵌套的 iframe
     await page.waitForTimeout(2000);
     iframe = await page.frames().find(f => f.name() === 'contentFrame');

     // 点击 展开按钮
    const unfoldButton = await iframe.$('#flag_ctrl');
    await unfoldButton.click();

    // 获取歌词
    const LYRIC_SELECTOR = await iframe.$('#lyric-content');
    const lyricCtn = await iframe.evaluate(e => {
        return e.innerText;
    }, LYRIC_SELECTOR);

    console.log(lyricCtn, 'lyricCtn');

    // 截图
    await page.screenshot({
        path: 'puppeteer/忘情水-刘德华.png',
        fullPage: true,
    });

    //写入文件 
    let writerStream = fs.createWriteStream('puppeteer/忘情水.txt');
    writerStream.write(lyricCtn, 'UTF8');
    writerStream.end()

    // 获取评论数量
    const commentCount = await iframe.$eval('.sub.s-fc3', e => e.innerText);
    console.log(commentCount, 'commentCount');

    // 获取评论
    const commentList = await iframe.$$eval('.itm .cnt.f-brk', elements => {
        const ctn = elements.map(v => {
            return v.innerText.replace(/\s/g, '') + '\r\n';
        });
        return ctn;
    });
    console.log(commentList, 'commentList');
    fs.writeFileSync('puppeteer/评论.txt', commentList.toString())

})()


// 知识点：
// page.type 获取输入框焦点并输入文字

// page.keyboard.press 模拟键盘按下某个按键，目前mac上组合键无效为已知bug

// page.waitFor 页面等待，可以是时间、某个元素、某个函数

// page.frames() 获取当前页面所有的 iframe，然后根据 iframe 的名字精确获取某个想要的 iframe

// iframe.$('.srchsongst') 获取 iframe 中的某个元素

// iframe.evaluate() 在浏览器中执行函数，相当于在控制台中执行函数，返回一个 Promise

// Array.from 将类数组对象转化为对象

// page.click() 点击一个元素

// iframe.$eval() 相当于在 iframe 中运行 document.queryselector 获取指定元素，并将其作为第一个参数传递

// iframe.$$eval 相当于在 iframe 中运行 document.querySelectorAll 获取指定元素数组，并将其作为第一个参数传递


```


## 4.下载b站图片
```js
// 下载图片
 // 获取图片 采用截图式  svg  等图片可能失真 优点在不会被墙 
const puppeteer = require('puppeteer')
;(async()=>{
    const browser = await puppeteer.launch({headless:false})
    const page = await browser.newPage()
    page.setViewport({
        width:1980,
        height:768*2
    })
    await page.goto("https://www.bilibili.com/")

//    获取一张
    // const image = await page.waitForSelector('#i_cecream > div.bili-feed4 > main > div.feed2 > div.recommended-container > div.container > div:nth-child(2) > div > div.bili-video-card__wrap.__scale-wrap > a > div > div.bili-video-card__image--wrap > picture > img');
    // await image.screenshot({
    //     path: '获取图片.png',
    //     omitBackground: false
    // });

    // 获取多张
    await page.waitForSelector('.recommended-card .bili-video-card__cover >img')
    const imageList = await page.$$('.recommended-card .bili-video-card__cover >img')
    imageList.map((image,i)=>{
        image.screenshot({
            path:"puppeteer/获取图片"+i+'.png',
            omitBackground : false 
        })
    })
    await browser.close()
})()

```

## 5.爬取国外小说

```js
const fs = require('fs') 
const puppeteer  = require('puppeteer')
const {optionsLaunch} = require("./setting.js")
;(async()=>{
    // const browser = await puppeteer.connect({browserWSEndpoint:'ws://127.0.0.1:62301/devtools/browser/0c6b8645-2f99-4fbc-b152-b71f22d5bed2'});
    // let tabs = await browser.pages()
    // const page = tabs[0]

    
    const browser = await (puppeteer.launch(optionsLaunch));
    const page = await browser.newPage();

    // const browserWSEndpoint = browser.wsEndpoint();
    // console.log("browserWSEndpoint",browserWSEndpoint)

    // await page.setUserAgent(
    //     "Mozilla/5.0 (Windows NT 6.0) AppleWebKit/536.5 (KHTML, like Gecko) Chrome/19.0.1084.36 Safari/536.5")
    // await page.evaluateOnNewDocument(() =>{ 
    //     Object.defineProperties(navigator,{ webdriver:{ get: () => false } }) }
    // )
    // webdriverawait 
    // page.evaluateOnNewDocument(() => { 
    //     const newProto = navigator.__proto__;   
    //      delete newProto.webdriver; //删除 navigator.webdriver字段    navigator.__proto__ = newProto;
    // })
    // 添加 window.chrome字段，向内部填充一些值
    // await page.evaluateOnNewDocument(() => {    
    //     window.chrome = {};    
    //     window.chrome.app = {
    //         InstallState: 'hehe',
    //         RunningState: 'haha',getDetails: 'xixi',      
    //         getIsInstalled: 'ohno',    
    //     };    
    //     window.chrome.csi = function () {};   
    //     window.chrome.loadTimes = function () {};    
    //     window.chrome.runtime = function () {};
    // });
    // userAgent设置
    // await page.evaluateOnNewDocument(() => {    Object.defineProperty(navigator, 'userAgent', {    
    //         //userAgent在无头模式下有headless字样，所以需覆盖    
    //     get: () => 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.113 Safari/537.36',});
    // });
    // plugins设置
    // await page.evaluateOnNewDocument(() => {    Object.defineProperty(navigator, 'plugins', {       
    //      //伪装真实的插件信息       
    //     get: () => [
    //         {0: {
    //             type: 'application/x-google-chrome-pdf',
    //             suffixes: 'pdf',description: 'Portable Document Format',
    //             enabledPlugin: Plugin,            
    //         }, 
    //         description: 'Portable Document Format',
    //         filename: 'internal-pdf-viewer',length: 1,name: 'Chrome PDF Plugin',
    //     },        
    //     {0: {type: 'application/pdf',suffixes: 'pdf',description: '',
    //         enabledPlugin: Plugin,            
    //     },
    //         description: '',filename: 'mhjfbmdgcfjbbpaeojofohoefgiehjai',
    //         length: 1,            name: 'Chrome PDF Viewer',        
    //     },   
    //     {            0: {            type: 'application/x-nacl',            suffixes: '',            description: 'Native Client Executable',            enabledPlugin: Plugin,            },            1: {            type: 'application/x-pnacl',            suffixes: '',            description: 'Portable Native Client Executable',            enabledPlugin: Plugin,            },            description: '',            filename: 'internal-nacl-plugin',            length: 2,            name: 'Native Client',        },        ],    });
    // });

    // languages设置
    // await page.evaluateOnNewDocument(() => {    Object.defineProperty(navigator, 'languages', { 
    //            //添加语言       
    //     get: () => ['zh-CN', 'zh', 'en'],    });
    // });
    // WebGL设置await 
    // page.evaluateOnNewDocument(() => {    
    //     const getParameter = WebGLRenderingContext.getParameter;    
    //     WebGLRenderingContext.prototype.getParameter = function (parameter) {      
    //           // UNMASKED_VENDOR_WEBGL       
    //     if (parameter === 37445) {            return 'Intel Inc.';        }       
    //             // UNMASKED_RENDERER_WEBGL    
    //     if (parameter === 37446) {            return 'Intel(R) Iris(TM) Graphics 6100';        }        return getParameter(parameter);    };
    // });
    //  设置页面视窗大小
    await page.setViewport({
        width:1980,
        height: 768 * 2
    });

     // 进入页面 
    await page.goto("https://www.wuxiaworld.com/",{
        waitUntil:'networkidle2',
        timeout:0
    })
    // 滑动页面 ， 解决动态加载的问题 
    await page.mouse.move(1972,1200);
    await page.mouse.down();
    await page.mouse.up()
    await page.waitForTimeout(1222)
    // /等待 当前dom加载完成 
    await page.waitForSelector('#app > div > div > div > div > div:nth-child(3) > article > div > div > div.swiper-wrapper')
    console.log("dom加载完成")
    // await page.click('.loading-container .overflow-hidden div div div')
    // 获取ishot的的12个小说链接
    let hrefList = await page.$$eval('#app > div > div > div > div > div:nth-child(3) > article > div > div > div.swiper-wrapper > div >section >a',(hrList)=>{
        return hrList.map(item=>{
            return item.href
        })
    })
    let CLICDOMLIST = await page.$$('#app > div > div > div > div > div:nth-child(3) > article > div > div > div.swiper-wrapper > div >section >a')
    console.log("hrefList",hrefList)
    if(hrefList[0] == 'https://www.wuxiaworld.com/novel/'){
        console.log("抓取小说连接错误,未抓取完全 ，或页面未加载完全")
    }else{
        // page.goto(hrefList[0])
        
        await CLICDOMLIST[0].click()
        console.log("点击")
    }
    // let fictionOB = await page.evaluate(()=>{
    //     let fitName = document.querySelector('h1').innerText // 小说名
    //     let Author = document.querySelector('.break-word').innerText // 作者 
    //     let introduce = document.querySelector('.prose').innerText // 介绍 
    //     let Translator = document.querySelectorAll('.break-word')[1].innerText // 翻译者 
    //     return {
    //         fitName,Author,introduce,Translator
    //     }
    // })
    await page.waitForSelector('h1')
    let fitName = await page.$('h1').innerText
    let author = await page.$('.break-word').innerText // 作者 
    let introduce = await page.$('.prose').innerText // 介绍 
    let translator = await page.$('.break-word')[1].innerText // 翻译者

    let fictionOB ={fitName,author,introduce,translator}
   
    let IMG = await page.$('img') // 小说封面
    IMG.screenshot({
        path:'static/'+fictionOB.fitName+'.png',
        omitBackground:false
    })
    fictionOB['imgurl'] = 'static/'+fictionOB.fitName+'.png'

    console.log('fictionOB',fictionOB)
    
    
})().catch(err => {
    console.log(err);
})
```

## 封装userAgent.js
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

## 测试网站 https://bot.sannysoft.com/


