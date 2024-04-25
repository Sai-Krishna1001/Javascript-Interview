### Question-5.1: You have a nested array nestedArray containing both numbers and arrays. You need to write a function flattenArray(arr) that takes this nested array as input and returns a flattened array where all nested arrays are flattened to a single level. Implement the flattenArray function using recursion.

### Solution:

### Method-1: Without using flat() method

```js
const nestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

function flattenArray(array) {
    return array.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val), []);
}


const flatArray = flattenArray(nestedArray);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
### Method-2: using flat() method

```js
const nestedArray = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(nestedArray.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 5.2 Question: How would you implement a custom flat() method that also removes duplicate values from the flattened array? 

### Solution:

```js
function customFlatUnique(arr) {
  const flatArray = arr.flat(Infinity);
  return [...new Set(flatArray)];
}

const arrayWithDuplicates = [1, [2, 3], [2, [4, [5, 3]]]];
console.log(customFlatUnique(arrayWithDuplicates)); // [1, 2, 3, 4, 5]
```
