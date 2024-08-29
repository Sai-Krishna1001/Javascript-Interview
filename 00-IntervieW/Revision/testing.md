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

| Method             | Description                                                         |
|--------------------|---------------------------------------------------------------------|
| `test` or `it`     | Defines a test case.                                                |
| `describe`         | Groups related tests.                                               |
| `beforeAll`        | Runs a function before all tests in a describe block.               |
| `beforeEach`       | Runs a function before each test in a describe block.               |
| `afterAll`         | Runs a function after all tests in a describe block.                |
| `afterEach`        | Runs a function after each test in a describe block.                |

### Matchers

| Matcher                          | Description                                                                     |
|----------------------------------|---------------------------------------------------------------------------------|
| `expect(value)`                  | Creates an assertion on a value.                                                |
| `toBe`                           | Asserts that a value is exactly equal to another.                               |
| `toEqual`                        | Asserts that a value is deeply equal to another.                                |
| `toBeNull`                       | Asserts that a value is `null`.                                                 |
| `toBeDefined`                    | Asserts that a value is not `undefined`.                                        |
| `toBeTruthy`                     | Asserts that a value is truthy.                                                 |
| `toBeFalsy`                      | Asserts that a value is falsy.                                                  |
| `toBeGreaterThan`                | Asserts that a value is greater than another.                                   |
| `toBeLessThan`                   | Asserts that a value is less than another.                                      |
| `toContain`                      | Asserts that an array or string contains a value.                               |
| `toThrow`                        | Asserts that a function throws an error.                                        |
| `toMatchSnapshot`                | Matches the result to a snapshot.                                               |

### Mock Functions

| Method             | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `jest.fn`          | Creates a new mock function.                                                |
| `mockImplementation` | Defines the implementation of a mock function.                            |
| `mockReturnValue`  | Specifies the return value of a mock function.                              |
| `mockResolvedValue` | Specifies the resolved value of a mock function returning a promise.       |
| `mockRejectedValue` | Specifies the rejected value of a mock function returning a promise.       |

## Setup and Teardown

Jest provides methods to run code before and after tests.

| Method             | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `beforeAll`        | Runs once before all tests in a block.                                      |
| `afterAll`         | Runs once after all tests in a block.                                       |
| `beforeEach`       | Runs before each test in a block.                                           |
| `afterEach`        | Runs after each test in a block.                                            |

## Snapshots

Jest can capture snapshots of data, allowing you to track changes in your code's output.

| Method             | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `toMatchSnapshot`  | Matches the output to a saved snapshot.                                     |
| `toMatchInlineSnapshot` | Matches the output to an inline snapshot within the test file.         |

## Mocking

Jest allows you to mock modules and functions, which is useful for isolating the code under test.

| Method             | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `jest.mock`        | Mocks a module or a function.                                               |
| `jest.spyOn`       | Spies on a method of an object.                                             |
| `jest.fn`          | Creates a new mock function.                                                |

## Testing Asynchronous Code

When testing asynchronous code, Jest provides several ways to handle promises.

| Method             | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `async/await`      | Use `async` functions and `await` to handle promises.                       |
| `.resolves`        | Tests that a promise resolves to a value.                                   |
| `.rejects`         | Tests that a promise rejects with an error.                                 |
| `done`             | Callback to indicate that a test with asynchronous code has completed.      |

