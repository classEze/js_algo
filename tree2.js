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

    // transverseTree(node,value){
    //     if(!node){
    //         node = new Node(value);
    //         return;
    //     }
    //     else if( value < node.value ){
    //         return this.transverseTree(node.left,value);
    //     }
    //     else{
    //         return  this.transverseTree(node.right,value);
    //     }
    // }

    searchTree(node,value){
        let nextNode;
        if(node.value === value){
            return node;
        }
        else if( value < node.value ){
            nextNode = node.left;
        }
        else{
            nextNode = node.right;
        }
        if(!nextNode){
            return false;
        }
        return searchTree(nextNode);
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
            let insertionPoint = this.root;
            while(true){
                if( value < insertionPoint.value){
                    console.log(value + " less than , left---");
                    if(!insertionPoint.left){
                        insertionPoint.left = new Node(value)
                    }
                    else {
                        insertionPoint = insertionPoint.left;
                    }
                }
                else{
                    console.log(value + " greater than , right---");
                    if(!insertionPoint.right){
                        insertionPoint.right = new Node(value);
                        break;
                    }
                    else {
                        insertionPoint = insertionPoint.right;
                    }
                }
            }
        }
    }

    search(value){
        if(this.isEmpty()){
            return false;
        }

        else{
            return this.searchTree(this.root,value)
        }
    }

    printLeft(){
        let curr = this.root;
        while(curr){
            console.log(curr.value);
            curr = curr.left
        }
    }
    printRight(){
        let curr = this.root;
        while(curr){
            console.log(curr.value);
            curr = curr.right
        }
    }

}

const myTree = new BinarySearchTree();
// console.log(myTree.isEmpty());
myTree.insert(50);
myTree.insert(34);
myTree.insert(45);
myTree.insert(384);
// console.log(myTree.search(30));

// myTree.printLeft();
myTree.printRight();