## 2. What is a Pure Function?

* A pure function is a function that always returns the same output given the same input.

### 2.1  Key characteristics of pure functions:

* The return value solely depends on the input arguments.

* It does not modify any non-local state (external variables or data).

* It does not produce any side effects, such as network requests, data mutation, or printing to the console.

### 2.2 Examples of Pure Functions:
### Example 1:
### // Pure function: calculateGST always returns the same result for the same input
```js
function calculateGST(productPrice) {
  return productPrice * 0.05;
}
console.log(calculateGST(15)); // Output: 0.75
```
In this example, calculateGST is pure because its output depends only on the input productPrice.

### Example 2:

### // Not a pure function: The output depends on an external variable "tax"
```js
let tax = 20;
function calculateGST(productPrice) {
  return productPrice * (tax / 100) + productPrice;
}
console.log(calculateGST(15)); // Output: 18
```
Here, calculateGST is not pure because it relies on the external variable tax.

### 2.3 Side Effects to Avoid:
#### To maintain purity, a function should avoid the following side effects:

* Making HTTP requests.

* Mutating data.

* Printing to the screen or console.

* DOM manipulation.

* Using Math.random().

* Getting the current time.

#### Remember, pure functions are predictable, easier to test, and contribute to more maintainable code.
