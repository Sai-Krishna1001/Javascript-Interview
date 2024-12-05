
# Default Values in JavaScript

## **Hidden Rules and Truths**

1. **Default Parameters are Evaluated at Call-Time**
   - Default parameters are evaluated every time the function is called, not when the function is defined.
   ```javascript
   function addTimestamp(value = Date.now()) {
       return value;
   }

   console.log(addTimestamp()); // Current timestamp
   console.log(addTimestamp()); // Different timestamp (if time has passed)
   ```

2. **Expressions in Default Parameters**
   - Default parameters can use expressions, including other parameters.
   ```javascript
   function greet(name, greeting = `Hello, ${name}`) {
       return greeting;
   }

   console.log(greet("Alice")); // "Hello, Alice"
   console.log(greet("Alice", "Hi!")); // "Hi!"
   ```

3. **Interaction with `undefined`**
   - Default values are only applied when a parameter is explicitly `undefined`.
   ```javascript
   function show(value = "Default") {
       console.log(value);
   }

   show(); // "Default"
   show(undefined); // "Default"
   show(null); // null (default not applied)
   ```

4. **No Hoisting for Default Values**
   - Variables used in default values must be declared earlier in the parameter list.
   ```javascript
   function calculate(a = b, b = 5) {
       return a + b;
   }

   console.log(calculate()); // ReferenceError: b is not defined
   ```

5. **Default Values with Destructuring**
   - Default values in destructured objects or arrays are applied only when the value is `undefined`.
   ```javascript
   const { x = 10 } = { x: undefined };
   console.log(x); // 10

   const [y = 20] = [null];
   console.log(y); // null
   ```

6. **Default Value Expressions Cannot Reference Later Parameters**
   - Default expressions cannot refer to parameters declared later.
   ```javascript
   function example(a = b, b = 5) {
       return a + b;
   }

   console.log(example()); // ReferenceError: b is not defined
   ```

---

## **Tricky Code Snippets**

### **Snippet 1: Default Parameters and `arguments` Object**
```javascript
function show(value = 10) {
    console.log(value, arguments[0]);
}

show(5); // 5, 5
show(); // 10, undefined
```

**Explanation**:
- Default parameters do not affect the `arguments` object. The `arguments` object reflects the actual arguments passed.

---

### **Snippet 2: Function with Default and Rest Parameters**
```javascript
function calculate(a, b = 2, ...rest) {
    return a + b + rest.length;
}

console.log(calculate(1)); // 3
console.log(calculate(1, undefined, 3, 4)); // 5
```

**Explanation**:
- Default values are applied when `undefined` is passed, and `...rest` collects the remaining arguments.

---

### **Snippet 3: Default Value in Destructuring**
```javascript
const config = { mode: "dark" };
const { theme = "light", mode = "default" } = config;

console.log(theme); // "light"
console.log(mode); // "dark"
```

**Explanation**:
- Default values in destructuring are used only if the property is `undefined`.

---

### **Snippet 4: Mutually Dependent Default Parameters**
```javascript
function print(a = 1, b = a * 2, c = b + 3) {
    console.log(a, b, c);
}

print(); // 1, 2, 5
print(2); // 2, 4, 7
```

**Explanation**:
- Parameters can reference earlier parameters in their default values.

---

### **Snippet 5: Overriding Default Object Properties**
```javascript
function configure(options = { theme: "dark" }) {
    options.theme = "light";
    console.log(options);
}

configure(); // { theme: "light" }
configure({}); // { theme: "light" }
```

**Explanation**:
- Default values are used when the parameter is `undefined`. Passing `{}` does not trigger the default.

---

### **Snippet 6: Non-Primitive Default Value**
```javascript
function createArray(item, list = []) {
    list.push(item);
    return list;
}

console.log(createArray(1)); // [1]
console.log(createArray(2)); // [2] (separate array)
```

**Explanation**:
- A new default object or array is created every time the function is called.

---

### **Snippet 7: Default Values with `null`**
```javascript
function fallback(value = "Default") {
    return value;
}

console.log(fallback()); // "Default"
console.log(fallback(null)); // null
```

**Explanation**:
- Default values are applied only when the parameter is `undefined`. Passing `null` bypasses the default.

---

## **Best Practices**
- Use default parameters for simplicity and clarity.
- Be cautious when using non-primitive default values like objects or arrays.
- Avoid over-relying on defaults; clearly define values in calling code when possible.

