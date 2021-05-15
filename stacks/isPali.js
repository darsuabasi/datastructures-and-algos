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


const isPali = (string) => { 
    let stack = []
    let paliArray = string.split(/[\s!.?,;:'"-()]/ig);

    for (i = 0; i < paliArray.length; i++) {
        if (paliArray[i].toLowerCase() === paliArray[i].split('').reverse().join('').toLowerCase() &&
            paliArray[i] !== '') {
            stack.push(paliArray[i]);
            return "The word `" + stack + "` is a palindrome!";
        } else {
            return paliArray + " is NOT a palindrome."
        }
    }
}

const isPaliTwo = (string) => { 
    let letters = []; 
    let reversed = ""; //store the reversed word

    for(let i = 0; i < string.length; i++){
        letters.push(string[i]);
    }

    for(let i = 0; i < string.length; i++){
        reversed += letters.pop();
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