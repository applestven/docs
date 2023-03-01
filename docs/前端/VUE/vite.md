---

title: vite-ts-pinia-study

---
# vite 
## 1.创建vue3项目  :  基于构建工具webpack

	vue create 项目名称

	1. 基于webpack的项目有一个问题，就是编译慢

	2. 解决：使用vite

	3. vite优势：在开发过程中大大提升我们的效率

## 2.创建vue3项目 ： 基于 vite （已废弃 具体查看官网）
	https://vitejs.cn/guide/ 

	npm init @vitejs/app 项目名称

	**如果选择vue的项目，默认版本是vue3


2.1 vite + vue3 的方式

		1. 把create创建vue的src整个复制粘贴到基于vite的项目中

		2. 把create创建的package.json中的

			"dependencies": {
			    "core-js": "^3.6.5",
			    "vue": "^3.0.0",
			    "vue-router": "^4.0.0-0",
			    "vuex": "^4.0.0-0"
			},

			**复制粘贴到vite的项目中

		3. npm i ：安装依赖

		4. npm run dev 启动修改错误

	2.2 vite + vue2 的方式

		1. 把create创建vue的src整个复制粘贴到基于vite的项目中

		2. 把create创建的package.json中的

			"dependencies": {
			    "core-js": "^3.6.5",
			    "vue": "^2.6.11",
			    "vue-router": "^3.2.0",
			    "vuex": "^3.4.0"
			},

			**复制粘贴到vite的项目中

		3. npm i ：安装依赖 

		4. npm install vite-plugin-vue2 -D

		5. 在vite.config.js配置

			import { defineConfig } from 'vite'
			import { createVuePlugin } from 'vite-plugin-vue2'

			export default {
			  plugins: [
			    createVuePlugin(/* options */)
			  ],
			}

		6. cnpm i vue-template-compiler -S

	2.3 vue-cli ： vue2选项式写法

	<script>
	import HelloWorld from "../components/HelloWorld.vue";
	export default {
	  name: "Home",
	  data () {
	    return {
	      
	    }
	  },
	  components: {
	    HelloWorld,
	  },
	};
	</script>


<!-- ## vue-cli ： vue3 setup

	<script setup>

	</script> -->

## 3. vue2 和 vue3 区别
3. vue2 和 vue3 区别
	3.1 v-if 与 v-for 的优先级对比

		2.x 版本中  v-for > v-if
		3.x 版本中  v-if  > v-for

	3.2 v-for 中的 Ref 数组
        
		vue2.x 会自动把ref填充内容
		vue3.x 需要手动函数添加
			<ul>
		      <li v-for='item in 5' :key='item' :ref="setItemRef">
		        {{ item }}
		      </li>
		    </ul>

		    methods:{
		    	setItemRef(el){
		    		this.arr.push( el );
		    	}
			}

	3.3 $children 

		vue2.x :  访问当前实例的子组件

		vue3.x :  在 3.x 中，$children 已被移除，且不再支持。

			设置：<HelloWorld msg="Welcome" ref='hw'/>

			访问：this.$refs.hw 
