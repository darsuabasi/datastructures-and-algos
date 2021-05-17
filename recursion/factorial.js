// https://www.programiz.com/javascript/examples/factorial-recursion

// 3
const factorial = (n) => {
     if(n == 0) {
        return 1
    } else {
        return n * factorial(n - 1);
    }
    factorial(3)
        3 * f(2) = 6 
            2 * f(1) = 2
                1 * f(0) = 1 
                    1
}


// return 18