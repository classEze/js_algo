class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }
    isEmpty(){
        return this.head === null;
    }

    prepend(value){
        try{
            const newNode = new Node(value)
        if(this.isEmpty()){
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return "New node successfully prepended"
        }
        catch(err){
            throw new Error("Node prepend failed, " + err.message)
        } 
    }

    append(value){
        try{
           if(this.isEmpty()) {
            this.prepend(value)
           }
           else{
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = new Node(value);
            this.size++
           }
        }
        catch(err){
            throw new Error("Node append failed, " + err.message)
 
        }
    }

    reverse(){
        try{
            if(this.isEmpty()){
                return;
            }
                let prev = null;
                let curr = this.head;
                let nextNode;

            while(curr.next){
                nextNode = curr.next
                curr.next = prev;
                prev = curr;
                curr = nextNode;
        }
            curr.next = prev;
            this.head = curr;
        }
        catch(err){
            throw new Error("List reversal failed " + err.message)
        }
    }

    print(){
        try{
            let listValues = "";
            let curr = this.head;
            while(curr){
                listValues += "--" + curr.value + "##";
                curr = curr.next;
            }
            console.log(listValues);
        }
        catch(err){
            throw new Error("Ooops!!! ran into an error there " + err.message)
        }
    }
}

const myList = new LinkedList();

// console.log(myList.isEmpty());
// console.log(myList.size);

myList.append("Eze1");
myList.append("Eze2");
myList.append("Eze3");
myList.append("Eze4");
myList.append("Eze5");

// console.log(myList.isEmpty());
// console.log(myList.size);
// console.log(myList.head);
// myList.print();


myList.reverse();
console.log("----Reversed List----");
myList.print();



