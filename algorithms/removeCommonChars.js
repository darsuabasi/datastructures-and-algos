// Common Elements of Two Arrays

// Given a string S of lowercase letters, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.
// We repeatedly make duplicate removals on S until we no longer can.
// Return the final string after all such duplicate removals have been made. It is guaranteed the answer is unique.

// Example 1:
// Input: “abbaca”
// Output: “ca”

const removeDuplicates = str => {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (result.length > 0 && result[result.length - 1] == str[i]) {
            result.pop()
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
};

console.log(removeDuplicates('abbajdslssjjjca'))