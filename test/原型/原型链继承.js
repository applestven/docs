function Foo(){
    this.str = 11 ,
    this.arr = [1,2,3,4]
}
function B(){
    
}
B.prototype = new Foo() // 这就是原型链继承 

let bb1 = new B()
let bb2 = new B()
// 问题来了 ， 引用值共享问题 ， 
bb1.arr.push(5)
console.log(bb2.arr)  //[ 1, 2, 3, 4, 5 ]
