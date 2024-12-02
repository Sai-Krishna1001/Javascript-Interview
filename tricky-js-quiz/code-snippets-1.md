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

## 4. Quirks with typeof
 ```js
console.log(typeof null);       // Output: object
console.log(typeof undefined);  // Output: undefined
console.log(typeof NaN);        // Output: number
```
**Explanation:** These are quirks of the JavaScript language.

## 5. Object and Array Destructuring
```js
const [a, b = 2] = [1];
console.log(a, b); // Output: 1, 2

const { x = 5, y } = { y: 10 };
console.log(x, y); // Output: 5, 10
```
**Explanation:** Default values in destructuring apply when no value is provided.

## 6. String to Number Conversion
```js
console.log(+"42");  // Output: 42 (number)
console.log(+true);  // Output: 1
console.log(+false); // Output: 0
console.log(+null);  // Output: 0
console.log(+"abc"); // Output: NaN
```
**Explanation:** The unary + operator converts its operand to a number.

## 7. Dynamic Properties in Objects
```js
const key = 'dynamic';
const obj = {
  [key]: 'value',
  ['hello' + 'World']: 42,
};
console.log(obj); // Output: { dynamic: 'value', helloWorld: 42 }
```
**Explanation:** Computed property names allow dynamic key creation.

