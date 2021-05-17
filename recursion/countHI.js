// how to loop thru recursively 

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


const countHi = (str) => {
  if(str.length < 2) {
      return 0
  } else {
      if(str.endsWith("hi")) {
            let firstReturn =  1 + countHi(str.substring(0, str.length - 2));
            return firstReturn
        } else {
            let secondReturn = countHi(str.substring(0, str.length - 1));
            return secondReturn
        }
    }
}

const countHiTwo = (str) => {
    if(str.length < 2) {
        return 0
    } else if(str.substring(0, 2).includes("hi")) {
        return 1 + countHiTwo(str.substring(1))
    } else {
        return 0 + countHiTwo(str.substring(1))
    }
}



const countHiThree = (str) => {
    if(str.length < 2) {
        return 0;
    } else {
        if(str.slice(0,2) === "hi") {
            return 1 + countHiThree(str.slice(2))
        } else {
            return countHiThree(str.slice(1))
        }
    }
    return 0
}

// if(str[0] === "h" && str[1] === "i")





// check to see if [i] === hi
        // if it is, increase count 
        // then call funtion on the next [i]
        // countHiTwo()
// console.log(countHi("hellohimehi")) //2
// console.log(countHi("hell hio hi me hi")) //3
// console.log(countHi("hi hi hi hi mellow hi teahitea")) //6

// console.log(countHiTwo("hellohimehi")) //2
// console.log(countHiTwo("hell hio hi me hi")) //3
// console.log(countHiTwo("hi hi hi hi mellow hi teahitea")) //6

console.log(countHiThree("hellohimehi")) //2
console.log(countHiThree("hell hio hi me hi")) //3
console.log(countHiThree("hi hi hi hi mellow hi teahitea")) //6
