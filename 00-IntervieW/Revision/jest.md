# Jest Revision Notes

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Jest Methods](#jest-methods)
  - [Global Methods](#global-methods)
  - [Matchers](#matchers)
  - [Mock Functions](#mock-functions)
- [Setup and Teardown](#setup-and-teardown)
- [Snapshots](#snapshots)
- [Mocking](#mocking)
- [Testing Asynchronous Code](#testing-asynchronous-code)

## Introduction
Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using Babel, TypeScript, Node.js, React, Angular, Vue.js, and more.

## Installation
To install Jest as a development dependency, you can use either npm or yarn.

- With npm: `npm install --save-dev jest`
- With yarn: `yarn add --dev jest`

## Jest Methods

### Global Methods

| Method        | Syntax                                 | Description                                                |
|---------------|----------------------------------------|------------------------------------------------------------|
| `test` or `it`| `test('description', () => {})`        | Defines a test case.                                        |
| `describe`    | `describe('description', () => {})`    | Groups related tests.                                       |
| `beforeAll`   | `beforeAll(() => {})`                  | Runs a function before all tests in a describe block.       |
| `beforeEach`  | `beforeEach(() => {})`                 | Runs a function before each test in a describe block.       |
| `afterAll`    | `afterAll(() => {})`                   | Runs a function after all tests in a describe block.        |
| `afterEach`   | `afterEach(() => {})`                  | Runs a function after each test in a describe block.        |

### Matchers

| Matcher               | Syntax                                        | Description                                              |
|-----------------------|-----------------------------------------------|----------------------------------------------------------|
| `expect(value)`       | `expect(value)`                               | Creates an assertion on a value.                         |
| `toBe`                | `expect(value).toBe(expected)`                | Asserts that a value is exactly equal to another.        |
| `toEqual`             | `expect(value).toEqual(expected)`             | Asserts that a value is deeply equal to another.         |
| `toBeNull`            | `expect(value).toBeNull()`                    | Asserts that a value is `null`.                          |
| `toBeDefined`         | `expect(value).toBeDefined()`                 | Asserts that a value is not `undefined`.                 |
| `toBeTruthy`          | `expect(value).toBeTruthy()`                  | Asserts that a value is truthy.                          |
| `toBeFalsy`           | `expect(value).toBeFalsy()`                   | Asserts that a value is falsy.                           |
| `toBeGreaterThan`     | `expect(value).toBeGreaterThan(expected)`     | Asserts that a value is greater than another.            |
| `toBeLessThan`        | `expect(value).toBeLessThan(expected)`        | Asserts that a value is less than another.               |
| `toContain`           | `expect(arrayOrString).toContain(value)`      | Asserts that an array or string contains a value.        |
| `toThrow`             | `expect(() => function()).toThrow()`          | Asserts that a function throws an error.                 |
| `toMatchSnapshot`     | `expect(value).toMatchSnapshot()`             | Matches the result to a snapshot.                        |

### Mock Functions

| Method              | Syntax                                              | Description                                            |
|---------------------|-----------------------------------------------------|--------------------------------------------------------|
| `jest.fn`           | `const mockFunc = jest.fn()`                        | Creates a new mock function.                           |
| `mockImplementation`| `mockFunc.mockImplementation(() => returnValue)`    | Defines the implementation of a mock function.         |
| `mockReturnValue`   | `mockFunc.mockReturnValue(value)`                   | Specifies the return value of a mock function.         |
| `mockResolvedValue` | `mockFunc.mockResolvedValue(value)`                 | Specifies the resolved value of a mock function returning a promise. |
| `mockRejectedValue` | `mockFunc.mockRejectedValue(error)`                 | Specifies the rejected value of a mock function returning a promise. |

## Setup and Teardown

Jest provides methods to run code before and after tests.

| Method       | Syntax                                 | Description                                            |
|--------------|----------------------------------------|--------------------------------------------------------|
| `beforeAll`  | `beforeAll(() => {})`                  | Runs once before all tests in a block.                 |
| `afterAll`   | `afterAll(() => {})`                   | Runs once after all tests in a block.                  |
| `beforeEach` | `beforeEach(() => {})`                 | Runs before each test in a block.                      |
| `afterEach`  | `afterEach(() => {})`                  | Runs after each test in a block.                       |

## Snapshots

Jest can capture snapshots of data, allowing you to track changes in your code's output.

| Method                 | Syntax                                       | Description                                             |
|------------------------|----------------------------------------------|---------------------------------------------------------|
| `toMatchSnapshot`      | `expect(value).toMatchSnapshot()`            | Matches the output to a saved snapshot.                 |
| `toMatchInlineSnapshot`| `expect(value).toMatchInlineSnapshot()`      | Matches the output to an inline snapshot within the test file. |

## Mocking

Jest allows you to mock modules and functions, which is useful for isolating the code under test.

| Method       | Syntax                                        | Description                                             |
|--------------|-----------------------------------------------|---------------------------------------------------------|
| `jest.mock`  | `jest.mock('moduleName')`                     | Mocks a module or a function.                           |
| `jest.spyOn` | `jest.spyOn(object, 'methodName')`            | Spies on a method of an object.                         |
| `jest.fn`    | `const mockFunc = jest.fn()`                  | Creates a new mock function.                            |

## Testing Asynchronous Code

When testing asynchronous code, Jest provides several ways to handle promises.

| Method       | Syntax                                              | Description                                              |
|--------------|-----------------------------------------------------|----------------------------------------------------------|
| `async/await`| `await asyncFunction()`                             | Use `async` functions and `await` to handle promises.    |
| `.resolves`  | `expect(promise).resolves.toBe(expected)`           | Tests that a promise resolves to a value.                |
| `.rejects`   | `expect(promise).rejects.toThrow(error)`            | Tests that a promise rejects with an error.              |
| `done`       | `test('description', (done) => { asyncFunction(); done(); })` | Callback to indicate that a test with asynchronous code has completed. |
