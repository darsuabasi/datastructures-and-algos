// const inOrderPrint(root) {
//   if (!root) return; //basecase 

//   inOrderPrint(root.left) //printing nodes to the left 
//   console.log(root.value) // printing value of root 
//   inOrderPrint(root.right) //printing nodes ot the right 
// }


// left, root.val, right 
// 1. Prioritize traversals of the “left side” tree of the given root over the value of the root itself.
// 2. Prioritize the traversal of the value of the root itself over traversal of its “right side” tree.
// 3. Do traversals of all subtrees also using inorder traversal.

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



// class Tree {
//     constructor() {
//         this.root = null;
//     }

//     inOrderPrint(root) {
//         if(!this.root) {
//             return null
//         }




//         // if(!this.root) {
//         //     return null
//         // } 

//         // if(this.root) {
//         //     let result = [];
//         //     const inOrder = (node) => {
//         //         if(node.left) {
//         //             inOrder(node.left)
//         //             result.push(node.data);
//         //             if(node.right) {
//         //                 inOrder(node.right)
//         //             }
//         //         }
//         //     }
//         //     inOrder(this.root)
//         //     return result
//         // }


//         // const result = [];
//         // if (root.left) result = result.concat(inorderTraversal(root.left));
//         // result = result.push(root.val);
//         // if (root.right) result = result.concat(inorderTraversal(root.right));
//         // return result;




//         let current = this.root; //always want current val to start at root 
//         const result = []; //values of trees

//         if (!this.root) {
//             return false; //basecase
//         } 

//         if(node.children.length > 0) { //if node had children, split nodes into left and right halves in case tree is not binary FIRST
//             const mid = Math.floor(node.children/2); //create mid point 
//             for(let i = 0; i < mid; i++) {
//                 inOrderPrint(node.children[i]) //call function on all node children left of halfway point
//             }
//             result.push(node.value) // push parent node value to array
//             for(let i = mid; i < node.children.length; i++) {
//                 inOrderPrint(node.children[i]) //call function on all node children right of halfway point
//             }
//         } else {
//             result.push(node.value)
//         }
//         return true
//     }
// }

const inOrderPrintTwo = (root) => {
    if(!root) return;

    inOrderPrintTwo(root.left)
    console.log(root.value)
    inOrderPrintTwo(root.right)
}

let a = new TreeNode("A"); //each node is an object --> 3 properties:[val, left, right]
let b = new TreeNode("B");
let c = new TreeNode("C");
let d = new TreeNode("D");
let e = new TreeNode("E");
let f = new TreeNode("F");
let g = new TreeNode("G");
let h = new TreeNode("H");
let i = new TreeNode("I");
let j = new TreeNode("J");
let k = new TreeNode("K");

a.left = b;
a.right = g;

b.left = c;
b.right = f;

c.left = d;
c.right = e;

g.left = h;
g.right = k;

h.left = i;
h.right = j;

// const helloTree = new Tree();
// helloTree.root = new TreeNode("A");
// console.log(helloTree.root)


// pass in the root object
// RESULTS = D, C, E, B, F, A, I, H, J, G, K
console.log(inOrderPrintTwo(a))












// ------------------------------------------------------------------------------------------------------------------
// let a = new TreeNode("A");
// let b = new TreeNode("B");
// let c = new TreeNode("C");
// let d = new TreeNode("D");
// let e = new TreeNode("E");
// let f = new TreeNode("F");
// let g = new TreeNode("G");
// let h = new TreeNode("H");
// let i = new TreeNode("I");
// let j = new TreeNode("J");
// let k = new TreeNode("K");

// a.left = b;
// a.right = g;

// b.left = c;
// b.right = f;

// c.left = d;
// c.right = e;

// g.left = h;
// g.right = k;

// h.left = i;
// h.right = j;
// console.log(a.left.left.left.value) //D
// console.log(a.right.left.right.value) //J