
# Hidden Truths About Infinity in JavaScript

JavaScript has unique behaviors and rules for `Infinity` and `-Infinity`. These concepts often lead to surprising results when used in arithmetic, comparisons, or type coercion. Here’s a detailed guide to all the hidden truths about `Infinity`:

---

## **1. What is `Infinity`?**
- **Rule:**
  - `Infinity` represents a number that is larger than any finite number.
  - It is a special numeric value in JavaScript.

- **Examples:**
  ```javascript
  console.log(Infinity);      // Infinity
  console.log(-Infinity);     // -Infinity
  console.log(typeof Infinity); // "number"
  ```

- **Hidden Truth:**
  - `Infinity` and `-Infinity` are both of type `"number"`.

---

## **2. Division by Zero**
- **Rule:**
  - Dividing by `0` or `-0` results in `Infinity` or `-Infinity`.

- **Examples:**
  ```javascript
  console.log(1 / 0);   // Infinity
  console.log(1 / -0);  // -Infinity
  ```

- **Hidden Truth:**
  - JavaScript does not throw an error when dividing by zero.

---

## **3. Arithmetic with `Infinity`**
- **Rule:**
  - Arithmetic operations involving `Infinity` follow mathematical rules but with unique behaviors.

- **Examples:**
  ```javascript
  console.log(Infinity + 1);    // Infinity
  console.log(Infinity - 1);    // Infinity
  console.log(Infinity * 2);    // Infinity
  console.log(Infinity / 2);    // Infinity
  console.log(Infinity / Infinity); // NaN
  ```

- **Hidden Truth:**
  - `Infinity / Infinity` is not defined and results in `NaN`.

---

## **4. Comparisons with `Infinity`**
- **Rule:**
  - `Infinity` is larger than any finite number, and `-Infinity` is smaller than any finite number.

- **Examples:**
  ```javascript
  console.log(Infinity > 1e308);    // true
  console.log(-Infinity < -1e308); // true
  console.log(Infinity === Infinity); // true
  console.log(-Infinity === -Infinity); // true
  ```

- **Hidden Truth:**
  - Both `Infinity` and `-Infinity` are considered equal to themselves.

---

## **5. `Math` Methods with `Infinity`**
- **Rule:**
  - Many `Math` methods handle `Infinity` in predictable ways.

- **Examples:**
  ```javascript
  console.log(Math.max(1, 2, Infinity));  // Infinity
  console.log(Math.min(1, 2, -Infinity)); // -Infinity
  console.log(Math.sqrt(Infinity));      // Infinity
  console.log(Math.pow(2, Infinity));    // Infinity
  console.log(Math.log(Infinity));       // Infinity
  ```

- **Hidden Truth:**
  - `Math.min` and `Math.max` treat `Infinity` and `-Infinity` as extreme bounds.

---

## **6. Type Coercion with `Infinity`**
- **Rule:**
  - `Infinity` can be coerced into a string.

- **Examples:**
  ```javascript
  console.log(String(Infinity));   // "Infinity"
  console.log(Number("Infinity")); // Infinity
  console.log(Boolean(Infinity));  // true
  ```

- **Hidden Truth:**
  - `Infinity` is truthy and converts to the string `"Infinity"` when coerced.

---

## **7. `Infinity` in JSON**
- **Rule:**
  - `JSON.stringify` converts `Infinity` and `-Infinity` to `null`.

- **Examples:**
  ```javascript
  console.log(JSON.stringify(Infinity));   // "null"
  console.log(JSON.stringify(-Infinity));  // "null"
  ```

- **Hidden Truth:**
  - JSON does not support `Infinity` or `-Infinity` and replaces them with `null`.

---

## **8. Special Cases with `Infinity`**
- **Rule:**
  - Certain operations involving `Infinity` yield `NaN`.

- **Examples:**
  ```javascript
  console.log(0 * Infinity);  // NaN
  console.log(Infinity - Infinity); // NaN
  console.log(Infinity / Infinity); // NaN
  ```

- **Hidden Truth:**
  - Operations with ambiguous results involving `Infinity` result in `NaN`.

---

## **9. Summary Table**
| **Expression**              | **Output**   | **Explanation**                              |
|------------------------------|--------------|----------------------------------------------|
| `1 / 0`                     | `Infinity`   | Positive infinity when divided by zero.      |
| `1 / -0`                    | `-Infinity`  | Negative infinity when divided by negative zero. |
| `Infinity + 1`              | `Infinity`   | Adding finite numbers to `Infinity` does not change it. |
| `Infinity / Infinity`       | `NaN`        | Undefined operation results in `NaN`.        |
| `Math.max(..., Infinity)`   | `Infinity`   | `Infinity` is the upper bound.               |
| `JSON.stringify(Infinity)`  | `"null"`     | JSON does not support `Infinity`.            |

---

## **10. Best Practices**
- Avoid dividing by zero unless intentional.
- Use `isFinite()` to check if a value is finite.
- Be cautious when using `Infinity` in JSON serialization.

```javascript
console.log(isFinite(Infinity));   // false
console.log(isFinite(100));        // true
```

---

**Note:** `Infinity` and `-Infinity` are invaluable for edge cases in mathematical and logical operations but require careful handling to avoid bugs.
