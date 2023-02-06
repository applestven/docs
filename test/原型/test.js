function Foo(){ // 构造函数也是普通函数 ， 
    this.a = 1 
}

let foo = new Foo()  //构造函数通过new关键字 创建 实例对象  

console.log(Foo.prototype) // 构造函数通过prototype  拿到原型对象 

console.log(foo.__proto__ == Object.getPrototypeOf(foo) ) // 实例对象通过 __proto__ , Object.getPrototypeOf 原型对象

console.log(foo.__proto__==Foo.prototype) // 构造函数的原型对象与其实例对象的原型对象为同一个，
console.log(foo.__proto__.constructor==Foo.prototype.constructor)//他们的constructor也都指向Foo
console.log("----------- 重写构造函数的原型对象 -------")
// 重写构造函数的原型对象  //此时 constructor 指向object ,需将constructor重新指向Foo
Foo.prototype = {
    name:"旺旺",
    bb:function (){
        console.log("我叫"+this.name)
    },
    constructor:Foo
}
let foo2 = new Foo()  //构造函数通过new关键字 创建 实例对象  
console.log(foo2)// { a: 1 }  // 
console.log(foo2.name) // 旺旺  说明实例对象能够拿到原型对象上的属性
console.log(Object.getPrototypeOf(foo2)==Foo.prototype) // true 原型对象 { name: '旺旺', bb: [Function: bb] }
console.log(Object.getPrototypeOf(foo2).constructor ) 
console.log(foo2.bb())
Foo.prototype.bb = function (){
    console.log('Foo构造函数.重写了原型的bb方法')
}
Object.getPrototypeOf(foo2).bb= function(){
    console.log("实例对象重写原型方法")
}

console.log("--分割--")
// foo2.bb() == foo1.bb()
console.log(foo.__proto__)

console.log(foo2.bb == foo.bb)

