
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

