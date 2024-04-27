## Problem Statement:

### Implement a JavaScript function get(key, object) that performs a deep lookup for a specified key within a nested object. The function should return the corresponding value if the key exists at any level within the object hierarchy, or undefined if the key is not found.

## Solution: 

```js
function get(key, object) {
    // Check if the object is null or undefined
    if (object === null || object === undefined) {
        return undefined;
    }

    // Check if the key exists in the current object level
    if (key in object) {
        return object[key]; // Return the value if found
    }

    // Iterate through the object's properties
    for (const prop in object) {
        // Check if the property is an object (to handle nested objects)
        if (typeof object[prop] === 'object') {
            // Recursively search for the key in the nested object
            const nestedValue = get(key, object[prop]);
            if (nestedValue !== undefined) {
                return nestedValue; // Return the value if found in the nested object
            }
        }
    }

    // Return undefined if the key is not found in the object or its nested objects
    return undefined;
}

// Test cases
const obj = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};

const name = get("name", obj); // returns "John"
const city = get("city", obj); // returns "Anytown"
const zipCode = get("zipCode", obj); // returns undefined

console.log(name); // Output: "John"
console.log(city); // Output: "Anytown"
console.log(zipCode); // Output: undefined

``
