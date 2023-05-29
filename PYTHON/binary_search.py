import math


def binary_search (arr,value) :
    start = 0
    end = len(arr) - 1
    while (end >= start) :
        mid = math.floor((start + end ) / 2)
        if(arr[mid] == value ) :
            return mid
        elif arr[mid] > value :
            end = mid - 1
        else :
            start = mid + 1

    return -1

print(binary_search([2,3,4,5,6,7,8,55,67], 13))

