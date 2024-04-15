## Question:
### Implement a range function

## Solutions:

### Method-1: The Traditionalist (Using a for loop) 🕰️

```js
const range1 = (start, end) => {
  let result = [];
  for (let x = start; x <= end; x++) {
    result.push(x);
  }
  return result;
}
```

### Method-2: The Iterator Magician (Using Array.from) ✨
```js
const range2 = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, index) => index + start);
}
```

### Method-3: The Optimist (Using Array.prototype.keys and Spread Operator) 🚀
```js
const range3 = (start, end) => {
  return [...Array(end - start + 1).keys()].map(ele => ele + start);
}
```
