def getTriangularNumber(n) :
    if(n == 1) :
        return 1
    return n + getTriangularNumber(n-1)
print(getTriangularNumber(7))
