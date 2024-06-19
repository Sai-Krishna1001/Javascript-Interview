# Differences Between `React.memo` and `useMemo`

## `React.memo`

- **Purpose**: `React.memo` is a higher-order component used to optimize functional components by preventing unnecessary re-renders when props haven't changed.
- **Usage**: Wrap a functional component with `React.memo` to memoize it.
- **When to Use**: Use `React.memo` when you want to optimize re-renders for a whole component, especially when the component is expensive to render.
- **Example**:
    ```jsx
    const MyComponent = React.memo((props) => {
      // Component code
    });
    ```

    ```mermaid
    graph LR
    A[👨‍👩‍👦 Parent Component]
    B[🖼️ Initial Render] --> C[🧩 Memoized Component]
    D[🔄 Re-render] --> E[🔍 Props Check]
    E -->|✅ Props Same| F[⏭️ Skip Render]
    E -->|❌ Props Different| G[🔄 Re-render Memoized Component]
    
    A --> B
    A --> D
    ```
## `useMemo`

- **Purpose:** useMemo is a React hook used to memoize the result of a function, preventing expensive calculations on every render if the dependencies haven't changed.
- **Usage:** Use useMemo inside a functional component to memoize a value or result of a computation.
- **When to Use:** Use useMemo for optimizing expensive calculations or operations within a component, ensuring that the computation only occurs when necessary.
- **Example:**
    ```jsx
    const memoizedValue = useMemo(() => {
      // Expensive calculation
      return computeExpensiveValue(a, b);
    }, [a, b]);
    ```

    ```mermaid
    graph TD
    A[👨‍👩‍👦 Parent Component]
    B[🧠 useMemo Hook]
    C[🖼️ First Render] --> D[🧮 Compute Expensive Calculation]
    E[🔄 Re-render] --> F[🔍 Check Dependencies]
    F -->|✅ Dependencies Same| G[💾 Return Cached Result]
    F -->|❌ Dependencies Changed| H[🔄 Recompute Calculation]
    
    A --> B
    B --> C
    B --> E
    D --> I[💾 Store Result]
    H --> J[🆕 New Result]
    I --> F
    J --> F
    ```
### Key Differences
- **Scope of Optimization:**

  -  `React.memo` optimizes entire components by memoizing their render output based on props.
  -  `useMemo` optimizes specific values or results within a component by memoizing the computation based on dependencies.

-  **Application:**

    -  Use `React.memo` to avoid re-rendering a functional component if its props remain the same.
    -  Use `useMemo` to avoid recalculating a value if its dependencies remain the same.

-  **Type:**

    -  `React.memo` is a higher-order component.
    -  `useMemo` is a React hook.

- **Syntax:**

    -  `React.memo(Component)`
    -  `useMemo(() => computeExpensiveValue(a, b), [a, b])`
