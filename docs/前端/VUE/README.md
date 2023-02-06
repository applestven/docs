# 关于vue 

## vue3的响应式

1. 使用proxy进行代理 ， 代理的源对象有增删改查等（13种）操作 ，都会被拦截  ，，然后使用reflect（反射）动态对源对象属性进行
特定的操作 


2. reflect ， 是es6提供的对对象进行操作的   ，用来改进Object的一些方法 ， 以及以后对对象操作有新方法时会对reflect进行扩展  。 改进 ：
     1. 将Object对象有些操作的命令式的 ， name in obj   delete obj.name  改为  reflect.has(obj,name) 
refelct.deletePropoty(obj.name)    
    2. Object.definePropoty() 无法定义属性时，会抛出一个错误 ；而reflect会返回false  ，对返回结果进行合理修改

## vuex 

1. vuex的五个函数   

state   数据/状态    // this.$store.state.userId

getter    访问state 状态（可以称为state的计算属性）   辅助函数mapGetters   ， 映射state中的属性 // this.$store.getters.userIdDouble

Mutation  都state中的数据进行修改中间处理方法 //  this.$store.commit(‘mutations方法名’,值)

Action  将mutation中的方法  变为异步   （dispatch）// this.$store.dispatch

module  

## keep-alive 用于保存组件的渲染状态

include  缓存白名单
exclude    缓存黑名单
max 

include定义缓存白名单，keep-alive会缓存命中的组件；

exclude定义缓存黑名单，被命中的组件将不会被缓存；

max定义缓存组件上限，超出上限使用LRU的策略置换缓存数据。

## vue-router原理

更新视图但不重新请求页面，是前端路由原理的核心之一，目前在浏览器环境中这一功能的实现主要有2种方式,Hash模式和History模式：
（1）利用URL中的hash("#");

（2）利用History interface在HTML5中新增的方法;



1. hash（#）是URL 的锚点，代表的是网页中的一个位置，单单改变#后的部分，浏览器只会滚动到相应位置，不会重新加载网页，也就是说 #是用来指导浏览器动作的，对服务器端完全无用，HTTP请求中也不会不包括#；同时每一次改变#后的部分，都会在浏览器的访问历史中增加一个记录，使用”后退”按钮，就可以回到上一个位置；






2. History模式：


HTML5 History API提供了一种功能，能让开发人员在不刷新整个页面的情况下修改站点的URL，就是利用 history.pushState API 来完成 URL 跳转而无须重新加载页面


Hash模式：xxx.com/#/id=5 请求地址为 xxx.com,没有问题; 
History模式: xxx.com/id=5 请求地址为 xxx.com/id=5，如果后端没有对应的路由处理，就会返回404错误； （需要后端做地址映射处理 ）

为解决这一问题，vue-router提供的方法是：

在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。

给个警告，因为这么做以后，你的服务器就不再返回 404 错误页面，因为对于所有路径都会返回 index.html 文件。为了避免这种情况，你应该在 Vue 应用里面覆盖所有的路由情况，然后在给出一个 404 页面。或者，如果你使用 Node.js 服务器，你可以用服务端路由匹配到来的 URL，并在没有匹配到路由的时候返回 404，以实现回退 




