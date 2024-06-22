(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{599:function(t,e,a){"use strict";a.r(e);var n=a(38),v=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"es6-7-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6-7-8"}},[t._v("#")]),t._v(" es6 7 8")]),t._v(" "),a("h2",{attrs:{id:"map对象-和set对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map对象-和set对象"}},[t._v("#")]),t._v(" map对象 和set对象")]),t._v(" "),a("p",[t._v("map对象 ：\nvar map = new Map() ;\nmap.set(key,value)\nmap.get(key)\nmap.delete(key)")]),t._v(" "),a("p",[t._v("Map是一组键值对的结构，具有极快的查找速度。")]),t._v(" "),a("p",[t._v("set对象 ：")]),t._v(" "),a("p",[t._v("Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。")]),t._v(" "),a("p",[t._v("要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set：")]),t._v(" "),a("p",[t._v("var s1 = new Set(); // 空Set")]),t._v(" "),a("p",[t._v("var s2 = new Set([1, 2, 3]); // 含1, 2, 3")]),t._v(" "),a("p",[t._v("Map和Set是ES6标准新增的数据类型，请根据浏览器的支持情况决定是否要使用")]),t._v(" "),a("p",[t._v("Set和Map主要的应用场景在于数组去重和数据存储，")]),t._v(" "),a("h2",{attrs:{id:"super和extends"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#super和extends"}},[t._v("#")]),t._v(" super和extends")]),t._v(" "),a("p",[t._v("super的两种用法 ： 在子类继承父类时  ，")]),t._v(" "),a("ol",[a("li",[t._v("子类中传实参到父类construct构造函数中\n2.super做为“对象”，调用父类方法")])]),t._v(" "),a("p",[t._v("extends如何实现继承")]),t._v(" "),a("ol",[a("li",[t._v("构造函数constrouct的属性通过复制完成 ； 字面量定义的对象属性是深拷贝（通过  son.obj.ob===father.obj.ob  引用地址做比较 ）； 在构造函数外的继承是引用复制")])]),t._v(" "),a("p",[t._v("extends  ； 将父类的")]),t._v(" "),a("h2",{attrs:{id:"var-let-const-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-let-const-的区别"}},[t._v("#")]),t._v(" var  let const 的区别")]),t._v(" "),a("p",[t._v("1.从ES6 开始  引入   let  const"),a("br"),t._v("\n2. let   的引入 ，让js真正拥有了块级作用域   ， 原来的 var  只有函数作用域和全局作用域   ，"),a("br"),t._v("\n3. let    没有  变量提升   ， 如果你需要使用变量   ，  那么变量必须写在前面  ，否则报错（暂时性死区）\n4. let  不能在相同的作用域内重复定义  ， 报错"),a("br"),t._v("\n5. let")]),t._v(" "),a("p",[t._v("z\n配合 for 循环的独特应用\n总结 ：ES6的let让js真正拥有了块级作用域，也是向这更安全更规范的路走，虽然加了很多约束，但是都是为了让我们更安全的使用和写代码。")]),t._v(" "),a("ol",[a("li",[t._v("var 模拟块级作用域  ：")])]),t._v(" "),a("p",[t._v("(function(){\n//块级作用域\n})()")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("var 的变量提升   （作用域的声明  ，没有变量绑定  也就是未初始化   ，默认为underfind，不报错）")])]),t._v(" "),a("p",[t._v("// var a = 99;            // 全局变量a\n// f();                   // f是函数，虽然定义在调用的后面，但是函数声明会提升到作用域的顶部。\n// console.log(a);        // a=>99,  此时是全局变量的a\n// function f() {\n//   console.log(a);      // 当前的a变量是下面变量a声明提升后，默认值undefined\n//   var a = 10;\n//   console.log(a);      // a => 10\n// }")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("let 与for  独特的作用")])]),t._v(" "),a("p",[t._v("for (var i = 0; i <10; i++) {"),a("br"),t._v("\nsetTimeout(function() {  // 同步注册回调函数到 异步的 宏任务队列。\n//     console.log(i);        // 执行此代码时，同步代码for循环已经执行完成\n//   }, 0);\n// }\n//输出结果   10  个  10")]),t._v(" "),a("p",[t._v("i虽然在全局作用域声明，但是在for循环体局部作用域中使用的时候，变量会被固定，不受外界干扰。\nfor (let i = 0; i < 10; i++) {\nsetTimeout(function() {\nconsole.log(i);    //  i 是循环体内局部作用域，不受外界影响。\n}, 0);\n}\n//输出结果:0,1,2.....9")]),t._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);e.default=v.exports}}]);