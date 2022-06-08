# 第2章：React面向组件编程 

## 06_组件实例三大属性1_state
    1_state 
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/06_组件实例三大属性1_state/1_state.html
::: 
    2_state的简写方式
:::  details 点击查看代码   
<<< @/docs/前端/React/react_basic/06_组件实例三大属性1_state/2_state的简写方式.html   
:::
## 07_组件实例三大属性2_props
    1_props基本使用
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/07_组件实例三大属性2_props/1_props基本使用.html   
:::    
    2_对props进行限制
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/07_组件实例三大属性2_props/2_对props进行限制.html  
:::     
    3_props的简写方式
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/07_组件实例三大属性2_props/3_props的简写方式.html  
:::     
    4_函数组件使用props 
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/07_组件实例三大属性2_props/4_函数组件使用props.html 
:::      
## 08_组件实例三大属性3_refs
    1_字符串形式的ref
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/08_组件实例三大属性3_refs/1_字符串形式的ref.html 
:::  
    2_回调函数形式的ref
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/08_组件实例三大属性3_refs/2_回调函数形式的ref.html 
:::  
    3_回调ref中回调执行次数的问题
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/08_组件实例三大属性3_refs/3_回调ref中回调执行次数的问题.html   
:::
    4_createRef的使用
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/08_组件实例三大属性3_refs/4_createRef的使用.html  
:::
## 09_react中的事件处理
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/09_react中的事件处理/事件处理.html 
:::
## 10_react中收集表单数据
    1_非受控组件
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/10_react中收集表单数据/1_非受控组件.html 
:::
    2_受控组件
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/10_react中收集表单数据/2_受控组件.html
::: 
## 11_高阶函数_函数柯里化 
    1_高阶函数_函数柯里化
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/11_高阶函数_函数柯里化/1_高阶函数_函数柯里化.html 
:::
    2_不用函数柯里化的实现
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/11_高阶函数_函数柯里化/2_不用函数柯里化的实现.html 
:::
## 12_组件的生命周期 
- 理解
1. 组件从创建到死亡它会经历一些特定的阶段。
2. React组件中包含一系列勾子函数(生命周期回调函数), 会在特定的时刻调用。
3. 我们在定义组件时，会在特定的生命周期回调函数中，做特定的工作。

    1_引出生命周期
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/12_组件的生命周期/1_引出生命周期.html   
::: 
    2_react生命周期(旧)
生命周期的三个阶段（旧）
1. 初始化阶段: 由ReactDOM.render()触发---初次渲染
    - 1.constructor()
    - 2.componentWillMount()
    - 3.render()
    - 4.componentDidMount()
2. 更新阶段: 由组件内部this.setSate()或父组件重新render触发
    - 1.shouldComponentUpdate()
    - 2.componentWillUpdate()
    - 3.render()
    - 4.componentDidUpdate()
3. 卸载组件: 由ReactDOM.unmountComponentAtNode()触发
    - 1.componentWillUnmount()

::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/12_组件的生命周期/2_react生命周期(旧).html 
<!-- ![xiao](/assets/react/2_react生命周期(旧).png) -->
<img class="custom" :src="$withBase('/assets/react/2_react生命周期(旧).png')" alt="xiao">
:::   
    3_react生命周期(新)
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/12_组件的生命周期/3_react生命周期(新).html    
<!-- ![xiao](/assets/react/3_react生命周期(新).png) -->
<img class="custom" :src="$withBase('/assets/react/3_react生命周期(新).png')" alt="xiao">
:::
    4_getSnapshotBeforeUpdate的使用场景 
::: details 点击查看代码 
<<< @/docs/前端/React/react_basic/12_组件的生命周期/4_getSnapshotBeforeUpdate的使用场景.html 
:::   

### 重要的勾子
1. render：初始化渲染或更新渲染调用
2. componentDidMount：开启监听, 发送ajax请求
3. componentWillUnmount：做一些收尾工作, 如: 清理定时器
### 即将废弃的勾子
1. componentWillMount
2. componentWillReceiveProps
3. componentWillUpdate
现在使用会出现警告，下一个大版本需要加上UNSAFE_前缀才能使用，以后可能会被彻底废弃，不建议使用。

## 13_DOM的Diffing算法
    1_验证Diffing算法
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/13_DOM的Diffing算法/1_验证Diffing算法.html
:::
    2_key的作用
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/13_DOM的Diffing算法/2_key的作用.html
:::
## 复习前置知识 
    1_类的基本知识
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/复习/1_类的基本知识.html
:::
    2_原生事件绑定
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/复习/2_原生事件绑定.html
:::
    3_类方法中的this指向 
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/复习/3_类方法中的this指向.html
:::
    4_展开运算符
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/复习/4_展开运算符.html
:::
    5_对象相关的知识
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/复习/5_对象相关的知识.html
:::

    6_演示函数的柯里化
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/复习/6_演示函数的柯里化.html
:::