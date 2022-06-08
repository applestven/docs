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