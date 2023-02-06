
var num = (function add (){
    let a = 1 ;
    return function increment(){
        console.log(a)
        ++a
        
    }
})()
num();
num();
num();