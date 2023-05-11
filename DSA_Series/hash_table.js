class HashTable{
    constructor(size){
        this.items = new Array(size);
        this.size = size;
    }

    hash(key){
        const hashIndex = (key.charCodeAt(0) + key.charCodeAt(key.length - 1 ) + key.length) % this.size;
         return hashIndex;
    }

    set(key,value){
        let index = this.hash(key);
        this.items[index] = value;
    }

    get(key){
        let index = this.hash(key);
        return "Key-" + key + " Index-" + index + "  Value-" + this.items[index]
    }

    remove(key){
        this.set(key, undefined)
    }

    print(){
        let list = '';
        for(let elem = 0; elem < this.size; elem++){
            if(this.items[elem]){
                list += "#" + elem + "--" + this.items[elem] + "..."
            }
        }
        console.log(list);
    }

}

const myHashT = new HashTable(100);

myHashT.set("firstName","Oghale");
myHashT.set("lastName","Eterigho");
myHashT.set("age","29");
myHashT.set("gender","Female");
myHashT.set("interest","Novels and love");
myHashT.set("misc","nothing");
myHashT.remove("misc");


// console.log(myHashT.hash("firstName"));
// console.log(myHashT.hash("lastName"));
// console.log(myHashT.hash("age"));
// console.log(myHashT.hash("gender"));
// console.log(myHashT.hash("interest"));
// console.log(myHashT.hash("misc"));

myHashT.print();