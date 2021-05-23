// Post-Order
// Given the root of a tree, the steps for postOrderPrint are:

// print all nodes in the left subtree
// print all nodes in the right subtree
// print value of root


// Given our tree, postOrderPrint would print the values in the 
// order: D, E, C, F, B, I, J, H, K, G, A.

class WhoaTree {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

const postOrderTraversal = (root) => {
    if(!root) return

    if(root) {
        postOrderTraversal(root.left);
        postOrderTraversal(root.right);
        console.log(root.value)
    }
}





let a = new WhoaTree("A"); //each node is an object --> 3 properties:[val, left, right]
let b = new WhoaTree("B");
let c = new WhoaTree("C");
let d = new WhoaTree("D");
let e = new WhoaTree("E");
let f = new WhoaTree("F");
let g = new WhoaTree("G");
let h = new WhoaTree("H");
let i = new WhoaTree("I");
let j = new WhoaTree("J");
let k = new WhoaTree("K");

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


// RESULTS: D, E, C, F, B, I, J, H, K, G, A.
console.log(postOrderTraversal(a))
