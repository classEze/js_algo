function insertionSort(arr){
    for(let i=1; i < arr.length; i++){
       let tempValue = arr[i];
       let j = i-1;
       while(j>=0){
        if(arr[j] < tempValue) break;
        arr[j+1] = arr[j];
        j--
       }
       arr[j+1] = tempValue
    }
    return arr;
}

console.log(insertionSort([4,3,6,1,48,0,0,34,2,4,5,1,2,44,66,232]));