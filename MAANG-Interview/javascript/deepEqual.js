const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };

// Shallow comparison
console.log(obj1 === obj2); // false (different memory references)

// Deep comparison
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }

  return true;
}

console.log(deepEqual(obj1, obj2)); // true

//Shallow comparison fails for objects with the same structure but different references, while deep comparison recursively checks all properties and nested objects.
