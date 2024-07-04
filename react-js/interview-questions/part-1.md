## Q1. Explain the significance of the key prop in React and its impact on performance.

The `key` prop is crucial in React for identifying which items in a list have changed, been added, or removed. Keys should be unique among siblings to help React optimize re-renders and updates. Without keys, React would re-render all items even if only one item changes, which impacts performance. Using unique keys ensures that React can efficiently update only the changed elements.

## Q2. What is the correct way to conditionally render a React component?  (JSX Expressions)
  ```js
  { condition && <Component /> }
  { condition ? <Component /> : null }
  ```
## Q3. How do you handle communication between sibling components in React?
Communication between sibling components is typically handled through a common parent component. The parent component maintains the state that needs to be shared and passes it down to the siblings as props. If a sibling component needs to update the state, it does so via a callback function passed down from the parent. Alternatively, for more complex state management, state management libraries like Redux or Context API can be used.


## Q4. How does React's Virtual DOM improve performance?

The Virtual DOM is a lightweight copy of the real DOM. When a component updates, React creates a new Virtual DOM tree and compares it with the previous one using a diffing algorithm. Only the changed components are updated in the real DOM, which makes updates faster and more efficient.

## Q5. Difference Between Stateful and Stateless Components

- **Stateful Components**:
  - Class components that have their own state, managed using `this.state` and `this.setState()`.
  - Have access to lifecycle methods.

- **Stateless Components**:
  - Functional components that do not have their own state by default.
  - Can manage state and use lifecycle-like methods with hooks like `useState` and `useEffect`.

## Q6. How Does the `useEffect` Hook Work? Provide a Simple Example

The `useEffect` hook is used for performing side effects in functional components. It takes two arguments: a callback function and a dependency array.

- Without the dependency array, the effect runs after every render.
- With an empty dependency array, the effect runs only once (when the component mounts).
- With dependencies, the effect runs only when the specified dependencies change.

## Q7. Compare Redux and the Context API for State Management in React

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


