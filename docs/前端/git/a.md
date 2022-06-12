#  常见错误 

## 1. git add 报错 
```js
warning: LF will be replaced by CRLF in docs/.vuepress/nav.js.
The file will have its original line endings in your working directory
参考： https://blog.csdn.net/huihuikuaipao_/article/details/100183521
情况一：
Git 可以在你提交时自动地把回车（CR）和换行（LF）转换成换行（LF），而在检出代码时把换行（LF）转换成回车（CR）和换行（LF）。 你可以用git config --global core.autocrlf true 来打开此项功能。 如果是在 Windows 系统上，把它设置成 true，这样在检出代码时，换行会被转换成回车和换行：
```
## 2. git pull 报错 ：

There is no tracking information for the current branch.
Please specify which branch you want to merge with（当前分支没有跟踪信息请指定要合并的分支）

    git branch --set-upstream-to origin/master master

继续报错 ： 

If you are planning on basing your work on an upstream
hint: branch that already exists at the remote, you may need to
hint: run "git fetch" to retrieve it.



## 3.提交冲突的情况下： Updates were rejected because the tip of your current branch is behind 

先更新本地版本  git pull  origin  xxx  
再进行提交   git  push origin xxx


##  4.warning: LF will be replaced by CRLF in ****** 
LF和CRLF其实都是换行符，但是不同的是，LF是linux和Unix系统的换行符，CRLF是window 系统的换行符。这就给跨平台的协作的项目带来了问题，保存文件到底是使用哪个标准呢？ git为了解决这个问题，提供了一个”换行符自动转换“的功能，并且这个功能是默认处于”自动模式“即开启状态的。
这个换行符自动转换会把自动把你代码里 与你当前操作系统不相同的换行的方式 转换成当前系统的换行方式（即LF和CRLF 之间的转换），这样一来，当你提交代码的时候，即使你没有修改过某个文件，也被git认为你修改过了，从而提示"LF will be replaced by CRLF in *****"
    解决
最简单的一种办法就是把自动转换功能关掉即可。

    输入命令 ：git config core.autocrlf false (仅对当前git仓库有效）
    git config --global core.autocrlf false (全局有效，不设置推荐全局）
## 5.0提交时转换为LF，检出时转换为CRLF
$ git config --global core.autocrlf true    




