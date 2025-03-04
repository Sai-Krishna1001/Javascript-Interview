# React.js Interview Preparation

## 1. What is Caching and How Does It Work in Web Development?

**Caching** is the process of storing copies of files or data in a temporary storage location to reduce access time and improve performance. It helps minimize server load, speeds up page rendering, and enhances user experience.

### Types of Caching:
- **Browser Caching**: Stores static assets like images, CSS, and JavaScript files on the client-side.
- **Server-side Caching**: Caches API responses, database queries, or rendered pages at the server level.
- **CDN Caching**: Content Delivery Networks store cached copies of resources in geographically distributed servers.
- **Memory Caching**: Uses in-memory stores like Redis or Memcached for rapid data retrieval.

### How It Works:
1. The browser requests a resource from the server.
2. If cached, the resource is retrieved from storage instead of making a network request.
3. Caching headers (`Cache-Control`, `ETag`, etc.) dictate how long a resource remains valid.
4. On expiration, a fresh request fetches the updated resource.

---

## 2. How Will You Manage States in a Large-Scale Application?

State management in large applications requires a structured approach. Here are some best practices:

### Techniques for State Management:
- **Local State**: Managed using `useState` or `useReducer` in small components.
- **Global State**:
  - **Redux**: Centralized state management with actions and reducers.
  - **Recoil**: Atom-based state management, ideal for performance optimization.
  - **Zustand**: Lightweight, simpler alternative to Redux.
  - **React Context API**: Good for minimal state sharing but has performance issues with frequent updates.
- **Server State**: Managed using `React Query` or `Apollo Client` for efficient data fetching and caching.

---

## 3. Drawbacks Between Context API and Redux

| Feature       | Context API | Redux |
|--------------|------------|--------|
| Performance  | Re-renders all consumers | Selective re-renders using selectors |
| Complexity   | Simple setup | Requires boilerplate (actions, reducers, store) |
| Async Handling | Manual API calls with `useEffect` | Built-in middleware like `redux-thunk`, `redux-saga` |
| Debugging | No built-in tools | DevTools for state tracking |
| Scalability | Suitable for small apps | Better for large-scale applications |

### When to Use What?
- Use **Context API** for light state management (e.g., theme, authentication).
- Use **Redux** when handling complex state transitions across multiple components.

---

## 4. Website Accessibility and Testing a Component for Accessibility

### Principles of Accessibility (A11Y):
- **Perceivable**: Users can see or hear content.
- **Operable**: Keyboard navigation should work.
- **Understandable**: Clear instructions and feedback.
- **Robust**: Works across different devices and assistive technologies.

### Testing Accessibility in React:
- **Linting**: Use `eslint-plugin-jsx-a11y`.
- **Manual Testing**: Navigate using the keyboard (`Tab`, `Enter`, `Esc` keys).
- **Automated Testing**:
  ```jsx
  import { render, screen } from "@testing-library/react";
  import MyComponent from "./MyComponent";
  
  test("checks if button has accessible role", () => {
    render(<MyComponent />);
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });
  ```
- **Use Lighthouse**: Built-in Chrome tool for accessibility audits.

---

## 5. Difference Between Local and Global Variables in JavaScript

| Feature | Local Variable | Global Variable |
|---------|---------------|----------------|
| Scope | Accessible only within function/block | Accessible throughout the script |
| Memory Usage | Removed when function execution ends | Retained till page reload |
| Naming Conflict | No conflicts | Can be overridden unintentionally |

Example:
```js
function demo() {
  let localVar = "I am local";
  console.log(localVar);
}

var globalVar = "I am global";
console.log(globalVar);
```

---

## 6. What is the useEffect Hook?

`useEffect` is a React hook used for handling side effects in functional components.

### Example:
```jsx
useEffect(() => {
  console.log("Component Mounted");
  return () => console.log("Cleanup on Unmount");
}, []);
```

### Use Cases:
- Fetching data
- Subscribing to events
- Updating the DOM
- Cleaning up resources

---

## 7. Where Can We Use useEffect Hook? Rules for Hooks

### Where to Use:
- Fetching API data
- Event listeners
- DOM manipulations
- Subscribing to WebSockets

### Rules for Hooks:
1. Only call hooks at the **top level**.
2. Only call hooks **inside React functions**.
3. Hooks must **always be used in the same order**.

---

## 8. How Will You Do Page Optimization in React Applications?

### Techniques for Optimization:
- **Code Splitting** using `React.lazy` and `Suspense`.
- **Memoization** using `React.memo` and `useMemo`.
- **Virtualization** with `react-window` or `react-virtualized`.
- **Lazy Loading** images and components.
- **Reducing Re-renders** with dependency arrays in `useEffect`.
- **Optimizing State Management** using Redux or Recoil.
- **Server-Side Rendering (SSR)** with Next.js.

---

## 9. How Will You Identify Performance Issues in React?

### Steps to Identify Bottlenecks:
1. **Use React DevTools Profiler**: Helps analyze component re-renders.
2. **Check Render Timing**: Use `console.time()` and `console.timeEnd()`.
3. **Analyze Network Requests**: Look for redundant API calls.
4. **Use Lighthouse**: Chrome tool for performance audits.
5. **Optimize Expensive Computations**: Use `useMemo` for heavy calculations.
6. **Reduce Re-renders**:
   ```jsx
   const MemoizedComponent = React.memo(MyComponent);
   ```

