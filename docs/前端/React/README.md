# React全家桶(技术栈)
# 第一章 ract入门
## 01_hello_react 
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/01_hello_react/hello_react.html
:::
## 02_虚拟DOM的两种创建方式 
 
    1_使用jsx创建虚拟DOM
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/02_虚拟DOM的两种创建方式/1_使用jsx创建虚拟DOM.html
:::
    2_使用js创建虚拟DOM
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/02_虚拟DOM的两种创建方式/2_使用js创建虚拟DOM.html
:::
    3_虚拟DOM与真实DOM
::: details 点击查看代码   
<<< @/docs/前端/React/react_basic/02_虚拟DOM的两种创建方式/3_虚拟DOM与真实DOM.html 
:::
## 03_jsx语法规则 
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/03_jsx语法规则/jsx语法规则.html
:::
## 04_jsx的小练习
::: details 点击查看代码
<<< @/docs/前端/React/react_basic/04_jsx的小练习/jsx小练习.html
:::

## 05_react中定义组件
    1_函数式组件
::: details 点击查看代码   
<<< @/docs/前端/React/react_basic/05_react中定义组件/1_函数式组件.html
:::
    2_类式组件
::: details 点击查看代码    
<<< @/docs/前端/React/react_basic/05_react中定义组件/2_类式组件.html
:::

## react 常用hook 
### useMemo
主要目的是对值进行记忆化，以避免不必要的重复计算

useMemo 是 React 中的一个 Hook 它可以用来缓存计算结果，并在后续的渲染中重复利用这些计算结果。useMemo 接收两个参数：一个函数和一个依赖数组。当依赖数组中的任何一个值发生变化时，useMemo 会重新执行传入的函数，并返回新的计算结果

### useBoolean
const [ useBooleanState,{ toggle: useBooleanToggle, setTrue, setFalse}] = useBoolean(false);




