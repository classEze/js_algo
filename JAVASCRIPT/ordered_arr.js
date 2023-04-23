function insertOrdered(arr,value){
    const insertionPoint = bin_search(arr,value);
    console.log(insertionPoint)
    let curr = arr[insertionPoint];
    let next;
    let i = insertionPoint;
    while(curr){
        next = arr[i+1]
        arr[i + 1] = curr;
        curr = next;
        i++;
    }
    arr[insertionPoint] = value;
    return arr;
}

function bin_search(arr,value){
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while(end >= start){
        console.log("-------Binary Search--------")
        mid =  Math.floor(( start + end ) / 2);
        if(arr[mid] > value){
            if(arr[mid - 1] < value) return mid;
            end = mid - 1;
        }
        else{
            if(arr[mid + 1] > value) return mid + 1;
            start = mid + 1;
        }
    }
    return end > start ? end : start;
}

let newArr = insertOrdered([6], 5);
// let newArr = insertOrdered(
//     [1,3,5,7,9,13,23,34,36,43,44,45,46,48,50,57,60,65,66,67,68,70,76,77,78,80,85,89,93,99,123,456,500,600,],
//      100);
console.log(newArr);

