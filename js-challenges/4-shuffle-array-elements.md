## Write a function to implements the shuffle the elements of an array

### Method-1: The Traditionalist (Using Fisher-Yates Algorithm) 🎲

```js
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

### Method-2: Using Array.reduce 🌟

```js
const shuffle = (array) => {
  return array.reduce((acc, _, i) => {
    const j = Math.floor(Math.random() * (i + 1));
    [acc[i], acc[j]] = [acc[j], acc[i]];
    return acc;
  }, [...array]);
}
```
### Method-3: The Iterator Magician (Using Array.from and Array.sort) ✨

```js
const shuffle = (array) => {
  return Array.from(array).sort(() => Math.random() - 0.5);
}
```
