# 1. TypeScript常用语法 
<!-- ### 测试三级标题 -->
## 布尔值  
``` js
//  let isDone: Boolean = false ;
//  isDone = true ; 
//  isDone = 2  // error 
```

## 数字 
``` js
//TypeScript 里的所有数字都是浮点数  这些浮点数的类型是 number 支持 十和 十六进制   以及 es2015 引入的二进制和八进制
let a1: number = 10 // 十进制
let a2: number = 0b1010  // 二进制
let a3: number = 0o12 // 八进制
let a4: number = 0xa // 十六进制
```
## 字符串 
``` js
let name1:string = 'tom'

undefined 和 null
let u: undefined = undefined
let n: null = null
```
## 数组  
 有两种方式可以定义数组 ,第二种方式是使用数组泛型

``` js
let list1 : number[] = [1,2,3] 
let list2 : Array<number> = [1,2,3]
```
## 元组Tuple  
元组类型允许表示一个已知元素数量和类型的数组 ps: 各元素的类型不必相同

``` js
let t1 : [string , number ]
t1 = ["hellow ",10]  // ok
t1 = [10 , ' hellow']  // error
```
## 枚举  
enum 类型是对 JavaScript 标准数据类型的一个补充。 使用枚举类型可以为一组数值赋予友好的名字。
``` js
enum Color {
    Red,
    Green,
    Blue
}
// // 枚举数值默认从0开始依次递增 
// // 根据 特定的名称得到对应得枚举数值 
let myColor :Color = Color.Green
console.log(myColor ,Color.Red ,Color.Blue,'xxx')  // 1 0 2 

// 默认情况下，从 0 开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1 开始编号：
enum Color{Red =1 ,Green,Blue}
let c:Color = Color.Green
console.log(c)  //2 

// or /，全部都采用手动赋值：
enum Color {Red =1 ,Green=2 , Blue = 4 }
let c:Color = Color.Green   //2 

//枚举类型可由枚举的值得到它的名字 。 
enum Color {Red = 1 , Green,Blue}
let colorName :string = Color[2]
console.log(colorName)
```

## any 
 表示可以为任何类型 在编程阶段还不清楚类型的变量指定一个类型 ， 不希望类型检测器进行检查而是直接通过编译阶段的检查
``` js
let noCare : any = 4 
noCare = false  // 可以是boolean 
noCare = "不确定的值" 
let noSure: any[] = [1,'3',false]  //数组可以为任意值
noSure[1] = 222 ; 
```

## void
 表示没有任何类型 ， 与any相反  ， 当一个函数没有返回值时 ，通常见到返回值类型是void 
``` js
let hh  : void = undefined
hh = null   // error 
function fn():void{  // 定义了void就不能写return了
    console.log('fn()')
    // return 1 // error
    // return null // error
    // return undefined  // ok
}
console.log(fn())
```
## object 
 表示引用类型 非原始类型  ，也就是除 number string boolean undefined null NaN之外的类型 
``` js 
function fn2(obj:object):object{
    console.log('fn2()',obj)
    // var currentTime = new Date () 
    var patt1=/w3cschool/i; 
    // return {}  // ok
    // return currentTime // 日期对象  ok
    // return [] // 数组   ok
    return patt1  // RegExp 对象   ok 
}
```

## 联合类型（Union Types） 
 表示取值可以为多种类型中的一种
``` js
var ab: (number | string)  = 1 ;
ab = '2'  // ok 
```
## 类型断言  
TypeScript 允许你覆盖它的推断，并且能以你任何你想要的方式分析它，这种机制被称为「类型断言  只在编译段起作用  
``` js
//  有两种写法 <type>   or  as  
function getLength(x:(string | number )):void{
    const foo = {} 
    foo.bar = 123 ;  // Error   'bar' 属性不存在于 {}  
    foo.bas = 'hello' 
    //  由于对象foo不存在任何属性，因此给属性赋值就报错了，可以通过类型断言避免此问题 。
    
    //  成功的写法 
    interface Foo{
        bar:number , 
        bas:string 
    }
    // const foo = <Foo>{}   第一种写法
    const foo = {} as Foo  // 第二种写法 推荐 tsx 只支持这个
    foo.bar = 123 
    foo.bas = "ssss"
    console.log(foo.bar)

    // 失败的案例 ，两个类没有从属关系 ， 加断言的时候运行报错 。
    // 判断是否能够断言
    // 当 S 类型是 T 类型的子集，或者 T 类型是 S 类型的子集时，S 能被成功断言成 T，当然T 能被成功断言成 S。
    // 这是为了在进行类型断言时提供额外的安全性，完全毫无根据的断言是危险的，如果你想这么做，你可以使用 any

    // 关于继承和派生
    // 假设有基类A，子类B、派生类C，那么B类继承了A的属性和方法，同时可以定义自己的属性和方法。C类是派生类，他实现了A的接口，同时也可以定于你自己的属性和方法。
}
getLength(1)
```
## 类型推断 
 Ts在没有指定类型的时候推测出一个类型 
``` js
//  有2种情况 ： 1. 定义变量时赋值了 ， 推断为对应的类型 2 . 定义变量时没有赋值 ，推断为any类型 
// let a = 1  
// a = '3'  // error
let b  ; 
b= 1   ; // ok 
b = "s";  // ok 
```