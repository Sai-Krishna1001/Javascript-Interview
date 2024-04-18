## _Important points need to remember_

### --> Difference var, let and const

* **var**: Globally/function scoped, can be re-declared and updated.

* **let**: Block scoped, can be updated but not re-declared.

* **const**: Block scoped, cannot be updated or re-declared

 
--> An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:

	const p = new Rectangle(); // ReferenceError

	class Rectangle {}
 
### --> What is the Prototype Chain?

In JavaScript, every object has an internal link to another object called its prototype.

This prototype object itself can have its own prototype, forming a chain until an object with a null prototype is reached (which acts as the final link).

By definition, null has no prototype.



-->Now in ES6, When you use class and extends keywords internally JavaScript will still use prototype-based inheritance. It just simplifies the syntax.

-->Two principles with OOP in JS are:

	Object Creation Pattern (Encapsulation)

	Object Reuse Pattern (Inheritance)

--> The prototype of a subclass is the superclass

--> If a method is available in both the subclass and the superclass, the method in the subclass will override the method from the superclass. This behavior is known as method overriding.

--> One of the most important things in object-oriented programming (OOP) is data encapsulation, which means to make private properties and then define public access methods to change these.

