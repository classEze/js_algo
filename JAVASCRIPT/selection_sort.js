function selection_sort(arr){
    let start = 0;
    for(let i = start; i < arr.length; i++){
        minIndex = getMin(arr,i)
        if(arr[minIndex] < arr[i]){
            let min = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = min;
        }
    }
    return arr;
}

function getMin(arr,start){
    let minIndex = start;
    for(let i = start + 1; i < arr.length; i++){
        if(arr[i] < arr[minIndex]) minIndex = i;
    }
    return minIndex;
}

console.log(selection_sort([5,4,0,1,34,2,3,5,6,3,2,3,4,1]))