function flattenObject(obj, parentKey = '') {
    // Use Object.keys to get an array of the object's own enumerable property names.
    return Object.keys(obj).reduce((acc, key) => {
        // Construct a new key for the flattened object.
        // If parentKey is not empty, concatenate it with the current key using a dot.
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        
        // Check if the value of the current key is an object and not null or an array.
        if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
            // Recursively call flattenObject on the nested object.
            // Merge the result into the accumulator using Object.assign.
            Object.assign(acc, flattenObject(obj[key], newKey));
        } else {
            // If the value is not an object, assign it to the new key in the accumulator.
            acc[newKey] = obj[key];
        }
        
        // Return the accumulator for the next iteration.
        return acc;
    }, {}); // Initialize the accumulator as an empty object.
}

const nestedObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: 4
        }
    },
    g: 5
};

const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);
// Output: { 'a': 1, 'b.c': 2, 'b.d.e': 3, 'b.d.f': 4, 'g': 5 }
