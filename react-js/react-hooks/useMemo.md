# useMemo

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
