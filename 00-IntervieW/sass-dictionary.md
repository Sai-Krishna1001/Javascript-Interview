# SASS/SCSS Terminology Keywords Dictionary

| **Keyword/Term**        | **Definition**                                                                                       |
|-------------------------|------------------------------------------------------------------------------------------------------|
| **SASS (Syntactically Awesome Style Sheets)** | A preprocessor scripting language that is interpreted or compiled into CSS, offering more powerful features and a cleaner syntax. |
| **SCSS (Sassy CSS)**    | A newer syntax of SASS that is fully compatible with CSS, using curly braces `{}` and semicolons `;`, making it more accessible to developers familiar with CSS. |
| **Variable**            | A way to store values that can be reused throughout the stylesheet. In SASS/SCSS, variables are defined using the `$` symbol. Example: `$primary-color: #333;`. |
| **Nesting**             | A feature that allows CSS selectors to be nested within one another, mirroring the HTML structure and making stylesheets more readable. |
| **Mixin**               | A reusable block of styles that can be included in other selectors. Mixins can also accept arguments, making them dynamic. Defined using `@mixin` and included with `@include`. |
| **Extend/Inheritance**  | A feature that allows one selector to inherit styles from another, reducing repetition. This is done using the `@extend` directive. |
| **Partial**             | A SASS/SCSS file that is meant to be imported into other SASS/SCSS files. Partials are named with a leading underscore `_`, indicating that they should not be compiled on their own. |
| **Import**              | A directive that allows one SASS/SCSS file to include the contents of another, using `@import`. This promotes modularity and reusability in stylesheets. |
| **Function**            | A reusable block of code that returns a value and can be used within stylesheets. Functions are defined with `@function` and called just like CSS functions. |
| **Interpolation**       | A feature that allows variables or expressions to be embedded within selectors, properties, or values using `#{}` syntax. |
| **Parent Selector (`&`)** | A reference to the parent selector in nested rules, allowing styles to be applied to states or pseudo-classes based on the parent. |
| **Control Directive**   | SASS/SCSS allows logic and control flow with directives like `@if`, `@else`, `@for`, `@each`, and `@while`, enabling more complex and dynamic styling. |
| **Operators**           | SASS/SCSS supports mathematical and logical operators for calculations, such as `+`, `-`, `*`, `/`, `%`, `==`, `!=`, `<`, `>`, and more. |
| **Placeholder Selector**| A special type of selector defined with `%` that is intended to be extended but will not produce any CSS output unless extended. Example: `%button-style`. |
| **Map**                 | A collection of key-value pairs that can be used to store related values, similar to objects in JavaScript. Maps are defined with parentheses `()` and accessed using `map-get()`. |
| **List**                | A collection of values separated by spaces or commas, often used to define multiple related items. Lists are defined without any special characters. |
| **@use**                | A directive that loads a SASS/SCSS file and makes its mixins, functions, and variables available, with namespace control to avoid naming conflicts. |
| **@forward**            | A directive used to re-export a module's variables, mixins, or functions from one file to another, allowing for better organization and encapsulation. |
| **Built-in Functions**  | SASS/SCSS provides a set of built-in functions for color manipulation, list operations, string operations, and more. Examples: `darken()`, `lighten()`, `nth()`, `length()`. |
| **Color Functions**     | Functions provided by SASS/SCSS to manipulate and generate colors, such as `darken()`, `lighten()`, `mix()`, `adjust-hue()`, and `opacity()`. |
| **String Interpolation**| A method for including variables or expressions inside a string using `#{}` syntax, enabling dynamic value generation within CSS properties or selectors. |
| **Partial Naming Convention** | Partials are typically named with an underscore to indicate that they are meant to be included in other stylesheets, not compiled directly. Example: `_variables.scss`. |
| **Module System**       | A system introduced with `@use` and `@forward` to manage SASS/SCSS files and namespaces, ensuring encapsulation and preventing global variable conflicts. |
| **Silent Comments**     | Comments that are not included in the final compiled CSS, written with `//` in SCSS. They are useful for notes and documentation in the code. |
| **Loud Comments**       | Comments that are included in the final compiled CSS, written with `/* */`. They are useful for adding important notes or documentation in the output CSS. |
| **Math Functions**      | Functions like `percentage()`, `round()`, `ceil()`, `floor()`, and `abs()` used to perform mathematical operations within stylesheets. |
| **Mixin Arguments**     | Mixins can accept arguments to make them more flexible and dynamic, allowing the same mixin to be used with different values. |
| **Variable Scope**      | The scope of a variable determines where it can be used. Variables can be local to a specific block or global across the entire stylesheet. |
| **Error Handling**      | SASS/SCSS provides directives like `@warn`, `@error`, and `@debug` for handling errors and debugging issues in stylesheets. |
| **Selector Nesting**    | Allows selectors to be nested inside other selectors to reflect the structure of the HTML, making styles more readable and easier to maintain. |
| **Interpolation in Selectors** | The ability to use variables and expressions within selectors to create dynamic and reusable styles. Example: `.class-#{$variable}`. |
| **Namespace**           | The name used to access the members of a module loaded with `@use`. It helps avoid conflicts by organizing code into separate namespaces. |
| **Inheritance**         | Allows one selector to inherit the styles of another, reducing duplication and keeping styles DRY (Don't Repeat Yourself). |
| **Vendor Prefixes**     | SASS/SCSS allows for easy addition of vendor-specific prefixes to CSS properties using mixins or functions. |
