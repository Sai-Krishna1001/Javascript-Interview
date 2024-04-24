## Question-5.1: 
### You have a nested array nestedArray containing both numbers and arrays. You need to write a function flattenArray(arr) that takes this nested array as input and returns a flattened array where all nested arrays are flattened to a single level. Implement the flattenArray function using recursion.

## Solution:

```js
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];

function flattenArray(array) {
    return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}


const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
```
