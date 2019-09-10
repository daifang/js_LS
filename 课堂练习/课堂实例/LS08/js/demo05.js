/**
 * Created by qile on 2017/8/14.
 */

function foo(){}
console.log(foo); //
console.log(typeof foo); //
console.log(foo instanceof Object); //
console.log(foo instanceof Function); //
console.log(foo === window.foo); //


console.log(typeof Function);// function
console.log(typeof Array);	 // 
console.log(typeof Date);	 // 
console.log(typeof Error); 	 // 
console.log(typeof Math);	 // 
console.log(typeof JSON);	 // 


//思考：
console.log(typeof new Function());// function or object
console.log(typeof new Array());	 // function or object
console.log(typeof new Date());	 // function or object

//补充思考：
console.log(Function instanceof Function);
console.log(Function instanceof Object);

console.log(Array instanceof Function);
console.log(Array instanceof Object);

console.log(Date instanceof Function);
console.log(Date instanceof Object);

console.log(Math instanceof Function);//Math不是函数是对象  false
console.log(Math instanceof Object);//Math 是对象  true

console.log(JSON instanceof Function);//
console.log(JSON instanceof Object);

