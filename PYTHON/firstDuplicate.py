def firstDuplicate(arr):
    arrDict = {}
    for i in range(len(arr)):
        if(arrDict.get(arr[i])):
            return arr[i]
        arrDict[arr[i]] = True
    return "No duplicates found, okay"

print(firstDuplicate([2,3,5,6,4,2,3]))

# dictionary = {}
# dictionary['me'] = "Eze"
# dictionary['you'] = "Stranger"
# dictionary['him'] = "Efe"
# dictionary['her'] = "Sarah"

# if(dictionary.get("her")):
#     print("Owa ooo")
# else:
#     print("Kosi")
