(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{565:function(s,t,a){"use strict";a.r(t);var n=a(38),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),a("p",[a("strong",[a("code",[s._v("Webpack")]),s._v(" 是一个静态资源打包工具。")])]),s._v(" "),a("p",[s._v("它会以一个或多个文件作为打包的入口，将我们整个项目所有文件编译组合成一个或多个文件输出出去。")]),s._v(" "),a("p",[s._v("输出的文件就是编译好的文件，就可以在浏览器段运行了。")]),s._v(" "),a("p",[s._v("我们将 "),a("code",[s._v("Webpack")]),s._v(" 输出的文件叫做 "),a("code",[s._v("bundle")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"功能介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[s._v("#")]),s._v(" 功能介绍")]),s._v(" "),a("p",[s._v("Webpack 本身功能是有限的:")]),s._v(" "),a("ul",[a("li",[s._v("开发模式：仅能编译 JS 中的 "),a("code",[s._v("ES Module")]),s._v(" 语法")]),s._v(" "),a("li",[s._v("生产模式：能编译 JS 中的 "),a("code",[s._v("ES Module")]),s._v(" 语法，还能压缩 JS 代码")])]),s._v(" "),a("h2",{attrs:{id:"开始使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[s._v("#")]),s._v(" 开始使用")]),s._v(" "),a("h3",{attrs:{id:"_1-资源目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-资源目录"}},[s._v("#")]),s._v(" 1. 资源目录")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("webpack_code # 项目根目录（所有指令必须在这个目录运行）\n    └── src # 项目源码目录\n        ├── js # js文件目录\n        │   ├── count.js\n        │   └── sum.js\n        └── main.js # 项目主文件\n")])])]),a("h3",{attrs:{id:"_2-创建文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建文件"}},[s._v("#")]),s._v(" 2. 创建文件")]),s._v(" "),a("ul",[a("li",[s._v("count.js")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("sum.js")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("main.js")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" count "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./js/count"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sum "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./js/sum"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_3-下载依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-下载依赖"}},[s._v("#")]),s._v(" 3. 下载依赖")]),s._v(" "),a("p",[s._v("打开终端，来到项目根目录。运行以下指令：")]),s._v(" "),a("ul",[a("li",[s._v("初始化"),a("code",[s._v("package.json")])])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm init -y\n")])])]),a("p",[s._v("此时会生成一个基础的 "),a("code",[s._v("package.json")]),s._v(" 文件。")]),s._v(" "),a("p",[a("strong",[s._v("需要注意的是 "),a("code",[s._v("package.json")]),s._v(" 中 "),a("code",[s._v("name")]),s._v(" 字段不能叫做 "),a("code",[s._v("webpack")]),s._v(", 否则下一步会报错")])]),s._v(" "),a("ul",[a("li",[s._v("下载依赖")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm i webpack webpack-cli -D\n")])])]),a("h3",{attrs:{id:"_4-启用-webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-启用-webpack"}},[s._v("#")]),s._v(" 4. 启用 Webpack")]),s._v(" "),a("ul",[a("li",[s._v("开发模式")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npx webpack ./src/main.js --mode=development\n")])])]),a("ul",[a("li",[s._v("生产模式")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npx webpack ./src/main.js --mode=production\n")])])]),a("p",[a("code",[s._v("npx webpack")]),s._v(": 是用来运行本地安装 "),a("code",[s._v("Webpack")]),s._v(" 包的。")]),s._v(" "),a("p",[a("code",[s._v("./src/main.js")]),s._v(": 指定 "),a("code",[s._v("Webpack")]),s._v(" 从 "),a("code",[s._v("main.js")]),s._v(" 文件开始打包，不但会打包 "),a("code",[s._v("main.js")]),s._v("，还会将其依赖也一起打包进来。")]),s._v(" "),a("p",[a("code",[s._v("--mode=xxx")]),s._v("：指定模式（环境）。")]),s._v(" "),a("h3",{attrs:{id:"_5-观察输出文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-观察输出文件"}},[s._v("#")]),s._v(" 5. 观察输出文件")]),s._v(" "),a("p",[s._v("默认 "),a("code",[s._v("Webpack")]),s._v(" 会将文件打包输出到 "),a("code",[s._v("dist")]),s._v(" 目录下，我们查看 "),a("code",[s._v("dist")]),s._v(" 目录下文件情况就好了")]),s._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),a("p",[a("code",[s._v("Webpack")]),s._v(" 本身功能比较少，只能处理 "),a("code",[s._v("js")]),s._v(" 资源，一旦遇到 "),a("code",[s._v("css")]),s._v(" 等其他资源就会报错。")]),s._v(" "),a("p",[s._v("所以我们学习 "),a("code",[s._v("Webpack")]),s._v("，就是主要学习如何处理其他资源。")])])}),[],!1,null,null,null);t.default=e.exports}}]);