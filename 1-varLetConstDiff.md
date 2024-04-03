# 1. Difference between var, let and const

* In JavaScript, var, let, and const are all used for variable declaration, but they have some key differences and limitations. Here's a breakdown of each with examples:

## 1.1 var
### Function-scoped: 
  * Variables declared with var are function-scoped. They are visible throughout the function in which they are defined, even if they are declared within a block (e.g., if, for, while).

### Can be redeclared and reassigned: 
  * Variables declared with var can be redeclared and reassigned within their scope.

```js
function example() {
  var x = 10;
  if (true) {
    var x = 20; // This reassigns the outer 'x'
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}
example();

```

## 1.2 let
### Block-scoped: 
  * Variables declared with let are block-scoped. They are only visible within the block they're defined in (e.g., if, for, while).
### Cannot be redeclared, but can be reassigned: 
  * Variables declared with let cannot be redeclared within the same scope, but they can be reassigned.

```js
let y = 10;
if (true) {
  let y = 20; // This creates a separate 'y' variable in this block
  console.log(y); // Output: 20
}
console.log(y); // Output: 10

```

## 1.3 const
### Block-scoped: 
*  Like let, variables declared with const are block-scoped.
### Cannot be reassigned or redeclared: 
 *  Variables declared with const cannot be reassigned or redeclared. However, note that if a const variable holds an object or array, the properties or elements of that object or array can be modified.

```js
const z = 10;
// z = 20; // This would throw an error because you can't reassign a constant
const obj = { key: 'value' };
obj.key = 'new value'; // This is allowed
console.log(obj.key); // Output: 'new value'

```
## 1.4 Limitations of var, let, and const:

### 1.4.1 Hoisting: 
* All three are hoisted to the top of their containing function or block, but var variables are initialized with undefined, while let and const variables are not initialized until their declaration is evaluated.

```js
console.log(a); // Output: undefined
var a = 10;

console.log(b); // Output: ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c); // Output: ReferenceError: Cannot access 'c' before initialization
const c = 30;

```
### 1.4.2 Temporal Dead Zone (TDZ): 
* let and const variables are not accessible before their declaration and accessing them will result in a ReferenceError.

``` js
console.log(x); // Output: ReferenceError: Cannot access 'x' before initialization
let x = 10;

console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
const y = 20;

```
### 1.4.3 var does not throw errors for redeclaration: 
* Unlike let and const, var allows redeclaration within the same scope without throwing errors.
```js
var z = 10;
var z = 20; // No error thrown
console.log(z); // Output: 20

```
### 1.4.4 const for objects and arrays does not make them immutable: 
* While const prevents reassignment of the variable itself, it does not make the object or array immutable. Properties of objects and elements of arrays can still be modified.
```js
const person = { name: 'John' };
person.name = 'Jane'; // This is allowed
console.log(person.name); // Output: 'Jane'

const numbers = [1, 2, 3];
numbers.push(4); // This is allowed
console.log(numbers); // Output: [1, 2, 3, 4]
```
## 1.5 Summary
* var: Globally/function scoped, can be re-declared and updated.

* let: Block scoped, can be updated but not re-declared.

* const: Block scoped, cannot be updated or re-declared
