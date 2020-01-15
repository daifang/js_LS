//栈
 
let  Stack =  ()=>{
    //栈的属性
    this.items = [];
    
    //入栈
    Stack.prototype.push = (element)=>{
        this.items.push(element);
    }
    //出栈
    Stack.prototype.pop = (element)=>{
        return this.items.pop(element);
    }
    //查看栈顶元素
    Stack.prototype.peek = ()=>{
        return this.items[this.items.length-1];
    }
    //判断是否为空
    Stack.prototype.isEmpty = ()=>{
        return this.items.length === 0;
    }
    //toString
    Stack.prototype.toString = ()=>{
        let str = '';
        this.items.map(item=>{
            str += item + ' ';
        });
        return str;
    }
}

let stack = new Stack();

//入栈

stack.push();

stack.pop();