# DevTools Tricks for JavaScript Developers

| Feature/Trick                   | Description                                                                 | Example/Usage                                                                                                      |
|---------------------------------|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| **Console Log Styling**         | Style your console logs with CSS.                                            | `console.log('%cStyled Text', 'color: blue; font-size: 20px;');`                                                   |
| **Track Execution Time**        | Measure how long a piece of code takes to execute.                           | `console.time('Timer'); /* Code */ console.timeEnd('Timer');`                                                      |
| **Collapsible Log Groups**      | Group related console logs together.                                         | `console.group('My Group'); console.log('Message'); console.groupEnd();`                                           |
| **Table Logging**               | Display objects or arrays as tables.                                         | `console.table([{name: 'Alice', age: 30}, {name: 'Bob', age: 25}]);`                                               |
| **Event Monitoring**            | Monitor specific events on DOM elements.                                     | `monitorEvents(document.querySelector('button'), 'click');`                                                        |
| **DOM Element Inspection**      | Inspect and interact with DOM elements.                                      | `console.dir(document.querySelector('h1'));`                                                                       |
| **Copy to Clipboard**           | Copy text directly to clipboard from console.                                | `copy('Text to copy');`                                                                                            |
| **Trigger Debugger**            | Programmatically trigger the debugger.                                       | `debugger; // Code execution pauses here`                                                                          |
| **Memory Usage Check**          | Inspect JavaScript memory usage.                                             | `console.memory;`                                                                                                  |
| **Stack Trace Logging**         | Log a stack trace to understand the call sequence.                           | `console.trace('Trace Message');`                                                                                  |
| **Assertions**                  | Log messages only when a condition is false.                                 | `console.assert(2 === 3, 'Assertion failed');`                                                                      |
| **Breakpoints in Code**         | Place breakpoints directly in your code.                                     | `debugger; // Pauses code execution here`                                                                          |
| **Watch Expressions**           | Monitor variables or expressions in real-time.                               | In DevTools > Sources, add expressions to "Watch" during debugging.                                                |
| **Event Listener Inspection**   | List all event listeners attached to an element.                             | `getEventListeners(document.querySelector('button'));`                                                             |
| **Performance Profiling**       | Profile your code’s performance to optimize.                                 | In DevTools > Performance, record and analyze the execution of your application.                                   |
| **Network Inspection**          | Monitor and analyze network requests.                                        | In DevTools > Network, inspect XHR requests, resources, and their load times.                                      |
| **Simulate Mobile Devices**     | Test your site on mobile devices.                                            | In DevTools, click on the device toolbar icon to toggle device mode and simulate mobile screens and behaviors.      |
| **Local Overrides**             | Make changes to live sites and persist them locally.                         | In DevTools > Sources, set up overrides to persist changes even after reload.                                       |
| **Conditional Breakpoints**     | Set breakpoints that only trigger when specific conditions are met.          | Right-click on a line number in Sources and select "Add conditional breakpoint".                                   |
| **Console Snippets**            | Run reusable pieces of code (snippets) directly in DevTools.                 | In DevTools > Sources > Snippets, create and run custom JavaScript snippets.                                        |
| **Layout Shift Debugging**      | Identify and debug layout shifts in your page.                               | In DevTools > Performance > Layout Shifts, analyze unexpected layout movements.                                     |
| **Throttle Network**            | Simulate slower network conditions to test performance.                      | In DevTools > Network, use the throttling dropdown to simulate various network speeds.                             |
| **View Computed Styles**        | Inspect the final styles applied to an element.                              | In DevTools > Elements > Computed, view the final calculated styles for a selected element.                        |
| **Request Blocking**            | Block specific requests to see how your site behaves without them.           | In DevTools > Network, right-click on a request and select "Block request URL".                                     |
| **Quick Edits in Elements Panel**| Edit HTML and CSS directly in the Elements panel and see live changes.       | In DevTools > Elements, right-click on an element and select "Edit as HTML" or modify styles in the Styles pane.    |
| **Audit with Lighthouse**       | Run performance and best practices audits directly from DevTools.            | In DevTools > Lighthouse, generate a report to analyze your site’s performance, accessibility, and SEO.            |