# Hidden Truths of JavaScript Objects

JavaScript objects are one of the fundamental data structures, but there are several hidden truths and less-known behaviors associated with them.

---

### 1. Objects are References

Objects are reference types, meaning they are not copied when assigned or passed to functions. Only a reference (or pointer) to the object is assigned.

**Example:**

- `const obj1 = { a: 10 };`
- `const obj2 = obj1;`
- `obj2.a = 20;`
- `console.log(obj1.a); // 20`

Changing `obj2` also affects `obj1` because they reference the same object in memory.

---

### 2. Object Properties Can Be Accessed Dynamically

Object properties can be accessed not just with dot notation but also dynamically using square brackets.

**Example:**

- `const obj = { a: 10 };`
- `const key = 'a';`
- `console.log(obj[key]); // 10`

This allows you to access properties dynamically, especially when the key is stored in a variable.

---

### 3. `__proto__` and the Prototype Chain

All JavaScript objects have a hidden property called `__proto__`, which points to the object’s prototype (from which it inherits properties and methods). This is part of the prototype chain.

**Example:**

- `const obj = {};`
- `console.log(obj.__proto__ === Object.prototype); // true`

The `__proto__` is often confused with the `prototype` property found on constructors.

---

### 4. Properties Can Be Enumerable or Non-enumerable

By default, properties of an object are enumerable, meaning they can be iterated over using loops like `for...in`. However, properties defined using `Object.defineProperty` can be made non-enumerable.

**Example:**

- `const obj = { a: 10 };`
- `Object.defineProperty(obj, 'b', { value: 20, enumerable: false });`
- `console.log(Object.keys(obj)); // ['a']`

The property `b` will not appear in `Object.keys()` output since it's non-enumerable.

---

### 5. Object Keys Are Always Strings or Symbols

Even if you use a number or another data type as a key, it is automatically converted to a string.

**Example:**

- `const obj = {};`
- `obj[10] = 'value';`
- `console.log(Object.keys(obj)); // ['10']`

Although the key was `10` (a number), it is stored as the string `"10"`.

---

### 6. Objects Can Have Symbol Keys

Besides strings, JavaScript also allows using `Symbols` as object keys. Symbols are unique and are often used to create non-enumerable or hidden object properties.

**Example:**

- `const sym = Symbol('key');`
- `const obj = { [sym]: 'value' };`
- `console.log(Object.keys(obj)); // []`
- `console.log(obj[sym]); // 'value'`

Since symbol keys are not enumerable by default, they won't appear in `Object.keys()`.

---

### 7. Object Freezing (`Object.freeze`)

You can use `Object.freeze()` to prevent modification of an object. Once frozen, the object’s properties cannot be changed, added, or deleted.

**Example:**

- `const obj = { a: 10 };`
- `Object.freeze(obj);`
- `obj.a = 20; // silently fails in non-strict mode`
- `console.log(obj.a); // 10`

Note that `freeze` is shallow, so nested objects can still be modified unless they are frozen too.

---

### 8. Shallow Copy vs Deep Copy

When copying objects, it's important to understand the difference between shallow and deep copying. A shallow copy only copies the reference to nested objects, while a deep copy duplicates all levels of the object.

**Example (Shallow Copy):**

- `const obj1 = { a: 1, b: { c: 2 } };`
- `const obj2 = Object.assign({}, obj1);`
- `obj2.b.c = 3;`
- `console.log(obj1.b.c); // 3`

To make a deep copy, you need a method like `JSON.parse(JSON.stringify(obj))`, but this has its own limitations (e.g., it doesn't handle functions).

---

### 9. Using `in` to Check for Property Existence

You can check whether a property exists in an object (including in its prototype chain) using the `in` operator.

**Example:**

- `const obj = { a: 1 };`
- `'a' in obj; // true`
- `'b' in obj; // false`

Unlike `obj.hasOwnProperty()`, which only checks for direct properties, `in` checks for properties in the entire prototype chain.

---

### 10. Destructuring Objects

JavaScript allows destructuring of objects, which simplifies extracting multiple properties from an object.

**Example:**

- `const obj = { a: 10, b: 20 };`
- `const { a, b } = obj;`
- `console.log(a); // 10`
- `console.log(b); // 20`

You can also assign default values during destructuring if the property is not found.

---

### 11. `Object.assign` for Cloning

The `Object.assign()` method is commonly used for creating shallow copies of objects or merging objects.

**Example:**

- `const target = {};`
- `const source = { a: 10 };`
- `Object.assign(target, source);`
- `console.log(target); // { a: 10 }`

However, remember that `Object.assign` only does a shallow copy, so changes to nested objects will affect both the source and target.

---

### 12. Object Spread Operator (`...`)

The object spread operator (`...`) is another way to shallow copy or merge objects, similar to `Object.assign()`.

**Example:**

- `const obj1 = { a: 1 };`
- `const obj2 = { ...obj1, b: 2 };`
- `console.log(obj2); // { a: 1, b: 2 }`

This is a concise and modern approach to cloning or merging objects.

---

### Summary Table

| Hidden Truth                                    | Explanation                                                |
|-------------------------------------------------|------------------------------------------------------------|
| Objects are references                          | Objects are passed by reference, not by value.              |
| Dynamic property access                         | Properties can be accessed with both dot and bracket notation. |
| `__proto__` and prototype chain                 | All objects inherit properties and methods from their prototype. |
| Enumerable vs non-enumerable properties         | Properties can be made non-enumerable using `Object.defineProperty`. |
| Object keys are strings or symbols              | Even numeric keys are stored as strings, except for symbols. |
| Objects can have symbol keys                    | Symbols allow for hidden, non-enumerable keys.              |
| Freezing objects                                | `Object.freeze()` makes objects immutable, but only shallowly. |
| Shallow copy vs deep copy                       | Shallow copies duplicate references, deep copies duplicate all data. |
| Checking property existence with `in`           | `in` checks both the object and its prototype chain.        |
| Destructuring objects                           | Simplifies extracting properties from objects.              |
| `Object.assign()` for shallow copying           | Used to clone or merge objects, but only does shallow copies. |
| Object spread operator (`...`)                  | Modern syntax for cloning or merging objects.               |
