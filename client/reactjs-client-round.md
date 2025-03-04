# React.js Advanced Interview Questions & Answers

## 1. Can you explain advanced state management using the Redux library?
Redux is a predictable state container for JavaScript applications. It helps manage application state in a scalable way by using a unidirectional data flow. Key concepts include:
- **Store**: Holds the application state.
- **Actions**: Describe state changes.
- **Reducers**: Pure functions that update state based on actions.
- **Middleware**: Intercepts actions for side effects (e.g., async API calls with Redux Thunk or Saga).
- **Selectors**: Extract and derive state efficiently.

## 2. Have you worked with the Context API in the past? If so, have you also used Redux?
Yes, Context API is used for prop drilling elimination in smaller applications. However, Redux is more scalable and better suited for large-scale applications requiring centralized state management. Context API lacks middleware support and performance optimizations found in Redux.

## 3. What is Server-Side Rendering (SSR) and how does it differ from Client-Side Rendering (CSR)?
- **SSR (Server-Side Rendering)**: The server pre-renders the HTML and sends it to the client, improving initial load times and SEO (e.g., Next.js).
- **CSR (Client-Side Rendering)**: The browser loads a minimal HTML file and renders content using JavaScript, which can cause slower initial loading (e.g., Create React App).

## 4. What is the `useEffect` hook in React?
`useEffect` allows side effects in functional components, such as data fetching, subscriptions, or DOM manipulations. It runs after render and can have dependencies to control execution.
Example:
```javascript
useEffect(() => {
  console.log("Component mounted");
  return () => console.log("Component unmounted");
}, []); // Runs only on mount & unmount
```

## 5. Have you created custom hooks in React? For example, a custom hook for fetching data from an API and sharing it with components.
Yes, custom hooks allow code reuse across components. Example:
```javascript
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

## 6. What are the key considerations when creating a custom hook?
- **Encapsulation**: Abstract logic for reuse.
- **Dependencies**: Handle dependencies correctly.
- **Performance**: Avoid unnecessary renders.
- **Return Values**: Structure return values to be easy to consume.

## 7. Can you share your past experience with error handling in React? What is an error boundary?
Error Boundaries are special components that catch JavaScript errors in the component tree and prevent crashes.
Example:
```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

## 8. Do you have experience with Test-Driven Development (TDD) and unit testing for your development code?
Yes, TDD ensures writing test cases before implementation. It improves code quality and reduces bugs. Tools used include Jest, React Testing Library, and Cypress.

## 9. Have you worked with automation testing, regression testing, or User Acceptance Testing (UAT) using Cypress?
Yes, Cypress is used for end-to-end testing. It allows testing user interactions in a real browser environment.
Example test:
```javascript
describe("Login Test", () => {
  it("should login successfully", () => {
    cy.visit("/login");
    cy.get("#username").type("testuser");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.url().should("include", "/dashboard");
  });
});
```

## 10. What tools and methodologies do you use for unit testing? Have you used the Jest framework?
Yes, Jest is a popular unit testing framework for React. React Testing Library is used for component tests.
Example:
```javascript
test("renders component correctly", () => {
  render(<MyComponent />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});
```

---

## 11. How do you handle state and props using the Context API or Redux tools?
### Context API:
- The Context API provides a way to pass data (state and props) through the component tree without manually passing props at every level.
- It is useful for small to medium applications where state management is localized.
- The Context API consists of:
  - `React.createContext()`: Creates a new context.
  - `Provider`: Wraps components and supplies state.
  - `Consumer` or `useContext()`: Accesses state within components.

### Redux:
- Redux is a centralized state management solution that works well for large applications with complex state dependencies.
- Key components:
  - **Store**: Holds the application state.
  - **Actions**: Represent events that trigger state changes.
  - **Reducers**: Pure functions that modify state based on actions.
  - **Middleware**: Handles side effects like API calls (e.g., Redux Thunk or Redux Saga).

### Choosing Between Context API & Redux:
- Use Context API for small apps with limited state management needs.
- Use Redux for large-scale apps requiring predictable, centralized state management and middleware support.

## 12. What are some common security vulnerabilities that React helps to overcome?
### React helps mitigate several web security risks:
1. **Cross-Site Scripting (XSS):**
   - React escapes HTML by default, preventing malicious script injection.
   - Use `dangerouslySetInnerHTML` cautiously and sanitize inputs.
2. **Cross-Site Request Forgery (CSRF):**
   - Implement CSRF tokens in API requests.
3. **Injection Attacks:**
   - Avoid using `eval()` and sanitize API inputs.
4. **Clickjacking:**
   - Use X-Frame-Options headers to prevent UI overlays by malicious sites.

## 13. What tools and technologies do you use to address security vulnerabilities? Have you used Redux DevTools?
- **Security Tools:**
  - Helmet.js for setting HTTP security headers.
  - Content Security Policy (CSP) to prevent script injections.
  - OWASP guidelines for secure coding practices.
- **Redux DevTools:**
  - Useful for debugging state changes and identifying unintended mutations.
  - Helps track actions and rollback state for testing.

## 14. What is a Higher-Order Component (HOC)? Can you provide a use case?
- A Higher-Order Component (HOC) is a function that takes a component and returns an enhanced component with additional functionalities.
- Common use cases:
  - Authorization handling (e.g., wrapping components to restrict access).
  - Logging or analytics.
  - Enhancing UI components with additional logic.

### Example:
```javascript
const withLogging = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`Component ${WrappedComponent.name} mounted`);
    }, []);
    return <WrappedComponent {...props} />;
  };
};
const EnhancedComponent = withLogging(MyComponent);
```

## 15. How do you optimize performance in React applications? Have you used `useMemo` or `useCallback`?
- **Performance Optimization Techniques:**
  - Code splitting using React.lazy and Suspense.
  - Virtualization (e.g., React Window) for large lists.
  - Debouncing and throttling user inputs.
- **useMemo & useCallback:**
  - `useMemo`: Memoizes computed values to prevent unnecessary recalculations.
  - `useCallback`: Memoizes functions to prevent unnecessary re-creations.

### Example:
```javascript
const memoizedValue = useMemo(() => expensiveComputation(value), [value]);
const memoizedFunction = useCallback(() => handleClick(id), [id]);
```

## 16. How do you identify performance issues in a React app? What tools do you use?
- **React DevTools:**
  - Profile component re-renders.
- **Chrome Performance Tab:**
  - Analyzes page load speed and bottlenecks.
- **Web Vitals API:**
  - Measures Core Web Vitals like LCP, FID, CLS.
- **Network Tab:**
  - Identifies slow API responses.

## 17. How do you address performance bottlenecks in React applications?
- Optimize re-renders using `React.memo()`.
- Use immutable data structures.
- Implement lazy loading for images and components.
- Reduce unnecessary re-renders by using proper dependency arrays in `useEffect`.

## 18. What tools and methodologies do you use for styling in React?
- **CSS Modules** for scoped styling.
- **Styled Components** for component-based styling.
- **Tailwind CSS** for utility-first styling.

## 19. Can you explain common styling concepts like Flexbox layout?
- **Flexbox** is a layout model for designing flexible UI structures.
- Key properties:
  - `display: flex;` enables Flexbox.
  - `justify-content: center;` aligns items horizontally.
  - `align-items: center;` aligns items vertically.

## 20. How do you implement tree shaking and CSS minification for performance improvements?
- **Tree Shaking:**
  - Removes unused code using Webpack.
- **CSS Minification:**
  - Tools like PurgeCSS remove unused styles.
- **Lazy loading CSS:**
  - Load styles only when needed for better performance.

---

