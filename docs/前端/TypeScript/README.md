# TypeScript Study

    参考CDN : https://blog.csdn.net/qq_40280582/article/details/112444461

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
## 1. TypeScript常用语法 
### 测试三级标题
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
## 2.接口 
 使用接口定义对象的类型  接口是对象的状态（属性）
``` js
interface Person{
 id :number ,
 name:string ,
 age:number,
 sex:string 
}
const person1:Person = {
    id:1 ,
    name:"张三",
    age:18,
    sex:"男"
}
//  可选属性  对可能存在的属性进行预定义  ?: 
interface Person{
     id :number ,
     name:string ,
     age?:number,
     sex?:string 
}
const person1:Person = {
    id:1 ,
    name:"张三",
}
// 只读属性 readonly
interface Person{
     readonly id :number ,
     readonly test ?:object ,
     name:string ,
     age?:number,
     sex?:string 
}
const person1:Person = {
    id:1 ,
    name:"张三",
    test:{},
}
person1.id = 22; // error
person1.test = {'a'}  
// readonly vs const  区别在前者当属性用（Object也不能改）   ， 后者当变量用 
```
## 函数类型 
 接口能够描述 JavaScript 中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型
``` js
 interface SerchFunc{
     (source:string,subString:string):boolean
 }

 const mySearch :SerchFunc = function (source:string,sub:string):boolean{
     return source.search(sub) > -1 
 }
 console.log(mySearch('abcd','bc'),11)
 ```

## 接口在类中的实现  
``` js
interface Alarm{
    alert(): any;
}
interface Light {
    ligthOn() : void;
    ligthOff():void ;
}
class Car implements Alarm{
    alert() {
        console.log("car alert")
    }
}

// 一个类实现多个接口
class Car2 implements Alarm,Light{
    alert() {
        console.log('Car2 alert')
    }
    ligthOn(): void {
        console.log('car2 lightOn')
    }
    ligthOff(): void {
        console.log('car2 lightOff')
    }
}
```
## 接口继承接口  
和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里
``` js
interface LighttableAlarm extends Alarm,Light{
}
```

## 3.类
1. 对于传统的 JavaScript 程序我们会使用 “函数” 和 “基于原型的继承” 来创建可重用的组件，
2.  但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是  “基于类的继承” 并且对象是由类构建出来的。
3.  从 ECMAScript 2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 
4.  使用 TypeScript，我们允许开发者现在就使用这些特性，并且编译后的 JavaScript 可以在所有主流浏览器和平台上运行，而不需要等到下个 JavaScript 版本。

``` js
// 基本示例  类的基本定义与使用 
class Greeter {
    // 
    message:string 
    constructor(message:string){
        this.message = message
    }
    //
    greet():string{
        return 'Hello'+this.message
    }
}
const greeter = new Greeter('world')
console.log(greeter.greet())
```
## 继承 
  在TypeScript里 ，我们可以使用常用的面向对象模式，基于类的程序设计种一种最基本的模式是允许使用继承来扩展现有的类
``` js
// 这个例子展示了最基本的继承：类从基类中继承了属性和方法。 
// 这里，Dog 是一个 派生类，它派生自 Animal 基类，通过 extends 关键字。
//  派生类通常被称作子类，基类通常被称作超类。
class Animal{
    run(distance:number){
        console.log(`Animal run ${distance}m`)
    }
}
class Dog extends Animal{
    cry(){
        console.log("wang!wang!")
    }
}
var dog  = new Dog()
dog.cry()
dog.run(100)
```
 这个复杂些关于类继承的例子：
使用 extends 关键字创建了 Animal的两个子类：Horse 和 Snake
与前一个例子的不同点是，派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数，
而且，在构造函数里访问 this 的属性之前，我们 一定要调用 super()。 这个是 TypeScript 强制执行的一条重要规则
这个例子演示了如何在子类里可以重写父类的方法。
Snake类和 Horse 类都创建了 run 方法，它们重写了从 Animal 继承来的 run 方法，使得 run 方法根据不同的类而具有不同的功能。
``` js
class Animal{
    name : string
    constructor(name: string){
        this.name = name
    }
    run(distance :number = 0){
        console.log(`${this.name} run ${distance} m`)
    }
}
class Snack extends Animal{
    constructor(name:string){
        //调用父类构造方法
        super(name)
    }
    //重写父类方法 
    run(distance: number = 5){
        super.run(distance)
    }
}
class Horse extends Animal{
    constructor (name: string){
        super(name)
    }
    run(distance:number = 50){
        super.run(distance)
    }
    xxx () {
        console.log("xxx()")
    }
}
const snack = new Snack('snake')
snack.run()
const horse = new Horse('horse')
horse.run()
horse.xxx()
// 父类引用指向子类型的实列 => 多态
const tom:Animal = new Horse('ho22')
tom.run()
//如果子类型没有扩展的方法 ， 可以让子类型引用指向父类型的实例
const tom3:Snack = new Animal('sn22')
tom3.run()
// 如果子类型有扩展的方法 ， 不能让子类型引用指向父类的实例 （简单理解  new对象Animal内容 >= 声明horse内容 才不报错）
// const tom2:Horse = new Animal('tom2') // error  缺少xxx 
```

