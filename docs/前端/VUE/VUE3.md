# studyClass VUE3
    例子仓库： https://gitee.com/big_insect/study-class.git  
- **vue3TSstudy/csVue/vuecli**
## 3.Vue3介绍
## 3.1 了解相关信息
1. Vue.js 3.0 “One Piece” 正式版在2020年9月份发布
2. 2年多开发, 100+位贡献者, 2600+次提交, 600+次PR
3. Vue3支持vue2的大多数特性
4. 更好的支持Typescript

### 3.2 性能提升 
1. 打包大小减少41%
2. 初次渲染快55%, 更新渲染快133%
3. 内存减少54%
4. **使用Proxy代替defineProperty实现数据响应式**
5. **重写虚拟DOM的实现和Tree-Shaking**

### 3.3  新增特性
1. Composition (组合) API
2. setup 
   - ref 和 reactive 
   - computed 和 watch
   - 新的生命周期函数
   - provide与inject
   - ...
3. 新组件 
   - Fragment - 文档碎片
   - Teleport - 瞬移组件的位置
   - Suspense - 异步加载组件的loading界面
- 其它API更新
    - 全局API的修改
    - 将原来的全局API转移到应用对象
    - 模板语法变化

## 4.创建vue3项目
    文档: https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create 
### 4.1 使用vue/cli创建
1. 安装或者升级
    npm install -g @vue/cli
2. 保证 vue cli 版本在 4.5.0 以上
    vue --version
3. 创建项目
    vue create my-project

4. 然后的步骤
    - Please pick a preset - 选择 Manually select features  **(请选择预设)**
        - Check the features needed for your project - 选择上 TypeScript ，特别注意点空格是选择，点回车是下一步 **(请检查所需的功能，为您的项目选择一个预设  )**
        - Choose a version of Vue.js that you want to start the project with - 选择 3.x (Preview)  **(选择一个您想要开始项目的Vue.js版本  )**
        - Use class-style component syntax - 直接回车 **(使用类样式的组件语法)**
        - Use Babel alongside TypeScript - 直接回车 **(在TypeScript旁边使用Babel)**
        - Pick a linter / formatter config - 直接回车 **(选择一个检测程序/格式化程序配置)**
        - Use history mode for router? - 直接回车 **(路由器使用历史模式?)**
        - Pick a linter / formatter config - 直接回车 **(选择一个检测程序/格式化程序配置)**
        - Pick additional lint features - 直接回车 ()
        - Where do you prefer placing config for Babel, ESLint, etc.? - 直接回车 **(你更喜欢把Babel, ESLint等配置放在哪里  )**
        - Save this as a preset for future projects? - 直接回车 **(将此保存为未来项目的预设)**

### 4.2使用vite创建(介绍)  
    
- 文档: https://v3.cn.vuejs.org/guide/installation.html
- 文档: vite 是一个由原生 ESM 驱动的 Web 开发构建工具。在开发环境下基于浏览器原生 ES imports 开发
- 文档: 它做到了**本地快速开发启动**, 在生产环境下基于 Rollup 打包。
- 快速的冷启动，不需要等待打包操作；
- 即时的热模块更新，替换性能和模块数量的解耦让更新飞起；
- 真正的按需编译，不再等待整个应用编译完成，这是一个巨大的改变；

    npm init vite-app project-name
    cd project-name
    npm install
    npm run dev

## 5.Composition API(常用部分)
- 文档 https://composition-api.vuejs.org/zh/api.html

### 5.1  setup   

+ 新的option ，所有的组合API函数都在这里执行 ，只在初始化时执行一次 
+ 函数如果返回对象 ，对象中的属性或方法 ，模板中可以直接使用 

### 5.2 ref

+ 作用：定义一个数据的响应式 
+ 语法: const xxx = ref(initVue)
        创建一个包含响应式数据的引用(reference)对象
        js中操作数据：xxx.vue 
        模板中操作数据不需要.value 
    + 一般用来定义一个基本类型的响应式数据 
    
