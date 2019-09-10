//对象解构，根据键名顺序匹配，将键值赋给对应位置变量

let {foo,bar} = {bar:'a',foo:'b'};
console.log(foo,bar);
// 如果均为键值对的形式，键名仅仅用来匹配，键值会赋给a1，b1
let {a:a1,b:b1} = {a:'a',b:'b'};
console.log(a1,b1);