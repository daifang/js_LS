// 进行两侧模式匹配 然后对应位置上的变量赋值

let [x,y,z] = [2,1,3];
let [,,third] = ['bar','foo','baz'];
//console.log(third);
//console.log(x,y,z);
//
let [head,...tail] = [1,2,3,4];//...tail 是把剩余的 变成数组进行赋值
//console.log(tail);

