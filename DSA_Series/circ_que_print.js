(function print(){
    let front = 3;
    let rear = 1;
    let capacity = 6;
    for(let i=front; i !=rear + 1; i = (i + 1) % capacity){
        console.log(i + " - Hey you")
    }
})()