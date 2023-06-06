def quick_sort(arr) :
    return sorter(arr, 0 , len(arr) -2, len(arr) -1 )




def sorter(arr,leftPointer,rightPointer,pivotIndex) :
    if(leftPointer >  rightPointer) :
        return
    while(True) :
        while(arr[leftPointer] < arr[pivotIndex]) :
            leftPointer += 1
        while(arr[rightPointer] > arr[pivotIndex]) :
            rightPointer -= 1
        if(rightPointer <= leftPointer) :
            break
        else :
            temp = arr[leftPointer]
            arr[leftPointer] = arr[rightPointer]
            arr[rightPointer] = temp
    
    temp = arr[leftPointer]
    arr[leftPointer] = arr[pivotIndex]
    arr[pivotIndex] = temp

    sorter(arr,leftPointer +  1, len(arr)-2,  len(arr)-1) # right side
    sorter(arr,0, leftPointer-2, leftPointer-1) # left side



    
myArr = [2,34,5,7]
quick_sort(myArr)
print(myArr)














# class QuickSort{
#     def __init__(self, arr) :
#         self.items = arr
        
    
# }




# if(leftPointer == rightPointer) :
#         temp = arr[leftPointer]
#         arr[leftPointer] = arr[pivotIndex]
#         arr[pivotIndex] = temp
#         return arr
#     else :
#         temp = arr[leftPointer]
#         arr[leftPointer] = arr[rightPointer]
#         arr[rightPointer] = temp
#         return sorter(arr,)