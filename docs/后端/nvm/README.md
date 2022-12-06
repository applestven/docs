## nvm node版本管理

1. nvm 下载地址 ： 
https://github.com/coreybutler/nvm-windows/releases

安装成功后 node -v npm -v 测试不成功 

- 更改配置文件，自动下载npm
    + 命令行运行：nvm root 显示出nvm的安装目录
    + 打开nvm文件夹下的settings.txt文件，在最后添加以下代码：
    node_mirror: https://npm.taobao.org/mirrors/node/
    npm_mirror: https://npm.taobao.org/mirrors/npm/

- nvm install 14.20.0
- nvm use 14.20.0

## 常用命令 
 nvm list available    显示可下载版本的部分列表
nvm install node@8.12.0         // 安装8.12.0版本的node 
nvm install 8.12.0
nvm uninstall node@8.12.0       	// 卸载node
nvm -v(-version)              // 查看nvm版本（检测是否安装上）
nvm ls                   //查看当前通过nvm管理的node
nvm use    10.12.0             //切换node版本，node10.12.0版本
node -v      