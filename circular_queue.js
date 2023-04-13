class CircularQueue{

    constructor(rear){
     this.items = {}
      this.front = 0;
      this.rear = rear;
      this.currentIndex = 0;
    }

    rearrangeQueue(index){
        if(!this.items[index+1]){
            this.items[index] = null;
            return;
        }
        this.items[index] = this.items[index+1];
        return this.rearrangeQueue(index+1);
    }

    enqueue(elem){
        if(this.currentIndex === this.rear){
            return "Queue is full";
        }
        this.items[this.currentIndex] = elem;
        this.currentIndex++;
        return "Enqueue operation successful"
    }


    dequeue(){
        if(this.items[this.front]){
            this.currentIndex--
            const item = this.items[this.front]
            this.rearrangeQueue(0)
            return item;
        }
        return "Queue is empty"
    }

    size(){
        return this.currentIndex;
    }

    peek(){
        if(this.items[this.front]){
            this.items[this.front]
        }
        return "Queue is empty"
    }

    isEmpty(){
        return this.currentIndex === this.front;
    }

    maxSize()
        {
            return this.rear;
        }
    print(){
        console.log(this.items)
    }
}


let queueInstance = new CircularQueue(5);


console.log(queueInstance.enqueue(12));
console.log(queueInstance.enqueue(34));
console.log(queueInstance.enqueue(59));
console.log(queueInstance.enqueue(60));
console.log(queueInstance.enqueue(67));
console.log(queueInstance.enqueue(231));
// console.log(queueInstance.dequeue());
// console.log(queueInstance.dequeue());
// console.log(queueInstance.size());
// console.log(queueInstance.dequeue());
// console.log(queueInstance.dequeue());
// console.log(queueInstance.size());
queueInstance.print();
