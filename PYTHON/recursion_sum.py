def sumArr(arr) :
    if len(arr) == 1 :
     return arr[0]
    return arr[0] + sumArr(arr[1:len(arr)])

print(sumArr([4,56]))