// Write a function that returns all the elements of a tree traversed in BFS order in an array.
// Use one of you Queues implementation for Tree Breath First Search(BFS)



// const breadthFirst = (root) => {
//     // Initialize the queue with the root node
//     let queue = [ root ];

//     // Continue running the algorithm while there are still nodes on the queue. As long a queue.length is truthy
//     while (queue.length) {
//         // Dequeue. Remove the front node in the queue. 
//         let node = queue.shift();

//         // The node we just removed is now "visited", so print it
//         console.log(node.value);

//         // Add/enqueue the left and right children to the back of the queue, if they exist.
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }
// }


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

// const breadthFirstSearch = (root) => {
//     if(!this.root) {
//         return false
//     }

//     const queue = new Queue();
//     const tValues = []; //keep track of the tree values 
//     queue.enqueue(this.root) // add root to queue
//     while(queue.length !== 0) { //while queue is not empty
//         const nChildren = queue.head.value.children; //get TreeNode Children
//         if(nChildren.length !== 0) { //if node has children, loop and add each to queue
//             nChildren.forEach(child => queue.enqueue(child))
//         }
//         tValues.push(queue.head.value); // push the head item in the queue to the tree values
//         queue.dequeue(); //remove first node from queue
//     }
//     return tValues  //return all TreeNodes
// }


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

console.log(helloTree.breadthFirstSearch())

// returns u = 3 children 
// returns r = 4 children

// s, u, i, t, c, 4, q = no children