# Hidden Truths of the `delete` Operator in JavaScript

The `delete` operator in JavaScript is used to remove properties from an object, but there are several hidden behaviors that developers should be aware of.

---

### 1. `delete` only works on object properties, not variables

The `delete` operator can remove a property from an object, but it **cannot** delete variables or function declarations.

**Example:**

- `var a = 10;`
- `delete a; // returns false`
- `console.log(a); // still 10`

---

### 2. `delete` on non-configurable properties

If a property is **non-configurable**, it cannot be deleted. Most built-in properties and properties created using `Object.defineProperty` with `configurable: false` cannot be deleted.

**Example:**

- `const obj = {};`
- `Object.defineProperty(obj, 'x', { value: 10, configurable: false });`
- `delete obj.x; // returns false`
- `console.log(obj.x); // still 10`

---

### 3. `delete` on array elements

The `delete` operator can be used on array elements, but it **does not change the array length**. It only sets the value of that index to `undefined`.

**Example:**

- `let arr = [1, 2, 3];`
- `delete arr[1];`
- `console.log(arr); // [1, empty, 3]`
- `console.log(arr.length); // 3`

---

### 4. Effect on prototype properties

The `delete` operator only affects direct properties of an object. It does not delete properties inherited from the prototype chain.

**Example:**

- `const proto = { x: 10 };`
- `const obj = Object.create(proto);`
- `console.log(obj.x); // 10`
- `delete obj.x; // returns false`
- `console.log(obj.x); // 10`

---

### 5. `delete` returns `true` on non-existent properties

Trying to delete a non-existent property will return `true` since there is nothing to delete.

**Example:**

- `const obj = { a: 10 };`
- `console.log(delete obj.b); // returns true`

---

### 6. Deleting properties in strict mode

In **strict mode**, attempting to delete non-configurable properties or variables throws a `SyntaxError`.

**Example:**

- `'use strict';`
- `var a = 10;`
- `delete a; // SyntaxError in strict mode`

---

### 7. `delete` does not free memory

Deleting a property from an object does not necessarily free up memory, as memory management is handled by the garbage collector based on reachability.

---

### 8. `delete` and `undefined`

After deleting a property, attempting to access it will return `undefined`, but the property itself is no longer part of the object.

**Example:**

- `const obj = { a: 1 };`
- `delete obj.a;`
- `console.log(obj.a); // undefined`
- `console.log(obj); // {}`

---

### 9. Cannot delete global object properties declared with `var`, `let`, or `const`

Global variables declared with `var`, `let`, or `const` cannot be deleted.

**Example:**

- `var a = 10;`
- `let b = 20;`
- `delete a; // returns false`
- `delete b; // returns false`

---

### 10. Performance considerations

Frequent use of the `delete` operator can cause performance issues in JavaScript engines because it forces the object to be restructured internally.

---

### Summary Table

| Scenario                                       | Result  |
|------------------------------------------------|---------|
| Deleting variables                             | ❌ Fails |
| Deleting properties (configurable)             | ✅ Succeeds |
| Deleting non-configurable properties           | ❌ Fails |
| Deleting inherited prototype properties        | ❌ Fails |
| Deleting array elements                        | ✅ Succeeds, but leaves a hole |
| Non-existent properties                        | ✅ Returns `true` |
| Global variables (`var`, `let`, `const`)       | ❌ Fails |
