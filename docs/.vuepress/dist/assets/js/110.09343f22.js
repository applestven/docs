(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{620:function(t,s,o){"use strict";o.r(s);var l=o(38),a=Object(l.a)({},(function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"mysql基操"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mysql基操"}},[t._v("#")]),t._v(" mysql基操")]),t._v(" "),o("h2",{attrs:{id:"mysql的安装和常用命令-window"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mysql的安装和常用命令-window"}},[t._v("#")]),t._v(" mysql的安装和常用命令（window）")]),t._v(" "),o("ol",[o("li",[t._v("详细安装介绍 ：\n（下载免安装  二百多M的）")])]),t._v(" "),o("p",[t._v("https://dev.mysql.com/downloads/mysql/")]),t._v(" "),o("p",[t._v("打开管理员权限的cmd窗口  ！")]),t._v(" "),o("p",[t._v("mysqld --install   安装")]),t._v(" "),o("p",[t._v("mysqld --initialize --console  初始化   在返回得到随机密码 root@localhost: ves#jqrw&7vK")]),t._v(" "),o("p",[t._v("net start mysql 开启msql服务 ；")]),t._v(" "),o("p",[t._v("mysql -u root -p登入   输入前面得到的随机密码")]),t._v(" "),o("p",[t._v("alter user 'root'@'localhost' identified by '779604436';     (by 接着的是密码)    修改密码")]),t._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[t._v("配置sqlyog   在百度网盘  =》 学习工具有相关安装包")])]),t._v(" "),o("p",[t._v("sqlyog链接报 2058   ； 百度tip:mysql加密方式不一样了\n执行下面的命令\nALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';"),o("br"),t._v("\n可以链接了 ？？？ QAQ  鬼知道为什么")]),t._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[t._v("常用命令"),o("br"),t._v("\nshow global variables like 'port';      查看数据库端口  ；")])]),t._v(" "),o("p",[t._v("show databases ;   查看数据库")]),t._v(" "),o("p",[t._v("再次在电脑安装 需要执行以下步骤才能解决：")]),t._v(" "),o("ol",[o("li",[t._v("打开cmd：mysql -u root -p\n输入密码root\n2.进入mysql依次执行下面语句\nALTER USER'root'@'localhost' IDENTIFIED BY 'root' PASSWORD EXPIRE NEVER; #修改加密规则\nALTER USER'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'; #更新一下用户的密码\nFLUSH PRIVILEGES; #刷新权限\n重置密码：alter user'root'@'localhost' identified by '779604436';")])]),t._v(" "),o("p",[t._v("#忘记密码重新设置  ： https://www.cnblogs.com/wsl-/p/10688292.html")])])}),[],!1,null,null,null);s.default=a.exports}}]);