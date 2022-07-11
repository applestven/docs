# js继承
## 构造函数  

构造函数也是函数 ， 构造函数与普通函数没有什么区别 

特殊的地方在  使用 new 关键字进行 创建实例对象，this指向这个创建的对象 

``` js

function Foo(){ // 构造函数Foo  

}

```

## 实例对象 

通过构造函数 使用new关键字进行创建  

``` js

function Foo(){ // 构造函数Foo  

this.a = 10  // 为实例对象的私有属性,原型对象取不到 

}

let foo = new Foo()

console.log(foo)  //Foo {a: 10}



```

## 原型对象 

prototype    __proto__   以及 constructor

1.实例对象 通过 __proto__  |  Object.getPrototypeOf() 获取原型对象 

2.构造函数通过prototype 获取原型对象

3. constructor 是原型对象上的属性 ， 指向构造函数 

4.实例对象和构造函数获取的原型指向相同 ， constructor 也相同 ，重写

构造函数的原型 ，需要将 constructor 重新指向Foo构造函数





## 原型链继承 

做法：将子类构造函数的原型赋值为父类的实例

优缺点：可以继承父类的方法； 引用值共享问题   

``` js

function Foo(){

this.arr = [1,2,3]

}

function B(){



}

B.prototype =  new Foo() // 这就是原型链继承 



let bb1 = new B()

let bb2 = new B()

// 问题来了  

bb1.arr.push(4)  // 

console.log( bb2.arr ) //   [1,2,3,4] 

```

## 构造函数继承 

做法 ： 在子构造函数中执行父构造函数并将父类方法的this指向子类

优缺点：可以继承父类的属性 ； 无法继承父类的方法 

```js

function Father (name,age){

this.name = name,

this.age = age 

}

function Son(name,age,score){

Father.call(this)//这就是构造函数继承

this.score=score

}

let son1 = new son1( "张三" ,18,100)

let son2 = new son1( "李四" ,23,90)  

console.log(son1)

console.log(son2)

```

## 组合继承 （伪经典继承）
    圣杯模式： 借用中间函数原型=父构造函数原型  子构造函数 = 中间函数实例 ， 一样执行了两个函数 ， 不同的是中间函数没有属性 开销更小 

做法 ： 将原型链继承  和 构造函数继承

优缺点 ：属性和方法都得到了继承 ； 缺点 ： 执行了两遍父类构造函数 ，性能问题  
```js


function Father(name) {
   this.name = name
   this.age = 45
}
Father.prototype.say = function () {
   console.log("父亲今年45岁")
}
function Son(name){
   Father.call(this,name)// 这就是构造函数继承 继承父类属性 在子类构造函数里指向父类函数并指向子类this
}
Son.prototype = new Father() // 这就是原型链继承   继承父类方法
let son1 = new Son('张三父亲')
let son2 = new Son('李四父亲')
son1.name = "张三非亲生父亲"
console.log(son1.name)
console.log(son2.name)
```
##  寄生组合继承
```js
// 实现 ：构造函数继承+ Object.create(Father.prototype)
// 优缺点 ：解决了组合继承，两次执行父构造函数的可优化问题 ；重写了原型 ， 在重写原型之前的子构造
// 函数的方法被覆盖  ，子构造函数必须重新添加原型上的方法
function Father(name) {
   this.name = name
   this.age = 45
}
Father.prototype.say = function () {
   console.log("父亲今年45岁")
}
function Son(name){
   Father.call(this,name)// 这就是构造函数继承 继承父类属性 在子类构造函数里指向父类函数并指向子类this
}
// Son.prototype = new Father() // 这就是原型链继承   继承父类方法
// Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型
Son.prototype = Object.create(Father.prototype) // 这就是寄生组合继承 主要步骤
let son1 = new Son('张三父亲')
let son2 = new Son('李四父亲')
son1.name = "张三非亲生父亲"
console.log(son1.name)
console.log(son2.name)
```

## class继承 
class 继承  主要是 extends  super 关键字
```js


class Person{
    constructor(name){
        this.name = name 
    }
    eat(){
        console.log("可以吃饭")
    }
}

class Father extends Person{
    constructor(name){
        super(name)
        this.age = 45
        super.eat
    }
    givMoney(){
        console.log("父亲给儿子钱")
    }
}

class Son extends Person{
    constructor(name){
        super(name)
        this.age = 15
        super.eat
    }
    eat(){ // 重写继承的方法 
        console.log("可以吃饭 ，还可以喝水")
    }
    getMoney(){
        console.log("儿子问父亲要钱")
    }
}

let father = new Father("父亲张三")
let son = new Son("儿子李四")

// console.log(son.getMoney())
// console.log(son.age) 
// console.log(son.eat()) 
console.log(father.eat())
```


