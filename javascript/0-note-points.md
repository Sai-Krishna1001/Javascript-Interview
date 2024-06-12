## _Important points need to remember_

- **Difference var, let and const**

	* **var**: Globally/function scoped, can be re-declared and updated.
	
	* **let**: Block scoped, can be updated but not re-declared.
	
	* **const**: Block scoped, cannot be updated or re-declared

 
- An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:

	const p = new Rectangle(); // ReferenceError

	class Rectangle {}
 
- Two principles with OOP in JS are:

	Object Creation Pattern (Encapsulation)

	Object Reuse Pattern (Inheritance)

- The prototype of a subclass is the superclass

- If a method is available in both the subclass and the superclass, the method in the subclass will override the method from the superclass. This behavior is known as method overriding.

- One of the most important things in object-oriented programming (OOP) is data encapsulation, which means to make private properties and then define public access methods to change these.

- With the `||` operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.

- With the `&&` operator, the right-hand value will be returned if the left-hand value is a truthy value.

- Primitive Data Types (string, number, boolean, undefined, null) are passed by value.

- Non-Primitive Data Types (object, array, function) are passed by reference.

- The `delete` operator is specifically designed to delete properties from objects, not variables or function declarations.
