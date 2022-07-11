// 做法 ： 构造函数继承 + （子构造函数 = 中间函数的实例）中间函数的原型等于父构造函数的原型
// 优缺点 ： 能够实现属于与方法的经典继承 ；性能优化问题 、执行了父构造函数 与 中间函数（伪经典也执行了两个函数）
function Father(name){
    this.name
}
Father.prototype.eat = function (){
    console.log("会吃饭")
}
function Son(name){
    Father.call(this,name)
}
function Temp (){} // 中间函数

Temp.prototype = Father.prototype // 圣杯的主要步骤 

Son.prototype = new Temp() // 

let son1 = new Son()
let son2  = new Son()


son1.eat()


