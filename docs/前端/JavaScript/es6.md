## es6 7 8 

## map对象 和set对象

map对象 ： 
var map = new Map() ; 
map.set(key,value)
map.get(key)
map.delete(key)

Map是一组键值对的结构，具有极快的查找速度。

set对象 ： 

Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。

要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set：

var s1 = new Set(); // 空Set

var s2 = new Set([1, 2, 3]); // 含1, 2, 3


Map和Set是ES6标准新增的数据类型，请根据浏览器的支持情况决定是否要使用

Set和Map主要的应用场景在于数组去重和数据存储，


## super和extends


super的两种用法 ： 在子类继承父类时  ，
1. 子类中传实参到父类construct构造函数中 
2.super做为“对象”，调用父类方法


extends如何实现继承
  1. 构造函数constrouct的属性通过复制完成 ； 字面量定义的对象属性是深拷贝（通过  son.obj.ob===father.obj.ob  引用地址做比较 ）； 在构造函数外的继承是引用复制   

extends  ； 将父类的


## var  let const 的区别

1.从ES6 开始  引入   let  const    
2. let   的引入 ，让js真正拥有了块级作用域   ， 原来的 var  只有函数作用域和全局作用域   ，  
3. let    没有  变量提升   ， 如果你需要使用变量   ，  那么变量必须写在前面  ，否则报错（暂时性死区）
4. let  不能在相同的作用域内重复定义  ， 报错    
 5. let

z
配合 for 循环的独特应用
总结 ：ES6的let让js真正拥有了块级作用域，也是向这更安全更规范的路走，虽然加了很多约束，但是都是为了让我们更安全的使用和写代码。


1. var 模拟块级作用域  ：

(function(){
    //块级作用域
})()

2.  var 的变量提升   （作用域的声明  ，没有变量绑定  也就是未初始化   ，默认为underfind，不报错）

// var a = 99;            // 全局变量a
// f();                   // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。 
// console.log(a);        // a=>99,  此时是全局变量的a
// function f() {
//   console.log(a);      // 当前的a变量是下面变量a声明提升后，默认值undefined
//   var a = 10;
//   console.log(a);      // a => 10
// }

3.  let 与for  独特的作用   

 for (var i = 0; i <10; i++) {  
   setTimeout(function() {  // 同步注册回调函数到 异步的 宏任务队列。
//     console.log(i);        // 执行此代码时，同步代码for循环已经执行完成
//   }, 0);
// }
//输出结果   10  个  10  


 i虽然在全局作用域声明，但是在for循环体局部作用域中使用的时候，变量会被固定，不受外界干扰。
 for (let i = 0; i < 10; i++) { 
   setTimeout(function() {
    console.log(i);    //  i 是循环体内局部作用域，不受外界影响。
   }, 0);
}
//输出结果:0,1,2.....9

## 