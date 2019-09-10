//symbol  表示独一无二
let s = Symbol('s');
let s1 = Symbol('s');

console.log(s == s1);//false
//set  去重
let arr = new Set([1,1,2,3,4,5,6,6,7]);
console.log(arr);

let arr1 = new Set();
[0,0,1,2,,2,1,2,,5,,4,,,2].map(x => arr1.add(x));
console.log(arr1,arr1.has(0));
console.log(arr1.keys());
console.log(arr1.values());

