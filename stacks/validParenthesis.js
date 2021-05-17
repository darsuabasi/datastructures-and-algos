const Stack = require('./Stack')

// Process: { -> [ -> ( -> ) -> ] -> () -> }


// Define a stack which is an array.

// Loop through each element in a given string.

// If the element is an opening bracket (‘(‘ or ‘{‘ or ‘[‘), push it onto the stack.

// If the element is a closing bracket (‘)‘ or ‘}‘ or ‘]‘), pop off the last 
// element from the stack only if matches with the encountered closing bracket and 
// keep iterating through the string. If the closing bracket does not match with 
// the opening bracket placed on top of the stack, break out of the loop and return 
// false because the parentheses in the string are not balanced.

// If the stack is empty after completely iterating over the string, return true 
// because the parentheses in the string are balanced and you have a valid string.

const isBalanced = (input) => {
  
  let stack = new Stack()
  let bank = {
    "(": ")",
    "{": "}", 
    "[": "]",
  }

  // Input : {[]{()}}

  for(let i = 0; i < input.length; i++ ) {

    let character = stack.peek()

    if(input[i] === "(" || input[i] === "{" || input[i] === "[") {
      stack.push(input[i])
    } else if((character == "(" && input[i] == ")" || character == "{" && input[i] == "}" || character == "[" && input[i] == "]")) {
      stack.pop();
    } else return false 
  } 
 
  return stack.isEmpty() ? true : false 
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