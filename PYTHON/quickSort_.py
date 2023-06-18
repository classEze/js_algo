def quick_sort(arr):
    return sorter(arr, 0, len(arr) - 1)


def sorter(arr, leftPointer, pivotIndex):
        rightPointer = pivotIndex - 1

        if leftPointer > rightPointer :
            return arr
        
        while leftPointer < rightPointer :
            while arr[leftPointer] < arr[pivotIndex]:
                leftPointer += 1

            while arr[rightPointer] > arr[pivotIndex]:
                rightPointer -= 1

            if rightPointer <= leftPointer:
                break
            else:
                temp = arr[leftPointer]
                arr[leftPointer] = arr[rightPointer]
                arr[rightPointer] = temp
                

        temp = arr[leftPointer]
        arr[leftPointer] = arr[pivotIndex]
        arr[pivotIndex] = temp

        sorter(arr, leftPointer + 1, len(arr) - 1) # left
        sorter(arr, leftPointer, leftPointer - 1)  # right

        
myArr = [2000,3,100,2,5,1,123]
quick_sort(myArr)
print(myArr)
