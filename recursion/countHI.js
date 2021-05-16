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

console.log(countHi("hellohimehi")) //2
console.log(countHi("hell hio hi me hi")) //3
console.log(countHi("hi hi hi hi mellow hi teahitea")) //6