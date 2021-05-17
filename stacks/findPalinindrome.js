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

const findThePali = (string) => {
    
    var palinArr, i,
        palindrom = [],

    palinArr = string.split(/[\s!.?,;:'"-()]/ig);

    for (i = 0; i < palinArr.length; i++) {
        if (palinArr[i].toLowerCase() === palinArr[i].split('').reverse().join('').toLowerCase() &&
            palinArr[i] !== '') {
            palindrom.push(palinArr[i]);
        }
    }
        return palindrom.join(', ');
}

console.log(findThePali('There is a man, his name! was Bob and he was driving my racecar.'))