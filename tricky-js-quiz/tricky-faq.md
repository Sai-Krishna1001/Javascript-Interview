# Frequently asked Code Snippets in Interviews

## Closures and Loops
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Output?
  }, 1000);
}
```
### Explanation:

- Due to the var keyword, i is function-scoped and shared across all iterations.
- When the setTimeout callback runs, i has already been incremented to 3 after the loop finishes.
- The output is 3 printed three times.

### Fix with let:

```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // Output?
  }, 1000);
}
```
Now, i is block-scoped, so the output will be 0, 1, 2.
