class Queue{
    constructor(){
        this.items = {}
        this.front = 0;
        this.rear = 0;
    }
 enqueue(element){
    this.items[this.rear] = element;
    this.rear++
    return this.items
 }
 dequeue(){
  let item = this.items[this.front];
  delete this.items[this.front];
  this.front++;
  return item.value;
 }
 peek(){
    return this.items[this.front]
 }
 getSize(){
    return this.rear - this.front

 }
 isEmpty(){
    return this.rear - this.front === 0;
 }
 print(){
    console.log(this.items);
 }
}

// let myQueue = new Queue();
// myQueue.enqueue("Nazor")
// myQueue.enqueue("Nneka")
// console.log(myQueue.peek());
// myQueue.enqueue("Eze")
// myQueue.dequeue()
// myQueue.print();

module.exports = {Queue};


// delete(value){
//    console.log("dksnjs");
//   }

//   function deleter(node,value){
//    if(node.left.value === value)
//    {
//      if(node.left.left && node.left.right){
//        console.log("Both left and right nodes");
//      }
//      else if(node.left.left){
//        console.log("Only left node");
//      }
//      else if(node.left.right){
//        console.log("Only right node");
//      }
//      else{
//        node.left = null;
//      }

//    }

//   else if(value < node.value){
//    this.deleter(node.left,value)
//   }
//   else{
//    this.deleter(node.right, value)
//   }
// }