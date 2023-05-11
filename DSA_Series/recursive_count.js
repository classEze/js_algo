// function count_values(text, character){
//     const currentPoint = 0;
//     return counter(text , character.toLowerCase() , currentPoint, text.length - 1)
// }

// function counter(string, value, point, end){
//     if(point > end){
//         return 0;
//     }
//     if(string[point].toLowerCase() === value){
//         return 1 + counter(string, value, point + 1, end)
//     }
//     else{
//         return 0 + counter(string, value, point + 1, end)
//     }
// }

// function recursive_counter(string, value, currentIndex = 0 ){
//     if(currentIndex > string.length -1){
//         return 0;
//     }
//     if(string[currentIndex].toLowerCase() === value.toLowerCase()){
//         return 1 + recursive_counter(string, value, currentIndex + 1)
//     }
//     else{
//         return 0 + recursive_counter(string, value, currentIndex + 1)
//     }
// }
// console.log(recursive_counter("backspacesss", 's'));

// function recursive_counter(arr, value, currentIndex ){
//     currentIndex = !currentIndex ? 0 : currentIndex
//     if(currentIndex > arr.length -1){
//         return 0;
//     }
//     if(arr[currentIndex].toLowerCase() === value.toLowerCase()){
//         return 1 + recursive_counter(arr, value, currentIndex + 1)
//     }
//     else{
//         return 0 + recursive_counter(arr, value, currentIndex + 1)
//     }
// }
// console.log(recursive_counter(["we",'s','s','a',"sss", "ss", "s"], 's'));

function recursive_counter(arr, value ){
    if(arr.length === 0){
        return 0;
    }
    if(arr[0].toLowerCase() === value.toLowerCase()){
        return 1 + recursive_counter(arr.slice(1), value)
    }
    else{
        return 0 + recursive_counter(arr.slice(1), value)
    }
}

console.log(recursive_counter(["we",'s','s','a',"sss", "ss", "s"], 's'));

