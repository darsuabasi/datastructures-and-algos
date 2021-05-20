class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.length = 0;
    this.head = null;
    this.last = null;
  }

  //newnode goes to back of the line/end of the queue
  enqueue = (value) => {
    let node = new Node(value),
    current;

    //if queue is empty
    if (this.length === 0) {
      this.head = node;
      this.last = node;
      // add current first pointer to new first(new node), and make new node new first
    } else {
      this.last.next = node;
      this.last = node;
    }
    //add 1 to size
    this.length++;

    return this;

    // if(this.head === null) {
    //   this.head = node;
    //   this.last = node;
    // } else { 
    //   current = this.head;
    //   while(current.next) {
    //     current = current.next
    //   }
    //   current.next = node;
    // }
    // this.length++
  }

  // dequeue nodes off the front of the line
  dequeue = () => {
    // let current = this.head;

    // if(current) {
    //   let value = current.value;
    //   this.head = current.next;
    //   this.length--;
    //   return value;
    // }
    // return undefined
    //if queue is empty return false
    if (this.length === 0) return false;
    //get dequeuedNode
    const dequeuedNode = this.head;
    //get new head (could be NULL if stack is length 1)
    const newHead = this.head.next;
    //if newHead is null, reassign last to newHead(null)
    if (!newHead) {
      this.last = newHead;
    }
    //assign new head
    this.head = newHead;
    //remove refernce to list
    dequeuedNode.next = null;
    //remove 1 from length
    this.length--;
    //return value of the dequeued node
    return dequeuedNode.value;
  }


  peek = () => {
    if(this.head) {
      return this.head.value;
    } else {
      return null 
    }
  }


  isEmpty = () => {
    if(this.length === 0) {
      return true
    } else {
      return false
    }
  }


  toArray = () => {
    let newArr = [];
    
    while(!this.isEmpty()) {
      let result = this.dequeue();
      newArr.push(result)
    }

    for(let i = 0; i < newArr.length; i++) {
      this.enqueue(newArr[i])
    }
    return newArr
  }

  toString = () => {
    let input = this.toArray();
    return "< " + input.join(", ") + " <=";
  }

  clear = () => {
    this.head = null;
    this.length = 0;
  }

}

module.exports = Queue