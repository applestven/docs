## 5. 泛型  
- 指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。
``` js
// 引入 不用泛型的话，这个函数可能是下面这样：
function createArray(value :any ,count :number):any[]{
    const arr: any[] = []
    for(let index = 0 ;index <count ; index++){
        arr.push(value)
    }
    return arr
}
const arr1 = createArray(11,3)
const arr2 = createArray('aa',3)
console.log(arr1[0].toFixed() ,arr2[0].split(''))
```
## 使用函数泛型 
``` js
function createArray2<T>(value :T ,count:number){
    const arr: Array<T> = []
    for(let index = 0 ; index <count ; index++){
        arr.push(value)
    }
    return arr
}
const arr3 = createArray2<number>(11,3)
console.log(arr3[0].toFixed())
// console.log(arr3[0].split('')) // error
const arr4 = createArray2<string>('aa',3)
console.log(arr4[0].split(''))
// console.log(arr4[0].toFixed()) // error
```
## 多个泛型参数的函数 
``` js
function swap<K,V>(a:K , b:V):[K,V]{
    return [a,b]
}
const result = swap <string ,number>('abc',123)
console.log(result[0].length ,result[1].toFixed())
```
## 泛型接口 
 在定义接口时 ， 为接口中的属性或方法定义泛型类型 
 在使用接口时 ， 再指定具体的泛型类型 
 ``` js
interface IbaseCRUD<T>{
    data:T[]
    add:(t: T)=> void 
    getById: (id: number)=> T
}

class User {
    id?:number ; //id 
    name:string ; 
    age:number ;

    constructor (name ,age){
        this.name = name 
        this.age = age 
    }
}
class UserCRUD implements IbaseCRUD <User> {
    data :User[] = []
    add(user :User): void{
        user = {...user , id:Date.now()}
        this.data.push(user)
        console.log('保存user',user.id)
    }
    getById (id: number):User {
        return this.data.find(item => item.id===id)
    }
}
```
## 泛型类 
 在定义类时 ，为类中的属性或方法定义泛型类型
在创建类的实例时 , 再指定特定的泛型类型 
``` js
class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
  }
  let myGenericNumber = new GenericNumber<number>()
  myGenericNumber.zeroValue = 0
  myGenericNumber.add = function(x, y) {
    return x + y 
  }
  let myGenericString = new GenericNumber<string>()
  myGenericString.zeroValue = 'abc'
  myGenericString.add = function(x, y) { 
    return x + y
  }
  console.log(myGenericString.add(myGenericString.zeroValue, 'test'))
  console.log(myGenericNumber.add(myGenericNumber.zeroValue, 12))
```
## 泛型约束 
 如果我们直接对一个泛型参数取 length 属性, 会报错, 因为这个泛型根本就不知道它有这个属性
我们可以使用泛型约束来实现 
``` js
interface Lengthwise {
    length: number;
}
function fn2 <T extends Lengthwise>(x: T): void {
    console.log(x.length)
}
// fn2('abc')
// fn2(123) // error number没有length属性
```
