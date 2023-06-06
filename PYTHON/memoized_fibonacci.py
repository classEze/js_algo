def memoized_fibonacci(n, memo = {}) :
    if n < 1 :
        return 0
    if(n < 3) :
        return 1
    if(not memo.get(n)) :
        memo[n] = memoized_fibonacci(n-1, memo) + memoized_fibonacci(n-2, memo)
    return memo[n]


myArr = []
for i in range(1,21) :
    myArr.append(memoized_fibonacci(i))

print(myArr)
