def doubler(arr,index=0):
    if(index == len(arr) - 1):
        arr[index] = arr[index] * 2
        return arr
    else :
        arr[index] = arr[index] * 2
        return doubler(arr,index+1)

print(doubler([1,2,3,4,5]))
