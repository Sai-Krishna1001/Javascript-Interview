## 5. Difference between const and Object.freeze()
### 5.1 const Keyword:
* The const keyword creates a read-only reference to a value.
* Variables declared with const are immutable, meaning you cannot reassign them to different values.
* Attempting to reassign a constant variable will result in a TypeError.
#### 5.1.1 Example 1:
```js
const myName = "Geeksforgeeks";
console.log(myName); // Output: "Geeksforgeeks"
myName = "gfg"; // Uncaught TypeError
```
* Here, myName is constant, but its actual value can still change. You can modify the properties of an object declared with const, but you cannot assign a different value to the constant itself.
#### 5.1.2 Example 2:
```js
const person = { name: "Geeksforgeeks" };
person.name = "gfg"; // No TypeError
console.log(person.name); // Output: "gfg"
```
* The person object’s properties can be modified, but you cannot reassign a different value to person.
### 5.2 Object.freeze() Method:
* The Object.freeze() method is used to make an object immutable.
* It takes an object as an argument and returns the same object with its properties frozen.
  
#### 5.2.1 Example 1:
```js
const frozenPerson = Object.freeze({ name: "Geeksforgeeks" });
// In strict mode: TypeError (non-strict mode prints "Geeksforgeeks")
frozenPerson.name = "gfg";
console.log(frozenPerson.name); // Output: "Geeksforgeeks"
```
* The Object.freeze() method prevents changes to the properties of the frozenPerson object.
#### 5.2.2 Example 2:
```js
const personWithAddress = Object.freeze({
    name: 'Geeksforgeeks',
    address: { city: "Noida" }
});
personWithAddress.address.country = "India"; // No TypeError
```
* However, the personWithAddress.address object is not immutable; you can add new properties to it.
### 5.3 Summary:
* const prevents reassignment of variables.
* Object.freeze() prevents mutability of an object’s properties.
* In a nutshell, const deals with variable reassignment, while Object.freeze() ensures immutability at the object level
