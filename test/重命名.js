const fs = require('fs')
fs.rename('./text.txt','./test.txt',(err)=>{
    console.log("@err",err)
})