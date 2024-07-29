## 😄 Question 1: The Scope Scuffle

**Let's see how well you understand JavaScript scope!**

Consider the following code snippet:

```javascript
let x = 10;
function bar() {
  console.log(x);
  let x = 20;
}
bar();
```
What will be the output of this code?

Options:

A. 10

B. 20

C. undefined

D. ReferenceError: x is not defined

<details>
<summary>Answer</summary>
Option D is correct. The output will be `ReferenceError: x is not defined`. In JavaScript, `let` and `const` variables are not hoisted in the same way as `var`. They are in a "temporal dead zone" from the start of the block until the declaration is encountered.
</details>

## 😄 Question 2: The `this` Trickery

**Can you navigate the tricky `this` context in JavaScript?**

Consider the following code snippet:

```javascript
const person = {
  name: 'Alice',
  greet: function() {
    setTimeout(function() {
      console.log('Hello, ' + this.name);
    }, 1000);
  }
};
person.greet();
```
What will be the output of this code?

Options:

A. Hello, Alice

B. Hello, undefined

C. Hello,

D. TypeError: Cannot read property 'name' of undefined

<details>
<summary>Answer</summary>
Option B is correct. The output will be `Hello, undefined`. In the `setTimeout` callback, `this` does not refer to the `person` object but to the global object (`window` in browsers), where `name` is `undefined`.
</details>

## 😄 Question 3: The IIFE Intrigue

**Let's dive into the mysteries of Immediately Invoked Function Expressions (IIFE) and variable scope!**

Consider the following code snippet:

```javascript
(function() {
  var a = b = 3;
})();
console.log(typeof a);
console.log(typeof b);
```
What will be the output of this code?

Options:

A. undefined and undefined

B. number and number

C. undefined and number

D. number and undefined

<details>
<summary>Answer</summary>
Option C is correct. The output will be `undefined` and `number`. Within the IIFE, `a` is declared with `var` and is therefore scoped to the function. However, `b` is assigned without a `var`, `let`, or `const`, making it a global variable. Outside the IIFE, `a` is `undefined`, and `b` is of type `number`.
</details>

## 😄 Question 4: The Type Coercion Conundrum

**Test your understanding of type coercion in JavaScript!**

Consider the following code snippet:

```javascript
console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);
```
What will be the output of this code?

Options:

A. 122, 32, 02, 112, NaN2, NaN

B. 32, 122, 02, 112, NaN2, NaN

C. 122, 32, 02, 112, NaN, NaN

D. 122, 32, 02, 112, NaN2, NaN2

<details>
<summary>Answer</summary>
Option A is correct. The output will be `122`, `32`, `02`, `112`, `NaN2`, `NaN`.
  
1 + "2" + "2": The number 1 is coerced to a string, resulting in "122".

1 + +"2" + "2": +"2" converts the string "2" to a number, resulting in 1 + 2 + "2", which is "32".

1 + -"1" + "2": -"1" converts the string "1" to -1, resulting in 1 - 1 + "2", which is "02".

+"1" + "1" + "2": +"1" converts the string "1" to a number, resulting in 1 + "1" + "2", which is "112".

"A" - "B" + "2": Subtracting two non-numeric strings results in NaN, and NaN + "2" is "NaN2".

"A" - "B" + 2: Subtracting two non-numeric strings results in NaN, and NaN + 2 is NaN.
</details>

## 😄 Question 5: Variable and Object Mutation

**Explore how variable assignment and object manipulation work in JavaScript!**

Consider the following code snippet:

```javascript
var x = 10;
var y = x;
y = 20;
console.log(x);

var obj1 = {a: 10};
var obj2 = obj1;
obj2.a = 20;
console.log(obj1.a);
```
What will be the output of this code?

Options:

A. 10 and 10

B. 20 and 20

C. 10 and 20

D. 20 and 10

<details>
<summary>Answer</summary>
Option C is correct. The output will be `10` and `20`.
The first console.log(x) should output 10 because x and y are primitive types, so they don't reference each other. The second console.log(obj1.a) should output 20 because objects are reference types, so obj2 and obj1 reference the same object.
</details>
