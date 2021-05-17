// charAt() method returns the character from the specified index
// abstract = (an idea) data structure

const Stack = require('./Stack')


const reverseStr = (string) => {
    let stack = new Stack();

    let i = 0;
    let reversed = "";

    // add chars to stack 
    while(i !== string.length) {
        stack.push(string[i]);
        i++
    }

    // reversing string by popping from stack
    while(!stack.isEmpty()) {
        reversed += stack.pop();
    }
    return reversed
}

console.log(reverseStr("genesis"))
console.log(reverseStr("he1lo"))
console.log(reverseStr("MoNeY"))
console.log(reverseStr("new job"))
console.log(reverseStr(" "))
console.log(reverseStr("m is T e r0"))