## 4. setup
	
	4.1 是什么 ： 组合式 API

	4.2 来解决什么问题 :  使用 (data、computed、methods、watch) 组件选项来组织逻辑通常都很有效。然而，当我们的组件开始变得更大时，逻辑关注点的列表也会增长。尤其对于那些一开始没有编写这些组件的人来说，这会导致组件难以阅读和理解。


	4.3 响应区别： 

		vue2.x : Object.defineProperty()

		vue3.x : Proxy 

		1. Object.defineProperty()存在的问题

			1. 不能监听数组的变化
			2. 必须遍历对象的每一个属性

		2. Proxy 不需要遍历

	4.4 使用渲染函数:

		ref  :  就是定义数据的    		简单类型

		reactive  :  就是定义数据的  	复杂类型

	4.5 setup语法糖插件 ： unplugin-auto-import

		解决场景 ： 在组件中开发无需每次都引入 import { ref }..

		1. 下载安装

			npm i unplugin-auto-import -D

		2. 配置：vite.config.js中

			import AutoImport from 'unplugin-auto-import/vite'
			export default defineConfig({
			  plugins: [
			  	AutoImport({
			  		imports:['vue','vue-router']//自动导入vue和vue-router相关函数
			  	})
			  ],
			})
    4.6 toRefs

		toRefs 函数 来完成数据的解构

	4.7 computed

		1》 let obj = reactive({
			  name:'张三',
			  age:18,
			  str:computed(()=>{
			    return obj.name.slice(1,2)
			  })
			})

		2》	let msgChange = computed(()=>{
			  return msg.value.slice(1,3);
			})

		3》	let msgChange = computed({
			  get(){
			    return msg.value.slice(1,3);
			  },
			  set(){
			    console.log('设置了')
			  }
			})

	
	4.8 watch

		vue2.x :

			watch:{
				obj:{
					handler(newVal , oldVal){
						console.log( newVal , oldVal  )
					},
					immediate:true,
					deep:true
				}
			}

		vue3.x :

			1> 监听数据数据「初始化监听」

				watch( msg , (newVal,oldVal)=>{
					console.log(  newVal,oldVal )
				},{
					immediate:true
				})

			2> 监听多个数据「一起监听」

				watch([msg,str],(newVal,oldVal)=>{
					console.log(  newVal,oldVal )
				},{
					immediate:true
				})

			3> 监听“对象”中某个对象

				watch( ()=>obj.arr , (newVal,oldVal)=>{
					console.log( newVal,oldVal )
				})

			4> 立即执行监听函数

				watchEffect(()=>{
					console.log(  msg.value  )
				})

		参考链接：https://v3.cn.vuejs.org/api/computed-watch-api.html#watcheffect

	4.9 组件 ： 父 传 子
    
		1. 父
		
			<template>
				<div>
					<List :msg='msg'></List>
				</div>
			</template>

			<script setup>
			import List from '../components/List.vue'
			let msg = ref('这是父传过去的数据');
			</script>
		
		2. 子

			<template>
				<div> 
					这是子组件 ==> {{ msg }}
				</div>
			</template>

			<script setup>
			defineProps({
				msg:{
					type:String,
					default:'1111'
				}
			})
			</script>
	4.10 组件 ：子 传 父 

		子：
			<template>
				<div> 
					这是子组件 ==> {{ num }}
					<button @click='changeNum'>按钮</button>
				</div>
			</template>

			<script setup lang='ts'>
			let num = ref(200);

			const emit = defineEmits<{
			  (e: 'fn', id: number): void
			}>()

			const changeNum = ()=>{
				emit('fn',num)
			}	
			</script>

		父：
			<template>
				<div>
					<List @fn='changeHome'></List>
				</div>
			</template>

			<script setup>
			import List from '../components/List.vue'
			const changeHome = (n)=>{
				console.log( n.value );
			}
			</script>
	4.11 v-model传值
	  ps: 可以使用emit('update:xxx') 修改父传子 props的数据 （vue2只读）

		父:
			<List v-model:num='num'></List>
			<script setup>
			import List from '../components/List.vue'
			let num = ref(1);
			</script>
		子:
			const props = defineProps({
				num:{
					type:Number,
					default:100
				}
			})
			const emit = defineEmits(['update:num'])
			const btn = ()=>{
				emit('update:num',200);
			}	
	4.12 兄弟组件之间的传值

		1》下载安装

			npm install mitt -S

		2》plugins/Bus.js

			import mitt from 'mitt';
			const emitter = mitt()
			export default emitter;

		3》A组件

			emitter.emit('fn',str);

		4》B组件

			emitter.on('fn',e=>{
				s.value = e.value;
			})

## 5. 生命周期

	5.1 选项式 API
		beforeCreate ...

	5.2 setup 组合式API

		注意：没有beforeCreate和created
		其他生命周期要使用前面加"on" 例如：onMounted

	参考链接：https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html

## 6. 路由

	useRoute  ==> this.$route

	useRouter ==> this.$router 

## 7. 插槽
	匿名插槽
``` js
		父：B.vue
			<A>
				这是xxxxx数据
				这是yyyyy数据
			</A>

		子：A.vue
			<header>
				<div>头部</div>
				<slot></slot>
			</header>

			<footer>
				<div>底部</div>
				<slot></slot>
			</footer>
```			
	具名插槽
``` js	
		父：
			<A>
				<template v-slot:xxx>
					这是xxxxx数据
				</template>

				<template v-slot:yyy>
					这是yyyyy数据
				</template>
			</A>

			***简写：<template #xxx>
		子：
			<header>
				<div>头部</div>
				<slot name='xxx'></slot>
				<slot name='yyy'></slot>
			</header>

			<footer>
				<div>底部</div>
				<slot name='xxx'></slot>
			</footer>
```	
	作用域插槽
