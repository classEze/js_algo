class Node{
    constructor(value){
     this.value = value;
     this.next = null
    }
}


class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0
    }
    isEmpty(){
        return this.head === null
    }

    getSize(){
        return this.size
    }

    setHead(element){
        let newNode = new Node(element)
        this.head = newNode
    }

    prepend(element){
        if(this.isEmpty()){
            this.setHead(element)
        }
        else{
            let newNode = new Node(element)
            newNode.next = this.head
            this.head = newNode
        }
        this.size++
    }

    append(element){
        if(this.isEmpty()){
            this.prepend(element)
        }
        else{
            let currentNode = this.head;
            let prevNode;
        while(currentNode){
            prevNode = currentNode
            currentNode = currentNode.next
        }
        prevNode.next = new Node(element);
        this.size++;
        }
    }

    insert(elem,index){
        if(index === 0){
            this.prepend(elem)
        }
        else if(index < 0 || index > this.size)
        {
            console.log("Invalid index given")
        }
        else{
                let newNode = new Node(elem)
                let prevNode = this.head;
                for(let i=0; i < index - 1; i++){
                    prevNode = prevNode.next;
                }
                newNode.next = prevNode.next;
                prevNode.next = newNode;
                this.size++;
        }
    }
    removeAt(index){
       
        if(index < 0 || index >= this.size )
            {
                console.log("Invalid index given")
            }
           else if(index === 0){
                this.head = this.head.next;
                this.size--
            }
        else{
            let currentNode = this.head;
            let prevNode;
            let nextNode;
            
                for(let i=0; i < index; i++){
                    prevNode = currentNode;
                     currentNode = prevNode.next;
                     nextNode = currentNode.next;
                 }
                 prevNode.next = nextNode;
                 this.size--;
                
        }
        
    }
    removeValue(value){
        let currentNode = this.head;

        if(currentNode.value === value){
            this.head = this.head.next;
            this.size--
        }
        else{
            while(currentNode.next){
                if(currentNode.next.value === value){
                    let removeNode = currentNode.next;
                    currentNode.next = removeNode.next;
                    console.log(removeNode.value + " removed.....")
                    this.size--;
                    break;
                }
                currentNode = currentNode.next;
            }
        }

    }
    search(value){
        let i = 0;
        let currentNode = this.head;
        while(i < this.size){
            if(currentNode.value === value){
                console.log(value + " found at position " + i);
                return i;
            }
            currentNode = currentNode.next;
            i++;
    }
    return -1;
}

reverse(){
       let prev = null;
       let curr = this.head;

       while(curr){
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
       }

       this.head = prev;
}


    print(){
        if(this.isEmpty()){
            console.log("This list is empty")
        }
            let currentNode = this.head;
            let listString = "";
            while(currentNode){
                listString += `-${currentNode.value}`;
                currentNode = currentNode.next;
            }
            console.log(listString);
        }
    }

    // let myList = new LinkedList();
    // myList.prepend("Eze")
    // myList.append("madu")
    // myList.append("Buchi")
    // myList.append("jisike")
    // myList.prepend("Start")
    // myList.append("End")
    // myList.insert("middle", Math.floor(myList.size/2))
    // myList.insert("middle1", Math.floor(myList.size/2))
    // myList.insert("middle2", 1)
    // myList.reverse()
    // console.log(myList.size);
    // console.log(myList.isEmpty())
    // console.log(myList.search('Start'));
    // myList.print()

    module.exports = {LinkedList};