const isPalindrome = (head) => {
    let curr = head;
    const traverse = (node) => {
        if (node === null) {
            return true;
        }
        // traverse to the end of the list first
        const prevIsSame = traverse(node.next);
        // when the call stack bounces back, compare the values 
        // from the head and from the bottom up
        const currIsSame = curr.val === node.val;
        curr = curr.next;
        return prevIsSame && currIsSame;
    }
    return traverse(head);
};



// var isPalindrome = function(head) {
//     const arr = [];
//     while(head && head.val !== null) {
//         arr.push(head.val);
//         head = head.next;
//     }
//     return arr.every((e, i) => e === arr[arr.length - i - 1]);
// };



// function isPalindrome(head) {
// 	// find mid
//     let mid = head, tail = head;
//     while (tail?.next) {
//         mid = mid.next;
//         tail = tail.next?.next ?? tail.next;
//     }

// 	// reverse the 2nd half
//     let prev = null;
//     while (mid) {
//         const nextNode = mid.next;
//         mid.next = prev;
//         prev = mid;
//         mid = nextNode;
//     }

// 	// compare
//     while (tail) {
//         if (head.val !== tail.val) {
//             return false;
//         }
//         head = head.next;
//         tail = tail.next;
//     }

// 	return true;
// }



// Create a previous pointer ('prev') on the first run.
// Run through the linked list again, comparing the front to the back.
// If one value from the left side doesn't match it's counterpart on the right, return false. Else, return true.

// var isPalindrome = function(head) {
    
//     if (!head) return null;
    
//     let prev = head, first = head;
    
//     while (first.next != null) {
//         first = first.next
//         first.prev = prev;
//         prev = prev.next;
//     }
    
//     let second = head;
    
//     while (head.next != null && first.prev != null) {

//         if (second.val != first.val) {
//             return false;
//         }

//         second = second.next;
//         first = first.prev;
//     }
    
//     return true;
// };