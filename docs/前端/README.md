---

title: WEB
autoSort: 1

---

# 无处归纳的web
## js三大特性  封装 继承 多态

## 二级域名可以访问到一级域名的cookie吗

可以   二级域名之间 也可以 以一级域名为桥梁   建立联系  setCookie

## 事件捕获与事件冒泡

事件捕获 向下执行    
事件冒泡 向上执行

## http1.0 和http1.x 以及 https

HTTP 1.0
无状态，无连接；
短连接：每次发送请求都要重新建立tcp请求，即三次握手，非常浪费性能；
无host头域，也就是http请求头里的host；
不允许断点续传，而且不能只传输对象的一部分，要求传输整个对象。
HTTP 1.1
长连接，流水线，使用connection:keep-alive使用长连接；
请求管道化；
增加缓存处理(新的字段如cache-control)；
增加Host字段，支持断点传输等；
由于长连接会给服务器造成压力。

HTTP 2.0
二进制分帧；
多路复用(或连接共享)，使用多个stream，每个stream又分帧传输，使得一个tcp连接能够处理多个http请求；
头部压缩，双方各自维护一个header的索引表，使得不需要直接发送值，通过发送key缩减头部大小；
服务器推送(Sever push)。
HTTP 3.0
基于google的QUIC协议，而quic协议是使用udp实现的；
减少了tcp三次握手时间，以及tls握手时间；
解决了http 2.0中前一个stream丢包导致后一个stream被阻塞的问题；
优化了重传策略，重传包和原包的编号不同，降低后续重传计算的消耗；
连接迁移，不再用tcp四元组确定一个连接，而是用一个64位随机数来确定这个连接；
更合适的流量控制。



总结缺点 ： 
1. 短连接，无状态  ，
2. 每次发起请求都需要重新建立tcp连接，（新建tcp十分消耗性能） 
3. 不支持断点续传 

## 高频技术词汇 
1.  es6+  es7 
2.   javaScrpipt 、css基础扎实 、熟悉es6 、 css3 、html5 、webpack等前端技术
    掌握webpack等构建工具 、 有丰富的前端工程化实践经验
3.  熟悉HTTP、TCP\IP 协议 。 了解浏览器工作原理
4. 精通webpack，gulp ，vite等前端构建工具和模块化方案 
5.  github上有高star项目 、 有技术博客 、 熟悉typescript、vue3.0 、vite（加分）
6.了解后端技术栈、熟悉后端协作模式、熟悉一门后端语言
7. 有良好的模块与组件设计能力
8. 熟悉react/vue/angular至少一种前端框架，能理解框架的设计

熟悉微信api 、微信开放政策 、以及微信支付的等相关内容 

面向对象  原型链 ajax


前端漏洞

响应式页面、

webGL


## 关于360 兼容模式 内核关系
360安全浏览器是基于IE内核和Chrome内核的双核浏览器。


1、IE浏览器内核：Trident内核，也是俗称的IE内核；
2、Chrome浏览器内核：统称为Chromium内核或Chrome内核，以前是Webkit内核，现在是Blink内核；
3、Firefox浏览器内核：Gecko内核，俗称Firefox内核；
4、Safari浏览器内核：Webkit内核；
5、Opera浏览器内核：最初是自己的Presto内核，后来是Webkit，现在是Blink内核；
6、360浏览器、猎豹浏览器内核：IE+Chrome双内核；
7、搜狗、遨游、QQ浏览器内核：Trident（兼容模式）+Webkit（高速模式）；
8、百度浏览器、世界之窗内核：IE内核；
9、2345浏览器内核：以前是IE内核，现在也是IE+Chrome双内核；

最终决定浏览器表现出来的页面效果的差异是：渲染引擎 Rendering Engine（也叫做排版引擎），也就是我们通常所说的“浏览器内核”，负责解析网页语法（如HTML、JavaScript）并渲染、展示网页。相同的代码在不同的浏览器呈现出来的效果不一样，那么就很有可能是不同的浏览器内核导致的。


在head标签中添加一行代码：

```html
<html>
  <head>
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
  </head>
  <body>
  </body>
</html>
```
content的取值为webkit,ie-comp,ie-stand之一，区分大小写，分别代表用webkit内核，IE兼容内核，IE标准内核。
若页面需默认用极速核，增加标签：<meta name="renderer" content="webkit">
若页面需默认用ie兼容内核，增加标签：<meta name="rend  neierer" content="ie-comp">
若页面需默认用ie标准内核，增加标签：<meta name="renderer" content="ie-stand">



## eslint

知悉 ： ESLint 由 JavaScript 红宝书 作者 Nicholas C. Zakas 编写 

总结必知 ： ESLint 是行文规范 、代码规范， 也就是编码风格  ，支持自定义在eslintrc.js文件中配置 （.eslintignore中配置需要忽略规范的文件 ）， 在vscode中需要进行配置 （随版本的不同配置的内容不同） 

## 处理后端二进制文件保存下载 

``` js
const content = res;
          const blob = new Blob([content]);
          const fileName = '导出信息.xls';
          if ('download' in document.createElement('a')) {
            // 非IE下载
            const elink = document.createElement('a');
            elink.download = fileName;
            elink.style.display = 'none';
            elink.href = URL.createObjectURL(blob);
            document.body.appendChild(elink);
            elink.click();
            URL.revokeObjectURL(elink.href); // 释放URL 对象
            document.body.removeChild(elink);
            } else {
                // IE10+下载
                navigator.msSaveBlob(blob, fileName);
            }
            })
```

## LHS查询  和  RHS 查询     区别

LHS  赋值   创建新变量 
地址引用  没找到就报错  
var a = 2  左查询  
a= c  右查询    ， 从不知道为何物  报错

相同点 ： 左右查询 都是一层一层往上查找  ， LHS找不到就会创建全局变量 （非严格模式）  。 RHS 找不到就会refenceError 

## vue项目局域网访问
``` js
"scripts": {
    "serve": "vue-cli-service serve --host 0.0.0.0",
    "build": "vue-cli-service build"
  },

添加了 --host 0.0.0.0
```