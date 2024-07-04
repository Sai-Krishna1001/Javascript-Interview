## Q1. How do you optimize a React application for performance?

To optimize a React application for performance, consider the following techniques:

- **Code Splitting**: Load parts of your application on demand.
- **Lazy Loading**: Use `React.lazy` and `Suspense` for dynamic imports.
- **Memoization**: Use `React.memo`, `useMemo`, and `useCallback` to prevent unnecessary re-renders.
- **Pure Components**: Use `React.PureComponent` to optimize class components.
- **Avoid Inline Functions**: Move functions out of the render method to avoid recreating them on every render.
- **Virtualization**: Use libraries like `react-window` or `react-virtualized` to render large lists efficiently.

## Q2. What are some ways to communicate between components in React?

- **Props**: Pass data from parent to child components.
- **State**: Share state between components by lifting state up to the nearest common ancestor.
- **Context API**: Share data across the component tree without prop drilling.
- **Refs**: Access a child component's instance or DOM node.
- **Redux**: Use a global store to manage state across the application.
- **Event Emitter**: Use an event emitter for components to communicate through custom events.

