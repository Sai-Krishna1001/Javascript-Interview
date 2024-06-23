# Hypothetical Interview Scenario: Shallow Copy vs Deep Copy

**Interviewer**: Welcome, thank you for joining us today. With your 10 years of experience, I’m sure you have a deep understanding of JavaScript. Let’s discuss shallow copy and deep copy. Can you explain the difference between them?

**Candidate**: Certainly. A shallow copy duplicates only the top-level structure of an object or array, while a deep copy duplicates all nested objects and arrays recursively.

**Interviewer**: That’s a good start. How would you perform a shallow copy of an object using different methods?

**Candidate**: One way is to use `Object.assign()`:

```javascript
let obj1 = { a: 1, b: { c: 2 } };
let obj2 = Object.assign({}, obj1);
```
**Interviewer:** Correct. What about another method for shallow copying an object?

**Candidate:** You can use the spread operator (...):

```javascript
let obj3 = { ...obj1 };
```
**Interviewer:** Well done. Now, can you explain how you would perform a shallow copy of an array?

**Candidate:** Sure. You can use slice() method:

```javascript
let arr1 = [1, [2, 3]];
let arr2 = arr1.slice();
```

**Interviewer:** Excellent. Moving on to deep copy, how would you achieve a deep copy of an object using different methods?

**Candidate:** One common method is using JSON.parse() and JSON.stringify():

```javascript
let obj4 = JSON.parse(JSON.stringify(obj1));
```

**Interviewer:** Good. What are the limitations of using JSON.stringify() for deep copy?

**Candidate:** It cannot handle functions, undefined values, or circular references.

**Interviewer:** Correct. What’s another method you could use for deep copying an object?

**Candidate:** You can use libraries like Lodash, which provide _.cloneDeep():

```javascript
let _ = require('lodash');
let obj5 = _.cloneDeep(obj1);
```

**Interviewer:** Great. Now, how would you perform a deep copy of an array?

**Candidate:** Similar to objects, you could use a combination of methods like JSON.parse() and JSON.stringify():

```javascript
let arr3 = JSON.parse(JSON.stringify(arr1));
```

**Interviewer:** What about using recursion for deep copying arrays?

**Candidate:** Yes, you could write a recursive function to iterate through nested arrays and objects.

**Interviewer:** Correct. Lastly, can you summarize the main differences between shallow copy and deep copy?

**Candidate:** Shallow copy creates a new object or array with references to the original nested objects, while deep copy creates new instances of all nested objects and arrays.

**Interviewer:** Very good. Understanding these concepts thoroughly is crucial for managing data structures in JavaScript applications. Is there anything else you’d like to add?

**Candidate:** No, I think that covers it.

**Interviewer:** Thank you for your explanations. We’ll be in touch.
