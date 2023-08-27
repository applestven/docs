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



