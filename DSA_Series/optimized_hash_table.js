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
        let bucket = this.items[index];
        if(!bucket){
            this.items[index] = [[key,value]]
        }
        else{
            const sameKeyItem = bucket.find(item => item[0] === key);
            sameKeyItem ? sameKeyItem[1] = value : bucket.push([key,value]);
        }
    }

    get(key){
        let index = this.hash(key);
        const bucket = this.items[index];
        if(bucket){
                const item = bucket.find(elem=>elem[0] === key)
                return item ? "Key-" + item[0] + " Index-" + index + "  Value-" + item[1] : undefined;
        }
        return undefined;
    }

    remove(key){
        const index = this.hash(key);
        const bucket = this.items[index];
        if(bucket){
            const item = bucket.findIndex(elem=>elem[0] === key);
            item > -1 && bucket.splice(item,1)
        }
    }

    print(){
        let list = '';
        for(let elem = 0; elem < this.size; elem++){
            if(this.items[elem] && this.items[elem].length){
                list += "#" + elem + "--" + this.items[elem].toString() + "..."
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
myHashT.set("misc","I am confused");
myHashT.set("misc","I dont understand");
myHashT.set("misc","Change naa");
myHashT.set("firstLame","LOL");
// myHashT.remove("age");
console.log(myHashT.get("age"));


// console.log(myHashT.hash("firstName"));
// console.log(myHashT.hash("lastName"));
// console.log(myHashT.hash("age"));
// console.log(myHashT.hash("gender"));
// console.log(myHashT.hash("interest"));
// console.log(myHashT.hash("misc"));

myHashT.print();