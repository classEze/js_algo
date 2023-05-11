def selectionSort(arr):
    highestIndex = len(arr)
    for i in range(highestIndex - 1):
        lowestIndex = i
        for j in range(i+1,highestIndex):
            if(arr[j] < arr[lowestIndex]):
                lowestIndex = j
        if(i != lowestIndex):
            lowestVal = arr[lowestIndex]
            arr[lowestIndex] = arr[i]
            arr[i] = lowestVal
    return arr
print(selectionSort([23,45,6,7,89,12,3,5,7,8,1]))
               