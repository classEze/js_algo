import LinkedList from 'linked_tail_list';

class Stack{
    constructor(){
        this.items = new LinkedList()
    }

    peek(){
        return this.items.tail.value
    }
    add(element){
        this.items.prepend(element)
        return this.items.head.value
    }

    pop(){

        this.items.removeAt(0)
    }

    getSize(){
        return this.items.size
    }
isEmpty(){
    return this.items.isEmpty()
}

}