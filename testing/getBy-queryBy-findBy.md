## `findBy` vs `getBy` vs `queryBy` in Asynchronous Testing
- `getBy`: Used for synchronous queries. It will throw an error if the element is not immediately found.

  - Example: `screen.getByText('Hello')`
  - Use this when you expect the element to be present without delay.
    
- `queryBy`: Similar to getBy, but it will return null instead of throwing an error if the element is not found.

  - Example: `screen.queryByText('Hello')`
  - Useful if you want to check for the absence of an element.
- `findBy`: Waits for the element to appear and is specifically designed for asynchronous operations.

  - Example: `await screen.findByText('Hello')`
  - Use this when testing asynchronous changes to the DOM.
