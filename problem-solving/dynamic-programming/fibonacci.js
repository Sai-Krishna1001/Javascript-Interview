// Memoized Recursive Fibonacci Function
// Time Complexity: O(n)
// Space Complexity: O(n)
// Use Case: Best suited for scenarios where you need to compute the Fibonacci sequence
// multiple times, especially in environments where you can afford the extra space for memoization.
const memoizedFib = (n, memo = {}) => {
    // Check if the value is already in the memo object
    if (n in memo) return memo[n];

    // Base case: return n if it's 0 or 1
    if (n <= 1) return n;

    // Compute the Fibonacci value, store it in the memo, and return the result
    memo[n] = memoizedFib(n - 1, memo) + memoizedFib(n - 2, memo);
    return memo[n];
};

// Iterative Fibonacci Function
// Time Complexity: O(n)
// Space Complexity: O(1)
// Use Case: Best suited for scenarios where space optimization is critical,
// and you only need the Fibonacci sequence for a single calculation.
const iterativeFib = (n) => {
    // Handle the edge case where n is 0
    if (n === 0) return 0;

    // Initialize the first two Fibonacci numbers
    let [a, b] = [0, 1];

    // Compute Fibonacci iteratively for each number up to n
    for (let i = 2; i <= n; i++) {
        // Update the values of a and b to the next Fibonacci numbers
        [a, b] = [b, a + b];
    }

    // Return the nth Fibonacci number
    return b;
};

// Example Usage
console.log("Memoized Recursive Fibonacci (n=10):", memoizedFib(10)); // Output: 55
console.log("Iterative Fibonacci (n=10):", iterativeFib(10)); // Output: 55
