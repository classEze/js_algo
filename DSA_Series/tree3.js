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
    preOrderDFS(node){
        if(node){
                console.log(node.value);
                this.preOrderDFS(node.left);
                this.preOrderDFS(node.right);
        }
       }

   bfSearch(){
        const myQueue = new Queue();
        myQueue.enqueue(this.root);
        this.runner(this.root,myQueue)
        }

runner(node,queue){
    if(node){
            node.left && queue.enqueue(node.left)
            node.right && queue.enqueue(node.right)
            console.log(queue.dequeue());
           this. runner(node.left, queue)
            this.runner(node.right, queue)
          } 
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

    min(root){ 
        let curr = root;
        while(curr.left){
            curr = curr.left
        }
        return curr.value;
    }

    max(root){
        let curr = root;
        while(curr.right){
            curr = curr.right
        }
        return curr.value;

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

// myTree.bfSearch()
// myTree.bfSearchLoop()
console.log(myTree.min(myTree.root));
console.log(myTree.max(myTree.root));
