class Stack{
    constructor(){
        this.items = [];
    }

    peek(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    getSize(){
        return this.items.length;
    }
    pop(){
        return this.items.shift();
    }

    add(){
        return this.items.unshift(element)
    }

}