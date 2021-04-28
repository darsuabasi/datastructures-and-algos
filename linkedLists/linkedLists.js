class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  let node1 = new Node(1);
  let node2 = new Node(2);
  let node3 = new Node(100);
  let node4 = new Node(4);
  
  
  node1.next = node2; // 1 -> 2 -> null
  node2.next = node3; // 1 -> 2 -> 3 -> null
  node3.next = node4;
  
  const includes = (node, target) => {
    let current = node;
  
    if (!node) return false;
  
    while(current !== null) {
      if(current.value === target) {
        return true 
      } else {
        current = current.next
      }
      
    }
    return false
  
  }
  
  console.log(includes(node1, 100)) // True
  console.log(includes(node1, 200)) // False
  
  
  // go through the linklist 
    //  check node.value === target
    //    return true
    //  else 
    //    go to next node 
  