// hashmap
const hasCycle = (head) => {
    const seen = new Set();
    
    const traverse = (node) => {
        if(seen.has(node)) return true;
        if(!node) return false;
        seen.add(node);
        return traverse(node.next);
    }
    
    return traverse(head);
};

// two pointers
// var hasCycle = function(head) {
    
//     function run(fast, slow) {
//         if(!fast || !fast.next) return false;
//         if(fast.next === slow) return true;
//         return run(fast.next.next, slow.next);
//     }
//     return run(head, head);    
// };

// add property
// var hasCycle = function(head) {
    
//     function run(node) {
//         if(!node) return false;
//         if(node.seen) return true;
//         node.seen = true;
//         return run(node.next);
//     }
//     return run(head);
// };