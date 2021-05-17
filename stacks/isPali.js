const Stack = require('./Stack')


// const isPali = (string) => { 
//     let stack = new Stack
//     let paliArray = string.split(/[\s!.?,;:'"-()]/ig);

//     for (i = 0; i < paliArray.length; i++) {
//         if (paliArray[i].toLowerCase() === paliArray[i].split('').reverse().join('').toLowerCase() &&
//             paliArray[i] !== '') {
//             stack.push(paliArray[i]);
//             return "The word `" + stack + "` is a palindrome!";
//         } else {
//             return paliArray + " is NOT a palindrome."
//         }
//     }
// }

const isPaliTwo = (string) => { 
    let stack = new Stack(); 
    let reversed = ""; //store the reversed word

    for(let i = 0; i < string.length; i++){
        stack.push(string[i]);
    }

    while(!stack.isEmpty()) {
        reversed += stack.pop()
    }

    if(reversed === string){
        return "The word `" + string + "` is a palindrome!";
    } else {
        return "`" + string + "` is NOT a palindrome.";
    }
}

// console.log(isPali('racecar')) //pali
// console.log(isPali('hello')) // not pali
// console.log(isPali('bob')) // pali
console.log(isPali('madam')) // pali
console.log(isPali('tumeric')) // not pali


console.log(isPaliTwo('madam')) // pali
console.log(isPaliTwo('tumeric')) // not pali