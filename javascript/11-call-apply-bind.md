# Differences Between `call()`, `apply()`, and `bind()`

## `call()`

- **Function Invocation**: `call()` is a method used to invoke a function immediately.
- **Arguments**: Allows passing arguments individually (comma-separated).
- **Execution**: Executes the function immediately with the specified `this` value.
- **Example**:
  ```javascript
  function greet(name) {
      return `Hello, ${name}!`;
  }

  console.log(greet.call(null, 'John'));
  // Output: Hello, John!
  ```
### `apply()`
- **Function Invocation:** apply() is similar to call() but allows passing arguments as an array.
- **Arguments:** Arguments are passed as an array to the function being invoked.
- **Execution:** Invokes the function immediately with the specified this value.
- **Example:**
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet.apply(null, ['Jane']));
// Output: Hello, Jane!
```
### `bind()`
- **Function Creation:** bind() does not invoke the function immediately but returns a new function.
- **Binding:** Sets the this value and initial arguments for the new function.
- **Execution:** The returned function can be invoked later.
- **Example:**
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

const boundGreet = greet.bind(null, 'Alice');
console.log(boundGreet());
// Output: Hello, Alice!
```
### Key Points:
- **Immediate Invocation:** Both call() and apply() invoke the function immediately.
- **Argument Passing:** call() passes arguments individually, while apply() passes arguments as an array.
- **Function Creation:** bind() creates a new function with preset this value and arguments, which can be invoked later.
- **Usage:** call() and apply() are useful for borrowing methods or applying functions with different contexts dynamically. bind() is commonly used for creating event handlers or callbacks where you want to preset certain parameters.
