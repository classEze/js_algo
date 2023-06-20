import math


def quickSelect(arr,position) :
    if len(arr) < 2 :
        return arr[0]
    return sort(arr,0,len(arr)-1,position)


def sort(arr,leftIndex,pivotIndex,position) :
    leftPointer = leftIndex
    rightPointer = pivotIndex - 1
    pivotValue = arr[pivotIndex]

    if(leftPointer >= pivotIndex and leftPointer != position ) :
        print("Target Not Acquired !!! \n Value: {} \n. index: {} ".format(arr[pivotIndex],pivotIndex))
        return

    while leftPointer <= rightPointer :
        while arr[leftPointer] < pivotValue :
            leftPointer += 1
        
        while arr[rightPointer] > pivotValue :
            rightPointer -= 1

        if leftPointer >= rightPointer :
            break

        else :
            temp = arr[leftPointer]
            arr[leftPointer] = arr[rightPointer]
            arr[rightPointer] = temp

            leftPointer += 1

    arr[pivotIndex] = arr[leftPointer]
    arr[leftPointer] = pivotValue

    if leftPointer > position :
        print("Pointer ahead of target,  Target probably lies to the left")
        return sort(arr,leftIndex, leftPointer - 1,position)
    
    elif leftPointer < position:
        print("Pointer behind target, Target probably lies to the right")
        return sort(arr,leftPointer + 1, pivotIndex,position)
    
    else :
        print("Target Acquired !!! \n Value: {} \n. Index: {} ".format(arr[leftPointer], leftPointer))
        return arr[leftPointer]
    
    # if leftPointer > math.floor(len(arr) / 2 ) :
    #     print("Pointer ahead of median")
    #     return sort(arr,leftIndex, leftPointer - 1)
    
    # elif leftPointer < math.floor(len(arr) / 2 ) :
    #     print("Pointer behind median")
    #     return sort(arr,leftPointer + 1, pivotIndex)
    
    # else :
    #     print("Median: {} \n. Index: {} ".format(arr[leftPointer], leftPointer))
    #     return arr[leftPointer]
        


quickSelect([1,2,9],5)



