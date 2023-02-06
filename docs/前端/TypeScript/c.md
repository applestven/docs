## 2.接口 
 使用接口定义对象的类型  接口是对象的状态（属性）
``` js
interface Person{
 id :number ,
 name:string ,
 age:number,
 sex:string 
}
const person1:Person = {
    id:1 ,
    name:"张三",
    age:18,
    sex:"男"
}
//  可选属性  对可能存在的属性进行预定义  ?: 
interface Person{
     id :number ,
     name:string ,
     age?:number,
     sex?:string 
}
const person1:Person = {
    id:1 ,
    name:"张三",
}
// 只读属性 readonly
interface Person{
     readonly id :number ,
     readonly test ?:object ,
     name:string ,
     age?:number,
     sex?:string 
}
const person1:Person = {
    id:1 ,
    name:"张三",
    test:{},
}
person1.id = 22; // error
person1.test = {'a'}  
// readonly vs const  区别在前者当属性用（Object也不能改）   ， 后者当变量用 
```
## 函数类型 
 接口能够描述 JavaScript 中对象拥有的各种各样的外形。 除了描述带有属性的普通对象外，接口也可以描述函数类型
``` js
 interface SerchFunc{
     (source:string,subString:string):boolean
 }

 const mySearch :SerchFunc = function (source:string,sub:string):boolean{
     return source.search(sub) > -1 
 }
 console.log(mySearch('abcd','bc'),11)
 ```

## 接口在类中的实现  
``` js
interface Alarm{
    alert(): any;
}
interface Light {
    ligthOn() : void;
    ligthOff():void ;
}
class Car implements Alarm{
    alert() {
        console.log("car alert")
    }
}

// 一个类实现多个接口
class Car2 implements Alarm,Light{
    alert() {
        console.log('Car2 alert')
    }
    ligthOn(): void {
        console.log('car2 lightOn')
    }
    ligthOff(): void {
        console.log('car2 lightOff')
    }
}
```
## 接口继承接口  
和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里
``` js
interface LighttableAlarm extends Alarm,Light{
}
```