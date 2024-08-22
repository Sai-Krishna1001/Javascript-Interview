# TypeScript Interview Questions and Answers

1. **What is TypeScript?**
   - A superset of JavaScript that adds static typing.

2. **How do you define a variable with a specific type in TypeScript?**
   - Using `let/const/var variableName: type = value;`.

3. **What are the benefits of using TypeScript?**
   - Type safety, better tooling, and improved code maintainability.

4. **How do you create an interface in TypeScript?**
   - `interface InterfaceName { property: type; }`.

5. **What is the difference between `interface` and `type` in TypeScript?**
   - `interface` is primarily for object shapes; `type` can alias any type, including primitives, unions, and intersections.

6. **How do you define an optional property in an interface?**
   - By using a question mark: `propertyName?: type;`.

7. **What is Type Inference in TypeScript?**
   - The ability of TypeScript to automatically deduce the type of a variable.

8. **How do you specify a union type in TypeScript?**
   - By using the `|` symbol: `type VariableType = Type1 | Type2;`.

9. **What are Generics in TypeScript?**
   - Generics allow you to create reusable components that work with any data type.

10. **How do you define a generic function in TypeScript?**
    - `function functionName<T>(arg: T): T { return arg; }`.

11. **What is the purpose of `never` type in TypeScript?**
    - It represents values that never occur, often used in exhaustive type checks.

12. **How do you use `readonly` in TypeScript?**
    - By prefixing properties with `readonly` to prevent reassignment: `readonly propertyName: type;`.

13. **What is the `any` type in TypeScript?**
    - A type that disables type checking, allowing any type of value.

14. **How do you handle null and undefined in TypeScript?**
    - Using union types: `type VariableType = string | null | undefined;`.

15. **What is `unknown` type in TypeScript?**
    - A safer alternative to `any` that requires type checking before use.

16. **How do you define a tuple in TypeScript?**
    - Using an array with specified types: `let tuple: [type1, type2] = [value1, value2];`.

17. **What is an Enum in TypeScript?**
    - A way to define a set of named constants, either numeric or string-based.

18. **How do you use type assertions in TypeScript?**
    - Using `as` syntax: `let variable = value as Type;`.

19. **What is `namespace` in TypeScript?**
    - A way to organize and group related code, similar to modules but mainly used in legacy codebases.

20. **How do you extend an interface in TypeScript?**
    - Using the `extends` keyword: `interface NewInterface extends BaseInterface {}`.
