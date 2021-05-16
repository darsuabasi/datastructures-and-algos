/*
Use DFS to traverse each tree
Record a leaf value sequence of each tree to an array
Compare the two arrays to check if they are equivalent
*/

// takes in 2 roots 
const leafSimilar = (root1, root2) => {
    // set 2 new arrays
    let leaves1 = [], leaves2 = [];
    // depth first search/traversal on roots and leaves array 
    dfs(root1, leaves1);
    dfs(root2, leaves2);
    // if the length of leaves aren't equal, we know its not similar (think basecase)
    if (leaves1.length !== leaves2.length) {
        return false;
    }
    // loop through leaves 
    // if value of leaf1 isnt same as value of leaf2, its not similar 
    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) {
            return false;
        }
    }
    // if it is, its similar 
    return true;
    // T.C: O(M + N)
    // S.C: O(M + N)
};

// depth first search funtion takes in root and array 
const dfs = (root, array) => {
    // if theres no root then return nothing 
    if (!root) {
        return;
    }
    // if the left and right root are both non-existant then
    // push the value of the root into the array and return 
    if (!root.left && !root.right) {
        array.push(root.val);
        return;
    }
    // run depth first search on left side of root + array 
    dfs(root.left, array);
    // run depth first search on right side of root + array 
    dfs(root.right, array);
}



const leafSimilarTwo = (root1, root2) => {
    const root1Leaves = [];
    const root2Leaves = [];
    const dfs = (node, output) => {
        const children = [];
        if (node) {
            if (!node.left && !node.right) output.push(node.val);
            if (node.left) children.push(node.left);
            if (node.right) children.push(node.right);
            children.forEach(n => dfs(n, output));
        }
    };
    
    dfs(root1, root1Leaves);
    dfs(root2, root2Leaves);
    
    if (root1Leaves.length !== root2Leaves.length) return false;
    
    for (let i = 0; i < root1Leaves.length; i++) {
        if (root1Leaves[i] !== root2Leaves[i]) return false;
    }
    
    return true;
};




const leafSimilarThree = (root1, root2) => {
    const dfs = (node, leaves) => {
        if (node != null) {
            if(node.left == null && node.right == null) {
                leaves.push(node.val);
            }
            dfs(node.left, leaves);
            dfs(node.right, leaves);
        }
    }
    let leaves1 = [];
    let leaves2 = [];
    dfs(root1, leaves1);
    dfs(root2, leaves2);

    return (leaves1.length == leaves2.length && leaves1.every((v, i) => v === leaves2[i]));
};



// console.log(leafSimilar([3,5,1,6,2,9,8,null,null,7,4] [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8])) //true
// console.log(leafSimilar([1] [1])) //true 
// console.log(leafSimilar([1,3,7] [2])) // false
// console.log(leafSimilar([1,2] [2,2])) // true 
// console.log(leafSimilar([1,2,3] [1,3,2])) // false 

// console.log(leafSimilarTwo([3,5,1,6,2,9,8,null,null,7,4] [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8])) //true
// console.log(leafSimilarTwo([1] [1])) //true 
// console.log(leafSimilarTwo([1,3,7] [2])) // false
// console.log(leafSimilarTwo([1,2] [2,2])) // true 
// console.log(leafSimilarTwo([1,2,3] [1,3,2])) // false

// console.log(leafSimilarThree([3,5,1,6,2,9,8,null,null,7,4] [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8])) //true
// console.log(leafSimilarThree([1] [1])) //true 
// console.log(leafSimilarThree([1,3,7] [2])) // false
// console.log(leafSimilarThree([1,2] [2,2])) // true 
// console.log(leafSimilarThree([1,2,3] [1,3,2])) // false




