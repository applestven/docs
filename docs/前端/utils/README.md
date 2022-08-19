# 记录一些常使用的工具类 

## 防抖节流 
### 调用示例 
```js 
debounce(()=>{
	this.putCoin()
},5000,this)

data(){
    //  需在使用组件中声明
    timeout：false 
}
```
### 代码示例
``` js
// 点击延时执行 ,在一段时间内事件重复操作 , 刷新执行时间 , 执行时间到期执行
export function debounceS(func, delay,that) {
      let context = that // this指向发生变化，需要提出来
      let args = arguments
      return function () {
        if (context.timeout) {
          clearTimeout(context.timeout)
        }
        context.timeout = setTimeout(() => {
          func.apply(context, args)
        }, delay)
      }()
}
```
```js
// 点击立即执行 ， 在一段时间内点击不受理 ， 等待时间结束 ，重新受理事件()
export function debounce(func, delay, that) {
	let context = that // this指向发生变化，需要提出来
	let args = arguments
	return function() {
		if (!context.timeout) { // 立即执行
			func.apply(context, args)
			context.timeout = setTimeout(() => {
				context.timeout = null
			}, delay)
		} else {
			uni.showToast({
				title: `操作过于频繁,请${delay/1000}秒后重试`,
				icon: 'none'
			})
		}
	}() 
}
```