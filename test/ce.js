function Father(){
    this.a = "ss";
    tostring(){

    }
}
Father.prototype.say=function(){
    console.log("说,你好")
}
function Son(){

}
Son.prototype = new Father()
