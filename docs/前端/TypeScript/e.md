## 4.函数
- 函数是 JavaScript 应用程序的基础，它帮助你实现抽象层，模拟类，信息隐藏和模块
- 在 TypeScript 里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义行为的地方。
- TypeScript 为 JavaScript 函数添加了额外的功能，让我们可以更容易地使用。 
```js
// 基本示例  
// 和 JavaScript 一样，TypeScript 函数可以创建有名字的函数和匿名函数。你可以随意选择适合应用程序的方式，不论是定义一系列 API 函数还是只使用一次的函数。
命名函数 
function add(x,y){
    return x + y
}
// 匿名函数 
let myAdd =function(x,y){
    return x + y 
}

// 为函数定义类型 
function add(x :number ,y:number){
    return x + y 
}
let myAdd = function(x:number , y: number){
    return x+ y 
}

// 书写完整函数类型 现在我们已经为函数指定了类型，下面让我们写出函数的完整类型
let myAdd: (x :number ,y: number )=> number = 
function(x: number , y: number): number{
    return x + y
}
```

## 可选参数和默认参数  
// // TypeScript 里的每个函数参数都是必须的(这不是指不能传递 null 或 undefined 作为参数) 这不是指不能传递 null 或 undefined 作为参数，而是说编译器检查用户是否为每个参数都传入了值
// // 传递给一个函数的参数个数必须与函数期望的参数个数一致 
// // ps:
// // TypeScript 里我们可以在参数名旁使用 ? 实现可选参数的功能 
``` js
// 把firstName 的默认值设置为 "A"
function buildName(firstName :string = 'A' , lastName?:string):string{
    if(lastName){
        return firstName + ' - ' + lastName 
    }else{
        return firstName
    }
}
console.log(buildName('C','D'))
console.log(buildName('C'))
console.log(buildName())
```

## 剩余参数  
``` js
// 在 JavaScript 里，你可以使用 arguments 来访问所有传入的参数。
// 在 TypeScript 里，你可以把所有参数收集到一个变量里： 
// 编译器创建参数数组，名字是你在省略号（ ...）后面给定的名字，你可以在函数体内使用这个数组
function info(x: string , ...args:string[]){
    console.log(x,args)
}
info('abc','c','b','a') // abc [ 'c', 'b', 'a' ]
```

## 函数重载: 函数名相同, 而形参不同的多个函数 
``` js
// 重载函数声明
function add(x:string , y : string):string 
function add(x :number ,y :number) :number 
// 定义函数实现 
function add(x: string | number , y: string | number):string | number{
    if(typeof x === 'string' && typeof y === 'string'){
        return x + y 
    }else if (typeof x === 'number' && typeof y === 'number'){
        return x + y 
    }else{
        return x 
    }
    // return x 
}
console.log(add(1,2))
console.log(add('a','b'))
```