// Write a function to generate the nth Fibonacci number.

// The nth Fibonacci number is given by:

// Fn = Fn-1 + Fn-2

// The first two terms of the series are 0 and 1.

// Hence, the series is: 0, 1, 1, 2, 3, 5, 8, 13..





function fibonacci(n) {
    // Good luck!
    if (n <= 2) return 1;
    // Fn = Fn-1 + Fn-2
    const f = [0, 1, 1];
    // console.log(f)
    for(var i = 3; i <= n; i++) {
        f[i] = f[i-1] + f[i-2];
        
    }
    console.log(f)
    console.log(f[f.length-1])
    return f[f.length-2];
    
}