## 4. What is the Nullish Coalescing Operator ```??``` ?
* The ```??``` operator is a logical operator introduced in ECMAScript 2020 (ES11).

* It provides a concise way to handle null or undefined values.

### 4.1 How Does It Work?
* The nullish coalescing operator returns its right-hand side operand when its left-hand side operand is null or undefined.
* Otherwise, it returns its left-hand side operand.
### 4.2 Example:
```js
const username = null;
const defaultName = "Guest";

const displayName = username ?? defaultName;
console.log(displayName); // Output: "Guest"
```
* In this example, displayName will be "Guest" because username is null.
### 4.3 Use Cases:
* Default Values: It’s commonly used to provide default values when a variable might be null or undefined.

* Avoiding Falsy Values: Unlike the logical OR (||) operator, which considers falsy values (e.g., empty strings, 0, false) as well, ?? only checks for nullish values.
### 4.4 Comparison with Logical OR (||):
* The || operator returns the right-hand side operand if the left-hand side is falsy (including empty strings, 0, and false).

* The ?? operator only considers null or undefined as falsy values.
### 4.5 Summary:
* The nullish coalescing operator is a handy addition to JavaScript for handling default values and ensuring that nullish values are properly handled.
