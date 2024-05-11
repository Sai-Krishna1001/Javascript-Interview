## Shallow copy vs Deep Copy


### Shallow Copy:
```js
const originalArray = [1, 2, { a: 3 }];
const shallowCopy = [...originalArray];

// Modifying the shallow copy
shallowCopy[0] = 100; // Changes the shallow copy only
shallowCopy[2].a = 300; // Changes the original array since the object is nested and not deeply copied

console.log(originalArray); // Output: [1, 2, { a: 300 }]
console.log(shallowCopy); // Output: [100, 2, { a: 300 }]
```

### Deep Copy:

```js
const originalArray = [1, 2, { a: 3 }];
const deepCopy = JSON.parse(JSON.stringify(originalArray));

// Modifying the deep copy
deepCopy[0] = 100; // Changes the deep copy only
deepCopy[2].a = 300; // Does not affect the original array because it's a deep copy

console.log(originalArray); // Output: [1, 2, { a: 3 }]
console.log(deepCopy); // Output: [100, 2, { a: 300 }]

```
