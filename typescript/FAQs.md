# TypeScript Interview Questions and Answers

## 1. What are Generics in TypeScript?
**Answer:** 
Generics in TypeScript allow you to create reusable components that can work with any data type. They provide a way to make a component work with any type while preserving the type information. This enables better type safety and code reuse.

## 2. What is `Partial<T>` in TypeScript?
**Answer:** 
`Partial<T>` is a utility type in TypeScript that makes all properties of type `T` optional. This is useful when you want to create an object that has a subset of the properties of another type.

## 3. What are the differences between JavaScript and TypeScript?
**Answer:**
- **JavaScript:** A dynamically typed language without type checking. It is the scripting language used to create and control dynamic website content.
- **TypeScript:** A statically typed superset of JavaScript that adds optional static types and other features. It allows for better tooling and catching errors at compile time rather than at runtime.

## 4. What are Union types in TypeScript?
**Answer:** 
Union types allow a variable to be one of specific types. This is useful when a value can be more than one type.

## 5. What is the difference between types and interfaces in TypeScript?
**Answer:** 
- **Types:** Can represent any type, including primitives, unions, and intersections. They can define alias for a type and can be used to describe the shape of data.
- **Interfaces:** Primarily used for object types and can be merged. Interfaces are more extendable than types and are typically used for defining the shape of an object or a class.

## 6. List some basic types in TypeScript.
**Answer:** 
- `string`
- `number`
- `boolean`
- `array`
- `tuple`
- `enum`
- `any`
- `void`
- `null`
- `undefined`
- `object`

## 7. What is the `extends` keyword used for in TypeScript?
**Answer:** 
`extends` is used to create a class that inherits properties and methods from another class, or to create a type that extends another type. This allows for the reuse of common functionality and the creation of more specific types or classes.
