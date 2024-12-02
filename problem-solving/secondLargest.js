function secondLargest(arr) {
    let max = -Infinity, secondMax = -Infinity;

    for (const num of arr) {
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num < max) {
            secondMax = num;
        }
    }

    return secondMax !== -Infinity ? secondMax : null; // Return null if no second largest exists
}

// Example usage:
console.log(secondLargest([1, 3, 5, 4, 2])); // Output: 4
console.log(secondLargest([10])); // Output: null
