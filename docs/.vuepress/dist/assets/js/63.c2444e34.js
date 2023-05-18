(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{574:function(v,_,e){"use strict";e.r(_);var l=e(38),t=Object(l.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),e("p",[v._v("我们从 4 个角度对 webpack 和代码进行了优化：")]),v._v(" "),e("ol",[e("li",[v._v("提升开发体验")])]),v._v(" "),e("ul",[e("li",[v._v("使用 "),e("code",[v._v("Source Map")]),v._v(" 让开发或上线时代码报错能有更加准确的错误提示。")])]),v._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[v._v("提升 webpack 提升打包构建速度")])]),v._v(" "),e("ul",[e("li",[v._v("使用 "),e("code",[v._v("HotModuleReplacement")]),v._v(" 让开发时只重新编译打包更新变化了的代码，不变的代码使用缓存，从而使更新速度更快。")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("OneOf")]),v._v(" 让资源文件一旦被某个 loader 处理了，就不会继续遍历了，打包速度更快。")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("Include/Exclude")]),v._v(" 排除或只检测某些文件，处理的文件更少，速度更快。")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("Cache")]),v._v(" 对 eslint 和 babel 处理的结果进行缓存，让第二次打包速度更快。")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("Thead")]),v._v(" 多进程处理 eslint 和 babel 任务，速度更快。（需要注意的是，进程启动通信都有开销的，要在比较多代码处理时使用才有效果）")])]),v._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[v._v("减少代码体积")])]),v._v(" "),e("ul",[e("li",[v._v("使用 "),e("code",[v._v("Tree Shaking")]),v._v(" 剔除了没有使用的多余代码，让代码体积更小。")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("@babel/plugin-transform-runtime")]),v._v(" 插件对 babel 进行处理，让辅助代码从中引入，而不是每个文件都生成辅助代码，从而体积更小。")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("Image Minimizer")]),v._v(" 对项目中图片进行压缩，体积更小，请求速度更快。（需要注意的是，如果项目中图片都是在线链接，那么就不需要了。本地项目静态图片才需要进行压缩。）")])]),v._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[v._v("优化代码运行性能")])]),v._v(" "),e("ul",[e("li",[v._v("使用 "),e("code",[v._v("Code Split")]),v._v(" 对代码进行分割成多个 js 文件，从而使单个文件体积更小，并行加载 js 速度更快。并通过 import 动态导入语法进行按需加载，从而达到需要使用时才加载该资源，不用时不加载资源。")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("Preload / Prefetch")]),v._v(" 对代码进行提前加载，等未来需要使用时就能直接使用，从而用户体验更好。")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("Network Cache")]),v._v(" 能对输出资源文件进行更好的命名，将来好做缓存，从而用户体验更好。")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("Core-js")]),v._v(" 对 js 进行兼容性处理，让我们代码能运行在低版本浏览器。")]),v._v(" "),e("li",[v._v("使用 "),e("code",[v._v("PWA")]),v._v(" 能让代码离线也能访问，从而提升用户体验。")])])])}),[],!1,null,null,null);_.default=t.exports}}]);