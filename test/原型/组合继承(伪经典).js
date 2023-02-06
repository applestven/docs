
// 实现 ：
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

