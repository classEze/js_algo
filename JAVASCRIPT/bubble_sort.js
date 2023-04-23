function bubble_sort(arr){
    let swapped = true;
    let lastSortedIndex = 0;
    while(swapped){
        swapped = false;
      for(let i = 0; i < arr.length - lastSortedIndex; i++){
        console.log(i + 1 + "--pass")
        if(arr[i+1] < arr[i]){
            let next = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = next;
            swapped = true;
        }
      }
      lastSortedIndex += 1;
    }
    return arr;
}

console.log(bubble_sort([5,4,3,2,1]))
// console.log(bubble_sort([2,1,5,2,34,5,6,7,8,9]))