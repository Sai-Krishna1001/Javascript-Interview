# Hidden Truths of Strict Mode in JavaScript

---

## 1. Enabling Strict Mode

- Strict mode is enabled by placing the directive `'use strict';` at the top of a script or function.

`` `'use strict';``

`` `function myFunction() {``

`` `  'use strict';``

`` `  // Strict mode is enabled only in this function``

`` `}``

- When applied globally, it affects all code in the file. However, if placed inside a function, it only affects that function.

---

## 2. Prevents the Use of Undeclared Variables

- In non-strict mode, assigning a value to an undeclared variable creates a global variable.
- In strict mode, this results in a `ReferenceError`.

`` `'use strict';``

`` `x = 10; // ReferenceError: x is not defined``

---

## 3. Makes `this` in Global Scope `undefined`

- In strict mode, `this` in the global scope becomes `undefined` instead of pointing to the global object (`window` in browsers).

`` `'use strict';``

`` `console.log(this); // undefined in global context``

---

## 4. Disallows Duplicating Parameter Names

- Strict mode does not allow function parameters to have the same name. In non-strict mode, this is allowed.

`` `'use strict';``

`` `function myFunc(a, a) {``

`` `  // SyntaxError: Duplicate parameter name not allowed in strict mode``

`` `}``

---

## 5. Prevents Deleting Variables and Functions

- Strict mode forbids the deletion of variables, functions, or function arguments.

`` `'use strict';``

`` `var x = 10;``

`` `delete x; // SyntaxError: Delete of an unqualified identifier in strict mode``

`` `function myFunc() {``

`` `  return 'Hello';``

`` `}``

`` `delete myFunc; // SyntaxError``

---

## 6. Avoids Accidental Globals in Functions

- In strict mode, functions can't unintentionally declare global variables by omitting `var`, `let`, or `const`.

`` `'use strict';``

`` `function test() {``

`` `  x = 5; // ReferenceError: x is not defined``

`` `}``

`` `test();``

---

## 7. Prohibits `with` Statement

- The `with` statement is disallowed in strict mode because it can make code more difficult to understand and optimize.

`` `'use strict';``

`` `with (Math) {``

`` `  // SyntaxError: Strict mode code may not include a with statement``

`` `  console.log(sqrt(16));``

`` `}``

---

## 8. Makes Assigning to Read-Only Properties an Error

- In non-strict mode, attempting to assign a value to a read-only property silently fails.
- In strict mode, it throws a `TypeError`.

`` `'use strict';``

`` `const obj = {};``

`` `Object.defineProperty(obj, 'x', { value: 10, writable: false });``

`` `obj.x = 20; // TypeError: Cannot assign to read only property 'x'``

---

## 9. No Implicit `this` Conversion

- In strict mode, when calling a function without an explicit context (`this`), `this` remains `undefined` instead of defaulting to the global object.

`` `'use strict';``

`` `function myFunc() {``

`` `  console.log(this); // undefined, not global object``

`` `}``

`` `myFunc();``

---

## 10. Secures JavaScript's `eval()`

- In strict mode, `eval()` does not introduce new variables into the surrounding scope. Variables declared inside `eval()` remain local to the `eval` statement.

`` `'use strict';``

`` `eval('var x = 10');``

`` `console.log(x); // ReferenceError: x is not defined``

---

## 11. Makes Deleting Non-Configurable Properties an Error

- Strict mode prevents the deletion of non-configurable properties. Attempting to delete such properties will throw an error.

`` `'use strict';``

`` `const obj = Object.freeze({ x: 1 });``

`` `delete obj.x; // TypeError: Cannot delete property 'x' of #<Object>``

---

## 12. Throws Errors on Assigning to `NaN`, `Infinity`, or `undefined`

- In strict mode, assigning values to `NaN`, `Infinity`, or `undefined` results in a `TypeError`.

`` `'use strict';``

`` `NaN = 123; // TypeError: Cannot assign to 'NaN'``

`` `Infinity = 456; // TypeError: Cannot assign to 'Infinity'``

`` `undefined = 'foo'; // TypeError: Cannot assign to 'undefined'``

---

## 13. Prohibits `arguments.callee`

- The `arguments.callee` property is disallowed in strict mode, as it encourages the use of named functions for recursion instead.

`` `'use strict';``

`` `function myFunc() {``

`` `  console.log(arguments.callee); // TypeError``

`` `}``

`` `myFunc();``

---

## Conclusion

- Strict mode in JavaScript is a way to opt into a restricted version of JavaScript that can help you write cleaner, safer code by eliminating certain silent errors and providing more predictable behavior.
- By disallowing certain syntax and throwing errors for common mistakes, strict mode can help prevent bugs and make your code more maintainable.
