## 1. Default Parameters with undefined
```js
function sum(a = 5, b = 10) {
  console.log(a + b);
}
sum(undefined, 20); // Output: 25
```
**Explanation:** undefined triggers the default value, while other falsy values like null or 0 do not.

## 2. Object as Default Parameter
```js
function display({ name = "Guest" } = {}) {
  console.log(name);
}
display();           // Output: Guest
display({});         // Output: Guest
display({ name: "John" }); // Output: John
```
**Explanation:** The function uses destructuring with default values for nested properties.

## 3. Type Coercion in Comparison
```js
console.log(0 == '0');  // Output: true
console.log(0 === '0'); // Output: false
```
**Explanation:** `==` performs type coercion, while `===` checks strict equality without coercion.
