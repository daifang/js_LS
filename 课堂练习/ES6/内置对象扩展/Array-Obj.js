//静态方法
// Array.from() 将类数组对象转化成数组

//console.log( Array.from('abcdefg'));

function fun(){
    console.log(Array.from(arguments));
}
//fun(1,2,3);

//Array.of() 将一组值整合成数组结构

//console.log(Array.of(1,2,3,'asd'));

//===========================================================================================================//

// 原型方法
// Array.copyWithin
let arr = [0,1,2,3,4,5,6,7,8];
//let brr = arr.copyWithin(2,0,3);//将0-3(不包含3)的元素复制到 2 位置（起始位置），改变原有数组
//console.log(brr);

//Array.find(callBack,this(指向)); 查找第一个符合条件的数组元素,并返回
// let el = arr.find(function(element){
//     return element > 3;
// });
// console.log(el);

//Array.findIndex(callBack,this(指向));查找第一个符合条件的数组元素，并返回索引值
let el1 = arr.findIndex(function(element){
    return element > 3;
});
//console.log(el1);

// Array.fill(value,start,end);//填充值,填充起始,填充结束位置,结束位置不包含
//arr.fill(0,0,3);
//console.log(arr);
/* 
    // keys();获取数组索引
    //values(); 获取到的数组元素值
    //可以使用  for ... of 进行遍历

*/
    // console.log(arr.keys());// 索引的集合
    // console.log(arr.values());// 元素值的集合


/**=============================================== Object +++++++=========================================== */

//简化写法
let username = 'lily';
let person = {
    username,
    show(){
        console.log(this.username);
    }
};
person.show();
console.log(person);
//如果希望属性名是个变量  可以用中括号括起来
let bar = 'obj';
let obj = {
    [bar]:'obj1'
}
//obj.bar = 'obj2';
console.log(obj);

// Object.assign();//  
//Object.is(value1,value2);//判断value1和value2是否相等
let target = {"username":"zhangsan"}
let source1 = {"age":"20"}
let source2 = {"sex":"man"}
console.log(Object.assign(target,source1,source2));

// Object  也有 values  和  keys  用  for ... of 遍历 







