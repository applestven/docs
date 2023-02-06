// class 继承  主要是 extends  super 关键字

class Person{
    constructor(name){
        this.name = name 
    }
    eat(){
        console.log("可以吃饭")
    }
}

class Father extends Person{
    constructor(name){
        super(name)
        this.age = 45
        super.eat
    }
    givMoney(){
        console.log("父亲给儿子钱")
    }
}

class Son extends Person{
    constructor(name){
        super(name)
        this.age = 15
        super.eat
    }
    eat(){ // 重写继承的方法 
        console.log("可以吃饭 ，还可以喝水")
    }
    getMoney(){
        console.log("儿子问父亲要钱")
    }
}

let father = new Father("父亲张三")
let son = new Son("儿子李四")

// console.log(son.getMoney())
// console.log(son.age) 
// console.log(son.eat()) 
console.log(father.eat())