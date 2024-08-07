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

# Additional Advanced JavaScript Concepts for Developers

## 31. `Symbol` vs `String` keys in Objects
- **`Symbol`**: Unique and immutable primitive value, used as property keys to avoid name collisions.
- **`String`**: Commonly used property keys, can be duplicated, and can cause key collisions.

## 32. `setTimeout` vs `requestAnimationFrame`
- **`setTimeout`**: Executes a function after a specified delay, suitable for general delays.
- **`requestAnimationFrame`**: Schedules a function to run on the next repaint, ideal for animations and visual updates.

## 33. `for...in` vs `for...of` vs `Array.prototype.forEach`
- **`for...in`**: Iterates over enumerable properties of an object (including inherited properties).
- **`for...of`**: Iterates over iterable objects like arrays, strings, and maps (values only, not properties).
- **`Array.prototype.forEach`**: Iterates over array elements, does not return a new array.

## 34. `WeakMap` vs `Map`
- **`WeakMap`**: Only holds weak references to keys, allowing for garbage collection when there are no other references.
- **`Map`**: Holds strong references to keys, ensuring keys are not garbage collected.

## 35. `WeakSet` vs `Set`
- **`WeakSet`**: Collection of objects, where objects are held weakly, enabling garbage collection.
- **`Set`**: Collection of unique values, where values are held strongly.

## 36. `Proxy` vs `Reflect`
- **`Proxy`**: Allows you to define custom behavior for fundamental operations (e.g., property lookup, assignment).
- **`Reflect`**: Provides methods to perform operations on objects (e.g., getting/setting properties) similar to those defined in `Proxy`.

## 37. `Object.create` vs `class` (ES6 Classes)
- **`Object.create`**: Creates a new object with the specified prototype object and properties.
- **`class`**: ES6 syntax for creating classes, including constructors, methods, and inheritance.

## 38. `Array.prototype.flat` vs `Array.prototype.flatMap`
- **`flat`**: Flattens nested arrays into a single array up to the specified depth.
- **`flatMap`**: Maps each element using a mapping function, then flattens the result into a new array.

## 39. `async/await` vs `Promise.all`
- **`async/await`**: Simplifies asynchronous code, making it appear synchronous.
- **`Promise.all`**: Waits for all promises to resolve and returns a single promise that resolves with an array of results.

## 40. `Map` vs `Object` as Key-Value Stores
- **`Map`**: Can use any value as a key, maintains the insertion order, and has built-in methods for size and iteration.
- **`Object`**: Typically uses strings or symbols as keys, does not maintain insertion order (except in modern implementations), and has limited utility methods.

## 41. `try...catch` vs `catch` in Promises
- **`try...catch`**: Handles synchronous and asynchronous errors in `async` functions.
- **`catch` in Promises**: Handles errors in promise chains.

## 42. `Object.defineProperty` vs `Object.defineProperties`
- **`Object.defineProperty`**: Defines a single property on an object.
- **`Object.defineProperties`**: Defines multiple properties on an object.

## 43. `Event Delegation` vs `Direct Event Binding`
- **`Event Delegation`**: Attaches a single event listener to a parent element to handle events for multiple child elements.
- **`Direct Event Binding`**: Attaches event listeners to individual elements, which can lead to performance issues with many elements.

## 44. `TypeScript` vs `JavaScript`
- **`TypeScript`**: Superset of JavaScript with optional static typing, interfaces, and other features for better code quality and maintainability.
- **`JavaScript`**: A dynamic, loosely-typed language with flexible syntax and runtime errors.

## 45. `Reflect` vs `Proxy`
- **`Reflect`**: Provides methods to perform fundamental object operations.
- **`Proxy`**: Allows customization of object behavior with traps for fundamental operations.

## 46. `Service Workers` vs `Web Workers`
- **`Service Workers`**: Scriptable network proxies that enable background processes and offline capabilities.
- **`Web Workers`**: Background threads that allow running scripts in parallel without blocking the main thread.

## 47. `Template Literals` vs `String Concatenation`
- **`Template Literals`**: Allow embedded expressions and multi-line strings with the `${}` syntax.
- **`String Concatenation`**: Joins strings using the `+` operator.

## 48. `Execution Context` vs `Lexical Environment`
- **`Execution Context`**: The environment in which code is evaluated and executed, including variables, functions, and the `this` keyword.
- **`Lexical Environment`**: The environment in which a piece of code executes, including the scope of variables.

## 49. `Custom Elements` vs `Web Components`
- **`Custom Elements`**: Define new HTML elements with custom behavior.
- **`Web Components`**: A set of standards including Custom Elements, Shadow DOM, and HTML Templates for building reusable components.

## 50. `Array.prototype.reduce` vs `Array.prototype.reduceRight`
- **`reduce`**: Processes array elements from left to right.
- **`reduceRight`**: Processes array elements from right to left.


