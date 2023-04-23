from tkinter import FALSE


def bubble_sort(arr):
    sorted = FALSE
    unsortedIndex = len(arr) - 1
    while not sorted:
        sorted = True
        for i in range(unsortedIndex):
            sorted = True
            if(arr[i+1] < arr[i]):
                next = arr[i+1]
                arr[i+1] = arr[i]
                arr[i]= next
                sorted = FALSE
                i +=1
        unsortedIndex -=1
    return arr
    

print(bubble_sort([5,4,3,2,1]))