let arr = [];
(function loop(index) {
    if (index >= 0) {//递归终止条件
        //模仿ajax请求
        setTimeout(() => { //一次回调完成才进行下一次回调
            arr.push(index * 1000);
            loop(--index);
        }, index * 1000);
    } else {
        console.log('递归方式结果：',arr);
    }
})(3);
// 使用递归 

