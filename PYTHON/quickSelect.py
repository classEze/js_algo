def quickSelect(arr) :
    if len(arr) < 2 :
        return arr[0]
    return sort(arr,0,len(arr)-1)


def sort(arr,leftIndex,pivotIndex) :
    leftPointer = leftIndex
    rightPointer = pivotIndex - 1
    pivotValue = arr[pivotIndex]

    if(rightPointer < 0) :
        return

    while leftPointer < rightPointer :
        while arr[leftPointer] < pivotValue :
            leftPointer += 1
        
        while arr[rightPointer] > pivotValue :
            rightPointer -= 1

        if leftPointer >= rightPointer :
            break

        temp = arr[leftPointer]
        arr[leftPointer] = arr[rightPointer]
        arr[rightPointer] = temp

        leftPointer += 1

        temp = arr[leftPointer]
        arr[pivotIndex] = arr[leftPointer]
        arr[leftPointer] = pivotValue

        if leftPointer > round(len(arr) / 2 ) :
            return sort(arr,leftIndex, leftPointer - 1)
        
        elif leftPointer < round(len(arr) / 2 ) :
            return sort(arr,leftPointer + 1, pivotIndex)
        
        else :
            return "Median: {} \n. Index: {} ".format(arr[leftPointer], leftPointer)
        


quickSelect([0,4,7,8,9,2,3,55,456])



