const fibonacci = (function() {
    const memo = {};
    const fib = (n) => {
        if (n <= 1) return n;
        if (memo[n]) return memo[n];
        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    };
    return fib;
})();

// Usage
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(50)); // Output: 12586269025