/*
 * Problem Statement:
 * You are given an array 'cost' where cost[i] is the cost of the ith step on a staircase.
 * Once you pay the cost, you can either climb one or two steps.
 * Your goal is to reach the top of the staircase with the minimum cost.
 * You can either start from the step with index 0, or the step with index 1.
 *
 * Return the minimum cost to reach the top of the floor.
 */

/*
 * Solution Explanation:
 * The problem is solved using a Bottom-Up Dynamic Programming approach.
 * We start from the third-to-last step and iterate backward, updating the cost array in place.
 * At each step, we add the minimum cost from the next one or two steps to the current step.
 * Finally, we return the minimum of the first two steps, as you can start from either of these.
 * 
 * Time Complexity: O(n)
 * - We iterate through the cost array once, making the time complexity linear.
 *
 * Space Complexity: O(1)
 * - The solution modifies the input array in place and doesn't use any extra space, so the space complexity is constant.
 */

var minCostClimbingStairs = function(cost) {
    // Iterate from the third-to-last step to the first step
    for (let i = cost.length - 3; i >= 0; i--) {
        // Update the current cost with the minimum cost of the next one or two steps
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }

    // Return the minimum cost between starting from the first or second step
    return Math.min(cost[0], cost[1]);
};

// Example Usage:
// const cost = [10, 15, 20];
// console.log(minCostClimbingStairs(cost)); // Output: 15

// Another Example Usage:
// const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
// console.log(minCostClimbingStairs(cost)); // Output: 6
