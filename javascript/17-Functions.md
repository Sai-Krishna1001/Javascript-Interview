# Hidden Truths of JavaScript Functions

Functions are a fundamental part of JavaScript, but they have several lesser-known behaviors and features that can catch developers off guard.

---

### 1. Functions are First-Class Citizens

In JavaScript, functions are **first-class objects**, meaning they can be:

- Assigned to variables.
- Passed as arguments to other functions.
- Returned from other functions.
- Stored in data structures like arrays or objects.

**Example:**

- `let greet = function() { return "Hello"; };`
- `console.log(greet()); // "Hello"`

Functions can also be passed as arguments:

- `function callFunction(fn) { return fn(); }`
- `console.log(callFunction(greet)); // "Hello"`

---

### 2. Functions Have `length` Property

Every function in JavaScript has a `length` property that returns the number of parameters defined in the function.

**Example:**

- `function add(a, b) { return a + b; }`
- `console.log(add.length); // 2`

This property does not count rest parameters (`...args`).

**Example:**

- `function sum(a, ...nums) { return a + nums.length; }`
- `console.log(sum.length); // 1`

---

### 3. Functions are Hoisted

Function declarations are **hoisted** to the top of their scope, meaning you can call them before they are defined in the code.

**Example:**

- `console.log(greet()); // "Hello"`
- `function greet() { return "Hello"; }`

However, function **expressions** are not hoisted in the same way. If you try to use a function expression before it is defined, you’ll get an error.

**Example:**

- `console.log(sayHi()); // Error`
- `let sayHi = function() { return "Hi"; };`

---

### 4. Arrow Functions Do Not Have `this` or `arguments`

Arrow functions do not bind their own `this` context. Instead, they inherit `this` from the surrounding lexical scope.

**Example:**

- `let obj = {`
  `name: "Alice",`
  `greet: () => console.log(this.name) // Undefined in most cases`
- `};`
- `obj.greet(); // Undefined`

Arrow functions also do not have access to the `arguments` object. They rely on the surrounding function's `arguments`.

**Example:**

- `let func = (...args) => console.log(args);`
- `func(1, 2, 3); // [1, 2, 3]`

---

### 5. Default Parameters

Functions can have **default parameters**, which will be used if no argument is passed or if `undefined` is passed.

**Example:**

- `function greet(name = "Guest") {`
  `return \`Hello, \${name}\`;`
- `}`
- `console.log(greet()); // "Hello, Guest"`

If `null` or other falsy values (except `undefined`) are passed, the default value is not used.

**Example:**

- `console.log(greet(null)); // "Hello, null"`

---

### 6. Rest Parameters (`...args`)

Rest parameters allow functions to accept an indefinite number of arguments as an array.

**Example:**

- `function sum(...nums) {`
  `return nums.reduce((a, b) => a + b, 0);`
- `}`
- `console.log(sum(1, 2, 3)); // 6`

Rest parameters must be the last parameter in a function definition.

**Example:**

- `function invalid(a, ...nums, b) {}` // Syntax Error

---

### 7. Functions Have a `prototype` Property

Every function in JavaScript (except arrow functions) has a `prototype` property. This property is used when you create objects using the `new` keyword.

**Example:**

- `function Person(name) { this.name = name; }`
- `Person.prototype.greet = function() { return "Hello, " + this.name; };`
- `let john = new Person("John");`
- `console.log(john.greet()); // "Hello, John"`

Arrow functions do not have a `prototype` property and cannot be used as constructors.

---

### 8. Functions as Constructors

Functions can be used as constructors when called with the `new` keyword. This creates an instance of the function's prototype.

**Example:**

- `function Person(name) { this.name = name; }`
- `let person1 = new Person("Alice");`
- `console.log(person1 instanceof Person); // true`

When called without `new`, the function does not create a new object, which can lead to unexpected behavior.

**Example:**

- `let person2 = Person("Bob");`
- `console.log(person2 instanceof Person); // false`

---

### 9. Self-Invoking (IIFE) Functions

A function can invoke itself immediately after being defined, known as an **Immediately Invoked Function Expression (IIFE)**.

**Example:**

- `(function() { console.log("I am an IIFE"); })();`

This is commonly used to create a private scope and avoid polluting the global namespace.

