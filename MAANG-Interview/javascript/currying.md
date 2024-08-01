```js
// The curry function takes a function `f` as an argument and returns a new function `curried`
function curry(f) {
  return function curried(...args) {
    // Use the conditional operator to check if enough arguments have been provided
    return args.length >= f.length
      ? f(...args) // If enough arguments, call the original function `f` with all arguments
      : (...nextArgs) => curried(...args, ...nextArgs); // If not, return a new function to collect more arguments
  };
}

// Example function `sum` that takes three arguments and returns their sum
function sum(a, b, c) {
  return a + b + c;
}

// Create a curried version of the `sum` function
const curriedSum = curry(sum);

// Call the curried function with arguments one by one
const result = curriedSum(1)(2)(3);

// Output the result to the console
console.log(result); // Output: 6

```
