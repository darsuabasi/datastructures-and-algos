// write recursive function that returns whether a is included in str/input
// boolean -- true/false 

// checking for the letter "a"// account for both lower+capital

// str will only take in alphabets

// input: lnmalp
// output: true

// input: lnmlp
// output: false

// input: 
// output: false 

// input: helloWorldAll
// output: true

// this must be done recursively 

// let base = false // if a--> true 

// input: 
// output: true

const recursiveA = (string) => {
  if(string.length) {
    if(string[0] === "a" || string[0] === "A") {
      return true
    } else {
      return recursiveA(string.substr(1))
    }
  } else if(!string.length) {
    return false 
  }
}

function checkForA(str) {
    if (str === null || str.length === 0) {    /* basecase*/
        return false;
    }
    if(str[0].toLowerCase() === 'a') {
        return true
    }
    return checkForA(str.substr(1));
}


// component 1: basecase ---> when function stops or you have answer to problem
// conponent 2: recursive step ----> when funciton calls itself 
// component 3: inductive step ----> means of progression towards basecase
const checkForA2 = (string, i) => {
    if(!string) {
        return false
    } 
    if(string[i] === undefined /*|| i >= string.length*/) {
        return false
    }
    if(string[i].toLowerCase() === "a") {
        return true
    }
    return checkForA2(string, i + 1)
    
}

console.log(checkForA2("trlck", 0))


// console.log(recursiveA(""))


// look into bubbling within recursion


// substr(1)

// input = "lnmalp"

// 1st recursion = 1st = l, substr(1) = "nmalp"

// recursiveA(string.substr(1))


