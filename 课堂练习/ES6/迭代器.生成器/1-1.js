// 为了给各种数据结构提供一个统一的遍历接口

function iterator(arr){
    var i = 0;
    return {
        next:function(){
            i < arr.length ? {"value":arr[i++],'done':false} : {"value":undefined,'done':true}
        }
    }
}
// var arr = iterator([1,2,3]);
// console.log(iterator(arr).next());

//ES6 封装的遍历器  for  of


let str = 'hello';
let arr1 = [0,1,2,3];
//let m1 = new Map({name:'zhangsan',age:'20'});
let s1 = new Set([1,12,1,1,3]);

for (var i of str){
    //console.log(i);
}
//一般的 object 无法使用遍历器
//
let arr2 = [0,1,2,3];
//console.log(arr2[Symbol.iterator]);//判断有无 遍历器

// if(Symbol.iterator){
//     for(var  i  of  obj){
//         console.log(i);
//     }
// }


//生成器
function* myGenerator(){
    yield "hello";
    yield "world";
    return "ending";
}

var iterator1 = myGenerator();
// console.log(iterator1.next());

//

let obj = {};
obj[Symbol.iterator] = function*(){
    yield {name : "zhagsan"};
    yield {age : "20"};
    return;
}
// for(var i of obj){
//     console.log(i);
// }
// console.log([...obj]);

// Promise

// setTimeout(function(){
//     console.log("world");
// },2000);
// console.log("hello");

// 异步 转 同步
// resolve  是异步成功时候的标志
// reject   是异步失败的标志

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('hello');
        //resolve();//异步结束标志
        reject();
    },2000);//函数一 resolve  函数二  reject
}).then(
    function(){
        console.log('success');
    },function(){
        console.log('fail'+val);
    }).catch(
        function(e){
            console.log(e);
        }).finally(function(){
            console.log('最终')
        });

        