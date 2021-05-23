// Pre-Order
// Given the root of a tree, the steps for preOrderPrint are:

// print value of root
// print all nodes in the left subtree
// print all nodes in the right subtree

// Value, L, R

// PRE-FIX TRAVERSAL

// Given our tree, preOrderPrint would print the values in the 
// order: A, B, C, D, E, F, G, H, I, J, K. 
// Pre-Order has the patten of self, left, right.

class AnotherTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const preOrderTraversal = (root) => {
    if(!root) return 

    if(root) {
        console.log(root.value)
        preOrderTraversal(root.left)
        preOrderTraversal(root.right)
    }
}

let a = new AnotherTreeNode("A"); //each node is an object --> 3 properties:[val, left, right]
let b = new AnotherTreeNode("B");
let c = new AnotherTreeNode("C");
let d = new AnotherTreeNode("D");
let e = new AnotherTreeNode("E");
let f = new AnotherTreeNode("F");
let g = new AnotherTreeNode("G");
let h = new AnotherTreeNode("H");
let i = new AnotherTreeNode("I");
let j = new AnotherTreeNode("J");
let k = new AnotherTreeNode("K");

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

// order: A, B, C, D, E, F, G, H, I, J, K. 
console.log(preOrderTraversal(a))



