::: tip
示例：temp1 
``` js
<template>
    <h2>{{count}}</h2>
    <hr>
    <button @click="update">更新响应式数据的函数</button>
</template>

<script>
import {ref} from 'vue'
export default {
    // 使用vue3的composition Api 
    setup(){
        // 定义响应式数据ref对象 
        const count = ref(1)
        console.log(count) 

        // 更新响应式数据的函数 
        function update (){
            // alert('update')
            count.value =count.value + 1 
        }
        return{
            count ,
            update
        }
    }
}
</script>
```
:::
### 5.3 reactive 
+ 作用：定义多个数据的响应式 
+ const proxy = reactive(obj):接受一个普通对象然后返回该普通对象的响应式代理器对象 
+ 响应式转换是“深层的” ：会影响对象内部所有嵌套的属性  
+ 内部基于ES6 的 Proxy 实现 ， 通过代理对象操作源对象内部数据都是响应式的  
::: tip
示例：temp2
``` js
<template>
  <div>
        <h2>name: {{state.name}}</h2>
        <h2>age: {{state.age}}</h2>
        <h2>wife: {{state.wife}}</h2>
        <hr>
        <button @click="update">更新</button>
  </div>
</template>

<script>
/* 
reactive: 
    作用: 定义多个数据的响应式
    const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
*/
import {
  reactive,
} from 'vue'
export default {
  setup () {
    /* 
    定义响应式数据对象
    */
    const state = reactive({
      name: 'tom',
      age: 25,
      wife: {
        name: 'marry',
        age: 22
      },
    })
    // console.log(state, state.wife)

    const update = () => {
      state.name += '--'
      state.age += 1
      state.wife.name += '++'
      state.wife.age += 2
    }

    return {
      state,
      update,
    }
  }
}
</script>

```
:::
### 5.4 比较Vue2和 Vue3 的响应式  （重要） 
- Vue2响应式核心 
    + 对象 ：通过definePropety对对象的已有属性值的读取和修改进行劫持（监视\拦截）
    + 数组 ：通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持 
    - 问题 ： 
        + 对象新添加的属性或删除已有属性 ，界面不会自动更新 
        + 直接通过下标替换或更新length ，界面不会自动更新 
- Vue3的响应式核心 
    + 通过Proxy(代理)： 拦截对data任意属性的任意（13种）操作， 包括属性值的读写，属性的添加，属性的删除等 ...
    + 通过Reflect（反射）：动态对被代理对象的相应属性进行特定的操作 
    - 文档 ： 
        + https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

        + https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
## 5.5 setup细节 
- setup执行的时机
    + 在beforeCreate之前执行（一次），此时组件对象还没有创建
    + this是undefined，不能通过data/computed/methods/props 
    + 其实所有的composition Api相关回调函数中也都不可以          
- setup的返回值
    + 一般都返回一个对象：为模板提供数据，也就是模板中可以直接使用此对象中的所有属性/方法
    + 返回对象中的属性 会与 data函数返回对象的属性 合成为组件对象的属性 
    + 返回对象中的方法 会与 methods中的方法 合并成功组件对象的方法
    + 如果有重名，setup优先
    - 注意：
        + 一般不要混合使用 ，methods中可以访问setup提供的属性和方法，但在setup中不能访问data和methods 
        + setup不能是一个async函数： 因为返回值不再是return的对象 ，而是promise ，模板看不到return对象中的属性数据
- setup的参数 
    + setup（props，context） / setup(props,{attrs , slots , emit})
    + props :包含props配置声明的属性的对象,相当于this.$attrs 
    + attrs: 包含没有在props配置中声明的属性的对象 ，相当于this.$ attrs
    + slots: 包含所有传入的插槽内容的对象 ，相当于this.$slots   
    + emit: 用来分发自定义事件的函数，相当于this.$emit 
::: tip
示例：temp3
:::
## 5.6 reactive与ref-细节 
- 
    + 是Vue3的composition API中2个最重要的响应式API
    + ref用来处理基本类型数据，reactive用来处理对象（递归深度响应式）
    + 如果用ref对象/数组 ，内部自动将对象/数组转化为reactive的代理对象
    + ref内部：通过给value属性添加getter/setter来实现对数据的劫持 
    + reactive内部：通过使用Proxy来实现对对象内部所有数据的劫持，并通过Reflect操作对象内部数据
    + ref的数据操作，在js中要.value ,在模板中不需要(内部解析模板时会自动添加.value)
::: tip
示例：temp4
:::
## 5.7 计算属性与监视
- computed函数 ：
    + 与computed配置功能一致
    + 只有getter 
    + 有getter和setter
