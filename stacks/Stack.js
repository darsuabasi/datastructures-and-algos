class Stack {

    constructor() {
        this.arr = [];
    }

    push(value) {
        this.arr.push(value);
    }

    pop() {
        return this.arr.pop();
    }

    peek() {
        // Get Last Index based on length
        const lastIndex = this.arr.length - 1;

        // Return value
        return this.arr[lastIndex];
    }

    isEmpty() {
        // Check if array length is zero
        // return this.arr.length === 0;
        if(this.arr.length === 0) {
            return true 
        } else {
            return false
        }
    }
    
}

module.exports = Stack