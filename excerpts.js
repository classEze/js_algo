excerpts.js
if(node){
            if(node && node.value === value)
            {
                    if(node.left && node.right){
                        console.log("Both left and right nodes");
                    }
                    else if(node.left){
                        console.log("Only left node");
                        node = node.left;
                    }
                    else if(node.right){
                        console.log("Only right node");
                        node = node.right

                    }
                    else{
                        console.log("Leaf node , deleting");
                        node = null;
                    }
            }

        else if(value < node.value){
            node.left && this.deleter(node.left,value);
        }
        else{
            node.right && this.deleter(node.right, value);
        }
        }
        }