- watch函数
    + 与watch配置功能一致 
    + 监视指定的一个或多个响应式数据，一旦数据变化 ，就自动执行监视回调 
    + 默认初始时不执行回调 ， 当可以通过配置immediate为true ，来指定初始时立即执行第一次
- watchEffect函数
    + 不用直接指定要监视的数据，回调函数中使用的哪些响应式数据就监视哪些响应式数据 
    + 默认初始时就会执行第一次 ，从而可以收集需要监视的数据
    + 监视数据发生变化时回调
::: tip
示例：temp5
:::
## 5.8 生命周期 
### Vue2.x的生命周期  https://www.cnblogs.com/codexlx/p/14115715.html
### Vue3.x的生命周期  http://www.proyy.com/6980132002619981832.html
- 与 2.x 版本生命周期相对应的组合式 API 
    + beforeCreate -> 使用 setup()
    + created -> 使用 setup()
    + beforeMount -> onBeforeMount
    + mounted -> onMounted
    + beforeUpdate -> onBeforeUpdate
    + updated -> onUpdated
    + beforeDestroy -> onBeforeUnmount
    + destroyed -> onUnmounted
    + errorCaptured -> onErrorCaptured
- 新增的钩子函数 
    + 组合式 API 还提供了以下调试钩子函数：  
    + onRenderTracked
    + onRenderTriggered
::: tip
示例：temp6
:::
### 5.9 自定义hook函数
-   
    + 使用Vue3的组合API封装的“可复用功能函数”
    + 自定义hook的作用类似于Vue2中的minxin（混入）技术
        - ps：mixin混入：多个组件可以共享数据和方法，在使用mixin的组件中引入后，mixin中的方法和属性也就并入到该组件中，可以直接使用。钩子函数会两个都被调用，mixin中的钩子首先执行 
    + 自定义hook的优势 ：很清楚复用功能代码的来源，更清楚易懂
::: tip
示例：temp7
:::
    + 利用TS泛型强化类型检查 
    + 需求2: 封装发ajax请求的hook函数 
::: tip
示例：temp8
:::
### 5.10 toRefs
- 
    + 把一个响应式对象转换为普通对象，该普通对象的每一个property都是一个ref 
    + 应用：当从合成函数返回响应式对象时，toRefs非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用 
    + 问题: reactive 对象去取出的所有属性值都是非响应式的 
    + 解决：利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性
::: tip
示例：temp9
:::
### 5.11 ref获取元素 
- 利用ref函数获取组件中的标签元素 
- 功能需求:让输入框自动获取焦点 
::: tip
示例：temp10
:::

## 6、Composition API(其它部分) 

### 6.1 shallowReactive 与 shallowRef
- shallowReactive ：只处理了了对象最外层属性的响应式（也就是浅响应式）
- shallowRef ：只处理value的响应式，不进行对象的reactive处理 
- 什么时候进行浅响应式呢？ 
    + 一般情况下使用ref和reactive即可 
    + 如果有一个对象数据，结构比较深，但变化只是外层属性变化 ===》 shallowReactive
    + 如果一个对象数据 ，后面会产生新的对象来替换 ===》  shallowRef
::: tip
示例：temp11
:::

### 6.2 readonly 与 shallowReadonly
- readonly:
    + 深度只读数据
    + 获取一个对象（响应式或纯对象） 或ref并返回原始代理的只读代理 
    + 只读代理是深层的 ： 访问的任何嵌套property也是只读的 
- shallowReadnoly： 
    + 浅只读数据 
    + 创建一个代理，使其自身的propety为只读 ， 但不执行嵌套对象的深度只读转换 
- 应用场景： 
    在某些特定的情况下 ，我们可能不希望对数据进行更新的操作， 那就可以包装生成一个只读代理对象来读取数据 ，而不能修改或删除 
::: tip
示例：temp12
:::
### 6.3 toRaw 与 markRaw
- toRaw 
    + 返回reactive 或 readonly 方法转化响应式道理的普通对象 
    + 这是一个还原方法  ，可用于临时读取 ，访问不会被代理/跟踪 ，写入时也不会触发界面更新 。 
- markRaw 
    + 标记一个对象 ，使其永远不会转换为代理 。 返回对象本身 
    - 应用场景 ：
        + 有些值不应设置为响应式的 ，例如复杂的第三方类实例或Vue组件对象 
        + 当渲染具有不可变数据源的大列表 ，跳过代理转换可以提高性能 
