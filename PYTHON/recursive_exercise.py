def printRecurse():
        input = [ 1,
                        2,
                        3,
                        [4, 5, 6],
                        7,
                        [8,
                        [9, 10, 11,
                        [12, 13, 14]
                        ]
                        ],
                        [15, 16, 17, 18, 19,
                        [20, 21, 22,
                        [23, 24, 25,
                        [26, 27, 29]
                        ], 30, 31
                        ], 32
                        ], 33
                ]
        printFunction(input,0)
        
def printFunction(input,index):
        if(index == len(input-1)):
                return
        elif(type(input[index]) == "<class 'list'>"):
                print("Found")
                printFunction(input[index],0)
                return printFunction(input,index+1)
        else :
                print(input[index])
                return printFunction(input,index+1)
        
printRecurse()

    