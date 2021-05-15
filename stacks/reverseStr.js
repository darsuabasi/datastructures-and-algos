// class Stack {

//     constructor() {
//         this.arr = [];
//     }

//     push(value) {
//         this.arr.push(value);
//     }

//     pop() {
//         return this.arr.pop();
//     }

//     peek() {
//         // Get Last Index based on length
//         const lastIndex = this.arr.length - 1;

//         // Return value
//         return this.arr[lastIndex];
//     }

//     isEmpty() {
//         // Check if array length is zero
//         return this.arr.length === 0;
//     }
// }

// loop through string and then push each character into the stack 
// then pop (which removes element from TOP of stack) each character 
//  which is then added to the new string 
const reverseStr = (str) => {
    let stack = [];
    let reverseString = '';

    for(let i = 0; i < str.length; i++) {
        if(str.length) {
            stack.push(str[i])
        }
    }
    while(stack.length > 0) {
        reverseString += stack.pop()
    }
    return reverseString
}

console.log(reverseStr("genesis"))
console.log(reverseStr("he1lo"))
console.log(reverseStr("MoNeY"))
console.log(reverseStr("new job"))
console.log(reverseStr(" "))
console.log(reverseStr("m is T e r0"))