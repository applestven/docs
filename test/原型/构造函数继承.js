// 构造函数继承  
// 做法： 在子构造函数中执行父构造函数 ,this指向子构造函数 
// 优缺点 :可以继承父类的属性 ； 无法继承父类的方法 
function Father(age){
    this.name = "李四",
    this.age = age
}
function Son(age){
    Father.call(this,age)
}
let son1 = new Son(12)
console.log(son1) // Son { name: '李四', age: 12 }
