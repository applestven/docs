(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{629:function(o,e,s){"use strict";s.r(e);var t=s(38),r=Object(t.a)({},(function(){var o=this,e=o.$createElement,s=o._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[s("h2",{attrs:{id:"amd-cmd-模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amd-cmd-模块化"}},[o._v("#")]),o._v(" AMD  CMD 模块化")]),o._v(" "),s("p",[o._v("require  是由 AMD规范引入   运行时调用")]),o._v(" "),s("p",[o._v("import  具有提升效果 ，会提升到整个模块的头部 ，最好放在文件开头    是编译时调用")]),o._v(" "),s("h2",{attrs:{id:"commjs和es-module区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commjs和es-module区"}},[o._v("#")]),o._v(" Commjs和Es Module区")]),o._v(" "),s("ol",[s("li",[s("p",[o._v("这个东西是什么  ：用来进行模块化开发  ，主要就是导入导出两个作用")])]),o._v(" "),s("li",[s("p",[o._v("特点/区别：")])])]),o._v(" "),s("p",[o._v("两者的模块导入导出语法不同：commonjs是module.exports，exports导出，require导入；ES6则是export导出，import导入。\ncommonjs是运行时加载模块，ES6是在静态编译期间就确定模块的依赖。\nES6在编译期间会将所有import提升到顶部，commonjs不会提升require。\ncommonjs导出的是一个值拷贝，会对加载结果进行缓存，一旦内部再修改这个值，则不会同步到外部。ES6是导出的一个引用，内部修改可以同步到外部。\n两者的循环导入的实现原理不同，commonjs是当模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，两者可能会有差异。所以，输入变量的时候，必须非常小心。ES6 模块是动态引用，如果使用import从一个模块加载变量（即import foo from 'foo'），那些变量不会被缓存，而是成为一个指向被加载模块的引用，需要开发者自己保证，真正取值的时候能够取到值。\ncommonjs中顶层的this指向这个模块本身，而ES6中顶层this指向undefined。\nCommonJs 是单个值导出，ES6 Module可以导出多个\n然后就是commonjs中的一些顶层变量在ES6中不再存在：\narguments\nrequire\nmodule\nexports\n__filename")]),o._v(" "),s("p",[o._v("3.这个东西在我专业领域上的应用:   平时用es module比较多")]),o._v(" "),s("h2",{attrs:{id:"模块化组件化-概念理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化组件化-概念理解"}},[o._v("#")]),o._v(" 模块化组件化 概念理解")]),o._v(" "),s("p",[o._v("广义的来讲，模块化和组件化并不在一个维度上，模块化往往是代码的设计和项目结构的设计；但很多时候在狭义的场景中，比如一个很通用的功能，也完全能够将其组件化或模块化，这两者此时十分相似，最大的区别就是组件必定是模块化的，并且往往需要实例化，也应当赋有生命周期，而模块化往往是直接引用")]),o._v(" "),s("p",[o._v("组件化往往是页面布局和特定功能结合在一起组成的可复用的组件 ，组件化的抽象设计是很重要的，不仅增加了复用性提高了工作效率，从某种程度上来说也反应了程序员对业务和产品设计的理解 ，一旦有问题或者需要功能扩展时，你就会发现之前的设计是多么的make sense")])])}),[],!1,null,null,null);e.default=r.exports}}]);