def add_until_100(arr) :
    if len(arr) == 0 :
        return 0
    additionFromIndexOne = add_until_100(arr[1:len(arr)])
    if(arr[0] + additionFromIndexOne) > 100 :
        return additionFromIndexOne
    else :
        return arr[0] + additionFromIndexOne
    
print(add_until_100([40,50,10,20]))
    

   