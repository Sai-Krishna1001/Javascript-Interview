###  Usage of `flat()` method:

* Some examples of `flat()` method:

  ```js
    const arr1 = [1, 2, [3, 4]];
    console.log(arr1.flat()); // [1, 2, 3, 4]
    
    const arr2 = [1, 2, [3, 4, [5, 6]]];
    console.log(arr2.flat()); // [1, 2, 3, 4, [5, 6]]
    
    const arr3 = [1, 2, [3, 4, [5, 6]]];
    console.log(arr3.flat(2)); // [1, 2, 3, 4, 5, 6]
    
    const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
    console.log(arr4.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  ```

* The `flat()` method also removes empty slots in arrays:

  ```js
    const arr5 = [1, 2, , 4, 5];
    console.log(arr5.flat()); // [1, 2, 4, 5]
    
    const array = [1, , 3, ["a", , "c"]];
    console.log(array.flat()); // [1, 3, "a", "c"]
    
    const array2 = [1, , 3, ["a", , ["d", , "e"]]];
    console.log(array2.flat()); // [1, 3, "a", ["d", empty, "e"]]
    console.log(array2.flat(2)); // [1, 3, "a", "d", "e"]
```