## 公共，私有与受保护的修饰符 
``` js
// 在 TypeScript 里，成员都默认为 public
//理解 private 当成员被标记成 private 时，它就不能在声明它的类的外部访问
//理解 protected 修饰符与 private 修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问
// public: 默认值, 公开的外部也可以访问 private: 只能类内部可以访问   protected: 类内部和子类可以访问
class Animal{
    public name:string 

    public constructor(name:string){
        this.name = name
    }
    public run (distance:number = 0){
        console.log(`${this.name} run ${distance} m`)
    }
}
class Person extends Animal{
    private age: number = 18 
    protected sex :string = '男'
    run(distance:number = 5){
        console.log('person jumping....')
        super.run(distance)
    }
}
class Student extends Person {
    run(distance:number = 6 ){
        console.log("Student JUmping")
        console.log(this.sex) //子类可看到父类中受保护的成员
        // console.log(this.age) // 子类看不到父类中私有的成员
        super.run(distance)
    }
}
console.log(new Person('abc').name)
// console.log(new Person('abc').sex)  // 受保护的不可见
// console.log(new Person('abc').age)  //  私有的不可见
```


## readonly 修饰符  
只读属性必须在声明时或构造函数里被初始化
```js 
class Person{
    readonly name:string = 'abc'
    constructor(name :string){
        this.name = name
    }
}
let john = new Person('john')
// john.name = 'peter' // error 
```

## 参数属性
参数属性通过给构造函数参数前面添加一个访问限定符来声明,参数属性可以方便地让我们在一个地方定义并初始化一个成员 
``` js
//  注意看我们是如何舍弃参数 name，仅在构造函数里使用" readonly name: string "参数来创建和初始化 name 成员。我们把声明和赋值合并至一处。
// 使用 private 限定一个参数属性会声明并初始化一个私有成员；对于 public 和 protected 来说也是一样
class Person{
    constructor(public name:string){}
}
const p = new Person('jack')
console.log(p.name)
```

## 存取器 
ps: （访问器仅在针对ECMAScript 5及更高版本时可用）
``` js
// TypeScript 支持通过 getters/setters 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
// 下面来看如何把一个简单的类改写成使用 get 和 set。 首先，我们从一个没有使用存取器的例子开始。 
class Person{
    firstName :string ='A'
    latName :string = 'B'
    get fullName (){
        return this.firstName + '-' +this.latName
    }
    set fullName (value){
        const names = value.split('-')
        this.firstName =names[0]
        this.latName = names[1]
    }
}
const p  = new Person()
console.log(p.fullName) 
p.firstName = 'C'
p.latName = 'D'
console.log(p.fullName)
p.fullName='E-F'
console.log(p.firstName , p.latName)
// 编译报错 Accessors are only available when targeting ECMAScript 5 and higher. 、、访问器仅在针对ECMAScript 5及更高版本时可用。
// tsc -t es5 csTest.ts
```

## 静态属性static  
 静态属性, 是类对象的属性  非静态属性, 是类的实例对象的属性
``` js
class Person{
    name1 :string = 'A'
    static name2 :string = 'B'
}
console.log(Person.name2) // 通过类直接访问 
console.log(new Person().name1) // 通过实例访问
```

## 抽象类abstract  
- 不能被实例化,可以包含成员的实现细节 
- 用于定义抽象类和在抽象类内部定义抽象方法
- 不能创建实例对象, 只有实现类才能创建实例， 可以包含未实现的抽象方法 
``` js
abstract class Animal{
    abstract cry():void  
    run(){
        console.log('run()')
    }
}
class Dog extends Animal{
    cry() {
        console.log("Dog Cry()")
    }
}
const dog = new Dog()
dog.cry()
dog.run()
```

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

