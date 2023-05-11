function fibonacci(num){
    if(num === 0) return 0;
    if(num === 1) return 1;
    return fibonacci(num-1) + fibonacci(num-2);
}

console.log(fibonacci(1000));

// bad algorithm, iterative approach is better
// each function call, calls the function two times
// an algorithm of O(2^n) - exponential time complexity