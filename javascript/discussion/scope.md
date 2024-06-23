# Hypothetical Interview Scenario: JavaScript Scope

**Interviewer**: Welcome, thank you for joining us today. Let’s talk about scope in JavaScript. Can you explain the difference between function scope, block scope, and lexical scope?

**Candidate**: Sure, function scope is the scope created within a function. Block scope is created within a block, like within curly braces `{}`. Lexical scope is determined by the position of a function within the source code.

**Interviewer**: That’s a very high-level answer. Could you dive deeper into function scope and how it differs from block scope?

**Candidate**: Well, function scope is when variables are declared inside a function, they are not accessible outside the function. Block scope is when variables declared with `let` or `const` inside a block are only accessible within that block.

**Interviewer**: Can you provide an example to illustrate this?

**Candidate**: Sure. 

```javascript
function test() {
    var x = 1;
    if (true) {
        let y = 2;
    }
    console.log(x); // 1
    console.log(y); // Error
}
test();
```
**Interviewer:** You’re right that console.log(y) will throw an error because y is block-scoped. But can you explain why var does not exhibit block scope?

**Candidate:** var is function-scoped, so it doesn't matter if it's inside a block, it will still be accessible within the entire function.

**Interviewer:** Okay, but what about var declarations within loops? Can you explain how that works?

**Candidate:** Um, var inside loops works the same way. It's function-scoped, so it will be accessible throughout the function.

**Interviewer:** That’s not entirely accurate. Variables declared with var inside loops do not get new bindings per iteration, unlike let and const. Let's move on. Can you explain what lexical scope means in more detail?

**Candidate:** Lexical scope refers to the scope determined by the physical placement of the code in the source file.

**Interviewer:** Can you provide an example of how lexical scope works?

**Candidate:** Sure, here’s a simple example:

```javascript
function outer() {
    var x = 1;
    function inner() {
        console.log(x);
    }
    inner();
}
outer();
```
**Interviewer:** That example shows lexical scope, but could you explain a bit more why it works that way?

**Candidate:** Because inner function can access variables from its outer function due to lexical scope.

**Interviewer:** Yes, but it seems you’re not explaining it fully. Lexical scope means that the scope is determined at compile time, not run time, based on the location of the function within the nested scopes. This is crucial for understanding closures. Speaking of which, how do closures relate to lexical scope?

**Candidate:** Closures are functions that retain access to their lexical scope, even when the function is executed outside that scope.

**Interviewer:** Can you provide an example?

**Candidate:** Here’s one:

```javascript
function outer() {
    var x = 1;
    return function() {
        console.log(x);
    };
}
const closure = outer();
closure();
```
**Interviewer:** Your examples are correct, but your explanations are somewhat lacking in depth and precision. Given your extensive experience, I expected a more thorough understanding and ability to explain these concepts clearly. Is there anything else you’d like to add?

**Candidate:** No, I think that covers it.

**Interviewer:** Thank you for your time. We’ll be in touch.

