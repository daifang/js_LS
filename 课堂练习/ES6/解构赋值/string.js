let [a,b,c,d,e] = 'hello';
console.log(a,b,c,d,e);

let {toString:s} = 123;
console.log(s);

//实际操作
// let num = new Number(123);//{Number:123}
// let {toString:s} = num;
// console.log(s);

console.log(s == Number.prototype.toString);