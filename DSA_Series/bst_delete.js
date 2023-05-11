const {Queue} = require("./queue");

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    transverseTree(node,value){
        let newNode = new Node(value)
        if( newNode.value < node.value ){
            if(!node.left){
                node.left = newNode;
            }
            else{
                return this.transverseTree(node.left,value);
            }
        }
        else{
                if(!node.right){
                    node.right = newNode;
                }
                else{
                    return this.transverseTree(node.right,value);
            }        }
    }

    searchTree(node,value){
        if(!node){
            return false;
        }
        else if(node.value === value){
            return node;
        }
        else if( value < node.value ){
            return this.searchTree(node.left,value);
        }
        else{
            return this.searchTree(node.right,value);
        }
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        let newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode;
        }
        else{
            this.transverseTree(this.root,value);
        }
    }

    min(root){ 
        let curr = root;
        while(curr.left){
            curr = curr.left
        }
        return curr.value;
    }


   delete(value){
    this.root = this.deleter(this.root,value)
   }

   deleter(node,value){
    if(!node) return node;
    if(node.value === value){
        if(node.left && node.right){
            console.log("Has both right and left node things");
            node.value = this.min(node.right);
            node.right = this.deleter(node.right,node.value);
    }
    else if(node.left){
        console.log("Has only left node things");
        return node.left
    }
    else if(node.right){
        console.log("Has only right node things");
        return node.right;
    }
    else{
        console.log("Leaf node things");
        return null;
    }
}
else if(node.value > value){
    node.left = this.deleter(node.left,value)
}
else{
    node.right = this.deleter(node.right,value)
}
return node;
}

bfSearchLoop(){
    const tempQueue = new Queue();
    this.root && tempQueue.enqueue(this.root)
    while(!tempQueue.isEmpty()){
        tempQueue.items[tempQueue.front].left && tempQueue.enqueue(tempQueue.items[tempQueue.front].left);
        tempQueue.items[tempQueue.front].right && tempQueue.enqueue(tempQueue.items[tempQueue.front].right);
        console.log(tempQueue.dequeue());
    }
    }
}


const myTree = new BinarySearchTree();

myTree.insert(10);
myTree.insert(5);
myTree.insert(3);
myTree.insert(7);
myTree.insert(15);
myTree.insert(20);
myTree.insert(17);

myTree.delete(10);
myTree.bfSearchLoop()
