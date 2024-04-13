## Question

You have an array of user objects, each containing an `id`, `name`, and `isActive` property. Write JavaScript functions to check if a user with a specific name exists in the array using various methods.

## Solutions

1. **Using a for loop**:

```javascript
function userExists(users, name) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      return true;
    }
  }
  return false;
}

