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

# Advanced JavaScript Difference Questions for Product-Based Companies

## 13. `Object.keys` vs `Object.values` vs `Object.entries`
- **`Object.keys`**: Returns an array of a given object's property names.
- **`Object.values`**: Returns an array of a given object's property values.
- **`Object.entries`**: Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.

## 14. `Function.prototype.call` vs `Function.prototype.apply` vs `Function.prototype.bind`
- **`call`**: Invokes the function with a given `this` value and arguments provided individually.
- **`apply`**: Invokes the function with a given `this` value and arguments provided as an array.
- **`bind`**: Returns a new function with a given `this` value and pre-specified initial arguments.

## 15. `==` vs `===` vs `Object.is()`
- **`==`**: Abstract equality comparison with type coercion.
- **`===`**: Strict equality comparison without type coercion.
- **`Object.is()`**: More precise comparison, treating `NaN` as equal to `NaN` and `-0` as not equal to `+0`.

## 16. `event.stopPropagation` vs `event.preventDefault` vs `return false`
- **`stopPropagation`**: Stops the event from propagating further up or down the DOM tree.
- **`preventDefault`**: Prevents the default action associated with the event.
- **`return false`**: Stops event propagation and prevents default action in jQuery, not a standard.

## 17. `import` vs `require`
- **`import`**: ES6 module syntax, statically analyzed and imports can be optimized.
- **`require`**: CommonJS module syntax, dynamically loaded at runtime.

## 18. `shallow copy` vs `deep copy`
- **Shallow Copy**: Copies an object's properties directly, but nested objects are shared references.
- **Deep Copy**: Recursively copies all nested objects, creating new instances for each.

## 19. `Promise.all` vs `Promise.race`
- **`Promise.all`**: Resolves when all promises in the iterable resolve, or rejects if any promise rejects.
- **`Promise.race`**: Resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

## 20. `throw` vs `return`
- **`throw`**: Exits the current function and propagates the error up the call stack.
- **`return`**: Exits the current function and returns a value.

## 21. `Object.assign` vs Spread Operator `{...}`
- **`Object.assign`**: Copies enumerable own properties from source objects to a target object.
- **Spread Operator `{...}`**: Spreads own enumerable properties of an object into a new object.

## 22. `prototype` vs `__proto__`
- **`prototype`**: Property of constructor functions, used for inheritance.
- **`__proto__`**: Internal property pointing to the prototype object of the constructor function.

## 23. `var hoisting` vs `let hoisting`
- **`var hoisting`**: Declarations are hoisted and initialized with `undefined`.
- **`let hoisting`**: Declarations are hoisted but not initialized, leading to a temporal dead zone.

## 24. `sync` vs `async` vs `defer` attributes in `<script>` tags
- **`sync`**: Default behavior, blocks HTML parsing while script is executed.
- **`async`**: Script is fetched asynchronously and executed as soon as it is available.
- **`defer`**: Script is fetched asynchronously and executed after HTML parsing is complete.

## 25. `module.exports` vs `exports`
- **`module.exports`**: The object that gets returned when `require()` is called.
- **`exports`**: A shorthand for `module.exports`, can be used to add properties to the export object.

## 26. `__proto__` vs `Object.getPrototypeOf`
- **`__proto__`**: Legacy accessor to the prototype object.
- **`Object.getPrototypeOf`**: Standard method to get the prototype of an object.

## 27. `console.log` vs `console.dir`
- **`console.log`**: Logs a message or variable.
- **`console.dir`**: Displays an interactive list of the properties of the specified JavaScript object.

## 28. `WeakMap` vs `Map`
- **`WeakMap`**: Keys are objects, and they are weakly held (garbage-collected if no other references).
- **`Map`**: Keys can be any value, and they are strongly held.

## 29. `WeakSet` vs `Set`
- **`WeakSet`**: Collection of objects, weakly held.
- **`Set`**: Collection of unique values, strongly held.

## 30. `Function` vs `Generator Function`
- **Function**: Regular function, executes completely when called.
- **Generator Function**: Can pause its execution and resume later, returns an iterator object.

