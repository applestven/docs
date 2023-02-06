console.log("script start") 

async function async1(){
    await async2() 
    let i = await async3() //返回promise 延迟执行 
    console.log(i) 
    console.log('async1 end')
}
async function async2(){
    console.log('async2 end')
}
async function async3(){
    console.log('async3 start') // 
    return new Promise((res,rej)=>{ // 
        setTimeout(()=>{  
            console.log('async3 end')
        },1000)
    })
}

async1()

setTimeout(function(){ 
    console.log('setTimeout') 
},0)

new Promise(res=>{
    console.log('promise') 
    // res(1)
}).then(res=>{ 
    console.log('prommise1')
}).then(function(){ 
    console.log('promise2')
})

// script start
// async2 end
// promise
// async3 start
// setTimeout

// 'async1 end
// async3 end