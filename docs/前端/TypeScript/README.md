# TypeScript Study

    参考CDN : https://blog.csdn.net/qq_40280582/article/details/112444461
    复习参考 ： https://zhuanlan.zhihu.com/p/393799486

## TypeScript 介绍篇
- TypeScript是一种由微软开发的开源、跨平台的编程语言。它是JavaScript的超集，最终会被编译为JavaScript代码。

- 2012年10月，微软发布了首个公开版本的TypeScript，2013年6月19日，在经历了一个预览版之后微软正式发布了正式版TypeScript

- TypeScript的作者是安德斯·海尔斯伯格，C#的首席架构师。它是开源和跨平台的编程语言。

- TypeScript扩展了JavaScript的语法，所以任何现有的JavaScript程序可以运行在TypeScript环境中。

- TypeScript是为大型应用的开发而设计，并且可以编译为JavaScript。

- TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6+ 的支持**，它由 Microsoft 开发，代码开源于 GitHub 上

- TypeScript 是 JavaScript 的一个超集，主要提供了类型系统和对 ES6+ 的支持，它由 Microsoft 开发，代码开源于 GitHub 上

## TypeScript 的特点
- TypeScript 主要有 3 大特点：

    + 始于JavaScript，归于JavaScript
    + TypeScript 可以编译出纯净、 简洁的 JavaScript 代码，并且可以运行在任何浏览器上、Node.js 环境中和任何支持 ECMAScript 3（或更高版本）的JavaScript 引擎中。

- 强大的类型系统
+ 类型系统允许 JavaScript 开发者在开发 JavaScript 应用程序时使用高效的开发工具和常用操作比如静态检查和代码重构。

+ 先进的 JavaScript
+ TypeScript 提供最新的和不断发展的 JavaScript 特性，包括那些来自 2015 年的 ECMAScript 和未来的提案中的特性，比如异步功能和 Decorators，以帮助建立健壮的组件

## 安装 TypeScript 命令
npm install -g typescript    tsc -V  
tsc --init 
## 初次尝试 
``` js
// 写个测试  tsc test.ts编译一下 :  
function greeter(person:string){
    return 'Hello,'+person
}
let user = 'sss'

console.log(greeter(user))
```
## 初印象接口篇 
- 这里我们使用接口来描述一个拥有 firstName 和 lastName 字段的对象。
- 在 TypeScript 里，只在两个类型内部的结构兼容，那么这两个类型就是兼容的。
-- 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 implements 语句。
``` js
interface Person{
    firstName:string,
    lastName:string
}

function greeter(person:Person){
    return 'hellow,'+person.firstName + ' '+ person.lastName 
}
let user = {
    firstName:'Yee',
    lastName:'Huang'
}

console.log(greeter(user))
```




## 初印象类篇 

  TypeScript 支持 JavaScript 的新特性，比如支持基于类的面向对象编程。
``` js
class User{
    fullName:string
    firstName:string
    lastName:string 

    constructor(firstName:string,lastName:string){
        this.firstName = firstName 
        this.lastName = lastName 
        this.fullName = firstName + '  '+lastName 
    }
}

interface Person{
    firstName:stirng 
    lastName:string
}

function greeter (person:Person){
    return 'Hello ,'+person.firstName + ' '+ person.lastName
}
let user = new User('Yee','Huang')

console.log(greeter(user))



```
## webpack打包Ts篇 
yarn add -D typescript  
yarn add -D webpack webpack-cli 
yarn add -D webpack-dev-server  
yarn add -D html-webpack-plugin clean-webpack-plugin    
yarn add -D ts-loader   
yarn add -D cross-env   
## TypeScript 初印象总结篇 
 到这里，你已经对 TypeScript 有了一个大致的印象，那么下一章让我们来一起学习 TypeScript 的一些常用语法吧。
类型注解 、 接口 、 类  

<!-- ## 开始进入深度学习: -->
