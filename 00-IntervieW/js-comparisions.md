# Tricky JavaScript Difference Questions for Product-Based Companies

## 1. `var`, `let`, and `const`
- **`var`**: Function scope, hoisting, can be redeclared.
- **`let`**: Block scope, no redeclaration, can be reassigned.
- **`const`**: Block scope, no redeclaration, no reassignment (but object properties can be mutated).

## 2. `==`, `===`, and `Object.is()`
- **`==`**: Abstract equality, type coercion.
- **`===`**: Strict equality, no type coercion.
- **`Object.is()`**: Similar to `===` but treats `NaN` as equal to `NaN` and `-0` as not equal to `+0`.

## 3. `null` vs `undefined` vs `undeclared`
- **`null`**: Intentional absence of value, explicitly assigned.
- **`undefined`**: Variable declared but not assigned a value.
- **`undeclared`**: Variable not declared, throws `ReferenceError` when accessed.

## 4. `call` vs `apply` vs `bind`
- **`call`**: Invokes function immediately, arguments passed individually.
- **`apply`**: Invokes function immediately, arguments passed as an array.
- **`bind`**: Returns a new function with `this` bound, does not invoke immediately.

## 5. `map` vs `forEach` vs `reduce`
- **`map`**: Returns a new array, does not modify the original array.
- **`forEach`**: Iterates over array elements, does not return anything.
- **`reduce`**: Reduces array to a single value, customizable accumulator.

## 6. `slice` vs `splice`
- **`slice`**: Returns a shallow copy of a portion of an array, does not modify the original array.
- **`splice`**: Adds/removes elements, modifies the original array.

## 7. `function` vs `=>` (arrow function)
- **Function Declaration/Expression**: Creates a new `this` context, `arguments` object available.
- **Arrow Function**: Lexical `this` binding, no `arguments` object, concise syntax.

## 8. `Promise.then` vs `async/await`
- **`Promise.then`**: Chainable, older syntax for handling asynchronous operations.
- **`async/await`**: Syntactic sugar over Promises, more readable and synchronous-looking code.

## 9. `Object.freeze` vs `Object.seal` vs `Object.preventExtensions`
- **`Object.freeze`**: Makes object immutable, no changes allowed.
- **`Object.seal`**: Prevents adding/removing properties, but allows modification of existing properties.
- **`Object.preventExtensions`**: Prevents adding new properties, but allows modification and deletion of existing properties.

## 10. `for...in` vs `for...of`
- **`for...in`**: Iterates over enumerable properties of an object (including inherited properties).
- **`for...of`**: Iterates over iterable objects like arrays, strings, maps, sets (values only, not properties).

## 11. `setTimeout` vs `setInterval`
- **`setTimeout`**: Executes a function after a specified delay (one-time execution).
- **`setInterval`**: Executes a function repeatedly at specified intervals.

## 12. `document.querySelector` vs `document.getElementById` vs `document.getElementsByClassName`
- **`querySelector`**: Returns the first element that matches the CSS selector.
- **`getElementById`**: Returns the element with the specified ID.
- **`getElementsByClassName`**: Returns a live HTMLCollection of elements with the specified class name.
