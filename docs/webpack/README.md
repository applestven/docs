# webpack的学习 
- 基础-高级-项目-原理

# 依赖环境

- Nodejs 16+

# 前置知识

- 对 `Nodejs` 各个核心模块操作有一定认识。
  - 比如：`fs`、`path`、`os` 等。

- 对 `React` 和 `Vue` 有一定认识，并且开发过项目。
  - 这对于学习项目部分内容非常有帮助。 

  # 适合群体

- `Webpack` 零基础，想从事项目脚手架研发的人。
- 具备 `Webpack` 开发经验，想要提升更多的人。
- 不是很了解 `Webpack`，但是想提升工资的人。

# 学习资料 
<!-- https://www.bilibili.com/video/BV14T4y1z7sw?spm_id_from=333.337.search-card.all.click -->
<!-- [哔哩哔哩](https://www.bilibili.com/video/BV14T4y1z7sw?spm_id_from=333.337.search-card.all.click) -->

## webpack 的 loader 和 plugin 的区别

什么是loader ？ 
loader是文件加载器 ，能够加载资源文件   并对这些文件进行编译 、 压缩 等 ， 最终打包到指定文件中  
什么是plugin ？ 
 在webpack的生命周期中会广播出一些事件  ， plugin 可以监听这些事件 ，在合适的时机通过webpack提供的api改变输出的结果  

区别 ： 
 对于loader  ，是一个转换器   ， 将A.scss 编译成B.css  这里操作的是文件 ，单纯文件转换

plugin是一个扩展器 ， 丰富webpack 本身  针对是loader结束后 ， webpack整个工作机制，并不操作文件 ，是基于事件机制工作 ， 会监听webpack打包过程中的某个节点进行 ， 执行广泛的任务