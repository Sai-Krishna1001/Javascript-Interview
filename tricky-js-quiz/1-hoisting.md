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

## 😄 Question 6: Tricky Hoisting

**Let's spice things up with a tricky hoisting scenario!**

Consider the following code snippet:

```javascript
var y = 10;

function bar() {
  if (!y) {
    var y = 20;
  }
  console.log(y);
}

bar();
```
What will be the output of this code?

Options:

A. 10

B. undefined

C. 20

D. ReferenceError: y is not defined

<details>
<summary>Answer</summary>
Option C is correct. The output will be `20`. 

In this scenario, the variable `y` is declared using `var`, which means it is function-scoped. However, JavaScript hoists the declaration of `y` to the top of the `bar()` function, regardless of where it's declared within the function.

When the `bar()` function is called, the interpreter encounters the `if` statement. Despite the condition `!y`, the variable `y` has been declared within the function scope, so it's considered truthy. As a result, the code inside the `if` block executes, and the assignment `y = 20;` takes place, updating the value of `y`.

Therefore, when `console.log(y)` is executed, it refers to the `y` variable declared in the outer scope, which has been reassigned the value `20` inside the `if` block. Thus, the output of the code is `20`.
</details>

## 😄 Question 7: Tricky Hoisting Revisited

**Let's dive into another tricky hoisting scenario!**

Consider the following code snippet:

```javascript
var y = 10;

function bar() {
  if (!10) {
    var y = 20;
  }
  console.log(y);
}

bar();
```
What will be the output of this code?

Options:

A. 10

B. undefined

C. 20

D. ReferenceError: y is not defined

<details>
<summary>Answer</summary>
Option B is correct. The output will be `undefined`.

In this scenario, despite the presence of the `if` statement with the condition `!10`, JavaScript doesn't evaluate whether `10` is falsy. Instead, it checks if `10` is truthy, which it is. Therefore, the code block inside the `if` statement (`var y = 20;`) is not executed.

However, it's crucial to understand the scoping behavior of the variable `y`. The `var y = 20;` declaration is hoisted to the top of the function scope, but the assignment `y = 20;` remains inside the `if` block. 

Since the assignment `y = 20;` is not executed, the variable `y` remains uninitialized inside the function scope. Therefore, when `console.log(y)` is executed, it refers to the `y` variable declared at the top of the function scope, which hasn't been assigned a value yet, resulting in `undefined`.

Thus, the output of the code is `undefined`.
</details>

## 😄 Question 8: The Mysterious Hoist

**Prepare yourself for another mind-bending hoisting challenge!**

Consider the following code snippet:

```javascript
function mystery() {
  console.log(x);
  var x = 10;
  console.log(x);
}

mystery();
```

What will be the output of this code?

Options:

A. undefined and 10

B. 10 and 10

C. ReferenceError: x is not defined and 10

D. undefined and undefined

<details>
<summary>Answer</summary>
Option A is correct. The output will be `undefined` and `10`.
In this scenario, despite x being logged before its assignment, the variable x is hoisted to the top of the mystery() function scope due to the var keyword. However, only the declaration is hoisted, not the assignment. Therefore, when console.log(x) is executed for the first time, x is declared but not yet assigned a value, resulting in undefined.

Subsequently, when console.log(x) is executed again after the assignment var x = 10;, x now holds the value 10, resulting in the second output being 10.

Thus, the output of the code is undefined and 10.

</details>
