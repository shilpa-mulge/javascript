// program to implement stack data structure
class Stack {
    constructor() {
        this.st = [];
    }
    
    // add element to the stack
    add(element) {
        return this.st.push(element);
    }
    
    // remove element from the stack
    remove() {
        if(this.st.length > 0) {
            return this.st.pop();
        }
    }
    
    // view the last element
    peek() {
        return this.st[this.st.length - 1];
    }
    
    // check if the stack is empty
    isEmpty(){
       return this.st.length == 0;
    }
   
    // the size of the stack
    size(){
        return this.st.length;
    }
 
    // empty the stack
    clear(){
        this.st = [];
    }
}

let stack = new Stack();
stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);
console.log(stack.st);

stack.remove();
console.log(stack.st);

console.log(stack.peek());

console.log(stack.isEmpty());

console.log(stack.size());

stack.clear();
console.log(stack.st);