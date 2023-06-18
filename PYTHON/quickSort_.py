def quick_sort(arr):
    return sorter(arr, 0, len(arr) - 1)


def sorter(arr, leftIndex, rightIndex):
        leftPointer = leftIndex
        pivotIndex = rightIndex
        rightPointer = pivotIndex - 1

        if leftPointer > rightPointer :
            return arr
        
        while leftPointer < rightPointer :
            while arr[leftPointer] < arr[pivotIndex] :
                leftPointer += 1

            while arr[rightPointer] > arr[pivotIndex] :
                rightPointer -= 1

            if rightPointer <= leftPointer:
                break
            else:
                temp = arr[leftPointer]
                arr[leftPointer] = arr[rightPointer]
                arr[rightPointer] = temp
                leftPointer += 1
                

        temp = arr[leftPointer]
        arr[leftPointer] = arr[pivotIndex]
        arr[pivotIndex] = temp

        sorter(arr, leftIndex, leftPointer -1 ) # left
        sorter(arr, leftPointer + 1, rightIndex)  # right

        
myArr = [2000,3,100,2,5,1,123,2039,1,33,4,55,2,44,0,0,2,3,2,1,1]
quick_sort(myArr)
print(myArr)
