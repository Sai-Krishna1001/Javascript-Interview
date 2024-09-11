# Hidden Truths of Pure and Impure Functions in JavaScript

---

## 1. What is a Pure Function?

- A **pure function** is a function that always returns the same output for the same input and has no side effects.
- It relies solely on its input arguments and doesn’t affect or rely on the external state.

`` `function add(a, b) {``

`` `  return a + b;``

`` `}``

`` `console.log(add(2, 3)); // Always 5``

---

## 2. Characteristics of Pure Functions

- **Deterministic**: For the same input, it always returns the same output.
- **No Side Effects**: It doesn’t modify any external variable or state (like global variables, DOM, etc.).
- **No Dependency on Global State**: Pure functions don't rely on or modify variables outside their scope.

---

## 3. What is an Impure Function?

- An **impure function** interacts with or modifies the external state, meaning the output can vary even with the same input.

`` `let counter = 0;``

`` `function increment() {``

`` `  counter++;``

`` `  return counter;``

`` `}``

`` `console.log(increment()); // 1``

`` `console.log(increment()); // 2 (different result for the same function call)``

- Impure functions are considered less predictable due to these variations.

---

## 4. Side Effects in Impure Functions

- **Side effects** occur when a function:
  - Modifies a global variable.
  - Modifies its input arguments.
  - Performs I/O operations (like logging, writing to a file, etc.).
  - Interacts with external APIs, databases, or modifies the DOM.

`` `let name = 'John';``

`` `function changeName(newName) {``

`` `  name = newName; // Side effect: modifying external variable` ``

`` `}``

`` `changeName('Jane');``

`` `console.log(name); // 'Jane' (external state changed)``

---

## 5. Hidden Truth: Mutable vs Immutable Data

- Pure functions work best with **immutable** data structures. If you modify the input, the function becomes impure.
- Pure functions ensure immutability by returning new data instead of altering the existing one.

`` `const arr = [1, 2, 3];``

`` `function addElement(arr, elem) {``

`` `  return [...arr, elem]; // Returns a new array without modifying the original``

`` `}``

`` `const newArr = addElement(arr, 4);``

`` `console.log(arr); // [1, 2, 3] (unchanged)``

`` `console.log(newArr); // [1, 2, 3, 4] (new array)``

---

## 6. Referential Transparency

- **Pure functions** exhibit **referential transparency**: any function call can be replaced with its output value without changing the program's behavior.

`` `const square = (x) => x * x;``

`` `const result = square(5) + square(5); // Can be replaced with 25 + 25``

`` `console.log(result); // 50``

---

## 7. Pure Functions are Easy to Test

- Since pure functions don't depend on external factors, they are easier to unit test.
- You only need to check the function's return value based on given inputs.

`` `function multiply(a, b) {``

`` `  return a * b;``

`` `}``

`` `// Unit test``

`` `console.assert(multiply(2, 3) === 6);``

---

## 8. Impure Functions are Harder to Test

- Impure functions are harder to test because they involve unpredictable factors like the external environment, I/O, or global state.
- Side effects must be controlled or mocked during testing.

`` `let value = 10;``

`` `function addToValue(num) {``

`` `  value += num;``

`` `  return value;``

`` `}``

`` `// Difficult to unit test because value is not constant``

`` `console.log(addToValue(5));``

---

## 9. Pure Functions Promote Functional Programming

- Pure functions are a key concept in **functional programming**, where the focus is on composing functions without modifying external state.
- They make your code more predictable, reusable, and maintainable.

---

## 10. Avoiding Impurity: Copying Data Instead of Mutating

- One trick to avoid impure functions is to **copy** data instead of mutating it. This ensures immutability.

`` `const obj = { name: 'John' };``

`` `function changeName(newObj, newName) {``

`` `  return { ...newObj, name: newName };``

`` `}``

`` `const newObj = changeName(obj, 'Jane');``

`` `console.log(obj); // { name: 'John' } (original object is unchanged)``

`` `console.log(newObj); // { name: 'Jane' } (new object with updated name)``

---

## Conclusion

- **Pure functions** are predictable, easier to test, and free from side effects, making them ideal for functional programming.
- **Impure functions**, on the other hand, modify external states or have side effects, making them less predictable and harder to test.
- While impure functions are sometimes necessary (e.g., interacting with APIs), they should be minimized to improve code quality and maintainability.
