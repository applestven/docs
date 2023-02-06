## 6. 其他  

 声明文件 
    参考资料:http://ts.xcatliu.com/basics/declaration-files
- 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能
- 声明文件必需以 .d.ts 为后缀。
- 假如仍然无法解析，那么可以检查下 tsconfig.json 中的 files、include 和 exclude 配置，确保其包含了 jQuery.d.ts 文件
- declare var jQuery: (selector: string) => any;
- 很多的第三方库都定义了对应的声明文件库, 库文件名一般为 @types/xxx, 可以在 https://www.npmjs.com/package/package 进行搜索
- 有的第三库在下载时就会自动下载对应的声明文件库(比如: webpack),有的可能需要单独下载(比如jQuery/react)

- 内置对象 JavaScript 中有很多内置对象，它们可以直接在 TypeScript 中当做定义好了的类型。 
- 内置对象是指根据标准在全局作用域（Global）上存在的对象。这里的标准是指 ECMAScript 和其他环境（比如 DOM）的标准。

```js
// ECMAScript 的内置对象 
// Boolean
// Number
// String
// Date
// RegExp
// Error 
/* 1. ECMAScript 的内置对象 */
let b: Boolean = new Boolean(1)
let n: Number = new Number(true)
let s: String = new String('abc')
let d: Date = new Date()
let r: RegExp = /^1/
let e: Error = new Error('error message')
b = true

// BOM 和 DOM 的内置对象 
// Window
// Document
// HTMLElement
// DocumentFragment
// Event
// NodeList
const div: HTMLElement = document.getElementById('test')
const divs: NodeList = document.querySelectorAll('div')
document.addEventListener('click', (event: MouseEvent) => {
  console.dir(event.target)
})
const fragment: DocumentFragment = document.createDocumentFragment()
```