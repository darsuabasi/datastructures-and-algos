// find common characters
// Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

// Example 1:
// Input: [“bella”,“label”,“roller”]
// Output: [“e”,“l”,“l”]


// countCharacters + findCommonCharacters = quadratic time complexity because its looping twice

// linear time complexity because you have to go thru the arrs 
const countCharacters = (str) => {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        // if that letter is there, increase the count
        if (obj[str[i]]) {
            obj[str[i]]++
            // else start that letter's count a 1
        } else {
            obj[str[i]] = 1
        }
    }
    // return the object counter 
    return obj
}


// {b: 1
// e: 1
// l: 2
// a: 1
// }

// compares first string to next string; [positions of strings change]
const findCommonCharacters =(str1, str2)=> {
    let commonLetters = ''
    // call on our countCharacters function to be ran on the strings we're taking in 
    let obj1 = countCharacters(str1)
    let obj2 = countCharacters(str2);
    // looping/keying into obj1 
    for (let key in obj1) {
        // as we "loop" thru obj1, if there is a key @ obj2
        // check to see if the key @ obj1 is less than or equal to the key @ obj2 
        // if so, check to see if key @ obj1 is greater than 0
        // if greater than 0, increase key value in commonLetters and decrease key @ obj1
        if (obj2[key]) {
            if (obj1[key] <= obj2[key]) {
                while (obj1[key] > 0) {
                    commonLetters += key
                    obj1[key]--
                }
            } else {
                // else if key @ obj1 is greater than key @ obj2
                // check to see if key @ obj2 is greater than 0
                // if it is, increase commonChars key's value and decrement key @ obj2
                while (obj2[key] > 0) {
                    commonLetters += key
                    obj2[key]--
                }
            }
        }
    }
    // return the new string 
    return commonLetters
}


const commonChars = (A) => {
    // run findCommonCharacters function on string we're taking in
    let chars = findCommonCharacters(A[0], A[0]);

    // loop through input string 
    for(let i = 1; i < A.length; i++){
        // for every index, run findCommonCharacters 
        chars = findCommonCharacters(chars, A[i])
    }
    // add '' to each char
    return chars.split('')
};



// ----------------------------------------------------------------------------------------------------------------

// time O(n^2) ----> quadratic 
// space O(n) -----> linear

const commonCharsTwo = (A) => {
    const result = []
    const firstWordArr = [...A[0]]
    
    for(const key of firstWordArr) {
        if(A.every(word => word.includes(key))) {
            result.push(key)
            A = A.map(word => word.replace(key, ''))
        }
    }    
    return result
};


const commonCharsThree = (A) => {
    let arr = [];
    A.sort((a,b) => a.length > b.length ? 1 : -1);
    
    here:
    for (let i = 0; i < A[0].length; i++) {
      const currReg = new RegExp(`${A[0][i]}`);
  
      for (let j = 1; j < A.length; j++) {
        const currEl = A[j].replace(currReg, "");
        if (A[j].length === currEl.length) {
          continue here;
        }
        A[j] = currEl;
      }
      
      arr.push(A[0][i]);
    }
    return arr;
};




const commonCharsFour = (A) => {
    let tracker = [];
    for (let word = 0; word < A.length; word++){
        tracker[word] = [];
        for (let ltr = 0; ltr < 26; ltr++)
            tracker[word][ltr] = 0;
        //update tracker    
        for (let ltr = 0; ltr < A[word].length; ltr++)
            tracker[word][A[word].charCodeAt(ltr) - 97]++;
    }
    
    let measure = [];
    //measure tracker vertically for entries
    for (let ltr = 0; ltr < 26; ltr++){
        let leastNumLtrs = undefined;
        let word = 0;
        while (word < A.length){
            if (tracker[word][ltr] === 0) break;
            if(leastNumLtrs === undefined) leastNumLtrs = tracker[word][ltr];
            else if (tracker[word][ltr] < leastNumLtrs) leastNumLtrs = tracker[word][ltr];
            word++;
        }
        measure[ltr] = (word === A.length) ? leastNumLtrs : 0;
    }
    let result = []
    for(let i = 0; i < measure.length; i++)
        if(measure[i] > 0)
            for (let x = 0; x < measure[i]; x++)
                result.push(String.fromCharCode(i + 97))
    return result;
};


console.log(commonChars(['bella','label','roller']))
console.log(commonCharsTwo(['bella','label','roller']))
console.log(commonCharsThree(['bella','label','roller']))
console.log(commonCharsFour(['bella','label','roller', 'llp']))

