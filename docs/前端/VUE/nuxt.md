# nuxt  服务器端渲染框架 

	nuxt-login 登录 获取个人信息 配置axios 获取token 持续化存储例子 
	
	nuxt-project 实践例子 

	nuxt-vuex vuex状态树的使用

## 为什么要用nuxt ？

SEO ： 搜索引擎优化
1. 多页面
2. title、描述、关键词
3. 网站内容是怎么来的？

##  解决方式一：预渲染  
    案例 nuxt/pre-rendered  
**A> 使用插件：prerender-spa-plugin**

1.vue项目中安装prerender-spa-plugin

	npm install prerender-spa-plugin -S
    yarn add prerender-spa-plugin

2.vue.config.js进行配置


**B> 修改title描述关键词：vue-meta-info**

1.下载

    npm install vue-meta-info -S
    yarn add vue-meta-info

2.到页面组件中配置
```js
	import MetaInfo from 'vue-meta-info';
	metaInfo: {
	title: '小鹿线官网', 
		meta: [{               
		        name: '关键字,web前端',
		        content: '描述'
		    }]
	}
```
可以解决：
	
	1. 打包多页面
	2. 可以解决每个页面单独生成title描述关键词 [vue-meta-info]
	3. 接口数据是在html生成之前就放在页面上的，爬虫可以抓取到内容

存在的问题：

	1. 预渲染无法配置动态路由
	2. 如果title描述关键词来自于接口的数据，配置到meta-info也是不行的

适合做什么项目：一个项目可能某几个页面需要做seo   

可能遇到问题 ： 页面内容 也就是接口获取的数据没有打包到页面上  改用用hash可在serve 看到效果 

## 4-5 解决方式二：服务端渲染（通过SSR）

	适合做什么项目：一个项目可能所有页面都要做seo	
### 解决seo的问题：

1. 前后端不分离

	压力在后端 ，好处：安全

2. 前后端分离的

	2.1 spa单页面应用[vue-cli本身处理不了seo]

		压力客户端

	2.2 预渲染

		压力客户端

		问题：
			1. 在html页面加载之前数据过来渲染后才有html的dom结构，这样的话可能也会存在页面空白的情况

			2. 一个项目不是所有页面都做seo

	2.3 服务端渲染

		压力客户端

		问题：起了2个服务 [一个是后端自己语言的服务，一个是nodejs的服务]


## 6 创建安装nuxt项目
 npx create-nuxt-app <项目名>
 yarn create nuxt-app <项目名>
一、安装过程中的选项
	
	Programming language	:   程序设计语言
	Package manager			:   包管理器
	UI framework			:	ui框架
	Nuxt.js modules			:   nuxt的js模块
	Linting tools			:	代码校验工具
	Testing framework		:   测试框架
	Rendering modules       :	渲染模式
	Deployment target		:   部署目标
	Development tools       :   开发工具
	Version control system  :   版本控制工具

二、目录结构

	pages  			:  存放页面	
		类似于src/views
	components  	:  存放组件
		类似于src/components
	static      	:  存放静态资源
		类似于src/assets
	store			:  vuex状态树
		类似于src/store
	nuxt.config.js  : 全局的配置文件
		类似于vue.config.js		

## 7 nuxt生命周期

1. nuxtServerInit( store , context ){}

		参数1  ： vuex上下文
		参数2  ： nuxt上下文

2. middleware({store,route,redirect,params,query,req,res}){}

		***类似于vue中的导航守卫

		a>全局

			nuxt.config.js进行配置
			router:{
				middleware:'名称'
			}

			新建middleware目录 ==> 文件.js

		b>页面
				<script>
				export default {
				  middleware:'auth'
				}
				</script>
				新建middleware目录 ==> 文件.js
			或者
				<script>
				export default {
				 	middleware(){
	  	
	  				}
				}
				</script>
				
3. validate({params,query}){}
		***校验url参数
```js        
<script>
	export default {
		validate({params,query}){
		    console.log('validate');
		  	return /^\d+$/.test(query.id);
		}
	}
</script>
```
4. asyncData({store,params}){}

		***pages中的页面来请求数据的  数据用return

5. fetch({app,store,params}){} 
		***组件中的页面来请求数据的(页面也可以用)  可用this


二、服务端和客户端共有的 生命周期

	beforeCreate
	created

三、客户端生命周期

	beforeMount
  	mounted
  	beforeUpdate
  	updated
  	beforeDestroy
  	destroyed

