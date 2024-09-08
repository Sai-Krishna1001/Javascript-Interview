# Hidden Truths of JavaScript Strings

JavaScript strings are a core part of the language, but they come with several interesting and lesser-known characteristics.

---

### 1. Strings are Immutable

In JavaScript, strings are immutable, meaning once a string is created, it cannot be changed. Any operation that appears to modify a string actually creates a new string.

**Example:**

- `let str = "hello";`
- `str[0] = "H";`
- `console.log(str); // "hello"`

If you want to change part of a string, you must create a new string.

**Example:**

- `let str = "hello";`
- `str = "H" + str.slice(1);`
- `console.log(str); // "Hello"`

---

### 2. String Length Property

The `.length` property of a string gives the number of characters in the string, including spaces and special characters.

**Example:**

- `let str = "Hello World!";`
- `console.log(str.length); // 12`

Even emojis, despite being visually larger, count as two characters in `.length`.

**Example:**

- `let emojiStr = "😊";`
- `console.log(emojiStr.length); // 2`

---

### 3. Strings Can Be Accessed Like Arrays

You can access individual characters of a string using bracket notation, similar to arrays. However, unlike arrays, you cannot modify characters using bracket notation (since strings are immutable).

**Example:**

- `let str = "JavaScript";`
- `console.log(str[0]); // "J"`

---

### 4. `charAt()` vs Bracket Notation

Both `charAt()` and bracket notation allow you to access characters of a string by index, but `charAt()` is safer for older environments and will return an empty string if the index is out of bounds, while bracket notation returns `undefined`.

**Example:**

- `let str = "hello";`
- `console.log(str.charAt(10)); // ""`
- `console.log(str[10]); // undefined`

---

### 5. Strings are "Primitive" but Have Methods

Although strings are primitive types, they behave as objects when you call methods on them. JavaScript temporarily converts the string to an object to call the method, then discards the object.

**Example:**

- `let str = "JavaScript";`
- `console.log(str.toUpperCase()); // "JAVASCRIPT"`

Behind the scenes, JavaScript creates a temporary `String` object to execute the method.

---

### 6. Template Literals (`backticks`) 

Template literals, denoted by backticks (`` ` ``), allow multi-line strings and embedded expressions using `${}`.

**Example:**

- `let name = "John";`
- `let greeting = \`Hello, \${name}!\`;`
- `console.log(greeting); // "Hello, John!"`

---

### 7. Strings Can Include Unicode Characters

JavaScript strings can store and handle Unicode characters, including emojis and special symbols. Unicode characters can be represented using escape sequences like `\uXXXX` for 4-digit hex codes or `\u{XXXXXX}` for longer codes.

**Example:**

- `let heart = "\u2764";`
- `let smiley = "\u{1F600}";`
- `console.log(heart); // "❤"`
- `console.log(smiley); // "😀"`

---

### 8. `indexOf()` and `includes()` Behavior

Both `indexOf()` and `includes()` are used to find substrings in a string, but they behave slightly differently.

- `indexOf()` returns the index of the first occurrence of the substring, or `-1` if not found.
- `includes()` returns `true` if the substring is found, otherwise `false`.

**Example:**

- `let str = "hello world";`
- `console.log(str.indexOf("world")); // 6`
- `console.log(str.includes("world")); // true`
- `console.log(str.indexOf("Earth")); // -1`
- `console.log(str.includes("Earth")); // false`

---

### 9. `split()` Can Be Tricky

The `split()` method can turn a string into an array, but edge cases can lead to unexpected behavior.

**Example:**

- `let str = "a, ,c";`
- `console.log(str.split(",")); // ["a", " ", "c"]`

If you split by an empty string, it splits the string into individual characters.

**Example:**

- `let str = "abc";`
- `console.log(str.split("")); // ["a", "b", "c"]`

---

### 10. Escape Sequences in Strings

Strings can include special characters using escape sequences:

- `\n` for a new line.
- `\t` for a tab.
- `\'` for a single quote.
- `\"` for a double quote.
- `\\` for a backslash.

**Example:**

- `let str = "Line 1\nLine 2";`
- `console.log(str); //`

---

### 11. String Comparison is Case-Sensitive

JavaScript compares strings lexicographically, character by character, and in a case-sensitive manner.

**Example:**

- `"abc" > "ABC" // true`
- `"abc" === "ABC" // false`

If you need case-insensitive comparison, you should convert both strings to lowercase (or uppercase) first.

**Example:**

- `let str1 = "Hello";`
- `let str2 = "hello";`
- `console.log(str1.toLowerCase() === str2.toLowerCase()); // true`

---

### 12. Strings are "Indexed" by Code Unit, Not by Character

JavaScript strings are encoded as UTF-16, so some characters (like emojis or special symbols) are represented by two 16-bit code units. This can lead to unexpected behavior when working with such characters.

**Example:**

- `let str = "😊";`
- `console.log(str.length); // 2`

This string contains one emoji, but its length is 2 because it uses two code units.

---

### 13. `repeat()` Method

The `repeat()` method returns a new string with a specified number of copies of the original string concatenated together.

**Example:**

- `let str = "ha";`
- `console.log(str.repeat(3)); // "hahaha"`

---

### 14. String Iteration with `for...of`

You can iterate over a string’s characters using the `for...of` loop, which iterates character-by-character, even for multi-byte characters like emojis.

**Example:**

- `let str = "hello 😊";`
- `for (let char of str) {`
`console.log(char);`
- `}`

This loop correctly handles multi-byte characters, unlike `charAt()` or bracket notation.

---

### 15. Substrings with `slice()`, `substring()`, and `substr()`

JavaScript provides three methods for extracting parts of a string:

- `slice(start, end)` – extracts part of the string from `start` to `end` (end not included). Negative indices work.
- `substring(start, end)` – extracts part of the string from `start` to `end` (end not included), but negative indices are treated as `0`.
- `substr(start, length)` – extracts a substring from `start` with the specified `length`.

**Example:**

- `let str = "JavaScript";`
- `console.log(str.slice(0, 4)); // "Java"`
- `console.log(str.substring(0, 4)); // "Java"`
- `console.log(str.substr(0, 4)); // "Java"`

---

### Summary Table

| Hidden Truth                                     | Explanation                                                  |
|--------------------------------------------------|--------------------------------------------------------------|
| Strings are immutable                            | Strings cannot be changed once created.                      |
| `.length` counts code units                      | Length might not match the visual character count for emojis. |
| Strings are accessed like arrays                 | Use bracket notation or `charAt()` for character access.      |
| Strings have object methods                      | Though primitive, strings temporarily behave like objects.    |
| Template literals (`backticks`)                  | Allows multi-line strings and embedded expressions.           |
| String comparison is case-sensitive              | Convert to lower or upper case for case-insensitive comparison.|
| Escape sequences                                | Special characters like `\n`, `\t`, and `\\` can be used.     |
| `slice()`, `substring()`, `substr()` differ      | Three ways to extract substrings, each with different rules.  |
| `split()` creates arrays                         | Splits string into an array, with some quirks for empty strings.|
| Strings handle Unicode characters                | Strings support Unicode and special characters, including emojis.|
| Iteration with `for...of`                        | Safely iterates over multi-byte characters like emojis.       |
| Strings are compared lexicographically           | Strings are compared by character value and case.             |
| Strings use UTF-16 encoding                      | Some characters may take up more than one code unit.          |
