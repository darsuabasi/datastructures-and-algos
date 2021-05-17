const removeDuplicates = (str) => {
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