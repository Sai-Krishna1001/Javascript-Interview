## _Important points need to remember_ ✔✔✔

* Javascript is a loosely typed language.
* Typescript is a syntactic superset of Javascript which adds static typing.
* Typescript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.
* Typescript being converted into Javascript means it runs anywhere that Javascript runs. 
* Having TypeScript "guess" the type of a value is called __infer__.
* The `readonly` keyword can prevent arrays from being changed.
* Typescript can infer the type of an array if it has values.
* A __tuple__ is a typed array with a pre-defined length and types for each index.
* A good practice is to make your __tuple__ `readonly`.
* An __enum__ is a special "class" that represents a group of constants (unchangeable variables).
* Type Aliases allow defining types with a custom name(an Alias).
* Interfaces are similar to type aliases, except they **only** apply to `object` types.
* Interfaces can extend each other's definition (**Extending** an interface means you are creating a new interface with the same properties as the original, plus something new).
* If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.
* Using `<>` works the same as casting with `as`. But, (This type of casting will not work with TSX, such as when working on React files.)
* The `this` keyword in a class usually refers to the instance of the class.
* Interfaces can be used to define the type a class must follow through the `implements` keyword.
* A class can implement multiple interfaces by listing each one after `implements`, separated by a comma like so: `class Rectangle implements Shape, Colored {`
* Classes can extend each other through the `extends` keyword. A class can only extends one other class.
* **Override**: When a class extends another class, it can replace the members of the parent class with the same name.
* **Abstract Classes**: Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the `abstract` keyword. Members that are left unimplemented also use the `abstract` keyword.
* Abstract classes cannot be directly instantiated, as they do not have all their members implemented.
* Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicityly define the types that they use. Generics makes it easier to write reusable code.
* `keyof` is a keyword in Typescript which is used to extract the key type from an object type.
* Typescript can't always correctly infer a varibles/array type.
* 