---

### 10. `call()`, `apply()`, and `bind()`

JavaScript functions have access to `call()`, `apply()`, and `bind()` methods, which allow for explicit control of `this` context.

- **`call()`** invokes a function with a specified `this` and arguments passed individually.
- **`apply()`** is similar to `call()`, but arguments are passed as an array.
- **`bind()`** creates a new function with a permanently bound `this`.

**Example:**

- `function greet() { return \`Hello, \${this.name}\`; }`
- `let user = { name: "Alice" };`
- `console.log(greet.call(user)); // "Hello, Alice"`
- `console.log(greet.apply(user)); // "Hello, Alice"`
- `let boundGreet = greet.bind(user);`
- `console.log(boundGreet()); // "Hello, Alice"`

---

### 11. `arguments` Object

In regular functions (but not arrow functions), the `arguments` object contains all the arguments passed to the function, even if they are not explicitly named in the function definition.

**Example:**

- `function sum() {`
  `let total = 0;`
  `for (let i = 0; i < arguments.length; i++) {`
  `total += arguments[i];`
  `}`
  `return total;`
- `}`
- `console.log(sum(1, 2, 3)); // 6`

In modern JavaScript, rest parameters (`...args`) are preferred over `arguments`.

---

### 12. Functions Can Return Other Functions

Functions in JavaScript can return other functions, enabling function factories and higher-order functions.

**Example:**

- `function outer() {`
  `return function inner() { return "Hello from inner"; };`
- `}`
- `let innerFunc = outer();`
- `console.log(innerFunc()); // "Hello from inner"`

---

### 13. Closures

A **closure** is created when a function remembers its surrounding lexical scope, even when called outside that scope. This allows inner functions to access variables from their outer scope.

**Example:**

- `function outer() {`
  `let count = 0;`
  `return function inner() {`
  `count++;`
  `return count;`
  `};`
- `}`
- `let counter = outer();`
- `console.log(counter()); // 1`
- `console.log(counter()); // 2`

Closures are useful for creating private variables and data encapsulation.

---

### 14. Function Name Property

Functions have a `name` property that contains the function's name. If the function is anonymous, it may return an empty string or be inferred based on the variable it’s assigned to.

**Example:**

- `function greet() {}`
- `console.log(greet.name); // "greet"`

For anonymous functions:

- `let sayHi = function() {};`
- `console.log(sayHi.name); // "sayHi"`

---

### 15. Function Scoping and `var`

Functions define a new scope in JavaScript, which means variables declared with `var` inside a function are local to that function.

**Example:**

- `function test() { var x = 10; }`
- `console.log(x); // Error, x is not defined`

However, `var` does not create block-level scope, meaning it can be accessed outside of a block inside the same function.

**Example:**

- `function test() { if (true) { var x = 10; } console.log(x); }`
- `test(); // 10`

---

### Summary Table

| Hidden Truth                                        | Explanation                                                       |
|-----------------------------------------------------|-------------------------------------------------------------------|
| Functions are first-class citizens                  | They can be passed, returned, or assigned like objects.            |
| Functions have a `length` property                  | Indicates the number of expected parameters.                      |
| Function declarations are hoisted                  | Can be called before they appear in code.                         |
| Arrow functions lack `this` and `arguments`         | Use surrounding context's `this` and don't have an `arguments` object. |
| Functions can have default parameters              | Parameters can have default values if none are provided.          |
| Rest parameters (`...args`) handle variable arguments | Allow passing an indefinite number of arguments.                  |
| Functions have a `prototype` property              | Used in constructor functions for object creation.                |
| Functions can act as constructors                  | Using `new` creates instances of functions.                       |
| Functions can be self-invoking (IIFE)              | Invokes immediately after definition.                            |
| Functions use `call()`, `apply()`, `bind()`        | Explicitly set `this` context.                                    |
| Functions can access `arguments` object            | Holds all passed arguments.                                       |
| Functions can return other functions               | Allows function factories and higher-order functions.             |
| Closures                                          | Inner functions remember the outer function's scope.              |
| Functions have a `name` property                   | Reflects the function's name or assignment.                       |
| Functions define their own scope                   | Variables declared with `var` are local to the function scope.    |

---
