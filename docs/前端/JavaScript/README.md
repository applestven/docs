##  js继承总结
1 . 原型链继承 

  主要步骤 ： B.prototype = new A()

   优缺点 ： 继承了A的方法  ， 但属性共用 ， B无法更改  

2 . 构造函数继承 
 主要步骤  ：
 B funtion (){
    A.call(this,name,age)
}


优缺点 ： 继承了A的属性 ，但构造方法没有继承到  

3 .  组合继承  

主要步骤 ： 
 就是将原型链继承 构造函数继承（又叫call继承）  结合  

优缺点 ：完成了属性和方法的继承      比较消耗性能  ，  进行了两次A实例化    ， A.call   和   new A   

4 ， 寄生组合继承   

 主要步骤  ： 
 B funtion (){
    A.call(this,name,age)
}

B.prototype  =   Object.craete(A.prototype )  

优缺点 ： 完成了属性和方法的继承  ，  B.prototype._proto_ ==  A.prototype   比较推荐此方法