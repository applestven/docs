//子继父的原型方法   子与父两个原型方法say是否引用地址相同  // 相同
// 对子原型方法重写  ， 父与子构造函数的方法是否相同   // 不再相等 ，子构造方法原型链上的方法不改变
// 改变其中一个兄弟的实例原型方法，另一个是否被影响  ，// 对

function Father(){
    this.name="哈哈"
}
function Son(){

}
Father.prototype.say= function(){
    console.log("父亲说")
}
Son.prototype = new Father()
let son1 = new Son()
let son2 = new Son()
console.log(son1.say == Father.prototype.say)//  true  重写前实例方法与原型方法相同 
Object.getPrototypeOf(son1).say = function(){
    console.log("兄弟1的方法被改变")
}
console.log(son1.say == Father.prototype.say) // false  重写后实例方法与原型方法相同 
//1 . true 子继父的原型方法   子与父两个原型方法say是否引用地址相同
// console.log(son1.say === Father.prototype.say); // true 

// 2. 对子原型方法重写  ， 父与子构造函数的方法是否相同 . 此时父构造原型上方法是否重写
// Son.prototype.say = function(){
//     console.log("子重写")
// }
// let son3 = new Son()
// console.log(son3.say === Father.prototype.say);
// son3.say()
// Father.prototype.say()

//3. 对其中一个兄弟实例的原型方法重写 ，会影响另外一个兄弟原型的方法一起修改
// Object.getPrototypeOf(son1).say = function(){
//     console.log("兄弟1的方法被改变")
// }

// son1.say()//
// son2.say() 
// console.log(son1.say == son2.say ) //true
// // Father.prototype.say()


//结论： 原型继承  构造函数的原型方法可以重写 ，不影响父类构造函数
//  实例对象原型方法不能重写 会影响其他实例的使用 ，
