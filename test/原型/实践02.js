// 经典继承 实例的原型方法修改 ，是否会影响兄弟实例   
// 结论  还是会影响   也就是说 一般不推荐直接修改实例的原型  
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
Object.getPrototypeOf(son1).say = function(){
    console.log("重写父亲今年25岁")
}
son1.say()
son2.say()