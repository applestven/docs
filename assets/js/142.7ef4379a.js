(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{655:function(t,e,n){"use strict";n.r(e);var r=n(38),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"记录一些网络配置-环境搭建等等"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#记录一些网络配置-环境搭建等等"}},[t._v("#")]),t._v(" 记录一些网络配置  环境搭建等等")]),t._v(" "),n("h1",{attrs:{id:"zerotier-搭建-相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zerotier-搭建-相关"}},[t._v("#")]),t._v(" zerotier 搭建 相关")]),t._v(" "),n("h2",{attrs:{id:"快捷入网"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快捷入网"}},[t._v("#")]),t._v(" 快捷入网")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("下载对应平台的zerotier软件  安装\nhttps://www.zerotier.com/download/")])]),t._v(" "),n("li",[n("p",[t._v("win+r 输入cmd  输入 zerotier-cli join e5cd7a9e1c1a655b （linux同）")])]),t._v(" "),n("li",[n("p",[t._v("window升级成专业版 (咸鱼购买会给两个密钥，一个升级  一个激活 )\n【22】密钥P3B3Q-7M6QH-RTG3B-974XR-6VCYV")])])]),t._v(" "),n("p",[t._v("方法①：点击此电脑-属性-更改密钥--输入密钥")]),t._v(" "),n("p",[t._v("方法②：win键+R键一起按，运行窗口输入：slui 3（有空格），输入密钥")]),t._v(" "),n("p",[t._v("错误代码末尾6506  028  efd ，ee2，ee7等代码 是网络拥堵，连接服务器超时，重复输入几次即可，错误代码1023是打错密钥")]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[t._v("激活后 ，控制面板搜索 远程桌面 ，开启远程桌面")])]),t._v(" "),n("li",[n("p",[t._v("如果是无密码账户 ， 解决“用户帐户限制(例如，时间限制)会阻止你登录。请与系统管理员或技术支持联系以获取帮助”   解决办法:https://blog.csdn.net/qq_37592750/article/details/134890420")])])]),t._v(" "),n("h2",{attrs:{id:"网络组网"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络组网"}},[t._v("#")]),t._v(" 网络组网")]),t._v(" "),n("h2",{attrs:{id:"zerotier-组网"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zerotier-组网"}},[t._v("#")]),t._v(" zerotier 组网")]),t._v(" "),n("p",[t._v("搭建根 plant\nhttps://zhuanlan.zhihu.com/p/544807922     可以参考其思路 ，但下载链接不能使用\nhttps://blog.csdn.net/smzq123/article/details/128760942  可以参考其思路 ，但下载链接不能使用\nhttps://zhuanlan.zhihu.com/p/573746661?utm_id=0    有一定基础再参考\nhttps://www.west.cn/docs/408273.html    安装 zerotier 服务端")]),t._v(" "),n("p",[t._v("https://blog.csdn.net/smzq123/article/details/128760942")]),t._v(" "),n("h2",{attrs:{id:"plant主要搭建流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plant主要搭建流程"}},[t._v("#")]),t._v(" plant主要搭建流程 ：")]),t._v(" "),n("p",[t._v("https://zhuanlan.zhihu.com/p/605544905      主要参考\n第一次创建 ，add network失败了 ，第二次成功了")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("下载项目地址 ：\ngit clone https://github.com/xubiaolin/docker-zerotier-planet.git\n或者 ：\ngit clone https://github.com/xubiaolin/docker-zerotier-planet.git")])]),t._v(" "),n("li",[n("p",[t._v("进入项目目录    运行 deploy.sh 脚本\ncd docker-zerotier-planet     ./deploy.sh")])]),t._v(" "),n("li",[n("p",[t._v("下载 planet 文件\n脚本运行完成后，会在 /opt/ 目录下有个 planet 文件")])]),t._v(" "),n("li",[n("p",[t._v("新建网络\n访问 http://ip:3443 进入controller页面\n使用默认账号为:admin")])])]),t._v(" "),n("p",[t._v("默认密码为:password")]),t._v(" "),n("p",[t._v("add netWork 成功后   点击netWorks  可以看到 已经创建的 network")]),t._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[t._v("最终因为创建的网络 ，客户端加入join无法在后台memebers中获取到  ，所以放弃了")])]),t._v(" "),n("h2",{attrs:{id:"zerotier-moon搭建流程-成功"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zerotier-moon搭建流程-成功"}},[t._v("#")]),t._v(" zerotier moon搭建流程 （成功）")]),t._v(" "),n("p",[t._v("参考 ： http://www.taodudu.cc/news/show-3176122.html?action=onClick")]),t._v(" "),n("ol",[n("li",[t._v("移除zerotier-one\nsudo systemctl status zerotier-one 查")])]),t._v(" "),n("p",[t._v("sudo systemctl stop zerotier-one 停")]),t._v(" "),n("p",[t._v("sudo apt remove zerotier-one  移除\n2. 安装zerotier-one\nsudo apt-get update\nsudo apt-get install zerotier-one\nsudo systemctl start zerotier-one\nsudo zerotier-cli join NETWORK_ID")]),t._v(" "),n("p",[t._v("使用官方脚本安装Zerotier\ncurl -s https://install.zerotier.com | sudo bash\nsudo systemctl start zerotier-one\nsudo zerotier-cli join NETWORK_ID")]),t._v(" "),n("p",[t._v("#zerotier安全组说明\n#ztncui Web控制面板使用的端口。可以自行选择端口，根据自己选择端口配置安全组\nTCP:3443")]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("zerotier简明教程")])]),t._v(" "),n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v('最近使用zerotier替换了frp来实现内网穿透，zerotier是一个软交换机，使用zerotier可以让多台内网机器组成一个局域网。\n\n首先要安装 zerotier-one 这个软件包，如果是ArchLinux，直接运行：\n\n$ sudo pacman -S zerotier-one\n\n如果是Ubuntu/Debian/CentOS，则运行：\n\n$ curl -s https://install.zerotier.com/ | sudo bash\n\n注：如果是Windows或者macOS、Android、iOS等，那么可以在 https://www.zerotier.com/download/ 下载zerotier\n\n之后就完成了安装，然后我们要启动zerotier，并且让他开机自启动，运行：\n\n$ sudo systemctl start zerotier-one.service\n\n$ sudo systemctl enable zerotier-one.service\n\n例如我有两台内网机器，于是都按照上面的描述进行了安装和启动。接下来要做的事情是到 https://my.zerotier.com/\n\n里注册帐号并且登录，然后创建一个Network，创建之后点到这个网络里，拉到最上面，选择 Private(私有网络) ，这样别人加入的时候就需要认证，\n\n如果想改名字的话，改个名字，其他不用动。然后复制 Network ID，就是拉到最上面的时候可以看到的一个类似 83048a0632246d2c 的字符串。\n\n然后在两台内网机器上执行：\n\n$ sudo zerotier-cli join 83048a0632246d2c\n\n加入之后他们就启动了，但是还连不进我们创建的网络，因为我们选择了 Private(私有网络) ，我们还需要到 https://my.zerotier.com/\n\n上面对接入的机器打勾，拉到 Members 这一节，把前面的两个勾勾选上。\n\n这个时候执行一下 ip a 你会发现多了一个叫做 ztuzethlza 或者类似名字的设备，还有IP地址，这就是zerotier组建的局域网的IP\n\n地址，但是这个时候你如果直接连接另外一台机器的话可能会非常慢，所以为了加速，我们还需要一台在国内的，或者是在国外但是访问\n\n速度相当快的机器做转发。\n\n搭建中转机器(moon)\n\n首先把中转机器按照上述步骤一起加入网络，然后执行：\n\n$ cd /var/lib/zerotier-one/\n\n$ sudo zerotier-idtool initmoon identity.public > moon.json\n\n接下来编辑一下 moon.json，把 "stableEndpoints": [] 这一节里加入中转机器的公网IP，例如 "stableEndpoints": ["1.2.3.4/9993"]，其中\n\n9993是默认监听的端口，接下来要把9993端口的防火墙放开(注意是UDP)，如果你的机器外边还有防火墙的话，也要一起放开，例如阿里云的机器就有\n\n防火墙规则，要一起把对应端口的UDP流量放行，此后，我们要生成moon的配置：\n\n$ sudo ufw allow 9993/udp\n\n$ sudo zerotier-idtool genmoon moon.json\n\n接下来把中转服务器的 zerotier-one 重启：\n\n$ sudo systemctl restart zerotier-one\n\n加入moon\n\n注意我们搭建moon的时候有一个 moon.json，我们把内网机器加入这个moon的时候，需要其中的一个id：\n\n$ grep id /var/lib/zerotier-one/moon.json | head -n 1\n\n"id": "xxxxxxxxxx",\n\n复制这个id，然后在内网机器执行：\n\n$ sudo zerotier-cli orbit xxxxxxxxxx xxxxxxxxxx\n\n注意，xxxxxxxxxx 要两遍。此后重启 zerotier，完毕。等一会儿之后，zerotier局域网内的机器就可以互相访问了，延时非常低：\n\n$ ping 192.168.1.111\n\nPING 192.168.1.111 (192.168.1.111) 56(84) bytes of data.\n\n64 bytes from 192.168.1.111: icmp_seq=1 ttl=64 time=35.0 ms\n\n64 bytes from 192.168.1.111: icmp_seq=2 ttl=64 time=37.1 ms\n\n64 bytes from 192.168.1.111: icmp_seq=3 ttl=64 time=36.9 ms\n\n^C\n\n--- 192.168.1.111 ping statistics ---\n\n3 packets transmitted, 3 received, 0% packet loss, time 4ms\n\nrtt min/avg/max/mdev = 35.039/36.369/37.145/0.944 ms\n\n注：如果是Windows/macOS/Android/iOS，那么可以使用所安装的图形客户端加入网络。\n')])])]),n("h2",{attrs:{id:"zerotier节点与控制器通讯的端口-可自行选择端口-根据自己选择的端口配置安全组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zerotier节点与控制器通讯的端口-可自行选择端口-根据自己选择的端口配置安全组"}},[t._v("#")]),t._v(" Zerotier节点与控制器通讯的端口，可自行选择端口，根据自己选择的端口配置安全组")]),t._v(" "),n("p",[t._v("TCP:9993\n#MOON节点与控制器通讯的中继端口，可自行选择端口，根据自己选择的端口配置安全组\nUDP:9993\n#需要分别设置ipv4和ipv6的规则")]),t._v(" "),n("h2",{attrs:{id:"zerotier-下载地址"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zerotier-下载地址"}},[t._v("#")]),t._v(" Zerotier 下载地址")]),t._v(" "),n("p",[t._v("https://download.zerotier.com/RELEASES/")]),t._v(" "),n("h2",{attrs:{id:"远程桌面的连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#远程桌面的连接"}},[t._v("#")]),t._v(" 远程桌面的连接")]),t._v(" "),n("p",[t._v("https://www.ngui.cc/zz/1910491.html?action=onClick")]),t._v(" "),n("ol",[n("li",[t._v("升级专业版win\nwin10家庭版是没有远程桌面的，我们需要升级到专业版！！（淘宝10元就有升级码，而且好像可以重复用几次）")]),t._v(" "),n("li",[t._v("被远程的电脑上的准备工作\n桌面右击我的电脑，选择属性----\x3e远程控制：远程协助和远程桌面都打开，一般不用再选择用户，用你当前账户就行。")]),t._v(" "),n("li",[t._v("在要进行远程的电脑开启远程桌面\n直接菜单栏右下角搜索“远程桌面”，或者按下win+r快捷键然后输入 mstsc 运行远程桌面。\n这里点击下面的显示选项")])]),t._v(" "),n("p",[t._v("注意点：这里在计算机输入之前的要连接电脑的Managed IP，用户名用被链接电脑的Microsoft账户（也就是被远程这台电脑当前的登陆账户），之后会输入这个账户的登陆密码（也就是被链接电脑账户的密度）\n点击链接就行了，前一步还有其他设置，自己可以修改，如显示、本地资源、体验和高级功能等。")]),t._v(" "),n("p",[t._v("到此就全部完成了，win10自带的远程桌面比TeamViewer还顺畅！！")])])}),[],!1,null,null,null);e.default=o.exports}}]);