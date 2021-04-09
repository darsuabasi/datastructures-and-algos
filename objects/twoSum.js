// if developing for something embedded (think chip), you may value space more than time 
// cpus have more space these days so the vlaue will usually lie in time complexity ==> use space to gain time 

// 


// Brute Force 
// time complexity is quadratic
// space complexity will be constant bc only pushing once which is when you've reached target 
// const twoSum = (nums, target) => {
//     let newArr = []; ----> not needed 
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[i] + nums[j] === target) { (constant time to grab el of arr by its index)
//                 newArr.push(i,j) ----> not needed (push is constant time bc size of arr doesnt matter)
//                  return [i, j]
//             }
//         }
//     }
//     return newArr ----> not needed
// };

// nums = [3, 3, 9]
// target = 6
// n = 3

// arr[6-3]

// nums = [2,7,11,1,15]
// target = 8
// n = 1
// obj[] !== undefined

// n is variable for input size 

// o(1) ----> constant (not dependant on anything [input size])
// o(log n) ----> logarithmic (binary search)
// o(n) -----> linear
// o((n log n) ---> efficient sort ---> merge sort 
// o(n^2) quadratic --> bubble sort

// time complexity = linear 
// space complexity = linear
// space complexity is growing because obj is growing // adding things to obj => obj[n] = i; 
const twoSum = (nums, target) => {
    let obj = {};
    for(let i = 0; i < nums.length; i++) {
        const n = nums[i];

        // getting an element from an obj by its key + getting an element from an arr ==== constant time
        if(obj[target - n] !== undefined) {
            return [obj[target-n], i]
        }
        obj[n] = i;
    }
    return [];
}

// HashMap
// const twoSum = (nums, target) => {
//     let obj = {};
//     for(let i = 0; i < nums.length; i++) {
//         const n = nums[i];

//         if(nums[target - n] !== undefined) {
//             return [obj[target-n], i]
//         }
//         obj[n] = i;
//     }
//     return [];
// }

console.log(twoSum([3, 3], 6))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,7,11,1,15], 8))



