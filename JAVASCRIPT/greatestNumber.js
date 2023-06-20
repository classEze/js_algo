// function ONLOGN(arr){
//     return sort(arr,0,arr.length - 1)
// }


// function sort(arr, leftIndex, pivotIndex){
//     let leftPointer = leftIndex
//     let rightPointer = pivotIndex - 1
//     let pivotValue = arr[pivotIndex]

//     if(leftPointer > rightPointer && leftPointer < arr.length-1)
//         return " Target Not found...LeftPointer == " + leftPointer + " , RightPointer == " + rightPointer;
//     else if(leftPointer > rightPointer && leftPointer == arr.length)
//         return "Highest value is " + arr[leftPointer] + ", at index " + leftPointer 


//     while (true){

//         while (arr[leftPointer] < pivotValue)
//               ++leftPointer
    
//         while (arr[rightPointer] > pivotValue)
//                 --rightPointer

//         if(leftPointer >= rightPointer)
//            break;
        
//         let temp = arr[leftPointer]
//         arr[leftPointer] = arr[rightPointer]
//         arr[rightPointer] = temp 
//         ++leftPointer
//     }
    
//     arr[pivotIndex] = arr[leftPointer]
//     arr[leftPointer] = pivotValue

//     if(leftPointer < arr.length-1){
//         console.log("Target still to the right, POINTER == " + arr[leftPointer] + "..INDEX == " + leftPointer)
//         return  sort(arr,leftPointer + 1, pivotIndex ) // SORT RIGHT PARTITION
//     }
//     else return "Highest value is " + arr[leftPointer] + ", at index " + leftPointer
// }


// function MAXOFN(arr){
//     let highestValue = arr[0];
//     let pointer = 1;
//     while(pointer < arr.length){
//         if(arr[pointer] > highestValue)
//             highestValue = arr[pointer]
//         ++pointer
//     }
//     return highestValue;
// }

function MAXOFNSQUARE(arr, index = 0){
    if(arr.length == 1)
      return arr[0]

    let maxOfRest = MAXOFNSQUARE(arr.slice(index + 1))

    if(arr[index] > maxOfRest){
        return arr[index]
    }
    else {
        return maxOfRest
    }
}


console.log(MAXOFNSQUARE([0,1,2,233,89,65,3,4,5,6,8]))