## 5. 泛型  
- 指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。
``` js
// 引入 不用泛型的话，这个函数可能是下面这样：
function createArray(value :any ,count :number):any[]{
    const arr: any[] = []
    for(let index = 0 ;index <count ; index++){
        arr.push(value)
    }
    return arr
}
const arr1 = createArray(11,3)
const arr2 = createArray('aa',3)
console.log(arr1[0].toFixed() ,arr2[0].split(''))
```
## 使用函数泛型 
``` js
function createArray2<T>(value :T ,count:number){
    const arr: Array<T> = []
    for(let index = 0 ; index <count ; index++){
        arr.push(value)
    }
    return arr
}
const arr3 = createArray2<number>(11,3)
console.log(arr3[0].toFixed())
// console.log(arr3[0].split('')) // error
const arr4 = createArray2<string>('aa',3)
console.log(arr4[0].split(''))
// console.log(arr4[0].toFixed()) // error
```
## 多个泛型参数的函数 
``` js
function swap<K,V>(a:K , b:V):[K,V]{
    return [a,b]
}
const result = swap <string ,number>('abc',123)
console.log(result[0].length ,result[1].toFixed())
```
## 泛型接口 
 在定义接口时 ， 为接口中的属性或方法定义泛型类型 
 在使用接口时 ， 再指定具体的泛型类型 
 ``` js
interface IbaseCRUD<T>{
    data:T[]
    add:(t: T)=> void 
    getById: (id: number)=> T
}

class User {
    id?:number ; //id 
    name:string ; 
    age:number ;

    constructor (name ,age){
        this.name = name 
        this.age = age 
    }
}
class UserCRUD implements IbaseCRUD <User> {
    data :User[] = []
    add(user :User): void{
        user = {...user , id:Date.now()}
        this.data.push(user)
        console.log('保存user',user.id)
    }
    getById (id: number):User {
        return this.data.find(item => item.id===id)
    }
}
```
## 泛型类 
 在定义类时 ，为类中的属性或方法定义泛型类型
在创建类的实例时 , 再指定特定的泛型类型 
``` js
class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
  }
  let myGenericNumber = new GenericNumber<number>()
  myGenericNumber.zeroValue = 0
  myGenericNumber.add = function(x, y) {
    return x + y 
  }
  let myGenericString = new GenericNumber<string>()
  myGenericString.zeroValue = 'abc'
  myGenericString.add = function(x, y) { 
    return x + y
  }
  console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
  console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))
```
## 泛型约束 
 如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性
我们可以使用泛型约束来实现 
``` js
interface Lengthwise {
    length: number;
}
function fn2 <T extends Lengthwise>(x: T): void {
    console.log(x.length)
}
// fn2('abc')
// fn2(123) // error number没有length属性
```

## 6. 其他  

 声明文件 
    参考资料:http://ts.xcatliu.com/basics/declaration-files
- 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能
- 声明文件必需以 .d.ts 为后缀。
- 假如仍然无法解析，那么可以检查下 tsconfig.json 中的 files、include 和 exclude 配置，确保其包含了 jQuery.d.ts 文件
- declare var jQuery: (selector: string) => any;
- 很多的第三方库都定义了对应的声明文件库, 库文件名一般为 @types/xxx, 可以在 https://www.npmjs.com/package/package 进行搜索
- 有的第三库在下载时就会自动下载对应的声明文件库(比如: webpack),有的可能需要单独下载(比如jQuery/react)

- 内置对象 JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。 
- 内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

```js
// ECMAScript 的内置对象 
// Boolean
// Number
// String
// Date
// RegExp
// Error 
/* 1. ECMAScript 的内置对象 */
let b: Boolean = new Boolean(1)
let n: Number = new Number(true)
let s: String = new String('abc')
let d: Date = new Date()
let r: RegExp = /^1/
let e: Error = new Error('error message')
b = true

// BOM 和 DOM 的内置对象 
// Window
// Document
// HTMLElement
// DocumentFragment
// Event
// NodeList
const div: HTMLElement = document.getElementById('test')
const divs: NodeList = document.querySelectorAll('div')
document.addEventListener('click', (event: MouseEvent) => {
  console.dir(event.target)
})
const fragment: DocumentFragment = document.createDocumentFragment()
```
