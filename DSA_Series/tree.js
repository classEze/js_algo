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

    search(value){
        if(this.isEmpty()){
            return false;
        }

        else{
            return this.searchTree(this.root,value)
        }
    }

   preOrderDFS(node){
    if(node){
            console.log(node);
            this.preOrderDFS(node.left);
            this.preOrderDFS(node.right);
    }

   }

   inOrderDFS(node){
    if(node){
            this.inOrderDFS(node.left);
            console.log(node);
            this.inOrderDFS(node.right);
    }

   }

   postOrderDFS(node){
    if(node){
            this.postOrderDFS(node.left);
            this.postOrderDFS(node.right);
            console.log(node);
    }

   }

}

const myTree = new BinarySearchTree();
// console.log(myTree.isEmpty());
myTree.insert(10);
myTree.insert(5);
myTree.insert(3);
myTree.insert(7);
myTree.insert(15);
// console.log(myTree.search(50));

myTree.preOrderDFS(myTree.root)