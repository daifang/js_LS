//自定义
//去除  空格
Array.prototype.filterspace = function(){
    var arr = this;
    var result = arr.map(function(value){return value.trim();});
    return result;
}