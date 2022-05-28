# git基操 
## git  相关创建分支推送分支（部署ssh）
``` js
新建一个本地分支 
git checkout -b ts_EN
```    
```js
新建一个本地分支 以master主分支为模板创建一个yutong分支在从公用的仓库fetch代码：
git fetch origin master:yutong
```
```js
提交到远程分支（没有需要commit的内容）
git checkout -b ts_EN
```
```js
查询分支
git branch -a（-r只显示所有的分支 ， -a比-r多了本地已经选择的分支）  查看所有的分支  
```
提交到远程分支： ps：实际上是 git push origin ts_EN 


git add 报错:
The file will have its original line endings in your working directory
warning: LF will be replaced by CRLF in tests/unit/utils/validate.spec.js.
The file will have its original line endings in your working directory 
最简单的一种办法就是把自动转换功能关掉即可。
输入命令 ：git config core.autocrlf false (仅对当前git仓库有效）
git config --global core.autocrlf false (全局有效，不设置推荐全局）
```js
切换分支 
git checkout   xxx  
```
```js
提交冲突的情况下： Updates were rejected because the tip of your current branch is behind

先更新本地版本  git pull  origin  xxx  
再进行提交   git  push origin xxx

```
##  查看本机ssh公钥，生成公钥

    参考地址 https://blog.csdn.net/shog808/article/details/76563136
```js
a.打开你的git bash 窗口
b.进入.ssh目录： cd ~/.ssh
c.找到id_rsa.pub文件： ls
d.查看公钥： cat id_rsa.pub 或者 vim id_rsa.pub
```
## git add 报错 
```js
warning: LF will be replaced by CRLF in docs/.vuepress/nav.js.
The file will have its original line endings in your working directory
参考： https://blog.csdn.net/huihuikuaipao_/article/details/100183521
情况一：
Git 可以在你提交时自动地把回车（CR）和换行（LF）转换成换行（LF），而在检出代码时把换行（LF）转换成回车（CR）和换行（LF）。 你可以用git config --global core.autocrlf true 来打开此项功能。 如果是在 Windows 系统上，把它设置成 true，这样在检出代码时，换行会被转换成回车和换行：

#提交时转换为LF，检出时转换为CRLF
$ git config --global core.autocrlf true


```
## git clone报错
[session-0d4d6890] Access denied  403   clone代码报错    解决方法 
```js
    参考地址 https://blog.csdn.net/jianglianye21/article/details/112247286
    
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"

ps：ssh-keygen -t rsa -C "你的邮箱"     重新生成你的公钥
``` 
```js
ssh -T git@github.com 测试一下通不通，通了显示如下
切换删除分支  覆盖分支  “ 以分支 创建分支：

具体操作：
　　我现在在dev20181018分支上，想删除dev20181018分支

1. 先切换到别的分支:
    git checkout dev20180927
2. 删除本地分支： 
    git branch -d dev20181018

3. 如果删除不了可以强制删除，
    git branch -D dev20181018

4. 有必要的情况下，删除远程分支(慎用)：
    git push origin --delete dev20181018

5. 在从公用的仓库fetch代码：
    git fetch origin dev20181018:dev20181018

6. 然后切换分支即可：
    git checkout dev20181018

    注：上述操作是删除个人本地和个人远程分支，如果只删除个人本地，请忽略第4步

```

## git pull 报错 ：

There is no tracking information for the current branch.
Please specify which branch you want to merge with（当前分支没有跟踪信息请指定要合并的分支）

    git branch --set-upstream-to origin/master master

继续报错 ： 

If you are planning on basing your work on an upstream
hint: branch that already exists at the remote, you may need to
hint: run "git fetch" to retrieve it.

## git clone push 所有的操作 ssh  和 htpps 方式  都不行的时候   


```js
https://www.githubstatus.com/ 网站连通监测
1. 方法一 ： 修改host文件（github访问慢 ， 或者不能访问被墙 都可使用此方法测试）
找到host文件： 
windows系统的hosts文件的位置如下：C:\Windows\System32\drivers\etc\hosts
mac/linux系统的hosts文件的位置如下：/etc/hosts     
添加映射关系（在hosts中添加如下） ：
140.82.114.4	github.com
199.232.5.194	github.global.ssl.fastly.net
2. 方法二 ： 
修改本地网络环境 服务器dns地址 ： 
首选 8888
备用 114114114114 
cmd刷新DNS解析缓存  ipconfig /flushdns
```

## github技巧： 

    参考地址 ：https://www.bilibili.com/video/BV1q54y1f7h6?spm_id_from=333.1007.tianma.1-1-1.click

1.  按“ s ”  可搜索项目  在大厅搜索查看高级搜索  start  时间等

2.  按 “ t ” 查找文件 ； 点进源代码后，按“l”：跳转到某一行 

点击行号：可复制这行代码 生成永久链接

3. 按'。' 在线vscode
-  代码跳转：
+ 下载到本地
+  在线vscode：仓库详情界面按下“。”键，

4. 在线运行项目

在项目地址前加上`gitpod.io/#/`前缀
登陆：
加载：
运行：
## 
