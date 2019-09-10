var obj1 = {
    objName:'obj1',
    showName : function(){
        var that = this;
        setTimeout(function(){
            console.log(that.objName);
        },3000);
    }
}
console.log(obj1.showName());


var obj2 = {
    objName:'obj2',
    showName : function(){
        setTimeout(() => {
            console.log(this.objName);
        },3000);
    }
}
console.log(obj2.showName());
function fn(x,y = 2,z = 3){
    return x + y + z;
}
console.log(fn(1));
console.log(fn(1,3));
console.log(fn(1,3,4));
