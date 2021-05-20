// Write a function that returns all the elements of a tree traversed in BFS order in an array.
// Use one of you Queues implementation for Tree Breath First Search(BFS)


const Queue = require('./Queue')

class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}


class Tree {
  constructor() {
    this.root = null;
  }

  breadthFirstSearch() {
      if(!this.root) {
        return false
    }
    const queue = new Queue();
    const tValues = []; //keep track of the tree values 
    queue.enqueue(this.root) // add root to queue
    while(queue.length !== 0) { //while queue is not empty
        const nChildren = queue.head.value.children; //get the children of the TreeNode
        if(nChildren.length !== 0) { //if the node has children, loop and add each of them to queue
            nChildren.forEach(child => queue.enqueue(child))
        }
        tValues.push(queue.head.value); // push the head in the queue to the tree values
        queue.dequeue(); //remove first node from queue
    }
    return tValues  //return all TreeNodes
  }
}


const helloTree = new Tree();

helloTree.root = new TreeNode("P");
helloTree.root.children.push(new TreeNode("u"));
helloTree.root.children.push(new TreeNode("r"));
helloTree.root.children[0].children.push(new TreeNode("s"));
helloTree.root.children[0].children.push(new TreeNode("u"));
helloTree.root.children[0].children.push(new TreeNode("i"));
helloTree.root.children[1].children.push(new TreeNode("t"));
helloTree.root.children[1].children.push(new TreeNode("c"));
helloTree.root.children[1].children.push(new TreeNode("4"));
helloTree.root.children[1].children.push(new TreeNode("q"));

// console.log(helloTree.breadthFirstSearch())

// returns u = 3 children 
// returns r = 4 children

// s, u, i, t, c, 4, q = no children

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class HelloTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}



const traversalBFS = (root) => {
  // let queue = [root];
  let queue = new Queue();
  queue.enqueue(root);

  let output = [];

  while(!queue.isEmpty()) {
    let node = queue.dequeue() //remove node from the front of the queue

    // let node = queue.shift() //remove node from the front of the queue
    console.log("value of node ", node.value) //removing the node we  just saw 
    // output.push(node.value) //if we want to display it as an array 

    if(node.left) {
      queue.enqueue(node.left)
      // queue.push(node.left)
    }
    if(node.right) {
      queue.enqueue(node.right)
      // queue.push(node.right)
    }
  }
  return output
}



let a = new HelloTree("P"); //each node is an object --> 3 properties:[val, left, right]
let b = new HelloTree("u");
let c = new HelloTree("r");
let d = new HelloTree("s");
let e = new HelloTree("u");
let f = new HelloTree("i");
let g = new HelloTree("t");
let h = new HelloTree("!");


a.left = b; // u
a.right = c; // r

b.left = d; // s
b.right = e; // u

c.right = f; // i

e.left = g; // t
e.right = h; // !

traversalBFS(a)

console.log(traversalBFS(a))