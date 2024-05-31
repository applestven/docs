## 快速搭建 electron-quick-start 项目 ： 
git clone https://github.com/electron/electron-quick-start 

## 创建的模板地址 ：
git clone https://gitee.com/simple-and-pure/template.git 
## 手动创建 
1. 安装 create-react-app 命令,如果已将安装请忽略
npm install -g create-react-app
2. 创建 react项目
create-react-app react-electron
1. 启动项目
cd react-electron && npm start 

### 2.安装Electron

```sh 
#在react-electron项目目录下
cnpm install --save electron
```

### 3.0 配置文件 
1.  在项目根目录新建main.js
``` js
const { app, BrowserWindow } = require("electron")
const path = require('path')
const url = require('url')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    minWidth: 800,
    minHeight: 800
  })
  win.loadURL("http://localhost:3000/")
}

app.whenReady().then(() => {
  createWindow()
  app.on("active", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})


```


2. 配置package.json

``` js

添加如下两项配置：
{
	"main": "main.js", // 配置electron的启动文件
	"scripts": {
	    "electron-start": "electron ."
	  },
  }


```

3. 启动electron

``` sh

# 这里要打开两个窗口

# 启动react项目
npm start
# 启动electron
npm run electron-start


```

### 4.打包Electron桌面应用 
浅试即止 能够找到electron本地安装的方法（从这里学到electron-builder打包方式）  ：https://blog.csdn.net/xiaorunye/article/details/128163117

深入打包可以看 ： https://blog.csdn.net/duansamve/article/details/126494450


有价值的文章 ： https://blog.csdn.net/weixin_39673601/article/details/110464670

build-packpage 清晰的文章 ： https://blog.csdn.net/weixin_39673601/article/details/110464670 

可找到开发与打包配置script ：https://blog.csdn.net/weixin_38080573/article/details/105113219 

#### 4.1打包成安装器

- 安装electron-builder： 

`cnpm install -g electron-builder` 

- 配置package.js文件的script节点：

    ```js
      "scripts": {
        "start": "electron .",
        "pack": "electron-builder --dir",
        "postinstall": "electron-builder install-app-deps",
        "dist": "electron-builder",
        "dist-win": "electron-builder --win --ia32",
        "dist-win64": "electron-builder --win --x64",
        "dist-mac": "electron-builder --mac",
        "dist-linux": "electron-builder --linux"
      }
    
    ```

    

- 编译

  `yarn postinstall`

- 打包windows 64位应用命令 （每次打包，需要重新编译 ，npm run build）

  `yarn dist-win64`

- 在dist中可以找到安装包 



## 一些主程常用配置

```js

const { app, BrowserWindow } = require('electron')



const path = require("path")

function createWindow () {
  const win = new BrowserWindow({
    width: 600,
    height: 500,
    x:500,
    y:800,
    // alwaysOnTop:"true",//运行在最上层
    webPreferences: {
      nodeIntegration: true
    },
    // frame:false , // 标题栏控制  ，没有标题栏控制不了 ,需要设置样式 （css/index.css）
    // transparent:true, // 整体窗口透明 ，全靠渲染进程给样式
  }) 

  win.loadFile('index.html')
//   win.loadURL("http://www.itclass.top")
//1::1 等比例缩放 
//   win.setAspectRatio(1) 
//自动打开渲染进程控制台
  win.webContents.toggleDevTools()

console.log(__dirname,"11111111111")
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => { 
  if (process.platform !== 'darwin') {// 判断系统 如果不为苹果系统 ， 则软件退出
    app.quit()
  }
})

``` 


## 如果关闭了 electron 窗口选项 ，会有不能拖动的问题 

设置渲染进程 css 

``` js
*{
    padding: 0;
    margin: 0;
}
body{
    /* background-color: red; */
}

html{
    -webkit-app-region: drag ; /* 拖动主要属性 */
}

textarea{
    -webkit-app-region: no-drag ; /* 文本属性不拖 */
}

body{
    width: 100vw; / /*  整体窗口都能拖动 */
    height: 100vh;
}
h1{
    /* background-color:red; */
    /* height: 100vh; */
    /* border-radius: 50%; */
    /* overflow: hidden; */
}
```

## 快捷插件electron 项目 

这个项目提供了一个Project Boilerplate，允许你使用React开发Electron App.关于Webpack之类的复杂配置，项目组已经提前帮你配置好了，就不用再自己手动去踩坑了。使用它可以让你专注于push ideas into coding，避免冗长繁琐复杂的配置工作。

实例化一个项目your-project-name，可以用以下命令：

``` sh
# ts版本
git clone --depth=1 https://github.com/electron-react-boilerplate/electron-react-boilerplate.git your-project-name
cd your-project-name


```  
注 ： 只有ts版本 js版本不在维护 并删除了 



## 一些注意 :

 yarn \ npm 安装不了electron  只有cnpm可以 