## 8 nuxt路由
一、自动生成

	链接：https://www.nuxtjs.cn/guide/routing

	路由的跳转和vue差不多注意 <nuxt-link> 就行了

二、使用router.js

	2.1 下载 ： @nuxtjs/router	

		npm i @nuxtjs/router -S

	2.2 下载完成后在nuxt.config.js的modules模块进行配置

		modules: [
		    '@nuxtjs/router'
		],

	2.3 把router文件放入nuxt项目根目录

		***必须router.js

	2.4 修改router.js的内容

	2.5 nuxtjs/router返回的内容和vue有所不同
```js
		export function createRouter() {
		  return new VueRouter({
		    mode: 'history',
		    routes
		  })
		}
```        
## 9 导航守卫
一、router.js

	vue-cli中怎么用，nuxt中就怎么用，几乎一样。

二、nuxtjs

	2.1 中间件 : middleware
```js
		// a>全局

			1. nuxt.config.js进行配置
				router:{
				    middleware:'auth'
				}
			2. 新建middleware/auth.js文件
				export default ()=>{
					console.log( 'middleware' );
				}
		// b>局部
			新建middleware/auth.js文件
				export default ()=>{
					console.log( 'middleware' );
				}
                export default{
                    middleware:'auth'
                }
			
			或：

			export default{
				middleware(){

			}

```
	2.2 插件  : plugins 全局
```js
		a> nuxt.config.js进行配置
			plugins: [
			    '~/plugins/router.js'
			]
		b> 新建plugins/router.js

			export default ({app})=>{
				app.router.beforeEach((to,from,next)=>{
					console.log( to );
					next();
				})
			}
```

****补充：服务端不能使用localStorage和cookie的解决方案

参考链接：https://www.npmjs.com/package/cookie-universal-nuxt

1. 安装下载

	npm i --save cookie-universal-nuxt

2. nuxt.config.js进行配置

	modules: [
	    'cookie-universal-nuxt'
	]
3. 就正常使用

	this.$cookies.set()
	this.$cookies.get()
	....

## 10 config配置head
```js
	组件局部：

		<script type="text/javascript">
		export default{
			head(){
				return {
					title: '关于我们_小鹿线',
				    meta: [
				      { hid: 'description', name: 'description', content: '此处是网站描述' },
				      { hid: 'keywords', name: 'keywords', content: '此处是网站关键词' }
				    ]
				}
			}
		}
		</script>
```        
## 11 nuxt配置之css 
如果要使用sass需要安装：npm install --save-dev sass sass-loader@10


某个页面或者组件就可以使用
<style scoped lang='scss'></style>

## 12 nuxt配置之plugins 
```js
// 配置element-ui 在nuxt.config.js
 css: [ 
    './static/reset.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/aaa.js',
    '@/plugins/element.js'
  ],
	// plugins/element.js
import Vue from 'vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);
```
## 13 nuxt配置之modules和数据交互 
一、安装axios

	1.1 npm install @nuxtjs/axios -S

	1.2 nuxt.config.js进行配置

		modules: [
		    '@nuxtjs/axios',
		],

二、安装axios

	2.1 npm install axios -S

三、asyncData生命周期 || 方法
	
	pages 目录中的页面组件才可以去用

		***注意components内的.vue文件是不可以使用的

	asyncData中没有this

四、fetch生命周期 || 方法

	fetch是有this的 
## 14 nuxt配置代理
一、安装

	npm install @nuxtjs/axios @nuxtjs/proxy -S

二、nuxt.config.js进行配置

	modules: [
	    '@nuxtjs/axios',
	    '@nuxtjs/proxy'
	],
	axios:{
	    //是否可以跨域
	    proxy:true,
	    //retry:{ retries:3 },
	    //baseUr: process.env._ENV == 'production'? 'xxx' ? 'xxx'
	},
	proxy:{
	    '/api':{
	      target:'http://localhost:4000',
	      pathRewrite:{
	        '^/api':'',
	      }
	    }
	},
## 15-16 nuxt配置之loading 

一、nuxtjsloading默认是开启的，也可以关闭

	nuxt.config.js中
	loading:false

二、也可以自定义

	loading: '~/components/loading.vue',

	loading.vue中写入对应的内容

	查看api：https://www.nuxtjs.cn/api/configuration-loading

三、你也可以不用nuxtjs的loading

	loading:false
	
	自己在axios中进行封装


	
