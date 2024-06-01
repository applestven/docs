## css 

## 通过子元素选择父元素 :has()

``` html 
<ul>
    <li>
        <a href="#" class="active">1</a>
    </li>
    <li>
        <a href="#">2</a>
    </li>
</ul>
```

``` css 
li:has(> a.active){
    color:red;
}
```

    实际应用(kquan支付弹窗)： 
```css  
/deep/uni-view:has(> uni-view.uni-popup__wrapper){
	    border-radius: 16rpx 16rpx 0 0;
	}

```
## css背景裁剪

``` js 
background-clip：
     border-box ；背景被裁剪到边框盒。
     padding-box ；背景被裁剪到内边距框
     content-box ；    背景被裁剪到内容框。

background-size:
     80px 60px;
     90% ,90% ;
     cover;  失真   填充铺满  
     contain; 按比例完整显示 ， 不失真

//边框图片裁剪
backgroud-image-slice: 10px 10px 10px 10px;  （取上右下左 各10px的边框）
```

## tailwind 

官网 ： https://www.tailwindcss.cn/

官网介绍 ： 
只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。
本 CSS 框架本质上是一个工具集，包含了大量类似 flex、 pt-4、 text-center 以及 rotate-90 等工具类，可以组合使用并直接在 HTML 代码上实现任何 UI 设计。

使用扫盲：

速查：https://article.juejin.cn/post/7229619300804821029

