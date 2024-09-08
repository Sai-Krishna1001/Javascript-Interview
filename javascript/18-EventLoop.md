# Hidden Truths of the JavaScript Event Loop

The JavaScript **event loop** is a crucial concept for understanding asynchronous behavior in JavaScript. It is responsible for handling execution of code, events, and callbacks in a non-blocking way, but its inner workings are often misunderstood.

---

### 1. JavaScript is Single-Threaded

JavaScript runs on a **single-thread**, meaning it can only do one task at a time. However, JavaScript can handle asynchronous operations, making it seem like it's doing multiple things at once.

- The event loop enables JavaScript to perform non-blocking operations, despite being single-threaded.

---

### 2. Call Stack and Event Loop Relationship

- The **call stack** is where function calls are made and executed. Each function call is added to the stack, and when it finishes, it is removed from the stack.
- The **event loop** continuously checks if the call stack is empty. When the stack is empty, it processes events from the **callback queue** or **task queue**.

Example:

`` `console.log('Start');``

`` `setTimeout(() => { console.log('Timeout'); }, 0);``

`` `console.log('End');``

Output:

`` `Start``

`` `End``

`` `Timeout``

Even though `setTimeout` has `0` delay, it is processed after synchronous code because the event loop only processes the callback queue once the call stack is empty.

---

### 3. Microtasks vs Macrotasks

JavaScript has two types of task queues:

- **Macrotasks** (Task Queue): Tasks like `setTimeout`, `setInterval`, and I/O operations. These are processed after the current stack of code completes.
- **Microtasks** (Microtask Queue): Tasks like `Promises`, `MutationObserver`, or `process.nextTick` in Node.js. These have higher priority and are processed after the current operation but before any macrotasks.

Example:

`` `console.log('Start');``

`` `setTimeout(() => console.log('Macrotask'), 0);``

`` `Promise.resolve().then(() => console.log('Microtask'));``

`` `console.log('End');``

Output:

`` `Start``

`` `End``

`` `Microtask``

`` `Macrotask``

Microtasks have a higher priority than macrotasks, meaning they are executed right after the current stack is done but before any macrotasks.

---

### 4. The `setTimeout` Minimum Delay is Not Guaranteed

The `setTimeout` function allows you to delay execution for a set amount of time, but the delay isn't guaranteed. The delay you specify is the minimum time the event will wait before being added to the task queue, but actual execution might happen later depending on other queued tasks.

Example:

`` `setTimeout(() => { console.log('This will run after at least 100ms'); }, 100);``

In practice, the event loop and tasks in the queue can delay execution beyond the specified 100ms.

---

### 5. Event Loop Phases (Node.js)

In Node.js, the event loop has multiple **phases** in which it handles different kinds of tasks:

1. **Timers Phase:** Executes callbacks for `setTimeout()` and `setInterval()`.
2. **I/O Callbacks Phase:** Handles callbacks for deferred I/O operations.
3. **Idle/Prepare Phase:** Used internally.
4. **Poll Phase:** Retrieves new I/O events and processes callbacks.
5. **Check Phase:** Executes `setImmediate()` callbacks.
6. **Close Callbacks Phase:** Executes close event callbacks.

In browsers, the event loop is slightly different but follows a similar structure.

---

### 6. Blocking the Event Loop

Since JavaScript is single-threaded, any long-running or synchronous operation can **block** the event loop, preventing any asynchronous operations from running.

Example:

`` `while (true) {}``

In this case, no other task (such as rendering or handling user interactions) can proceed because the call stack is never emptied.

---

### 7. `setImmediate()` in Node.js

Node.js introduces the **`setImmediate()`** function, which places its callback in the check phase of the event loop and executes it after the current event loop completes.

Example:

`` `setImmediate(() => { console.log('setImmediate callback'); });``

`` `setTimeout(() => { console.log('setTimeout callback'); }, 0);``

In Node.js, `setImmediate` executes before `setTimeout` with a `0` ms delay.

---

### 8. DOM Event Handling and the Event Loop

DOM events like clicks or key presses are handled by the **event loop**. These events are placed in the **callback queue** and are executed only when the call stack is empty.

Example:

`` `document.addEventListener('click', () => { console.log('Click Event'); });``

If the call stack is busy with other tasks, the event will be delayed until the current execution is complete.

---

### 9. Starvation of Macrotasks by Microtasks

Since microtasks (e.g., `Promises`) have a higher priority, they can **starve** macrotasks. If a microtask continually spawns other microtasks, it will delay the execution of macrotasks like `setTimeout`.

Example:

`` `Promise.resolve().then(function handler() {``

`` `console.log('Microtask');``

`` `Promise.resolve().then(handler); // Spawning more microtasks``

`` `});``

In this case, the macrotask queue (e.g., `setTimeout`) will be delayed indefinitely.

---

### 10. Mixing `async/await` with Event Loop

The `async/await` syntax in JavaScript is built on **Promises**, which are part of the microtask queue.

Example:

`` `async function asyncFunction() {``

`` `console.log('Start');``

`` `await Promise.resolve();``

`` `console.log('End');``

`` `}``

`` `asyncFunction();``

`` `console.log('Outside async');``

Output:

`` `Start``

`` `Outside async``

`` `End``

The `await` pauses the function's execution and places it in the microtask queue, allowing other synchronous code to execute first.

---

### 11. Infinite Event Loop with Recursion

You can create an infinite event loop using recursion with asynchronous operations, but doing so can cause performance degradation.

Example:

`` `function recursiveTimeout() {``

`` `setTimeout(() => {``

`` `console.log('Executing...');``

`` `recursiveTimeout();``

`` `}, 0);``

`` `}``

`` `recursiveTimeout();``

Although this is non-blocking, it can cause the browser or Node.js environment to consume resources continuously, leading to performance issues.

---

### Summary Table

| Hidden Truth                                       | Explanation                                                   |
|----------------------------------------------------|---------------------------------------------------------------|
| JavaScript is single-threaded                       | Can only do one thing at a time, but handles async tasks via event loop. |
| Call stack and event loop work together             | Event loop processes async tasks after the call stack is empty. |
| Microtasks have higher priority than macrotasks     | Microtasks (like Promises) run before macrotasks (like setTimeout). |
| `setTimeout` delays are not guaranteed              | Delays specified are minimum; execution depends on queue status. |
| Node.js event loop has multiple phases              | Each phase processes specific kinds of tasks like timers and I/O. |
| Blocking the event loop stops async operations      | Long-running synchronous code blocks the event loop.          |
| `setImmediate()` in Node.js                        | Runs after the current event loop iteration, unlike `setTimeout`. |
| DOM events are handled by the event loop            | Events like clicks are queued and processed when the stack is empty. |
| Microtasks can starve macrotasks                    | Microtasks with endless recursion can delay macrotask execution. |
| `async/await` relies on Promises in the microtask queue | `await` pauses function execution, but allows other code to run. |

---

Understanding the event loop and its hidden behaviors is crucial for writing efficient asynchronous JavaScript and avoiding pitfalls.
