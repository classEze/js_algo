function greatestProduct(arr){
    if(arr.length < 3)
       return "Array must have at least 3 elements"
    sort(arr,0,arr.length - 1)
    return arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3]
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

console.log(greatestProduct([1,2,1]))

// let myArr = [4,2,3,556,445,66,1]

// sort(myArr,0, myArr.length - 1)

// console.log(myArr)