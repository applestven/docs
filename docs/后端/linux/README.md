# 待完善
##  Ubuntu防火墙

1. sudo ufw status   inactive是关闭，active是开启 
2. sudo ufw disable  关闭防火墙
3. sudo ufw enable 开启防火墙 开启防火墙的状态下，只有系统允许的端口才能被其他主机访问。
4. sudo ufw reload 重启防火墙
5. sudo ufw allow [端口号]   开放指定端口号
6. sudo ufw delete allow [端口号]  关闭指定端口
7. sudo ufw deny [端口号] 不允许访问指定端口号 



## vim 的使用  

1. 保存和退出命令
`
:w  保存修改
:q  不保存修改退出
:wq   保存修改并退出；或者用 x!，在或者用 ESC+shift+ZZ；
:w 文件名；表示把当前文件的内容另存到指定文件里；相当于备份；

`


## linux 命令收集 

netstat  -tunlp  查看可访问的端口
## zerotier 组网 
搭建根 plant
https://zhuanlan.zhihu.com/p/544807922     可以参考其思路 ，但下载链接不能使用
https://blog.csdn.net/smzq123/article/details/128760942  可以参考其思路 ，但下载链接不能使用
https://zhuanlan.zhihu.com/p/573746661?utm_id=0    有一定基础再参考 
https://www.west.cn/docs/408273.html    安装 zerotier 服务端



https://blog.csdn.net/smzq123/article/details/128760942  

https://zhuanlan.zhihu.com/p/605544905      主要参考



#zerotier安全组说明
#ztncui Web控制面板使用的端口。可以自行选择端口，根据自己选择端口配置安全组
TCP:3443
# Zerotier节点与控制器通讯的端口，可自行选择端口，根据自己选择的端口配置安全组
TCP:9993
#MOON节点与控制器通讯的中继端口，可自行选择端口，根据自己选择的端口配置安全组
UDP:9993
#需要分别设置ipv4和ipv6的规则