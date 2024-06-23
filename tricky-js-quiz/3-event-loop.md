# JavaScript Event Loop Quiz

## 🤔 Question 1: Understanding `setTimeout` and Promises

**Test your understanding of task and microtask queues!**

Consider the following code snippet:

```javascript
console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);

Promise.resolve().then(() => {
  console.log('Promise 1');
  setTimeout(() => console.log('Timeout 2'), 0);
});

Promise.resolve().then(() => console.log('Promise 2'));

console.log('End');
```
What will be the output of this code?

Options:

A. Start, Timeout 1, Promise 1, Promise 2, End, Timeout 2

B. Start, End, Promise 1, Promise 2, Timeout 1, Timeout 2

C. Start, End, Promise 1, Timeout 1, Promise 2, Timeout 2

D. Start, Promise 1, Promise 2, End, Timeout 1, Timeout 2

<details>
<summary>Answer</summary>
Option B is correct. The output will be `Start`, `End`, `Promise 1`, `Promise 2`, `Timeout 1`, `Timeout 2`. Synchronous code executes first, followed by microtasks (promises), and then tasks (setTimeout).
</details>

## 🔄 Question 2: setTimeout with 0 Milliseconds
**Why doesn't setTimeout with a 0ms delay execute immediately?**

Explain why setTimeout with a delay of 0 milliseconds does not execute immediately after the current code finishes executing.

<details>
<summary>Answer</summary>
`setTimeout` with a delay of 0 milliseconds schedules the callback to be executed after all currently pending operations in the task queue. This defers its execution but does not make it immediate. The event loop processes the task queue only after the call stack is clear and all microtasks are executed.
</details>

## 🤓 Question 3: Identifying Incorrect Statements
**Can you spot the incorrect statement about the event loop?**

Which of the following statements about the event loop is incorrect?

Options:

A. The call stack is a data structure that records where in the program we are.

B. The task queue is used to manage asynchronous operations like setTimeout and I/O tasks.

C. The microtask queue has lower priority than the task queue.

D. Promises are added to the microtask queue when resolved.

<details>
<summary>Answer</summary>
Option C is incorrect. The microtask queue actually has higher priority than the task queue.
</details>

## 🧩 Question 4: Promises and setTimeout
Let's see how well you understand promises and setTimeout!

What will be the output of the following code?

```javascript
setTimeout(() => console.log('Timeout'), 0);
Promise.resolve().then(() => console.log('Promise 1'));
Promise.resolve().then(() => {
  console.log('Promise 2');
  setTimeout(() => console.log('Timeout 2'), 0);
});
```
Options:

A. Promise 1, Promise 2, Timeout, Timeout 2

B. Timeout, Promise 1, Promise 2, Timeout 2

C. Promise 1, Timeout, Promise 2, Timeout 2

D. Promise 1, Promise 2, Timeout 2, Timeout

<details>
<summary>Answer</summary>
Option A is correct. The output will be `Promise 1`, `Promise 2`, `Timeout`, `Timeout 2`. Promises are handled in the microtask queue, which is processed before the task queue where `setTimeout` callbacks are placed.
</details>

## 🔀 Question 5: Event Order
**What is the correct order of event execution?**

In what order do these events occur if they are all triggered simultaneously?

Options:

A. I/O callbacks

B. setTimeout/setInterval callbacks

C. Promise callbacks

D. setImmediate callbacks

<details>
<summary>Answer</summary>
1. Promise callbacks (microtask queue)
2. I/O callbacks (task queue)
3. setImmediate callbacks (task queue)
4. setTimeout/setInterval callbacks (task queue)
</details>

## 🔍 Question 6: Task Queue vs Microtask Queue
**Can you explain the difference?**

Explain the difference between the task queue and the microtask queue. Why does JavaScript need both?

<details>
<summary>Answer</summary>
The task queue handles callbacks for asynchronous operations like `setTimeout` and I/O, while the microtask queue handles microtasks like resolved promises. Both are needed to prioritize critical promise resolutions before handling other tasks, ensuring more predictable and timely execution of critical code.
</details>

## 🚨 Question 7: Flooded Microtask Queue
**Understand the implications of a flooded microtask queue!**

What potential issue can arise if the microtask queue becomes flooded with resolved promises? How can this be mitigated?

<details>
<summary>Answer</summary>
If the microtask queue is flooded, it can starve the task queue, delaying `setTimeout` and I/O tasks. This can be mitigated by ensuring long-running or numerous microtasks are broken up or interleaved with task queue processing to avoid starving the task queue.
</details>

## 📋 Question 8: Code Execution Order
**Can you predict the output?**

Consider the following code snippet. What will be logged to the console?

```javascript
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
```
Options:

A. A, B, C, D

B. A, D, B, C

C. A, D, C, B

D. A, C, D, B

<details>
<summary>Answer</summary>
Option C is correct. The output will be `A`, `D`, `C`, `B`. Synchronous code (`A` and `D`) runs first, followed by microtasks (`C`), and then tasks (`B`).
</details>

## ✅ Question 9: Event Loop Behavior
**True or False?**

The event loop continuously checks both the task queue and the microtask queue to determine which callback to execute next.

<details>
<summary>Answer</summary>
False. The event loop first checks the microtask queue after executing the current task and only moves to the task queue if the microtask queue is empty.
</details>

## ⏳ Question 10: process.nextTick vs setImmediate
**Node.js specifics!**

Why might a developer use process.nextTick() in Node.js? How does it differ from setImmediate()?

<details>
<summary>Answer</summary>
`process.nextTick()` is used to schedule a callback to be invoked in the current phase of the event loop, before any I/O tasks. It differs from `setImmediate()`, which schedules a callback to be executed in the next iteration of the event loop, after I/O tasks.
</details>
