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

const rBinarySearch = (nums, target) => {
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

