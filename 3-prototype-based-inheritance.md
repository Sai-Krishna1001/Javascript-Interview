## 3. Prototype Based Inheritance

Prototype-based inheritance is a fundamental concept in JavaScript that allows objects to inherit properties and methods from other objects through a prototype chain.

### 3.1 The Prototype Chain:
In JavaScript, every object has an internal link to another object called its prototype.

This prototype object itself can have its own prototype, forming a chain until an object with a null prototype is reached (which acts as the final link).

By definition, null has no prototype.

### 3.2 How It Works:
When you access a property or method on an object, JavaScript first looks for it in the object itself.

If not found, it follows the prototype chain by checking the prototype object.

This process continues until the property or method is found or until the end of the chain (i.e., when the prototype is null).

### 3.3 Example:
Let’s say we have an object animal with a property eats:
```js
let animal = { eats: true };
```
We create another object rabbit and set its prototype to animal:
```js
let rabbit = { jumps: true, __proto__: animal };
```
Now, if we read a property from rabbit (e.g., rabbit.eats), JavaScript will automatically look for it in animal (following the prototype chain).
```js
console.log(rabbit.eats) // Output: true
```
### 3.4 Inheritance and Reusability:
Prototypal inheritance allows us to reuse properties and methods from one object to another.

For example, if animal has useful properties and methods, they become automatically available in rabbit.

Such inherited properties are accessible on the child object without explicitly defining them.

### 3.5 Limitations:
The references in the prototype chain cannot form circular loops (JavaScript throws an error if we try to create circular references).

The value of ```__proto__ ```can be either an object or null.
#### 3.6 Summary
prototype-based inheritance is a powerful mechanism that enables code reuse, cleaner design, and efficient memory usage in JavaScript. 
