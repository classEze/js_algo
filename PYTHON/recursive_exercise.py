input = [ 1,2, 3,[4, 5, 6],7,[8,[9, 10, 11,[12, 13, 14]]],[15, 16, 17, 18, 19,[20, 21, 22,[23, 24, 25,[26, 27, 29]], 30, 31], 32], 33]
        
def printRecurse(input,index):
        if(index == len(input)):
                return
        elif(type(input[index]) is list):
                printRecurse(input[index],0)
                return printRecurse(input,index+1)
        else :
                print(input[index])
                return printRecurse(input,index+1)
        
printRecurse(input,0)

    