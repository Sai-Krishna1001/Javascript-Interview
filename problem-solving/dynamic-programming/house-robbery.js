/*
 * Problem Statement:
 * You are a professional robber planning to rob houses along a street. 
 * Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that 
 * adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
 * Given an integer array 'nums' representing the amount of money of each house, 
 * return the maximum amount of money you can rob tonight without alerting the police.
 */

/*
 * Solution Explanation:
 * The problem can be solved using Dynamic Programming. The key observation here is that for each house, 
 * you have two choices: 
 * 1. Rob the current house and skip the previous one.
 * 2. Skip the current house and take whatever amount was robbed until the previous house.
 *
 * For each house i, the maximum amount you can rob is the maximum of:
 * - Robbing the current house `i` (i.e., the amount at `nums[i]` + the maximum you could rob until `i-2`).
 * - Skipping the current house `i` (i.e., taking the maximum you could rob until `i-1`).
 *
 * Time Complexity: O(n)
 * - We iterate through the array once to compute the maximum possible robbed amount.
 *
 * Space Complexity: O(1)
 * - We only store the previous two maximum values, hence the space complexity is constant.
 */

var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    let prev1 = 0; // Represents the max value we can rob up to the previous house
    let prev2 = 0; // Represents the max value we can rob up to the house before the previous one

    for (let i = 0; i < nums.length; i++) {
        // Current max robbed value is either the previous max (without robbing current house)
        // or robbing the current house and adding it to the max amount robbed up to the house two steps before
        let temp = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1; // Shift prev2 to the previous house's max
        prev1 = temp;  // Shift prev1 to the current house's max
    }

    return prev1; // This will store the final maximum value
};

// Example Usage:
// const houses = [2, 7, 9, 3, 1];
// console.log(rob(houses)); // Output: 12

// Another Example Usage:
// const houses = [1, 2, 3, 1];
// console.log(rob(houses)); // Output: 4
