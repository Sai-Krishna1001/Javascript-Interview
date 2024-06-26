## Q1. Explain the significance of the key prop in React and its impact on performance.

The `key` prop is crucial in React for identifying which items in a list have changed, been added, or removed. Keys should be unique among siblings to help React optimize re-renders and updates. Without keys, React would re-render all items even if only one item changes, which impacts performance. Using unique keys ensures that React can efficiently update only the changed elements.## Q2. What is the correct way to conditionally render a React component? (JSX Expressions)

## Q2. What is the correct way to conditionally render a React component?
  ```js
  { condition && <Component /> }
  { condition ? <Component /> : null }
  ```
## Q3. How do you handle communication between sibling components in React?
Communication between sibling components is typically handled through a common parent component. The parent component maintains the state that needs to be shared and passes it down to the siblings as props. If a sibling component needs to update the state, it does so via a callback function passed down from the parent. Alternatively, for more complex state management, state management libraries like Redux or Context API can be used.

## Q4.  When would you choose to use the Context API over Redux for state management?

The Context API is suitable for simple state management needs where you need to pass data through the component tree without prop drilling. It is ideal for small to medium-sized applications or when managing a limited amount of global state. Redux, on the other hand, is more appropriate for larger applications with complex state management needs, where you require advanced features like middleware, time-travel debugging, and a unidirectional data flow. Redux also helps maintain a more predictable state architecture in large-scale applications.z

## Q5.  What are stateful and stateless components in React, and how do they differ?
-  **Stateful components** are class components that have their own state, managed using `this.state` and updated with `this.setState()`. They also have access to lifecycle methods.

-  **Stateless components**, also known as functional components, don't have their own state by default. However, with the introduction of React hooks, like `useState`, functional components can now manage state and use lifecycle-like methods.

## Q6. Compare Redux and the Context API for State Management in React

- Context API:

  - Built into React, no additional library required.
  - Suitable for simpler or smaller applications.
  - Allows for passing state down the component tree without prop drilling.
  - Not designed for complex state management logic.

- Redux:

  - Requires an additional library (redux and react-redux).
  - Ideal for larger applications with complex state logic.
  - Provides a centralized store for managing application state.
  - Uses actions and reducers to handle state changes predictably.
  - Middleware support (e.g., Redux Thunk) for handling asynchronous operations.