``` js
		父：
			<template v-slot='{data}'>
				{{ data.name }} --> {{ data.age }}
			</template>

			简写：<template #default='{data}'>
		子：
			<div v-for='item in list' :key='item.id'>
				<slot :data='item'></slot>
			</div>
``` 
	动态插槽：
``` js
		说了就是通过数据进行切换

		父：

			<template #[xxx]>
				这是xxxxx数据
			</template>

			<script setup>
			let xxx = ref('xxx');
			</script>
```			
## 8. Teleport : 传送 
	
	<teleport to='#container'></teleport>
	<teleport to='.main'></teleport>
	<teleport to='body'></teleport>

	***必须传送到有这个dom的内容【顺序】	
## 9. 动态组件

	<component :is="动态去切换组件"></component>
## 10. 异步组件
	
	***提升性能

	vueuse ： https://vueuse.org/core/useintersectionobserver/

	10.1 使用场景1

		组件按需引入：当用户访问到了组件再去加载该组件

			<template>
				<div ref='target'>
					<C v-if='targetIsVisible'></C>
				</div>
			</template>

			<script setup>
			import { useIntersectionObserver } from '@vueuse/core'

			const C = defineAsyncComponent(() =>
			  import('../components/C.vue')
			)

			const target = ref(null);
			const targetIsVisible = ref(false);

			const { stop } = useIntersectionObserver(
			  target,
			  ([{ isIntersecting }]) => {
			  	if( isIntersecting ) {
			  		targetIsVisible.value = isIntersecting
			  	}
			  },
			)
			</script>

	10.2 使用场景2 

		<Suspense>
			<template #default>
				<A></A>
			</template>
			<template #fallback>
				加载中...
			</template>
		</Suspense>

		<script setup>
		const A = defineAsyncComponent(() =>
		  import('../components/A.vue')
		)
		</script>


	10.3 打包分包处理

		npm run build打包完成后，异步组件有单独的js文件，是从主体js分包出来的

		A.c7d21c1a.js
		C.91709cb2.js
## 11. Mixin : 混入 
	ps:跟vuex的区别就是数据不同步  ，多复用

是什么：来分发 Vue 组件中的可复用功能

	11.1 setup写法
``` js	
		mixin.js
			import { ref } from 'vue'
			export default function(){

				let num = ref(1);
				let fav = ref(false);

				let favBtn = ()=>{
					num.value += 1;
					fav.value = true;
					setTimeout(()=>{
						fav.value = false;
					},2000)
				}

				return {
					num,
					fav,
					favBtn
				}

			}

		// 组件：
			<template>
				<div>
					<h1>A组件</h1>
					{{ num }}
					<button @click='favBtn'>
						{{ fav ? '收藏中...' : '收藏' }}
					</button>
				</div>
			</template>

			<script setup>
			import mixin from '../mixins/mixin.js'
			let { num , fav , favBtn } = mixin();
			</script>
```

	11.2 选项式api写法
``` js
		mixin：
			export const fav = {
				data () {
					return {
						num:10
					}
				},
				methods:{
					favBtn( params ){
						this.num += params;
					}
				}
			}

		// 组件：
			<template>
				<div>
					<h1>A组件</h1>
					{{ num }}
					<button @click='favBtn(1)'>按钮</button>
				</div>
			</template>

			<script type="text/javascript">
			import { fav } from '../mixins/mixin.js'
			export default{
				data () {
					return {
						str:'你好'
					}
				},
				mixins:[fav]
			}
			</script>
```		
## 12. Provide / Inject  ==> 依赖注入
``` js
	// 提供：
		<script setup>
		provide('changeNum', num );
		</script>

	// 注入：
		<template>
			<div>
				<h1>B组件</h1>
				{{ bNum }}
			</div>
		</template>

		<script setup>
		const bNum = inject('changeNum');
		</script>
```
## 13. Vuex
	
	13.1 state:
		let num = computed( ()=> store.state.num );
	13.2 getters:
		let total = computed( ()=> store.getters.total );
	13.3 mutations:
		store.commit('xxx')
	13.4 actions:
		store.dispatch( 'xxx' )
	13.5 modules: 

		和之前的版本使用一样

	13.6 Vuex持久化存储【插件】

		1. npm i vuex-persistedstate -S

		2. import persistedState from 'vuex-persistedstate'

		3. export default createStore({
		  modules: {
		  	user
		  },
		  plugins:[persistedState({
		  	key:'xiaoluxian',
		  	paths:['user']
		  })]
		});
