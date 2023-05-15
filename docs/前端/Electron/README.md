## 快速搭建 electron-quick-start 项目 ： 
git clone https://github.com/electron/electron-quick-start 

## 创建的模板地址 ： https://gitee.com/simple-and-pure/template.git 
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






