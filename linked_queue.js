const {LinkedList} = require("./linked_list");

class LinkedQueue{
    constructor(){
        this.items = new LinkedList()
    }
    enqueue(element){
        this.items.prepend(element);
     }
     dequeue(){
        let first = this.items.head.value;
        this.items.removeAt(0);
        return first;
     }
     peek(){
        return this.items.head.value;
     }
     getSize(){
        return this.items.size
    
     }
     isEmpty(){
        return this.items.isEmpty()
     }
     print(){
        this.items.print();
     }

}

const myList = new LinkedQueue();

myList.enqueue("Eze");
myList.enqueue("Kelvin");
myList.enqueue("Ashley");
console.log(myList.peek());

