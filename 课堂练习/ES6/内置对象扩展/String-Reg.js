//字符串遍历 (for...of),速度比for循环要快
let str = 'hello world';
for(let i of str){
    //console.log(i);
}
let arr = ['hello','world'];
for(let i of arr){
    //console.log(i);
}
//查找 判断 生成字符串
let str1 = 'hello world';
str.repeat(3);//重复字符串 3 次
//console.log(str.repeat(3));

//=========================================REG================================================//

let reg1 = /xyz/gi;
let reg2 = new RegExp(/xyz/gi);
let reg3 = new RegExp('xyz','gi');
let reg4 = new RegExp(/xyz/gi,'i');

/*
    flags 获取正则对象的修饰符
    exec  
*/
console.log(reg1.flags);
let str2 = 'aaa_aa_a';
let reg5 = /a+/gi;//+表示 出现一次或多次
let reg6 = /a+/y;
console.log(reg5.exec(str2));
console.log(reg5.lastIndex);
console.log(reg5.exec(str2));
console.log(reg5.lastIndex);
console.log(reg6.exec(str2));
console.log(reg6.lastIndex);
console.log(reg6.exec(str2));
console.log(reg5.sticky);
console.log(reg6.sticky);

