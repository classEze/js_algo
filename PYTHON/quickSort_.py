def quick_sort(arr):
    if len(arr) <= 1:
        return arr

    def sorter(arr, leftPointer, rightPointer, pivotIndex):
        if leftPointer > rightPointer:
            return

        while leftPointer < rightPointer:
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

        sorter(arr, leftPointer + 1, len(arr) - 2, len(arr) - 1)
        sorter(arr, 0, leftPointer - 2, leftPointer - 1)

    return sorter(arr, 0, len(arr) - 2, len(arr) - 1)


myArr = [2, 34, 5, 7]
quick_sort(myArr)
print(myArr)
