def firstNonDuplicate(input):
    inputDict = {}
    for i in input:
        if(inputDict.get(i)):
             inputDict[i] += 1  
        else:
            inputDict[i] = 1
    for i in inputDict:
        if(inputDict[i] == 1):
            return i
    return "No character has a count of one in the input"

print(firstNonDuplicate("racecar"))
print(firstNonDuplicate("madam"))
print(firstNonDuplicate("deified"))
