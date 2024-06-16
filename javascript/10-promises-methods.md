## JavaScript Promise Methods:

- **Promise.resolve:** Returns a Promise object that is resolved with a given value. If the value is a promise, it is returned as is.
    ```javascript
    const resolvedPromise = Promise.resolve(42);
    resolvedPromise.then(value => {
      console.log(value); // 42
    });
    ```
    ```mermaid
    graph LR
      K[Promise.resolve 🎯] -->|✅ Given value| L[Result: Resolved Promise 🔄]
    ```

---

- **Promise.reject:** Returns a Promise object that is rejected with a given reason.
    ```javascript
    const rejectedPromise = Promise.reject('Error!');
    rejectedPromise.catch(reason => {
      console.log(reason); // "Error!"
    });
    ```
    ```mermaid
    graph LR
      M[Promise.reject ❌] -->|❌ Given reason| N[Result: Rejected Promise 💥]
    ```

---

- **Promise.all:** Ensure to handle the case where any single promise fails, as it will reject the entire result.
    ```javascript
    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then(values => {
      console.log(values); // [3, 42, "foo"]
    }).catch(error => {
      console.error('One of the promises failed:', error);
    });
    ```
    ```mermaid
    graph LR
      A[Promise.all 👩‍👩‍👧‍👧] -->|✅ All promises resolved| B[Result: Array of results 🏆]
      A -->|❌ Any promise rejected| C[Result: First rejection 😠]
    ```

---

- **Promise.allSettled:** Useful for scenarios where you want to ensure all operations have completed, regardless of their success or failure.
    ```javascript
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(reject, 100, 'foo');
    });

    Promise.allSettled([promise1, promise2]).then(results => {
      results.forEach((result) => console.log(result.status));
    });
    ```
    ```mermaid
    graph LR
      D[Promise.allSettled 🌍] -->|✅ All promises completed| E["Result: Array of [status 📋, value/reason 💡]"]
    ```

---

- **Promise.race:** Ideal for cases where you need the quickest response, but be cautious of failures if the first settled promise is a rejection.
    ```javascript
    const promise1 = new Promise((resolve, reject) => {
      setTimeout(resolve, 500, 'one');
    });
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'two');
    });

    Promise.race([promise1, promise2]).then(value => {
      console.log(value); // "two"
    }).catch(error => {
      console.error('The fastest promise failed:', error);
    });
    ```
    ```mermaid
    graph LR
      F[Promise.race 🚀] -->|✅ First promise resolved or rejected| G[Result: First result 🥇]
    ```

---

- **Promise.any:** Provides resilience by allowing you to proceed with the first successful promise, great for fault-tolerant systems.
    ```javascript
    const promise1 = Promise.reject('error');
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(resolve, 100, 'two');
    });

    Promise.any([promise1, promise2]).then(value => {
      console.log(value); // "two"
    }).catch(error => {
      console.error('All promises were rejected:', error);
    });
    ```
    ```mermaid
    graph LR
      H[Promise.any 😎] -->|✅ First promise resolved| I[Result: First fulfillment 🎉]
      H -->|❌ All promises rejected| J[Result: Aggregate error 💥]
    ```

---


- **Promise.prototype.then:** Adds fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler.
    ```javascript
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('done!'), 1000);
    });

    promise.then(
      result => console.log(result), // "done!"
      error => console.log(error)
    );
    ```
    ```mermaid
    graph LR
      O[Promise.then 🤝] -->|✅ Fulfilled| P[Fulfillment handler executed 🔄]
      O -->|❌ Rejected| Q[Rejection handler executed 🔄]
    ```

---

- **Promise.prototype.catch:** Adds a rejection handler callback to the promise and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.
    ```javascript
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => reject('error!'), 1000);
    });

    promise.catch(error => {
      console.log(error); // "error!"
    });
    ```
    ```mermaid
    graph LR
      R[Promise.catch 🛡️] -->|❌ Rejected| S[Rejection handler executed 🔄]
    ```

---

- **Promise.prototype.finally:** Adds a handler to be called when the promise is settled, regardless of its outcome. Useful for cleaning up resources or similar tasks.
    ```javascript
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve('done!'), 1000);
    });

    promise.finally(() => {
      console.log('Cleanup');
    }).then(result => console.log(result)); // "done!"
    ```
    ```mermaid
    graph LR
      T[Promise.finally 🧹] -->|Settled| U[Cleanup handler executed 🔄]
    ```
---
