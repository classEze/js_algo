function binarySearch(arr,value){
    let start = 0;
    let end = arr.length -1;
    return searcher(arr,start,end,value)
}

function searcher(arr,start,end,value){
    let mid = Math.floor((start+end)/2);

    if(end <= start){
        return -1;
    }
    if(arr[mid] ===  value){
        return mid;
    }
    
    arr[mid] > value ? end = mid : (start = mid + 1, end = end + 1)
    return searcher(arr, start, end,value);
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,1,23,45,67,89,123,452,1667], 9))