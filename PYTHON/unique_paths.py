def unique_paths(rows, columns, memo = {}) :
    if (rows == 1 or columns == 1) :
        return 1
    
    if(memo.get("{},{}".format(rows,columns))) :
        return memo["{},{}".format(rows,columns)]
    
    else :
        memo["{},{}".format(rows,columns)] = unique_paths(rows - 1, columns, memo) + unique_paths(rows, columns - 1, memo)
        return memo["{},{}".format(rows,columns)]
    

print(unique_paths(2,3))