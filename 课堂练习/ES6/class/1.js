function Point(x,y){
    this.x = x;
    this.y = y;
}
Point.prototype.show = function(){
    console.log(this.x);
}
let p1 = new Point(1,2);


//ES6写法

class Point1{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    show(){
        console.log(this.x);
    }
}
let ES6p1 = new Point1(1,2);

//通过static进行的定义静态方法内部this指向类本身
class Person{
    //静态
    static walk(){
        console.log(this);
    }
    //
    say(){
        console.log(this);
    }
}
//静态方法只能通过类调用
let p2 = new Person();

// p2.say();
// Person.walk();

//继承
//ES5
let obj1 = {x:1};
let obj2 = Object.create(obj1);
let obj3 ={}
obj3.__proto__=obj1;


//

function PointChild(x,y,z){
    Point.call(this,x,y);
    this.z = z;
}

// ES6继承
//super 可以在子类的实例方法中，可以指向父类的原型对象
class Parent{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    show(){
        console.log(this.x);
        return 0;
    }
}

class Child extends Parent{
    constructor(x,y,z){
        super(x,y);
        this.z = z;
    }
    show(){super.show();}
}

let c = new Child(1,2,3);
console.log('c:'+ c.show());

