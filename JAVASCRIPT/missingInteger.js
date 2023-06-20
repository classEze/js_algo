function missingInteger(arr){
    sort(arr,0,arr.length - 1)
    for (let index in arr){
        if(index != arr[index])
        return index
    }
    return null;
}


function sort(arr, leftIndex, pivotIndex){
    let leftPointer = leftIndex
    let rightPointer = pivotIndex - 1
    let pivotValue = arr[pivotIndex]

    if(leftPointer > rightPointer)
        return;

    while (true){

        while (arr[leftPointer] < pivotValue)
              ++leftPointer
    
        while (arr[rightPointer] > pivotValue)
                --rightPointer

        if(leftPointer >= rightPointer)
           break;
        
        let temp = arr[leftPointer]
        arr[leftPointer] = arr[rightPointer]
        arr[rightPointer] = temp 
        ++leftPointer
    }
    
    arr[pivotIndex] = arr[leftPointer]
    arr[leftPointer] = pivotValue

    sort(arr,leftIndex, leftPointer - 1) // SORT LEFT PARTITION
    sort(arr,leftPointer + 1, pivotIndex ) // SORT RIGHT PARTITION

}

console.log(missingInteger([0,1,2,3,4,5,6,8]))