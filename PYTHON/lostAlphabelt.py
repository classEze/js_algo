

def findMissingAlpha(input):
    inputDict = {}
    alphabelts = [
                  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
                  ]
    for i in input:
        if(not i.isspace()):
            inputDict[i] = True
    print(len(inputDict))
    for i in alphabelts:
        if( not inputDict.get(i)):
           return i
    return "Everywhere good"

print(findMissingAlpha("the quick brown box jumps over a lazy dog"))
