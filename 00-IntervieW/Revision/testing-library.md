# React Testing Library Revision Notes

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Core Principles](#core-principles)
- [Queries](#queries)
  - [Types of Queries](#types-of-queries)
  - [Common Query Methods](#common-query-methods)
- [Events](#events)
- [Assertions](#assertions)
- [Custom Render](#custom-render)
- [Testing Asynchronous Code](#testing-asynchronous-code)
- [Mocking](#mocking)
- [Best Practices](#best-practices)

## Introduction
React Testing Library is a lightweight solution for testing React components. It focuses on testing components from the user's perspective, rather than testing internal implementation details.

## Installation
To install React Testing Library, you can use npm or yarn:

- With npm: `npm install --save-dev @testing-library/react`
- With yarn: `yarn add --dev @testing-library/react`

## Core Principles
- **Test What Users See**: Focus on testing components as users interact with them, not on internal implementation details.
- **Avoid Test Fragility**: Write tests that are resistant to changes in implementation but still cover all necessary functionality.
- **Encourage Good Practices**: By using React Testing Library, you'll be encouraged to write more maintainable and accessible components.

## Queries

### Types of Queries
React Testing Library provides several query types to select elements.

| Query Type              | Description                                                         | Example                                          |
|-------------------------|---------------------------------------------------------------------|--------------------------------------------------|
| `getBy`                 | Throws an error if no element is found or if more than one element is found. | `getByText('Submit')`                            |
| `queryBy`               | Returns `null` if no element is found, throws an error if more than one element is found. | `queryByTestId('submit-btn')`                    |
| `findBy`                | Asynchronous version of `getBy`. Returns a Promise.                 | `findByPlaceholderText('Enter name')`            |
| `getAllBy`              | Returns an array of all matching elements, throws an error if none found. | `getAllByRole('button')`                         |
| `queryAllBy`            | Returns an array of all matching elements, returns an empty array if none found. | `queryAllByText('Submit')`                       |
| `findAllBy`             | Asynchronous version of `getAllBy`. Returns a Promise.              | `findAllByTestId('list-item')`                   |

### Common Query Methods

| Query Method            | Description                                                         | Example                                          |
|-------------------------|---------------------------------------------------------------------|--------------------------------------------------|
| `getByText`             | Selects an element by its text content.                             | `getByText('Submit')`                            |
| `getByRole`             | Selects an element by its ARIA role.                                | `getByRole('button')`                            |
| `getByPlaceholderText`  | Selects an element by its placeholder text.                         | `getByPlaceholderText('Enter name')`             |
| `getByLabelText`        | Selects an element by its associated label.                         | `getByLabelText('Username')`                     |
| `getByTestId`           | Selects an element by its data-testid attribute.                    | `getByTestId('submit-btn')`                      |
| `getByAltText`          | Selects an element by its alt text (useful for images).             | `getByAltText('Profile picture')`                |

## Events
React Testing Library provides a `fireEvent` utility to simulate user interactions.

| Event Method        | Description                              | Example                                     |
|---------------------|------------------------------------------|---------------------------------------------|
| `fireEvent.click`   | Simulates a click event.                 | `fireEvent.click(buttonElement)`            |
| `fireEvent.change`  | Simulates a change event.                | `fireEvent.change(inputElement, { target: { value: 'Hello' } })` |
| `fireEvent.submit`  | Simulates a form submission.             | `fireEvent.submit(formElement)`             |
| `fireEvent.keyDown` | Simulates a key down event.              | `fireEvent.keyDown(inputElement, { key: 'Enter' })` |

## Assertions
React Testing Library is often used in conjunction with Jest's assertions.

| Assertion Method           | Description                                         | Example                                           |
|----------------------------|-----------------------------------------------------|---------------------------------------------------|
| `expect(element).toBeInTheDocument()` | Asserts that an element is present in the document. | `expect(buttonElement).toBeInTheDocument()`        |
| `expect(element).toHaveClass(className)` | Asserts that an element has a specific class.    | `expect(divElement).toHaveClass('active')`         |
| `expect(element).toHaveAttribute(attribute, value)` | Asserts that an element has a specific attribute and value. | `expect(inputElement).toHaveAttribute('type', 'text')` |
| `expect(element).toHaveTextContent(text)` | Asserts that an element has specific text content. | `expect(paragraphElement).toHaveTextContent('Hello')` |
| `expect(element).toBeDisabled()` | Asserts that an element is disabled.              | `expect(buttonElement).toBeDisabled()`             |

## Custom Render
Sometimes you need to provide context or a theme to the component you're testing. You can create a custom render function:

```javascript
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

const customRender = (ui, options) =>
  render(ui, { wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>, ...options });

export * from '@testing-library/react';
export { customRender as render };
```
## Testing Asynchronous Code
When dealing with asynchronous code, you can use `findBy`, `waitFor`, or `waitForElementToBeRemoved`.

| Method                      | Description                                                  | Example                                                   |
|-----------------------------|--------------------------------------------------------------|-----------------------------------------------------------|
| `findByText`                | Waits for an element with the given text to appear.          | `await findByText('Success')`                              |
| `waitFor`                   | Waits for a condition to be met before continuing.           | `await waitFor(() => expect(button).toBeEnabled())`        |
| `waitForElementToBeRemoved` | Waits for an element to be removed from the DOM.             | `await waitForElementToBeRemoved(() => getByText('Loading'))` |

## Mocking
You can mock components, modules, or functions to isolate the unit under test.

| Method       | Description                        | Example                                   |
|--------------|------------------------------------|-------------------------------------------|
| `jest.mock`  | Mocks an entire module.            | `jest.mock('axios')`                      |
| `jest.fn`    | Creates a mock function.           | `const mockFunc = jest.fn()`              |
| `jest.spyOn` | Spies on a method of an object.    | `jest.spyOn(module, 'methodName')`        |

## Best Practices
- **Prefer user-centric queries**: Use `getByRole`, `getByLabelText`, etc., over `getByTestId`.
- **Write tests that resemble how users interact with your application**: Focus on the end-user experience.
- **Avoid testing implementation details**: Test behavior and outcomes, not internal state or private methods.