## 14. Pinia

	14.1 Vuex和pinia的区别

		参考网址： https://github.com/vuejs/rfcs/pull/271 

		1. pinia没有mutations，只有：state、getters、actions
		2. pinia分模块不需要modules（之前vuex分模块需要modules）
		3. pinia体积更小（性能更好）
		4. pinia可以直接修改state数据

	14.2 pinia使用

		官方网址：https://pinia.vuejs.org/

		具体使用：https://xuexiluxian.cn/blog/detail/242b0ed71feb412991f04d448fc86636	
	14.3 pinia持久化存储

		参考链接：https://xuexiluxian.cn/blog/detail/acebacd99612447e8c80dcf6354240f6		
## 15. 设置代理解决跨域问题

	参考文章：https://xuexiluxian.cn/blog/detail/01f62baa85b7431992586b4689a9b07a

	API参考链接：https://staging-cn.vuejs.org/api/#onmounted		
## 16. 小总结

	Vite + Vue3 + Pinia ===> 做一个练手的项目

	后续：ts       

		Vite + Vue3 + Pinia + ts
## 17. Vite + Vue3 + Pinia 项目（saas平台）
	
	01 搭建项目 Vite + Vue3 ： https://xuexiluxian.cn/blog/detail/5e5d17f75af14e1586d3471f613e4586

	02 Vite + Vue项目安装router ： https://xuexiluxian.cn/blog/detail/0a44da50c0b440d6b8f591867f8909f5

	03 先做首页头部吧，先做准备工作 : https://xuexiluxian.cn/blog/detail/f6236ef0b71c4e7eb67d9796eb3ef17f

	04 开始布局头部 : https://xuexiluxian.cn/blog/detail/d949b688b99145ba952a19f5594fcaeb

	05 首页NavSwiper布局 : https://xuexiluxian.cn/blog/detail/c460c18fe6d342d0b19d52e81d1da71c

	06 设置代理，axios封装，api解耦  : https://xuexiluxian.cn/blog/detail/814307b5854748f3b47e9ed24775b6e6

	07 NavSwiper开始渲染数据  ： https://xuexiluxian.cn/blog/detail/a320939b9a414437aac402fa001302c9
	
	08 首页-新上好课组件 : https://xuexiluxian.cn/blog/detail/bb104b93c01f45bd906b482cc15a7251

	09 首页-底部组件  :  https://xuexiluxian.cn/blog/detail/a4ae28350a41476eb6060eb0c3dffaed

	10 首页之异步组件 : https://xuexiluxian.cn/blog/detail/b4099c83918345b4a3f108123cf5d1db

	11 首页之判断课程等级，复用功能封装 : https://xuexiluxian.cn/blog/detail/d454aafb406d40a78f699546db3c6b38

	12 课程页-组件布局: https://xuexiluxian.cn/blog/detail/93dd86680c274b4ca0469f52c0c48fc4

	13 课程页-课程方向和课程分类数据渲染 : https://xuexiluxian.cn/blog/detail/ddd0c4550ac440ff978201c4c959517c

	14 课程页-请求课程数据+分页 : https://xuexiluxian.cn/blog/detail/cbeb396e6cdc4da58a89a8756d978f2c

	15 课程页-分类筛选条件逻辑 : https://xuexiluxian.cn/blog/detail/40340e1ebc7e4115a74a2fa285c6271f

	16 课程页面-筛选免费课程和会员课程 : https://xuexiluxian.cn/blog/detail/d9a9dc665c98426bb385ed4ac665d840

	17 课程页-课程条件筛选 : https://xuexiluxian.cn/blog/detail/33a95b867c004c02891ab3c03ddb8df4

	18 课程详情页-布局  : https://xuexiluxian.cn/blog/detail/fbc1891af8bb4da9b988ae8458cc9c43

	19 课程详情页-调整数据  :  https://xuexiluxian.cn/blog/detail/80148066c35a45158a8827a402085b7c

	20 课程详情页-渲染数据  : https://xuexiluxian.cn/blog/detail/122aaca759e3435b81fa197e3cbdadb3
