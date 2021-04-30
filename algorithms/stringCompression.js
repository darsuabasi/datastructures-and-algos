
const stringCompression = (string) => {
	if(string.length == 0) {
	    console.log('Please enter valid string');
    }   

    let output = '';
    let count = 0;

    for(let i = 0; i < string.length; i++) {
        count++;
        if(string[ i ] != string[ i+1 ]) {
            output += string[ i ] + count;
            count = 0;
        }
    }
    return output;
}

console.log(stringCompression('aaadddniiippppaaqqq'))




const compressString = (string) => {

    let count = 0;
    let newString = '';

    for(let i = 0; i < string.length; i++) {
        count++;

        if(string[ i ] != string[i + 1]) {
            newString += string [ i ] + count 
            count = 0; 
        }
    }
    console.log(newString)
}