::: tip
示例：temp13
:::
### 6.4 toRef
- 为源响应式对象上的某个属性创建一个ref对象 ， 二者内部操作的是同一个数据值 ，更新时二者是同步的 
- 区别ref：拷贝了一份新的数据值单独操作 ，更新时互不影响 
- 应用 ：当要将某个prop的ref传递给复合函数时 ，toRef
::: tip
示例：temp14
:::

### 6.5 customRef 
- 创建一个自定义的ref ， 并对其依赖跟踪和更新触发进行显式控制
- 需求 ：使用customRef 实现 debounce的实例 
::: tip
示例：temp15
:::

### 6.6 provide 与 inject
- provide和inject提供依赖注入，功能类似 2.x 的provide/inject
- 实现跨层级组件(祖孙)间通信 
::: tip
示例：temp16
:::

### 6.7 响应式数据的判断 
- 
    + isRef:检查一个值是否为ref对象 
    + isReactive : 检查一个对象是否是由reactive创建的响应式代理 
    + isReadonly ： 检查一个对象是否由readonly创建的只读代理 
    + isProxy ：检查一个对象是否由reactive 或者 readonly 方法创建的代理 

## 7、手写组合API
### 7.1 shallowReactive 与 reactive 
::: tip
示例：shallowReactiveAndreactive.ts
:::

### 7.2 shallowRef 与 ref  
::: tip
示例：shallowRefAndref.ts
:::

### 7.3 shallowReadonly 与 readonly  

::: tip
示例：temp：shallowReadonlyAndreadOnly.ts
:::
### 7.4 isRef, isReactive 与 isReadonly 

::: tip
示例：isRefAndisReactiveAndisReadonly.ts
:::
## 8、Composition API VS Option API
### 8.1 Option API的问题
在传统的Vue OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 ，滚动条反复上下移动
### 8.2 使用Compisition API   
我们可以更加优雅的组织我们的代码，函数。让相关功能的代码更加有序的组织在一起

## 9、新组件
### 9.1 Fragment(片断)
在Vue2中: 组件必须有一个根标签
在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中
好处: 减少标签层级, 减小内存占用

### 9.2 Teleport(瞬移)
- Teleport提供了一种干净的方法 ，让组件的html在父组件界面外的特定标签（很可能是body）下插入显示  to="body"

::: tip
**temp17-app.vue**
:::

### 9.3 Suspense(不确定的)
它们允许我们的应用程序在等待异步组件时渲染一些后备内容，可以让我们创建一个平滑的用户体验
::: tip
**temp18**
:::

## 10、其他新的API

### 10.1 全新的全局API 
- createApp()
- defineProperty()
- defineAsyncComponent()
- nextTick() 
### 10.2 将原来的全局API转移到应用对象 
- app.component()
- app.config()
- app.directive()
- app.mount()
- app.unmount()
- app.use()

### 10.3 模板语法变化
- v-model的本质变化
    + prop：value -> modelValue
    + event：input -> update:modelValue；
    + .sync修改符已移除, 由v-model代替
    + v-if优先v-for解析

## 11、使用VuePress搭建在线文档网站  createVuePress（在vue3cli目录下）
### 11.1 在线文档    
- 官方在线文档 ：https://vuepress.vuejs.org/zh/
### 11.2 搭建基本环境
# 将 VuePress 作为一个本地依赖安装
npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个文件: docs/README.md
echo '# Hello VuePress!' > docs/README.md

# 启动文档项目
npx vuepress dev docs

# 构建静态文件
npx vuepress build docs-- 
  |-- docs
    |-- .vuepress
      |-- config.js
    |-- README.md


[![Build Status](https://app.travis-ci.com/applestven/docs-travis-ci-com.svg?branch=master)](https://app.travis-ci.com/applestven/docs-travis-ci-com)

追加Travis 自动化部署

https://shields.io/  逼格徽章 

[![GitHub issues](https://img.shields.io/github/issues/applestven/docs)](https://github.com/applestven/docs/issues)
<Vssue />
<!-- 相对路径 -->
![xiao](/assets/img/xiao2.PNG)
<!-- 基础路径 -->
<img class="custom" :src="$withBase('/assets/img/xiao.PNG')" alt="xiao">

<<< @/docs/about.md
<<< @/docs/forbidden.md    
