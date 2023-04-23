function hasDuplicates(arr){
    let hashObj = {}
    for (let i of arr){
        if(hashObj[i]){
            return true;
        }
        hashObj[i] = 1;
    }
    return false;
}

console.log(hasDuplicates([1,2,4,5,3,7]))