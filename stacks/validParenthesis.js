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

// Process: { -> [ -> ( -> ) -> ] -> () -> }


const isBalanced = (input) => {
  
  let stack = [];
  // let bank = {
  //   "(": ")",
  //   "{": "}", 
  //   "[": "]",
  // }

  for(let i = 0; i < input.length; i++ ) {
    let character = stack[stack .length - 1]

    if(input[i] === "(" || input[i] === "{" || input[i] === "[") {
      stack.push(input[i])
    } else if((character == "(" && input[i] == ")" || character == "{" && input[i] == "}" || character == "[" && input[i] == "]")) {
      stack.pop();
    } else return false 
  } 
  // if(stack.length !== 0) return false;
  return stack.length ? false : true 
}

// Input : {[]{()}}
// Output : Balanced = true

// Input : [{}{}(]
// Output : Unbalanced = false

// Input : [{}{}(])
// Output : Unbalanced = false

// Input: {[][[}
//  Output: Unbalanced = false 

// Input: {[()]}
// Output: Balanced = true

console.log(isBalanced("{[]{()}}")) // true
console.log(isBalanced("[{}{}(]")) // false 
console.log(isBalanced("[{}{}(])")) // false 
console.log(isBalanced("{[][[}")) // false 
console.log(isBalanced("{[()]}")) // true 