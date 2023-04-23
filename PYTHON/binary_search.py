def binary_search (arr,value):
    start = 0
    end = len(arr) - 1
    mid = (start + end ) / 2
    while (end > start):
        if(arr[mid] === value ):
            return mid;

