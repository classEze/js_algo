def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    return sorter(arr, 0, len(arr) - 2, len(arr) - 1)


def sorter(arr, leftPointer, rightPointer, pivotIndex):
        if leftPointer >= rightPointer:
            return

        while True:
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
                leftPointer += 1

        temp = arr[leftPointer]
        arr[leftPointer] = arr[pivotIndex]
        arr[pivotIndex] = temp

        sorter(arr, leftPointer + 1, len(arr) - 2, len(arr) - 1) # right side
        sorter(arr, 0, leftPointer - 2, leftPointer - 1) # left side

        
myArr = [2000,3,100,2, 5,1,123]
quick_sort(myArr)
print(myArr)
