# React.js Terminology Keywords Dictionary

| **Keyword/Term**        | **Definition**                                                                                       |
|-------------------------|------------------------------------------------------------------------------------------------------|
| **React**               | A JavaScript library for building user interfaces, primarily used for creating single-page applications with a component-based architecture. |
| **Component**           | The fundamental building block in React, encapsulating the UI and logic for a specific part of the application. Components can be functional or class-based. |
| **JSX (JavaScript XML)**| A syntax extension that allows writing HTML-like code in JavaScript files. JSX is compiled to React.createElement calls that produce React elements. |
| **Props**               | Short for "properties," these are inputs passed to a React component from its parent, allowing data to be passed down the component tree. |
| **State**               | An object that holds data that may change over time within a component. State is managed locally in the component and can trigger re-rendering when updated. |
| **Hooks**               | Functions that let you use state and other React features in functional components. Common hooks include `useState`, `useEffect`, and `useContext`. |
| **useState**            | A hook that adds state to functional components. It returns a state variable and a function to update it. |
| **useEffect**           | A hook that allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after the component renders. |
| **useContext**          | A hook that allows you to access the value of a React context in a functional component, facilitating global state management. |
| **useReducer**          | A hook that allows you to manage complex state logic in functional components, similar to Redux but at the component level. |
| **useRef**              | A hook that returns a mutable ref object whose `.current` property can hold a value that persists across re-renders. Commonly used to access DOM elements directly. |
| **Virtual DOM**         | An in-memory representation of the actual DOM. React uses the Virtual DOM to efficiently update the browser's DOM by calculating the minimal changes needed. |
| **Reconciliation**      | The process React uses to determine how the Virtual DOM should be updated to match the real DOM, involving diffing algorithms and optimized updates. |
| **Component Lifecycle** | The series of methods that are called at different stages of a component's existence, such as mounting, updating, and unmounting. In functional components, lifecycle events are managed with hooks like `useEffect`. |
| **Mounting**            | The phase in a component's lifecycle when it is first rendered to the DOM. Hooks like `useEffect` with an empty dependency array mimic `componentDidMount` in class components. |
| **Updating**            | The phase in a component's lifecycle when it re-renders in response to changes in props or state. |
| **Unmounting**          | The phase in a component's lifecycle when it is removed from the DOM. `useEffect` can return a cleanup function that mimics `componentWillUnmount` in class components. |
| **Context API**         | A React feature that allows sharing global data across the component tree without passing props down manually at every level. |
| **Higher-Order Component (HOC)** | A pattern in React for reusing component logic by creating a function that takes a component and returns a new component with added functionality. |
| **Render Props**        | A technique in React for sharing code between components using a prop whose value is a function, allowing dynamic rendering of content. |
| **Controlled Component**| A component that derives its input values from React state, meaning the value of the input element is controlled by the component's state. |
| **Uncontrolled Component** | A component that maintains its own internal state for input values, typically accessed via refs. |
| **React Router**        | A popular library for handling routing in React applications, allowing navigation between different components based on URL changes. |
| **React.Fragment**      | A wrapper component used to group a list of children without adding an extra node to the DOM. Defined using `<React.Fragment>` or shorthand as `<>...</>`. |
| **Keys**                | Unique identifiers used in lists of React elements to help React identify which items have changed, are added, or are removed, improving rendering performance. |
| **PropTypes**           | A type-checking tool for React components, used to ensure that the props passed to a component are of the correct type and structure. |
| **Default Props**       | A way to specify default values for props in a React component, ensuring that the component has all the data it needs even if some props are not provided by the parent. |
| **Lazy Loading**        | A technique for loading components or resources only when they are needed, improving performance by reducing the initial load time. In React, components can be lazy-loaded using `React.lazy()` and `Suspense`. |
| **React.memo**          | A higher-order component that memoizes the output of a functional component, preventing unnecessary re-renders if the props haven't changed. |
| **React.PureComponent** | A base class in React for class components that automatically implements `shouldComponentUpdate` with a shallow prop and state comparison, avoiding unnecessary re-renders. |
| **Error Boundaries**    | React components that catch JavaScript errors anywhere in their child component tree, logging those errors and displaying a fallback UI instead of crashing. |
| **Portals**             | A method of rendering children into a DOM node that exists outside the hierarchy of the parent component, often used for modals or tooltips. |
| **Redux**               | A state management library often used with React to manage global state across an application. Redux uses actions, reducers, and a single store to manage state changes predictably. |
| **Redux Thunk**         | A middleware for Redux that allows action creators to return a function instead of an action, enabling asynchronous logic like API calls. |
| **Redux Saga**          | A middleware for Redux that handles side effects in an application by using generator functions to listen for actions and perform asynchronous tasks. |
| **Babel**               | A JavaScript compiler often used in React projects to transform JSX and newer JavaScript syntax (like ES6+) into code that is compatible with older browsers. |
| **Webpack**             | A module bundler used in React projects to bundle JavaScript, CSS, and other assets into a single file or a set of files, optimizing the application for deployment. |
| **Component Composition** | The practice of building complex UIs in React by combining smaller, reusable components, allowing for a more modular and maintainable codebase. |
| **React Developer Tools** | A browser extension that allows developers to inspect the React component hierarchy, view props and state, and debug React applications. |
| **Suspense**            | A React component that allows you to display a fallback (like a loading spinner) while waiting for some code to load, typically used with lazy-loaded components. |
| **Concurrent Mode**     | An experimental feature in React that allows the rendering of multiple tasks in a way that keeps the app responsive and interactive, improving user experience in complex apps. |
| **Fiber**               | The new reconciliation algorithm introduced in React 16, enabling features like Concurrent Mode and Suspense by allowing React to split rendering work into chunks and spread it over multiple frames. |
| **StrictMode**          | A wrapper component that helps identify potential problems in a React application by running checks and warnings in development mode. |
| **JSX Transpilation**   | The process of converting JSX code into standard JavaScript using tools like Babel, allowing the code to be executed by browsers. |
| **Code Splitting**      | A performance optimization technique where the bundle is split into smaller chunks that are loaded on demand, reducing the initial load time of the application. |
| **ReactDOM**            | The package that provides DOM-specific methods to interact with the DOM in web applications, such as rendering a component tree using `ReactDOM.render()`. |
| **Single Page Application (SPA)** | An application that loads a single HTML page and dynamically updates the content as the user interacts with the app, providing a seamless and responsive user experience. React is often used to build SPAs. |
| **Synthetic Event**     | A cross-browser wrapper around the browser's native event, providing consistent behavior across different browsers in React's event handling system. |
| **Custom Hook**         | A function in React that allows you to reuse stateful logic across multiple components by extracting it into a standalone hook. Custom hooks typically start with the `use` prefix. |
| **Batched Updates**     | The process of grouping multiple state updates into a single re-render, improving performance by reducing the number of re-renders in React components. |
| **JSX Spread Attributes** | A syntax in JSX that allows you to pass all the properties of an object as props to a component using the spread operator (`...`). |
| **Tree Shaking**        | A build optimization technique that removes unused code from the final bundle, reducing the size of the JavaScript files in a React application. |
| **Strict Mode**         | A React component that enables additional checks and warnings for its descendants during development, helping to identify potential issues. |
| **Fragment Short Syntax** | The shorthand syntax (`<>...</>`) for React Fragments, allowing multiple elements to be grouped without adding extra nodes to the DOM. |
