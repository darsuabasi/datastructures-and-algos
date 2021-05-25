// Given an array of integers nums which is sorted in ascending order, 
// and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


const binarySearch = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;
    
    while(low <= high) {
        /*
            solution for integer overflow when working
            with large arrays (1 billion elements)
        */
        let middle = Math.floor(low + (high - low) / 2);
        
        if(target === nums[middle]) {
            return middle
        } else if(target < nums[middle]){
            high = middle - 1
        } else {
            low = middle + 1
        }
    }
    return -1
};

const rBinarySearch = (nums, target, low = 0, high = nums.length - 1) => {
    let middle = Math.floor(low + (high - low) / 2);

    if(!nums.length || low > high) {
        return -1
    }
    
    if(target === nums[middle]) {
        return middle
    } else if(target < nums[middle]){
        return rBinarySearch(nums, target, low, middle - 1)
    } else {
        return rBinarySearch(nums, target, middle + 1, high)
    }
}


console.log(binarySearch([-1,0,3,5,9,12], 9)) // 4
console.log(binarySearch([-1,0,3,5,9,12], 2)) // -1


console.log(rBinarySearch([-1,0,3,5,9,12], 9)) // 4
console.log(rBinarySearch([-1,0,3,5,9,12], 2)) // -1




// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1