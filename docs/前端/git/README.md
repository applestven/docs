# git基操 
## git  相关创建分支推送分支（部署ssh）
- 新建一个本地分支 
    git checkout -b ts_EN

- 新建一个本地分支 以master主分支为模板创建一个yutong分支在从公用的仓库fetch代码：
    git fetch origin master:yutong

- 提交到远程分支（没有需要commit的内容） //提交到远程分支：
    git checkout -b ts_EN

- 查询分支
    git branch -a（-r只显示所有的分支 ， -a比-r多了本地已经选择的分支）  查看所有的分支  

- 切换分支  / 切换某个文件（修改后切换原文件） 
    git checkout   xxx  

- 删除本地分支： 
    git branch -d dev20181018

- 如果删除不了可以强制删除，
    git branch -D dev20181018

- 有必要的情况下，删除远程分支(慎用)：
    git push origin --delete dev20181018

- 提交冲突的情况下： 
    Updates were rejected because the tip of your current branch is behind

- 先更新本地版本  git pull  origin  xxx  
- 再进行提交   git  push origin xxx 

- 同步远程仓库中的代码更新到本地仓库中的对应分支上 ，它的作用是从远程仓库（origin）获取分支（dev20181018）的最新版本，并将它存储在本地仓库中的一个名为dev20181018的分支上
    git fetch origin dev20181018:dev20181018

## 临时关闭 git commit 的eslint功能 
    git commit --no-verify -m " 添加配置说明"  

##  查看本机ssh公钥，生成公钥
    $ ssh-keygen -t rsa -C "applestven@gmail.com"
参考地址 https://blog.csdn.net/shog808/article/details/76563136

1. 打开你的git bash 窗口(cmd打不开 必须gitbash)
2. 进入.ssh目录： cd ~/.ssh
3. 查看公钥： cat id_rsa.pub 或者 vim id_rsa.pub

## git 设置本地相关
    git config --global user.name "你的名字"
    git config --global user.email "你的邮箱"

    ps：ssh-keygen -t rsa -C "你的邮箱"     重新生成你的公钥

    ssh -T git@github.com 测试一下通不通

## 服务器添加公钥

    1. 添加公钥到authorized_keys 
    sudo vim ~/.ssh/authorized_keys
    2. 重启ssh服务  （unbuntu）
    sudo /etc/init.d/ssh restart


## github技巧： 

    参考地址 ：https://www.bilibili.com/video/BV1q54y1f7h6?spm_id_from=333.1007.tianma.1-1-1.click

1.  按“ s ”  可搜索项目  在大厅搜索查看高级搜索  start  时间等

2.  按 “ t ” 查找文件 ； 点进源代码后，按“l”：跳转到某一行 

点击行号：可复制这行代码 生成永久链接

3. 按'。' 在线vscode（不好用 速度慢）
-  代码跳转：
+ 下载到本地
+  在线vscode：仓库详情界面按下“。”键，

4. 在线运行项目

在项目地址前加上`gitpod.io/#/`前缀
<!-- 登陆：
加载：
运行： -->

## git 添加远程地址 
首先，你需要确保你处于一个 Git 仓库的目录中。如果你确定你已经在一个 Git 仓库中，但仍然遇到这个问题，你可以尝试运行 git init 来初始化一个 Git 仓库，然后再次尝试添加远程地址

要管理两个远程地址并将提交的提交一起发送到新远程地址，你可以按照以下步骤操作

- 使用 Git 命令添加新的远程地址
git remote add origin <远程仓库的 URL>

- 推送到新的远程地址：

git push new_remote <分支名>

- 同时推送到两个远程地址
首先，编辑 Git 配置文件：

git config --global --edit

在配置文件中添加如下内容：

[remote "all"]
    url = <原远程地址>
    url = <新远程地址>

这样你就创建了一个名为 all 的远程别名，代表了两个远程地址。

提交到两个远程地址：
现在每次你想要提交到两个远程地址时，可以使用 all 别名：

git push all <分支名>






