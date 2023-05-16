def countFunc(input,treasure) :
    if(len(input) == 1) :
        if(input[0] == treasure) :
            return 1
        return 0 
    else :
        if(input[0] == treasure) :
            return 1 + countFunc(input[1:len(input)],treasure)
        return countFunc(input[1:len(input)],treasure)
    
print(countFunc("alabalabaa", 'a'))