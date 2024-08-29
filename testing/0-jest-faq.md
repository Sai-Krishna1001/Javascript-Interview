# Common Jest Interview Questions

## 1. What is Jest, and why is it used?
**Answer:** Jest is a JavaScript testing framework developed by Facebook, designed for testing JavaScript applications, especially those built with React. It includes a test runner, assertion library, and built-in mocking capabilities. Jest is used because it's easy to set up, provides a rich API for testing, supports snapshot testing, and integrates well with CI/CD pipelines.

## 2. How does Jest handle asynchronous code?
**Answer:** Jest can handle asynchronous code using several methods:
- **Callbacks:** Use `done` as an argument to your test function and call it when the async operation is complete.
- **Promises:** Return a promise from the test and use `.then()` and `.catch()`.
- **Async/Await:** Use `async` and `await` keywords for a cleaner syntax. Jest will wait for the promise to resolve or reject before moving to the next test.

## 3. What are mocks, and how do you use them in Jest?
**Answer:** Mocks are used to simulate the behavior of complex objects or functions in tests. In Jest, you can:
- **Manual mocks:** Create a mock implementation of a module in the `__mocks__` directory.
- **Automatic mocks:** Use `jest.mock('module-name')` to automatically mock an entire module.
- **Mock functions:** Use `jest.fn()` to create a mock function and define its behavior.
- **Spy functions:** Use `jest.spyOn(object, 'method')` to spy on a method of an object.

## 4. Explain snapshot testing in Jest.
**Answer:** Snapshot testing is a way to test the rendered output of a component and ensure it matches a previously saved snapshot. Jest generates a snapshot file that contains a serialized version of the component's output. If the output changes, Jest will fail the test, and you can either update the snapshot or investigate the cause of the change.

## 5. How does Jest differ from other testing frameworks like Mocha and Jasmine?
**Answer:** Jest is an all-in-one testing framework with built-in assertions, mocking, and test running capabilities, whereas Mocha and Jasmine are more focused on the test running and require additional libraries (like Chai for assertions or Sinon for mocking). Jest also provides out-of-the-box support for features like snapshot testing and code coverage.

## 6. What are test suites and test cases in Jest?
**Answer:**
- **Test Suites:** A group of related tests wrapped in a `describe` block. It helps organize tests and can be nested for better structure.
- **Test Cases:** Individual tests that are written using the `test` or `it` function. Each test case contains one or more assertions that verify the code's behavior.

## 7. What are `beforeEach`, `afterEach`, `beforeAll`, and `afterAll` hooks in Jest?
**Answer:** These hooks are used to run setup and teardown code around tests:
- **`beforeEach`:** Runs before each test in a test suite.
- **`afterEach`:** Runs after each test in a test suite.
- **`beforeAll`:** Runs once before all tests in a test suite.
- **`afterAll`:** Runs once after all tests in a test suite.

## 8. How would you test a React component using Jest and React Testing Library?
**Answer:** To test a React component:
1. Render the component using `render` from React Testing Library.
2. Interact with the component using user events or DOM queries (`getByText`, `getByRole`, etc.).
3. Make assertions on the component's output using `expect` statements.

## 9. How can you mock an API call in Jest?
**Answer:** You can mock an API call in Jest by:
- Using `jest.mock('module-name')` to mock the entire module responsible for the API call.
- Using `jest.fn()` to mock specific functions.
- Mocking `fetch` or `axios` calls by providing a custom implementation that returns a promise.

## 10. How do you test exceptions or errors in Jest?
**Answer:** To test that a function throws an error, use the `toThrow` matcher:
```javascript
expect(() => {
  someFunctionThatThrows();
}).toThrow(ErrorType);
```
- You can also test async functions that throw errors using rejects.toThrow:

```javascript
await expect(asyncFunction()).rejects.toThrow(ErrorType);
```

## 11. What is code coverage, and how do you use it in Jest?
**Answer:** Code coverage is a measure of how much of your code is being executed during tests. Jest can generate a code coverage report that shows the percentage of lines, functions, branches, and statements covered by your tests.

- To generate a code coverage report with Jest, run your tests with the --coverage flag:

```bash
jest --coverage
```
- This will output a coverage report in the terminal and create a detailed HTML report in a coverage directory, which you can open in a browser.

## 12. How can you run only a specific test or test suite in Jest?
**Answer:**

- To run a specific test suite: You can add .only to the describe block:
```javascript
describe.only('My Test Suite', () => {
  // tests
});
```
- To run a specific test case: You can add .only to the test or it block:
```javascript
test.only('should do something', () => {
  // test code
});
```
## 13. What is the difference between jest.fn() and jest.spyOn()?
**Answer:**

- **jest.fn():** Creates a new, standalone mock function. It’s useful when you need a simple mock function for testing purposes.
- **jest.spyOn():** Creates a mock that wraps around an existing method of an object. It allows you to track calls and arguments to that method, and you can restore the original implementation after the test.
## 14. How do you reset or clear mocks between tests?
**Answer:** Jest provides several methods to reset or clear mocks:

- **jest.clearAllMocks():** Clears all information stored in mocks, such as call counts, arguments, etc., but doesn't restore the original implementation.
- **jest.resetAllMocks():** Resets all mocks back to their initial state, including their implementation.
- **jest.restoreAllMocks():** Restores the original implementations of all mocked functions.
## 15. What is jest.config.js, and why would you use it?
**Answer:** `jest.config.js` is a configuration file for Jest where you can specify various settings, such as test environments, file extensions, directories to ignore, global setup and teardown scripts, and more. It allows you to customize Jest's behavior to suit the needs of your project.

Example of a jest.config.js file:

```javascript
module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
```
## 16. How do you deal with timers in Jest?
**Answer:** Jest provides utilities for handling timers in tests:

- **jest.useFakeTimers():** Replaces the real timers with mock timers, allowing you to control the passage of time in your tests.
- **jest.advanceTimersByTime(ms):** Advances the mock timers by a specified amount of time.
- **jest.runAllTimers():** Runs all pending timers immediately.
- **jest.runOnlyPendingTimers():** Runs only the currently pending timers.
- **jest.clearAllTimers():** Clears all pending timers.
## 17. What are some best practices for writing tests with Jest?
**Answer:**

- **Keep tests isolated:** Ensure that tests do not depend on each other. Each test should be independent and should not affect others.
- **Use descriptive names:** Test names should clearly describe what is being tested and the expected outcome.
- **Test behavior, not implementation:** Focus on testing the behavior and output of your code rather than its internal implementation.
- **Use mocks and spies wisely:** Avoid overusing mocks, as they can make tests brittle and harder to maintain. Mock only what’s necessary.
- **Maintain code coverage:** Strive for high code coverage, but prioritize meaningful tests over merely achieving coverage metrics.
## 18. How would you debug failing tests in Jest?
**Answer:**

- **Check error messages:** Start by reading the error message provided by Jest; it often includes a stack trace and information about the failing assertion.
- **Use `console.log` or `debugger`:** Temporarily add `console.log` statements or `debugger` to your test or the code under test to inspect values and flow.
- **Run a single test:** Focus on the failing test by using `.only` or `jest -t "test name"` to run a specific test case.
- **Run in watch mode:** Use `jest --watch` to rerun tests as you make changes.
- **Check test isolation:** Ensure the test isn’t affected by side effects from other tests by using beforeEach and afterEach hooks.
