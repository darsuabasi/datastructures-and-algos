
// 2^n time complexity
// top down


const fibonacci = (n) => {
  if (n < 2){
    return n
  }
  return fibonacci(n - 1) + fibonacci (n - 2)
}

// Basically our fib function will continue to recursively call 
// itself creating more and more branches of the tree until it hits 
// the base case, from which it will start summing up each branch’s 
// return values bottom up, until it finally sums them all up and returns an 
// integer equal to 5. It might take a moment to sink in, so take some time to 
// look at the tree and you will understand what’s happening there.




// bottom up
// linear time complexity 
const fibonacci = (n) => {
    // loop to add 2 numbers
    // assign our arr  to [0, 1] that we know for a fact will always be there
  let arr = [0, 1];

  for (let i = 2; i < n + 1; i++){
    arr.push(arr[i - 2] + arr[i -1])
  }
 return arr[n]
  
}