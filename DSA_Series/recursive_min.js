// function min(arr){
//     return minResolver(arr.slice(1), arr[0]);
// }

// function minResolver(arr,minValue){
//     if(!arr.length){
//         return minValue;
//        }
//     if(arr[0] < minValue){
//         minValue = arr[0];
//         return minResolver(arr.slice(1),minValue);
//     }
//     else{
//         return minResolver(arr.slice(1), minValue);
//     }
// }

function min(arr){
    const currIndex = 0
    const minValue = arr[0];
    return minResolver(arr,currIndex + 1,minValue)  
}

function minResolver(arr,currIndex, minValue){
    if(currIndex === arr.length){
        return minValue;
    }
    if(arr[currIndex] < minValue){
        return minResolver(arr,currIndex + 1, arr[currIndex])
    }
    else{
        return minResolver(arr,currIndex + 1, minValue)
    }
}

console.log(min([-9,1,156,5,23,54,67,29,5,67,7,90,66,5,7,1,0,-5,554,6,744,3,3,5,7,8,78]));