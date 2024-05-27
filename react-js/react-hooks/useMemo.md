# useMemo Hook

## What is useMemo?
`useMemo` is like having a smart assistant who remembers the answers to math problems, so you don’t have to solve them again and again. It helps make your React apps faster by memoizing the result of a function as long as its inputs (dependencies) remain the same. If the inputs don’t change, React retrieves the stored result instead of recalculating it every time.

## How Does useMemo Work?
Consider a scenario where you have a component that renders a list of items, and you need to perform some heavy computation to derive the list. Without memoization, this computation would be executed on every render, even if the inputs remain unchanged. Here’s a basic example without `useMemo`:

```jsx
import React from 'react';

const ListComponent = ({ items }) => {
  const processedItems = processItems(items); // Expensive computation

  return (
    <ul>
      {processedItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

const processItems = items => {
  // Expensive computation (e.g., formatting data)
  // Imagine some heavy processing here
  return items.map(item => ({
    id: item.id,
    name: item.name.toUpperCase(),
  }));
};

export default ListComponent;

```
In the above example, `processItems` is called on every render, even if the `items` prop remains the same. To optimize this, we can use `useMemo`.

## Syntax and Usage of `useMemo`
Here’s how you can use `useMemo` in your React components:

```jsx
import React, { useMemo } from 'react';

const MyComponent = ({ data }) => {
  // Memoize the result of the expensive computation
  const memoizedValue = useMemo(() => {
    // Perform some expensive computation using the data
    return processData(data);
  }, [data]); // Dependency array: recompute if 'data' changes

  // Rest of your component logic

  return (
    <div>
      {/* Render using 'memoizedValue' */}
    </div>
  );
};

export default MyComponent;

```

In the example above:

* We pass a function to useMemo that performs the expensive computation.
* The second argument (dependency array) specifies which values trigger a recompute. If any value in the dependency array changes, the computation is re-executed; otherwise, the memoized value is reused.
  
## When to Use useMemo?
You can use useMemo in various scenarios:

* **Data Formatting:** Format data before rendering.
* **Filtering Data:** Filter large datasets.
* **Sorting Data:** Sort data based on specific criteria.
* **Memoizing Callback Functions:** Prevent unnecessary re-renders of child components.
* **Expensive Calculations:** Optimize performance by avoiding redundant computations.
