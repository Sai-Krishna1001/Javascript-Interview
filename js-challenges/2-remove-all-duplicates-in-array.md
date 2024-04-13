## 2. Challenge:

### Remove all duplicates in the array

## Solutions:

```javascript
const array = [1, 2, 3, 4, 2, 3, 5, 6, 1];
```
### Method 1: The Traditionalist (Using Set) 🧐

```js
const uniqueArray = [...new Set(array)];
```

### Method 2: The Filter-Frenzy 🎣

```js
const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
```

### Method 3: The Explorer (Using forEach) 🕵️‍♂️

```js
const uniqueArray = [];
array.forEach(item => {
  if (!uniqueArray.includes(item)) {
    uniqueArray.push(item);
  }
});
```

### Method 4: The Efficient (Using reduce) 💡

```js
const uniqueArray = array.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
```

