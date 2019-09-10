function move({x,y} = {x:0,y:0}){
    return [x,y];
}
/*
    函数参数的对象解构赋值
    适用于函数参数较多，结构较复杂的情况
*/
// console.log(move({y:1,x:2}));//[2,1]
// console.log({});//[undefined,undefined]
// console.log(move());//[0,0]

let [x,y] = [1,2];
[y,x] = [x,y];
console.log(x,y);