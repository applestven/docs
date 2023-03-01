# 面试大经 -- 检验学习广度
## 收集面试题  知识点 

印象笔记  
##  promise  微任务与宏任务
```js
async function async1() {
  console.log('async1 start');
  await async2();
   console.log('async1 end');
}
async function async2() {
  console.log('async2');
}

console.log('illegalscript start');

setTimeout(function() {
    console.log('setTimeout');
}, 0);
async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
   console.log('promise2');
});

console.log('illegalscript end');

问：以上代码的执行顺序  ？

————————————————
版权声明：本文为CSDN博主「Jamki小烽烽」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/m0_37922914/article/details/108564884
```

## 正则

密码必须是8-16位字母 数字 字符组成(不能为纯数字）
```js
1. 示例一
const filter = /^(?=.*[0-9\!@#\$%\^&\*])(?=.*[a-zA-Z]).{8,16}$/;
if(!filter.test(this.pass.fund)){
// console.log("密码必须是8-16位字母 数字 字符组成(不能为纯数字)")
}
```

## 箭头函数和普通函数的区别

更加简单 、 简洁 使用 =>创建函数    ； 
创建箭头函数时 会以上下文作为this的值（继承外层执行环境中的this） ，并且this不会被更改（call  apply bind都不行）  ；
箭头函数也没有prototype ， 基于以上所以箭头函数也不能作为构造函数，new创建的对象 需要指向新对象  ；
箭头函数不能作为Generator函数，不能使用yield关键字 ；


扩展 ： 
## Generator 函数
function* g(){ 创建Generator 
     yield  "到这里先生产"
}    
g.next()  //  {value: "到这里先生产", done: false}
,  ；；next对应yield顺序生产值  

Generator 返回的是itrater遍历器对象   可以对Generator 函数进行遍历
for (let  item of g){ }

yield*  g  也是对Generator  进行遍历
