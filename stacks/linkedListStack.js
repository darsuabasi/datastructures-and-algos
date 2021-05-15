//Stack using linkedlist and class implementation 
//Node
class Node {
    constructor(elm) {
        this.element = elm;
        this.next = null;
    }
}

class stackWithLinkLists {
    constructor(){
        this.length = 0;
        this.head = null;
    }
  
    //Push data in the stack
    push = (elm) => {
        //Create a new node
        let node = new Node(elm),
        current;
    
        //Add the new node at the top
        current = this.head;
        node.next = current;
        this.head = node;
        
        this.length++;
    }
   
    //Pop the item from the stack
    pop = () => {
        // set head as current
        let current = this.head;
        
        //If there is item then remove it 
        //and make the next element as the first
        if(current){
            // set elm as current.element 
            let elm = current.element;
            current = current.next;
            this.head = current;
            this.length--;
            return elm;
        }
        return null;   
    }
  
  //Returning the first element in the stack
    peek = () => {   
        if(this.head){    
            return this.head.element;
        }
        return null; 
    }
  
    //Converting stack to an array
    toArray = () => {
        let arr = [];
        let current = this.head;

        while(current){
            // push the current element into the new arr and as you do that, 
            // the next element becomes the current element
            arr.push(current.element);
            current = current.next;
        }
        return arr;
    }
  
    //Checking if stack is empty
    isEmpty = () => {
        return this.length === 0;
    }
  
    //Returning the size of stack
    size = () => {
        return this.length;
    }
  
    //Clearing the stack
    clear = () => {
        this.head = null;
        this.length = 0;
    }
}

let stack = new stackWithLinkLists();   //creating new instance of Stack
stack.push(1); // 1
stack.push(2); // 2, 1
stack.push(3); // 3, 2, 1
console.log(stack.peek()); // returning first element in stack (3)
console.log(stack.isEmpty()); // false
console.log(stack.size()); // 3
console.log(stack.pop()); // removes from top so (3) is removed
console.log(stack.toArray()); // [2, 1]
console.log(stack.size()); // 2
stack.clear();  //clear the stack
console.log(stack.isEmpty()); // true




//Stack using linkedlist and function as constructor 
function stackWithLinkListsTwo(){

    let Node = function(elm){
        this.element = elm;
        this.next = null;
    }
  
    //To keep track of the size  
    let length = 0;
  
    //To keep track of the list
    let head = null;
  
    //Push data in the stack
    this.push = function(elm){
        //Create a new node
        let node = new Node(elm),
        current;
    
        //Add the new node at the top
        current = head;
        node.next = current;
        head = node;
        
        length++;
    }
  
  //Pop the item from the stack
    this.pop = function(){
        let current = head;
        
        //If there is item then remove it 
        //and make the next element as the first
        if(current) {
            let elm = current.element;
            current = current.next;
            head = current;
            length--;
            return elm;
        }
        return null;   
    }
  
    //Return the first element in the stack
    this.peek = function(){    
        if(head){    
            return head.element;
        }
        return null;
    }
  
    //Convert the stack to an array
    this.toArray = function(){
        let arr = [];
        let current = head;
        while(current){
            arr.push(current.element);
            current = current.next;
        }
        return arr;
    }
  
    //Check if stack is empty
    this.isEmpty = function(){
        return length === 0;
    }
  
    //Return the size of the stack
    this.size = function(){
        return length;
    }
  
    //Clear the stack
    this.clear = function(){
        head = null;
        length = 0;
    }
}


let stackTwo = new stackWithLinkListsTwo();   //creating new instance of Stack
stackTwo.push(1); // 1
stackTwo.push(2); // 2, 1
stackTwo.push(3); // 3, 2, 1
console.log(stackTwo.peek()); // returning first element in stack (3)
console.log(stackTwo.isEmpty()); // false
console.log(stackTwo.size()); // 3
console.log(stackTwo.pop()); // removes from top so (3) is removed
console.log(stackTwo.toArray()); // [2, 1]
console.log(stackTwo.size()); // 2
stackTwo.clear();  //clear the stack
console.log(stackTwo.isEmpty()); // true





