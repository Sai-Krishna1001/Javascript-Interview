## 1. Challenge:

#### You have an array of user objects, each containing an `id`, `name`, and `isActive` property. Write JavaScript functions to check if a user with a specific name exists in the array using various methods🎉.

## Solutions:

### Method-1: The Traditionalist(Using a for loop)🕵️‍♂️

```js
function userExists(users, name) {
  for (let user of users) {
    if (user.name === name) {
      return true;
    }
  }
  return false;
}
```
### Method-2: The Filter-Frenzy 🎣

```js
function userExists(users, name) {
  return users.filter(user => user.name === name).length > 0;
}
```
### Method-3: The Finder 🕵️‍♀️

```js
function userExists(users, name) {
  return users.find(user => user.name === name) !== undefined;
}
```

### Method-4: The Seeker 🧐

```js
function userExists(users, name) {
  return users.findIndex(user => user.name === name) !== -1;
}
```

### Method-5: The Optimist 😎

```js
function userExists(users, name) {
  return users.some(user => user.name === name);
}
```

```js
const users = [
  { id: 1, name: 'John', isActive: true },
  { id: 2, name: 'Alice', isActive: false },
  { id: 3, name: 'Bob', isActive: true },
  { id: 4, name: 'Jane', isActive: true },
  { id: 5, name: 'Michael', isActive: false }
];

console.log(userExists(users, 'John')); //  true
console.log(userExists(users, 'Lucas')); // false

```
