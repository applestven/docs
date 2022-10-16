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
