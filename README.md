# js_LS
## 前言  
### 感谢袁隆平爷爷让我能吃饱了写笔记和阮老师给的学习资料

## 缘由
### 最近学习的React使用了大量的ES6知识

## PS:仅收集最近使用的知识，不代表所有ES6知识

# 第二章(let | const)

# 块级作用域
ES5只有全局和函数作用域，使用起来不方便，计数的变量会泄露成全局变量，还有
# · let · const
## 与var进行对比
命令|特点
-|-
let|作用域为块级，可以代替IIFE，不存在变量提升，暂时性死区(不能在声明前使用)，不可重复声明
const|常量，只读，声明必须初始化，不得二次赋值


```
//ES5-var
var arr = [];
for(var i = 1;i < 100;i++){
    arr[i] = function(){console.log(i);}
}
arr[10]();//100
//IIFE写法
var arr = [];
for(var i = 1;i < 100;i++){
    (function(i){
        arr[i] = function(){console.log(i);}
    })(i)
}
arr[10]();//10

//let 写法
var arr = [];
for(let i = 1;i < 100;i++){
    arr[i] = function(){console.log(i);}
}
arr[10]();//10

```
# do
### 由于块级作用域内部变量无法被访问，所以do来了

```
//无法访问
{
    let t = f();
    t++;
}

//do
let t = do{
    let t = f();
    t++;
}
//do 大概是还未正式发布
```
# ES6
#### ES6之后，全局变量将和顶层对象属性隔离，也就是使用let，class，const声明的变量将不能在window或global中访问

# ES6声明方式总结

* ## window.a 等同于 var
* ## 函数 function
* ## 模块引入 import
* ## 类 class
***
# 变量的结构赋值
### 允许设置默认值
## 数组
```
let [a,b,c] = [1,2,3];

let [a,[b,c]] = [1,[2,3]];

let [a,b,c] = [1,2];
//c === undefined  true

let [a,b,c] = 1;
//error

let [a,b,c = 0] = [1,2];//设置默认值
// c === 0  true

let [a,b,c = 0] = [1,2,undefined];//设置默认值
// c === 0  true

let [a,b,c = 0] = [1,2,null];//设置默认值
// c === 0  false
//c === null true
```

## 对象

```
let {foo,bar} = {foo:"a",bar:"b"};
// foo-->a       bar-->b
//必须名称一样才能赋值成功
//如果名称不同，使用以下写法
//被赋值的是后者而不是前者
let {foo:bar} = {foo:"a",bar:"b"};
//bar --> b
```
### 对象的解构可以理解成前者是索引搜索，然后将值赋给后者，并可以直接访问
## 字符串

```
    let [a,b,c] = 'abc';
    //a-->a
    //b-->b
    //c-->c

    //属性解构
    let {length:len} = 'hello';
    //len->5
```
## 解构的用途

* 交换变量值
```
let x = 1,y = 2;
[x,y] = [y,x];
```
*提取JSON
```
 let data = {name:"dtf",age:20,sex:"man",number:[1,2,3]};

 let {name,age,sex,number:arr} = data;

 //name-->"dtf"
 //age-->20
 //sex-->"man"
 //arr-->[1,2,3]
```

# function-函数

* ## length属性
   * 代表没有设置默认值的参数个数
   * 设置了默认值的参数后的参数不再计数
   * 不包含rest
* ## rest参数
   * 获取函数的多余参数，替代了argument
   * argument : 获取所有实参
* ## name
   * 返回函数名

* ## ()=>{}
   * (x,y)=>{return x+y;}
   * this不会指向运行时的作用域，而是定义的作用域
# Symbol

## 独一无二的值
## 类似于字符串
```
let t = Symbol();
//t-->"Symbol()"
//t是独一无二的，即使声明一个字符串"Symbol()"
```

# Promise

* ## 特点
    * 状态不受外界干扰
    * Pending(进行中)、Fulfilled(已成功)、Rejected(已失败)
    * 一旦状态改变就不会再改变 ( 也就是承诺 )
* 基本用法
```
    var promise = new Promise(function(resolve,reject){
        //code  操作

        if(/*成功*/){
            resolve(value);
        }else{
            reject(error);
        }
    })
```
*   * resolve : 将状态改变为 成功(Pending-->Resolved)，并将异步操作的结果作为参数传递出去
    * reject : 将状态改变为 失败 (Pending-->Rejected),异步操作失败调用,将error信息传递出去

    * Promise实例化后可以使用then指定resolve和reject的函数操作
```
    promise.then(function(value){
        //success

    },function(error){
        console.log(error);
    })
```

*   * Promise 实例化后会立即执行

# Class

* 类似于JAVA的Class
* 私有属性

    * 前面加一个 #，如(目前好像还不能用))
        ```
            class Person{
                #name
                function getName(){
                    return this.#name;
                }
            }
        ```
    *