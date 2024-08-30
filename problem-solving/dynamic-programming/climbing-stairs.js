// Problem Statement: Climbing Stairs

/**
 * You are climbing a staircase. It takes `n` steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Implement a function `climbStairs(n)` that takes the number of steps `n` and returns the number of distinct ways to reach the top.
 */

// Recursive Solution with Memoization

/**
 * @param {number} n - The number of steps to reach the top.
 * @param {Object} memo - An object to store previously calculated results.
 * @returns {number} - The number of distinct ways to climb to the top.
 */
const climbStairsWithMemo = (n, memo = {}) => {
    // Base cases
    if (n <= 1) return 1;

    // Check if result is already calculated
    if (n in memo) return memo[n];

    // Calculate the result for n and store it in memo
    memo[n] = climbStairsWithMemo(n - 1, memo) + climbStairsWithMemo(n - 2, memo);
    
    return memo[n];
};

// Example usage
console.log("Recursive Solution with Memoization:");
console.log(climbStairsWithMemo(2)); // Output: 2
console.log(climbStairsWithMemo(3)); // Output: 3
console.log(climbStairsWithMemo(4)); // Output: 5
console.log(climbStairsWithMemo(10)); // Output: 89

/**
 * Time Complexity: O(n) - Each subproblem is solved only once.
 * Space Complexity: O(n) - Due to the memoization object storing results for each step.
 */

// Iterative Solution (More Efficient in Space)

/**
 * @param {number} n - The number of steps to reach the top.
 * @returns {number} - The number of distinct ways to climb to the top.
 */
const climbStairsIterative = (n) => {
    if (n <= 1) return 1;

    let prev1 = 1; // n-1 steps
    let prev2 = 1; // n-2 steps

    for (let i = 2; i <= n; i++) {
        [prev1, prev2] = [prev2, prev1 + prev2]; 
    }

    return prev2;
};

// Example usage
console.log("Iterative Solution:");
console.log(climbStairsIterative(2)); // Output: 2
console.log(climbStairsIterative(3)); // Output: 3
console.log(climbStairsIterative(4)); // Output: 5
console.log(climbStairsIterative(10)); // Output: 89

/**
 * Time Complexity: O(n) - Each step from 2 to `n` is computed in sequence.
 * Space Complexity: O(1) - Only a few variables are used, independent of `n`.
 */
