## 1. Hoisting and `var` vs `let`
```js
console.log(a); // undefined (due to hoisting of `var a`)
var a = 5;
console.log(b); // ReferenceError: b is not defined (let is not hoisted in the same way)

let b = 10;
```

## 2. Closures in Loops
```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (Because `var` is function-scoped, `i` is the same for all iterations)
```
## 3. Type Coercion
```js
console.log(1 + "2" + "2"); // "122" (1 is coerced to string, then concatenated)
console.log(1 + +"2" + "2"); // "32" (+"2" converts to number, so 1 + 2 = 3, then concatenated with "2")
console.log(1 + -"1" + "2"); // "02" (-"1" converts to -1, so 1 - 1 = 0, then concatenated with "2")
console.log(+"1" + "1" + "2"); // "112" (+"1" converts to number, then concatenated)
console.log("A" - "B" + "2"); // "NaN2" (non-numeric strings result in NaN, concatenated with "2")
console.log("A" - "B" + 2); // NaN (non-numeric strings result in NaN, adding 2 doesn't change it)
```
## 4. IIFE and Block Scope
```js
(function() {
    var a = b = 5; // b is implicitly global, a is local to the function
})();
console.log(b); // 5 (b is global)
console.log(a); // ReferenceError: a is not defined (a is local to the IIFE)
```
## 5. Reference vs Value
```js
let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 2;

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

console.log(obj1.a); // 2 (obj1 and obj2 reference the same object)
console.log(arr1.length); // 4 (arr1 and arr2 reference the same array)
```
## 6. Truthy and Falsy
```js
console.log([] == false); // true (empty array coerces to an empty string, which is falsy)
console.log({} == false); // false (empty object doesn't coerce to a falsy value)
console.log("" == false); // true (empty string is falsy)
console.log("0" == false); // true (non-empty string "0" is coerced to 0, which is falsy)
console.log(0 == false); // true (0 is falsy)
console.log(null == false); // false (null only equals undefined or itself)
console.log(undefined == false); // false (undefined only equals null or itself)
```
## 7. Destructuring and Default Values
```js
const [a = 1, b = 2, c = 3] = [7, undefined];
console.log(a, b, c); // 7, 2, 3 (a is 7 from the array, b defaults to 2, c defaults to 3)
```
## 8. Prototype Chain
```js
const obj = {
    a: 1,
    b: function() {
        return this.a + 2;
    }
};

const newObj = Object.create(obj);
newObj.a = 5;

console.log(newObj.b()); // 7 (newObj's a is 5, so 5 + 2)
console.log(newObj.__proto__.b()); // 3 (obj's a is 1, so 1 + 2)
```
##  9. Array Mutation
```js
const array = [1, 2, 3];
const newArray = array;
newArray[0] = 99;

console.log(array[0]); // 99 (array and newArray reference the same array)
console.log(newArray === array); // true (both are the same reference)
```
## 10. Function Overloading
```js
function sum(a, b) {
    return a + b;
}

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(1, 2)); // NaN (JavaScript doesn't support function overloading, the second function overwrites the first)
console.log(sum(1, 2, 3)); // 6 (1 + 2 + 3)
```
