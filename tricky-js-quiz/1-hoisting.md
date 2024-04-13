# JavaScript Hoisting Quiz

Test your understanding of hoisting in JavaScript with these quiz questions!

## 😄 Question 1: The Hoisting Hustle

**Let's dive into the world of hoisting in JavaScript! What's the scoop?**

Options:

A. 🛫 Hoisting is the process of lifting heavy objects with JavaScript.

B. 📦 Hoisting involves moving variable and function declarations to the top of their containing scope.

C. 🏋️‍♂️ Hoisting is the act of lifting weights while coding in JavaScript.

D. 🚀 Hoisting is like launching your code into outer space.

<details>
<summary>Answer</summary>
Option B is correct. Hoisting in JavaScript involves moving variable and function declarations to the top of their containing scope.
</details>

---

## 😄 Question 2: The Hoisting Hurdle

**Ready to tackle another hoisting challenge? Let's go!**

Consider the following code snippet:

```javascript
console.log(x);
var x = 10;
```
What will be the output of this code?

Options:

A. ReferenceError: x is not defined

B. undefined

C. null

D. 10

<details>
<summary>Answer</summary>
Option B is correct. The output will be `undefined`. In JavaScript, variable declarations are hoisted to the top of their scope, but their assignments remain at their original position.
</details>

## 😄 Question 3: The Hoisting Hiccup

**Time for another hoisting challenge! Can you predict the outcome?**

Consider the following code snippet:

```javascript
console.log(x);
x = 10;
```
What will be the output of this code?

Options:

A. ReferenceError: x is not defined

B. undefined

C. null

D. 10

<details>
<summary>Answer</summary>
Option A is correct. The code will throw a `ReferenceError` because `x` is being accessed before it's declared. In JavaScript, only variable declarations are hoisted, not their assignments.
</details>

## 😄 Question 4: The Function Hoist

**Time to test your understanding of function hoisting!**

Consider the following code snippet:

```javascript
foo();

function foo() {
  console.log("Hello, world!");
}
```
What will be the output of this code?

Options:

A. ReferenceError: foo is not defined

B. undefined

C. Hello, world!

D. null

<details>
<summary>Answer</summary>
Option C is correct. The output will be `Hello, world!`. In JavaScript, function declarations are hoisted along with their definitions, allowing you to call a function before its declaration in the code.
</details>

## 😄 Question 5: Hoisting Order

**Let's see if you can determine the order of hoisting in a more complex scenario!**

Consider the following code snippet:

```javascript
var x = 10;

function foo() {
  console.log(x);
}

foo();

var x = 20;
```
What will be the output of this code?

Options:

A. 10

B. undefined

C. 20

D. ReferenceError: x is not defined

<details>
<summary>Answer</summary>
Option A is correct. The output will be `10`. In JavaScript, variable declarations are hoisted to the top of their containing scope. So, when `foo()` is called, it logs the value of `x`, which is 10 because the `var x = 10;` declaration is hoisted to the top of the code.
</details>
