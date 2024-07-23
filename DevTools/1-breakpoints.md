# Types of Breakpoints in DevTools

## 1. Line-of-Code Breakpoints
- **Description**: Set a breakpoint at a specific line of code. The execution pauses when the program reaches this line.
- **Use Case**: Useful for stopping execution at a specific point to inspect variables and program state.
- **How to Set**: Click on the line number in the Sources panel.

## 2. Conditional Breakpoints
- **Description**: Similar to line-of-code breakpoints, but the execution only pauses if a specified condition is true.
- **Use Case**: Useful for stopping execution only when certain conditions are met, such as a variable having a specific value.
- **How to Set**: Right-click on the line number and select "Add conditional breakpoint," then enter the condition.

## 3. Logpoints (Console Breakpoints)
- **Description**: Instead of pausing execution, logpoints log a message to the console when the line is reached.
- **Use Case**: Useful for debugging without interrupting program execution.
- **How to Set**: Right-click on the line number and select "Add logpoint," then enter the message to log.

## 4. DOM Breakpoints
- **Description**: Breakpoints that pause execution when changes are made to the DOM.
- **Types**:
  - **Subtree Modifications**: Pauses when any node within the specified element's subtree is added, removed, or modified.
  - **Attribute Modifications**: Pauses when an attribute of the specified element changes.
  - **Node Removal**: Pauses when the specified element is removed from the DOM.
- **Use Case**: Useful for debugging dynamic changes in the DOM.
- **How to Set**: Right-click on a DOM node in the Elements panel, select "Break on," and choose the type of DOM breakpoint.

## 5. Event Listener Breakpoints
- **Description**: Pauses execution when an event is fired, regardless of where the event listener is in the code.
- **Types**: Covers various events like mouse clicks, keyboard actions, DOM mutations, etc.
- **Use Case**: Useful for debugging event-driven code.
- **How to Set**: In the Sources panel, open the Event Listener Breakpoints section, and check the events you want to break on.

## 6. XHR/Fetch Breakpoints
- **Description**: Pauses execution when an XMLHttpRequest or Fetch request is made.
- **Types**:
  - **Any XHR/Fetch**: Pauses on all requests.
  - **URL Containing**: Pauses on requests that contain a specified string in the URL.
- **Use Case**: Useful for debugging network requests and responses.
- **How to Set**: In the Sources panel, open the XHR/Fetch Breakpoints section, and add a breakpoint.

## 7. Exception Breakpoints
- **Description**: Pauses execution when an exception is thrown.
- **Types**:
  - **Caught Exceptions**: Pauses when an exception is thrown and caught by a `try...catch` block.
  - **Uncaught Exceptions**: Pauses when an exception is thrown and not caught.
- **Use Case**: Useful for debugging error handling.
- **How to Set**: In the Sources panel, click on the "Pause on exceptions" button (it looks like a pause icon with a stop sign).

## 8. Function Breakpoints
- **Description**: Pauses execution when a specific function is called.
- **Use Case**: Useful for debugging specific function calls without manually finding where they are invoked.
- **How to Set**: In the console, use the `debug(functionName)` command to set a breakpoint on the function.

## 9. Breakpoints on Inline Scripts
- **Description**: Pauses execution in inline scripts within HTML.
- **Use Case**: Useful for debugging code directly written in script tags.
- **How to Set**: Click on the line number within the inline script section in the Sources panel.

## 10. Web Workers Breakpoints
- **Description**: Pauses execution in web workers.
- **Use Case**: Useful for debugging multi-threaded JavaScript applications.
- **How to Set**: Open the web worker file in the Sources panel and set breakpoints as usual.
