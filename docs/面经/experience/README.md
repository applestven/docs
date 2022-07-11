# 遇到的问题 
##  vue 不需要响应式的数据的处理 
```js
    // 方法一：将数据定义在data之外
data () {
    this.list1 = { xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx }
    return {}
 }
    
// 方法二：Object.freeze()
data () {
    return {
        list1: Object.freeze({xxxxxxxxxxxxxxxxxxxxxxxx}),
    }
 }
```
## vue 内存泄漏的解决办法
###  https://blog.csdn.net/weixin_57646982/article/details/120082047

1. 在非严格模式下 ， fn内部创建的变量 ，this指向window ， 导致意外的全局变量  
一般vue在destoryed()里进行清除 

2. setTimeout  和 setInterval  以及 dom元素 未及时清除
变量赋值为 dom元素 
var test = document.querySelect('.main') 
3. 未及时清除闭包 || 模块形成的闭包内部变量使用完后没有置成null
``` js
function fun(name){
    function fun1(){
        console.log(name)
    }
    return fun1 
}
var fn = fun('tom')

// 清除闭包 
fn = null 
```
4. 使用第三方库创建，没有调用正确的销毁函数 
第三方ui框架 比如iview 也可能发生内存泄漏问题  ，那就具体情况 ，具体分析了（比如新老版本 等） 

5. 事件绑定 造成的内存泄漏
```js
// 绑定方式 但不限于以下 
addEventListener('click',fn()) || $(window).on('scroll',fn())  

// 解决的方法就是 在合适的时机对事件解绑
removeEventListener('click',fn())
$(window).off('scroll', fn);

```
6. Vuex的$store watch了之后没有unwatch
```js
destroyed () {
    this.unwatchStore();
}

```

7. 如何排查
借助Chrome的内存分析工具进行快速排查，本文主要是用到了内存堆快照的基本功能，读者可以尝试分析自己的页面是否存在内存泄漏，方法是做一些操作如弹个框然后关了，拍一张堆快照，搜索detached，按distance排序，把非空的节点展开父级，找到标黄的字样说明，那些就是存在没有释放的引用。也就是说这个方法主要是分析仍然存在引用的游离DOM节点。因为页面的内存泄露通常是和DOM相关的，普通的JS变量由于有垃圾回收所以一般不会有问题，除非使用闭包把变量困住了用完了又没有置空。

  DOM相关的内存泄露通常也是因为闭包和事件绑定引起的。绑了（全局）事件之后，在不需要的时候需要把它解绑。当然直接绑在div上面的可以直接把div删了，绑在它上面的事件就自然解绑了。


## 减少动画的回流 与 重绘  (dom结构的增删改频繁)
1. 最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。
2. 避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。也可以在一个display:none的元素上进行操作，最终把它显示出来。因为display:none上的DOM操作不会引发回流和重绘
3. 避免设置多层内联样式。
4. 避免使用CSS表达式
5. 将动画效果应用到position属性为absolute或fixed的元素上(与2类似 ，不做整个页面重构的计算)
具有复杂动画的元素使用绝对定位，使它脱离文档流



## http缓存 

过期时间 ：
expires
cach-control: max-age:60 (优先级更高)

协商缓存：
客户端资源过期 需要重新获取服务器资源 ，但服务器资源不一定有更新 ，所以 

一般是对请求文件的“ 更新时间 ” 以及 “文件名的hash值” 进行比较  
通过设置不同的缓存策略比较    etag的优先级更高 

如果需要更新  那么响应就是200 ， 如果不需要更新那么返回  304 ，继续使用之前的资源 

静态文件的缓存  前端在头部标签中<mate> 中设置  
xhr请求的缓存  以请求头的方式进行 添加相关的缓存策略

如果某个请求的资源 更新频繁 ， 那么使用 cach-control :no-cach  ， 这节省了判断 ， 也可以提升性能 ，

如果请求的资源比较敏感 ，不希望用户本地查看 ， 那么就使用 cach-control：no-store  

## promise原理 



