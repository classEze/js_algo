def quickSort(inputArr) :
     leftArr = [] 
     rightArr = []
     if(len(inputArr) < 2) :
         return inputArr
     
     pivot = inputArr[len(inputArr) - 1]

     for i in range(len(inputArr) - 1) :
          if(inputArr[i] < pivot):
            leftArr.append(inputArr[i])
          else :
              rightArr.append(inputArr[i])

     return  quickSort(leftArr) + [pivot] + quickSort(rightArr)


print(quickSort([100,0,32,3,4,55,2,44,5,6,7]))
