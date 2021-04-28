const findWords = (words) => {
    const row1 = new Set("qwertyuiop");
    const row2 = new Set("asdfghjkl");
    const row3 = new Set("zxcvbnm");

    const res = [];

    const canBeTyped = (word, row) => {
           for (const char of word) {
           if (!row.has(char.toLowerCase())) return false;
       }
       return true;
    }
    
    for (const word of words) {
        if (canBeTyped(word, row1) || canBeTyped(word, row2) || canBeTyped(word, row3)) res.push(word);
    }
    
    return res;
};


// const LETTER_TO_ROW = {
//     q: 0, w: 0, e: 0, r: 0, t: 0, y: 0, u: 0, i: 0, o: 0, p: 0,
//     a: 1, s: 1, d: 1, f: 1, g: 1, h: 1, j: 1, k: 1, l: 1,
//     z: 2, x: 2, c: 2, v: 2, b: 2, n: 2, m: 2
// };

// const findWordsTwo = (words) => {
//     return words.filter(word => {
//         let isSameRow = true;
//         let row = LETTER_TO_ROW[word[0].toLowerCase()];
//         for (let i = 1; i < word.length; i++) {
//             if (LETTER_TO_ROW[word[i].toLowerCase()] !== row) {
//                 isSameRow = false;
//                 break;
//             }
//         }
//         return isSameRow;
//     });
// };




// const findWordsThree = (words) => {
//     return words.filter(w => /^([qwertyuiop]+|[asdfghjkl]+|[zxcvbnm]+)$/i.test(w));
// };


console.log(findWords(["adsdf","sfd"]))
console.log(findWordsTwo(["Hello","Alaska","Dad","Peace"]))
console.log(findWordsThree(["Hello","Alaska","Dad","Peace"]))