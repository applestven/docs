(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{467:function(t,s,a){t.exports=a.p+"assets/img/1.bf4c934b.png"},499:function(t,s,a){t.exports=a.p+"assets/img/2.1d5d1bd1.png"},572:function(t,s,a){"use strict";a.r(s);var r=a(38),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"angular-study"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#angular-study"}},[t._v("#")]),t._v(" Angular-Study")]),t._v(" "),r("h2",{attrs:{id:"_1-安装配置angular-cli"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装配置angular-cli"}},[t._v("#")]),t._v(" 1. 安装配置angular-cli")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("1.安装node     node -v\n\n2.安装npm    npm -v（node自带）\n\n3.安装python   python --version  \n\n4. 安装C++编译工具   安装Visual Studio （注意：不是Visual Studio Code 微软      开发工具） 其他操作系统 不需要\nnpm install --gloabl --production windows-build-tools\n\n5. 安装脚手架      npm install -g @angular/cli；；；；\n")])])]),r("h2",{attrs:{id:"_2-使用angular-cli-创建项目-ng-new-angular-demo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用angular-cli-创建项目-ng-new-angular-demo"}},[t._v("#")]),t._v(" 2.使用angular/cli  创建项目     ng new angular-demo")]),t._v(" "),r("h2",{attrs:{id:"_3-启动项目-ng-serve"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动项目-ng-serve"}},[t._v("#")]),t._v(" 3.启动项目  ng serve")]),t._v(" "),r("h2",{attrs:{id:"_4-创建组件-用-cmd命令-ng-generate-component-foo-foo组件名"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建组件-用-cmd命令-ng-generate-component-foo-foo组件名"}},[t._v("#")]),t._v(" 4 . 创建组件  用   cmd命令  ng generate component foo （foo组件名）")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("   组件使用  <app-foo/>\n")])])]),r("p",[t._v("angular应用程序的八个主要构造模块的基础知识")]),t._v(" "),r("p",[t._v("模块  组件  模板  元数据"),r("br"),t._v("\n数据绑定  指令  服务   依赖注入")]),t._v(" "),r("h2",{attrs:{id:"_5-typescript介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-typescript介绍"}},[t._v("#")]),t._v(" 5. typeScript介绍 ：")]),t._v(" "),r("p",[t._v("typeScript 是强类型 ，一旦定义数据的类型，则不能动态修改\ntypeScript实质    = type类型的概念 + ECMAScript6")]),t._v(" "),r("p",[t._v("好处：能够在编写时发现一些类型错误 ，能够避免很多低级错误")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("本地编译搭建环境 npm i -g typescript"),r("br"),t._v("\ncmd命令窗口执行    tsc  ./01.ts 执行转化js"),r("br"),t._v("\ntsc  --version   tsc --help 查看帮助   查看版本号")])]),t._v(" "),r("li",[r("p",[t._v("在线编译 typescript转化为javascript")])])]),t._v(" "),r("h2",{attrs:{id:"typescript基础知识点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#typescript基础知识点"}},[t._v("#")]),t._v(" typescript基础知识点：")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("a.ts数据类型 ： boolean number  string number[]或者Array<number>  元组[number,string]  对象Object    任意类型any  函数空返回值void  null和underfind 变量声明  var  let  const    \nb.解构赋值   let [a,b] = Array[1,2]    \nc.剩余参数 function(...args:number){ //可以传多个数字参数 args.forEach()}\nd.数组展开操作符  ： let arr1 =[1,2,3]  let2=[4,5,6]  let arr =[...arr1,arr2]\n    对象展开操作符 ：\n")])])]),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj1 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("foo")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj2 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("obj1"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// , name:'Jack'}  //一般用于对象混入，拷贝")]),t._v("\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("e.typeScript 类的基本用法\nf.类的继承 \nh.类的（实例）访问修饰符       public(默认)     private   私有成员不可被继承 ，只能在类的内 部使用    protected （可被继承 ，不可外部使用（实例内部可使用））  em： publi  readonly   类似const   不可被修改 ；；； \n        简写 ：\n")])])]),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" constructor（"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" name ：string ，"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" age：number ） "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("j .类变量校验 \n")])])]),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("     "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("age")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" value"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    赋值后调用"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("age")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'年龄不能赋值为负数'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("k  static   类（构造函数）  实例成员 ：只能通过new出来的实例访问    静态成员（static） ：也叫类本身的成员  ，只能通过类本身访问  \nL . 函数\n")])])]),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("    可选函数 em"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("number"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("number")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n    默认参数   em"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("number"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("number"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n    剩余参数 "),r("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("em")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n        "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("number"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             args"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("item"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("number"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n    箭头函数  em ： "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" add "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" （x"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("number "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("number）")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("y     \n")])])]),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[t._v("i:  for-of 循环  for(let val of arr){ console.log(val)}    转译为for循环  支持break\n\no: 模块   模块通信  导出 em1：  export default xxx    em2： export const foo：String =  ‘bar’   em3：    export const foo：String =‘foo’     模块：导入   加载默认成员 em1：import xxx from ‘模块标识’   //按需加载模块成员    import {foo，bar} from ‘模块’  \n\np. 总结落下知识点 ： interface 接口   用来约束对象的  \n")])])]),r("h2",{attrs:{id:"_6-写todomvc案例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-写todomvc案例"}},[t._v("#")]),t._v(" 6. 写Todomvc案例")]),t._v(" "),r("ol",[r("li",[t._v("下载案列模板 todomvc-app-template"),r("br"),t._v("\ngit clone http://github.com/tastejs/todomvc-app-template.git")]),t._v(" "),r("li",[t._v("导入css   yarn add todomvc-common todomvc-app-css")])]),t._v(" "),r("p",[t._v("@import url('todomvc-common/base.css');\n@import url('todomvc-app-css/index.css');"),r("br"),t._v("\n导入全局报错  重启解决QAQ")]),t._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[t._v("循环写法")])]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("li "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"completed"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngFor"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"let todo of todos"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("    \n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ng"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("template "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ngIf"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"todos.length"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("       ng"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("template写法  ng命令写法\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("footer "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngIf"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"todos.length"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" 条件渲染 \n")])])]),r("ol",{attrs:{start:"4"}},[r("li",[t._v("引入表单双向绑定 到主模块 (app)")])]),t._v(" "),r("p",[t._v("import {FormsModule} from '@angular/forms';"),r("br"),t._v("\n在主模块中添加该\nimports: [\nBrowserModule,\nFormsModule\n],\n在input中的使用")]),t._v(" "),r("p",[t._v('<input name="check" class="toggle" type="checkbox" [(ngModel)]="todo.done">  代替了checked   (注意加name:"check" )')]),t._v(" "),r("p",[t._v("5.ngClass 决定是否启用class样式"),r("br"),t._v('\n<li [ngClass]="{completed:todo.done}" *ngFor="let todo of todos">')]),t._v(" "),r("p",[t._v("6.切换所有的任务项目\nevery()  数组方法 ，判断数组所有的元素是否满足条件 :"),r("br"),t._v("\n如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。")]),t._v(" "),r("ol",{attrs:{start:"7"}},[r("li")]),t._v(" "),r("p",[t._v("const {keyCode ,target} = e     等于 const keyCode = e.keyCode ; const target =e.target\nfilter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。")]),t._v(" "),r("h2",{attrs:{id:"_7-angular-路由-内置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-angular-路由-内置"}},[t._v("#")]),t._v(" 7. angular 路由 内置")]),t._v(" "),r("p",[t._v("按照惯例，有一个独立模块来配置相关路由，这个模块类的名字叫做AppRoutingModule,位于src/app下的app-routing.module.ts文件中。")]),t._v(" "),r("p",[t._v("使用CLI生成它。")]),t._v(" "),r("p",[t._v("//1.路由模块初始化")]),t._v(" "),r("p",[t._v("ng generate module app-routing --flat --module=app")]),t._v(" "),r("p",[t._v("//2.配置路由表    ，在app-routing.modules.ts文件中的配置")]),t._v(" "),r("p",[t._v("//4.\nimport {RouterModule,Routes} from '@angular/router'")]),t._v(" "),r("p",[t._v("//1.\nimport {SigninComponent} from './signin/signin.component'\nimport {SignupComponent} from './signup/signup.component'\n//2.\nconst routes : Routes = [\n{\npath:'signin',\ncomponent:SigninComponent\n},\n{\npath:'signup',\ncomponent:SignupComponent\n}\n]\n//3.\n@NgModule({\ndeclarations: [],\nimports: [\nCommonModule,\nRouterModule.forRoot(routes)\n]\n})")]),t._v(" "),r("h2",{attrs:{id:"标签导航-routerlink"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#标签导航-routerlink"}},[t._v("#")]),t._v(" 标签导航 routerLink")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a routerLink"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/signin"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Already have an account"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Login here"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),r("h2",{attrs:{id:"_7-contact案列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-contact案列"}},[t._v("#")]),t._v(" 7.contact案列")]),t._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("angular 的表单验证\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" input控件\n\n"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input type"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),t._v("\n        name"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类似于key的标识  ，必须加上")]),t._v("\n       id"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inputEmail"')]),t._v(" \n       "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"form-control"')]),t._v(" \n       placeholder"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Email address"')]),t._v(" \n       required  "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//验证不为空 ")]),t._v("\n       autofocus\n       "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ngModel"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"signupFrom.email"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//双向绑定的数据")]),t._v("\n       #email "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ngModel"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//模板引变量")]),t._v("\n       email"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//必须开启")]),t._v("\n         minlength"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"6"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//限制最短  ")]),t._v("\n        maxlength"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//限制最长")]),t._v("\n\n       "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input的css样式\n为email"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("className "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('" ng-pristine ng-valid ng-touched ng-invalid"')]),t._v(" 赋予不同的样式 \n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ng"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("valid"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("required"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ng"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("valid "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("required"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    border"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 5px solid #42A948"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ng"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("invalid"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("not")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("form")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    border"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("left"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 5px solid #a94442"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("C")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input下的错误提示框\n "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" 自己添加的验证规则 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngIf"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email_err_message"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alert alert-danger"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("email_err_message"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v(" ng自带的验证规则 "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngIf"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email.invalid && (email.dirty || email.touched)"')]),t._v("\n          "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alert alert-danger"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngIf"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email.errors.required"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          email is required\n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngIf"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email.errors.email"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          Invalid "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" email \n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        \n        \n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngIf"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email.errors.minlength"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          email must be at least "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" characters long"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ngIf"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email.errors.forbiddenName"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          email cannot be Bob"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),r("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("angular  路由跳转   \n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("组件中导入  \n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@angular/router'")]),t._v("   \n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("在构造函数中 ： \n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("http")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HttpClient "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("router")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Router\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("跳转到根目录\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("navigate")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),r("p",[t._v("E.路由守卫  （已创建路由文件app-routing）判断token 是否存在并使用")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("在根目录下创建一个auth-guard.services.ts  ,内容：（附件可下载）\n"),r("img",{attrs:{src:a(467),alt:"angular-01"}})])]),t._v(" "),r("li",[r("p",[t._v("在路由文件 routing中")])])]),t._v(" "),r("p",[t._v("1.导入\nimport { YourGuard } from '../auth-guard.services'（已上传附件）  ，并在需要使用改路由钩子函数的路由进行“canActivate”\n"),r("img",{attrs:{src:a(499),alt:"angular-01"}})]),t._v(" "),r("p",[t._v("2.导模板：\n@NgModule({\nimports: [RouterModule.forRoot(routes)],\nexports: [RouterModule] ,\nproviders: [YourGuard]\n})")]),t._v(" "),r("p",[t._v("F.angualr http拦截器Interceptor  设置 全局请求token")]),t._v(" "),r("p",[t._v("1.创建一个 global.interceptor.ts （已上传附件）文件\n2.内容参见  https://angular.cn/guide/http"),r("br"),t._v(" "),r("img",{attrs:{src:a(467),alt:"angular-01"}})]),t._v(" "),r("p",[t._v("3.导入app.modules.ts根模块中"),r("br"),t._v('\n++import { GlobalInterceptor} from "./global.interceptor"\n++import { HTTP_INTERCEPTORS} from "@angular/common/http"\n+providers: [\n{ provide: HTTP_INTERCEPTORS, useClass: GlobalInterceptor, multi: true },\n],')])])}),[],!1,null,null,null);s.default=n.exports}}]);