## --- 基础学完分割线 ---		
	下面重构是针对已有cli项目 进行 nuxtjs重构 （参考） 
## 17-18  项目重构-路由配置 
 	一、安装下载nuxtjs

	npx create-nuxt-app

	***下载的时候什么都不安装

二、配置路由

	2.1 下载

		npm install @nuxtjs/router -S

	2.2 在nuxt.config.js配置

		modules:[
			'@nuxtjs/router'
		]

	2.3 把vue-cli中的router文件拷贝到nuxt项目根目录

	2.4 修改最后返回

		export function createRouter(){
		    return new Router({
		      mode: "history",
		      routes,
		    });
		}
## 19-35 代理和扩展$axios解耦 
	20 引入vuex和组件重构
一、安装下载nuxtjs

	npx create-nuxt-app

	***下载的时候什么都不安装

二、配置路由

	2.1 下载

		npm install @nuxtjs/router -S

	2.2 在nuxt.config.js配置

		modules:[
			'@nuxtjs/router'
		]

	2.3 把vue-cli中的router文件拷贝到nuxt项目根目录

	2.4 修改最后返回

		export function createRouter(){
		    return new Router({
		      mode: "history",
		      routes,
		    });
		}

三、请求接口

	3.1 先解决跨域的问题,并且安装axios

		a>安装下载

			npm install @nuxtjs/axios @nuxtjs/proxy -S

		b>nuxt.config.js配置

			modules: [
			    '@nuxtjs/router',
			    '@nuxtjs/axios',
			    '@nuxtjs/proxy'
			],

	3.2 设置代理解决跨域的问题 : nuxt.config.js

		axios:{
		    proxy:true
		},
		proxy:{
		    '/api':{
		        target:'http://testapi.xuexiluxian.cn',
		    }
		},

	3.3 axios二次封装

		a>配置 : nuxt.config.js

			plugins: [
			    '~/plugins/axios',
			],
		b>新建文件：根目录下新建plugins/axios.js

		c>axios.js
			export default ( {$axios} )=>{
				$axios.onRequest(config=>{
					return config;
				})
				$axios.onResponse(response=>{
					return response.data;
				})
			}
			参考链接：https://axios.nuxtjs.org/helpers

	3.4 解耦合

		a>配置: nuxt.config.js

			plugins: [
			    '~/plugins/axios',
			    '~/api/xxx'
			],
		b>xxx.js中写入

			export default ({$axios},inject)=>{

				inject('getFirstCategorys',()=>$axios({
					url:'/api/course/category/getFirstCategorys',
			        method:'GET',
				}))

			}
			
		c>页面或者组件请求

			async asyncData( app ){
			    let res = await app.$getFirstCategorys();
			    return {
			    	list:res.data.list
				}
			}

四、vuex进行引入

	把vue-cli的store进入到nuxtjs项目中，修改store的返回：
	
		const store = ()=> new Vuex.Store({
		  	modules: {
			  	user,
		      	caseInfomation
		  	}
		});

		export default store;

五、引入当前需要的模块

	加密解密：crypto-js
	element-ui : 
			1. 安装下载：npm i element-ui -S
			2. 配置：nuxt.config.js中的plugins
				plugins: [
    				'~/plugins/element'
    			]
    		3. 在根目录的plugins/element.js新建文件
    			import Vue from 'vue';
				import ElementUI from 'element-ui';
				Vue.use(ElementUI);

			4. 配置css ： nuxt.config.js中的css
				css: [
				    'element-ui/lib/theme-chalk/index.css',
				],

六、把token做持久化存储

	1. 下载
		npm install cookie-universal-nuxt -S
	2. 配置:nuxt.config.js

		modules: [
	    	'cookie-universal-nuxt'
	 	],

	3. 操作

		this.$cookies.get()
		this.$cookies.set()
		this.$cookies.remove()

七、添加中间件,读取token


八、项目上线
	
	1. 执行:npm run build 
	2. 将打包好的

		.nuxt  ==>隐藏文件
		static 
		nuxt.config.sj
		package.json

		把以上文件丢到服务器某个文件夹中，并且在服务器安装node环境

	3. 在服务器上执行 npm install 

	4. 在服务器运行项目 npm run start 

		打开的也是localhost:3000

		我们需要使用nginx做代理 ==> www.xuexiluxian.cn


------------------------------------------------
登录测试账号：test 、 admin123
------------------------------------------------